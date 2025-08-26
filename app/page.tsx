
import Link from 'next/link';
import { getFeaturedProducts } from '@/lib/woo';
import { ProductGrid } from '@/components/ProductGrid';

export default async function HomePage() {
  const featured = await getFeaturedProducts(8);
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-16 shadow-2xl">
        <div className="max-w-3xl space-y-6">
          <h1 className="h1">Train smarter. Recover faster.</h1>
          <p className="muted">
            VF Fitness is your go-to store for year-round fitness accessories. Automated supply chain. Pro-grade experience.
          </p>
          <div className="flex gap-4">
            <Link className="btn" href="/products">Shop Fitness</Link>
            <Link className="btn-outline" href="/shipping">Shipping Policy</Link>
          </div>
        </div>
      </section>
      <section>
        <h2 className="h2 mb-4">Editor’s Picks</h2>
        <ProductGrid products={featured} />
      </section>
    </div>
  );
}
