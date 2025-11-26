'use server';
/**
 * @fileOverview AI agent that suggests related characters based on the viewed profile.
 *
 * - suggestRelatedCharacters - A function that suggests related characters.
 * - SuggestRelatedCharactersInput - The input type for the suggestRelatedCharacters function.
 * - SuggestRelatedCharactersOutput - The return type for the suggestRelatedCharacters function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelatedCharactersInputSchema = z.object({
  characterName: z.string().describe('The name of the character to find related characters for.'),
});
export type SuggestRelatedCharactersInput = z.infer<typeof SuggestRelatedCharactersInputSchema>;

const SuggestRelatedCharactersOutputSchema = z.object({
  relatedCharacters: z.array(
    z.string().describe('A list of names of related characters.')
  ).describe('List of related characters suggested by the AI.'),
});
export type SuggestRelatedCharactersOutput = z.infer<typeof SuggestRelatedCharactersOutputSchema>;

export async function suggestRelatedCharacters(input: SuggestRelatedCharactersInput): Promise<SuggestRelatedCharactersOutput> {
  return suggestRelatedCharactersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelatedCharactersPrompt',
  input: {schema: SuggestRelatedCharactersInputSchema},
  output: {schema: SuggestRelatedCharactersOutputSchema},
  prompt: `You are an expert in Sanatan Dharma character lore.

  Given the character name: {{{characterName}}}, suggest a list of other characters that are related to this character.  Consider relationships, conflicts, discipleship, and stories they appear in together.
  Return only a JSON array of character names. Do not include any additional explanation.`,
});

const suggestRelatedCharactersFlow = ai.defineFlow(
  {
    name: 'suggestRelatedCharactersFlow',
    inputSchema: SuggestRelatedCharactersInputSchema,
    outputSchema: SuggestRelatedCharactersOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
