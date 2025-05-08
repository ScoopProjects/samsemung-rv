
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Button variant="outline" asChild size="sm">
          <Link to="/getting-started">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Getting Started
          </Link>
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-6">ReVanced Features</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Explore the powerful customization options available with ReVanced. 
        Each category offers unique enhancements to improve your experience.
      </p>

      <Tabs defaultValue="adblocking" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="adblocking">Ad Blocking</TabsTrigger>
          <TabsTrigger value="ui">UI Enhancements</TabsTrigger>
          <TabsTrigger value="playback">Playback Features</TabsTrigger>
        </TabsList>
        
        <TabsContent value="adblocking">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              title="Video Ad Blocking"
              description="Removes ads from videos for uninterrupted viewing experience."
            />
            <FeatureCard
              title="Banner Ad Removal"
              description="Eliminates banner advertisements throughout the application interface."
            />
            <FeatureCard
              title="Sponsor Block Integration"
              description="Automatically skips sponsored segments within videos based on community-contributed data."
            />
            <FeatureCard
              title="Custom Ad Filter Rules"
              description="Create and import your own ad blocking rules for advanced customization."
            />
          </div>
        </TabsContent>
        
        <TabsContent value="ui">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              title="Custom Themes"
              description="Apply custom color schemes and visual styles to the application."
            />
            <FeatureCard
              title="Layout Customization"
              description="Reorganize and customize UI elements for improved usability."
            />
            <FeatureCard
              title="Hide Unwanted Sections"
              description="Remove or hide unnecessary UI components and sections."
            />
            <FeatureCard
              title="Custom Font Support"
              description="Change the application font to your preferred typeface."
            />
          </div>
        </TabsContent>
        
        <TabsContent value="playback">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              title="Background Playback"
              description="Continue playing audio when the app is in the background."
            />
            <FeatureCard
              title="Enhanced Playback Controls"
              description="Additional controls for video speed, looping, and more."
            />
            <FeatureCard
              title="Picture-in-Picture Improvements"
              description="Enhanced picture-in-picture mode with additional controls."
            />
            <FeatureCard
              title="Quality Override Options"
              description="Force specific video quality regardless of network conditions."
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-muted rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">Compatibility Notice</h2>
        <p className="text-muted-foreground">
          Feature availability may vary depending on the target application version and your device specifications. 
          Always check the compatibility information before applying patches.
        </p>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default Features;
