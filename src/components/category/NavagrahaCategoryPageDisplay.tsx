
import type { NavagrahaCategoryData, NavagrahaEntry } from '@/data/navagraha-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Sun, Moon, Shield, Brain, GraduationCap, Sparkles, Sigma, CircleArrowUp, CircleArrowDown, Orbit, BookOpen, ExternalLink, CalendarDays, Palette, Users } from 'lucide-react';

interface NavagrahaCategoryPageDisplayProps {
  categoryData: NavagrahaCategoryData;
}

const NavagrahaIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const baseClasses = className || "h-5 w-5 text-primary";
  switch (name.toLowerCase()) {
    case 'surya': return <Sun className={baseClasses} />;
    case 'chandra': return <Moon className={baseClasses} />;
    case 'mangala': return <Shield className={baseClasses} />;
    case 'budha': return <Brain className={baseClasses} />;
    case 'brihaspati': return <GraduationCap className={baseClasses} />;
    case 'shukra': return <Sparkles className={baseClasses} />;
    case 'shani': return <Sigma className={baseClasses} />;
    case 'rahu': return <CircleArrowUp className={baseClasses} />;
    case 'ketu': return <CircleArrowDown className={baseClasses} />;
    default: return <Orbit className={baseClasses} />;
  }
};

const NavagrahaDetailCard: React.FC<{ graha: NavagrahaEntry }> = ({ graha }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        {graha.imageUrl && (
          <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
            <Image
              src={graha.imageUrl}
              alt={graha.englishName}
              layout="fill"
              objectFit="cover"
              data-ai-hint={graha.imageAiHint || `navagraha ${graha.englishName.toLowerCase()}`}
            />
          </div>
        )}
        <div className="flex-grow">
          <div className="flex items-center mb-1">
            <NavagrahaIcon name={graha.name.toLowerCase()} className="h-6 w-6 mr-2 text-primary group-hover:text-accent transition-colors" />
            <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{graha.englishName} <span className="text-sm text-muted-foreground">({graha.name})</span></CardTitle>
          </div>
          <CardDescription className="text-sm text-muted-foreground">Ruling Deity: {graha.rulingDeity} - {graha.type}</CardDescription>
          <Badge variant={graha.nature === "Benefic" ? "default" : "destructive"} className="text-xs mt-1">{graha.nature}</Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-2 flex-grow">
      <p className="line-clamp-3"><strong>Description:</strong> {graha.description}</p>
      <p><strong>Day:</strong> {graha.day} | <strong>Color:</strong> {graha.color} | <strong>Element:</strong> {graha.element}</p>
      <p><strong>Gemstone:</strong> {graha.gemstone} | <strong>Metal:</strong> {graha.metal}</p>
      <p><strong>Zodiac Signs:</strong> {graha.zodiacSigns.join(', ')}</p>
      <p><strong>Mantra:</strong> <code className="text-xs bg-muted p-1 rounded">{graha.mantra}</code></p>
      <p><strong>Vehicle:</strong> {graha.vehicle}</p>
      <p className="line-clamp-2"><strong>Iconography:</strong> {graha.iconography}</p>
      {graha.associatedDeities && graha.associatedDeities.length > 0 && (
        <p><strong>Associated Deities:</strong> {graha.associatedDeities.join(', ')}</p>
      )}
    </CardContent>
    {/* No direct character page link for individual Navagrahas currently */}
  </Card>
);

export function NavagrahaCategoryPageDisplay({ categoryData }: NavagrahaCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Navagraha category could not be loaded.
        </p>
        <Link href="/characters" passHref>
          <Button variant="default">Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const { description, navagrahas, scriptural_references, symbolism, worship_and_festivals, external_links } = categoryData;

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
                data-ai-hint={categoryData.imageAiHint || 'celestial planets astrology nine'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Orbit className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">The Nine Celestial Influencers</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['navagrahas', 'symbolism']} className="w-full">
          
          <AccordionItem value="navagrahas">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Users className="mr-2" /> The Nine Grahas
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> 
                {navagrahas.map((graha) => (
                  <NavagrahaDetailCard key={graha.name} graha={graha} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {symbolism && (
            <AccordionItem value="symbolism">
              <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                <Brain className="mr-2" /> Symbolism & Significance
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-3 text-foreground">
                <p>{symbolism}</p>
              </AccordionContent>
            </AccordionItem>
          )}

          {scriptural_references && scriptural_references.length > 0 && (
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
          )}
          
          {worship_and_festivals && worship_and_festivals.length > 0 && (
            <AccordionItem value="worship">
              <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                <Palette className="mr-2" /> Worship & Festivals
              </AccordionTrigger>
              <AccordionContent className="pt-4 text-foreground">
                   <div className="flex flex-wrap gap-2">
                      {worship_and_festivals.map(festival => <Badge key={festival} variant="outline">{festival}</Badge>)}
                   </div>
              </AccordionContent>
            </AccordionItem>
          )}
          
          {external_links && (
            <AccordionItem value="external_links">
              <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                <ExternalLink className="mr-2" /> Further Reading
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-1 text-foreground">
                {external_links.wikipedia && <p><Link href={external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Navagraha</Link></p>}
                {external_links.vedic_astrology_texts && <p><Link href={external_links.vedic_astrology_texts} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Vedic Astrology Texts (WisdomLib)</Link></p>}
              </AccordionContent>
            </AccordionItem>
          )}

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


