
import type { MahadevaAvatarsCategoryData, MahadevaAvatar } from '@/data/mahadeva-avatars-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Zap, BookOpen, Users, ExternalLink, ShieldCheck, Brain, Info, Skull, Mountain, UserCircle2, GitMerge, Sun } from 'lucide-react';

interface MahadevaAvatarsCategoryPageDisplayProps {
  categoryData: MahadevaAvatarsCategoryData;
}

const AvatarIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const baseClasses = className || "h-5 w-5 text-primary";
  switch (name.toLowerCase()) {
    case 'bhairava': return <Skull className={baseClasses} />;
    case 'pashupatinath': return <Mountain className={baseClasses} />; // Represents Kailash or stability
    case 'rudra': return <Zap className={baseClasses} />; // Storms/Fierce
    case 'neelkanth': return <UserCircle2 className={baseClasses} />; // Focus on throat
    case 'ardhanarishvara': return <GitMerge className={baseClasses} />; // Fusion
    case 'tripurari': return <Zap className={baseClasses} />; // Destruction
    case 'mahadeva': return <Sun className={baseClasses} />; // Supreme
    default: return <ShieldCheck className={baseClasses} />;
  }
};

const MahadevaAvatarCard: React.FC<{ avatar: MahadevaAvatar }> = ({ avatar }) => (
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
            <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{avatar.name}</CardTitle>
          </div>
          <CardDescription className="text-sm text-muted-foreground line-clamp-2">{avatar.description.substring(0,100)}...</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-3 flex-grow">
      <p><strong>Symbolism:</strong> {avatar.symbolism}</p>
      <p><strong>Depiction:</strong> {avatar.depiction}</p>
      {avatar.associated_legends && avatar.associated_legends.length > 0 && (
         <div>
          <h4 className="font-semibold text-secondary-foreground mb-1">Associated Legends:</h4>
          <ul className="list-disc list-inside ml-4 text-xs">
            {avatar.associated_legends.slice(0, 2).map(legend => <li key={legend.title}>{legend.title}</li>)}
          </ul>
        </div>
      )}
    </CardContent>
    <CardFooter className="p-4 pt-0">
        <Link href={`/characters/${avatar.id}`} passHref>
           <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
             View Full Profile &rarr;
           </Button>
        </Link>
    </CardFooter>
  </Card>
);

export function MahadevaAvatarsCategoryPageDisplay({ categoryData }: MahadevaAvatarsCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Mahadeva Avatars category could not be loaded.
        </p>
        <Link href="/characters" passHref>
          <Button variant="default">Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const { title, description, avatars, scriptural_references, worship_and_significance, external_links } = categoryData;

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
              <Zap className="h-10 w-10 mr-3 text-primary" /> {/* Using Zap as placeholder */}
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
             <CardDescription className="text-lg text-primary/80 mb-3">{title}</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['avatars', 'worship_significance']} className="w-full">
          
          <AccordionItem value="worship_significance">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ShieldCheck className="mr-2" /> Worship & Significance
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p>{worship_and_significance}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="avatars">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Users className="mr-2" /> The Mahadeva Manifestations
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> 
                {avatars.map((avatar) => (
                  <MahadevaAvatarCard key={avatar.id} avatar={avatar} />
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
              <p><Link href={external_links.wikipedia_shiva} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Shiva</Link></p>
              <p><Link href={external_links.shiva_purana_ref} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Shiva Purana (WisdomLib)</Link></p>
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
