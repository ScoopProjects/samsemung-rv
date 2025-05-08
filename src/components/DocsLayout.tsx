
import React from 'react';
import DocsNavigation from './DocsNavigation';
import { cn } from '@/lib/utils';

interface DocsLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const DocsLayout = ({ children, className }: DocsLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="text-2xl font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            SamsEmung
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="/guide" className="text-muted-foreground hover:text-foreground transition-colors">Guide</a>
            <a href="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="https://github.com/samsemung/emulator" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
          </nav>
        </div>
      </header>
      <div className="container mx-auto px-4 py-12 flex">
        <DocsNavigation />
        <main className={cn("flex-1 max-w-3xl mx-auto md:ml-64", className)}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DocsLayout;
