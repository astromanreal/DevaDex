
'use client';
import { Suspense } from 'react';
import { ExplorePageClient } from './ExplorePageClient';
import { Loader2 } from 'lucide-react';

export default function ExplorePage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
    </div>}>
      <ExplorePageClient />
    </Suspense>
  );
}
