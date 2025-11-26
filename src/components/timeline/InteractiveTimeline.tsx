'use client';

import type { Character, Yuga } from '@/lib/types';
import { YUGAS } from '@/lib/types';
import { CharacterTimelineCard } from './CharacterTimelineCard';
import { Separator } from '@/components/ui/separator';
import { CalendarClock, InfinityIcon } from 'lucide-react';

interface InteractiveTimelineProps {
  characters: Character[];
}

export function InteractiveTimeline({ characters }: InteractiveTimelineProps) {
  const charactersByYuga = YUGAS.reduce((acc, yuga) => {
    acc[yuga] = characters.filter(char => char.yuga === yuga);
    return acc;
  }, {} as Record<Yuga, Character[]>);

  const allYugasCharacters = characters.filter(char => char.yuga === 'All Yugas' || !char.yuga);

  const yugaSections = YUGAS.map(yuga => ({
    title: yuga,
    icon: <CalendarClock className="h-8 w-8 mr-3 text-primary" />,
    characterList: charactersByYuga[yuga] || [],
    description: `Characters prominent or appearing in the ${yuga}.`
  }));

  const timelessSection = {
    title: 'Timeless Beings',
    icon: <InfinityIcon className="h-8 w-8 mr-3 text-accent" />,
    characterList: allYugasCharacters,
    description: 'Entities whose presence spans across all Yugas or are beyond specific timeframes.'
  };

  const sectionsToDisplay = [...yugaSections, timelessSection].filter(section => section.characterList.length > 0);

  if (sectionsToDisplay.length === 0) {
    return (
      <div className="text-center py-12">
        <InfinityIcon className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <p className="text-2xl text-muted-foreground">No characters found for any timeline category.</p>
        <p className="text-sm text-muted-foreground mt-2">The character dataset might be empty or not categorized by Yuga.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12"> {/* Adjusted section spacing */}
      {sectionsToDisplay.map((section, index) => (
          <section key={section.title} aria-labelledby={`${section.title.toLowerCase().replace(/\s+/g, '-')}-heading`} className="py-6 bg-card/50 rounded-xl shadow-lg">
            <div className="mb-6 px-6">
              <div className="flex items-center mb-2">
                {section.icon}
                <h2 id={`${section.title.toLowerCase().replace(/\s+/g, '-')}-heading`} className="text-3xl md:text-4xl font-bold text-primary">
                  {section.title}
                </h2>
              </div>
              <p className="text-muted-foreground text-lg ml-11">{section.description}</p>
            </div>

            {section.characterList.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-6">
                {section.characterList.map(character => (
                  <CharacterTimelineCard key={character.id} character={character} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center px-6">No characters found in this Yuga.</p>
            )}
            
            {index < sectionsToDisplay.length - 1 && <Separator className="my-12 bg-border/50" />}
          </section>
      ))}
    </div>
  );
}
