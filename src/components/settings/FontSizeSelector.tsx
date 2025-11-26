
'use client';

import { useFontSettings } from '@/contexts/FontSettingsContext';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CaseLower, CaseSensitive, CaseUpper } from 'lucide-react'; // Example icons

export function FontSizeSelector() {
  const { fontSize, setFontSize, availableFontSizes } = useFontSettings();

  const getIconForSize = (sizeId: typeof fontSize) => {
    switch (sizeId) {
      case 'sm': return <CaseLower className="mr-2 h-5 w-5" />;
      case 'md': return <CaseSensitive className="mr-2 h-5 w-5" />;
      case 'lg': return <CaseUpper className="mr-2 h-5 w-5" />;
      default: return <CaseSensitive className="mr-2 h-5 w-5" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Font Size</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={fontSize}
          onValueChange={(value) => setFontSize(value as typeof fontSize)}
          className="space-y-2"
        >
          {availableFontSizes.map((size) => (
            <Label
              key={size.id}
              htmlFor={`font-size-${size.id}`}
              className="flex items-center space-x-3 p-3 rounded-md border hover:bg-accent/50 transition-colors cursor-pointer has-[:checked]:bg-accent has-[:checked]:text-accent-foreground has-[:checked]:border-primary"
            >
              <RadioGroupItem value={size.id} id={`font-size-${size.id}`} className="sr-only" />
              {getIconForSize(size.id)}
              <span className="font-medium">{size.name}</span>
            </Label>
          ))}
        </RadioGroup>
        <p className="text-xs text-muted-foreground mt-4">
          Adjust the base font size for the application. All text will scale accordingly.
        </p>
      </CardContent>
    </Card>
  );
}
