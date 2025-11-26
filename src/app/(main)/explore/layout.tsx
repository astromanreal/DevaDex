
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore Characters | The Deva Archives',
  description: 'Search, filter, and explore a wide range of characters from Sanatan Dharma. Discover deities, avatars, sages, and more.',
};

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
