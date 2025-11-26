
import type { YakshaCategoryData, NotableYakshaFigure } from '@/data/yaksha-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, BookOpen, Users, Gem, TreePine, Mountain, Banknote, ShieldCheck, Lightbulb, Globe, Palette, ExternalLink, Sparkles, Users2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

interface YakshaCategoryPageDisplayProps {
  categoryData: YakshaCategoryData;
}

const NotableYakshaFigureCard: React.FC<{ figure: NotableYakshaFigure }> = ({ figure }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
          <Image
            src={figure.imageUrl}
            alt={figure.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={figure.imageAiHint}
          />
        </div>
        <div className="flex-grow">
          <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{figure.name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{figure.role}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-3 flex-grow">
      {figure.description && <p className="line-clamp-3">{figure.description}</p>}
      <div>
        <h4 className="font-semibold text-secondary-foreground mb-1">Mentioned In:</h4>
        <div className="flex flex-wrap gap-1">
          {figure.scriptures.map((scripture, index) => <Badge key={index} variant="outline" className="text-xs">{scripture}</Badge>)}
        </div>
      </div>
    </CardContent>
    {/* No direct link to character page for these figures for now */}
  </Card>
);

export function YakshaCategoryPageDisplay({ categoryData }: YakshaCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Yaksha category could not be loaded.
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
                data-ai-hint={categoryData.imageAiHint || 'yaksha nature spirits'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Gem className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">Explore the lore of Yakshas in Sanatan Dharma.</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['origin_realm', 'nature_traits']} className="w-full">
          
          <AccordionItem value="origin_realm">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <TreePine className="mr-2" /> Origin & Realm
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Mythic Origin:</strong> {categoryData.origin.mythic_origin}</p>
              <p><strong>Etymology:</strong> {categoryData.origin.etymology}</p>
              <p><strong>Realm:</strong> {categoryData.origin.realm}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="nature_traits">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Sparkles className="mr-2" /> Nature & Traits
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Alignment:</strong> {categoryData.nature_and_traits.alignment}</p>
              <div>
                <strong>Attributes:</strong>
                <ul className="list-disc list-inside ml-4">
                  {categoryData.nature_and_traits.attributes.map(attr => <li key={attr}>{attr}</li>)}
                </ul>
              </div>
              <div>
                <strong>Powers:</strong>
                <ul className="list-disc list-inside ml-4">
                  {categoryData.nature_and_traits.powers.map(power => <li key={power}>{power}</li>)}
                </ul>
              </div>
              <p><strong>Control/Worship:</strong> {categoryData.nature_and_traits.control_or_worship}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="symbolism_function">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Lightbulb className="mr-2" /> Symbolism & Function
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Symbolism:</strong> {categoryData.symbolism_and_function.symbolism}</p>
              <p><strong>Spiritual Lesson:</strong> {categoryData.symbolism_and_function.spiritual_lesson}</p>
            </AccordionContent>
          </AccordionItem>

           <AccordionItem value="notable_figures">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                <Users className="mr-2" /> Notable Figures
            </AccordionTrigger>
            <AccordionContent className="pt-4">
                {categoryData.notable_figures.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {categoryData.notable_figures.map((figure) => (
                       <NotableYakshaFigureCard key={figure.name} figure={figure} />
                    ))}
                </div>
                ) : (
                <div className="text-center py-8">
                    <AlertTriangle className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
                    <p className="text-xl text-muted-foreground">No notable Yaksha figures found in this category data.</p>
                </div>
                )}
            </AccordionContent>
          </AccordionItem>


          <AccordionItem value="notable_mentions">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <BookOpen className="mr-2" /> Notable Mentions in Scriptures
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <ul className="list-disc list-inside">
                {categoryData.notable_mentions.map(mention => (
                  <li key={`${mention.scripture}-${mention.reference.substring(0,10)}`}><strong>{mention.scripture}:</strong> {mention.reference}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="associated_deities">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ShieldCheck className="mr-2" /> Associated Deities & Protection
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Deity Leader:</strong> {categoryData.associated_deities_and_protection.deity_leader}</p>
              <div>
                <strong>Other Associations:</strong>
                <ul className="list-disc list-inside ml-4">
                  {categoryData.associated_deities_and_protection.other_associations.map(assoc => <li key={assoc}>{assoc}</li>)}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="behavior_habitat">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Mountain className="mr-2" /> Behavior & Habitat
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
               <div>
                <strong>Preferred Places:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {categoryData.behavior_and_habitat.preferred_places.map(place => <Badge key={place} variant="outline">{place}</Badge>)}
                </div>
              </div>
              <p><strong>Behavior:</strong> {categoryData.behavior_and_habitat.behavior}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cultural_influence">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Palette className="mr-2" /> Cultural Influence
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Art & Architecture:</strong> {categoryData.cultural_influence.art_and_architecture}</p>
              <p><strong>Folk Beliefs:</strong> {categoryData.cultural_influence.folk_beliefs}</p>
              <div>
                <strong>Regional Variants:</strong>
                <ul className="list-disc list-inside ml-4">
                  {categoryData.cultural_influence.regional_variants.map(variant => <li key={variant}>{variant}</li>)}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="comparative_mythology">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Users2 className="mr-2" /> Comparative Mythology
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              {Object.entries(categoryData.comparative_mythology.similar_beings).map(([being, description]) => (
                <p key={being}><strong>{being}:</strong> {description}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="external_links">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ExternalLink className="mr-2" /> Further Reading
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-2 text-foreground">
              <p><Link href={categoryData.external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Yaksha</Link></p>
              <p><Link href={categoryData.external_links.yaksha_prashna} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Yaksha Prashna (WisdomLib)</Link></p>
              <p><Link href={categoryData.external_links.kubera_info} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Kubera Info (WisdomLib)</Link></p>
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
