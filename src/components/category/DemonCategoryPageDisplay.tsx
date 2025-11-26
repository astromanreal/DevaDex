
import type { DemonCategoryData, NotableDemon } from '@/data/demon-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ShieldAlert, BookOpen, Users, ExternalLink, ArrowRight, Skull } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface DemonCategoryPageDisplayProps {
  categoryData: DemonCategoryData;
}

const DemonDetailCard: React.FC<{ demon: NotableDemon }> = ({ demon }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
          <Image
            src={demon.imageUrl}
            alt={demon.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={demon.imageAiHint}
          />
        </div>
        <div className="flex-grow">
          <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{demon.name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{demon.type} - From {demon.epic || 'Various Texts'}</CardDescription>
          {demon.kingdom && <p className="text-xs text-muted-foreground">Kingdom: {demon.kingdom}</p>}
          {demon.yuga && <p className="text-xs text-muted-foreground">Period: {demon.yuga}</p>}
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-3 flex-grow">
      <div>
        <h4 className="font-semibold text-secondary-foreground mb-1">Traits:</h4>
        <div className="flex flex-wrap gap-1">
            {demon.traits.map((trait, index) => <Badge key={index} variant="outline" className="text-xs">{trait}</Badge>)}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-secondary-foreground mb-1">Notable Deeds:</h4>
        <ul className="list-disc list-inside pl-2 space-y-0.5 text-xs">
          {demon.notable_deeds.map((deed, index) => <li key={index} className="truncate" title={deed}>{deed}</li>)}
        </ul>
      </div>
       <p><strong>Defeated By:</strong> {demon.defeated_by}</p>
      <p className="line-clamp-2"><strong>Symbolism:</strong> {demon.symbolism}</p>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Link href={`/characters/${demon.id}`} passHref>
        <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
          Learn More <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export function DemonCategoryPageDisplay({ categoryData }: DemonCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Demon category could not be loaded.
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
                data-ai-hint={categoryData.imageAiHint || 'demonic figures battle'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Skull className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">Explore notable demonic figures from Sanatan Dharma.</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
         <Accordion type="multiple" defaultValue={['notable_demons', 'symbolic_meaning']} className="w-full">
             <AccordionItem value="notable_demons">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Users className="mr-2" /> Notable Demons
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                    {categoryData.notable_demons.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {categoryData.notable_demons.map((demon) => (
                        <DemonDetailCard key={demon.id} demon={demon} />
                        ))}
                    </div>
                    ) : (
                    <div className="text-center py-8">
                        <AlertTriangle className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
                        <p className="text-xl text-muted-foreground">No demons found in this category data.</p>
                    </div>
                    )}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="symbolic_meaning">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <ShieldAlert className="mr-2" /> Symbolic Meaning & Lessons
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-3 text-foreground">
                    <p><strong>General Meaning:</strong> {categoryData.symbolic_meaning.asura}</p>
                    <p><strong>Defeat Symbolism:</strong> {categoryData.symbolic_meaning.defeat}</p>
                    <p><strong>Spiritual Lesson:</strong> {categoryData.symbolic_meaning.spiritual_lesson}</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="demon_types">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Users className="mr-2" /> Types of Demonic Beings
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-foreground">
                     <div className="flex flex-wrap gap-2">
                        {categoryData.types.map(type => <Badge key={type} variant="secondary">{type}</Badge>)}
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="scriptures">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <BookOpen className="mr-2" /> Mentioned In Scriptures
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-foreground">
                    <ul className="list-disc list-inside">
                        {categoryData.scriptures_mentioning_demons.map(scripture => <li key={scripture}>{scripture}</li>)}
                    </ul>
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
