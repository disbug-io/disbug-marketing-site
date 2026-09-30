// @ts-check
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import {
  rehypeDisbugFigures,
  remarkDisbugContent,
} from './src/lib/remark-content.mjs';

const mode = process.env.NODE_ENV || 'development';
const env = loadEnv(mode, process.cwd(), '');

/**
 * @param {string} name
 * @param {string} fallback
 */
const publicUrl = (name, fallback) => {
  const value = env[name]?.trim() || fallback;
  const url = new URL(value);

  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new Error(`${name} must use http:// or https://`);
  }

  return url.toString().replace(/\/$/, '');
};

const site = publicUrl('PUBLIC_SITE_URL', 'https://disbug.io');
const appUrl = publicUrl('PUBLIC_APP_URL', 'https://app.disbug.io');

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkDisbugContent],
      rehypePlugins: [rehypeDisbugFigures],
    }),
  },
  redirects: {
    '/en/': '/en/blog/',
    '/terms/': '/terms-and-conditions/',
    '/login/': `${appUrl}/accounts/login/`,
    '/signup/': `${appUrl}/accounts/signup/`,
    '/fr/blog/habitudes-developpeur-web/': '/en/blog/web-developer-habits/',
    '/en/author/akil-natchimuthu-2/': '/en/blog/authors/akil-nachimuthu/',
    '/en/author/akil-natchimuthu/': '/en/blog/authors/akil-nachimuthu/',
    '/en/author/[author]': '/en/blog/authors/[author]',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
