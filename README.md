# Crossed

**Where paths cross again.**

Crossed is a privacy-first encounter memory app. It helps people save meaningful real-world encounters and reconnect later—only when both people choose.

This repository contains the **web platform**: landing page, waitlist, marketing pages, admin panel, and API routes.

---

## Tech Stack

- **Next.js 14+** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Supabase** (database + auth)
- **Resend** (email notifications, optional)
- **Vercel** (deployment)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-org/crossed.git
cd crossed
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon (public) key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only) |
| `RESEND_API_KEY` | Resend API key (optional, for email notifications) |
| `ADMIN_EMAIL` | Admin notification email (optional) |
| `NEXT_PUBLIC_SITE_URL` | Your production site URL (e.g. `https://crossedapp.co`) |

### 4. Set up the Supabase database

Run the SQL schema in your Supabase project:

1. Go to your Supabase dashboard → SQL Editor
2. Copy the contents of `supabase/schema.sql`
3. Run the SQL

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## Deployment on Vercel

### 1. Push to GitHub

Make sure your code is pushed to a GitHub repository.

### 2. Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel will auto-detect Next.js settings

### 3. Add environment variables

In the Vercel project settings, add all variables from `.env.example` with their values.

### 4. Deploy

Vercel will automatically deploy on every push to `main`.

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Landing page
│   ├── waitlist/           # Waitlist page
│   ├── about/              # About page
│   ├── features/           # Features page
│   ├── use-cases/          # Use cases page
│   ├── privacy/            # Privacy Policy
│   ├── terms/              # Terms of Service
│   ├── dashboard/          # Web dashboard (placeholder)
│   ├── admin/              # Admin panel
│   └── api/                # API routes
│       ├── waitlist/       # POST /api/waitlist
│       ├── contact/        # POST /api/contact
│       └── admin/          # Protected admin routes
│           ├── waitlist/   # GET /api/admin/waitlist
│           └── export/     # GET /api/admin/export (CSV)
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── supabase/           # Supabase client, server, auth helpers
│   └── utils.ts            # cn() utility
└── types/
    └── database.ts         # TypeScript types for Supabase schema

supabase/
└── schema.sql              # Database schema to run in Supabase
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/waitlist` | Waitlist sign-up page |
| `/about` | Product story |
| `/features` | Feature overview |
| `/use-cases` | Use cases for various audiences |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/dashboard` | Web dashboard placeholder |
| `/admin` | Admin login |
| `/admin/dashboard` | Admin waitlist management |

## API Routes

| Route | Method | Description |
|---|---|---|
| `/api/waitlist` | `POST` | Join the waitlist |
| `/api/contact` | `POST` | Contact form submission |
| `/api/admin/waitlist` | `GET` | Fetch all waitlist entries (auth required) |
| `/api/admin/export` | `GET` | Export waitlist as CSV (auth required) |

---

## Admin Panel

The admin panel at `/admin` requires Supabase authentication.

To create an admin user:
1. Go to your Supabase dashboard → Authentication → Users
2. Create a new user with email/password
3. Use those credentials to log in at `/admin`

---

## Legal Pages

The Privacy Policy and Terms of Service at `/privacy` and `/terms` are **draft templates** that require review by a qualified legal professional before the app launches publicly.

---

## Contributing

This is a private project. Contributions are by invite only.

---

## License

Proprietary. All rights reserved.
