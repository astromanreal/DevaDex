
import type { EkadashaRudraCategoryData, EkadashaRudraAvatar } from '@/data/ekadasha-rudra-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Zap, BookOpen, Users, ExternalLink, ShieldCheck, Brain, Info } from 'lucide-react';

interface EkadashaRudraCategoryPageDisplayProps {
  categoryData: EkadashaRudraCategoryData;
}

const RudraAvatarCard: React.FC<{ rudra: EkadashaRudraAvatar }> = ({ rudra }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
          <Image
            src={rudra.imageUrl}
            alt={rudra.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={rudra.imageAiHint}
          />
        </div>
        <div className="flex-grow">
          <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{rudra.name}</CardTitle>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-3 flex-grow">
      <p className="line-clamp-3"><strong>Description:</strong> {rudra.description}</p>
      <div>
        <strong>Key Concepts:</strong>
        <div className="flex flex-wrap gap-1 mt-1">
          {rudra.key_concepts.map(concept => <Badge key={concept} variant="secondary" className="text-xs">{concept}</Badge>)}
        </div>
      </div>
      <p><strong>Significance:</strong> {rudra.significance}</p>
       <div>
        <strong>Symbolism:</strong>
        <ul className="list-disc list-inside ml-4 text-xs">
          {rudra.symbolism.map(sym => <li key={sym}>{sym}</li>)}
        </ul>
      </div>
       <div>
        <strong>Key Characteristics:</strong>
        <ul className="list-disc list-inside ml-4 text-xs">
          {rudra.key_characteristics.map(char => <li key={char}>{char}</li>)}
        </ul>
      </div>
      {rudra.texts && rudra.texts.length > 0 && (
         <div>
          <strong>Mentioned In:</strong>
          <div className="flex flex-wrap gap-1 mt-1">
            {rudra.texts.map(text => <Badge key={text.toString()} variant="outline" className="text-xs">{text}</Badge>)}
          </div>
        </div>
      )}
    </CardContent>
    {/* No direct character page link for individual Rudras from this data for now */}
    {/* Add CardFooter with Link if individual pages are created */}
  </Card>
);

export function EkadashaRudraCategoryPageDisplay({ categoryData }: EkadashaRudraCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Ekadasha Rudra category could not be loaded.
        </p>
        <Link href="/characters" passHref>
          <Button variant="default">Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const { title, description, avatars, scriptural_references, worship_and_significance, external_links } = categoryData;

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
                data-ai-hint={categoryData.imageAiHint || 'shiva rudras fierce group'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Zap className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
             <CardDescription className="text-lg text-primary/80 mb-3">{title}</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['avatars', 'worship_significance']} className="w-full">
          
          <AccordionItem value="worship_significance">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ShieldCheck className="mr-2" /> Worship & Significance
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p>{worship_and_significance}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="avatars">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Users className="mr-2" /> The Rudra Manifestations
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> 
                {avatars.map((rudra) => (
                  <RudraAvatarCard key={rudra.id} rudra={rudra} />
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
              <p><Link href={external_links.wikipedia_rudras} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Rudras</Link></p>
              <p><Link href={external_links.shiva_purana_ref} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Shiva Purana (WisdomLib)</Link></p>
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
