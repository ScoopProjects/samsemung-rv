
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DocsLayout from '@/components/DocsLayout';

const Features = () => {
  return (
    <DocsLayout>
      <h1 className="text-3xl font-bold mb-6">Features</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-lg text-muted-foreground mb-6">
          SamsEmung provides a comprehensive set of features for emulating and analyzing Samsung devices.
          Explore the capabilities across different categories.
        </p>
      </div>

      <Tabs defaultValue="emulation" className="w-full mb-10">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="emulation">Emulation</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="ui">User Interface</TabsTrigger>
          <TabsTrigger value="devices">Device Support</TabsTrigger>
        </TabsList>
        
        <TabsContent value="emulation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              title="Dual-Mode Emulation"
              description="Switch between full system emulation (QEMU) and instruction-level emulation (Unicorn Engine) as needed for your use case."
            />
            <FeatureCard
              title="Samsung OneUI Environment"
              description="Complete emulation of Samsung's OneUI/TouchWiz environment, including Samsung-specific apps and services."
            />
            <FeatureCard
              title="Knox Security Container"
              description="Emulation of Samsung's Knox security platform for secure app testing and analysis."
            />
            <FeatureCard
              title="Peripheral Support"
              description="Emulated camera, sensors, GPS, and other device peripherals with configurable behaviors."
            />
            <FeatureCard
              title="Network Simulation"
              description="Configurable network conditions including cellular, Wi-Fi, and Bluetooth connectivity."
            />
            <FeatureCard
              title="Performance Profiles"
              description="Simulate different device performance profiles, from power saving to high performance modes."
            />
          </div>
        </TabsContent>
        
        <TabsContent value="analysis">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              title="Instruction Tracing"
              description="Detailed tracing of CPU instructions for debugging and analysis purposes."
            />
            <FeatureCard
              title="Memory Analysis"
              description="Track and analyze memory usage and access patterns across the system."
            />
            <FeatureCard
              title="API Monitoring"
              description="Monitor and log API calls between applications and system services."
            />
            <FeatureCard
              title="System Call Tracing"
              description="Track and analyze system calls made by applications and services."
            />
            <FeatureCard
              title="Snapshot & Restore"
              description="Create system snapshots at any point and restore them for repeatable analysis."
            />
            <FeatureCard
              title="Script-Based Testing"
              description="Automated testing framework for running scripts against the emulated device."
            />
          </div>
        </TabsContent>
        
        <TabsContent value="ui">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              title="PyQt6 Interface"
              description="Modern, cross-platform graphical user interface built with PyQt6."
            />
            <FeatureCard
              title="Device Control Panel"
              description="Comprehensive control panel for managing device settings and state."
            />
            <FeatureCard
              title="Visual Debugger"
              description="Graphical debugger for viewing execution flow and memory state."
            />
            <FeatureCard
              title="Log Viewer"
              description="Real-time log viewer with filtering and search capabilities."
            />
            <FeatureCard
              title="Screen Recording"
              description="Record device screen activity for documentation and analysis."
            />
            <FeatureCard
              title="Multiple Device Windows"
              description="Run and control multiple emulated devices simultaneously."
            />
          </div>
        </TabsContent>
        
        <TabsContent value="devices">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Supported Device Models</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {supportedDevices.map((device, index) => (
                <div key={index} className="flex items-start bg-muted rounded-md p-4">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <div className="font-medium">{device.name}</div>
                    <div className="text-sm text-muted-foreground">{device.model}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Supported Android Versions</h3>
            <div className="space-y-3">
              {supportedAndroid.map((version, index) => (
                <div key={index} className="flex items-center bg-muted rounded-md p-4">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <div>
                    <div className="font-medium">{version.name} (Android {version.version})</div>
                    <div className="text-sm text-muted-foreground">{version.api}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="bg-muted rounded-lg p-6 mb-8">
        <h3 className="text-xl font-medium mb-3">Feature Requests</h3>
        <p className="mb-4">
          Missing a feature you need? SamsEmung is under active development, and we welcome feature requests 
          from the community.
        </p>
        <Button asChild>
          <a href="https://github.com/samsemung/emulator/issues/new?template=feature_request.md" target="_blank" rel="noopener noreferrer">
            Request a Feature
          </a>
        </Button>
      </div>

      <div className="mt-10 flex justify-between">
        <Button variant="outline" asChild>
          <Link to="/architecture">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Architecture
          </Link>
        </Button>
        <Button asChild>
          <Link to="/configuration">
            Configuration <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </DocsLayout>
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

const supportedDevices = [
  { name: "Galaxy S6", model: "SM-G920F/SM-G920I" },
  { name: "Galaxy S7", model: "SM-G930F/SM-G930S" },
  { name: "Galaxy S8", model: "SM-G950F/SM-G950N" },
  { name: "Galaxy S9", model: "SM-G960F/SM-G960U" },
  { name: "Galaxy S10", model: "SM-G973F/SM-G973U" },
  { name: "Galaxy Note 8", model: "SM-N950F/SM-N950U" },
  { name: "Galaxy Note 9", model: "SM-N960F/SM-N960U" },
  { name: "Galaxy Tab S4", model: "SM-T830/SM-T835" },
  { name: "Galaxy Tab S5e", model: "SM-T720/SM-T725" }
];

const supportedAndroid = [
  { name: "Lollipop", version: "5.0 - 5.1", api: "API level 21-22" },
  { name: "Marshmallow", version: "6.0", api: "API level 23" },
  { name: "Nougat", version: "7.0 - 7.1", api: "API level 24-25" },
  { name: "Oreo", version: "8.0 - 8.1", api: "API level 26-27" },
  { name: "Pie", version: "9.0", api: "API level 28" },
  { name: "10", version: "10.0", api: "API level 29" }
];

export default Features;
