
import { CharacterProfile } from '@/components/character/CharacterProfile';
import { getCharacterById } from '@/data/characters';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

interface CharacterPageProps {
  params: { id: string };
}

export async function generateMetadata(
  { params }: CharacterPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const character = getCharacterById(params.id);
  const previousTitle = (await parent).title?.absolute || 'The Deva Archives';

  if (!character) {
    return {
      title: `Character Not Found | ${previousTitle}`,
    };
  }

  return {
    title: `${character.name.english} | ${previousTitle}`,
    description: character.significance.substring(0, 160), // Keep it concise for meta description
  };
}


export default function CharacterPage({ params }: CharacterPageProps) {
  const character = getCharacterById(params.id);

  if (!character) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Character Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The character you are looking for does not exist in our encyclopedia.
        </p>
        <Link href="/" passHref>
          <Button variant="default">Return to Character List</Button>
        </Link>
      </div>
    );
  }

  return <CharacterProfile character={character} />;
}

// This function is optional if you want to statically generate paths at build time
// For a large encyclopedia, it might be better to fetch data dynamically or use ISR
export async function generateStaticParams() {
  // In a real app, fetch all character IDs
  // const characters = getAllCharacters();
  // return characters.map((character) => ({
  //   id: character.id,
  // }));
  // For now, returning an empty array to avoid build errors if getAllCharacters() is not available at build time yet
  // And to demonstrate dynamic rendering on demand. If you have few characters, you can list them.
  return []; 
}
