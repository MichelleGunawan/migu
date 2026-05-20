# Migu

A modern, production-ready web application built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org/) — App Router |
| Language | [TypeScript 5](https://www.typescriptlang.org/) — strict mode |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Linting | [ESLint 9](https://eslint.org/) + [Prettier](https://prettier.io/) |
| Git Hooks | [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged) |
| Deployment | [Vercel](https://vercel.com/) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/MichelleGunawan/migu.git
cd migu

# 2. Install dependencies
npm install

# 3. Copy env file and fill in values
cp .env.example .env.local

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
migu/
├── app/                # Next.js App Router — pages, layouts, API routes
│   ├── layout.tsx      # Root layout (fonts, metadata, providers)
│   ├── page.tsx        # Home page
│   └── globals.css     # Tailwind base styles
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Shared utilities and helpers
│   └── utils.ts        # cn() helper and misc utilities
├── services/           # External API / data-fetching logic
├── styles/             # Global CSS beyond Tailwind
├── types/              # Shared TypeScript types and interfaces
└── public/             # Static assets (images, fonts, icons)
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:3000` |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Lint all files with ESLint |
| `npm run lint:fix` | Lint and auto-fix all fixable issues |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run typecheck` | Run TypeScript compiler check |

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_APP_URL` | Public base URL of the app | Yes |
| `NEXT_PUBLIC_APP_NAME` | Display name of the app | Yes |

> Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.
> All other variables are server-only secrets.

### Syncing env vars with Vercel

```bash
# Push a local variable to Vercel (all environments)
vercel env add VARIABLE_NAME

# Pull all Vercel env vars to .env.local
vercel env pull .env.local
```

## Deployment

This project is deployed on Vercel. Every push to `main` triggers an automatic production deployment.

```
main branch  →  production deployment  →  migu.vercel.app
PR branch    →  preview deployment     →  migu-git-<branch>.vercel.app
```

### Manual deploy

```bash
vercel         # deploy to preview
vercel --prod  # deploy to production
```

## Development Workflow

1. Create a feature branch off `main`
2. Make your changes — Husky will run lint + typecheck on every commit
3. Open a PR — Vercel auto-deploys a preview URL in the PR
4. Merge to `main` — triggers production deployment automatically

## License

Private — All rights reserved.
