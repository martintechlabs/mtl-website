"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/#case-studies", label: "Case Studies" },
    { href: "/#about", label: "About" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/logo.webp"
            alt="Martin Tech Labs Logo"
            width={32}
            height={32}
            className="rounded-sm object-contain"
          />
          <span>Martin Tech Labs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href} 
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="outline" className="font-mono text-xs" asChild>
            <a href="https://www.linkedin.com/in/stephencmartin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border/50 bg-background/95 backdrop-blur-xl">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-8 mt-8 px-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-mono font-bold text-xl tracking-tighter"
                  onClick={handleLinkClick}
                >
                  <Image
                    src="/images/logo.webp"
                    alt="Martin Tech Labs Logo"
                    width={32}
                    height={32}
                    className="rounded-sm object-contain"
                  />
                  <span>Martin Tech Labs</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href} 
                      className="text-lg font-medium hover:text-primary transition-colors py-4 border-b border-border/50"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a 
                    href="https://www.linkedin.com/in/stephencmartin/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-primary transition-colors py-4 border-b border-border/50"
                    onClick={handleLinkClick}
                  >
                    LinkedIn
                  </a>
                  <Button className="mt-4 font-mono w-full" asChild>
                    <a href="https://calendly.com/martintechlabs/discovery" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                      Schedule a Call
                    </a>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
