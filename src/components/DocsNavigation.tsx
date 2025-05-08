
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

type NavItemProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavItem = ({ to, children, className }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "block px-4 py-2 rounded-md transition-colors", 
        isActive ? "bg-primary/10 text-primary font-medium" : "text-foreground/80 hover:text-primary hover:bg-primary/5",
        className
      )}
    >
      {children}
    </Link>
  );
};

const DocsNavigation = () => {
  return (
    <nav className="sticky top-6 w-64 pr-8 hidden md:block">
      <div className="font-medium text-lg mb-4 text-primary">SamsEmung</div>
      <div className="space-y-6">
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-2">Getting Started</div>
          <div className="space-y-1">
            <NavItem to="/">Overview</NavItem>
            <NavItem to="/guide">Installation Guide</NavItem>
          </div>
        </div>
        
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-2">Documentation</div>
          <div className="space-y-1">
            <NavItem to="/architecture">Architecture</NavItem>
            <NavItem to="/features">Features</NavItem>
            <NavItem to="/configuration">Configuration</NavItem>
          </div>
        </div>
        
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-2">Resources</div>
          <div className="space-y-1">
            <NavItem to="/faq">FAQ</NavItem>
            <NavItem to="/license">License</NavItem>
            <NavItem to="/contributing">Contributing</NavItem>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DocsNavigation;
