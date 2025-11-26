
import Link from 'next/link';
import type { CharacterType } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Layers } from 'lucide-react'; // Using Layers as a generic icon for category

interface CharacterTypeCardProps {
  characterType: CharacterType;
}

export function CharacterTypeCard({ characterType }: CharacterTypeCardProps) {
  return (
    <Link href={`/characters/category/${encodeURIComponent(characterType)}`} className="group block">
      <Card className="h-full flex flex-col bg-card/80 backdrop-blur-sm hover:bg-card
                       border-border/50 hover:border-primary 
                       transform transition-all duration-300 ease-in-out 
                       group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl
                       rounded-xl overflow-hidden">
        <CardHeader className="p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/20 text-primary rounded-lg">
              <Layers className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
              {characterType}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4 pt-0">
          <p className="text-sm text-muted-foreground">
            Explore all characters categorized as '{characterType}'.
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="text-accent font-semibold group-hover:underline flex items-center text-sm">
            View Characters <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

