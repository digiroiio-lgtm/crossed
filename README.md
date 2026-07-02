# Crossed

**Where paths cross again.**

Crossed is a privacy-first encounter memory app. Save meaningful real-world encounters and reconnect later — only when both people choose.

This repository is the **web platform**: landing page, waitlist, and marketing pages.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables are required to run the landing page locally.

---

## Production Build

```bash
npm run build
```

The build produces a fully static-compatible Next.js site with no required backend services.

---

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. No environment variables are needed for the phase 1 landing page.

### Option B — GitHub Integration

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy** — Vercel auto-detects Next.js settings

That's it. The landing page will be live in ~30 seconds.

---

## Environment Variables (Optional)

These are **not required** for the current phase. Copy `.env.example` when you're ready to add backend functionality:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Optional | Production URL for SEO metadata (e.g. `https://crossedapp.co`) |
| `NEXT_PUBLIC_SUPABASE_URL` | Future | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Future | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Future | Supabase service role key |
| `RESEND_API_KEY` | Future | Email notifications |
| `ADMIN_EMAIL` | Future | Admin notification address |

---

## Site Structure

| Route | Description |
|---|---|
| `/` | Landing page |
| `/waitlist` | Waitlist sign-up page |
| `/about` | Product story |
| `/features` | Feature overview |
| `/use-cases` | Use cases |
| `/privacy` | Privacy Policy (draft) |
| `/terms` | Terms of Service (draft) |
| `/dashboard` | Dashboard placeholder |
| `/admin` | Admin placeholder |

---

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Vercel Analytics** (auto-enabled on Vercel)

---

## Phase Roadmap

- **Phase 1 (current):** Landing page, waitlist form, marketing pages — no backend
- **Phase 2:** Supabase integration, real waitlist persistence, contact form
- **Phase 3:** Admin panel, CSV export, email notifications
- **Phase 4:** Mobile app launch, user dashboard

---

## Legal

Privacy Policy and Terms of Service at `/privacy` and `/terms` are **draft templates** and require review by a qualified legal professional before launch.

---

## License

Proprietary. All rights reserved.
