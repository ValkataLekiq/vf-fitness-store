
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/woo';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) return notFound();

  const img = product.images?.[0]?.src;
  const price = product.price_html || `$${product.price}`;
  const addToCartLink = product.permalink ? `${product.permalink}?add-to-cart=${product.id}` : '#';

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="card">
        {img && (
          <Image
            src={img}
            alt={product.name}
            width={900}
            height={900}
            className="w-full h-auto rounded-xl"
            priority
          />
        )}
      </div>
      <div className="space-y-6">
        <h1 className="h1">{product.name}</h1>
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: price }} />
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: product.short_description || '' }} />
        <div className="flex gap-3">
          <Link href={addToCartLink} className="btn">Buy Now</Link>
          <Link href="/products" className="btn-outline">Continue Shopping</Link>
        </div>
        <div className="prose prose-invert max-w-none mt-6" dangerouslySetInnerHTML={{ __html: product.description || '' }} />
      </div>
    </div>
  );
}
