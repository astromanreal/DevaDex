'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Filter as FilterIconLucide } from 'lucide-react';
import type { CharacterType, Yuga, TextSource, CharacterGender, CharacterNature } from '@/lib/types';
import { CHARACTER_TYPES, YUGAS, TEXT_SOURCES, REGIONS, CHARACTER_GENDERS, CHARACTER_NATURES, CHARACTER_ROLES } from '@/lib/types';

export interface Filters {
  type: CharacterType[];
  yuga: Yuga[];
  textSource: TextSource[];
  region: string[];
  gender: CharacterGender[];
  nature: CharacterNature[];
  role: string[];
}

interface FilterBarProps {
  activeFilters: Filters;
  onFilterChange: (filterCategory: keyof Filters, value: string | CharacterType | Yuga | TextSource | CharacterGender | CharacterNature, isChecked: boolean) => void;
  onResetFilters: () => void;
  isMobileSheet?: boolean; // To conditionally hide reset button if handled outside
}

type FilterCategoryKey = keyof Filters;

interface FilterCategoryDefinition {
  title: string;
  items: ReadonlyArray<string>;
  categoryKey: FilterCategoryKey;
}

const filterCategories: FilterCategoryDefinition[] = [
  { title: 'Type', items: CHARACTER_TYPES, categoryKey: 'type' },
  { title: 'Era / Yuga', items: YUGAS, categoryKey: 'yuga' },
  { title: 'Text Source', items: TEXT_SOURCES, categoryKey: 'textSource' },
  { title: 'Region', items: REGIONS, categoryKey: 'region' },
  { title: 'Gender', items: CHARACTER_GENDERS, categoryKey: 'gender' },
  { title: 'Nature', items: CHARACTER_NATURES, categoryKey: 'nature' },
  { title: 'Role', items: CHARACTER_ROLES, categoryKey: 'role' },
];

export function FilterBar({ activeFilters, onFilterChange, onResetFilters, isMobileSheet = false }: FilterBarProps) {
  const hasActiveFilters = Object.values(activeFilters).some(arr => arr.length > 0);

  return (
    <div className="flex flex-wrap gap-3 p-3 bg-card border-border rounded-lg shadow-sm items-center">
      {filterCategories.map(({ title, items, categoryKey }) => (
        <DropdownMenu key={categoryKey}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center text-sm">
              {title}
              {(activeFilters[categoryKey as FilterCategoryKey] as string[]).length > 0 && (
                <span className="ml-2 bg-primary text-primary-foreground h-5 w-5 text-xs rounded-full flex items-center justify-center">
                  {(activeFilters[categoryKey as FilterCategoryKey] as string[]).length}
                </span>
              )}
              <FilterIconLucide className="ml-1.5 h-3.5 w-3.5 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64" align="start">
            <DropdownMenuLabel>{title}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ScrollArea className="h-[200px]">
              {items.map((item) => (
                <DropdownMenuCheckboxItem
                  key={item}
                  checked={(activeFilters[categoryKey as FilterCategoryKey] as string[]).includes(item)}
                  onCheckedChange={(checked) => onFilterChange(categoryKey as FilterCategoryKey, item, !!checked)}
                >
                  {item}
                </DropdownMenuCheckboxItem>
              ))}
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
      {hasActiveFilters && !isMobileSheet && (
        <Button onClick={onResetFilters} variant="ghost" size="sm" className="text-accent hover:text-accent/80">
          <X className="mr-1.5 h-4 w-4" /> Reset Filters
        </Button>
      )}
      {hasActiveFilters && isMobileSheet && (
         <Button onClick={onResetFilters} variant="outline" size="sm" className="w-full mt-2">
          <X className="mr-1.5 h-4 w-4" /> Reset All Filters
        </Button>
      )}
    </div>
  );
}