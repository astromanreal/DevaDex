
import { InteractiveTimeline } from '@/components/timeline/InteractiveTimeline';
import { getAllCharacters } from '@/data/characters';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Character Timeline | The Deva Archives',
  description: 'Explore Sanatan Dharma characters across different Yugas (eras).',
};

export default function TimelinePage() {
  const characters = getAllCharacters();
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">Character Timeline</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Visualize the appearance of characters across the cosmic cycles of Yugas.
        </p>
      </div>
      <InteractiveTimeline characters={characters} />
    </div>
  );
}
