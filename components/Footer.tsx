
export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-12 text-sm text-white/70">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} VF Fitness. All rights reserved.</p>
          <p>Powered by WooCommerce · Headless Next.js</p>
        </div>
      </div>
    </footer>
  );
}
