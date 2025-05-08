
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

const GettingStarted = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-8">
        <Button variant="outline" asChild size="sm">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-6">Getting Started with ReVanced</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Welcome to the ReVanced Elegance Guide! This guide will help you get started with ReVanced,
          a powerful tool for customizing your mobile applications.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Prerequisites</h2>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Android device or emulator with Android 8.0 or higher</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>At least 2GB of free storage space</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Basic understanding of Android app installation</span>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Installation Steps</h2>
        
        <ol className="space-y-6 list-decimal list-inside">
          <li className="pl-2">
            <p className="font-medium inline">Download the ReVanced Manager</p>
            <p className="mt-2">Visit the official ReVanced GitHub repository to download the latest version of ReVanced Manager.</p>
          </li>
          
          <li className="pl-2">
            <p className="font-medium inline">Install ReVanced Manager</p>
            <p className="mt-2">Enable installation from unknown sources in your device settings, then install the downloaded APK file.</p>
          </li>
          
          <li className="pl-2">
            <p className="font-medium inline">Select the app to patch</p>
            <p className="mt-2">Open ReVanced Manager and select which app you want to customize from the available options.</p>
          </li>
          
          <li className="pl-2">
            <p className="font-medium inline">Choose your patches</p>
            <p className="mt-2">Select which features and customizations you want to apply to the selected application.</p>
          </li>
          
          <li className="pl-2">
            <p className="font-medium inline">Patch and install</p>
            <p className="mt-2">Start the patching process and wait for it to complete, then install the patched application.</p>
          </li>
        </ol>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/30 rounded-lg p-4 mt-8">
          <p className="text-amber-800 dark:text-amber-300 font-medium">Note</p>
          <p className="text-amber-700 dark:text-amber-400">
            Remember that the specific steps may vary depending on your device model and the version of ReVanced you're using.
            Always refer to the most recent documentation for up-to-date instructions.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <Button variant="outline" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
        <Button asChild>
          <Link to="/features">
            Explore Features <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default GettingStarted;
