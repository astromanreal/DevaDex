
import type { DanavaCategoryData, NotableDanava } from '@/data/danava-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Users, BookOpen, ExternalLink, ArrowRight, Zap, Palette, Lightbulb, Mountain, Link2 as LinkIcon, Globe } from 'lucide-react'; // Using Zap for magical power
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface DanavaCategoryPageDisplayProps {
  categoryData: DanavaCategoryData;
}

const DanavaDetailCard: React.FC<{ danava: NotableDanava }> = ({ danava }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
          <Image
            src={danava.imageUrl}
            alt={danava.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={danava.imageAiHint}
          />
        </div>
        <div className="flex-grow">
          <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{danava.name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{danava.type} - {danava.epic || 'Various Texts'}</CardDescription>
          {danava.yuga && <p className="text-xs text-muted-foreground">Period: {danava.yuga}</p>}
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-3 flex-grow">
      <div>
        <h4 className="font-semibold text-secondary-foreground mb-1">Traits:</h4>
        <div className="flex flex-wrap gap-1">
            {danava.traits.map((trait, index) => <Badge key={index} variant="outline" className="text-xs">{trait}</Badge>)}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-secondary-foreground mb-1">Notable Deeds:</h4>
        <ul className="list-disc list-inside pl-2 space-y-0.5 text-xs">
          {danava.deeds.map((deed, index) => <li key={index} className="truncate" title={deed}>{deed}</li>)}
        </ul>
      </div>
      {danava.defeated_by && <p><strong>Defeated By:</strong> {danava.defeated_by}</p>}
      <p className="line-clamp-2"><strong>Symbolism:</strong> {danava.symbolism}</p>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Link href={`/characters/${danava.id}`} passHref>
        <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
          Learn More <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export function DanavaCategoryPageDisplay({ categoryData }: DanavaCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Danava category could not be loaded.
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
                data-ai-hint={categoryData.imageAiHint || 'danava beings magic'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Zap className="h-10 w-10 mr-3 text-primary" /> 
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">Explore notable Danava figures from Sanatan Dharma.</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
            <p className="text-sm text-muted-foreground mt-2"><strong>Origin:</strong> Father: {categoryData.origin.father}, Mother: {categoryData.origin.mother}. {categoryData.origin.lore}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
         <Accordion type="multiple" defaultValue={['notable_danavas', 'philosophical_symbolism']} className="w-full">
             <AccordionItem value="notable_danavas">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Users className="mr-2" /> Notable Danavas
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                    {categoryData.notable_danavas.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {categoryData.notable_danavas.map((danava) => (
                           <DanavaDetailCard key={danava.id} danava={danava} />
                        ))}
                    </div>
                    ) : (
                    <div className="text-center py-8">
                        <AlertTriangle className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
                        <p className="text-xl text-muted-foreground">No Danavas found in this category data.</p>
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
                    <p><strong>Dual Nature:</strong> {categoryData.philosophical_symbolism.dual_nature}</p>
                    <p><strong>Spiritual Lessons:</strong> {categoryData.philosophical_symbolism.spiritual_lessons}</p>
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="associated_realms">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Mountain className="mr-2" /> Associated Realms
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-3 text-foreground">
                    <p><strong>Danava Kingdoms:</strong> {categoryData.associated_realms.danava_kingdoms.join(', ')}</p>
                    <p><strong>Influence Zones:</strong> {categoryData.associated_realms.influence_zones.join(', ')}</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="comparison">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <LinkIcon className="mr-2" /> Comparison with Other Beings
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-3 text-foreground">
                    <p><strong>Danavas vs Daityas:</strong> {categoryData.comparison.danavas_vs_daityas.note}</p>
                    <p><strong>Danavas vs Devas:</strong> Devas - {categoryData.comparison.danavas_vs_devas.devas}. Danavas - {categoryData.comparison.danavas_vs_devas.danavas}.</p>
                </AccordionContent>
            </AccordionItem>

             <AccordionItem value="cultural_influence">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Palette className="mr-2" /> Cultural Influence
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-3 text-foreground">
                    <p><strong>Vedic Role:</strong> {categoryData.cultural_influence.vedic_role}</p>
                    <p><strong>Epic Impact:</strong> {categoryData.cultural_influence.epic_impact}</p>
                    <p><strong>Astrology:</strong> {categoryData.cultural_influence.astrology}</p>
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
                    <p><a href={categoryData.external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="hover:underline">Wikipedia: Danava</a></p>
                    <p><a href={categoryData.external_links.rigveda_reference} target="_blank" rel="noopener noreferrer" className="hover:underline">Rigveda Reference</a></p>
                    <p><a href={categoryData.external_links.bhagavata_purana} target="_blank" rel="noopener noreferrer" className="hover:underline">Bhagavata Purana Reference</a></p>
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
