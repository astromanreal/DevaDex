
import type { TrimurtiCategoryData, TrimurtiMember, TrimurtiMemberAttribute } from '@/data/trimurti-category-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Users, BookOpen, Brain, Settings, Palette, ExternalLink, ArrowRight, Landmark, Anchor, Layers, Sparkles, Shield, Zap } from 'lucide-react';

interface TrimurtiCategoryPageDisplayProps {
  categoryData: TrimurtiCategoryData;
}

const getMemberIcon = (name: string) => {
    switch (name.toLowerCase()) {
        case 'brahma': return <Sparkles className="h-6 w-6 text-primary" />;
        case 'vishnu': return <Shield className="h-6 w-6 text-primary" />;
        case 'shiva': return <Zap className="h-6 w-6 text-primary" />;
        default: return <Users className="h-6 w-6 text-primary" />;
    }
};

const MemberAttributeDisplay: React.FC<{ attributes: TrimurtiMemberAttribute }> = ({ attributes }) => (
  <div className="space-y-3 text-sm text-foreground/90">
    <p><strong>Consort:</strong> {attributes.consort}</p>
    <p><strong>Abode:</strong> {attributes.abode}</p>
    <p><strong>Vehicle (Vahana):</strong> {attributes.vehicle}</p>
    {attributes.number_of_heads && <p><strong>Heads:</strong> {attributes.number_of_heads}</p>}
    {attributes.mantra && <p><strong>Mantra:</strong> <code className="text-xs bg-muted p-1 rounded">{attributes.mantra}</code></p>}
    {attributes.icons && attributes.icons.length > 0 && (
      <div><strong>Primary Icons:</strong>
        <div className="flex flex-wrap gap-1 mt-1">
          {attributes.icons.map(icon => <Badge key={icon} variant="secondary">{icon}</Badge>)}
        </div>
      </div>
    )}
     {attributes.forms && attributes.forms.length > 0 && (
      <div><strong>Forms:</strong>
        <p className="text-xs">{attributes.forms.join(', ')}</p>
      </div>
    )}
     {attributes.avatars && attributes.avatars.length > 0 && (
      <div><strong>Avatars:</strong>
        <p className="text-xs">{attributes.avatars.join(', ')}</p>
      </div>
    )}
  </div>
);

const TrimurtiMemberCard: React.FC<{ member: TrimurtiMember }> = ({ member }) => (
  <Card className="bg-card/70 backdrop-blur-sm hover:shadow-lg transition-shadow w-full flex flex-col group border-border/50">
    <CardHeader className="p-4">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden shrink-0 shadow-md">
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={member.imageAiHint}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-3">
            {getMemberIcon(member.name)}
            <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">{member.name}</CardTitle>
          </div>
          <CardDescription className="text-md text-muted-foreground mt-1">{member.role}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 text-sm space-y-4 flex-grow">
      <p className="text-foreground leading-relaxed">{member.description}</p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="attributes">
            <AccordionTrigger className="text-md font-semibold">Attributes & Symbolism</AccordionTrigger>
            <AccordionContent>
                <MemberAttributeDisplay attributes={member.attributes} />
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="legends">
            <AccordionTrigger className="text-md font-semibold">Key Legends</AccordionTrigger>
            <AccordionContent>
                <ul className="list-disc list-inside space-y-2 mt-2 text-foreground/90">
                    {member.legends.map(legend => <li key={legend.title}><strong>{legend.title}:</strong> {legend.summary}</li>)}
                </ul>
            </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Link href={`/characters/${member.id}`} passHref>
        <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground">
          View Full Profile <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export function TrimurtiCategoryPageDisplay({ categoryData }: TrimurtiCategoryPageDisplayProps) {
  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Data Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The data for the Trimurti category could not be loaded.
        </p>
        <Link href="/characters" passHref>
          <Button variant="default">Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const { origin_and_concept, members, philosophical_context, associated_concepts, symbolism_and_impact, external_links } = categoryData;

  return (
    <Card className="shadow-xl overflow-hidden border-border/20">
      <CardHeader className="bg-muted/30 p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {categoryData.imageUrl && (
            <div className="w-full md:w-1/3 relative aspect-video rounded-lg overflow-hidden shadow-lg border-4 border-card">
              <Image
                src={categoryData.imageUrl}
                alt={categoryData.category}
                layout="fill"
                objectFit="cover"
                data-ai-hint={categoryData.imageAiHint || 'cosmic gods trinity'}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className={`w-full ${categoryData.imageUrl ? 'md:w-2/3' : 'md:w-full'}`}>
            <div className="flex items-center mb-2">
              <Users className="h-10 w-10 mr-3 text-primary" />
              <CardTitle className="text-4xl font-bold text-primary">{categoryData.category}</CardTitle>
            </div>
            <CardDescription className="text-lg text-primary/80 mb-3">The Sacred Triad of Cosmic Functions</CardDescription>
            <p className="text-md text-foreground leading-relaxed">{categoryData.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {members.map((member) => (
                <TrimurtiMemberCard key={member.id} member={member} />
            ))}
        </div>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="origin_concept">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Layers className="mr-2" /> Origin & Concept
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Etymology:</strong> {origin_and_concept.etymology}</p>
              <div>
                <h4 className="font-semibold text-secondary-foreground">Cosmic Roles:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li>Creation (Brahma): {origin_and_concept.cosmic_roles.creation}</li>
                  <li>Preservation (Vishnu): {origin_and_concept.cosmic_roles.preservation}</li>
                  <li>Destruction (Shiva): {origin_and_concept.cosmic_roles.destruction}</li>
                </ul>
              </div>
              <p><strong>Symbolism:</strong> {origin_and_concept.symbolism}</p>
              <p><strong>Unity Principle:</strong> {origin_and_concept.unity_principle}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="philosophical_context">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Brain className="mr-2" /> Philosophical Context
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Advaita View:</strong> {philosophical_context.advaita_view}</p>
              <p><strong>Dvaita View:</strong> {philosophical_context.dvaita_view}</p>
              <p><strong>Shakta View:</strong> {philosophical_context.shakta_view}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="associated_concepts">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Anchor className="mr-2" /> Associated Concepts
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <div>
                <h4 className="font-semibold text-secondary-foreground">Tridevi (Consorts):</h4>
                <ul className="list-disc list-inside ml-4">
                  {associated_concepts.Tridevi.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-foreground">Trimurti Temple Examples:</h4>
                <ul className="list-disc list-inside ml-4">
                  {associated_concepts.Trimurti_temple_examples.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="symbolism_impact">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <Palette className="mr-2" /> Symbolism & Impact
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-3 text-foreground">
              <p><strong>Cosmic Cycle:</strong> {symbolism_and_impact.cosmic_cycle}</p>
              <p><strong>Cultural Influence:</strong> {symbolism_and_impact.cultural_influence}</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="external_links">
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:text-accent">
              <ExternalLink className="mr-2" /> Further Reading
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-1 text-foreground">
              <p><Link href={external_links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Trimurti</Link></p>
              <p><Link href={external_links.sacred_texts} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Sacred Texts Archive</Link></p>
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
