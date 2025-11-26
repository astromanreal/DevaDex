
'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CharacterCard } from '@/components/character/CharacterCard';
import { SearchBar } from '@/components/search/SearchBar';
import { FilterBar, type Filters } from '@/components/search/FilterBar';
import { getAllCharacters } from '@/data/characters';
import type { Character, CharacterType, Yuga, TextSource, CharacterGender, CharacterNature } from '@/lib/types';
import { CHARACTER_TYPES } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Filter as FilterIconLucide, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

const initialFilters: Filters = {
  type: [],
  yuga: [],
  textSource: [],
  region: [],
  gender: [],
  nature: [],
  role: [],
};

export function ExplorePageClient() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  const [activeFilters, setActiveFilters] = useState<Filters>(() => {
    const defaultFilters = { ...initialFilters };
    const typeParam = searchParams.get('type');
    if (typeParam && CHARACTER_TYPES.includes(typeParam as CharacterType)) {
      defaultFilters.type = [typeParam as CharacterType];
    }
    return defaultFilters;
  });

  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);

  useEffect(() => {
    document.title = 'Explore Characters | The Deva Archives';
    const typeParam = searchParams.get('type');
    const currentTypeFilter = activeFilters.type;

    if (typeParam && CHARACTER_TYPES.includes(typeParam as CharacterType)) {
      if (currentTypeFilter.length !== 1 || currentTypeFilter[0] !== typeParam) {
        setActiveFilters({ ...initialFilters, type: [typeParam as CharacterType] });
        setSearchTerm('');
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);


  const allCharacters = useMemo(() => getAllCharacters(), []);

  const handleFilterChange = useCallback((
    filterCategory: keyof Filters,
    value: string | CharacterType | Yuga | TextSource | CharacterGender | CharacterNature,
    isChecked: boolean
  ) => {
    setActiveFilters(prevFilters => {
      const currentCategoryFilters = prevFilters[filterCategory] as string[];
      const newCategoryFilters = isChecked
        ? [...currentCategoryFilters, value]
        : currentCategoryFilters.filter(item => item !== value);
      return { ...prevFilters, [filterCategory]: newCategoryFilters };
    });
  }, []);

  const handleResetFilters = useCallback(() => {
    setActiveFilters(initialFilters);
    setSearchTerm('');
  }, []);

  const filteredCharacters = useMemo(() => {
    return allCharacters.filter(character => {
      const searchMatch = character.name.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (character.name.sanskrit && character.name.sanskrit.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          character.significance.toLowerCase().includes(searchTerm.toLowerCase());

      const typeMatch = activeFilters.type.length === 0 || activeFilters.type.includes(character.type);
      const yugaMatch = activeFilters.yuga.length === 0 || (character.yuga && activeFilters.yuga.includes(character.yuga));
      const textSourceMatch = activeFilters.textSource.length === 0 || character.associatedTexts.some(text => activeFilters.textSource.includes(text));
      const regionMatch = activeFilters.region.length === 0 || (character.region && activeFilters.region.includes(character.region));
      const genderMatch = activeFilters.gender.length === 0 || (character.gender && activeFilters.gender.includes(character.gender));
      const natureMatch = activeFilters.nature.length === 0 || (character.nature && activeFilters.nature.includes(character.nature));
      const roleMatch = activeFilters.role.length === 0 ||
                        (character.role &&
                         (Array.isArray(character.role)
                           ? character.role.some(r => activeFilters.role.map(fr => fr.toLowerCase()).includes(r.toLowerCase()))
                           : activeFilters.role.map(fr => fr.toLowerCase()).includes(character.role.toLowerCase())
                         )
                        );

      return searchMatch && typeMatch && yugaMatch && textSourceMatch && regionMatch && genderMatch && natureMatch && roleMatch;
    });
  }, [allCharacters, searchTerm, activeFilters]);

  const hasActiveSearchOrFilters = Object.values(activeFilters).some(arr => arr.length > 0) || !!searchTerm.trim();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 pt-4 md:pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Character Encyclopedia</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Search, filter, and discover a wide array of characters from Sanatan Dharma.
        </p>
      </div>

      <div className="sticky top-[64px] md:top-[64px] z-40 bg-background/90 backdrop-blur-md py-4 space-y-3 md:space-y-4 rounded-b-lg shadow-md">
        <div className="px-1 md:px-0">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        <div className="hidden md:block px-1 md:px-0">
          <FilterBar
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
          />
        </div>

        <div className="md:hidden flex justify-between items-center px-1 md:px-0">
          <Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                <FilterIconLucide className="mr-2 h-4 w-4" /> Filters
                {Object.values(activeFilters).reduce((acc, curr) => acc + curr.length, 0) > 0 && (
                  <span className="ml-2 bg-primary text-primary-foreground h-5 w-5 text-xs rounded-full flex items-center justify-center">
                    {Object.values(activeFilters).reduce((acc, curr) => acc + curr.length, 0)}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[340px] p-0 flex flex-col">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>Filter Characters</SheetTitle>
              </SheetHeader>
              <ScrollArea className="flex-grow p-4">
                <FilterBar
                  activeFilters={activeFilters}
                  onFilterChange={handleFilterChange}
                  onResetFilters={() => {
                    handleResetFilters();
                    setIsFilterSheetOpen(false);
                  }}
                  isMobileSheet={true}
                />
              </ScrollArea>
            </SheetContent>
          </Sheet>

          {hasActiveSearchOrFilters && (
            <Button onClick={() => {handleResetFilters(); setIsFilterSheetOpen(false);}} variant="ghost" size="sm" className="text-accent hover:text-accent/80">
              <X className="mr-1 h-4 w-4" /> Reset
            </Button>
          )}
        </div>
      </div>

      <section aria-labelledby="character-list-heading">
        <h2 id="character-list-heading" className="text-3xl font-bold text-primary mb-6">
          {hasActiveSearchOrFilters ? `Filtered Results (${filteredCharacters.length})` : `Browse Characters (${filteredCharacters.length})`}
        </h2>
        {filteredCharacters.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCharacters.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-2xl text-muted-foreground">No characters found matching your criteria.</p>
            <Button onClick={() => {handleResetFilters(); setIsFilterSheetOpen(false);}} variant="link" className="mt-4 text-accent">
              Clear filters and search
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
