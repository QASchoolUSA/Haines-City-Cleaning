<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Single-service **Next.js 16** marketing + booking site for **Haines City Cleaning**, deployed to Cloudflare Workers via OpenNext.

| Field | Value |
|---|---|
| Domain | `https://hainescitycleaning.com` |
| Booking Broom slug | `haines-city` |
| Worker name | `haines-city-cleaning` |

### Services

| Service | Command | Port |
|---|---|---|
| Next.js web app | `pnpm dev` | 3000 |

### Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
|---|---|
| `BOOKING_BROOM_URL` | Booking Broom base URL (e.g. `https://bookings.kedrik.com`) |
| `BOOKING_BROOM_API_KEY` | Per-site API key for slug `haines-city` |
| `BOOKING_BROOM_SITE_SLUG` | Optional; defaults to `haines-city` |
| `NEXT_PUBLIC_SITE_URL` | Production: `https://hainescitycleaning.com` |
| `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` | Optional outbox escalate (Worker secrets in prod) |

Bookings/quotes forward via `POST /api/book` → Booking Broom `/api/bookings`. Soft-fallback uses KV `BOOKING_OUTBOX` + cron in `worker.ts`.

### Non-obvious notes

- `pnpm lint` may report pre-existing warnings; do not treat as setup failure unless introduced by your change.
- `pnpm build` uses OpenNext for Cloudflare; `pnpm build:next` is plain Next.js build for local verification.
- Before enabling outbox soft-fallback: create a KV namespace named for this Worker **in the same Cloudflare account as Workers Builds**, bind it as `BOOKING_OUTBOX` in `wrangler.jsonc`, and set `BOOKING_BROOM_API_KEY` as a Worker secret.
- `worker.ts` imports outbox from `./src/lib/booking-outbox` (this repo uses a `src/` layout).
