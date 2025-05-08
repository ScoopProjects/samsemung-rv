
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import DocsLayout from '@/components/DocsLayout';
import { Card, CardContent } from '@/components/ui/card';

const Architecture = () => {
  return (
    <DocsLayout>
      <h1 className="text-3xl font-bold mb-6">Architecture</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-muted-foreground mb-8">
          SamsEmung uses a dual-engine architecture that combines the power of QEMU for full-system emulation 
          and Unicorn Engine for precise instruction-level analysis.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">System Overview</h2>
        
        <div className="mb-8">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-muted p-8 text-center">
                <div className="text-xl font-medium mb-2">SamsEmung Architecture Diagram</div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-background rounded-md w-full p-4 text-center">User Interface (PyQt6)</div>
                  <div className="border-dashed border-2 border-border w-0 h-8"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-md p-4 text-center border border-blue-100 dark:border-blue-800/30">
                      <div className="font-medium mb-2">QEMU Path</div>
                      <div className="text-sm text-muted-foreground">Full system emulation</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-md p-4 text-center border border-purple-100 dark:border-purple-800/30">
                      <div className="font-medium mb-2">Unicorn Path</div>
                      <div className="text-sm text-muted-foreground">Instruction-level emulation</div>
                    </div>
                  </div>
                  <div className="border-dashed border-2 border-border w-0 h-8"></div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    <div className="bg-background rounded-md p-3 text-center text-sm">Hardware Models</div>
                    <div className="bg-background rounded-md p-3 text-center text-sm">Samsung Firmware</div>
                    <div className="bg-background rounded-md p-3 text-center text-sm">Knox Security</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">QEMU Path</h2>
        <p className="mb-4">
          The QEMU path provides full-system emulation, enabling:
        </p>
        <ul className="space-y-2 mb-6">
          <li>Complete Android OS boot process</li>
          <li>Samsung TouchWiz/OneUI environment</li>
          <li>Hardware-accurate device emulation</li>
          <li>Full network and peripheral support</li>
        </ul>
        
        <div className="bg-muted rounded-lg p-6 mb-8">
          <h3 className="text-xl font-medium mb-3">QEMU Customizations</h3>
          <p className="mb-4">
            SamsEmung extends QEMU with Samsung-specific hardware models:
          </p>
          <ul className="space-y-2">
            <li>Exynos SoC models (various generations)</li>
            <li>Samsung-specific peripherals and sensors</li>
            <li>Knox security environment simulation</li>
            <li>Secure boot process emulation</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Unicorn Path</h2>
        <p className="mb-4">
          The Unicorn Engine path focuses on CPU-level emulation for:
        </p>
        <ul className="space-y-2 mb-6">
          <li>Instruction-accurate tracing</li>
          <li>Firmware analysis without full boot</li>
          <li>Security vulnerability research</li>
          <li>Performance-critical subsystem testing</li>
        </ul>
        
        <div className="bg-muted rounded-lg p-6 mb-8">
          <h3 className="text-xl font-medium mb-3">Unicorn Integration</h3>
          <p>
            SamsEmung's Unicorn Engine integration provides specialized tooling for Samsung firmware analysis:
          </p>
          <ul className="space-y-2">
            <li>Memory access hooks for tracking data flow</li>
            <li>Instruction execution hooks for tracing code paths</li>
            <li>API for scripting and automation of analysis tasks</li>
            <li>Snapshot and restore functionality for state analysis</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Mode Switching</h2>
        <p className="mb-6">
          SamsEmung allows seamless switching between QEMU and Unicorn modes:
        </p>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800/30">
          <ol className="space-y-4 list-decimal list-inside">
            <li className="pl-2">
              <p className="font-medium inline">Boot with QEMU</p>
              <p className="mt-1 text-sm text-muted-foreground">Full boot of Samsung device using QEMU emulation</p>
            </li>
            
            <li className="pl-2">
              <p className="font-medium inline">Capture system state</p>
              <p className="mt-1 text-sm text-muted-foreground">Memory, register, and device state is captured</p>
            </li>
            
            <li className="pl-2">
              <p className="font-medium inline">Transition to Unicorn</p>
              <p className="mt-1 text-sm text-muted-foreground">Selected components are transitioned to Unicorn for detailed analysis</p>
            </li>
            
            <li className="pl-2">
              <p className="font-medium inline">Analyze & debug</p>
              <p className="mt-1 text-sm text-muted-foreground">Perform detailed instruction-level analysis and debugging</p>
            </li>
            
            <li className="pl-2">
              <p className="font-medium inline">Return to QEMU</p>
              <p className="mt-1 text-sm text-muted-foreground">Transition back to full-system emulation with modified state (if desired)</p>
            </li>
          </ol>
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <Button variant="outline" asChild>
          <Link to="/guide">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Guide
          </Link>
        </Button>
        <Button asChild>
          <Link to="/features">
            Features <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </DocsLayout>
  );
};

export default Architecture;
