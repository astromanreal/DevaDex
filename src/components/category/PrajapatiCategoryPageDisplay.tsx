
import type { PrajapatiCategoryData, NotablePrajapati } from '@/data/prajapati-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, UsersRound, BookOpen, Users, ExternalLink, ArrowRight, Atom, ShieldCheck, Palette, Brain, Wind, Sun, Moon, Sparkles, Star, Type } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

interface PrajapatiCategoryPageDisplayProps {
  categoryData: PrajapatiCategoryData;
}

const PrajapatiIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const baseClasses = className || "h-5 w-5 text-primary";
  switch (name.toLowerCase()) {
    case 'brahma': return <Sparkles className={baseClasses} />;
    case 'daksha': return <Users className={baseClasses} />;
    case 'kashyapa': return <UsersRound className={baseClasses} />;
    case 'angiras': return <Wind className={baseClasses} />;
    case 'marichi': return <Sun className={baseClasses} />;
    case 'vishvakarman': return <Palette className={baseClasses} />;
    case 'swayambhuva manu': return <Type className={baseClasses} />;
    default: return <Star className={baseClasses} />;
  }
};

const NotablePrajapatiCard: React.FC<{ prajapati: NotablePrajapati }> = ({ prajapati }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
          <Image
            src={prajapati.imageUrl}
            alt={prajapati.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={prajapati.imageAiHint}
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center mb-1">
            <PrajapatiIcon name={prajapati.name} className="h-6 w-6 mr-2 text-primary group-hover:text-accent transition-colors" />
            <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{prajapati.name} <span className="text-sm text-muted-foreground">({prajapati.sanskrit_name})</span></CardTitle>
          </div>
          <CardDescription className="text-sm text-muted-foreground">{prajapati.role}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-2 flex-grow">
      <p className="line-clamp-3"><strong>Story:</strong> {prajapati.story || prajapati.significance}</p>
      <p><strong>Symbolism:</strong> {prajapati.symbolism}</p>
      {prajapati.contribution && <p><strong>Contribution:</strong> {prajapati.contribution}</p>}
      {prajapati.mantra && <p><strong>Mantra:</strong> <code className="text-xs bg-muted p-1 rounded">{prajapati.mantra}</code></p>}
      {prajapati.vehicle && prajapati.vehicle !== "None" && <p><strong>Vehicle:</strong> {prajapati.vehicle}</p>}
      {prajapati.associated_deity && <p><strong>Associated Deity/Concept:</strong> {Array.isArray(prajapati.associated_deity) ? prajapati.associated_deity.join(', ') : prajapati.associated_deity}</p>}
      {prajapati.associated_chakra && <p><strong>Associated Chakra:</strong> {prajapati.associated_chakra}</p>}
      {prajapati.qualities && prajapati.qualities.length > 0 && (
        <div>
          <strong>Qualities:</strong>
          <div className="flex flex-wrap gap-1 mt-1">
            {prajapati.qualities.map(q => <Badge key={q} variant="secondary" className="text-xs">{q}</Badge>)}
          </div>
        </div>
      )}
      {prajapati.associated_texts && prajapati.associated_texts.length > 0 && (
         <div>
          <strong>Texts:</strong>
          <div className="flex flex-wrap gap-1 mt-1">
            {prajapati.associated_texts.map(t => <Badge key={t.toString()} variant="outline" className="text-xs">{t}</Badge>)}
          </div>
        </div>
      )}
    </CardContent>
    <CardFooter className="p-4 pt-0">
       <Link href={`/characters/${prajapati.id}`} passHref>
        <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
          Learn More <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export function PrajapatiCategoryPageDisplay({ categoryData }: PrajapatiCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Prajapati category could not be loaded.
        </p>
        <Link href="/characters" passHref>
          <Button variant="default">Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const { origin_and_role, notable_prajapatis, scriptural_mentions, symbolism, external_links } = categoryData;

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
                data-ai-hint={categoryData.imageAiHint || 'celestial beings creation'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <UsersRound className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">Lords of Creation and Progenitors</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['notable_prajapatis', 'origin_role']} className="w-full">
          
          <AccordionItem value="origin_role">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Atom className="mr-2" /> Origin & Cosmic Role
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Mythological Origin:</strong> {origin_and_role.mythological_origin}</p>
              <p><strong>Primary Function:</strong> {origin_and_role.primary_function}</p>
              <p><strong>Number of Prajapatis:</strong> {origin_and_role.number_of_prajapatis}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="notable_prajapatis">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Users className="mr-2" /> Notable Prajapatis
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              {notable_prajapatis.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {notable_prajapatis.map((prajapati) => (
                    <NotablePrajapatiCard key={prajapati.id} prajapati={prajapati} />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No notable Prajapatis listed for this category.</p>
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="scriptural_mentions">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <BookOpen className="mr-2" /> Scriptural Mentions
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Vedas:</strong> {scriptural_mentions.vedas}</p>
              <p><strong>Puranas:</strong> {scriptural_mentions.puranas}</p>
              <p><strong>Brahmanas:</strong> {scriptural_mentions.brahmanas}</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="symbolism">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Brain className="mr-2" /> Symbolism
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
                <p><strong>Cosmic Creation:</strong> {symbolism.cosmic_creation}</p>
                <p><strong>Progenitors:</strong> {symbolism.progenitors}</p>
                <p><strong>Sacrifice (Yajna):</strong> {symbolism.sacrifice}</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="external_links">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ExternalLink className="mr-2" /> Further Reading
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-1 text-foreground">
              <p><Link href={external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Prajapati</Link></p>
              <p><Link href={external_links.wisdomlib} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">WisdomLib: Prajapati</Link></p>
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
