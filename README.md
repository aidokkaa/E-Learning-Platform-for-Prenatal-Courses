# Aura Mama — Prenatal & Postpartum Course Platform

An e-learning platform for expecting and new mothers, built for a real client: an obstetrician offering online prenatal and postpartum courses.

🔗 **Live:** [auramamaclub.com](https://www.auramamaclub.com/)

> **Status:** The platform is fully functional and deployed. Course content (videos, author photos, testimonials) is being finalized by the client, so some lessons currently show a "Video coming soon" placeholder.


---

## Features

- **Course catalog** with category filters and individual course pages (modules, lessons, pricing)
- **Authentication** with Clerk, including Google sign-in
- **Protected routes** and a personal student dashboard
- **Server-side access control** — course enrollment is checked on the server, not in the browser
- **Lesson player** in an accessible modal, with locked / available / coming-soon states
- **Free class registration form** with date and time slot selection
- **Enrollment form** with validation (React Hook Form + Zod)
- **FAQ page** with an accessible accordion and JSON-LD structured data
- Fully **responsive** design, mobile-first

## Tech Stack

| Area | Tools |
|---|---|
| Framework | Next.js (App Router), React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Auth | Clerk (Google OAuth) |
| Forms | React Hook Form, Zod |
| Icons | lucide-react |
| Deployment | Vercel |

## Technical Highlights

### Server / client component split
Pages are React Server Components that fetch data and check the user's access on the server. Interactive parts (accordion, modals, forms) are isolated in small client components, which keeps the client JavaScript bundle smaller.

### Access control
The course page reads the current user with Clerk's `currentUser()` on the server and checks enrollment through user metadata. Locked lessons are decided on the server, so access does not depend on client-side state.

### Accessibility (following WCAG 2.2 AA)
- Full keyboard navigation (Tab / Enter / Esc) across the site
- Modals use `role="dialog"`, `aria-modal`, and move focus in on open and back to the trigger on close
- Accordions expose `aria-expanded` / `aria-controls`
- Icon-only buttons have accessible names; decorative icons are hidden from screen readers
- Visible focus styles with `focus-visible`
- Color contrast checked against the 4.5:1 minimum
- Breadcrumbs with `aria-current="page"`

### SEO
- Per-page metadata with Next.js `generateMetadata`
- Open Graph previews using each course's image
- Canonical URLs
- JSON-LD `FAQPage` structured data

### Performance
- Memoization (`React.memo`, `useMemo`) and custom hooks to reduce unnecessary re-renders
- Skeleton loaders for smoother perceived loading
- Optimized images with `next/image`

## Lighthouse (mobile)

| Performance | Accessibility | Best Practices | SEO |
|:---:|:---:|:---:|:---:|
| 86 | 100 | 100 | 91 |

## Getting Started

### Prerequisites
- Node.js 18+
- A [Clerk](https://clerk.com) account (free tier is enough)

### Installation

```bash
git clone https://github.com/aidokkaa/Pregnancy-courses.git
cd Pregnancy-courses
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/            # Routes (App Router): home, courses, faq, dashboard, privacy
├── components/     # UI components (CourseAccordion, forms, header, etc.)
├── data/
│   └── courses/    # Course content: modules, lessons, prices
└── types/          # Shared TypeScript types
```

## Roadmap

- Replace placeholder content with the client's real videos, photos and testimonials
- Image `sizes` optimization to improve mobile Performance score
- Optional online payments (currently handled manually at the client's request)

---

Built by [aidokkaa](https://github.com/aidokkaa) as a freelance client project.
