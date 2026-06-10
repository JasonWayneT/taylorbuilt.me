# Portfolio Cleanup — Implementation Plan
**Status:** Ready to execute  
**Approach:** Moderate professional polish pass (Option B from audit)  
**Do not:** Rewrite pages, change copy, add new dependencies, redesign layouts  
**Project path:** `C:\Users\Jason\Desktop\Jason\Resource\CodeProjects\Portfolio Website`

---

## Confirmed Decisions
- Jamaican color accents removed for now. Roadmap item saved separately. Replace with `text-primary`.
- No headshot. Intentional.
- Font class mixing (font-h2 text-h3 etc.) — NOT touching. Visual impact too low, reflow risk too high.
- "Lab Project" overlay badges — NOT touching. Different visual purpose from CategoryBadge.
- Work.jsx header link — NOT touching. Different hover semantics from TextLink.
- Unused dependencies confirmed safe to remove (zero imports): framer-motion, mammoth, pdfjs-dist, react-to-print, react-icons, react-markdown.
- @google/genai: keep — used in api/job-agent/* routes.

---

## Phase 1 — Safety Baseline

**Objective:** Confirm the site builds and runs cleanly before touching anything.

**Files affected:** None. Read-only checks.

**Steps:**
1. Open terminal in the project root
2. Run `npm run build` — must pass with zero errors
3. Run `npm run lint` — note any pre-existing warnings (do not fix them here)
4. Run `npm run preview` and open the local URL
5. Navigate to: `/`, `/work`, `/about`, `/contact`, `/resume`, `/work-history`, `/case-study/bellwether`
6. Confirm all pages load without blank screens or console errors

**What to avoid:** Do not fix anything in this phase. This is a read-only baseline.

**Risks:** None.

**Definition of done:**
- [ ] `npm run build` exits with no errors
- [ ] All 7 routes load in preview
- [ ] No new console errors introduced (pre-existing ones noted but not fixed here)

---

## Phase 2 — Design System Consistency

**Objective:** Normalize the visual tokens that appear inconsistently across the site. This is the highest-impact phase for recruiter/hiring-manager polish.

**Files affected:**
- `src/index.css`
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/CaseStudy.jsx`
- `src/pages/WorkHistory.jsx`
- `src/pages/Work.jsx` (metrics panel only)
- `tailwind.config.js`
- `src/data/user_info.js`

### 2a — Remove jamaican-gradient-text

**In `src/index.css`:** Delete this entire block:
```css
@layer utilities {
  .jamaican-gradient-text {
    @apply text-green-600;
  }
}
```

**In `src/pages/Home.jsx` line 18:** Change:
```jsx
<span className="jamaican-gradient-text">Deliver global scale.</span>
```
To:
```jsx
<span className="text-primary">Deliver global scale.</span>
```

**In `src/pages/About.jsx` line 8:** Change:
```jsx
<span className="jamaican-gradient-text">not just features.</span>
```
To:
```jsx
<span className="text-primary">not just features.</span>
```

**Verify:** Both hero headlines still have an accented word. Now in primary blue instead of green.

---

### 2b — Normalize section top padding

The design system defines `section-padding: 80px`. Pages should open consistently.

**In `src/pages/CaseStudy.jsx` line 155:** Change:
```jsx
<article className="w-full max-w-4xl mx-auto px-8 py-24">
```
To:
```jsx
<article className="w-full max-w-4xl mx-auto px-8 py-section-padding">
```

**In `src/pages/WorkHistory.jsx` line 5:** Change:
```jsx
<div className="w-full max-w-4xl mx-auto px-8 py-24">
```
To:
```jsx
<div className="w-full max-w-4xl mx-auto px-8 py-section-padding">
```

**Do not change:** Home.jsx hero (`py-24 md:py-32`) — intentionally breathes more. Work, About, Contact — already use `py-section-padding`.

**Verify:** Navigate to CaseStudy (any) and WorkHistory. Top padding matches the rhythm of Work, About, and Contact pages.

---

### 2c — Normalize card border-radius

Home.jsx uses `rounded-3xl` for enterprise and AI lab cards. Every other card on the site uses `rounded-2xl`. Normalize Home to match.

**In `src/pages/Home.jsx`:** Find and replace all `rounded-3xl` with `rounded-2xl`.  
There are exactly 4 instances (Bellwether card, Migration card, Applyr card, KinBridge card).  
Run a search in the file first to confirm count before replacing.

**Do not change:** Any `rounded-full` (badge pills), `rounded-lg`, `rounded-xl` (buttons), `rounded-2xl` that already exists. Only change `rounded-3xl`.

**Verify:** Home page. Enterprise and AI Lab cards have the same radius as Work page cards.

---

### 2d — Normalize color tokens in Work.jsx metrics panel

The Bellwether metrics panel uses raw Tailwind grays instead of design system tokens.

**In `src/pages/Work.jsx` lines 48–64** (the 4-card metrics grid inside the Bellwether card):

Change each metric card from:
```jsx
<div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
```
To:
```jsx
<div className="bg-surface-container-low p-4 rounded-xl border border-border-subtle">
```

There are 4 of these cards. Change all 4.

**Do not change:** Any other gray usage in Work.jsx. Only the Bellwether metrics panel.

**Verify:** Work page, Bellwether card metrics panel. Background and border are consistent with card surfaces elsewhere on the site. May be a very subtle color shift — visually acceptable.

---

### 2e — Remove dead configuration and data

**In `tailwind.config.js` line 7:** Delete the line:
```js
darkMode: "class",
```

**In `src/data/user_info.js` line 7:** Delete the line:
```js
resumeUrl: "#" // Placeholder for now
```
(Confirm first with a codebase grep that `resumeUrl` is not referenced anywhere in `src/`)

**Verify:** `npm run build` still passes. No console errors.

---

**Phase 2 Definition of Done:**
- [ ] No instance of `jamaican-gradient-text` in any file
- [ ] Hero accent words on Home and About render in primary blue
- [ ] CaseStudy and WorkHistory top padding matches Work/About/Contact
- [ ] Home.jsx contains no `rounded-3xl`
- [ ] Work.jsx Bellwether metrics panel uses `bg-surface-container-low` and `border-border-subtle`
- [ ] `darkMode: "class"` removed from tailwind.config.js
- [ ] `resumeUrl` removed from user_info.js
- [ ] `npm run build` passes

---

## Phase 3 — Shared Component Consistency

**Objective:** Ensure shared button styles and components are used consistently instead of inline duplicates.

**Files affected:**
- `src/pages/WorkHistory.jsx`
- `src/pages/CaseStudy.jsx`
- `src/pages/Work.jsx`

### 3a — Import buttonStyles in WorkHistory.jsx

**In `src/pages/WorkHistory.jsx`:** Add import at the top:
```jsx
import { primaryBtn, secondaryBtn } from '../components/ui/buttonStyles';
```

**Lines 122–125:** Replace hardcoded button classes:
```jsx
<Link to="/resume" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-accent-hover transition-colors no-underline">
  View Resume
</Link>
<Link to="/contact" className="bg-white border border-border-subtle text-text-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-gray-50 transition-colors no-underline">
  Contact Me
</Link>
```
With:
```jsx
<Link to="/resume" className={primaryBtn}>View Resume</Link>
<Link to="/contact" className={secondaryBtn}>Contact Me</Link>
```

---

### 3b — Import buttonStyles in CaseStudy.jsx 404 state

**In `src/pages/CaseStudy.jsx`:** Confirm `primaryBtn` is already imported at the top (it is — line 4). 

**Line 147:** Replace hardcoded class:
```jsx
<Link to="/work" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-accent-hover transition-colors no-underline">
  Back to Work
</Link>
```
With:
```jsx
<Link to="/work" className={primaryBtn}>Back to Work</Link>
```

---

### 3c — Remove inline list styles in Work.jsx

**In `src/pages/Work.jsx`:** Find all three `style={{ listStyle: 'none' }}` on `<ul>` elements (lines 181, 191, 201).

For each, remove the `style` prop and add `list-none` to the existing `className`.

Before:
```jsx
<ul className="space-y-4 text-text-secondary font-body-md p-0 m-0" style={{ listStyle: 'none' }}>
```
After:
```jsx
<ul className="list-none space-y-4 text-text-secondary font-body-md p-0 m-0">
```

There are exactly 3 instances. Change all 3.

**Verify:** Work page Capability Matrix. List items display correctly (no bullet points).

---

### 3d — Extract liveUrl helper in CaseStudy.jsx

**In `src/pages/CaseStudy.jsx`:** After the `BulletList` function definition (around line 31), add a helper function:

```jsx
function LiveProjectButton({ url }) {
  const isExternal = url.startsWith('http') || url.endsWith('.html');
  if (isExternal) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-manrope font-bold hover:bg-accent-hover transition-colors no-underline">
        Visit Live Project
        <span className="material-symbols-outlined text-sm">north_east</span>
      </a>
    );
  }
  return (
    <Link to={url}
      className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-manrope font-bold hover:bg-accent-hover transition-colors no-underline">
      Launch Project App
      <span className="material-symbols-outlined text-sm">arrow_forward</span>
    </Link>
  );
}
```

**Then replace both duplicated liveUrl blocks** (lines 171–187 in the header, lines 229–242 in the footer) with:
```jsx
{project.liveUrl && <LiveProjectButton url={project.liveUrl} />}
```

**Verify:** KinBridge case study (only project with a liveUrl). Live project button appears in both the header section and the footer section. Both render identically.

---

**Phase 3 Definition of Done:**
- [ ] WorkHistory.jsx footer buttons use imported `primaryBtn`/`secondaryBtn`
- [ ] CaseStudy.jsx 404 state uses imported `primaryBtn`
- [ ] Work.jsx has no `style={{ listStyle: 'none' }}` — all three replaced with `list-none`
- [ ] CaseStudy.jsx liveUrl logic exists in one place (`LiveProjectButton` helper)
- [ ] KinBridge case study live button renders correctly in header and footer
- [ ] `npm run build` passes

---

## Phase 4 — Page-by-Page Polish

**Objective:** Fix the remaining page-specific issues that affect professional appearance and recruiter experience.

**Files affected:**
- `src/pages/About.jsx`
- `src/pages/Work.jsx`
- `src/pages/Contact.jsx`

### 4a — About.jsx: Fix blue body text

**In `src/pages/About.jsx` line 10:** The opening paragraph has `text-primary font-medium`, making 18px body text appear in primary blue.

Change:
```jsx
<p className="font-body-lg text-body-lg text-primary font-medium mb-0 leading-relaxed">
```
To:
```jsx
<p className="font-body-lg text-body-lg text-text-primary font-semibold mb-0 leading-relaxed">
```

**Verify:** About page. Opening paragraph reads in dark text. Emphasis is conveyed by weight, not color.

---

### 4b — Work.jsx: Fix section spacing anomaly

**Line 171** — The `mt-32` before System Expertise creates a 128px gap that breaks the page rhythm.

Change:
```jsx
<section className="mt-32">
```
To:
```jsx
<section className="mb-24 pt-16 border-t border-border-subtle">
```
(This matches the visual pattern of the Strategic Execution section which uses `py-16 border-t border-border-subtle`, and the `mb-24` provides consistent spacing after it.)

Actually: look at the current section sequence on Work.jsx before making this change. The Strategic Execution section immediately follows System Expertise with `mb-24 py-16 border-t`. If you add `mb-24 pt-16 border-t` to System Expertise too, you get two sections in a row with top borders. Instead:

Change:
```jsx
<section className="mt-32">
```
To:
```jsx
<section className="mb-24">
```

The preceding AI Lab section ends with `mb-24`. The gap between them will be 96px total (two 48px margins collapse in standard block layout) — consistent with the rest of the page.

**Verify:** Work page. Scroll from AI Lab section to System Expertise. Gap is proportional.

---

### 4c — Work.jsx: Fix Security & Uptime card responsive columns

**Line 91:** The card is `col-span-12 md:col-span-6 lg:col-span-12` — half-width at tablet, full-width everywhere else. This is almost certainly unintentional.

Change:
```jsx
<div className="col-span-12 md:col-span-6 lg:col-span-12 group">
```
To:
```jsx
<div className="col-span-12 group">
```

**Verify:** Work page at tablet width (768px in DevTools). Security & Uptime card is full-width.

---

### 4d — Work.jsx: Remove extra margin on Applyr card wrapper

**Line 123:** The Applyr card wrapper has `mb-8` inside a `gap-gutter` grid. The grid gap already handles spacing between rows.

Change:
```jsx
<div className="col-span-12 group mb-8">
```
To:
```jsx
<div className="col-span-12 group">
```

**Verify:** Work page. Spacing between Applyr and KinBridge cards is even and matches the grid gap.

---

### 4e — Contact.jsx: Fix success state language

**In `src/pages/Contact.jsx` lines 52–55:** The current success state says "Message sent!" which is false if the mail client didn't open.

Replace the success state content:
```jsx
<div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
  <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
  <h3 className="font-h3 text-h3 text-text-primary">Message sent!</h3>
  <p className="text-text-secondary">Your mail client should have opened. If it didn't, email me directly at <a href="mailto:Jason.Wayne.T@gmail.com" className="text-primary hover:underline">Jason.Wayne.T@gmail.com</a>.</p>
</div>
```
With:
```jsx
<div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
  <span className="material-symbols-outlined text-4xl text-primary">mail</span>
  <h3 className="font-h3 text-h3 text-text-primary">Your email client should have opened.</h3>
  <p className="text-text-secondary">If it didn't open, reach me directly at <a href="mailto:Jason.Wayne.T@gmail.com" className="text-primary hover:underline">Jason.Wayne.T@gmail.com</a>.</p>
</div>
```

**Verify:** Submit the contact form. Success state accurately describes what happened.

---

**Phase 4 Definition of Done:**
- [ ] About.jsx opening paragraph is in dark text (not blue)
- [ ] Work.jsx System Expertise section has no disproportionate top gap
- [ ] Work.jsx Security & Uptime card is full-width at all breakpoints
- [ ] Work.jsx Applyr and KinBridge cards have even spacing
- [ ] Contact.jsx success state does not say "Message sent!"
- [ ] `npm run build` passes

---

## Phase 5 — Responsive and Mobile Polish

**Objective:** Improve the site experience on small screens. Focused on the h1 size and mobile nav behavior.

**Files affected:**
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Work.jsx`
- `src/pages/Contact.jsx`
- `src/pages/CaseStudy.jsx`
- `src/pages/WorkHistory.jsx`
- `src/components/Navigation.jsx`

### 5a — Add responsive h1 sizing

The custom `text-h1` token is 48px at all breakpoints. On mobile (375px), 48px headlines are too large.

**Target pattern:** `text-4xl md:text-h1` — 36px on mobile, 48px on md+.

**In every page that has `text-h1` on an h1 element**, update the class. The affected lines are:

- `Home.jsx:16` — `text-h1` → `text-4xl md:text-h1`
- `About.jsx:6` — `text-h1` → `text-4xl md:text-h1`
- `Work.jsx:12` — `text-h1` → `text-4xl md:text-h1`
- `Contact.jsx:21` — `text-h1` → `text-4xl md:text-h1`
- `WorkHistory.jsx:7` — `text-h1` → `text-4xl md:text-h1`
- `CaseStudy.jsx:166` — `text-h1` → `text-4xl md:text-h1`

**Important:** Do NOT remove the `<br />` tags in Home.jsx, About.jsx, and Contact.jsx hero headlines. They create intentional line breaks and work correctly at the smaller mobile size.

**Verify at 375px viewport in DevTools:** Hero headlines on each page are readable and not overflowing. Line breaks from `<br />` create natural-looking splits at 36px.

---

### 5b — Add body scroll lock to mobile navigation

**In `src/components/Navigation.jsx`:** The existing `useEffect` handles keyboard close. Extend it to also manage body scroll.

Replace the existing `useEffect` block:
```jsx
useEffect(() => {
  if (!menuOpen) return;
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setMenuOpen(false);
  };
  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, [menuOpen]);
```

With:
```jsx
useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  if (!menuOpen) return;
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setMenuOpen(false);
  };
  document.addEventListener('keydown', handleKeyDown);
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = '';
  };
}, [menuOpen]);
```

**Verify at mobile viewport:** Open hamburger menu. Try to scroll page content behind it. Should not scroll. Close menu. Page scrolls normally.

---

**Phase 5 Definition of Done:**
- [ ] All h1 headings use `text-4xl md:text-h1`
- [ ] At 375px viewport, no h1 headline overflows or looks disproportionately large
- [ ] `<br />` line breaks in hero headlines still render correctly at mobile size
- [ ] Mobile nav prevents background scroll when open
- [ ] Background scroll resumes normally when menu is closed
- [ ] `npm run build` passes

---

## Phase 6 — Navigation, Links, and Mechanical QA

**Objective:** Fix routing gaps, remove unused dependencies, and confirm all links and routes are working.

**Files affected:**
- `src/App.jsx`
- `src/pages/` (new `NotFound.jsx`)
- `package.json`

### 6a — Add 404 page and catch-all route

**Create `src/pages/NotFound.jsx`:**
```jsx
import { Link } from 'react-router-dom';
import { primaryBtn, secondaryBtn } from '../components/ui/buttonStyles';

export default function NotFound() {
  return (
    <div className="w-full max-w-4xl mx-auto px-8 py-section-padding text-center">
      <h1 className="font-h1 text-4xl md:text-h1 text-text-primary mb-6">Page not found.</h1>
      <p className="font-body-lg text-text-secondary mb-10 max-w-md mx-auto">
        That URL doesn't exist. Try one of these instead.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/" className={primaryBtn}>Go Home</Link>
        <Link to="/work" className={secondaryBtn}>View Work</Link>
      </div>
    </div>
  );
}
```

**In `src/App.jsx`:** Add the import and catch-all route.

Add import:
```jsx
import NotFound from './pages/NotFound';
```

Add as the last `<Route>` inside `<Routes>`:
```jsx
<Route path="*" element={<NotFound />} />
```

**Verify:** Navigate to `/anything-invalid` in browser. 404 page renders with working nav and links.

---

### 6b — Remove unused production dependencies

All 6 packages confirmed unused (zero imports in src/ or api/):
- `framer-motion`
- `mammoth`
- `pdfjs-dist`
- `react-to-print`
- `react-icons`
- `react-markdown`

**Run:**
```
npm uninstall framer-motion mammoth pdfjs-dist react-to-print react-icons react-markdown
```

Then immediately:
```
npm run build
```

If build fails, add back the specific package that caused the failure and investigate. Each package removal is safe to reverse individually.

**Verify:** Build passes. Check bundle size is reduced. Navigate to all 7 routes in preview — no errors.

---

**Phase 6 Definition of Done:**
- [ ] `/anything-invalid` renders the 404 page
- [ ] 404 page links to Home and Work, both work
- [ ] 6 unused packages removed from package.json
- [ ] `npm run build` passes after package removal
- [ ] All 7 site routes still load correctly in preview
- [ ] No new console errors on any page

---

## Phase 7 — Final Verification

**Objective:** Full visual and functional pass to confirm the cleanup is complete, consistent, and hasn't introduced new issues.

### Build and lint
```
npm run build
npm run lint
```
Both must pass.

### Route checklist
Navigate to each and confirm it loads:
- [ ] `/`
- [ ] `/work`
- [ ] `/about`
- [ ] `/contact`
- [ ] `/resume`
- [ ] `/work-history`
- [ ] `/case-study/bellwether`
- [ ] `/case-study/migration`
- [ ] `/case-study/applyr`
- [ ] `/case-study/kinbridge`
- [ ] `/not-a-real-page` → 404 page

### Link checklist
- [ ] Nav: Home, Work, About, Resume, Contact all route correctly
- [ ] Footer: LinkedIn (opens tab), GitHub (opens tab), Work History, Resume, Email
- [ ] Home: "Explore Projects" → /work, "View Resume" → /resume
- [ ] Home: "Get in Touch" → /contact, "View Work History" → /work-history
- [ ] Home: TextLinks on Enterprise cards → case study pages
- [ ] Home: Buttons on AI Lab cards → case study pages
- [ ] KinBridge case study: live project button opens kinbridge.polsia.app
- [ ] Applyr case study: GitHub link opens repo
- [ ] CaseStudy footer: "Discuss Project" → /contact

### Desktop visual pass (1280px)
- [ ] Hero accent words on Home and About are in primary blue (not green)
- [ ] Home Enterprise and AI Lab cards use `rounded-2xl` (consistent with Work page cards)
- [ ] CaseStudy and WorkHistory open with same top padding as Work, About, Contact
- [ ] Work page: System Expertise section gap is proportional (no `mt-32` jump)
- [ ] Work page: Security & Uptime card is full-width
- [ ] Work page: Applyr and KinBridge card spacing is even
- [ ] About page: Opening paragraph is in dark text
- [ ] All buttons across site look visually consistent
- [ ] No visible blue body text anywhere

### Mobile visual pass (375px in DevTools)
- [ ] H1 headlines on all pages are 36px (readable, not overwhelming)
- [ ] `<br />` line breaks in hero headlines look natural at mobile size
- [ ] Mobile nav opens and closes correctly
- [ ] Page behind open mobile nav does not scroll
- [ ] Contact form renders correctly and full-width
- [ ] Resume page readable on mobile

### Recruiter scan test
Open the site as if you are a recruiter with 30 seconds.
- [ ] Home hero communicates PM role and specialization clearly
- [ ] Accent words in hero are primary blue — feel intentional, not broken
- [ ] "Get in Touch" button is immediately visible in nav
- [ ] Primary CTA ("Explore Projects") and secondary CTA ("View Resume") both visible without scrolling on desktop
- [ ] No green text that looks like a styling error

### Source code check
Open browser DevTools → Elements tab on the Home page.
- [ ] No class containing "jamaican" anywhere in the DOM
- [ ] No `style="list-style: none"` anywhere in the DOM

### Final definition of done
- [ ] All phase definitions of done are complete
- [ ] Build passes
- [ ] Lint passes
- [ ] No console errors on any page
- [ ] Desktop visual pass complete
- [ ] Mobile visual pass complete
- [ ] Source code check complete
- [ ] The site feels like it was built deliberately

---

## What Is NOT In This Plan (Intentional Deferrals)

These were considered and explicitly excluded:

- Font class mixing normalization (`font-h2 text-h3` etc.) — visual impact too low, reflow risk too high
- "Lab Project" overlay badge replacement — different visual purpose from CategoryBadge
- Work.jsx header narrative link → TextLink — different hover UX semantics
- `@tailwindcss/container-queries` plugin removal — no visible impact
- Per-route `<title>` management — P3, no dependency decision made yet
- Open Graph meta tags — P3
- Phone number print-only — P3
- Jamaican flag color accent design pass — roadmap item, separate design task

---

## Implementation Notes for Fresh Session

- All file reads are required before edits — do not edit blind
- Implement one phase at a time
- Run `npm run build` at the end of each phase before proceeding
- If a build fails, fix the failure before continuing to the next phase
- Do not change copy, do not add features, do not redesign layouts
- The project is at: `C:\Users\Jason\Desktop\Jason\Resource\CodeProjects\Portfolio Website`
