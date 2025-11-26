
import Image from 'next/image';
import Link from 'next/link';
import type { Character } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Users, ScrollText, BookOpen, Palette, MessageSquare, MapPin, VenetianMask, UserCircle, UserSquare, Users2, Link2, Landmark as TempleIcon, Heart, GraduationCap, Swords, Handshake, Star, Sparkles, Skull, Calendar, Shield, Activity, ListChecks } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CharacterProfileProps {
  character: Character;
}

const DetailItem: React.FC<{icon: React.ReactNode, label: string; value?: string | string[] | null | { name: string; location: string }[] | { medium: string; description: string }[]; children?: React.ReactNode }> = ({ icon, label, value, children }) => {
  if (!value && !children) return null;

  let displayValue;
  if (Array.isArray(value)) {
    if (value.length === 0) return null;
    if (typeof value[0] === 'string') {
      // For string arrays like teachings or traits
      return (
         <div className="mb-4">
          <h3 className="text-lg font-semibold text-secondary-foreground flex items-center mb-2">
            {icon} <span className="ml-2">{label}</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {(value as string[]).map((item, i) => <Badge key={i} variant="secondary">{item}</Badge>)}
          </div>
        </div>
      );
    } else if (value.length > 0 && typeof value[0] === 'object' && value[0] !== null && 'name' in value[0] && 'location' in value[0]) { // Temples
      displayValue = (
        <ul className="list-disc list-inside space-y-1">
          {(value as { name: string; location: string }[]).map((item, i) => <li key={i}>{item.name} ({item.location})</li>)}
        </ul>
      );
    } else if (value.length > 0 && typeof value[0] === 'object' && value[0] !== null && 'medium' in value[0] && 'description' in value[0]) { // Depictions
       displayValue = (
        <ul className="list-disc list-inside space-y-1">
          {(value as { medium: string; description: string }[]).map((item, i) => <li key={i}><strong>{item.medium}:</strong> {item.description}</li>)}
        </ul>
      );
    }
  } else {
    displayValue = value;
  }

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-secondary-foreground flex items-center mb-1">
        {icon} <span className="ml-2">{label}</span>
      </h3>
      {displayValue && (
        typeof displayValue === 'string' ? (
          <p className="text-foreground leading-relaxed">{displayValue}</p>
        ) : (
          <div className="text-foreground leading-relaxed">{displayValue}</div>
        )
      )}
      {children}
    </div>
  );
};

const QuickInfoCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <Card className="bg-muted/30">
    <CardContent className="p-4 flex items-center gap-4">
      <div className="p-3 bg-primary/10 text-primary rounded-lg">{icon}</div>
      <div>
        <CardDescription className="text-sm">{label}</CardDescription>
        <p className="font-semibold text-primary">{value}</p>
      </div>
    </CardContent>
  </Card>
);


const getRelationshipIcon = (relationship: string) => {
  const rel = relationship.toLowerCase();
  if (rel.includes('father') || rel.includes('mother') || rel.includes('son') || rel.includes('daughter') || rel.includes('brother') || rel.includes('sister') || rel.includes('family')) return <Users className="h-5 w-5 text-primary" />;
  if (rel.includes('disciple') || rel.includes('guru') || rel.includes('student') || rel.includes('mentor')) return <GraduationCap className="h-5 w-5 text-primary" />;
  if (rel.includes('conflict') || rel.includes('enemy') || rel.includes('antagonist') || rel.includes('opponent')) return <Swords className="h-5 w-5 text-destructive" />;
  if (rel.includes('ally') || rel.includes('friend')) return <Handshake className="h-5 w-5 text-green-500" />;
  if (rel.includes('consort') || rel.includes('wife') || rel.includes('husband') || rel.includes('spouse')) return <Heart className="h-5 w-5 text-pink-500" />;
  if (rel.includes('master') || rel.includes('deity')) return <Star className="h-5 w-5 text-yellow-500" />;
  if (rel.includes('origin deity')) return <Sparkles className="h-5 w-5 text-purple-500" />;
  if (rel.includes('defeated')) return <Skull className="h-5 w-5 text-red-700" />;
  return <Link2 className="h-5 w-5 text-muted-foreground" />;
};


export function CharacterProfile({ character }: CharacterProfileProps) {
  const traits = (character as any).traits; // Accessing the new field

  return (
    <Card className="shadow-xl overflow-hidden border-border/20">
      {/* Banner and Header Section */}
      <CardHeader className="p-0">
        <div className="relative h-48 md:h-64">
          <Image
            src={character.imageUrl}
            alt={`Banner for ${character.name.english}`}
            layout="fill"
            objectFit="cover"
            className="opacity-20 blur-md"
            data-ai-hint={character.imageAiHint}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="relative w-36 h-36 md:w-48 md:h-48 flex-shrink-0">
              <Image
                src={character.imageUrl}
                alt={character.name.english}
                layout="fill"
                objectFit="cover"
                data-ai-hint={character.imageAiHint}
                className="rounded-full shadow-lg border-4 border-card"
              />
            </div>
            <div className="text-center md:text-left">
              <CardTitle className="text-4xl md:text-5xl font-bold text-primary mb-1">{character.name.english}</CardTitle>
              <CardDescription className="text-xl text-primary/80 mb-3">{character.name.sanskrit}</CardDescription>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="default" className="text-sm px-3 py-1 bg-accent text-accent-foreground">{character.type}</Badge>
                {character.yuga && <Badge variant="secondary" className="text-sm px-3 py-1">{character.yuga}</Badge>}
                {character.gender && <Badge variant="outline" className="text-sm px-3 py-1">{character.gender}</Badge>}
                {character.nature && <Badge variant="outline" className="text-sm px-3 py-1">{character.nature}</Badge>}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 pt-4">
           <p className="text-lg text-foreground leading-relaxed text-center md:text-left">{character.significance}</p>
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 pb-6">
          <QuickInfoCard icon={<UserSquare size={24}/>} label="Primary Role" value={character.role}/>
          <QuickInfoCard icon={<Calendar size={24}/>} label="Yuga / Era" value={character.yuga || 'All Yugas'}/>
          <QuickInfoCard icon={<Shield size={24}/>} label="Nature" value={character.nature || 'Neutral'}/>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['details', 'stories']} className="w-full">
          
          <AccordionItem value="details">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <UserCircle className="mr-2" /> Core Details & Attributes
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              {traits && <DetailItem icon={<ListChecks />} label="Key Traits" value={traits} />}
              <DetailItem icon={<Users2 />} label="Lineage / Gotra" value={character.lineage} />
              <DetailItem icon={<BookOpen />} label="Associated Texts" value={character.associatedTexts} />
              <DetailItem icon={<MapPin />} label="Region / Kingdom" value={character.region} />
              <DetailItem icon={<VenetianMask />} label="Symbolism" value={character.symbolism} />
              <DetailItem icon={<GraduationCap />} label="Teachings" value={character.teachings} />
            </AccordionContent>
          </AccordionItem>

          {character.stories && character.stories.length > 0 && (
            <AccordionItem value="stories">
              <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                <ScrollText className="mr-2" /> Stories & Narratives
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-3">
                {character.stories.map((story, index) => (
                  <Card key={index} className="bg-background/50">
                    <CardHeader>
                      <CardTitle className="text-xl text-secondary-foreground">{story.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground">{story.summary}</p>
                    </CardContent>
                  </Card>
                ))}
              </AccordionContent>
            </AccordionItem>
          )}
          
          { (character.relatedTemples && character.relatedTemples.length > 0) || (character.depictions && character.depictions.length > 0) || (character.quotes && character.quotes.length > 0) ? (
            <AccordionItem value="cultural-significance">
              <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                <TempleIcon className="mr-2" /> Cultural Significance
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                <DetailItem icon={<TempleIcon />} label="Related Temples / Worship Practices" value={character.relatedTemples} />
                <DetailItem icon={<Palette />} label="Depictions in Art and Culture" value={character.depictions} />
                <DetailItem icon={<MessageSquare />} label="Quotes / Dialogues" value={character.quotes} />
              </AccordionContent>
            </AccordionItem>
          ) : null}

          {character.linkedCharacters && character.linkedCharacters.length > 0 && (
            <AccordionItem value="linked-characters">
              <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                <Link2 className="mr-2" /> Related Characters & Relationships
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-secondary-foreground mb-3">Curated Relationships:</h4>
                  <ul className="space-y-3">
                    {character.linkedCharacters.map(linkedChar => (
                      <li key={linkedChar.id} className="flex items-center p-3 bg-muted/30 rounded-lg hover:bg-muted/60 transition-colors">
                        <div className="mr-3 flex-shrink-0">
                         {getRelationshipIcon(linkedChar.relationship)}
                        </div>
                        <div className="flex-grow">
                          <Link href={`/characters/${linkedChar.id}`} passHref>
                            <Button variant="link" className="text-primary hover:text-accent p-0 h-auto text-left text-md font-medium">
                              {linkedChar.name}
                            </Button>
                          </Link>
                          <p className="text-xs text-muted-foreground">({linkedChar.relationship})</p>
                        </div>
                        <Button variant="outline" size="sm" asChild className="ml-auto">
                           <Link href={`/characters/${linkedChar.id}`}>View</Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </CardContent>
      <CardFooter className="bg-muted/30 p-6">
        <Link href="/explore" passHref>
          <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
            Back to Character List
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
