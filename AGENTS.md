# AGENTS.md

## Cursor Cloud specific instructions

This repository is a single **Next.js 16 / React 19** marketing website ("Haines City Cleaning") managed with **npm**. The marketing pages are fully static/self-contained, but the booking flow talks to a separate central admin service (see below). `npm install` is handled by the startup update script.

### Services

| Service | Command | Port | Notes |
|---|---|---|---|
| Next.js web app | `npm run dev` | 3000 | The only service in this repo. Standard scripts (`dev`, `build`, `start`, `lint`) live in `package.json`. |

### Booking → Booking Broom (non-obvious)

This app's `/api/book` route (`src/app/api/book/route.ts`) **forwards bookings to a central "Booking Broom" admin app** (a separate repo) via two env vars:

- `BOOKING_BROOM_URL` — base URL of a running Booking Broom instance (e.g. `http://localhost:3000`)
- `BOOKING_BROOM_API_KEY` — this site's dev API key: `bb_haines-city_dev_key`

These belong in `.env.local` (gitignored). Without them, browsing still works, but any booking submission that hits `/api/book` fails because it can't reach Booking Broom.

To exercise the full booking flow locally:
1. Start the Booking Broom app (its own repo documents its Convex + Next.js startup). It runs on port 3000 and seeds a `haines-city` site.
2. Create `.env.local` here with `BOOKING_BROOM_URL=http://localhost:3000` and `BOOKING_BROOM_API_KEY=bb_haines-city_dev_key`.
3. Run this app on a different port (e.g. `PORT=3002 npm run dev`) so it doesn't collide with Booking Broom on 3000.
4. A `POST /api/book` (from the UI or curl) then creates a booking that appears on the Booking Broom dashboard in real time.

### Lint

`npm run lint` currently passes. It may print a `baseline-browser-mapping` "data is over two months old" notice — that is informational, not an error.
