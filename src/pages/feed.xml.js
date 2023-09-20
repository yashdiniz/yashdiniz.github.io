import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Yash Diniz - Blog',
    description: 'A blog about software dev, tech, and life.',
    site: context.site || 'http://localhost:4321',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-in</language>`,
  })
}
