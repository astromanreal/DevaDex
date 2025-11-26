
import Link from 'next/link';
import Image from 'next/image';
import type { Character } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ImageOff, BookMarked, Users, ShieldAlert, Feather, ScrollText, Crown, Sparkles, Star, Skull, Flame, Zap, Ghost, Gem, Library, ShieldCheck, UsersRound, Activity } from 'lucide-react';

interface CharacterTimelineCardProps {
  character: Character | null | undefined; // Allow null or undefined character
}

// Helper to get an icon based on character type - consistent with CharacterCard
const getTypeIcon = (type: Character['type'] | undefined) => {
  if (!type) return <BookMarked className="w-3 h-3" />;
  switch (type) {
    case 'Trimurti': return <Users className="w-3 h-3" />;
    case 'Deva': return <Sparkles className="w-3 h-3" />;
    case 'Devi': 
    case 'Das Mahavidya':
      return <Star className="w-3 h-3" />; 
    case 'Avatar': return <Feather className="w-3 h-3" />;
    case 'Rishi':
    case 'Muni': return <ScrollText className="w-3 h-3" />;
    case 'King': return <Crown className="w-3 h-3" />; 
    case 'Warrior': return <ShieldAlert className="w-3 h-3" />; 
    case 'Demon':
    case 'Rakshasa':
      return <Skull className="w-3 h-3" />;
    case 'Pishacha':
      return <Ghost className="w-3 h-3" />;
    case 'Asura': return <Flame className="w-3 h-3" />;
    case 'Daitya': 
      return <ShieldAlert className="w-3 h-3" />; 
    case 'Danava':
      return <Zap className="w-3 h-3" />;
    case 'Yaksha': 
      return <Gem className="w-3 h-3" />;
    case 'Other Celestial Being':
      return <Sparkles className="w-3 h-3" />
    case 'Dashavatar': return <Users className="w-3 h-3" />;
    case 'Navdurga': return <ShieldCheck className="w-3 h-3" />; 
    case 'Ekadasha Rudra': return <Zap className="w-3 h-3" />; 
    case 'Mahadeva Avatars': return <Activity className="w-3 h-3" />;
    case 'Saptarishi': return <Library className="w-3 h-3" />; 
    case 'Prajapati': return <UsersRound className="w-3 h-3" />;
    case 'Apsaras': return <Feather className="w-3 h-3" />;
    default: return <BookMarked className="w-3 h-3" />;
  }
};


export function CharacterTimelineCard({ character }: CharacterTimelineCardProps) {
  if (!character) {
    return (
      <Card className="h-full flex flex-col overflow-hidden rounded-xl bg-muted/50 border-2 border-border/40 shadow-sm">
        <div className="relative w-full h-36 bg-muted flex items-center justify-center">
           <ImageOff className="h-12 w-12 text-muted-foreground/60" />
        </div>
        <CardHeader className="p-3">
          <CardTitle className="text-md font-semibold text-muted-foreground">
            Unknown Character
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground/80">Details unavailable.</CardDescription>
        </CardHeader>
        <CardFooter className="p-3 mt-auto">
          <span className="text-xs text-muted-foreground/70 flex items-center">
            View Details <ArrowRight className="ml-1 h-3 w-3" />
          </span>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Link href={`/characters/${character.id}`} className="group block h-full">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:border-primary/70 rounded-xl border-2 border-border/40 hover:scale-[1.02]">
        <div className="relative w-full h-36 overflow-hidden"> {/* Slightly taller image */}
          <Image
            src={character.imageUrl}
            alt={character.name.english}
            fill // Changed from layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Example sizes, adjust as needed
            style={{ objectFit: 'cover' }} // Replaced objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
            data-ai-hint={character.imageAiHint}
          />
        </div>
        <CardHeader className="p-3 pb-1">
            <Badge variant="secondary" className="text-xs mb-1.5 self-start font-normal flex items-center gap-1 w-fit">
              {getTypeIcon(character.type)}
              {character.type}
            </Badge>
           <CardTitle className="text-lg font-semibold text-primary group-hover:text-accent transition-colors line-clamp-1">
              {character.name.english}
           </CardTitle>
           {character.name.sanskrit && (
             <CardDescription className="text-xs text-muted-foreground line-clamp-1">{character.name.sanskrit}</CardDescription>
           )}
        </CardHeader>
        <CardContent className="p-3 pt-1 flex-grow">
          <p className="text-xs text-foreground line-clamp-2">{character.significance}</p>
        </CardContent>
        <CardFooter className="p-3 mt-auto">
          <div className="text-sm text-accent font-medium group-hover:underline flex items-center">
            View Details <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
