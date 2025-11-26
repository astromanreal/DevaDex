
import type { AvatarCategoryData, AvatarEntry } from '@/data/avatar-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Feather, Users, Shield, BookOpen, ArrowRight, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface AvatarCategoryPageDisplayProps {
  categoryData: AvatarCategoryData;
}

const AvatarDetailCard: React.FC<{ avatar: AvatarEntry }> = ({ avatar }) => (
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
          <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{avatar.name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{avatar.type} - {avatar.purpose.substring(0, 50)}...</CardDescription>
          <Badge variant="outline" className="text-xs mt-1">Parent: {avatar.parentDeity}</Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-3 flex-grow">
      <p className="line-clamp-3"><strong>Description:</strong> {avatar.description}</p>
      <div>
        <h4 className="font-semibold text-secondary-foreground mb-1">Symbols:</h4>
        <div className="flex flex-wrap gap-1">
            {avatar.symbols.map((symbol, index) => <Badge key={index} variant="secondary" className="text-xs">{symbol}</Badge>)}
        </div>
      </div>
      {avatar.scriptures && avatar.scriptures.length > 0 && (
        <div>
          <h4 className="font-semibold text-secondary-foreground mb-1">Scriptures:</h4>
          <p className="text-xs truncate">{avatar.scriptures.join(', ')}</p>
        </div>
      )}
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Link href={`/characters/${avatar.id}`} passHref>
        <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
          Learn More <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export function AvatarCategoryPageDisplay({ categoryData }: AvatarCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Avatar category could not be loaded.
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
                data-ai-hint={categoryData.imageAiHint || 'divine incarnations various'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Feather className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">Explore various divine incarnations from Sanatan Dharma.</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
         <Accordion type="multiple" defaultValue={['avatars_list']} className="w-full">
             <AccordionItem value="avatars_list">
                <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
                    <Users className="mr-2" /> Featured Avatars
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                    {categoryData.avatars.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {categoryData.avatars.map((avatar) => (
                           <AvatarDetailCard key={avatar.id} avatar={avatar} />
                        ))}
                    </div>
                    ) : (
                    <div className="text-center py-8">
                        <AlertTriangle className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
                        <p className="text-xl text-muted-foreground">No avatars found in this category data.</p>
                    </div>
                    )}
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
