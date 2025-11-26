
import type { Metadata } from 'next';
import { Geist, Merriweather, Lato, Dancing_Script } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ColorPaletteProvider } from '@/contexts/ColorPaletteContext';
import { FontSettingsProvider } from '@/contexts/FontSettingsContext'; 
import { AuthProvider } from '@/contexts/AuthContext'; // Added AuthProvider

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900']
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
});

const dancingScript = Dancing_Script({
  variable: '--font-dancing-script',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});


export const metadata: Metadata = {
  title: 'The Deva Archives',
  description: 'A comprehensive and interactive Sanatan Dharma character encyclopedia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Default font size class can be font-size-md, context will manage it */}
      <body 
        className={`${geistSans.variable} ${merriweather.variable} ${lato.variable} ${dancingScript.variable} antialiased`}
        // Default font family set here via globals.css, FontSettingsContext can override with inline style
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ColorPaletteProvider>
            <FontSettingsProvider>
              <AuthProvider> {/* Added AuthProvider wrapper */}
                {children}
                <Toaster />
              </AuthProvider>
            </FontSettingsProvider>
          </ColorPaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

