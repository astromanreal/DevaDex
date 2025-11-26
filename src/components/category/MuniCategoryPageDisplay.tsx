
import type { MuniCategoryData, MuniEntry } from '@/data/muni-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ScrollText, Users, CalendarDays, ExternalLink, ArrowRight, BookOpen, Award, User, Users2, MapPin, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface MuniCategoryPageDisplayProps {
  categoryData: MuniCategoryData;
}

const MuniDetailCard: React.FC<{ muni: MuniEntry }> = ({ muni }) => {
  const formatList = (items?: string | string[]): string => {
    if (!items) return 'N/A';
    return Array.isArray(items) ? items.join(', ') : items;
  };

  return (
    <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
      <CardHeader className="p-4">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
            <Image
              src={muni.imageUrl}
              alt={muni.name}
              layout="fill"
              objectFit="cover"
              data-ai-hint={muni.imageAiHint}
            />
          </div>
          <div className="flex-grow">
            <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{muni.name}</CardTitle>
            {muni.titles && muni.titles.length > 0 && (
              <div className="mt-1">
                {muni.titles.map(title => <Badge key={title} variant="secondary" className="mr-1 mb-1 text-xs">{title}</Badge>)}
              </div>
            )}
            <CardDescription className="text-sm text-muted-foreground mt-1">
              <CalendarDays className="inline-block mr-1 h-3 w-3" /> Period: {muni.period}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 text-sm space-y-3 flex-grow">
        <p className="line-clamp-4">{muni.description}</p>
        
        <div className="space-y-1 text-xs">
          <p><User className="inline-block mr-1 h-3 w-3 text-muted-foreground" /> <strong>Parents:</strong> {formatList(muni.parents)}</p>
          {muni.spouse && <p><Users className="inline-block mr-1 h-3 w-3 text-muted-foreground" /> <strong>Spouse:</strong> {formatList(muni.spouse)}</p>}
          {muni.children && muni.children.length > 0 && <p><Users2 className="inline-block mr-1 h-3 w-3 text-muted-foreground" /> <strong>Children:</strong> {formatList(muni.children)}</p>}
          {muni.birth_place && <p><MapPin className="inline-block mr-1 h-3 w-3 text-muted-foreground" /> <strong>Birth Place:</strong> {muni.birth_place}</p>}
          {muni.death_place && <p><MapPin className="inline-block mr-1 h-3 w-3 text-muted-foreground" /> <strong>Death Place:</strong> {muni.death_place}</p>}
          {muni.philosophy && <p><Lightbulb className="inline-block mr-1 h-3 w-3 text-muted-foreground" /> <strong>Philosophy:</strong> {muni.philosophy}</p>}
        </div>

        <div>
          <h4 className="font-semibold text-secondary-foreground mb-1 flex items-center"><Award className="mr-1 h-4 w-4"/>Notable Acts:</h4>
          <ul className="list-disc list-inside pl-2 space-y-0.5 text-xs">
            {muni.notable_acts.map((act, index) => <li key={index} className="truncate">{act}</li>)}
          </ul>
        </div>
        {muni.scriptures && muni.scriptures.length > 0 && (
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-1 flex items-center"><BookOpen className="mr-1 h-4 w-4"/>Scriptures:</h4>
            <p className="text-xs truncate">{muni.scriptures.join(', ')}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <Link href={`/characters/${muni.id}`} passHref>
          <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
            Learn More <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <a href={muni.external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-muted-foreground hover:text-accent text-xs">
          Wikipedia <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </CardFooter>
    </Card>
  );
};

export function MuniCategoryPageDisplay({ categoryData }: MuniCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Muni category could not be loaded.
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
                data-ai-hint={categoryData.imageAiHint || 'sages scholars ancient'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <ScrollText className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">Explore prominent Munis from Sanatan Dharma.</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Notable Munis</h2>
        {categoryData.munis.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {categoryData.munis.map((muni) => (
              <MuniDetailCard key={muni.id} muni={muni} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <AlertTriangle className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
            <p className="text-xl text-muted-foreground">No Munis found in this category.</p>
          </div>
        )}
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
