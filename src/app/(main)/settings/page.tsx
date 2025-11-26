
import type { Metadata } from 'next';
import { ThemeSelector } from '@/components/settings/ThemeSelector';
import { AppearanceModeSelector } from '@/components/settings/AppearanceModeSelector';
import { FontFamilySelector } from '@/components/settings/FontFamilySelector';
import { FontSizeSelector } from '@/components/settings/FontSizeSelector';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Settings | The Deva Archives',
  description: 'Customize application settings, including theme, appearance, and font preferences.',
};

export default function SettingsPage() {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">Application Settings</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Personalize your The Deva Archives experience.
        </p>
      </div>

      <section aria-labelledby="theme-settings-heading" className="space-y-6">
        <div>
          <h2 id="theme-settings-heading" className="text-2xl font-semibold text-primary mb-2">
            Color Theme
          </h2>
          <p className="text-muted-foreground mb-4">
            Choose a color palette that best suits your preference. The selected theme will be applied across the entire application.
          </p>
          <ThemeSelector />
        </div>
      </section>
      
      <Separator />

      <section aria-labelledby="appearance-settings-heading" className="space-y-6">
         <div>
          <h2 id="appearance-settings-heading" className="text-2xl font-semibold text-primary mb-2">
            Appearance
          </h2>
          <p className="text-muted-foreground mb-4">
            Control the light/dark mode and typography of the application.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
             {/* Single column for appearance selectors for better focus */}
            <AppearanceModeSelector />
          </div>
        </div>
      </section>

      <Separator />

      <section aria-labelledby="font-settings-heading" className="space-y-6">
        <div>
          <h2 id="font-settings-heading" className="text-2xl font-semibold text-primary mb-2">
            Typography
          </h2>
           <p className="text-muted-foreground mb-4">
            Customize the font family and base size for application text.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FontFamilySelector />
            <FontSizeSelector />
          </div>
        </div>
      </section>

    </div>
  );
}
