
import type { ApsarasCategoryData, NotableApsara } from '@/data/apsaras-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Feather, BookOpen, Users, ExternalLink, ArrowRight, Palette, Drama, Brain, Music, Heart, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

interface ApsarasCategoryPageDisplayProps {
  categoryData: ApsarasCategoryData;
}

const NotableApsaraCard: React.FC<{ apsara: NotableApsara }> = ({ apsara }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
          <Image
            src={apsara.imageUrl}
            alt={apsara.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={apsara.imageAiHint}
          />
        </div>
        <div className="flex-grow">
          <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{apsara.name} <span className="text-sm text-muted-foreground">({apsara.sanskrit_name})</span></CardTitle>
          {apsara.epithet && <CardDescription className="text-sm text-muted-foreground">{apsara.epithet}</CardDescription>}
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-2 flex-grow">
      <p><strong>Associated With:</strong> {apsara.associated_with.join(', ')}</p>
      {apsara.skills && apsara.skills.length > 0 && (
        <div>
          <strong>Skills/Qualities:</strong>
          <div className="flex flex-wrap gap-1 mt-1">
              {apsara.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
          </div>
        </div>
      )}
      {apsara.famous_stories && apsara.famous_stories.length > 0 && (
        <p className="line-clamp-3"><strong>Famous Story:</strong> {apsara.famous_stories[0]?.title} - {apsara.famous_stories[0]?.summary}</p>
      )}
      <p><strong>Symbolism:</strong> {apsara.symbolism}</p>
      {apsara.mantra && <p><strong>Mantra:</strong> <code className="text-xs bg-muted p-1 rounded">{apsara.mantra}</code></p>}
      {apsara.associated_chakra && <p><strong>Associated Chakra:</strong> {apsara.associated_chakra}</p>}
    </CardContent>
     <CardFooter className="p-4 pt-0">
       {/* Link to character page can be added if individual Apsara pages exist */}
       {/* For now, Apsaras are primarily detailed within this category page */}
        <Button variant="link" size="sm" className="p-0 h-auto text-accent/70 group-hover:underline" disabled>
          More details soon
        </Button>
    </CardFooter>
  </Card>
);

export function ApsarasCategoryPageDisplay({ categoryData }: ApsarasCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Apsaras category could not be loaded.
        </p>
        <Link href="/characters" passHref>
          <Button variant="default">Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const { origin_and_nature, roles_and_functions, notable_apsaras, scriptural_mentions, symbolism_and_cultural_influence, external_links } = categoryData;

  return (
    <Card className="shadow-xl overflow-hidden">
      <CardHeader className="bg-muted/30 p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {categoryData.imageUrl && (
            <div className="w-full md:w-1/3 relative aspect-video rounded-lg overflow-hidden shadow-lg border-4 border-card">
              <Image
                src={categoryData.imageUrl}
                alt={categoryData.category}
                layout="fill"
                objectFit="cover"
                data-ai-hint={categoryData.imageAiHint || 'celestial nymphs dance ethereal'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Feather className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">Celestial Nymphs of Beauty and Grace</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['notable_apsaras', 'origin_nature']} className="w-full">
          
          <AccordionItem value="origin_nature">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Star className="mr-2" /> Origin & Nature
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Mythological Origin:</strong> {origin_and_nature.mythological_origin}</p>
              <p><strong>Appearance & Abilities:</strong> {origin_and_nature.appearance_and_abilities}</p>
              {origin_and_nature.types_of_apsaras && <p><strong>Types:</strong> {origin_and_nature.types_of_apsaras}</p>}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="roles_functions">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
               <Drama className="mr-2" /> Roles & Functions
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Celestial Entertainers:</strong> {roles_and_functions.celestial_entertainers}</p>
              <p><strong>Messengers & Tempters:</strong> {roles_and_functions.messengers_and_tempters}</p>
              <p><strong>Reward for Heroes:</strong> {roles_and_functions.reward_for_heroes}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="notable_apsaras">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Users className="mr-2" /> Notable Apsaras
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              {notable_apsaras.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {notable_apsaras.map((apsara) => (
                    <NotableApsaraCard key={apsara.id} apsara={apsara} />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No notable Apsaras listed for this category.</p>
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="scriptural_mentions">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <BookOpen className="mr-2" /> Scriptural Mentions
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Vedas:</strong> {scriptural_mentions.vedas}</p>
              <p><strong>Epics (Ramayana, Mahabharata):</strong> {scriptural_mentions.epics}</p>
              <p><strong>Puranas:</strong> {scriptural_mentions.puranas}</p>
              <p><strong>Kavya (Classical Literature):</strong> {scriptural_mentions.kavya}</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="symbolism_cultural_influence">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Palette className="mr-2" /> Symbolism & Cultural Influence
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
                <p><strong>Art & Sculpture:</strong> {symbolism_and_cultural_influence.art_and_sculpture}</p>
                <p><strong>Dance & Music:</strong> {symbolism_and_cultural_influence.dance_and_music}</p>
                <p><strong>Metaphorical Representation:</strong> {symbolism_and_cultural_influence.metaphorical_representation}</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="external_links">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ExternalLink className="mr-2" /> Further Reading
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-1 text-foreground">
              <p><Link href={external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Apsara</Link></p>
              <p><Link href={external_links.wisdomlib} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">WisdomLib: Apsaras</Link></p>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </CardContent>
      <CardFooter className="bg-muted/30 p-6 flex justify-center">
        <Link href="/characters" passHref>
          <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
            Back to All Categories
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
