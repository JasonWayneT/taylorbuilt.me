# taylorbuilt.me

> Jason Taylor's product management portfolio — case studies, work history, and resume for a systems-minded PM specializing in legacy platform stabilization, data integrity, and migration strategy.

Live at **[taylorbuilt.me](https://taylorbuilt.me)**

---

## What This Is

A portfolio site built to give hiring managers and recruiters a fast read on who I am as a PM and what I've shipped. The site leads with the problems I've solved — legacy platform stabilization, complex migrations, data integrity under constraint — and backs each case study with specifics: metrics, constraints, and decisions made.

**What this is not:**
- A generic template portfolio — the content and positioning are specific to my background
- A product you install and use — it's a static site, just browse it

---

## Status

| Field | Value |
|---|---|
| **Phase** | Production |
| **Stability** | Live and maintained |
| **URL** | [taylorbuilt.me](https://taylorbuilt.me) |
| **Last updated** | June 2026 |

---

## Pages

| Page | Purpose |
|---|---|
| `/` | Hero + positioning, key metrics, featured projects |
| `/work` | Project cards with role, problem, and outcome |
| `/work/:id` | Full case study — context, approach, outcome, learnings |
| `/work-history` | Full employment history in narrative form |
| `/resume` | Printable resume view |
| `/about` | Background and approach |
| `/contact` | Contact form |

---

## Running Locally

```bash
git clone https://github.com/JasonWayneT/taylorbuilt.me.git
cd taylorbuilt.me
npm install
npm run dev
```

Opens at `http://localhost:5173`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite |
| Styling | TailwindCSS |
| Routing | React Router |
| Hosting | Vercel |
| Analytics | Vercel Analytics |

---

## How This Was Built

The design system was defined first — typography, color tokens, component patterns — then content was written before any component code. Case studies were written as product narratives (problem → approach → outcome → learnings) rather than feature lists. The positioning ("systems-minded PM") was decided based on what's consistently true across all my work, not what sounds most general.

The site is deployed on Vercel with a staging branch for previewing changes before they go live.

---

## License

Private — content and design are not for reuse.
