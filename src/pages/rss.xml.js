import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'My Astro Blog',
    description: 'A blog about Astro',
    site: 'http://localhost:4321',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-in</language>`,
  })
}
