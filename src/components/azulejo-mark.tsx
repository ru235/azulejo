import { cn } from "@/lib/utils";

export function AzulejoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("text-azulejo", className)}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="6" fill="currentColor" />
      <rect x="3" y="3" width="58" height="58" rx="3" fill="#fffcf6" />
      <path
        fill="currentColor"
        d="M32 8 38 26 56 32 38 38 32 56 26 38 8 32 26 26Z"
      />
      <circle cx="32" cy="32" r="5" fill="#fffcf6" />
      <path
        fill="currentColor"
        d="M12 12h6v2h-4v4h-2zm34 0h6v6h-2v-4h-4zm6 34v6h-6v-2h4v-4zm-40 6v-6h2v4h4v2z"
      />
    </svg>
  );
}

export function AzulejoBand({ className }: { className?: string }) {
  return (
    <div
      className={cn("overflow-hidden", className)}
      aria-hidden="true"
    >
      <svg viewBox="0 0 240 40" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="az-tile" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="#1e4d8c" />
            <rect x="1.5" y="1.5" width="37" height="37" fill="#163a6b" />
            <path fill="#2a62b3" d="M20 4 24 16 36 20 24 24 20 36 16 24 4 20 16 16Z" />
            <circle cx="20" cy="20" r="2.4" fill="#e4ebf6" />
          </pattern>
        </defs>
        <rect width="240" height="40" fill="url(#az-tile)" />
      </svg>
    </div>
  );
}
