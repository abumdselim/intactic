# AGENTS.md

## Cursor Cloud specific instructions

### Project overview
This repo is a single **Next.js (Pages Router) marketing website** ("Intactic Innovations"). It is a static, self-contained front-end:
- No backend / API routes (no `pages/api`).
- No database, no auth, no required environment variables / `.env` files.
- The contact form (`components/sections/ContactSection.js`) is fully client-side: submitting it only validates input and shows a "Thank you!" success modal — it does not POST anywhere.
- External images come from hardcoded public Cloudinary/Unsplash URLs (allowlisted in `next.config.js`); they only affect visuals, not functionality.

### Running / building (standard commands, see `package.json`)
- Dev server: `npm run dev` → serves on `http://localhost:3000` (port is hardcoded via `next dev -p 3000`).
- Production build: `npm run build`; serve build with `npm start`.

### Caveats
- `next` is pinned to `13.5.6` by `package-lock.json` (the `package.json` says `"latest"`, but the lockfile governs installs). Prefer `npm install` / `npm ci` to keep that version.
- There is **no lint or test script** configured in `package.json`. Do not run `next lint` blindly — ESLint is not set up and it will attempt interactive configuration.
- Despite Prisma-related Cursor rules/skills being present in this environment, there is **no Prisma/database** in this codebase; ignore those for this repo.
