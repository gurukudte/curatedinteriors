"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const images = [
  "/living-area.png",
  "/bedroom.png",
  "/kitchen.png",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={images[index]}
              alt="Interior Design"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16">
        <div className="max-w-2xl text-left text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-wide leading-snug"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Carefully Chosen &{" "}
            <span className="text-amber-600 w-full">Thoughtfully Organized</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-2xl font-light text-gray-200"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Transforming Indian homes into{" "}
            <span className="text-amber-600 font-medium">
              luxurious sanctuaries
            </span>{" "}
            — blending timeless tradition, modern elegance, and cultural warmth.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button className="px-8 py-3 rounded-full text-lg font-medium bg-amber-600 text-black hover:bg-[#c09a2e] shadow-xl transition">
              Explore Our Designs
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
