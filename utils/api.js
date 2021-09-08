import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async function getPageData(pageSlug) {
  const baseUrl = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/entries`;
  const query = `?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=page`;
  const pageFilter = `&fields.slug=${pageSlug}`;

  const response = await fetch(`${baseUrl}/${query}${pageFilter}`);
  const { items } = await response.json();

  const pageData = await client.getEntry(items[0].sys.id, { include: 3 });

  return pageData;
}
