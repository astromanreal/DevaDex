
'use client'; 

// import type { Metadata } from 'next'; // Metadata should be handled by layout or page-level server components
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'; // Added CardFooter
import { HeroYugaSpotlight } from '@/components/timeline/HeroYugaSpotlight';
import { CharacterOfTheDay } from '@/components/character/CharacterOfTheDay'; 
import { Compass, BookOpenText, Users, History, Search, Info, Loader2 } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react'; 
import { getAllCharacters } from '@/data/characters'; 
import type { Character } from '@/lib/types';


export default function HomePage() {
  const [characterOfTheDay, setCharacterOfTheDay] = useState<Character | null>(null);
  const [isLoadingCharacter, setIsLoadingCharacter] = useState(true);
  const allCharacters = useMemo(() => getAllCharacters(), []);

  useEffect(() => {
    document.title = 'The Deva Archives - Your Gateway to Hindu Mythology'; 

    if (allCharacters.length > 0) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      setCharacterOfTheDay(allCharacters[randomIndex]);
    }
    setIsLoadingCharacter(false);
  }, [allCharacters]);

  return (
    <div className="space-y-12 md:space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center relative py-16 md:py-24 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0">
          <Image 
            src="https://i.pinimg.com/736x/dd/14/71/dd1471bb8f4306f43b0aa075fb5d9f8e.jpg" 
            alt="Sanatan Dharma spiritual art" 
            fill 
            style={{ objectFit: 'cover' }} 
            data-ai-hint="celestial scene colorful"
            priority
          />
           <div className="absolute inset-0 bg-background/20 backdrop-blur-sm"></div> {/* Reduced opacity further */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Embark on a Journey Through Sanatan Dharma
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover the rich tapestry of characters, stories, and wisdom from ancient scriptures with The Deva Archives.
          </p>
          <Link href="/explore" passHref>
            <Button size="lg" className="text-lg px-8 py-3">
              <Compass className="mr-2 h-5 w-5" /> Explore Characters
            </Button>
          </Link>
        </div>
      </section>

      {/* Character of the Day Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <CharacterOfTheDay character={characterOfTheDay} isLoading={isLoadingCharacter} />
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <Card className="shadow-lg border-border/40 rounded-xl">
          <CardHeader className="p-6 md:p-8">
            <CardTitle className="text-3xl font-bold text-primary mb-3 flex items-center">
              <Info className="mr-3 h-8 w-8" />
              What is The Deva Archives?
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8 pt-0">
            <p className="text-lg text-foreground leading-relaxed">
              The Deva Archives is your comprehensive digital encyclopedia dedicated to the vast and intricate world of Sanatan Dharma. Our mission is to provide an accessible and engaging platform for learning about the diverse deities, heroes, sages, and narratives that form the bedrock of this ancient tradition.
            </p>
            <p className="text-lg text-foreground leading-relaxed mt-4">
              Whether you are a curious learner, a spiritual seeker, or a scholar, The Deva Archives offers a curated space to delve into the depths of Hindu mythology, philosophy, and culture.
            </p>
          </CardContent>
        </Card>
      </section>
      
      {/* Features Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10 md:mb-12">Discover & Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BookOpenText className="h-10 w-10 text-accent" />}
            title="Deep Character Profiles"
            description="Explore detailed information, stories, symbolism, and associations of various figures from Sanatan Dharma."
            link="/explore"
            linkLabel="Browse Profiles"
          />
          <FeatureCard
            icon={<History className="h-10 w-10 text-accent" />}
            title="Interactive Timeline"
            description="Visualize characters and their appearances across different Yugas (cosmic eras) and understand their chronological significance."
            link="/timeline"
            linkLabel="View Timeline"
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-accent" />}
            title="Categorized Exploration"
            description="Browse characters by their types, such as Devas, Avatars, Rishis, and more, for a structured learning experience."
            link="/characters"
            linkLabel="See Categories"
          />
        </div>
      </section>

      {/* Hero Yuga Spotlight - Integrated into Home Page */}
      <section className="container mx-auto px-4 py-8 md:py-12">
         <HeroYugaSpotlight />
      </section>

      <section className="container mx-auto px-4 text-center py-8 md:py-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Ready to Begin Your Exploration?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Dive into the fascinating world of Sanatan Dharma. Click below to start discovering characters.
        </p>
        <Link href="/explore" passHref>
          <Button size="lg" variant="default" className="text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-shadow">
            Start Exploring Now
          </Button>
        </Link>
      </section>

    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
}

function FeatureCard({ icon, title, description, link, linkLabel }: FeatureCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 ease-in-out border-border/40 rounded-xl overflow-hidden flex flex-col">
      <CardHeader className="p-6 bg-muted/40">
        <div className="flex items-center gap-4 mb-3">
          <div className="p-3 bg-accent/10 text-accent rounded-full">
            {icon}
          </div>
          <CardTitle className="text-2xl font-semibold text-primary">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 bg-muted/20">
        <Link href={link} passHref>
          <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground">
            {linkLabel} <Compass className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

