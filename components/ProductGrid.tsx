
import { ProductCard } from './ProductCard';

export function ProductGrid({ products }: { products: any[] }) {
  if (!products?.length) return <p className="muted">No products yet. Connect WooCommerce or use the seeded catalog.</p>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (<ProductCard key={p.id} product={p} />))}
    </div>
  );
}
