// @ts-check
import { defineConfig } from 'astro/config';
import remarkGithubBlockquoteAlert from 'remark-github-blockquote-alert';

// https://astro.build/config
export default defineConfig({
  site: 'https://specTr-sec.github.io',
  markdown: {
    remarkPlugins: [remarkGithubBlockquoteAlert],
    shikiConfig: {
      theme: 'dracula', 
      wrap: true,
    },
}});
