
import { getProducts } from '@/lib/woo';
import { ProductGrid } from '@/components/ProductGrid';

export const revalidate = 60;
export default async function ProductsPage() {
  const products = await getProducts({ per_page: 48 });
  return (
    <div className="space-y-6">
      <h1 className="h1">Fitness Collection</h1>
      <p className="muted">Resistance bands, massage guns, jump ropes, smart scales, yoga mats and more.</p>
      <ProductGrid products={products} />
    </div>
  );
}
