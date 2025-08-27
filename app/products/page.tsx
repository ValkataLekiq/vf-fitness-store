// /products/page.tsx

export const dynamic = "force-dynamic";

async function getProducts() {
  try {
    const res = await fetch(`${process.env.WOOCOMMERCE_API_URL}/products`, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.WOOCOMMERCE_CONSUMER_KEY + ":" + process.env.WOOCOMMERCE_CONSUMER_SECRET
        ).toString("base64")}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("WooCommerce API Error:", res.status, await res.text());
      return [];
    }

    return res.json();
  } catch (err) {
    console.error("Fetch failed:", err);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Products</h1>
      {products.length === 0 && <p>No products found.</p>}
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>
            <strong>{p.name}</strong> – {p.price}€
          </li>
        ))}
      </ul>
    </div>
  );
}
