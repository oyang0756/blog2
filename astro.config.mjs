// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://oyang0756.github.io',
  base: '/blog2',
  integrations: [mdx(), sitemap()],
  vite: {
    // @ts-expect-error — Tailwind 4 Vite plugin 类型与 Astro 5 当前不兼容,运行时正常
    plugins: [tailwindcss()],
  },
});