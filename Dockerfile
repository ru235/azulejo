# Azulejo — TanStack Start + Nitro (node-server preset)
#
# `.output` is a fully bundled server (only `node:*` imports remain), so the
# runtime image needs neither node_modules nor the source tree.

FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# node-server instead of the default vercel preset (see vite.config.ts), and auth
# off: no Postgres, progress lives in the visitor's localStorage.
ENV NITRO_PRESET=node-server
ENV VITE_AUTH_ENABLED=false
RUN npm run build


FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Static assets are already inside .output/public — nothing else to copy.
COPY --from=builder /app/.output ./.output

# Run unprivileged (the node image ships a `node` user).
USER node

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
