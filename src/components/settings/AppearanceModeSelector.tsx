
'use client';

import { useTheme } from 'next-themes';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';

export function AppearanceModeSelector() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or nothing until mounted to avoid hydration mismatch
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Appearance Mode</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="h-8 bg-muted rounded animate-pulse w-1/2"></div>
          <div className="h-8 bg-muted rounded animate-pulse w-3/4"></div>
          <div className="h-8 bg-muted rounded animate-pulse w-2/3"></div>
        </CardContent>
      </Card>
    );
  }

  const modes = [
    { value: 'light', label: 'Light', icon: <Sun className="mr-2 h-5 w-5" /> },
    { value: 'dark', label: 'Dark', icon: <Moon className="mr-2 h-5 w-5" /> },
    { value: 'system', label: 'System', icon: <Monitor className="mr-2 h-5 w-5" />, details: `Currently: ${resolvedTheme}` },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Appearance Mode</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={theme}
          onValueChange={(value) => setTheme(value)}
          className="space-y-2"
        >
          {modes.map((mode) => (
            <Label
              key={mode.value}
              htmlFor={`theme-${mode.value}`}
              className="flex items-center space-x-3 p-3 rounded-md border hover:bg-accent/50 transition-colors cursor-pointer has-[:checked]:bg-accent has-[:checked]:text-accent-foreground has-[:checked]:border-primary"
            >
              <RadioGroupItem value={mode.value} id={`theme-${mode.value}`} className="sr-only" />
              {mode.icon}
              <span className="font-medium">{mode.label}</span>
              {mode.value === 'system' && theme === 'system' && (
                <span className="text-xs text-muted-foreground ml-auto">({resolvedTheme === 'dark' ? 'Dark' : 'Light'})</span>
              )}
            </Label>
          ))}
        </RadioGroup>
        <p className="text-xs text-muted-foreground mt-4">
          Controls the light or dark mode of the application. 'System' follows your operating system's preference.
        </p>
      </CardContent>
    </Card>
  );
}
