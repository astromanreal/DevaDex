
export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} The Deva Archives. All rights reserved.</p>
        <p className="text-sm mt-1">An educational resource for exploring Sanatan Dharma.</p>
      </div>
    </footer>
  );
}
