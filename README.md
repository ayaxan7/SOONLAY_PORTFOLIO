# Soonlay Portfolio

Official portfolio website for **Soonlay** — a product development studio that builds production-ready software for founders and startups.

## About

Soonlay turns raw ideas into production-ready software. From MVP to full-scale platform, we engineer the systems your product needs to launch and grow. Trusted by founders in 5+ countries.

## Pages

- **Home** — Hero section with contact form modal and services overview
- **About** — Studio story and team information
- **Services** — Detailed breakdown of what we offer
- **Work** — Portfolio of past projects
- **Contact** — Contact form and information

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── services/
│   ├── work/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/           # Navbar, Footer, MobileMenu
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   └── ui/               # Reusable UI components
├── lib/                  # Utilities and schema
├── public/               # Static assets
└── tailwind.config.ts
```

## Contact

- Email: soonlay.tech@gmail.com
- Website: [soonlay.tech](https://soonlay.tech)
