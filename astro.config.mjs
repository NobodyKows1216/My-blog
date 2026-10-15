// @ts-check
import { defineConfig } from 'astro/config';
import { SITE } from './src/site.config.ts';

export default defineConfig({
  site: SITE.url,
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
