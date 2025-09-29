"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Who we are", href: "#who" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl"
    >
      <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
          <h1 className="text-xl font-semibold text-foreground">
            Curated <span className="text-accent">I</span>nteriors
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-secondary-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {item.label}
            </button>
          ))}

          <Button
            onClick={() => {
              scrollToSection("#contact");
              // Example interaction: log event or trigger analytics
              console.log("Contact us button clicked");
            }}
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 text-sm font-medium shadow-md cursor-pointer"
          >
            Contact us
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-secondary-foreground hover:text-primary"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="p-6 bg-white text-secondary-foreground"
            >
              <SheetHeader>
                <SheetTitle className="text-primary">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col mt-6 space-y-6">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className="justify-start text-lg text-secondary-foreground hover:text-primary cursor pointer"
                  >
                    {item.label}  
                  </Button> 
                ))}
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#contact")}
                  className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 text-sm font-medium shadow-md cursor-pointer"
                >
                  Contact us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
