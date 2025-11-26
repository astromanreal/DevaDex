
import type { DashaMahavidyaCategoryDataType } from '@/data/characters'; // Assuming this type covers the structure
import Image from 'next/image'; // Explicit import
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Brain, Users, Zap, Palette, AlertTriangle, Sprout, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashaMahavidyaCategoryPageDisplayProps {
  categoryData: DashaMahavidyaCategoryDataType;
}

const DetailSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-secondary-foreground flex items-center mb-2">
      {icon} <span className="ml-2">{title}</span>
    </h3>
    <div className="text-foreground leading-relaxed space-y-1">{children}</div>
  </div>
);

const GoddessOverviewCard: React.FC<{ goddess: DashaMahavidyaCategoryDataType['goddesses_overview'][0] }> = ({ goddess }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow">
    <CardHeader className="p-4">
      <div className="flex items-start gap-4">
        {goddess.imageUrl && (
          <div className="relative w-20 h-20 rounded-md overflow-hidden shrink-0">
            <Image
              src={goddess.imageUrl}
              alt={goddess.name}
              layout="fill"
              objectFit="cover"
              data-ai-hint={goddess.imageAiHint || 'goddess face'}
            />
          </div>
        )}
        <div>
          <CardTitle className="text-lg text-primary">{goddess.name} <span className="text-sm text-muted-foreground">({goddess.sanskritName})</span></CardTitle>
          <CardDescription className="text-xs">{goddess.role}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm">
      <p className="line-clamp-3">{goddess.significance}</p>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Link href={`/characters/${goddess.id}`} passHref>
        <Button variant="link" size="sm" className="p-0 h-auto text-accent">
          Learn More &rarr;
        </Button>
      </Link>
    </CardFooter>
  </Card>
);


export function DashaMahavidyaCategoryPageDisplay({ categoryData }: DashaMahavidyaCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Dasha Mahavidya category could not be loaded.
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
                alt={categoryData.name}
                layout="fill"
                objectFit="cover"
                data-ai-hint={categoryData.imageAiHint || 'divine group'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <CardTitle className="text-4xl font-bold text-primary mb-1">{categoryData.name}</CardTitle>
            <CardDescription className="text-xl text-primary/80 mb-3">{categoryData.type}</CardDescription>
            <p className="text-lg text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['philosophy', 'goddesses_overview']} className="w-full">
          
          <AccordionItem value="philosophy">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Brain className="mr-2" /> Philosophy & Core Concepts
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <DetailSection title="Introduction" icon={<BookOpen className="w-5 h-5" />}>
                <p>{categoryData.philosophy.introduction}</p>
              </DetailSection>
              <DetailSection title="Core Concepts" icon={<Zap className="w-5 h-5" />}>
                <ul className="list-disc list-inside">
                  {categoryData.philosophy.core_concepts.map(concept => <li key={concept}>{concept}</li>)}
                </ul>
              </DetailSection>
              <DetailSection title="Spiritual Goal" icon={<HeartHandshake className="w-5 h-5" />}>
                <p>{categoryData.philosophy.spiritual_goal}</p>
              </DetailSection>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="goddesses_overview">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Users className="mr-2" /> Goddesses Overview
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryData.goddesses_overview.map((goddess) => (
                        <GoddessOverviewCard key={goddess.id} goddess={goddess} />
                    ))}
                </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="rituals">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
               <Sprout className="mr-2" /> Rituals & Worship
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <p>{categoryData.rituals_and_worship}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="art_symbolism">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Palette className="mr-2" /> Symbolism in Art
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <p>{categoryData.symbolism_in_art}</p>
            </AccordionContent>
          </AccordionItem>

           <AccordionItem value="significance_today">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Zap className="mr-2" /> Significance Today
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <p>{categoryData.significance_today}</p>
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
