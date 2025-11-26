
'use client';

import { useColorPalette } from '@/contexts/ColorPaletteContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function ThemeSelector() {
  const { colorPalette, setColorPalette, availablePalettes } = useColorPalette();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {availablePalettes.map((palette) => (
        <Card
          key={palette.id}
          className={`cursor-pointer transition-all duration-200 ease-in-out hover:shadow-lg flex flex-col
            ${ colorPalette === palette.id ? 'border-primary ring-2 ring-primary shadow-xl' : 'border-border hover:border-primary/50'
          }`}
          onClick={() => setColorPalette(palette.id)}
        >
          <CardHeader className="flex flex-row items-center justify-between p-3">
            <CardTitle className="text-sm font-medium leading-tight">{palette.name}</CardTitle>
            {colorPalette === palette.id && <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />}
          </CardHeader>
          <CardContent className="p-3 pt-0">
            <div className={`h-8 w-full rounded-md mb-2 theme-preview-bg-${palette.id}-primary`}></div>
            <CardDescription className="text-xs text-muted-foreground truncate">
              Select to apply this theme.
            </CardDescription>
          </CardContent>
        </Card>
      ))}
      {/* CSS for theme previews (could be in a global CSS or style tag if small) */}
      {/* The style jsx global tag should remain to ensure primary color previews work. Other unused classes are harmless. */}
      <style jsx global>{`
        .theme-preview-bg-sacred-grove-primary { background-color: hsl(130 50% 45%); }
        .theme-preview-bg-sacred-grove-secondary { background-color: hsl(90 40% 55%); }
        .theme-preview-bg-sacred-grove-accent { background-color: hsl(40 60% 60%); }
        .theme-preview-bg-sacred-grove-background { background-color: hsl(120 20% 96%); }

        .theme-preview-bg-cosmic-ocean-primary { background-color: hsl(200 70% 50%); }
        .theme-preview-bg-cosmic-ocean-secondary { background-color: hsl(240 50% 60%); }
        .theme-preview-bg-cosmic-ocean-accent { background-color: hsl(180 60% 70%); }
        .theme-preview-bg-cosmic-ocean-background { background-color: hsl(210 50% 95%); }

        .theme-preview-bg-sunrise-temple-primary { background-color: hsl(25 80% 55%); }
        .theme-preview-bg-sunrise-temple-secondary { background-color: hsl(40 90% 60%); }
        .theme-preview-bg-sunrise-temple-accent { background-color: hsl(10 70% 60%); }
        .theme-preview-bg-sunrise-temple-background { background-color: hsl(30 100% 97%); }

        .theme-preview-bg-moonlit-austerity-primary { background-color: hsl(210 30% 50%); }
        .theme-preview-bg-moonlit-austerity-secondary { background-color: hsl(0 0% 70%); }
        .theme-preview-bg-moonlit-austerity-accent { background-color: hsl(200 40% 75%); }
        .theme-preview-bg-moonlit-austerity-background { background-color: hsl(220 20% 98%); }
      `}</style>
    </div>
  );
}

