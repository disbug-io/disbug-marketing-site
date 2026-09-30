# Disbug Marketing Site

Public marketing and content website for Disbug, built with Astro. The Django
`disbug_v2` project remains responsible for authentication, onboarding, the
dashboard, and APIs.

## Migrated routes

- Landing page, pricing, contact, about, affiliate, and legal pages
- Blog index, pagination, 206 posts, topic archives, and author archives
- 21 `/en/app/` and `/en/apps/` SEO directory pages
- Legacy marketing redirects, sitemap, robots.txt, and a custom 404 page

Content lives in `src/content/` and its images retain the existing `/static/`
paths under `public/static/` to avoid breaking published URLs.

## Local development

```sh
npm install
npm run dev
```

Astro automatically loads `.env.development` in local development:

```dotenv
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_APP_URL=http://localhost:8000
```

This makes canonical URLs point to the local Astro server and login, signup, and
dashboard links point to a local Django server. To override either value on one
machine, create an ignored `.env.development.local` file.

The development server runs in the background. Manage it with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## Production configuration

Production builds automatically load the checked-in `.env.production` defaults:

```dotenv
PUBLIC_SITE_URL=https://disbug.io
PUBLIC_APP_URL=https://app.disbug.io
```

Set the same variables in the deployment platform's build environment so that
the deployment configuration is explicit and can override these defaults. Host
environment variables take precedence over `.env.production`.

Both values are public and embedded into the generated site at build time, so a
configuration change requires a new production build. `PUBLIC_SITE_URL` controls
canonical URLs, sitemap URLs, SEO metadata, and marketing links.
`PUBLIC_APP_URL` controls login, signup, dashboard, and Django redirect URLs.

Build and preview the production site with:

```sh
npm run build
npm run preview
```

## Validation

```sh
npm run format:check
npm run check
npm run build
```

The production output is generated in `dist/`.

## Structure

```text
public/static/       Migrated public images and favicons
src/components/      Shared navigation, footer, cards, and content layouts
src/content/         Marketing, blog, and SEO Markdown collections
src/layouts/         SEO-aware page shell
src/pages/           Astro routes
src/styles/          Tailwind and shared design styles
```
