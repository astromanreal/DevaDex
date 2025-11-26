
import type { NagaCategoryData, NagaNotableNaga } from '@/data/naga-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Waves, Users, BookOpen, Brain, Link2, ShieldQuestion, ExternalLink, Gem, ShieldCheck, CalendarDays, Mountain, ArrowRight } from 'lucide-react';

interface NagaCategoryPageDisplayProps {
  categoryData: NagaCategoryData;
}

const DetailSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-secondary-foreground flex items-center mb-2">
      {icon} <span className="ml-2">{title}</span>
    </h3>
    <div className="text-foreground leading-relaxed space-y-1">{children}</div>
  </div>
);

const NotableNagaCard: React.FC<{ naga: NagaNotableNaga }> = ({ naga }) => (
  <Card className="bg-card/70 backdrop-blur-sm flex flex-col group">
     <CardHeader className="p-4">
      <div className="flex items-start gap-4">
        {naga.imageUrl && (
          <div className="relative w-20 h-20 rounded-md overflow-hidden shrink-0 border border-border shadow-sm">
            <Image
              src={naga.imageUrl}
              alt={naga.name}
              layout="fill"
              objectFit="cover"
              data-ai-hint={naga.imageAiHint || 'naga serpent'}
            />
          </div>
        )}
        <div>
          <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{naga.name} <span className="text-sm text-muted-foreground">({naga.meaning})</span></CardTitle>
          <CardDescription>{naga.role}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-2 flex-grow">
      <p><strong>Associated With:</strong> {Array.isArray(naga.associated_with) ? naga.associated_with.join(', ') : naga.associated_with}</p>
      <p><strong>Attributes:</strong> {naga.attributes.join(', ')}</p>
      <p><strong>Abode:</strong> {naga.abode}</p>
      <p className="line-clamp-2"><strong>Symbolism:</strong> {naga.symbolism}</p>
      {naga.scriptures.length > 0 && <p className="text-xs text-muted-foreground"><strong>Mentions:</strong> {naga.scriptures.join(', ').substring(0,50)}...</p>}
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Link href={`/characters/${naga.id}`} passHref>
        <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
          Learn More <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export function NagaCategoryPageDisplay({ categoryData }: NagaCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for this category could not be loaded.
        </p>
        <Link href="/characters" passHref>
          <Button variant="default">Back to Categories</Button>
        </Link>
      </div>
    );
  }

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
                data-ai-hint={categoryData.imageAiHint || 'mythical creatures'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <CardTitle className="text-4xl font-bold text-primary mb-1">{categoryData.category}</CardTitle>
            <CardDescription className="text-xl text-primary/80 mb-3">{categoryData.type} - {categoryData.origin}</CardDescription>
            <p className="text-lg text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['symbolism', 'notable_nagas']} className="w-full">
          
          <AccordionItem value="symbolism">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Gem className="mr-2" /> Symbolism & Significance
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <DetailSection title="Attributes" icon={<ShieldCheck className="w-5 h-5" />}>
                <ul className="list-disc list-inside">
                  {categoryData.symbolism.attributes.map(attr => <li key={attr}>{attr}</li>)}
                </ul>
              </DetailSection>
              <DetailSection title="Associated Elements" icon={<Waves className="w-5 h-5" />}>
                <p>{categoryData.symbolism.elements.join(', ')}</p>
              </DetailSection>
              <DetailSection title="Spiritual Significance" icon={<Brain className="w-5 h-5" />}>
                <p>{categoryData.symbolism.spiritual_significance}</p>
              </DetailSection>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="details">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <BookOpen className="mr-2" /> Key Details
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <DetailSection title="Abode" icon={<Mountain className="w-5 h-5" />}>
                <p>{categoryData.abode.join(', ')}</p>
              </DetailSection>
              <DetailSection title="Associated Deities" icon={<Users className="w-5 h-5" />}>
                <p>{categoryData.associated_deities.join(', ')}</p>
              </DetailSection>
              <DetailSection title="Festivals" icon={<CalendarDays className="w-5 h-5" />}>
                <p>{categoryData.festivals.join(', ')}</p>
              </DetailSection>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="notable_nagas">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ShieldQuestion className="mr-2" /> Notable Nagas
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryData.notable_nagas.map((naga) => (
                  <NotableNagaCard key={naga.id} naga={naga} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="related_concepts">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
               <Link2 className="mr-2" /> Related Concepts
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-2">
                <ul className="list-disc list-inside">
                    {categoryData.related_concepts.map(concept => <li key={concept}>{concept}</li>)}
                </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="external_links">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ExternalLink className="mr-2" /> External Links
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-2">
              <p>
                <a href={categoryData.external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Wikipedia: {categoryData.category}
                </a>
              </p>
              {categoryData.external_links.scripture_references.map((link, index) => (
                <p key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Scripture Reference {index + 1}
                  </a>
                </p>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="bg-muted/30 p-6">
        <Link href="/characters" passHref>
          <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
            Back to All Categories
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
