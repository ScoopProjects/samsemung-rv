
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Star } from 'lucide-react';
import DocsLayout from '@/components/DocsLayout';
import ChangingSubtitle from '@/components/ChangingSubtitle';

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    }, { threshold: 0.1 });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const subtitles = [
    "Samsung-specific emulation, no compromises.",
    "Powerful device analysis for developers.",
    "Explore Samsung's ecosystem in a sandbox.",
    "From firmware to interface, full control."
  ];

  return (
    <DocsLayout>
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            SamsEmung
          </h1>
          <ChangingSubtitle 
            subtitles={subtitles}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          />
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={scrollToFeatures}>
              Explore Features
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/guide">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="rounded-lg bg-gradient-to-br from-muted/50 to-muted p-8 text-center border animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <h2 className="text-2xl font-semibold mb-4">Powerful Samsung Device Emulation</h2>
          <p className="mb-6 text-muted-foreground">
            SamsEmung provides a comprehensive emulation environment for Samsung devices,
            leveraging QEMU and Unicorn Engine to deliver unparalleled accuracy and performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background rounded-md p-4">
              <div className="font-medium mb-1">QEMU Path</div>
              <p className="text-sm text-muted-foreground">Full boot process for complete Android emulation</p>
            </div>
            <div className="bg-background rounded-md p-4">
              <div className="font-medium mb-1">Unicorn Path</div>
              <p className="text-sm text-muted-foreground">CPU-level instruction tracing for advanced analysis</p>
            </div>
            <div className="bg-background rounded-md p-4">
              <div className="font-medium mb-1">Samsung UI</div>
              <p className="text-sm text-muted-foreground">TouchWiz/OneUI and Knox environment support</p>
            </div>
          </div>
        </div>
      </section>
      
      <section ref={featuresRef} className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard 
            title="Dual-Mode Emulation"
            description="Switch between full-system (QEMU) and single-instruction (Unicorn) modes for different analysis needs."
            delay={100}
          />
          <FeatureCard 
            title="Samsung Firmware Support"
            description="Specialized support for Samsung firmware analysis with Knox security component emulation."
            delay={200}
          />
          <FeatureCard 
            title="Wide Device Coverage"
            description="Support for Galaxy S6–S10, Note series, and more devices with hardware-accurate emulation."
            delay={300}
          />
          <FeatureCard 
            title="Developer Tools"
            description="Built-in debugging, instruction tracing, and memory inspection for advanced analysis."
            delay={400}
          />
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Getting Started</h2>
        <div className="bg-muted rounded-lg p-8 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <pre className="bg-background p-4 rounded-md overflow-x-auto mb-6">
            <code className="text-sm">
              git clone https://github.com/samsemung/emulator.git<br/>
              cd emulator<br/>
              pip install -r requirements.txt
            </code>
          </pre>
          <Button asChild>
            <Link to="/guide">
              View Full Installation Guide <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </DocsLayout>
  );
};

const FeatureCard = ({ title, description, delay = 0 }) => {
  return (
    <Card className="h-full animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{ transitionDelay: `${delay}ms` }}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default Index;
