
import type { DeviCategoryData, MajorForm, DeviAvatarAndForm } from '@/data/devi-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Star, BookOpen, Users, Zap, Palette, ShieldCheck, ExternalLink, ArrowRight, CalendarDays, Atom, HeartHandshake } from 'lucide-react';

interface DeviCategoryPageDisplayProps {
  categoryData: DeviCategoryData;
}

const MajorFormCard: React.FC<{ form: MajorForm }> = ({ form }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        {form.imageUrl && (
          <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
            <Image
              src={form.imageUrl}
              alt={form.name}
              layout="fill"
              objectFit="cover"
              data-ai-hint={form.imageAiHint || `goddess ${form.name.toLowerCase()}`}
            />
          </div>
        )}
        <div className="flex-grow">
          <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{form.name} <span className="text-sm text-muted-foreground">({form.epithet})</span></CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{form.role}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-2 flex-grow">
      <p><strong>Symbolism:</strong> {form.symbolism}</p>
      <p className="line-clamp-2"><strong>Iconography:</strong> {form.iconography}</p>
      {form.forms && form.forms.length > 0 && <p><strong>Other Forms:</strong> {form.forms.join(', ')}</p>}
      {form.worship && <p><strong>Worship Focus:</strong> {form.worship}</p>}
    </CardContent>
    {form.id && (
        <CardFooter className="p-4 pt-0">
        <Link href={`/characters/${form.id}`} passHref>
            <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
            Learn More <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
        </Link>
        </CardFooter>
    )}
  </Card>
);

const AvatarFormCard: React.FC<{ form: DeviAvatarAndForm }> = ({ form }) => (
    <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group">
      <CardHeader className="p-4">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          {form.imageUrl && (
            <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
              <Image
                src={form.imageUrl}
                alt={form.name}
                layout="fill"
                objectFit="cover"
                data-ai-hint={form.imageAiHint || `goddess ${form.name.toLowerCase()}`}
              />
            </div>
          )}
          <div className="flex-grow">
            <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{form.name}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{form.role}</CardDescription>
            {form.location && <p className="text-xs text-muted-foreground">Location: {form.location}</p>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 text-sm space-y-2 flex-grow">
        {form.story && <p className="line-clamp-3"><strong>Story:</strong> {form.story}</p>}
        {form.symbolism && <p><strong>Symbolism:</strong> {form.symbolism}</p>}
      </CardContent>
      {form.id && (
          <CardFooter className="p-4 pt-0">
          <Link href={`/characters/${form.id}`} passHref>
              <Button variant="link" size="sm" className="p-0 h-auto text-accent group-hover:underline">
              Learn More <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
          </Link>
          </CardFooter>
      )}
    </Card>
  );

export function DeviCategoryPageDisplay({ categoryData }: DeviCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Devi category could not be loaded.
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
                data-ai-hint={categoryData.imageAiHint || 'divine feminine goddess cosmic'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Star className="mr-2 h-10 w-10 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">The Divine Feminine</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <Accordion type="multiple" defaultValue={['major_forms', 'origin_cosmic_role']} className="w-full">
          
          <AccordionItem value="origin_cosmic_role">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Atom className="mr-2" /> Origin & Cosmic Role
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Supreme Form:</strong> {categoryData.origin_and_cosmic_role.supreme_form}</p>
              <p><strong>Philosophy:</strong> {categoryData.origin_and_cosmic_role.philosophy}</p>
              <div>
                <strong>Cosmic Aspects:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {categoryData.origin_and_cosmic_role.aspects.map(aspect => <Badge key={aspect} variant="secondary">{aspect}</Badge>)}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="major_forms">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Users className="mr-2" /> Major Forms
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              {categoryData.major_forms.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {categoryData.major_forms.map((form) => (
                    <MajorFormCard key={form.name} form={form} />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No major forms listed.</p>
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ten_mahavidyas">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Zap className="mr-2" /> Ten Mahavidyas
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-foreground">
              <p className="mb-2">The Dasha Mahavidyas are a group of ten aspects of Adi Parashakti in Hinduism. They are all forms of the Divine Mother:</p>
              <div className="flex flex-wrap gap-2">
                {categoryData.ten_mahavidyas.map(mahavidya => <Badge key={mahavidya} variant="outline">{mahavidya}</Badge>)}
              </div>
               <div className="mt-3">
                    <Link href={`/characters/category/${encodeURIComponent("Dasha Mahavidya")}`} passHref>
                        <Button variant="link" className="text-accent hover:underline p-0 h-auto">
                            Explore Dasha Mahavidyas in Detail <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="avatars_forms">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Palette className="mr-2" /> Avatars & Other Forms
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              {categoryData.avatars_and_forms.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {categoryData.avatars_and_forms.map((form) => (
                    <AvatarFormCard key={form.name} form={form} />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No other avatars or forms listed.</p>
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="scriptural_sources">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <BookOpen className="mr-2" /> Scriptural Sources
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <ul className="list-disc list-inside space-y-1">
                {categoryData.scriptural_sources.map((source, index) => (
                  <li key={index}><strong>{source.text}:</strong> {source.description}</li>
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
                {categoryData.festivals.map(festival => <Badge key={festival} variant="default">{festival}</Badge>)}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="symbolism_power">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <HeartHandshake className="mr-2" /> Symbolism & Power
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-foreground">
              <ul className="list-disc list-inside space-y-1">
                {categoryData.symbolism_and_power.core_ideas.map(idea => <li key={idea}>{idea}</li>)}
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="external_links">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ExternalLink className="mr-2" /> Further Reading
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-1 text-foreground">
              <p><Link href={categoryData.external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Devi</Link></p>
              <p><Link href={categoryData.external_links.devibhagavatam} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Devi Bhagavata Purana (WisdomLib)</Link></p>
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
