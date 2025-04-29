import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="relative z-10 bg-card/80 backdrop-blur-md border-b border-border sticky top-0">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
            <span className="gradient-text">CS Experts</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/" isActive={isActive("/")} onClick={closeMobileMenu}>
              Home
            </NavLink>
            <NavLink href="/about" isActive={isActive("/about")} onClick={closeMobileMenu}>
              About
            </NavLink>
            <NavLink href="/downloads" isActive={isActive("/downloads")} onClick={closeMobileMenu}>
              Downloads
            </NavLink>
            <NavLink href="/contact" isActive={isActive("/contact")} onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 rounded-lg bg-secondary/80 backdrop-blur-md">
            <div className="flex flex-col space-y-3 p-4">
              <NavLink href="/" isActive={isActive("/")} onClick={closeMobileMenu}>
                Home
              </NavLink>
              <NavLink href="/about" isActive={isActive("/about")} onClick={closeMobileMenu}>
                About
              </NavLink>
              <NavLink href="/downloads" isActive={isActive("/downloads")} onClick={closeMobileMenu}>
                Downloads
              </NavLink>
              <NavLink href="/contact" isActive={isActive("/contact")} onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  isActive: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavLink = ({ href, isActive, onClick, children }: NavLinkProps) => {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={cn(
        "nav-link transition duration-200",
        isActive ? "text-accent font-medium" : "text-foreground hover:text-accent"
      )}
    >
      {children}
    </Link>
  );
};

export default Header;
