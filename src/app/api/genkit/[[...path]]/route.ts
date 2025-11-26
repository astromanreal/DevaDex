import getGenkitAPIRoute from '@genkit-ai/next';
import '@/ai/dev'; // Ensure flows are registered

export const {GET, POST} = getGenkitAPIRoute();
