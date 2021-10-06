import { createClient } from 'contentful';
import { BASE_URL } from './constants';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default async function getPageData(pageSlug, contentType = 'page') {
  try {
    const spaceUrl = `${BASE_URL}/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}/entries`;
    const query = `?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}&content_type=${contentType}`;
    const pageFilter = `&fields.slug=${pageSlug}`;

    const response = await fetch(`${spaceUrl}/${query}${pageFilter}`);
    const { items } = await response.json();

    const pageData = await client.getEntry(items[0].sys.id, { include: 3 });

    return pageData;
  } catch (e) {
    return console.error(e);
  }
}

export async function getPaginatedContent(contentType, skip, limit, query = {}) {
  try {
    const items = await client.getEntries({
      include: 3,
      content_type: contentType,
      skip,
      limit,
      ...query,
    });

    return items;
  } catch (e) {
    return console.error(e);
  }
}
