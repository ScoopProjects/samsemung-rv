
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import DocsLayout from '@/components/DocsLayout';

const Contributing = () => {
  return (
    <DocsLayout>
      <h1 className="text-3xl font-bold mb-6">Contributing</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          SamsEmung is an open-source project that welcomes contributions from the community. 
          Here's how you can help improve the project.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Ways to Contribute</h2>
        <ul className="space-y-2 mb-6">
          <li>Bug reports and feature requests</li>
          <li>Code contributions and pull requests</li>
          <li>Documentation improvements</li>
          <li>Device model and firmware compatibility testing</li>
          <li>UI/UX enhancements</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Reporting Issues</h2>
        <p className="mb-4">
          If you encounter bugs or have feature suggestions, please submit an issue on GitHub:
        </p>
        
        <div className="bg-muted rounded-lg p-6 mb-8">
          <ol className="space-y-4 list-decimal list-inside">
            <li className="pl-2">
              <p className="font-medium inline">Check existing issues</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Before submitting a new issue, please search to see if someone has already reported it.
              </p>
            </li>
            
            <li className="pl-2">
              <p className="font-medium inline">Create a new issue</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Use the appropriate issue template (bug report or feature request).
              </p>
            </li>
            
            <li className="pl-2">
              <p className="font-medium inline">Provide detailed information</p>
              <p className="mt-1 text-sm text-muted-foreground">
                For bugs, include steps to reproduce, expected behavior, actual behavior, and environment details
                (OS version, Python version, QEMU version, etc.)
              </p>
            </li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Code Contributions</h2>
        <p className="mb-4">
          We welcome pull requests! Here's how to contribute code:
        </p>
        
        <div className="bg-muted rounded-lg p-6 mb-8">
          <ol className="space-y-4 list-decimal list-inside">
            <li className="pl-2">
              <p className="font-medium inline">Fork the repository</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Create your own fork of the SamsEmung repository on GitHub.
              </p>
            </li>
            
            <li className="pl-2">
              <p className="font-medium inline">Create a feature branch</p>
              <pre className="bg-background p-2 rounded-md overflow-x-auto mt-1">
                <code className="text-sm">git checkout -b feature/your-feature-name</code>
              </pre>
            </li>
            
            <li className="pl-2">
              <p className="font-medium inline">Make your changes</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Implement your fix or feature, following the code style of the project.
              </p>
            </li>
            
            <li className="pl-2">
              <p className="font-medium inline">Add tests</p>
              <p className="mt-1 text-sm text-muted-foreground">
                For new features or bug fixes, please add appropriate tests.
              </p>
            </li>
            
            <li className="pl-2">
              <p className="font-medium inline">Run tests locally</p>
              <pre className="bg-background p-2 rounded-md overflow-x-auto mt-1">
                <code className="text-sm">python -m pytest</code>
              </pre>
            </li>
            
            <li className="pl-2">
              <p className="font-medium inline">Submit a pull request</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Push your branch to GitHub and open a pull request against the main repository.
              </p>
            </li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Code Style</h2>
        <p className="mb-4">
          We follow PEP 8 coding standards for Python code. Please ensure your code:
        </p>
        <ul className="space-y-2 mb-6">
          <li>Follows PEP 8 style guidelines</li>
          <li>Includes proper docstrings for new functions and classes</li>
          <li>Uses type hints where appropriate</li>
          <li>Has meaningful variable and function names</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Documentation</h2>
        <p className="mb-4">
          Documentation improvements are always welcome! This includes:
        </p>
        <ul className="space-y-2 mb-6">
          <li>Fixing typos or clarifying existing documentation</li>
          <li>Adding examples or use cases</li>
          <li>Creating tutorials or guides for specific features</li>
          <li>Updating API documentation</li>
        </ul>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/30 rounded-lg p-4 mt-8">
          <p className="text-amber-800 dark:text-amber-300 font-medium">Code of Conduct</p>
          <p className="text-amber-700 dark:text-amber-400">
            We expect all contributors to adhere to our Code of Conduct. Please be respectful and constructive in all interactions.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-start">
        <Button variant="outline" asChild>
          <Link to="/license">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to License
          </Link>
        </Button>
      </div>
    </DocsLayout>
  );
};

export default Contributing;
