// @ts-check
import { defineConfig } from 'astro/config';
import { SITE } from './src/site.config.ts';

export default defineConfig({
  // GitHub Pages 的项目站点发布在 /<仓库名>/ 子路径下，必须告诉 Astro
  site: SITE.url,
  base: SITE.base,
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
