
'use client';

import type { Character } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';

interface CharacterOfTheDayProps {
  character: Character | null;
  isLoading?: boolean;
}

export function CharacterOfTheDay({ character, isLoading }: CharacterOfTheDayProps) {
  if (isLoading) {
    return (
      <Card className="w-full shadow-xl border-primary/30 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <CardHeader className="text-center pb-4">
           <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground mb-3 mx-auto">
            <Sparkles className="mr-2 h-5 w-5 text-accent" />
            <span className="font-semibold">Character Spotlight</span>
          </div>
          <CardTitle className="text-3xl font-bold text-primary">
            Loading...
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Discover a fascinating figure from Sanatan Dharma.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-8 min-h-[300px]">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-muted-foreground mt-4">Fetching today's featured character...</p>
        </CardContent>
      </Card>
    );
  }


  if (!character) {
    return (
      <Card className="w-full shadow-xl border-primary/30 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <CardHeader className="text-center pb-4">
           <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground mb-3 mx-auto">
            <Sparkles className="mr-2 h-5 w-5 text-accent" />
            <span className="font-semibold">Character Spotlight</span>
          </div>
          <CardTitle className="text-3xl font-bold text-primary">
            Character Not Found
          </CardTitle>
          <CardDescription className="text-muted-foreground">
           Unable to feature a character at this moment.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-8 min-h-[300px]">
          <p className="text-muted-foreground">Please check back later.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full shadow-xl border-primary/30 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <CardHeader className="text-center pb-4">
         <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground mb-3 mx-auto">
          <Sparkles className="mr-2 h-5 w-5 text-accent" />
          <span className="font-semibold">Character of the Day</span>
        </div>
        <CardTitle className="text-4xl font-bold text-primary">
          {character.name.english}
        </CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          {character.name.sanskrit}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/3 w-full flex-shrink-0">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-border hover:border-accent transition-all duration-300 group">
              <Image
                src={character.imageUrl}
                alt={character.name.english}
                fill
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={character.imageAiHint}
              />
            </div>
          </div>
          <div className="md:w-2/3 space-y-4 text-center md:text-left">
            <p className="text-lg text-foreground leading-relaxed line-clamp-5">
              {character.significance}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium rounded-full">{character.type}</span>
              {character.yuga && <span className="bg-muted text-muted-foreground px-3 py-1 text-xs font-medium rounded-full">{character.yuga}</span>}
            </div>
            <Link href={`/characters/${character.id}`} passHref>
              <Button size="lg" className="mt-4 w-full md:w-auto group/button">
                Learn More About {character.name.english}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/button:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
