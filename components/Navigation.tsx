"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    // { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="/company-logo-removebg-preview.png"
                alt="Interior Design"
                width={70}
                height={70}
                priority
                className="object-contain"
              />
              <h1
                className={`text-2xl font-semibold tracking-wide transition-colors duration-300 ${
                  isScrolled ? "text-stone-900" : "text-white"
                }`}
              >
                Curated Interiors
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative font-light tracking-wide transition-all duration-300 ${
                    isScrolled ? "text-stone-700" : "text-white/90"
                  } after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-400 shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden transition-colors duration-300 ${
                isScrolled ? "text-stone-900" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg lg:hidden"
          >
            <div className="px-6 py-6 space-y-6 divide-y divide-stone-200/60">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-stone-800 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-[#D4AF37] text-black px-6 py-3 rounded-full hover:bg-[#c09a2e] transition-colors duration-300 shadow-md"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
