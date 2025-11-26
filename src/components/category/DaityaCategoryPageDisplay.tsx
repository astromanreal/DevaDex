
import type { DaityaCategoryData, NotableDaitya } from '@/data/daitya-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Users, BookOpen, Link2, ExternalLink, ArrowRight, ShieldAlert, Zap, Mountain, Palette, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface DaityaCategoryPageDisplayProps {
  categoryData: DaityaCategoryData;
}

const DaityaDetailCard: React.FC<{ daitya: NotableDaitya }> = ({ daitya }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
          <Image
            src={daitya.imageUrl}
            alt={daitya.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={daitya.imageAiHint}
          />
        </div>
        <div className="flex-grow">
          <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{daitya.name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{daitya.type} - From {daitya.epic || 'Various Texts'}</CardDescription>
          {daitya.yuga && <p className="text-xs text-muted-foreground">Period: {daitya.yuga}</p>}
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-3 flex-grow">
      <div>
        <h4 className="font-semibold text-secondary-foreground mb-1">Traits:</h4>
        <div className="flex flex-wrap gap-1">
            {daitya.traits.map((trait, index) => <Badge key={index} variant="outline" className="text-xs">{trait}</Badge>)}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-secondary-foreground mb-1">Notable Deeds:</h4>
        <ul className="list-disc list-inside pl-2 space-y-0.5 text-xs">
          {daitya.deeds.map((deed, index) => <li key={index} className="truncate" title={deed}>{deed}</li>)}
        </ul>
      </div>
      {daitya.defeated_by && <p><strong>Defeated By:</strong> {daitya.defeated_by}</p>}
      <p className="line-clamp-2"><strong>Symbolism:</strong> {daitya.symbolism}</p>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Link href={`/characters/${daitya.id}`} passHref>
        <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
          Learn More <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export function DaityaCategoryPageDisplay({ categoryData }: DaityaCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Daitya category could not be loaded.
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
                data-ai-hint={categoryData.imageAiHint || 'daitya beings cosmic'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <ShieldAlert className="h-10 w-10 mr-3 text-primary" /> 
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">Explore notable Daitya figures from Sanatan Dharma.</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
            <p className="text-sm text-muted-foreground mt-2"><strong>Origin:</strong> Father: {categoryData.origin.father}, Mother: {categoryData.origin.mother}. {categoryData.origin.lore}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
         <Accordion type="multiple" defaultValue={['notable_daityas', 'philosophical_symbolism']} className="w-full">
             <AccordionItem value="notable_daityas">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Users className="mr-2" /> Notable Daityas
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                    {categoryData.notable_daityas.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {categoryData.notable_daityas.map((daitya) => (
                           <DaityaDetailCard key={daitya.id} daitya={daitya} />
                        ))}
                    </div>
                    ) : (
                    <div className="text-center py-8">
                        <AlertTriangle className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
                        <p className="text-xl text-muted-foreground">No Daityas found in this category data.</p>
                    </div>
                    )}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="key_traits">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Zap className="mr-2" /> Key Traits
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-foreground">
                     <div className="flex flex-wrap gap-2">
                        {categoryData.key_traits.map(trait => <Badge key={trait} variant="secondary">{trait}</Badge>)}
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="philosophical_symbolism">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Lightbulb className="mr-2" /> Philosophical Symbolism
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-3 text-foreground">
                    <p><strong>Duality:</strong> {categoryData.philosophical_symbolism.duality}</p>
                    <p><strong>Spiritual Lesson:</strong> {categoryData.philosophical_symbolism.spiritual_lesson}</p>
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="associated_realms">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Mountain className="mr-2" /> Associated Realms
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-3 text-foreground">
                    <p><strong>Daitya Kingdoms:</strong> {categoryData.associated_realms.daitya_kingdoms.join(', ')}</p>
                    <p><strong>Ruling Dynasties:</strong> {categoryData.associated_realms.ruling_dynasties.join(', ')}</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="comparison">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Link2 className="mr-2" /> Comparison with Other Beings
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-3 text-foreground">
                    <p><strong>Daityas vs Devas:</strong> Devas - {categoryData.comparison.daityas_vs_devas.devas}. Daityas - {categoryData.comparison.daityas_vs_devas.daityas}.</p>
                    <p><strong>Daityas vs Danavas:</strong> {categoryData.comparison.daityas_vs_danavas.note}</p>
                </AccordionContent>
            </AccordionItem>

             <AccordionItem value="cultural_influence">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Palette className="mr-2" /> Cultural Influence
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-3 text-foreground">
                    <p><strong>Festivals:</strong> {categoryData.cultural_influence.festivals.join(', ')}</p>
                    <p><strong>Temples:</strong> {categoryData.cultural_influence.temples.join(', ')}</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="scriptures">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <BookOpen className="mr-2" /> Scriptural References
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-foreground">
                    <ul className="list-disc list-inside">
                        {categoryData.scriptural_references.map(scripture => <li key={scripture}>{scripture}</li>)}
                    </ul>
                </AccordionContent>
            </AccordionItem>

             <AccordionItem value="external_links">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <ExternalLink className="mr-2" /> External Links
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-accent space-y-1">
                    <p><a href={categoryData.external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="hover:underline">Wikipedia: Daitya</a></p>
                    <p><a href={categoryData.external_links.bhagavatam_reference} target="_blank" rel="noopener noreferrer" className="hover:underline">Bhagavatam Reference</a></p>
                    <p><a href={categoryData.external_links.vishnu_purana_reference} target="_blank" rel="noopener noreferrer" className="hover:underline">Vishnu Purana Reference</a></p>
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
