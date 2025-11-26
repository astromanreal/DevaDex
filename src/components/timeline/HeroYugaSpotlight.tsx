
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { Character, Yuga } from '@/lib/types';
import { YUGAS } from '@/lib/types';
import { getAllCharacters } from '@/data/characters';
import { CharacterTimelineCard } from '@/components/timeline/CharacterTimelineCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, CalendarDays, Users, AlertTriangle } from 'lucide-react';

export function HeroYugaSpotlight() {
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [currentYugaIndex, setCurrentYugaIndex] = useState(0);
  const [currentCharacterInYugaIndex, setCurrentCharacterInYugaIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setAllCharacters(getAllCharacters());
    setIsLoading(false);
  }, []);

  const currentYuga = YUGAS[currentYugaIndex];

  const charactersInCurrentYuga = useMemo(() => {
    if (isLoading || allCharacters.length === 0) return [];
    return allCharacters.filter(char => 
      char.yuga === currentYuga || 
      (currentYuga === 'All Yugas' && (char.yuga === 'All Yugas' || !char.yuga))
    );
  }, [currentYuga, allCharacters, isLoading]);

  const featuredCharacter = useMemo(() => {
    if (charactersInCurrentYuga.length === 0) return null;
    // Ensure index is within bounds
    const validIndex = Math.max(0, Math.min(currentCharacterInYugaIndex, charactersInCurrentYuga.length - 1));
    return charactersInCurrentYuga[validIndex];
  }, [charactersInCurrentYuga, currentCharacterInYugaIndex]);
  
  const totalCharsInYuga = charactersInCurrentYuga.length;

  const handlePrevYuga = useCallback(() => {
    setCurrentYugaIndex((prevIndex) => (prevIndex === 0 ? YUGAS.length - 1 : prevIndex - 1));
    setCurrentCharacterInYugaIndex(0); 
  }, []);

  const handleNextYuga = useCallback(() => {
    setCurrentYugaIndex((prevIndex) => (prevIndex === YUGAS.length - 1 ? 0 : prevIndex + 1));
    setCurrentCharacterInYugaIndex(0); 
  }, []);

  const handlePrevChar = useCallback(() => {
    if (totalCharsInYuga <= 1) return;
    setCurrentCharacterInYugaIndex((prevIndex) =>
      prevIndex === 0 ? totalCharsInYuga - 1 : prevIndex - 1
    );
  }, [totalCharsInYuga]);

  const handleNextChar = useCallback(() => {
    if (totalCharsInYuga <= 1) return;
    setCurrentCharacterInYugaIndex((prevIndex) =>
      prevIndex === totalCharsInYuga - 1 ? 0 : prevIndex + 1
    );
  }, [totalCharsInYuga]);
  
  // Effect to reset character index if it becomes out of bounds due to Yuga change and filtering
  useEffect(() => {
    if (currentCharacterInYugaIndex >= totalCharsInYuga && totalCharsInYuga > 0) {
      setCurrentCharacterInYugaIndex(totalCharsInYuga - 1);
    } else if (totalCharsInYuga === 0) {
      setCurrentCharacterInYugaIndex(0);
    }
  }, [totalCharsInYuga, currentCharacterInYugaIndex]);


  if (isLoading) {
    return (
      <Card className="mt-8 p-6 text-center bg-muted/30 animate-pulse">
        <CalendarDays className="mx-auto h-10 w-10 text-primary mb-2" />
        <div className="h-6 bg-muted rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-40 bg-muted rounded w-full max-w-xs mx-auto"></div>
      </Card>
    );
  }

  return (
    <Card className="mt-8 shadow-xl overflow-hidden border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 p-4 md:p-6">
        <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
          <CalendarDays className="mr-3 h-7 w-7 md:h-8 md:w-8" />
          Timeline Spotlight
        </CardTitle>
        <CardDescription className="text-primary/80">
          Navigate characters through the Yugas, one by one.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <div className="mb-6 p-3 bg-muted rounded-lg text-center">
          <h3 className="text-xl font-semibold text-secondary-foreground">{currentYuga}</h3>
          {totalCharsInYuga > 0 && (
            <p className="text-sm text-muted-foreground">
              Character {currentCharacterInYugaIndex + 1} of {totalCharsInYuga}
            </p>
          )}
        </div>

        {featuredCharacter ? (
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xs mx-auto mb-6">
              <CharacterTimelineCard character={featuredCharacter} />
            </div>
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-8 my-6 bg-muted/50 rounded-md flex flex-col items-center justify-center min-h-[200px]"> {/* Increased min-height */}
            <AlertTriangle className="h-10 w-10 text-destructive mb-3"/>
            <p className="font-semibold text-lg">No characters found for {currentYuga}.</p>
            <p className="text-sm mt-1">Please try navigating to another Yuga.</p>
          </div>
        )}
        
        {totalCharsInYuga > 1 && (
          <div className="flex justify-center items-center gap-3 my-4">
            <Button onClick={handlePrevChar} variant="outline" size="sm" aria-label="Previous character in this Yuga" className="hover:bg-accent hover:text-accent-foreground">
              <ChevronLeft className="h-4 w-4" /> Prev Char
            </Button>
             <span className="text-xs text-muted-foreground tabular-nums">({currentCharacterInYugaIndex + 1}/{totalCharsInYuga})</span>
            <Button onClick={handleNextChar} variant="outline" size="sm" aria-label="Next character in this Yuga" className="hover:bg-accent hover:text-accent-foreground">
              Next Char <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="flex justify-between items-center border-t pt-4 mt-4">
          <Button onClick={handlePrevYuga} variant="ghost" className="text-accent hover:text-accent/80 flex-1 justify-start text-left" aria-label="Previous Yuga">
            <ChevronLeft className="mr-2 h-5 w-5" /> Prev Yuga
          </Button>
          <Button onClick={handleNextYuga} variant="ghost" className="text-accent hover:text-accent/80 flex-1 justify-end text-right" aria-label="Next Yuga">
            Next Yuga <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
