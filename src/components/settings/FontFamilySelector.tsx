
'use client';

import { useFontSettings } from '@/contexts/FontSettingsContext';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Type, Edit, Feather as FeatherIcon } from 'lucide-react'; // Using specific icons for clarity

export function FontFamilySelector() {
  const { fontFamily, setFontFamily, availableFontFamilies } = useFontSettings();

  const getIconForFamily = (familyId: typeof fontFamily) => {
    switch (familyId) {
      case 'geist-sans':
        return <Type className="mr-2 h-5 w-5" />;
      case 'merriweather':
        return <Edit className="mr-2 h-5 w-5" />; // Using Edit icon for a classic serif feel
      case 'lato':
        return <Type className="mr-2 h-5 w-5" />; // Re-using Type for another sans-serif
      case 'dancing-script':
        return <FeatherIcon className="mr-2 h-5 w-5" />; // Feather for a script/artistic font
      default:
        return <Type className="mr-2 h-5 w-5" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Font Family</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={fontFamily}
          onValueChange={(value) => setFontFamily(value as typeof fontFamily)}
          className="space-y-2"
        >
          {availableFontFamilies.map((fam) => (
            <Label
              key={fam.id}
              htmlFor={`font-family-${fam.id}`}
              className="flex items-center space-x-3 p-3 rounded-md border hover:bg-accent/50 transition-colors cursor-pointer has-[:checked]:bg-accent has-[:checked]:text-accent-foreground has-[:checked]:border-primary"
              style={{ fontFamily: `${fam.cssVariable}, ${fam.fallback}` }}
            >
              <RadioGroupItem value={fam.id} id={`font-family-${fam.id}`} className="sr-only" />
              {getIconForFamily(fam.id)}
              <span className="font-medium">{fam.name}</span>
            </Label>
          ))}
        </RadioGroup>
         <p className="text-xs text-muted-foreground mt-4">
          Choose the primary font used throughout the application.
        </p>
      </CardContent>
    </Card>
  );
}

