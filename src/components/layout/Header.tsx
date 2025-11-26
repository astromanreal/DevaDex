
'use client';

import Link from 'next/link';
import { Landmark, Compass, Milestone, Users, Settings, Menu, PhoneCall, UserCircle } from 'lucide-react'; 
import { ThemeToggleButton } from './ThemeToggleButton';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext'; 

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth(); 

  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/explore", label: "Explore", icon: <Compass size={18} /> },
    { href: "/characters", label: "Categories", icon: <Users size={18} /> },
    { href: "/timeline", label: "Timeline", icon: <Milestone size={18} /> },
    { href: "/contact", label: "Contact", icon: <PhoneCall size={18} /> },
    { href: "/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors flex items-center gap-2">
          <Landmark className="h-7 w-7" />
          The Deva Archives
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Button key={link.href} asChild variant="ghost" className={`text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent ${pathname === link.href ? 'bg-accent/10 text-accent' : ''}`}>
              <Link href={link.href} className="flex items-center gap-2 px-3 py-2">
                {link.icon}
                {link.label}
              </Link>
            </Button>
          ))}
          <ThemeToggleButton />
          {/* Always show profile icon if user object exists (which it should with new context logic) */}
          {user && (
            <Button asChild variant="ghost" size="icon" className="ml-2 text-primary hover:text-accent">
              <Link href="/profile" aria-label="User Profile">
                <UserCircle size={22} />
              </Link>
            </Button>
          )}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggleButton />
          {user && (
             <Button asChild variant="ghost" size="icon" className="text-primary hover:text-accent">
              <Link href="/profile" aria-label="User Profile">
                <UserCircle size={22} />
              </Link>
            </Button>
          )}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:text-accent">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background text-foreground p-0 flex flex-col">
              <SheetHeader className="p-6 border-b">
                <SheetTitle> {/* Removed asChild from SheetTitle */}
                  <SheetClose asChild>
                    <Link href="/" className="text-xl font-bold text-primary hover:text-accent transition-colors flex items-center gap-2">
                      <Landmark className="h-6 w-6" />
                      The Deva Archives
                    </Link>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex-grow p-6 space-y-2">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 p-3 rounded-md text-foreground hover:bg-accent/10 hover:text-accent transition-colors text-base ${pathname === link.href ? 'bg-accent/10 text-accent' : ''}`}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <Separator />
              <div className="p-6 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Theme</span>
                {/* Theme toggle button can be kept here or removed if only in main nav */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
