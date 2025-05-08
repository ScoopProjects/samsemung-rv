
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import DocsLayout from '@/components/DocsLayout';

const Configuration = () => {
  return (
    <DocsLayout>
      <h1 className="text-3xl font-bold mb-6">Configuration</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          SamsEmung uses a JSON-based configuration system to define device models, firmware paths, 
          and emulation parameters.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Configuration File</h2>
        <p className="mb-4">
          The main configuration file is located at <code>~/.samsemung/config.json</code> (Linux/macOS) or 
          <code>%USERPROFILE%\.samsemung\config.json</code> (Windows).
        </p>
        
        <div className="bg-muted rounded-lg p-6 mb-8">
          <h3 className="text-xl font-medium mb-3">Basic Configuration Example</h3>
          <pre className="bg-background p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
{`{
  "device_model": "galaxy-s10",
  "memory": "4G",
  "firmware": {
    "path": "/path/to/firmware/images",
    "version": "OneUI-2.5"
  },
  "display": {
    "resolution": "1440x3040",
    "density": 551
  },
  "storage": {
    "system": "/path/to/system.img",
    "data": "/path/to/userdata.img"
  },
  "network": {
    "mode": "user",
    "mac": "52:54:00:12:34:56"
  }
}`}
            </code>
          </pre>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Configuration Fields</h2>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Device Model</h3>
        <p className="mb-4">
          Specifies which Samsung device to emulate. Supported models include:
        </p>
        <ul className="space-y-2 mb-6">
          <li><code>galaxy-s6</code> - Galaxy S6 (SM-G920)</li>
          <li><code>galaxy-s7</code> - Galaxy S7 (SM-G930)</li>
          <li><code>galaxy-s8</code> - Galaxy S8 (SM-G950)</li>
          <li><code>galaxy-s9</code> - Galaxy S9 (SM-G960)</li>
          <li><code>galaxy-s10</code> - Galaxy S10 (SM-G973)</li>
          <li><code>galaxy-note8</code> - Galaxy Note 8 (SM-N950)</li>
          <li><code>galaxy-note9</code> - Galaxy Note 9 (SM-N960)</li>
        </ul>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Memory Configuration</h3>
        <p className="mb-4">
          Specifies the amount of RAM to allocate for the emulated device. Format: "2G", "4G", "8G", etc.
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Firmware Settings</h3>
        <p className="mb-4">
          Defines the location and version of Samsung firmware to use:
        </p>
        <ul className="space-y-2 mb-6">
          <li><code>path</code> - Directory containing firmware images</li>
          <li><code>version</code> - Firmware version identifier</li>
        </ul>
        
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/30 rounded-lg p-4 mt-8 mb-8">
          <p className="text-amber-800 dark:text-amber-300 font-medium">Note on Firmware</p>
          <p className="text-amber-700 dark:text-amber-400">
            SamsEmung does not provide Samsung firmware files. These must be obtained separately and may be subject to legal restrictions in your region.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <Button variant="outline" asChild>
          <Link to="/features">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Features
          </Link>
        </Button>
        <Button asChild>
          <Link to="/faq">
            FAQ <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </DocsLayout>
  );
};

export default Configuration;
