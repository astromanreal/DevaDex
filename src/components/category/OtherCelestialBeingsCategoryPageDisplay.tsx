
import type { OtherCelestialBeingsCategoryData, CelestialBeingType, ScripturalMention } from '@/data/other-celestial-beings-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Users, BookOpen, Sparkles, Link as LinkIcon, Palette, Drama, Star, Feather, Plane, Mountain, ShieldCheck, ExternalLink, Music, Brain } from 'lucide-react';

interface OtherCelestialBeingsCategoryPageDisplayProps {
  categoryData: OtherCelestialBeingsCategoryData;
}

const CelestialBeingTypeCard: React.FC<{ beingType: CelestialBeingType }> = ({ beingType }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col">
    <CardHeader className="p-4">
      <CardTitle className="text-xl text-primary">{beingType.name}</CardTitle>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-2 flex-grow">
      <p>{beingType.description}</p>
      <div>
        <h4 className="font-semibold text-secondary-foreground mb-1">Traits:</h4>
        <div className="flex flex-wrap gap-1">
          {beingType.traits.map((trait, index) => <Badge key={index} variant="outline" className="text-xs">{trait}</Badge>)}
        </div>
      </div>
      {beingType.association && beingType.association.length > 0 && (
        <div>
          <h4 className="font-semibold text-secondary-foreground mb-1">Associated With:</h4>
          <p className="text-xs">{beingType.association.join(', ')}</p>
        </div>
      )}
    </CardContent>
  </Card>
);

export function OtherCelestialBeingsCategoryPageDisplay({ categoryData }: OtherCelestialBeingsCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the "Other Celestial Beings" category could not be loaded.
        </p>
        <Link href="/characters" passHref>
          <Button variant="default">Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const getIconForBeing = (beingName: string) => {
    switch (beingName.toLowerCase()) {
      case 'siddhas': return <Star className="mr-2 h-5 w-5 text-primary" />;
      case 'charanas': return <Music className="mr-2 h-5 w-5 text-primary" />;
      case 'vidyadharas': return <Plane className="mr-2 h-5 w-5 text-primary" />;
      case 'apsaras': return <Feather className="mr-2 h-5 w-5 text-primary" />;
      case 'kinnaras': return <Users className="mr-2 h-5 w-5 text-primary" />; // Generic users for part-human
      case 'mahoragas': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-snake mr-2 text-primary"><path d="m12.5 12.5-1 2H9l-1.5-2.5L6 17H4.5L2 12l2-2h2l1.5 2.5L9 10h2l1.5 2.5L14 10h2l2 2-2.5 4.5L16 22h-1.5l-1-2H11l-1 2H8.5Z"/><path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>; // Custom SVG for Mahoraga
      case 'sadhyas': return <ShieldCheck className="mr-2 h-5 w-5 text-primary" />;
      default: return <Sparkles className="mr-2 h-5 w-5 text-primary" />;
    }
  };


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
                data-ai-hint={categoryData.imageAiHint || 'celestial beings ethereal sky'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Sparkles className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">Discover various celestial and semi-divine beings.</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['origin_nature', 'spiritual_roles']} className="w-full">
          
          <AccordionItem value="origin_nature">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Feather className="mr-2" /> Origin & Nature of Beings
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryData.origin_and_nature.types.map((beingType) => (
                  <CelestialBeingTypeCard key={beingType.name} beingType={beingType} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="spiritual_roles">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ShieldCheck className="mr-2" /> Spiritual Roles & Functions
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <div>
                <h4 className="font-semibold text-secondary-foreground mb-1">Guardians Of:</h4>
                <div className="flex flex-wrap gap-2">
                  {categoryData.spiritual_roles.guardians_of.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-foreground mb-1">Functions:</h4>
                <ul className="list-disc list-inside ml-4">
                  {categoryData.spiritual_roles.functions.map(func => <li key={func}>{func}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-foreground mb-1">Association with Deities:</h4>
                <p>{categoryData.spiritual_roles.association_with_deities.join(', ')}</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="scriptural_mentions">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <BookOpen className="mr-2" /> Scriptural Mentions
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <ul className="list-disc list-inside space-y-1">
                {categoryData.scriptural_mentions.map((mention, index) => (
                  <li key={index}><strong>{mention.text}:</strong> {mention.reference}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="symbolism">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Brain className="mr-2" /> Symbolism
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <ul className="list-disc list-inside ml-4">
                {categoryData.symbolism.represent.map(item => <li key={item}>{item}</li>)}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cultural_influence">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Palette className="mr-2" /> Cultural Influence
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Art & Architecture:</strong> {categoryData.cultural_influence.art_and_architecture}</p>
              <p><strong>Literature:</strong> {categoryData.cultural_influence.literature}</p>
              <div>
                <h4 className="font-semibold text-secondary-foreground mb-1">Regional Variants:</h4>
                <ul className="list-disc list-inside ml-4">
                  {Object.entries(categoryData.cultural_influence.regional_variants).map(([key, value]) => (
                    <li key={key}><strong>{key}:</strong> {value}</li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="external_links">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ExternalLink className="mr-2" /> Further Reading
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-2 text-foreground">
              <p><Link href={categoryData.external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Siddha</Link></p>
              <p><Link href={categoryData.external_links.apsaras} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Apsara</Link></p>
              <p><Link href={categoryData.external_links.vidyadhara} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">WisdomLib: Vidyadhara</Link></p>
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
