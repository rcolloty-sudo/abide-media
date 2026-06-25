# Abide Media — Admin Portal Plan

Owner-only portal at `/admin` to run the business side: enquiries, clients/projects,
payments, and notes/pipeline. **Clients do not log in.** A discreet "Log in" link lives
in the footer, not the main nav.

## Stack
- **Next.js (App Router)** — same project, new `/admin` route group + `/api/admin/*`.
- **Supabase** — Postgres (data), Auth (owner login), Row-Level Security. Already your stack.
- **Resend** — keep the existing email notifications (the portal becomes the system of
  record; email stays as the instant ping).
- **Stripe** — payments/invoicing (later phase).
- **Vercel** — existing hosting; add Supabase + Stripe env vars.

## Auth (owner-only)
- Supabase Auth with **magic-link** (passwordless) email sign-in.
- **Allowlist** specific owner email(s) — only those can reach `/admin`. Everyone else is
  bounced. Enforced three ways: Next.js middleware on `/admin`, a server-side session check,
  and RLS on the tables.
- No public sign-up. No client accounts.

## How the existing forms change
The 3 API routes (`/api/contact`, `/api/services-website`, `/api/services-app`) currently
only send an email. We add one step: **insert a row into `enquiries`** (server-side, service
role) in addition to sending the email. Nothing is lost; the inbox just starts filling up.

## Data model (Supabase tables)
- **enquiries** — every form submission: `type` (contact / website_brief / app_brief),
  name, email, business, `payload` (jsonb of all fields), `status`
  (new / in_progress / won / lost / archived), `created_at`. Can be converted → client+project.
- **clients** — company/person, contact details, notes.
- **projects** — linked to a client: title, type (website/app), `stage`
  (lead / proposal / building / launched / closed), value.
- **invoices** — linked to client/project: amount, status (draft/sent/paid), Stripe IDs.
- **activity** — timeline of notes/events attached to an enquiry, client, or project.

## Build phases
- **Phase 0 — MVP (build next):** Auth + **Enquiries inbox**. Persist submissions, list view
  with filters, detail view, change status, add notes. This is the immediately useful piece.
- **Phase 1 — Clients & projects:** convert an enquiry → client + project; project pipeline
  stages; client directory.
- **Phase 2 — Notes & pipeline:** activity timeline, follow-up reminders, simple Kanban by stage.
- **Phase 3 — Payments & invoicing:** Stripe invoices + hosted payment links, paid/unpaid
  tracking, optionally a per-invoice public pay page for clients (no login needed).

## Security notes
- Service-role key **server-side only** (API routes / server actions). Browser uses the anon key.
- RLS: only the authenticated owner can read/write enquiries, clients, projects, invoices.
- `/admin` protected by middleware + session check; enquiry data never exposed publicly.

## What I'll need from you (when we build)
1. The owner email(s) to allowlist (e.g. r.colloty@gmail.com, hello@abidemediagroup.com.au).
2. A Supabase project — new one for Abide, or reuse an existing org. (I can walk you through it.)
3. A Stripe account — only for Phase 3.

## Pre-existing issues the mobile audit flagged (separate, optional fixes)
- `/privacy` and `/terms` render their own `<nav>/<main>/<footer>` inside the global ones from
  `layout.tsx` → duplicated nav/footer on those two pages.
- `var(--border)` is referenced in the three forms but never defined in `globals.css`
  (only `--line` exists), so those borders fall back to default.
Both are quick fixes — say the word and I'll clean them up.
