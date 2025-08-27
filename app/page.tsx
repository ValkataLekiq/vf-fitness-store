// /app/page.tsx

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

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main style={{ padding: "20px" }}>
      <h1>Welcome to VF Fitness Store</h1>
      <p>Your trusted source for fitness gear & supplements.</p>

      <h2>Featured Products</h2>
      {products.length === 0 && <p>No products found.</p>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map((p: any) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <strong>{p.name}</strong>
            <p>{p.price}€</p>
          </div>
        ))}
      </div>
    </main>
  );
}
