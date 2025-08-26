
import Link from 'next/link';
import Image from 'next/image';

export function ProductCard({ product }: { product: any }) {
  const img = product.images?.[0]?.src;
  return (
    <Link href={`/products/${product.slug}`} className="card block">
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-white/10">
        {img && (
          <Image
            src={img}
            alt={product.name}
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>
        <div className="text-white/80" dangerouslySetInnerHTML={{ __html: product.price_html || '' }} />
      </div>
    </Link>
  );
}
