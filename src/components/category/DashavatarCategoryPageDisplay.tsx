
import type { DashavatarCategoryData, DashavatarEntry } from '@/data/dashavatar-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Users, BookOpen, Brain, Settings, Palette, ExternalLink, ArrowRight, ShieldCheck, Fish, Turtle, UserCircle, Axe, Crosshair, Disc, Atom, Sword } from 'lucide-react';

interface DashavatarCategoryPageDisplayProps {
  categoryData: DashavatarCategoryData;
}

const AvatarIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const baseClasses = className || "h-5 w-5 text-primary";
  switch (name.toLowerCase()) {
    case 'matsya': return <Fish className={baseClasses} />;
    case 'kurma': return <Turtle className={baseClasses} />;
    case 'varaha': return <UserCircle className={baseClasses} />; // Fallback for Boar
    case 'narasimha': return <UserCircle className={baseClasses} />; // Generic, lion-man is specific
    case 'vamana': return <UserCircle className={baseClasses} />; // Generic for dwarf
    case 'parashurama': return <Axe className={baseClasses} />;
    case 'rama': return <Crosshair className={baseClasses} />; 
    case 'krishna': return <Disc className={baseClasses} />; 
    case 'buddha': return <Atom className={baseClasses} />; 
    case 'kalki': return <Sword className={baseClasses} />;
    default: return <ShieldCheck className={baseClasses} />;
  }
};


const DashavatarDetailCard: React.FC<{ avatar: DashavatarEntry }> = ({ avatar }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
          <Image
            src={avatar.imageUrl}
            alt={avatar.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={avatar.imageAiHint}
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center mb-1">
            <AvatarIcon name={avatar.name} className="h-6 w-6 mr-2 text-primary group-hover:text-accent transition-colors" />
            <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{avatar.name} <span className="text-sm text-muted-foreground">({avatar.sanskrit_name})</span></CardTitle>
          </div>
          <CardDescription className="text-sm text-muted-foreground">{avatar.meaning} - {avatar.avatar_order} Avatar</CardDescription>
          <Badge variant="outline" className="text-xs mt-1">{avatar.yuga}</Badge>
           <Badge variant="secondary" className="text-xs mt-1 ml-1">{avatar.type}</Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-3 flex-grow">
      <p><strong>Role:</strong> {avatar.role}</p>
      <p className="line-clamp-3"><strong>Key Story:</strong> {avatar.key_story}</p>
      <p><strong>Symbolism:</strong> {avatar.symbolism}</p>
      {avatar.weapon && <p><strong>Weapon:</strong> {avatar.weapon}</p>}
      <p><strong>Philosophical Insight:</strong> {avatar.philosophical_insight}</p>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Link href={`/characters/${avatar.id}`} passHref>
        <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
          View Full Profile <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export function DashavatarCategoryPageDisplay({ categoryData }: DashavatarCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Dashavatar category could not be loaded.
        </p>
        <Link href="/characters" passHref>
          <Button variant="default">Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const { philosophy, avatars, scriptural_references, worship_and_festivals, external_links } = categoryData;

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
                data-ai-hint={categoryData.imageAiHint}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Users className="h-10 w-10 mr-3 text-primary" /> {/* Default icon for Dashavatar */}
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">{categoryData.meaning}</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['avatars', 'philosophy']} className="w-full">
          
          <AccordionItem value="philosophy">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Brain className="mr-2" /> Philosophy & Purpose
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Core Concept:</strong> {philosophy.core_concept}</p>
              <p><strong>Purpose:</strong> {philosophy.purpose}</p>
              <p><strong>Symbolism:</strong> {categoryData.symbolism}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="avatars">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ShieldCheck className="mr-2" /> The Ten Avatars
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> 
                {avatars.map((avatar) => (
                  <DashavatarDetailCard key={avatar.id} avatar={avatar} />
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
                  {scriptural_references.map(scripture => <Badge key={scripture} variant="secondary">{scripture}</Badge>)}
                </div>
            </AccordionContent>
          </AccordionItem>
          
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
          
          <AccordionItem value="external_links">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ExternalLink className="mr-2" /> Further Reading
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-1 text-foreground">
              <p><Link href={external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Dashavatara</Link></p>
              <p><Link href={external_links.puranic_references} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Puranic References (WisdomLib)</Link></p>
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
