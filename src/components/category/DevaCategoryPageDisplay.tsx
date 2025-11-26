
import type { DevaCategoryData, MajorDeva, DevaScripturalMention } from '@/data/deva-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Sparkles, Users, BookOpen, Atom, ClipboardList, Library, CalendarDays, Lightbulb, ExternalLink, ArrowRight, Crown, Flame, Waves, Wind, Sun, Moon, Gem, Scale, GraduationCap, HeartPulse, ShieldCheck } from 'lucide-react';

interface DevaCategoryPageDisplayProps {
  categoryData: DevaCategoryData;
}

const DevaIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const baseClasses = className || "h-5 w-5 text-primary";
  switch (name.toLowerCase()) {
    case 'indra': return <Crown className={baseClasses} />;
    case 'agni': return <Flame className={baseClasses} />;
    case 'varuna': return <Waves className={baseClasses} />;
    case 'vayu': return <Wind className={baseClasses} />;
    case 'surya': return <Sun className={baseClasses} />;
    case 'chandra': return <Moon className={baseClasses} />;
    case 'kubera': return <Gem className={baseClasses} />;
    case 'yama': return <Scale className={baseClasses} />;
    case 'brihaspati': return <GraduationCap className={baseClasses} />;
    case 'ashvins': return <HeartPulse className={baseClasses} />;
    default: return <Sparkles className={baseClasses} />;
  }
};

const MajorDevaCard: React.FC<{ deva: MajorDeva }> = ({ deva }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        {deva.imageUrl && (
          <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
            <Image
              src={deva.imageUrl}
              alt={deva.name}
              layout="fill"
              objectFit="cover"
              data-ai-hint={deva.imageAiHint}
            />
          </div>
        )}
        <div className="flex-grow">
          <div className="flex items-center mb-1">
            <DevaIcon name={deva.name} className="h-6 w-6 mr-2 text-primary group-hover:text-accent transition-colors" />
            <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{deva.name}</CardTitle>
          </div>
          <CardDescription className="text-sm text-muted-foreground">{deva.title}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-2 flex-grow">
      <p><strong>Domain:</strong> {deva.domain}</p>
      <p><strong>Symbolism:</strong> {deva.symbolism}</p>
      <p><strong>Vehicle:</strong> {deva.vehicle}</p>
      {deva.weapon && <p><strong>Weapon:</strong> {deva.weapon}</p>}
      {deva.texts && deva.texts.length > 0 && <p><strong>Key Texts:</strong> {deva.texts.join(', ')}</p>}
    </CardContent>
    {/* No direct character page link for individual Devas from this data for now */}
    {/* Add CardFooter with Link if individual pages are created */}
  </Card>
);

export function DevaCategoryPageDisplay({ categoryData }: DevaCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Deva category could not be loaded.
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
                data-ai-hint={categoryData.imageAiHint || 'celestial beings divine light'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Sparkles className="mr-2 h-10 w-10 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">Celestial Beings and Guardians of Dharma</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['major_devas', 'origin_nature']} className="w-full">
          
          <AccordionItem value="origin_nature">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Atom className="mr-2" /> Origin & Nature
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Etymology:</strong> {categoryData.origin_and_nature.etymology}</p>
              <p><strong>Origin:</strong> {categoryData.origin_and_nature.origin}</p>
              <p><strong>Opposite:</strong> {categoryData.origin_and_nature.opposite}</p>
              <p><strong>Loka (Abode):</strong> {categoryData.origin_and_nature.loka}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="core_roles">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ClipboardList className="mr-2" /> Core Roles & Functions
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <ul className="list-disc list-inside space-y-1">
                {categoryData.core_roles.map(role => <li key={role}>{role}</li>)}
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="major_devas">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Users className="mr-2" /> Major Devas
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              {categoryData.major_devas.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {categoryData.major_devas.map((deva) => (
                    <MajorDevaCard key={deva.id} deva={deva} />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No major Devas listed.</p>
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="groups_classifications">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Library className="mr-2" /> Groups & Classifications
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              {Object.entries(categoryData.groups_and_classifications).map(([groupName, description]) => (
                <div key={groupName}>
                  <h4 className="font-semibold text-secondary-foreground">{groupName}:</h4>
                  <p>{description}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="scriptural_mentions">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <BookOpen className="mr-2" /> Scriptural Mentions
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <ul className="list-disc list-inside space-y-1">
                {categoryData.scriptural_mentions.map((mention, index) => (
                  <li key={index}><strong>{mention.text}:</strong> {mention.notes}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="festivals">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <CalendarDays className="mr-2" /> Festivals
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-foreground">
              <div className="flex flex-wrap gap-2">
                {categoryData.festivals.map(festival => <Badge key={festival} variant="secondary">{festival}</Badge>)}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="symbolism">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Lightbulb className="mr-2" /> Symbolism & Worship
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <div>
                <h4 className="font-semibold text-secondary-foreground">Represent:</h4>
                <ul className="list-disc list-inside ml-4">
                  {categoryData.symbolism.represent.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-foreground">Worship Methods:</h4>
                 <div className="flex flex-wrap gap-2 mt-1">
                    {categoryData.symbolism.worship_methods.map(method => <Badge key={method} variant="outline">{method}</Badge>)}
                 </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="external_links">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ExternalLink className="mr-2" /> Further Reading
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-1 text-foreground">
              <p><Link href={categoryData.external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Deva (Hinduism)</Link></p>
              <p><Link href={categoryData.external_links.devas_rigveda} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Devas in the Veda (WisdomLib)</Link></p>
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
