"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  Award,
} from "lucide-react";

const heroSlides = [
  {
    id: 1,
    image: "/premium home interior design photos with boosted resolution.jpg",
    title: "Luxury Living Redefined",
    subtitle: "Where Elegance Meets Comfort",
    description:
      "Transform your space into a masterpiece of modern sophistication",
    badge: "Premium Residential",
  },
  {
    id: 2,
    image: "/premium home interior design photos with half left side wall.jpg",
    title: "Contemporary Excellence",
    subtitle: "Timeless Design Philosophy",
    description:
      "Curating spaces that inspire and elevate your daily experience",
    badge: "Modern Design",
  },
  {
    id: 3,
    image: "/premium home interior design.jpg",
    title: "Crafted Perfection",
    subtitle: "Heritage Meets Innovation",
    description: "Blending traditional craftsmanship with contemporary luxury",
    badge: "Artisan Quality",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);


  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    setImageLoaded(false);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Auto-play functionality
  useEffect(() => {

    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      className="relative mt-12 mx-6 md:mx-12 h-[90vh] overflow-hidden rounded-3xl group"
      style={{ boxShadow: "0 30px 120px rgba(111, 91, 62, 0.4)" }}
    >
      {/* Background Images with Enhanced Effects */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0.9 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={currentSlide.image}
            alt={`${currentSlide.title} - Luxury Interior Design by Curated Interiors`}
            fill
            priority={currentIndex === 0}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 90vw"
            onLoad={() => setImageLoaded(true)}
            quality={90}
          />

          {/* Sophisticated Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Layout */}
      <div className="relative z-20 h-full flex flex-col">
        {/* Top Bar with Logo Only */}
        <div className="flex justify-start items-start p-8 md:p-12">
          {/* Logo Section */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative group">
              <Image
                src="/logo.svg"
                alt="Curated Interiors Logo"
                width={120}
                height={120}
                className="h-16 md:h-20 w-auto object-contain filter drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                priority
              />
              {/* Logo glow effect */}
              <div
                className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle, #bfa14a 0%, transparent 70%)",
                }}
              ></div>
            </div>
          </motion.div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center px-8 md:px-12">
          <div className="max-w-2xl">
            {/* Premium Badge */}
            <motion.div
              key={`badge-${currentSlide.id}`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md border"
                style={{
                  background: "rgba(191, 161, 74, 0.15)",
                  borderColor: "rgba(191, 161, 74, 0.3)",
                  boxShadow: "0 8px 32px rgba(191, 161, 74, 0.2)",
                }}
              >
                <Award className="w-4 h-4" style={{ color: "#bfa14a" }} />
                <span className="text-sm font-semibold tracking-wide text-white">
                  {currentSlide.badge}
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              key={`title-${currentSlide.id}`}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <span className="text-white drop-shadow-2xl block mb-2">
                {currentSlide.title.split(" ").slice(0, -1).join(" ")}
              </span>
              <span style={{ color: "#bfa14a" }} className="drop-shadow-2xl">
                {currentSlide.title.split(" ").slice(-1)[0]}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              key={`subtitle-${currentSlide.id}`}
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6"
            >
              <p className="text-xl md:text-2xl font-light text-white/90 drop-shadow-lg mb-3">
                {currentSlide.subtitle}
              </p>
              <div
                className="w-24 h-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #bfa14a 0%, #FF8C1A 100%)",
                }}
              ></div>
            </motion.div>

            {/* Description */}
            <motion.p
              key={`desc-${currentSlide.id}`}
              className="text-lg md:text-xl font-light text-white/75 max-w-xl mb-10 leading-relaxed drop-shadow-lg"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {currentSlide.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -3,
                  boxShadow: "0 8px 32px rgba(191, 161, 74, 0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("#contact")}
                className="group rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-4 text-lg font-semibold tracking-wide shadow-md flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-primary/40 active:scale-95 transition-all duration-300 cursor-pointer"
                tabIndex={0}
                aria-label="Start Your Journey"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.currentTarget.click();
                  }
                }}
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
