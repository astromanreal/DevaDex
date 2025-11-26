
import type { GandharvaCategoryData, NotableGandharva } from '@/data/gandharva-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Music, BookOpen, Users, Sparkles, Link2, ExternalLink, Drama, Lightbulb, Mountain, CalendarDays, Palette, Wind, Brain, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface GandharvaCategoryPageDisplayProps {
  categoryData: GandharvaCategoryData;
}

const DetailSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-secondary-foreground flex items-center mb-2">
      {icon} <span className="ml-2">{title}</span>
    </h3>
    <div className="text-foreground leading-relaxed space-y-1">{children}</div>
  </div>
);

const NotableGandharvaCard: React.FC<{ gandharva: NotableGandharva }> = ({ gandharva }) => (
  <Card className="bg-card/70 backdrop-blur-sm flex flex-col group">
    <CardHeader className="p-4">
       <div className="flex items-start gap-4">
        {gandharva.imageUrl && (
          <div className="relative w-20 h-20 rounded-md overflow-hidden shrink-0 border border-border shadow-sm">
            <Image
              src={gandharva.imageUrl}
              alt={gandharva.name}
              layout="fill"
              objectFit="cover"
              data-ai-hint={gandharva.imageAiHint || 'gandharva musician'}
            />
          </div>
        )}
        <div>
          <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">{gandharva.name}</CardTitle>
          <CardDescription>{gandharva.role}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-2 flex-grow">
      <p><strong>Associated With:</strong> {gandharva.associated_with}</p>
      <p><strong>Attributes:</strong> {gandharva.attributes.join(', ')}</p>
      {gandharva.story && <p className="line-clamp-2"><strong>Story Snippet:</strong> {gandharva.story}</p>}
      <p><strong>Symbolism:</strong> {gandharva.symbolism}</p>
      {gandharva.scriptures.length > 0 && <p className="text-xs text-muted-foreground"><strong>Mentions:</strong> {gandharva.scriptures.join(', ').substring(0,50)}...</p>}
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Link href={`/characters/${gandharva.id}`} passHref>
        <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
          Learn More <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export function GandharvaCategoryPageDisplay({ categoryData }: GandharvaCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Gandharva category could not be loaded.
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
                data-ai-hint={categoryData.imageAiHint || 'celestial beings music'}
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
        <Accordion type="multiple" defaultValue={['symbolism', 'notable_gandharvas']} className="w-full">
          
          <AccordionItem value="symbolism">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Sparkles className="mr-2" /> Symbolism & Significance
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <DetailSection title="Attributes" icon={<Music className="w-5 h-5" />}>
                <ul className="list-disc list-inside">
                  {categoryData.symbolism.attributes.map(attr => <li key={attr}>{attr}</li>)}
                </ul>
              </DetailSection>
              <DetailSection title="Associated Elements" icon={<Wind className="w-5 h-5" />}>
                <p>{categoryData.symbolism.elements.join(', ')}</p>
              </DetailSection>
              <DetailSection title="Spiritual Significance" icon={<Brain className="w-5 h-5" />}>
                <p>{categoryData.symbolism.spiritual_significance}</p>
              </DetailSection>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="details">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <BookOpen className="mr-2" /> Key Details & Functions
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
              <DetailSection title="Roles & Functions" icon={<Users className="w-5 h-5" />}>
                 <ul className="list-disc list-inside">
                    {categoryData.roles_and_functions.map(role => <li key={role}>{role}</li>)}
                </ul>
              </DetailSection>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="notable_gandharvas">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Users className="mr-2" /> Notable Gandharvas
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryData.notable_gandharvas.map((gandharva) => (
                  <NotableGandharvaCard key={gandharva.id} gandharva={gandharva} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

           <AccordionItem value="philosophy_influence">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Lightbulb className="mr-2" /> Philosophy & Influence
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <DetailSection title="Core Concepts" icon={<Brain className="w-5 h-5" />}>
                <ul className="list-disc list-inside">
                  {categoryData.philosophy.core_concepts.map(concept => <li key={concept}>{concept}</li>)}
                </ul>
              </DetailSection>
              <DetailSection title="Aesthetic Ideal" icon={<Palette className="w-5 h-5" />}>
                <p>{categoryData.philosophy.aesthetic_ideal}</p>
              </DetailSection>
               <DetailSection title="Cultural Influence" icon={<Drama className="w-5 h-5" />}>
                <p>{categoryData.influence.cultural}</p>
              </DetailSection>
              <DetailSection title="Literary Influence" icon={<BookOpen className="w-5 h-5" />}>
                <p>{categoryData.influence.literary}</p>
              </DetailSection>
              <DetailSection title="Spiritual Influence" icon={<Sparkles className="w-5 h-5" />}>
                <p>{categoryData.influence.spiritual}</p>
              </DetailSection>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="related_items">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
               <Link2 className="mr-2" /> Related Beings & Concepts
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
                <DetailSection title="Related Beings" icon={<Users className="w-5 h-5" />}>
                    <ul className="list-disc list-inside">
                        {categoryData.related_beings.map(being => <li key={being}>{being}</li>)}
                    </ul>
                </DetailSection>
                <DetailSection title="Related Concepts" icon={<Lightbulb className="w-5 h-5" />}>
                    <ul className="list-disc list-inside">
                        {categoryData.related_concepts.map(concept => <li key={concept}>{concept}</li>)}
                    </ul>
                </DetailSection>
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

