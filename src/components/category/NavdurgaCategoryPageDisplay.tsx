
import type { NavdurgaCategoryData, NavdurgaForm } from '@/data/navdurga-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Users, BookOpen, Brain, ShieldCheck, Palette, ExternalLink, ArrowRight, Zap, Sparkles, Moon, Sun, Mountain, HeartHandshake, GitBranch, Gem } from 'lucide-react';

interface NavdurgaCategoryPageDisplayProps {
  categoryData: NavdurgaCategoryData;
}

const NavdurgaFormIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const baseClasses = className || "h-5 w-5 text-primary";
  switch (name.toLowerCase()) {
    case 'shailaputri': return <Mountain className={baseClasses} />;
    case 'brahmacharini': return <GitBranch className={baseClasses} />; // Represents austerity/penance
    case 'chandraghanta': return <Moon className={baseClasses} />; // Moon-bell
    case 'kushmanda': return <Sun className={baseClasses} />; // Cosmic egg/sun
    case 'skandamata': return <Users className={baseClasses} />; // Mother of Skanda
    case 'katyayani': return <ShieldCheck className={baseClasses} />; // Warrior
    case 'kalaratri': return <Zap className={baseClasses} />; // Fierce/Destruction
    case 'mahagauri': return <Sparkles className={baseClasses} />; // Radiant/Pure
    case 'siddhidatri': return <Gem className={baseClasses} />; // Giver of Siddhis
    default: return <HeartHandshake className={baseClasses} />;
  }
};

const NavdurgaDetailCard: React.FC<{ goddess: NavdurgaForm }> = ({ goddess }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
          <Image
            src={goddess.imageUrl}
            alt={goddess.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={goddess.imageAiHint}
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center mb-1">
            <NavdurgaFormIcon name={goddess.name} className="h-6 w-6 mr-2 text-primary group-hover:text-accent transition-colors" />
            <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{goddess.name} <span className="text-sm text-muted-foreground">({goddess.sanskrit_name})</span></CardTitle>
          </div>
          <CardDescription className="text-sm text-muted-foreground">{goddess.meaning} - {goddess.day}</CardDescription>
          <Badge variant="outline" className="text-xs mt-1" style={{ backgroundColor: goddess.color.toLowerCase() === 'grey' ? '#808080' : goddess.color.toLowerCase(), color: ['grey', 'white', 'yellow', 'pink', 'orange', 'green'].includes(goddess.color.toLowerCase()) ? 'black': 'white' }}>
            Color: {goddess.color}
          </Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-2 flex-grow">
      <p><strong>Symbolism:</strong> {goddess.symbolism}</p>
      <p><strong>Mantra:</strong> <code className="text-xs bg-muted p-1 rounded">{goddess.mantra}</code></p>
      <p><strong>Vehicle:</strong> {goddess.vehicle}</p>
      <p><strong>Weapons:</strong> {goddess.weapons.join(', ')}</p>
      <p><strong>Depiction:</strong> {goddess.depiction}</p>
      <p><strong>Associated Chakra:</strong> {goddess.associated_chakra}</p>
      <p><strong>Qualities:</strong> {goddess.qualities.join(', ')}</p>
      <p className="line-clamp-3"><strong>Story:</strong> {goddess.story}</p>
      {goddess.associated_forms && goddess.associated_forms.length > 0 && (
        <p><strong>Associated Forms:</strong> {goddess.associated_forms.join(', ')}</p>
      )}
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Link href={`/characters/${goddess.id}`} passHref>
        <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
          View Full Profile <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export function NavdurgaCategoryPageDisplay({ categoryData }: NavdurgaCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Navdurga category could not be loaded.
        </p>
        <Link href="/characters" passHref>
          <Button variant="default">Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const { introduction, worship_significance, goddesses, scriptural_references, external_links } = categoryData;

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
                data-ai-hint={categoryData.imageAiHint || 'nine goddesses divine group'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <ShieldCheck className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">{categoryData.meaning}</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['goddesses', 'introduction']} className="w-full">
          
          <AccordionItem value="introduction">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Brain className="mr-2" /> Introduction & Significance
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p>{introduction}</p>
              <p><strong>Worship Significance:</strong> {worship_significance}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="goddesses">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Users className="mr-2" /> The Nine Forms of Durga
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> 
                {goddesses.map((goddess) => (
                  <NavdurgaDetailCard key={goddess.id} goddess={goddess} />
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
              <p><Link href={external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Navadurga</Link></p>
              <p><Link href={external_links.devi_mahatmya} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Devi Mahatmya (WisdomLib)</Link></p>
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
