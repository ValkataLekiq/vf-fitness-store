
# VF Fitness — Headless Next.js + WooCommerce (Seeded)

This is a fully styled fitness storefront. If WooCommerce API keys are not set, it falls back to a **seeded fitness catalog** so the site looks full from day one.

## Quick Start
1) `npm install`
2) (Optional) set WooCommerce creds in `.env.local`
3) `npm run dev` → http://localhost:3000

### Connect WooCommerce later
- Enable REST API in Woo → Settings → Advanced → REST API → Add key
- Put keys in `.env.local`:
```
WOOCOMMERCE_API_URL=...
WOOCOMMERCE_CONSUMER_KEY=...
WOOCOMMERCE_CONSUMER_SECRET=...
```
- Deploy to Vercel/Netlify when ready.

### Import real products to Woo
Use the provided `fitness-woo-products.csv` in WooCommerce:
Products → Import → Upload CSV → Map columns → Run Import.
(You can edit prices, descriptions, or images any time.)

### Checkout
Product pages link to WooCommerce permalinks with `?add-to-cart=ID`.
Payments (PayPal, Viva Wallet, Revolut, Paysera) are configured in Woo.
Fulfillment runs via DSers/CJ/Zendrop once an order is paid.
