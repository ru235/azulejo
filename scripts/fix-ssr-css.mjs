#!/usr/bin/env node
/**
 * Post-build fix: point SSR's stylesheet link at the CSS the server actually serves.
 *
 * The client and SSR Vite environments each compile `src/styles.css` and emit it
 * under a DIFFERENT content hash. Only the client environment's output lands in
 * `.output/public/assets/` (and in the static asset manifest Nitro bakes into
 * `.output/server/index.mjs`), but the SSR HTML — `__root.tsx` imports
 * `../styles.css?url` — links the SSR hash. Nothing serves that name, so the
 * first paint 404s and the page renders unstyled until hydration loads the
 * client CSS.
 *
 * Fix: rewrite every `/assets/<name>.css` reference in the server bundle that the
 * public output does not contain to the same-named published asset (matched on
 * the part before the hash). Copying the SSR file in instead would not work: it
 * would be absent from the baked manifest and still 404.
 *
 * Idempotent and non-fatal: a build that already lines up (or a future
 * Vite/Nitro that fixes this upstream) is a no-op.
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const serverDir = join(root, ".output", "server");
const publicAssets = join(root, ".output", "public", "assets");

/** Every file under `dir`, recursively. */
function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(path));
    else out.push(path);
  }
  return out;
}

/** `styles-Cqb1mRA2.css` -> `styles` (the stable part before Vite's hash). */
function assetStem(name) {
  return name.replace(/\.css$/, "").replace(/-[A-Za-z0-9_-]{6,}$/, "");
}

if (!existsSync(serverDir) || !existsSync(publicAssets)) {
  console.log("[fix-ssr-css] no build output — nothing to do.");
  process.exit(0);
}

const publishedCss = readdirSync(publicAssets).filter((n) => n.endsWith(".css"));
const publishedByStem = new Map(publishedCss.map((n) => [assetStem(n), n]));
const published = new Set(publishedCss);

const serverFiles = walk(serverDir).filter((f) => /\.(mjs|js|json)$/.test(f));

// CSS names the server bundle references but the public output does not have.
const dangling = new Set();
for (const file of serverFiles) {
  for (const m of readFileSync(file, "utf8").matchAll(/\/assets\/([A-Za-z0-9._-]+\.css)/g)) {
    if (!published.has(m[1])) dangling.add(m[1]);
  }
}

if (dangling.size === 0) {
  console.log("[fix-ssr-css] every referenced stylesheet is published — nothing to do.");
  process.exit(0);
}

const rewrites = new Map();
const unmatched = [];
for (const name of dangling) {
  const replacement = publishedByStem.get(assetStem(name));
  if (replacement) rewrites.set(name, replacement);
  else unmatched.push(name);
}

let patched = 0;
for (const file of serverFiles) {
  const before = readFileSync(file, "utf8");
  let after = before;
  for (const [from, to] of rewrites) after = after.replaceAll(from, to);
  if (after !== before) {
    writeFileSync(file, after);
    patched += 1;
  }
}

for (const [from, to] of rewrites) console.log(`[fix-ssr-css] ${from} -> ${to}`);
if (unmatched.length > 0) {
  // Not fatal: the client bundle still loads its own CSS after hydration. Loud
  // enough to notice in build logs if the asset layout changes again.
  console.warn(`[fix-ssr-css] WARNING: no published match for: ${unmatched.join(", ")}`);
}
console.log(`[fix-ssr-css] done — ${patched} server file(s) patched.`);
