'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAiSuggestedRelatedCharacters } from '@/app/actions/aiActions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, Loader2, Users, Link2 as LinkIcon } from 'lucide-react'; // Changed icon
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface RelatedCharactersProps {
  characterName: string;
  currentCharacterId: string; // To filter out the current character from suggestions
}

export function RelatedCharacters({ characterName, currentCharacterId }: RelatedCharactersProps) {
  const [suggestedChars, setSuggestedChars] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSuggestions() {
      setIsLoading(true);
      setError(null);
      try {
        const result = await getAiSuggestedRelatedCharacters({ characterName });
        // Filter out the current character from suggestions if present
        const filteredSuggestions = result.relatedCharacters.filter(name => 
          name.toLowerCase() !== characterName.toLowerCase() &&
          name.toLowerCase().replace(/\s+/g, '-') !== currentCharacterId // Also check against ID if it's a slug
        );
        setSuggestedChars(filteredSuggestions);
      } catch (e) {
        setError('Failed to load AI character suggestions. Please try again later.');
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }

    if (characterName) {
      fetchSuggestions();
    }
  }, [characterName, currentCharacterId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6 bg-muted/50 rounded-lg">
        <Loader2 className="h-8 w-8 animate-spin text-primary mr-3" />
        <p className="text-muted-foreground">Loading AI Character Suggestions...</p>
      </div>
    );
  }

  if (error) {
    return (
       <Alert variant="destructive" className="mt-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }
  
  if (suggestedChars.length === 0 && !isLoading) {
     return (
      <div className="p-6 bg-muted/50 rounded-lg text-center">
        <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">No specific AI suggestions found for {characterName} at the moment.</p>
        <p className="text-xs text-muted-foreground mt-1">Manual links might be available below if curated.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {suggestedChars.map((name, index) => (
        <Card key={index} className="bg-background/70 hover:shadow-md transition-shadow border border-border/50">
          <CardContent className="p-3 flex items-center justify-between">
            <div>
              <h5 className="font-medium text-primary">{name}</h5>
              <p className="text-xs text-muted-foreground mt-1">
                AI Suggestion - Profile may not exist or name may vary.
              </p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/characters/${name.toLowerCase().replace(/\s+/g, '-')}`}>
                <LinkIcon className="mr-2 h-4 w-4" /> View
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
