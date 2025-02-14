import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

import solid from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://yashdiniz.me',
  integrations: [
    mdx(), solid(),
    sitemap(), partytown({
      config: {
        forward: ['datalayer.push'],
      }
    })
  ],
});
