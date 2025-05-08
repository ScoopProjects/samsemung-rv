
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Code, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          ReVanced Elegance Guide
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          Your comprehensive guide to customizing and enhancing your mobile experience with ReVanced
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/getting-started">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/revanced" target="_blank" rel="noopener noreferrer">
              GitHub <Code className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <FeatureCard 
          icon={<BookOpen className="h-8 w-8" />}
          title="Comprehensive Documentation"
          description="Detailed guides for every feature and customization option available in ReVanced."
        />
        <FeatureCard 
          icon={<Code className="h-8 w-8" />}
          title="Installation Guides"
          description="Step-by-step instructions for installing and configuring ReVanced on all supported devices."
        />
        <FeatureCard 
          icon={<Star className="h-8 w-8" />}
          title="Tips & Tricks"
          description="Advanced techniques to get the most out of your ReVanced experience."
        />
      </section>

      <section className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to elevate your mobile experience?</h2>
        <p className="mb-6 text-muted-foreground">
          Join thousands of users who have already discovered the power of ReVanced customizations.
        </p>
        <Button asChild>
          <Link to="/getting-started">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-2 text-primary">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default Index;
