# Haines City Cleaning

Next.js 16 marketing + booking site for **Haines City Cleaning** (`hainescitycleaning.com`), deployed to Cloudflare Workers via OpenNext.

## Getting Started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Purpose |
|--------|---------|
| `pnpm dev` | Local Next.js dev server |
| `pnpm build` | OpenNext Cloudflare Workers bundle |
| `pnpm build:next` | Plain Next.js build (local check) |
| `pnpm preview` | Build + Wrangler local preview |
| `pnpm deploy` | Build + deploy to Cloudflare (`--keep-vars`) |
| `pnpm upload` | Non-production OpenNext upload |
| `pnpm test:booking` | Booking API smoke test |

## Deploy to Cloudflare Workers

This project uses [@opennextjs/cloudflare](https://opennext.js.org/cloudflare) to run Next.js (including `/api/book`) on Cloudflare Workers.

**Cloudflare Workers build settings:**

| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Install command | `pnpm install` |
| Build command | `pnpm build` **or** `pnpm exec opennextjs-cloudflare build` |
| Deploy command | `pnpm exec opennextjs-cloudflare deploy` (preferred) **or** `pnpm exec wrangler deploy` |
| Non-production deploy | `pnpm exec opennextjs-cloudflare upload` |

`pnpm build` runs the full OpenNext Workers bundle (via `buildCommand: "next build"` in `open-next.config.ts`). Prefer `pnpm exec opennextjs-cloudflare deploy` over bare `wrangler deploy` so the OpenNext deploy step always runs after a successful build.

**Note:** Next.js must be `>=16.2.6` for `@opennextjs/cloudflare` compatibility.

### First-time setup

1. **Booking outbox KV** — in the **same Cloudflare account as the Worker** (Workers Builds), create a namespace titled `BOOKING_OUTBOX_HAINES_CITY`. Paste its id into `wrangler.jsonc` under binding `BOOKING_OUTBOX` (the binding name must stay `BOOKING_OUTBOX`; the title is what stays unique per site):

```jsonc
"kv_namespaces": [
  {
    "binding": "BOOKING_OUTBOX",
    "id": "<id-from-BOOKING_OUTBOX_HAINES_CITY>"
  }
]
```

Without a valid id, `/api/book` still works when Booking Broom is up; failed-forward queueing is skipped.
2. Set runtime secrets (do **not** commit these):

```bash
pnpm exec wrangler secret put BOOKING_BROOM_API_KEY
pnpm exec wrangler secret put TELEGRAM_BOT_TOKEN   # optional fallback
pnpm exec wrangler secret put TELEGRAM_CHAT_ID
```

3. Deploy:

```bash
pnpm deploy
```

4. Attach custom domain `hainescitycleaning.com` to the Worker in the Cloudflare dashboard.

**Runtime vars** (`wrangler.jsonc` `vars`, non-secret):
- `BOOKING_BROOM_URL`
- Site slug hardcoded to `haines-city`
- `NEXT_PUBLIC_SITE_URL` (`https://hainescitycleaning.com`)

**Build variables** (if using Workers Builds):
- `NEXT_PUBLIC_SITE_URL` (`https://hainescitycleaning.com`)

After changing env vars, redeploy (Retry deployment or push to `main`).
