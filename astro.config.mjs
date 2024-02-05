import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://simpli11ity.github.io/selfWebsite/',
	integrations: [mdx(), sitemap()],
});
