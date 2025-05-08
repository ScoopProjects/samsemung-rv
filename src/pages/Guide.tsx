
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import DocsLayout from '@/components/DocsLayout';

const Guide = () => {
  return (
    <DocsLayout>
      <h1 className="text-3xl font-bold mb-6">Installation Guide</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          This guide will walk you through the process of installing SamsEmung and setting up your first emulated Samsung device.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Prerequisites</h2>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Python 3.8 or higher</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>PyQt6 for the graphical interface</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>QEMU (version 6.0 or higher recommended)</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Unicorn Engine</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>At least 8GB of RAM and 20GB of free disk space</span>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Installation Steps</h2>
        
        <div className="bg-muted rounded-lg p-6 mb-8">
          <h3 className="text-xl font-medium mb-3">Step 1: Clone the Repository</h3>
          <pre className="bg-background p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              git clone https://github.com/samsemung/emulator.git<br/>
              cd emulator
            </code>
          </pre>
        </div>
        
        <div className="bg-muted rounded-lg p-6 mb-8">
          <h3 className="text-xl font-medium mb-3">Step 2: Install Python Dependencies</h3>
          <pre className="bg-background p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              pip install -r requirements.txt
            </code>
          </pre>
          <p className="mt-3 text-sm text-muted-foreground">
            This will install all required Python packages including PyQt6, unicorn-engine, and other dependencies.
          </p>
        </div>
        
        <div className="bg-muted rounded-lg p-6 mb-8">
          <h3 className="text-xl font-medium mb-3">Step 3: Install QEMU</h3>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2">On Linux:</h4>
            <pre className="bg-background p-4 rounded-md overflow-x-auto">
              <code className="text-sm">
                # Ubuntu/Debian<br/>
                sudo apt install qemu-system-arm<br/><br/>
                # Fedora<br/>
                sudo dnf install qemu-system-arm
              </code>
            </pre>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2">On macOS:</h4>
            <pre className="bg-background p-4 rounded-md overflow-x-auto">
              <code className="text-sm">
                brew install qemu
              </code>
            </pre>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">On Windows:</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Download the installer from the <a href="https://www.qemu.org/download/#windows" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">QEMU website</a> and follow the installation instructions.
            </p>
          </div>
        </div>
        
        <div className="bg-muted rounded-lg p-6 mb-8">
          <h3 className="text-xl font-medium mb-3">Step 4: Configure SamsEmung</h3>
          <pre className="bg-background p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              # Generate default configuration<br/>
              python -m samsemung.config --init
            </code>
          </pre>
          <p className="mt-3 text-sm text-muted-foreground">
            This creates a basic config.json file in your home directory under .samsemung/
          </p>
        </div>
        
        <div className="bg-muted rounded-lg p-6 mb-8">
          <h3 className="text-xl font-medium mb-3">Step 5: Run SamsEmung</h3>
          <pre className="bg-background p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              python -m samsemung
            </code>
          </pre>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/30 rounded-lg p-4 mt-8">
          <p className="text-amber-800 dark:text-amber-300 font-medium">Note</p>
          <p className="text-amber-700 dark:text-amber-400">
            Firmware images are not included with SamsEmung due to copyright restrictions. You'll need to provide your own Samsung firmware files for full functionality.
            See the <Link to="/configuration" className="text-primary hover:underline">Configuration</Link> page for details on setting up firmware paths.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <Button variant="outline" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Overview
          </Link>
        </Button>
        <Button asChild>
          <Link to="/architecture">
            Architecture <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </DocsLayout>
  );
};

export default Guide;
