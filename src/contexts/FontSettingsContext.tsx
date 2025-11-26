
'use client';

import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type FontSize = 'sm' | 'md' | 'lg';
export type FontFamily = 'geist-sans' | 'merriweather' | 'lato' | 'dancing-script';

interface FontSettings {
  fontSize: FontSize;
  fontFamily: FontFamily;
}

interface FontSettingsContextType extends FontSettings {
  setFontSize: (size: FontSize) => void;
  setFontFamily: (family: FontFamily) => void;
  availableFontSizes: { id: FontSize; name: string; className: string }[];
  availableFontFamilies: { id: FontFamily; name: string; cssVariable: string; fallback: string }[];
}

const LS_KEY = 'font-settings';

const defaultSettings: FontSettings = {
  fontSize: 'md',
  fontFamily: 'geist-sans',
};

const availableFontSizesList: { id: FontSize; name: string; className: string }[] = [
  { id: 'sm', name: 'Small', className: 'font-size-sm' },
  { id: 'md', name: 'Medium', className: 'font-size-md' },
  { id: 'lg', name: 'Large', className: 'font-size-lg' },
];

const availableFontFamiliesList: { id: FontFamily; name: string; cssVariable: string; fallback: string }[] = [
  { id: 'geist-sans', name: 'Geist Sans (Default)', cssVariable: 'var(--font-geist-sans)', fallback: 'sans-serif' },
  { id: 'merriweather', name: 'Merriweather (Serif)', cssVariable: 'var(--font-merriweather)', fallback: 'serif' },
  { id: 'lato', name: 'Lato (Sans-Serif)', cssVariable: 'var(--font-lato)', fallback: 'sans-serif' },
  { id: 'dancing-script', name: 'Dancing Script (Script)', cssVariable: 'var(--font-dancing-script)', fallback: 'cursive' },
];

const FontSettingsContext = createContext<FontSettingsContextType | undefined>(undefined);

export const FontSettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [fontSettings, setFontSettings] = useState<FontSettings>(defaultSettings);

  useEffect(() => {
    // Runs only on client
    const storedSettings = localStorage.getItem(LS_KEY);
    if (storedSettings) {
      try {
        const parsed = JSON.parse(storedSettings) as FontSettings;
        // Validate parsed settings
        if (availableFontSizesList.some(s => s.id === parsed.fontSize) &&
            availableFontFamiliesList.some(f => f.id === parsed.fontFamily)) {
          setFontSettings(parsed);
        } else {
           // If stored settings are invalid, reset to default and update localStorage
          setFontSettings(defaultSettings);
          localStorage.setItem(LS_KEY, JSON.stringify(defaultSettings));
        }
      } catch (error) {
        console.error("Error parsing font settings from localStorage", error);
        setFontSettings(defaultSettings);
        localStorage.setItem(LS_KEY, JSON.stringify(defaultSettings));
      }
    } else {
       localStorage.setItem(LS_KEY, JSON.stringify(defaultSettings)); // store initial defaults
    }
  }, []);

  const updateLocalStorage = useCallback((newSettings: FontSettings) => {
    localStorage.setItem(LS_KEY, JSON.stringify(newSettings));
  }, []);

  useEffect(() => {
    // Apply font size class to HTML element
    availableFontSizesList.forEach(size => {
      document.documentElement.classList.remove(size.className);
    });
    const currentSize = availableFontSizesList.find(s => s.id === fontSettings.fontSize);
    if (currentSize) {
      document.documentElement.classList.add(currentSize.className);
    } else {
      // Fallback to default if current setting is somehow invalid
      const defaultSizeClass = availableFontSizesList.find(s => s.id === defaultSettings.fontSize)!.className;
      document.documentElement.classList.add(defaultSizeClass);
    }

    // Apply font family style to body element
    const currentFamily = availableFontFamiliesList.find(f => f.id === fontSettings.fontFamily);
    if (currentFamily) {
      document.body.style.fontFamily = `${currentFamily.cssVariable}, ${currentFamily.fallback}`;
    } else {
      // Fallback to default if current setting is somehow invalid
      const defaultFamily = availableFontFamiliesList.find(f => f.id === defaultSettings.fontFamily)!;
      document.body.style.fontFamily = `${defaultFamily.cssVariable}, ${defaultFamily.fallback}`;
    }
    
  }, [fontSettings.fontSize, fontSettings.fontFamily]); // Changed dependencies

  const setFontSize = (size: FontSize) => {
    setFontSettings(prev => {
      const newSettings = { ...prev, fontSize: size };
      updateLocalStorage(newSettings);
      return newSettings;
    });
  };

  const setFontFamily = (family: FontFamily) => {
    setFontSettings(prev => {
      const newSettings = { ...prev, fontFamily: family };
      updateLocalStorage(newSettings);
      return newSettings;
    });
  };

  return (
    <FontSettingsContext.Provider value={{
      ...fontSettings,
      setFontSize,
      setFontFamily,
      availableFontSizes: availableFontSizesList,
      availableFontFamilies: availableFontFamiliesList,
    }}>
      {children}
    </FontSettingsContext.Provider>
  );
};

export const useFontSettings = () => {
  const context = useContext(FontSettingsContext);
  if (!context) {
    throw new Error('useFontSettings must be used within a FontSettingsProvider');
  }
  return context;
};

