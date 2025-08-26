
import { WC_URL, WC_KEY, WC_SECRET, SEED_MODE } from './config';

async function wcFetch(path: string, params: Record<string, any> = {}) {
  if (!WC_URL || !WC_KEY || !WC_SECRET) throw new Error('WooCommerce env vars are missing');
  const url = new URL(path, WC_URL);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
  });
  const res = await fetch(url.toString(), {
    headers: { Authorization: 'Basic ' + Buffer.from(`${WC_KEY}:${WC_SECRET}`).toString('base64') },
    next: { revalidate: 60 }
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`WooCommerce API error ${res.status}: ${text}`);
  }
  return res.json();
}

async function seedFetch() {
  const data = await import('../public/seed-products.json');
  return data.default || data;
}

export async function getProducts({ per_page = 48 } = {}) {
  if (SEED_MODE) {
    const items = await seedFetch();
    return items.slice(0, per_page);
  }
  return wcFetch('/products', { status: 'publish', per_page, orderby: 'date', order: 'desc' });
}

export async function getFeaturedProducts(perPage = 8) {
  if (SEED_MODE) {
    const items = await seedFetch();
    return items.filter((p: any) => p.featured).slice(0, perPage);
  }
  return wcFetch('/products', { featured: true, status: 'publish', per_page: perPage });
}

export async function getProductBySlug(slug: string) {
  if (SEED_MODE) {
    const items = await seedFetch();
    return items.find((p: any) => p.slug === slug) || null;
  }
  const items = await wcFetch('/products', { slug, status: 'publish', per_page: 1 });
  return items?.[0] || null;
}
