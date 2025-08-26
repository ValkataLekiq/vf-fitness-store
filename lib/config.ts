
export const WC_URL = process.env.WOOCOMMERCE_API_URL; // https://your-wp-site.com/wp-json/wc/v3
export const WC_KEY = process.env.WOOCOMMERCE_CONSUMER_KEY;
export const WC_SECRET = process.env.WOOCOMMERCE_CONSUMER_SECRET;
export const SEED_MODE = !WC_URL || !WC_KEY || !WC_SECRET;
