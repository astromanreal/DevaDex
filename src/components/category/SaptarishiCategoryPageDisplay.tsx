
import type { SaptarishiCategoryData, SaptarishiEntry } from '@/data/saptarishi-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Users, BookOpen, Brain, Library, ExternalLink, ArrowRight, ScrollText, Star, GitBranch } from 'lucide-react';

interface SaptarishiCategoryPageDisplayProps {
  categoryData: SaptarishiCategoryData;
}

const RishiDetailCard: React.FC<{ rishi: SaptarishiEntry }> = ({ rishi }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
          <Image
            src={rishi.imageUrl}
            alt={rishi.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={rishi.imageAiHint}
          />
        </div>
        <div className="flex-grow">
          <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{rishi.name} <span className="text-sm text-muted-foreground">({rishi.sanskrit_name})</span></CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{rishi.meaning}</CardDescription>
          <div className="mt-1">
            {rishi.titles?.map(title => <Badge key={title} variant="outline" className="text-xs mr-1">{title}</Badge>)}
          </div>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-2 flex-grow">
      <p><strong>Symbolism:</strong> {rishi.symbolism}</p>
      <p><strong>Associated Chakra:</strong> {rishi.associated_chakra}</p>
      <p><strong>Mantra:</strong> <code className="text-xs bg-muted p-1 rounded">{rishi.mantra}</code></p>
      <div>
        <strong>Qualities:</strong>
        <div className="flex flex-wrap gap-1 mt-1">
          {rishi.qualities.map(quality => <Badge key={quality} variant="secondary" className="text-xs">{quality}</Badge>)}
        </div>
      </div>
      <p className="line-clamp-3"><strong>Story:</strong> {rishi.story}</p>
      <p><strong>Contribution:</strong> {rishi.contribution}</p>
      {rishi.associated_deity && <p><strong>Associated Deity:</strong> {rishi.associated_deity}</p>}
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Link href={`/characters/${rishi.id}`} passHref>
        <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
          View Full Profile <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export function SaptarishiCategoryPageDisplay({ categoryData }: SaptarishiCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Saptarishi category could not be loaded.
        </p>
        <Link href="/characters" passHref>
          <Button variant="default">Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const { introduction, rishis, scriptural_references, external_links } = categoryData;

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
                data-ai-hint={categoryData.imageAiHint || 'sages stars constellation'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Library className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">The Seven Great Sages of Cosmic Order</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['rishis', 'introduction']} className="w-full">
          
          <AccordionItem value="introduction">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Brain className="mr-2" /> Introduction & Significance
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p>{introduction}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rishis">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Users className="mr-2" /> The Seven Sages
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> 
                {rishis.map((rishi) => (
                  <RishiDetailCard key={rishi.id} rishi={rishi} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="scriptures">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <BookOpen className="mr-2" /> Scriptural References
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-foreground">
               <div className="flex flex-wrap gap-2">
                  {scriptural_references.map(scripture => <Badge key={scripture.toString()} variant="secondary">{scripture}</Badge>)}
                </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="external_links">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ExternalLink className="mr-2" /> Further Reading
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-1 text-foreground">
              <p><Link href={external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Saptarishi</Link></p>
              <p><Link href={external_links.vedic_texts} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Vedic Texts (Sacred-Texts)</Link></p>
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
