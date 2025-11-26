
// This can remain a server component if Header doesn't rely on client-side hooks directly for layout decisions
// If Header uses usePathname or context for dynamic rendering affecting layout, it might need to be client or structured differently.
// For now, assuming Header is client-side but its dynamic parts don't break this server layout.

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
