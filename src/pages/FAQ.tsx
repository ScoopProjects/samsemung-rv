
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import DocsLayout from '@/components/DocsLayout';

const FAQ = () => {
  return (
    <DocsLayout>
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Find answers to common questions about SamsEmung installation, configuration, and usage.
        </p>

        <div className="space-y-8">
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">How do I obtain Samsung firmware files?</h3>
            <p>
              Samsung firmware files are proprietary and should be obtained through official Samsung channels or your device. 
              SamsEmung does not provide these files due to legal restrictions. There are various community resources that 
              may help you locate firmware for research purposes, but always ensure you comply with local laws regarding firmware use.
            </p>
          </div>
          
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Why is emulation so slow?</h3>
            <p className="mb-4">
              Samsung device emulation is resource-intensive. To improve performance:
            </p>
            <ul className="space-y-2">
              <li>Increase the RAM allocation for QEMU in your configuration</li>
              <li>Use hardware-accelerated virtualization if available</li>
              <li>Reduce the emulated screen resolution</li>
              <li>Use the Unicorn path for component-specific analysis instead of full-system emulation</li>
              <li>Ensure your host system meets the recommended requirements (4+ CPU cores, 16GB+ RAM)</li>
            </ul>
          </div>
          
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">The emulator crashes during boot</h3>
            <p className="mb-4">
              Common reasons for emulator crashes during boot:
            </p>
            <ul className="space-y-2">
              <li>Incompatible or corrupted firmware files</li>
              <li>Insufficient memory allocation</li>
              <li>Missing device drivers in QEMU</li>
              <li>Incorrect configuration parameters</li>
            </ul>
            <p className="mt-4">
              Check the logs at <code>~/.samsemung/logs/qemu.log</code> for specific error messages that can help troubleshoot the issue.
            </p>
          </div>
          
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Can I install apps in the emulator?</h3>
            <p>
              Yes, the QEMU path provides a full Android environment where you can install and run apps. 
              Use the built-in ADB bridge to install APK files, or access the Play Store if your firmware image includes it 
              (requires Google Apps to be part of your firmware).
            </p>
          </div>
          
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Is SamsEmung legal to use?</h3>
            <p>
              SamsEmung itself is open-source software released under the MIT License. However, the use of Samsung firmware 
              and software may be subject to legal restrictions in your jurisdiction. SamsEmung is intended for legitimate 
              research, development, and educational purposes only. Always ensure you have the right to use any firmware files 
              with the emulator.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <Button variant="outline" asChild>
          <Link to="/configuration">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Configuration
          </Link>
        </Button>
        <Button asChild>
          <Link to="/license">
            License <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </DocsLayout>
  );
};

export default FAQ;
