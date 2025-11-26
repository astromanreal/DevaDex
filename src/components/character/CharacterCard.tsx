
import Link from 'next/link';
import Image from 'next/image';
import type { Character } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookMarked, Users, ShieldAlert, Feather, ScrollText, Crown, Sparkles, Star, Skull, Flame, Zap, Ghost, Gem, Library, ShieldCheck, UsersRound, Activity } from 'lucide-react'; // Added Activity

// Helper to get an icon based on character type
const getTypeIcon = (type: Character['type']) => {
  switch (type) {
    case 'Trimurti': return <Users className="w-4 h-4 mr-1" />;
    case 'Deva': return <Sparkles className="w-4 h-4 mr-1" />;
    case 'Devi': 
    case 'Das Mahavidya':
      return <Star className="w-4 h-4 mr-1" />; 
    case 'Avatar': return <Feather className="w-4 h-4 mr-1" />;
    case 'Rishi':
    case 'Muni': return <ScrollText className="w-4 h-4 mr-1" />;
    case 'King': return <Crown className="w-4 h-4 mr-1" />; 
    case 'Warrior': return <ShieldAlert className="w-4 h-4 mr-1" />; 
    case 'Demon':
    case 'Rakshasa':
      return <Skull className="w-4 h-4 mr-1" />;
    case 'Pishacha':
      return <Ghost className="w-4 h-4 mr-1" />;
    case 'Asura': return <Flame className="w-4 h-4 mr-1" />;
    case 'Daitya': 
      return <ShieldAlert className="w-4 h-4 mr-1" />; 
    case 'Danava':
      return <Zap className="w-4 h-4 mr-1" />;
    case 'Yaksha': 
      return <Gem className="w-4 h-4 mr-1" />;
    case 'Other Celestial Being':
      return <Sparkles className="w-4 h-4 mr-1" />
    case 'Dashavatar': return <Users className="w-4 h-4 mr-1" />;
    case 'Navdurga': return <ShieldCheck className="w-4 h-4 mr-1" />; 
    case 'Ekadasha Rudra': return <Zap className="w-4 h-4 mr-1" />; 
    case 'Mahadeva Avatars': return <Activity className="w-4 h-4 mr-1" />; // Added Mahadeva Avatars icon
    case 'Saptarishi': return <Library className="w-4 h-4 mr-1" />; 
    case 'Prajapati': return <UsersRound className="w-4 h-4 mr-1" />;
    case 'Apsaras': return <Feather className="w-4 h-4 mr-1" />;
    default: return <BookMarked className="w-4 h-4 mr-1" />;
  }
};


interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link href={`/characters/${character.id}`} className="group block">
      <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 ease-in-out border-2 border-transparent hover:border-primary">
        <CardHeader>
          <div className="relative w-full h-48 rounded-t-md overflow-hidden mb-4">
            <Image
              src={character.imageUrl}
              alt={character.name.english}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={character.imageAiHint}
            />
          </div>
          <CardTitle className="text-2xl font-semibold group-hover:text-accent transition-colors">
            {character.name.english}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{character.name.sanskrit}</p>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            {getTypeIcon(character.type)}
            <Badge variant="secondary" className="mr-2">{character.type}</Badge>
          </div>
          <p className="text-sm text-foreground line-clamp-3">{character.significance}</p>
        </CardContent>
        <CardFooter>
          <div className="text-accent font-semibold group-hover:underline flex items-center">
            Learn More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

