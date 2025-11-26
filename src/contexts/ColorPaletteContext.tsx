
'use client';
import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

export type ColorPalette = 'sacred-grove' | 'cosmic-ocean' | 'sunrise-temple' | 'moonlit-austerity';

interface ColorPaletteContextType {
  colorPalette: ColorPalette;
  setColorPalette: Dispatch<SetStateAction<ColorPalette>>;
  availablePalettes: { id: ColorPalette; name: string }[];
}

const availablePalettesList: { id: ColorPalette; name: string }[] = [
  { id: 'sacred-grove', name: 'Sacred Grove (Default)' },
  { id: 'cosmic-ocean', name: 'Cosmic Ocean' },
  { id: 'sunrise-temple', name: 'Sunrise Temple' },
  { id: 'moonlit-austerity', name: 'Moonlit Austerity' },
];

const ColorPaletteContext = createContext<ColorPaletteContextType | undefined>(undefined);

export const ColorPaletteProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorPalette, setColorPalette] = useState<ColorPalette>('sacred-grove'); // Default

  useEffect(() => {
    // This effect runs only on the client
    const storedPalette = localStorage.getItem('color-palette') as ColorPalette | null;
    if (storedPalette && availablePalettesList.some(p => p.id === storedPalette)) {
      setColorPalette(storedPalette);
    }
    // Add initial theme class based on state (handles first load after hydration)
    document.documentElement.classList.add(`theme-${colorPalette}`);
  }, []); // Empty dependency array means this runs once after mount

  useEffect(() => {
    // This effect also runs only on the client
    availablePalettesList.forEach(palette => {
      document.documentElement.classList.remove(`theme-${palette.id}`);
    });
    document.documentElement.classList.add(`theme-${colorPalette}`);
    localStorage.setItem('color-palette', colorPalette);
  }, [colorPalette]);

  return (
    <ColorPaletteContext.Provider value={{ colorPalette, setColorPalette, availablePalettes: availablePalettesList }}>
      {children}
    </ColorPaletteContext.Provider>
  );
};

export const useColorPalette = () => {
  const context = useContext(ColorPaletteContext);
  if (!context) {
    throw new Error('useColorPalette must be used within a ColorPaletteProvider');
  }
  return context;
};
