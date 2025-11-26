
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Twitter, Instagram, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | The Deva Archives',
  description: 'Get in touch with The Deva Archives team. Find our email, phone, and social media links.',
};

interface ContactInfoItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  isEmail?: boolean;
  ariaLabel?: string;
}

const contactDetails: ContactInfoItem[] = [
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    label: 'Email',
    value: 'astroman6569@gmail.com',
    href: 'mailto:astroman6569@gmail.com',
    isEmail: true,
    ariaLabel: 'Email astroman6569@gmail.com',
  },
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    label: 'Phone',
    value: '+91 8102116569',
    href: 'tel:+918102116569',
    ariaLabel: 'Call +91 8102116569',
  },
];

const socialLinks: ContactInfoItem[] = [
  {
    icon: <Twitter className="h-6 w-6 text-primary" />,
    label: 'Twitter / X',
    value: '@Sathyamsarthak',
    href: 'https://x.com/Sathyamsarthak',
    ariaLabel: 'Visit Sathyamsarthak on Twitter / X',
  },
  {
    icon: <Instagram className="h-6 w-6 text-primary" />,
    label: 'Instagram',
    value: '@srishikharji',
    href: 'https://instagram.com/srishikharji',
    ariaLabel: 'Visit srishikharji on Instagram',
  },
  {
    icon: <Github className="h-6 w-6 text-primary" />,
    label: 'GitHub',
    value: 'astromanreal',
    href: 'https://github.com/astromanreal',
    ariaLabel: 'Visit astromanreal on GitHub',
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-12 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">Get in Touch</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question, feedback, or just want to connect, feel free to reach out through any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="shadow-xl border-border/60 rounded-xl overflow-hidden">
          <CardHeader className="bg-muted/30 p-6">
            <CardTitle className="text-2xl text-primary flex items-center">
              <Mail className="mr-3 h-7 w-7" /> Direct Contact
            </CardTitle>
            <CardDescription>For direct inquiries, please use the details below.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-start space-x-4">
                <div className="flex-shrink-0 pt-1 text-primary bg-primary/10 p-2 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{item.label}</h3>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.isEmail ? undefined : "_blank"}
                      rel={item.isEmail ? undefined : "noopener noreferrer"}
                      className="text-accent hover:underline break-all text-md flex items-center group"
                      aria-label={item.ariaLabel}
                    >
                      {item.value}
                      {!item.isEmail && <ExternalLink className="inline-block h-4 w-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />}
                    </Link>
                  ) : (
                    <p className="text-muted-foreground break-all text-md">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl border-border/60 rounded-xl overflow-hidden">
          <CardHeader className="bg-muted/30 p-6">
            <CardTitle className="text-2xl text-primary flex items-center">
              <Users className="mr-3 h-7 w-7" /> Connect Online
            </CardTitle>
            <CardDescription>Follow us and engage with our community on social media.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {socialLinks.map((item) => (
              <Button
                key={item.label}
                variant="outline"
                className="w-full justify-start py-3 text-left h-auto hover:bg-accent/20 hover:border-accent transition-all duration-200 group rounded-lg border-border/80"
                asChild
              >
                <Link href={item.href!} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel}>
                  <div className="flex items-center space-x-4 w-full">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-accent/20 group-hover:text-accent-foreground transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-foreground text-md">{item.label}</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-accent-foreground/80 transition-colors">{item.value}</p>
                    </div>
                    <ExternalLink className="ml-auto h-5 w-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                  </div>
                </Link>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Helper icon for social media section title (optional, as Users is already imported by shadcn if used elsewhere)
const Users = ({ className }: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || "lucide lucide-users"}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
