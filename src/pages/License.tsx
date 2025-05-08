
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import DocsLayout from '@/components/DocsLayout';

const License = () => {
  return (
    <DocsLayout>
      <h1 className="text-3xl font-bold mb-6">License</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          SamsEmung is open-source software released under the MIT License.
        </p>

        <div className="bg-muted rounded-lg p-6 mb-8">
          <h3 className="text-xl font-medium mb-3">MIT License</h3>
          <div className="text-sm">
            <p className="mb-4">Copyright (c) 2023 SamsEmung Project</p>
            
            <p className="mb-4">
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            
            <p className="mb-4">
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.
            </p>
            
            <p className="mb-4">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Samsung Disclaimer</h2>
        <div className="bg-muted rounded-lg p-6 mb-8">
          <p className="mb-4">
            Samsung, Galaxy, Exynos, OneUI, and related trademarks are the property of Samsung Electronics Co., Ltd.
          </p>
          
          <p className="mb-4">
            SamsEmung is not affiliated with, endorsed by, sponsored by, or approved by Samsung Electronics Co., Ltd or any of its affiliates.
            This project is an independent effort for research, education, and development purposes only.
          </p>
          
          <p>
            Any Samsung firmware or software used with SamsEmung remains subject to its own licensing terms and conditions.
            Users are responsible for ensuring they have the legal right to use any Samsung firmware or software with this emulator.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Components</h2>
        <p className="mb-4">
          SamsEmung incorporates the following third-party open-source components:
        </p>
        
        <ul className="space-y-2 mb-6">
          <li><strong>QEMU</strong> - Licensed under the GNU General Public License (GPL)</li>
          <li><strong>Unicorn Engine</strong> - Licensed under the GNU General Public License (GPL)</li>
          <li><strong>PyQt6</strong> - Licensed under the GNU General Public License (GPL)</li>
          <li><strong>Python</strong> - Licensed under the Python Software Foundation License</li>
        </ul>
        
        <p>
          Full license texts for these components can be found in the project's LICENSE directory.
        </p>
      </div>

      <div className="mt-10 flex justify-between">
        <Button variant="outline" asChild>
          <Link to="/faq">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to FAQ
          </Link>
        </Button>
        <Button asChild>
          <Link to="/contributing">
            Contributing <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </DocsLayout>
  );
};

export default License;
