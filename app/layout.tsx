
import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'VF Fitness — Pro Dropshipping Store',
  description: 'Evergreen fitness accessories with automated fulfillment.',
  openGraph: { title: 'VF Fitness', description: 'Evergreen fitness store', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
