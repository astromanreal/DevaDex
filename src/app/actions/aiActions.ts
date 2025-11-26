'use server';

import { suggestRelatedCharacters, type SuggestRelatedCharactersInput, type SuggestRelatedCharactersOutput } from '@/ai/flows/suggest-related-characters';

export async function getAiSuggestedRelatedCharacters(input: SuggestRelatedCharactersInput): Promise<SuggestRelatedCharactersOutput> {
  try {
    // This simulates a delay, remove in production
    // await new Promise(resolve => setTimeout(resolve, 1500));
    const result = await suggestRelatedCharacters(input);
    return result;
  } catch (error) {
    console.error("Error fetching AI suggested characters:", error);
    // In a real app, you might want to log this error to a monitoring service
    return { relatedCharacters: [] }; // Return a default or error structure
  }
}
