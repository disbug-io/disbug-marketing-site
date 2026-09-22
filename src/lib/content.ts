import { getCollection, type CollectionEntry } from 'astro:content';

export const POSTS_PER_PAGE = 12;

const dateValue = (value?: string | Date) => {
  if (!value) return 0;
  const timestamp = new Date(value).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
};

export async function getBlogPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = (await getCollection('blog')).filter(
    (post) => post.data.url !== '/en/blog/',
  );
  return posts.sort((left, right) => {
    const dateDifference =
      dateValue(right.data.published_at) - dateValue(left.data.published_at);
    if (dateDifference) return dateDifference;
    if (left.data.title < right.data.title) return 1;
    if (left.data.title > right.data.title) return -1;
    return 0;
  });
}

export function paginate<T>(
  items: T[],
  page: number,
  pageSize = POSTS_PER_PAGE,
): T[] {
  return items.slice((page - 1) * pageSize, page * pageSize);
}

export function totalPages(
  items: unknown[],
  pageSize = POSTS_PER_PAGE,
): number {
  return Math.max(1, Math.ceil(items.length / pageSize));
}

export function relatedPosts(
  current: CollectionEntry<'blog'>,
  posts: CollectionEntry<'blog'>[],
  limit = 3,
): CollectionEntry<'blog'>[] {
  const tags = new Set(current.data.tag_slugs);
  const related = posts.filter(
    (post) =>
      post.id !== current.id &&
      post.data.tag_slugs.some((tag) => tags.has(tag)),
  );
  const fallback = posts.filter(
    (post) =>
      post.id !== current.id && !related.some((item) => item.id === post.id),
  );
  return [...related, ...fallback].slice(0, limit);
}

function cleanMarkdown(value: string): string {
  return value
    .replace(/^#{1,6}\s+/, '')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function pseoDisplayBody(page: CollectionEntry<'pseo'>): string {
  let body = (page.body || '')
    .trimStart()
    .replace(/^!\[[^\]]*\]\([^)]+\)\s*/, '')
    .trimStart();
  if (page.data.type === 'pseo_apps') {
    body = body.split(/\nShow All\s*\n/, 1)[0].trimEnd();
  }

  const lines = body.split('\n');
  const normalizedTitle = page.data.title.replace(/\s+/g, ' ').trim();
  while (lines.length && !lines[0].trim()) lines.shift();
  while (lines.length) {
    const first = lines[0].replace(/^#{1,6}\s+/, '').trim();
    if (first !== normalizedTitle) break;
    lines.shift();
    while (lines.length && !lines[0].trim()) lines.shift();
  }
  return lines.join('\n').trim();
}

function contentBlocks(page: CollectionEntry<'pseo'>): string[] {
  return pseoDisplayBody(page)
    .split(/\n\s*\n/)
    .map(cleanMarkdown)
    .filter(Boolean);
}

function looksLikePrice(value: string): boolean {
  const lower = value.toLowerCase();
  return (
    lower === '0' ||
    lower === 'free' ||
    value.includes('$') ||
    lower.includes('/month') ||
    lower.includes('/ month') ||
    lower.includes('per month')
  );
}

export interface PseoAppDetails {
  creator: string;
  priceLabel: string;
  featureSummary: string;
  externalUrl: string;
  visualInitial: string;
}

export function pseoAppDetails(page: CollectionEntry<'pseo'>): PseoAppDetails {
  const blocks = contentBlocks(page);
  const first = blocks[0] || '';
  const creator =
    page.data.type === 'pseo_app' && first && !looksLikePrice(first)
      ? first
          .replace(/^by\s+/i, '')
          .replace(/^<?https?:\/\/(?:www\.)?/i, '')
          .replace(/[/>]+$/, '')
          .trim()
      : '';
  const price =
    page.data.type === 'pseo_app'
      ? blocks.slice(0, 3).find(looksLikePrice) || ''
      : '';
  const featureSummary =
    blocks.find(
      (block, index) =>
        block !== price &&
        !(index === 0 && creator) &&
        !block.endsWith(':') &&
        !block.toLowerCase().startsWith('no of users:'),
    ) || '';

  let priceLabel = price.trim();
  if (
    priceLabel.replace(/[$ ]/g, '') === '0' ||
    priceLabel.toLowerCase() === 'free'
  ) {
    priceLabel = 'Free';
  } else {
    priceLabel = priceLabel
      .replace(/\$\s+/g, '$')
      .replace(/\s*\/\s*/g, '/')
      .replace(
        /\/(Month|Year|User|Seat|Agent|Member|License|Slot|Week|Day)\b/g,
        (_, unit) => `/${unit.toLowerCase()}`,
      )
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  return {
    creator,
    priceLabel,
    featureSummary,
    externalUrl: (page.body || '').match(/\[GET IT ↗\]\(([^)]+)\)/)?.[1] || '',
    visualInitial: page.data.title.match(/[A-Za-z]/)?.[0].toUpperCase() || 'D',
  };
}
