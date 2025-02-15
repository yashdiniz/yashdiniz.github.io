import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://yashdiniz.me',
  integrations: [
    mdx(), solid(),
    partytown({
      config: {
        forward: ['datalayer.push'],
      }
    }),
  ],
});
