
import type { PishachaCategoryData } from '@/data/pishacha-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, BookOpen, ListChecks, Brain, ScrollText, ShieldCheck, MapPin, Globe, Users2, ExternalLink, Ghost } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

interface PishachaCategoryPageDisplayProps {
  categoryData: PishachaCategoryData;
}

export function PishachaCategoryPageDisplay({ categoryData }: PishachaCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Pishacha category could not be loaded.
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
                data-ai-hint={categoryData.imageAiHint || 'pishacha ghostly spirits'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Ghost className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">Explore the lore of Pishachas in Sanatan Dharma.</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['origin', 'nature_and_traits']} className="w-full">
          
          <AccordionItem value="origin">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <BookOpen className="mr-2" /> Origin & Realm
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Mythic Origin:</strong> {categoryData.origin.mythic_origin}</p>
              <p><strong>Etymology:</strong> {categoryData.origin.etymology}</p>
              <p><strong>Realm:</strong> {categoryData.origin.realm}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="nature_and_traits">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ListChecks className="mr-2" /> Nature & Traits
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
              <p><strong>Control:</strong> {categoryData.nature_and_traits.control}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="symbolism_and_function">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Brain className="mr-2" /> Symbolism & Function
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Symbolism:</strong> {categoryData.symbolism_and_function.symbolism}</p>
              <p><strong>Spiritual Lesson:</strong> {categoryData.symbolism_and_function.spiritual_lesson}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="notable_mentions">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ScrollText className="mr-2" /> Notable Mentions in Scriptures
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <ul className="list-disc list-inside">
                {categoryData.notable_mentions.map((mention, index) => (
                  <li key={`${mention.scripture}-${index}`}><strong>{mention.scripture}:</strong> {mention.reference}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="associated_deities_and_protection">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ShieldCheck className="mr-2" /> Associated Deities & Protection
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <div>
                <strong>Deities Invoked for Protection:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {categoryData.associated_deities_and_protection.deities_invoked.map(deity => <Badge key={deity} variant="secondary">{deity}</Badge>)}
                </div>
              </div>
              <div>
                <strong>Protective Mantras:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  {categoryData.associated_deities_and_protection.protective_mantras.map(mantra => <li key={mantra}>{mantra}</li>)}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="behavior_and_habitat">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <MapPin className="mr-2" /> Behavior & Habitat
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
              <Globe className="mr-2" /> Cultural Influence
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Folk Traditions:</strong> {categoryData.cultural_influence.folk_traditions}</p>
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
              <p><Link href={categoryData.external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Pishacha</Link></p>
              <p><Link href={categoryData.external_links.garuda_purana} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Garuda Purana (WisdomLib)</Link></p>
              <p><Link href={categoryData.external_links.kali_tantra} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Kali Tantra (SanskritDocuments)</Link></p>
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
