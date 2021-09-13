import { createClient } from 'contentful';
import { BASE_URL } from './constants';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async function getPageData(pageSlug, contentType = 'page') {
  try {
    const spaceUrl = `${BASE_URL}/${process.env.CONTENTFUL_SPACE}/entries`;
    const query = `?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=${contentType}`;
    const pageFilter = `&fields.slug=${pageSlug}`;

    const response = await fetch(`${spaceUrl}/${query}${pageFilter}`);
    const { items } = await response.json();

    const pageData = await client.getEntry(items[0].sys.id, { include: 3 });

    return pageData;
  } catch (e) {
    return console.error(e);
  }
}
