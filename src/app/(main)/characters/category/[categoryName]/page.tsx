
import type { Metadata, ResolvingMetadata } from 'next';
import { getAllCharacters, DASHA_MAHAVIDYA_CATEGORY_DATA } from '@/data/characters';
import { NAGA_CATEGORY_DATA } from '@/data/naga-category-data';
import { GANDHARVA_CATEGORY_DATA } from '@/data/gandharva-category-data';
import { KING_CATEGORY_DATA } from '@/data/king-category-data';
import { WARRIOR_CATEGORY_DATA } from '@/data/warrior-category-data';
import { MUNI_CATEGORY_DATA } from '@/data/muni-category-data';
import { RISHI_CATEGORY_DATA } from '@/data/rishi-category-data';
import { DEMON_CATEGORY_DATA } from '@/data/demon-category-data';
import { ASURA_CATEGORY_DATA } from '@/data/asura-category-data';
import { RAKSHASA_CATEGORY_DATA } from '@/data/rakshasa-category-data';
import { DAITYA_CATEGORY_DATA } from '@/data/daitya-category-data';
import { DANAVA_CATEGORY_DATA } from '@/data/danava-category-data';
import { PISHACHA_CATEGORY_DATA } from '@/data/pishacha-category-data';
import { YAKSHA_CATEGORY_DATA } from '@/data/yaksha-category-data';
import { OTHER_CELESTIAL_BEINGS_CATEGORY_DATA } from '@/data/other-celestial-beings-category-data';
import { DEVI_CATEGORY_DATA } from '@/data/devi-category-data';
import { DEVA_CATEGORY_DATA } from '@/data/deva-category-data';
import { TRIMURTI_CATEGORY_DATA } from '@/data/trimurti-category-data';
import { DASHAVATAR_CATEGORY_DATA } from '@/data/dashavatar-category-data';
import { NAVDURGA_CATEGORY_DATA } from '@/data/navdurga-category-data';
import { SAPTARISHI_CATEGORY_DATA } from '@/data/saptarishi-category-data';
import { PRAJAPATI_CATEGORY_DATA } from '@/data/prajapati-category-data';
import { APSARAS_CATEGORY_DATA } from '@/data/apsaras-category-data';
import { EKADASHA_RUDRA_CATEGORY_DATA } from '@/data/ekadasha-rudra-category-data';
import { MAHADEVA_AVATARS_CATEGORY_DATA } from '@/data/mahadeva-avatars-category-data';
import { AVATAR_CATEGORY_DATA } from '@/data/avatar-category-data';
import { NAVAGRAHA_CATEGORY_DATA } from '@/data/navagraha-category-data'; 
import type { Character, CharacterType } from '@/lib/types';
import { CHARACTER_TYPES } from '@/lib/types';
import { CharacterCard } from '@/components/character/CharacterCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertTriangle, ListFilter, BookCopy, Waves, Music, Crown, Shield, ScrollText, Skull, Flame, ShieldAlert, Zap, Ghost, Gem, Sparkles, Star, Users, Library, ShieldCheck, UsersRound, Feather, Activity, Orbit } from 'lucide-react';
import { DashaMahavidyaCategoryPageDisplay } from '@/components/category/DashaMahavidyaCategoryPageDisplay';
import { NagaCategoryPageDisplay } from '@/components/category/NagaCategoryPageDisplay';
import { GandharvaCategoryPageDisplay } from '@/components/category/GandharvaCategoryPageDisplay';
import { KingCategoryPageDisplay } from '@/components/category/KingCategoryPageDisplay';
import { WarriorCategoryPageDisplay } from '@/components/category/WarriorCategoryPageDisplay';
import { MuniCategoryPageDisplay } from '@/components/category/MuniCategoryPageDisplay';
import { RishiCategoryPageDisplay } from '@/components/category/RishiCategoryPageDisplay';
import { DemonCategoryPageDisplay } from '@/components/category/DemonCategoryPageDisplay';
import { AsuraCategoryPageDisplay } from '@/components/category/AsuraCategoryPageDisplay';
import { RakshasaCategoryPageDisplay } from '@/components/category/RakshasaCategoryPageDisplay';
import { DaityaCategoryPageDisplay } from '@/components/category/DaityaCategoryPageDisplay';
import { DanavaCategoryPageDisplay } from '@/components/category/DanavaCategoryPageDisplay';
import { PishachaCategoryPageDisplay } from '@/components/category/PishachaCategoryPageDisplay';
import { YakshaCategoryPageDisplay } from '@/components/category/YakshaCategoryPageDisplay';
import { OtherCelestialBeingsCategoryPageDisplay } from '@/components/category/OtherCelestialBeingsCategoryPageDisplay';
import { DeviCategoryPageDisplay } from '@/components/category/DeviCategoryPageDisplay';
import { DevaCategoryPageDisplay } from '@/components/category/DevaCategoryPageDisplay';
import { TrimurtiCategoryPageDisplay } from '@/components/category/TrimurtiCategoryPageDisplay';
import { DashavatarCategoryPageDisplay } from '@/components/category/DashavatarCategoryPageDisplay';
import { NavdurgaCategoryPageDisplay } from '@/components/category/NavdurgaCategoryPageDisplay';
import { SaptarishiCategoryPageDisplay } from '@/components/category/SaptarishiCategoryPageDisplay';
import { PrajapatiCategoryPageDisplay } from '@/components/category/PrajapatiCategoryPageDisplay';
import { ApsarasCategoryPageDisplay } from '@/components/category/ApsarasCategoryPageDisplay';
import { EkadashaRudraCategoryPageDisplay } from '@/components/category/EkadashaRudraCategoryPageDisplay';
import { MahadevaAvatarsCategoryPageDisplay } from '@/components/category/MahadevaAvatarsCategoryPageDisplay';
import { AvatarCategoryPageDisplay } from '@/components/category/AvatarCategoryPageDisplay';
import { NavagrahaCategoryPageDisplay } from '@/components/category/NavagrahaCategoryPageDisplay';

interface CategoryPageProps {
  params: { categoryName: string };
}

export async function generateMetadata(
  { params }: CategoryPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const decodedCategoryName = decodeURIComponent(params.categoryName);
  const previousTitle = (await parent).title?.absolute || 'The Deva Archives';

  if (decodedCategoryName === TRIMURTI_CATEGORY_DATA.category) { 
    return {
      title: `${TRIMURTI_CATEGORY_DATA.category} | ${previousTitle}`,
      description: TRIMURTI_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === DASHA_MAHAVIDYA_CATEGORY_DATA.name) {
    return {
      title: `${DASHA_MAHAVIDYA_CATEGORY_DATA.name} | ${previousTitle}`,
      description: DASHA_MAHAVIDYA_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === NAGA_CATEGORY_DATA.category) {
    return {
      title: `${NAGA_CATEGORY_DATA.category} | ${previousTitle}`,
      description: NAGA_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === GANDHARVA_CATEGORY_DATA.category) {
    return {
      title: `${GANDHARVA_CATEGORY_DATA.category} | ${previousTitle}`,
      description: GANDHARVA_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === KING_CATEGORY_DATA.category) {
    return {
      title: `${KING_CATEGORY_DATA.category} | ${previousTitle}`,
      description: KING_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === WARRIOR_CATEGORY_DATA.category) {
    return {
      title: `${WARRIOR_CATEGORY_DATA.category} | ${previousTitle}`,
      description: WARRIOR_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === MUNI_CATEGORY_DATA.category) { 
    return {
      title: `${MUNI_CATEGORY_DATA.category} | ${previousTitle}`,
      description: MUNI_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === RISHI_CATEGORY_DATA.category) { 
    return {
      title: `${RISHI_CATEGORY_DATA.category} | ${previousTitle}`,
      description: RISHI_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === DEMON_CATEGORY_DATA.category) {
    return {
      title: `${DEMON_CATEGORY_DATA.category} | ${previousTitle}`,
      description: DEMON_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === ASURA_CATEGORY_DATA.category) {
    return {
      title: `${ASURA_CATEGORY_DATA.category} | ${previousTitle}`,
      description: ASURA_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === RAKSHASA_CATEGORY_DATA.category) { 
    return {
      title: `${RAKSHASA_CATEGORY_DATA.category} | ${previousTitle}`,
      description: RAKSHASA_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === DAITYA_CATEGORY_DATA.category) { 
    return {
      title: `${DAITYA_CATEGORY_DATA.category} | ${previousTitle}`,
      description: DAITYA_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === DANAVA_CATEGORY_DATA.category) { 
    return {
      title: `${DANAVA_CATEGORY_DATA.category} | ${previousTitle}`,
      description: DANAVA_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === PISHACHA_CATEGORY_DATA.category) {
    return {
      title: `${PISHACHA_CATEGORY_DATA.category} | ${previousTitle}`,
      description: PISHACHA_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === YAKSHA_CATEGORY_DATA.category) {
    return {
      title: `${YAKSHA_CATEGORY_DATA.category} | ${previousTitle}`,
      description: YAKSHA_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === OTHER_CELESTIAL_BEINGS_CATEGORY_DATA.category) {
    return {
      title: `${OTHER_CELESTIAL_BEINGS_CATEGORY_DATA.category} | ${previousTitle}`,
      description: OTHER_CELESTIAL_BEINGS_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === DEVI_CATEGORY_DATA.category) {
    return {
      title: `${DEVI_CATEGORY_DATA.category} | ${previousTitle}`,
      description: DEVI_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === DEVA_CATEGORY_DATA.category) {
    return {
      title: `${DEVA_CATEGORY_DATA.category} | ${previousTitle}`,
      description: DEVA_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === DASHAVATAR_CATEGORY_DATA.category) {
    return {
      title: `${DASHAVATAR_CATEGORY_DATA.category} - Ten Avatars of Vishnu | ${previousTitle}`,
      description: DASHAVATAR_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === NAVDURGA_CATEGORY_DATA.category) {
    return {
      title: `${NAVDURGA_CATEGORY_DATA.category} - Nine Forms of Durga | ${previousTitle}`,
      description: NAVDURGA_CATEGORY_DATA.description,
    };
  }
   if (decodedCategoryName === SAPTARISHI_CATEGORY_DATA.category) {
    return {
      title: `${SAPTARISHI_CATEGORY_DATA.category} - Seven Great Sages | ${previousTitle}`,
      description: SAPTARISHI_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === PRAJAPATI_CATEGORY_DATA.category) {
    return {
      title: `${PRAJAPATI_CATEGORY_DATA.category} - Lords of Creation | ${previousTitle}`,
      description: PRAJAPATI_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === APSARAS_CATEGORY_DATA.category) {
    return {
      title: `${APSARAS_CATEGORY_DATA.category} - Celestial Nymphs | ${previousTitle}`,
      description: APSARAS_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === EKADASHA_RUDRA_CATEGORY_DATA.category) { 
    return {
      title: `${EKADASHA_RUDRA_CATEGORY_DATA.title} | ${previousTitle}`,
      description: EKADASHA_RUDRA_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === MAHADEVA_AVATARS_CATEGORY_DATA.category) { 
    return {
      title: `${MAHADEVA_AVATARS_CATEGORY_DATA.title} | ${previousTitle}`,
      description: MAHADEVA_AVATARS_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === AVATAR_CATEGORY_DATA.category) {
    return {
      title: `General ${AVATAR_CATEGORY_DATA.category}s | ${previousTitle}`,
      description: AVATAR_CATEGORY_DATA.description,
    };
  }
  if (decodedCategoryName === NAVAGRAHA_CATEGORY_DATA.category) {
    return {
      title: `${NAVAGRAHA_CATEGORY_DATA.category} - Nine Celestial Influencers | ${previousTitle}`,
      description: NAVAGRAHA_CATEGORY_DATA.description,
    };
  }
 

  if (!CHARACTER_TYPES.includes(decodedCategoryName as CharacterType)) {
    return {
      title: `Category Not Found | ${previousTitle}`,
    };
  }

  return {
    title: `${decodedCategoryName} Characters | ${previousTitle}`,
    description: `Explore all Sanatan Dharma characters belonging to the ${decodedCategoryName} category. Discover deities, avatars, rishis, and more.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const decodedCategoryName = decodeURIComponent(params.categoryName);

  if (decodedCategoryName === TRIMURTI_CATEGORY_DATA.category) { 
    return <TrimurtiCategoryPageDisplay categoryData={TRIMURTI_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === DASHA_MAHAVIDYA_CATEGORY_DATA.name) {
    return <DashaMahavidyaCategoryPageDisplay categoryData={DASHA_MAHAVIDYA_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === NAGA_CATEGORY_DATA.category) {
    return <NagaCategoryPageDisplay categoryData={NAGA_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === GANDHARVA_CATEGORY_DATA.category) {
    return <GandharvaCategoryPageDisplay categoryData={GANDHARVA_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === KING_CATEGORY_DATA.category) {
    return <KingCategoryPageDisplay categoryData={KING_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === WARRIOR_CATEGORY_DATA.category) {
    return <WarriorCategoryPageDisplay categoryData={WARRIOR_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === MUNI_CATEGORY_DATA.category) {
    return <MuniCategoryPageDisplay categoryData={MUNI_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === RISHI_CATEGORY_DATA.category) { 
    return <RishiCategoryPageDisplay categoryData={RISHI_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === DEMON_CATEGORY_DATA.category) {
    return <DemonCategoryPageDisplay categoryData={DEMON_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === ASURA_CATEGORY_DATA.category) {
    return <AsuraCategoryPageDisplay categoryData={ASURA_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === RAKSHASA_CATEGORY_DATA.category) { 
    return <RakshasaCategoryPageDisplay categoryData={RAKSHASA_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === DAITYA_CATEGORY_DATA.category) { 
    return <DaityaCategoryPageDisplay categoryData={DAITYA_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === DANAVA_CATEGORY_DATA.category) { 
    return <DanavaCategoryPageDisplay categoryData={DANAVA_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === PISHACHA_CATEGORY_DATA.category) { 
    return <PishachaCategoryPageDisplay categoryData={PISHACHA_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === YAKSHA_CATEGORY_DATA.category) {
    return <YakshaCategoryPageDisplay categoryData={YAKSHA_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === OTHER_CELESTIAL_BEINGS_CATEGORY_DATA.category) { 
    return <OtherCelestialBeingsCategoryPageDisplay categoryData={OTHER_CELESTIAL_BEINGS_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === DEVI_CATEGORY_DATA.category) {
    return <DeviCategoryPageDisplay categoryData={DEVI_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === DEVA_CATEGORY_DATA.category) {
    return <DevaCategoryPageDisplay categoryData={DEVA_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === DASHAVATAR_CATEGORY_DATA.category) {
    return <DashavatarCategoryPageDisplay categoryData={DASHAVATAR_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === NAVDURGA_CATEGORY_DATA.category) { 
    return <NavdurgaCategoryPageDisplay categoryData={NAVDURGA_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === SAPTARISHI_CATEGORY_DATA.category) {
    return <SaptarishiCategoryPageDisplay categoryData={SAPTARISHI_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === PRAJAPATI_CATEGORY_DATA.category) {
    return <PrajapatiCategoryPageDisplay categoryData={PRAJAPATI_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === APSARAS_CATEGORY_DATA.category) {
    return <ApsarasCategoryPageDisplay categoryData={APSARAS_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === EKADASHA_RUDRA_CATEGORY_DATA.category) { 
    return <EkadashaRudraCategoryPageDisplay categoryData={EKADASHA_RUDRA_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === MAHADEVA_AVATARS_CATEGORY_DATA.category) { 
    return <MahadevaAvatarsCategoryPageDisplay categoryData={MAHADEVA_AVATARS_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === AVATAR_CATEGORY_DATA.category) {
    return <AvatarCategoryPageDisplay categoryData={AVATAR_CATEGORY_DATA} />;
  }
  if (decodedCategoryName === NAVAGRAHA_CATEGORY_DATA.category) {
    return <NavagrahaCategoryPageDisplay categoryData={NAVAGRAHA_CATEGORY_DATA} />;
  }


  if (!CHARACTER_TYPES.includes(decodedCategoryName as CharacterType)) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-2">Category Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The character category you are looking for does not exist.
        </p>
        <Link href="/characters" passHref>
          <Button variant="default">Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const allCharacters = getAllCharacters();
  const charactersInCategory = allCharacters.filter(
    (character: Character) => character.type === decodedCategoryName
  );

  const getCategoryIcon = (category: string) => {
    if (category === TRIMURTI_CATEGORY_DATA.category) return <Users className="mr-3 h-10 w-10" />; 
    if (category === DEVA_CATEGORY_DATA.category) return <Sparkles className="mr-3 h-10 w-10" />;
    if (category === DEVI_CATEGORY_DATA.category) return <Star className="mr-3 h-10 w-10" />;
    if (category === DASHA_MAHAVIDYA_CATEGORY_DATA.name) return <BookCopy className="mr-3 h-10 w-10" />;
    if (category === NAGA_CATEGORY_DATA.category) return <Waves className="mr-3 h-10 w-10" />;
    if (category === GANDHARVA_CATEGORY_DATA.category) return <Music className="mr-3 h-10 w-10" />;
    if (category === KING_CATEGORY_DATA.category) return <Crown className="mr-3 h-10 w-10" />;
    if (category === WARRIOR_CATEGORY_DATA.category) return <Shield className="mr-3 h-10 w-10" />;
    if (category === MUNI_CATEGORY_DATA.category) return <ScrollText className="mr-3 h-10 w-10" />; 
    if (category === RISHI_CATEGORY_DATA.category) return <ScrollText className="mr-3 h-10 w-10" />;
    if (category === DEMON_CATEGORY_DATA.category) return <Skull className="mr-3 h-10 w-10" />;
    if (category === ASURA_CATEGORY_DATA.category) return <Flame className="mr-3 h-10 w-10" />;
    if (category === RAKSHASA_CATEGORY_DATA.category) return <Skull className="mr-3 h-10 w-10" />;
    if (category === DAITYA_CATEGORY_DATA.category) return <ShieldAlert className="mr-3 h-10 w-10" />;
    if (category === DANAVA_CATEGORY_DATA.category) return <Zap className="mr-3 h-10 w-10" />;
    if (category === PISHACHA_CATEGORY_DATA.category) return <Ghost className="mr-3 h-10 w-10" />;
    if (category === YAKSHA_CATEGORY_DATA.category) return <Gem className="mr-3 h-10 w-10" />;
    if (category === OTHER_CELESTIAL_BEINGS_CATEGORY_DATA.category) return <Sparkles className="mr-3 h-10 w-10" />;
    if (category === DASHAVATAR_CATEGORY_DATA.category) return <Users className="mr-3 h-10 w-10" />;
    if (category === NAVDURGA_CATEGORY_DATA.category) return <ShieldCheck className="mr-3 h-10 w-10" />;
    if (category === SAPTARISHI_CATEGORY_DATA.category) return <Library className="mr-3 h-10 w-10" />;
    if (category === PRAJAPATI_CATEGORY_DATA.category) return <UsersRound className="mr-3 h-10 w-10" />;
    if (category === APSARAS_CATEGORY_DATA.category) return <Feather className="mr-3 h-10 w-10" />;
    if (category === EKADASHA_RUDRA_CATEGORY_DATA.category) return <Zap className="mr-3 h-10 w-10" />;
    if (category === MAHADEVA_AVATARS_CATEGORY_DATA.category) return <Activity className="mr-3 h-10 w-10" />;
    if (category === AVATAR_CATEGORY_DATA.category) return <Feather className="mr-3 h-10 w-10" />;
    if (category === NAVAGRAHA_CATEGORY_DATA.category) return <Orbit className="mr-3 h-10 w-10" />;
    return <ListFilter className="mr-3 h-10 w-10" />;
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary flex items-center justify-center">
            {getCategoryIcon(decodedCategoryName)} Category: {decodedCategoryName}
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Browse characters classified under {decodedCategoryName}.
        </p>
      </div>

      {charactersInCategory.length > 0 ? (
        <section aria-labelledby={`${decodedCategoryName}-character-list-heading`}>
          <h2 id={`${decodedCategoryName}-character-list-heading`} className="sr-only">
            Characters in {decodedCategoryName} category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {charactersInCategory.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </section>
      ) : (
        <div className="text-center py-12">
          <AlertTriangle className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <p className="text-2xl text-muted-foreground">
            No characters found in the {decodedCategoryName} category.
          </p>
           <p className="text-sm text-muted-foreground mt-1">
            Note: This page displays individual characters of type '{decodedCategoryName}'. Specific detailed pages like '{TRIMURTI_CATEGORY_DATA.category}', '{DEVA_CATEGORY_DATA.category}', '{DEVI_CATEGORY_DATA.category}', '{DASHA_MAHAVIDYA_CATEGORY_DATA.name}', '{DASHAVATAR_CATEGORY_DATA.category}', '{NAVDURGA_CATEGORY_DATA.category}', '{SAPTARISHI_CATEGORY_DATA.category}', '{PRAJAPATI_CATEGORY_DATA.category}', '{APSARAS_CATEGORY_DATA.category}', '{NAGA_CATEGORY_DATA.category}', '{GANDHARVA_CATEGORY_DATA.category}', '{KING_CATEGORY_DATA.category}', '{WARRIOR_CATEGORY_DATA.category}', '{MUNI_CATEGORY_DATA.category}', '{RISHI_CATEGORY_DATA.category}', '{DEMON_CATEGORY_DATA.category}', '{ASURA_CATEGORY_DATA.category}', '{RAKSHASA_CATEGORY_DATA.category}', '{DAITYA_CATEGORY_DATA.category}', '{DANAVA_CATEGORY_DATA.category}', '{PISHACHA_CATEGORY_DATA.category}', '{YAKSHA_CATEGORY_DATA.category}', '{OTHER_CELESTIAL_BEINGS_CATEGORY_DATA.category}', '{EKADASHA_RUDRA_CATEGORY_DATA.category}', '{MAHADEVA_AVATARS_CATEGORY_DATA.category}', '{AVATAR_CATEGORY_DATA.category}', '{NAVAGRAHA_CATEGORY_DATA.category}' might have their own dedicated views.
          </p>
          <Link href="/characters" passHref>
            <Button variant="link" className="mt-4 text-accent">
              Explore other categories
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const allCategoryTypes = [...CHARACTER_TYPES];
  
  const dedicatedCategories = [
    TRIMURTI_CATEGORY_DATA.category, 
    DEVA_CATEGORY_DATA.category,
    DEVI_CATEGORY_DATA.category,
    DASHA_MAHAVIDYA_CATEGORY_DATA.name,
    DASHAVATAR_CATEGORY_DATA.category,
    NAVDURGA_CATEGORY_DATA.category,
    SAPTARISHI_CATEGORY_DATA.category, 
    PRAJAPATI_CATEGORY_DATA.category,
    APSARAS_CATEGORY_DATA.category,
    NAGA_CATEGORY_DATA.category,
    GANDHARVA_CATEGORY_DATA.category,
    KING_CATEGORY_DATA.category,
    WARRIOR_CATEGORY_DATA.category,
    MUNI_CATEGORY_DATA.category,
    RISHI_CATEGORY_DATA.category,
    DEMON_CATEGORY_DATA.category,
    ASURA_CATEGORY_DATA.category,
    RAKSHASA_CATEGORY_DATA.category,
    DAITYA_CATEGORY_DATA.category,
    DANAVA_CATEGORY_DATA.category,
    PISHACHA_CATEGORY_DATA.category,
    YAKSHA_CATEGORY_DATA.category,
    OTHER_CELESTIAL_BEINGS_CATEGORY_DATA.category,
    EKADASHA_RUDRA_CATEGORY_DATA.category, 
    MAHADEVA_AVATARS_CATEGORY_DATA.category,
    AVATAR_CATEGORY_DATA.category,
    NAVAGRAHA_CATEGORY_DATA.category,
  ];
  
  dedicatedCategories.forEach(catName => {
    if (!allCategoryTypes.includes(catName as CharacterType)) {
      allCategoryTypes.push(catName as CharacterType); 
    }
  });
  
  const uniqueCategoryNames = Array.from(new Set(allCategoryTypes));

  return uniqueCategoryNames.map((name: CharacterType | string) => ({ 
    categoryName: encodeURIComponent(name),
  }));
}
