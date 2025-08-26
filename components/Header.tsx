
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">VF Fitness</Link>
        <nav className="flex items-center gap-6">
          <Link href="/products" className="hover:underline">Shop</Link>
          <Link href="/shipping" className="hover:underline">Shipping</Link>
          <Link href="/returns" className="hover:underline">Returns</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
        </nav>
      </div>
    </header>
  );
}
