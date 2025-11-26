
'use client';

import type { UserProfile } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, Lightbulb } from 'lucide-react';
import { CHARACTER_TYPES } from '@/lib/types'; // For generating recommendations

interface PersonalizedRecommendationsProps {
  preferences?: UserProfile['preferences'];
}

const getRandomItems = <T,>(arr: ReadonlyArray<T>, numItems: number): T[] => {
  if (arr.length <= numItems) return [...arr];
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
};

export function PersonalizedRecommendations({ preferences }: PersonalizedRecommendationsProps) {
  // Mock recommendations - in a real app, this would come from a recommendation engine
  let recommendedCategories: string[] = [];

  if (preferences?.favoriteCharacterTypes && preferences.favoriteCharacterTypes.length > 0) {
    recommendedCategories = [...preferences.favoriteCharacterTypes];
    // Add some more random ones if not enough favorites
    if (recommendedCategories.length < 3) {
      const otherRandom = getRandomItems(
        CHARACTER_TYPES.filter(ct => !recommendedCategories.includes(ct)),
        3 - recommendedCategories.length
      );
      recommendedCategories.push(...otherRandom);
    }
  } else {
    recommendedCategories = getRandomItems(CHARACTER_TYPES, 3);
  }
  
  // Example recommendations - expand with more complex logic if needed
  const recommendations = [
    {
      title: `Explore: ${recommendedCategories[0] || 'Devas'}`,
      description: `Deepen your understanding of ${recommendedCategories[0]?.toLowerCase() || 'devas'} and their significance.`,
      link: `/characters/category/${encodeURIComponent(recommendedCategories[0] || 'Deva')}`,
      icon: <Sparkles className="h-5 w-5 text-accent" />,
    },
    {
      title: `Discover: ${recommendedCategories[1] || 'Rishis'}`,
      description: `Learn about the wisdom and stories of ${recommendedCategories[1]?.toLowerCase() || 'rishis'}.`,
      link: `/characters/category/${encodeURIComponent(recommendedCategories[1] || 'Rishi')}`,
      icon: <Lightbulb className="h-5 w-5 text-accent" />,
    },
    {
      title: `Timeline: ${recommendedCategories[2] || 'Avatars'} in Treta Yuga`,
      description: `See how ${recommendedCategories[2]?.toLowerCase() || 'avatars'} manifested during the Treta Yuga.`,
      link: '/timeline', // General timeline link, specific filtering not implemented here
      icon: <Sparkles className="h-5 w-5 text-accent" />,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center"><Lightbulb className="mr-2 h-5 w-5 text-primary"/>For You</CardTitle>
        <CardDescription className="text-xs">Personalized suggestions based on your activity and interests.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.slice(0,3).map((rec, index) => (
          <Card key={index} className="bg-muted/30 hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 text-accent pt-0.5">{rec.icon}</div>
                <div>
                  <h4 className="font-semibold text-primary">{rec.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1 mb-2">{rec.description}</p>
                  <Button variant="link" size="sm" asChild className="p-0 h-auto text-accent hover:underline">
                    <Link href={rec.link}>Explore Now &rarr;</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
         {recommendations.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">
            Keep exploring to receive personalized recommendations!
          </p>
        )}
      </CardContent>
    </Card>
  );
}
