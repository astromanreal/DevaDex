
import type { RakshasaCategoryData, NotableRakshasa } from '@/data/rakshasa-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ShieldAlert, BookOpen, Users, ExternalLink, ArrowRight, Skull, Link2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface RakshasaCategoryPageDisplayProps {
  categoryData: RakshasaCategoryData;
}

const RakshasaDetailCard: React.FC<{ rakshasa: NotableRakshasa }> = ({ rakshasa }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
          <Image
            src={rakshasa.imageUrl}
            alt={rakshasa.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={rakshasa.imageAiHint}
          />
        </div>
        <div className="flex-grow">
          <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{rakshasa.name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{rakshasa.type} - From {rakshasa.epic || 'Various Texts'}</CardDescription>
          {rakshasa.kingdom && <p className="text-xs text-muted-foreground">Kingdom: {rakshasa.kingdom}</p>}
          {rakshasa.yuga && <p className="text-xs text-muted-foreground">Period: {rakshasa.yuga}</p>}
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-3 flex-grow">
      <div>
        <h4 className="font-semibold text-secondary-foreground mb-1">Traits:</h4>
        <div className="flex flex-wrap gap-1">
            {rakshasa.traits.map((trait, index) => <Badge key={index} variant="outline" className="text-xs">{trait}</Badge>)}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-secondary-foreground mb-1">Notable Deeds:</h4>
        <ul className="list-disc list-inside pl-2 space-y-0.5 text-xs">
          {rakshasa.notable_deeds.map((deed, index) => <li key={index} className="truncate" title={deed}>{deed}</li>)}
        </ul>
      </div>
      {rakshasa.defeated_by && <p><strong>Defeated By:</strong> {rakshasa.defeated_by}</p>}
      <p className="line-clamp-2"><strong>Symbolism:</strong> {rakshasa.symbolism}</p>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Link href={`/characters/${rakshasa.id}`} passHref>
        <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
          Learn More <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export function RakshasaCategoryPageDisplay({ categoryData }: RakshasaCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Rakshasa category could not be loaded.
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
                data-ai-hint={categoryData.imageAiHint || 'rakshasa beings fierce'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Skull className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">Explore notable Rakshasa figures from Sanatan Dharma.</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
            <p className="text-sm text-muted-foreground mt-2"><strong>Origin:</strong> {categoryData.origin}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
         <Accordion type="multiple" defaultValue={['notable_rakshasas', 'philosophical_symbolism']} className="w-full">
             <AccordionItem value="notable_rakshasas">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Users className="mr-2" /> Notable Rakshasas
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                    {categoryData.notable_rakshasas.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {categoryData.notable_rakshasas.map((rakshasa) => (
                           <RakshasaDetailCard key={rakshasa.id} rakshasa={rakshasa} />
                        ))}
                    </div>
                    ) : (
                    <div className="text-center py-8">
                        <AlertTriangle className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
                        <p className="text-xl text-muted-foreground">No Rakshasas found in this category data.</p>
                    </div>
                    )}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="philosophical_symbolism">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <ShieldAlert className="mr-2" /> Philosophical Symbolism & Lessons
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-3 text-foreground">
                    <p><strong>Rakshasa Symbolism:</strong> {categoryData.philosophical_symbolism.rakshasa}</p>
                    <p><strong>Spiritual Lesson:</strong> {categoryData.philosophical_symbolism.spiritual_lesson}</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rakshasa_types">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Users className="mr-2" /> Rakshasa Classifications
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-foreground">
                    <p className="mb-2">{categoryData.types_subtitle}</p>
                     <div className="flex flex-wrap gap-2">
                        {categoryData.types_list.map(type => <Badge key={type} variant="secondary">{type}</Badge>)}
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="relation_to_asuras">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Link2 className="mr-2" /> Relation to Asuras
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-foreground">
                    <p>{categoryData.relation_to_asuras}</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="scriptures">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <BookOpen className="mr-2" /> Associated Scriptures
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-foreground">
                    <ul className="list-disc list-inside">
                        {categoryData.associated_scriptures.map(scripture => <li key={scripture}>{scripture}</li>)}
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
