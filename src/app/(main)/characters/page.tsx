
import type { Metadata } from 'next';
import { CHARACTER_TYPES, type CharacterType } from '@/lib/types';
import { CharacterTypeCard } from '@/components/character/CharacterTypeCard';

export const metadata: Metadata = {
  title: 'Character Categories | The Deva Archives',
  description: 'Browse Sanatan Dharma characters by their categories and types, such as Devas, Avatars, Rishis, and more.',
};

export default function CharacterCategoriesPage() {
  const characterTypes = CHARACTER_TYPES;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">Browse by Character Category</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Discover characters based on their classifications like Devas, Avatars, Rishis, and more.
        </p>
      </div>
      
      <section aria-labelledby="character-types-heading">
        <h2 id="character-types-heading" className="sr-only">
          Character Category List
        </h2>
        {characterTypes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {characterTypes.map((type: CharacterType) => (
              <CharacterTypeCard key={type} characterType={type} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-2xl text-muted-foreground">No character categories found.</p>
          </div>
        )}
      </section>
    </div>
  );
}
