"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const images = [
  "/premium home interior design photos with boosted resolution.jpg",
  "/premium home interior design photos with half left side wall.jpg",
  "/premium home interior design.jpg",
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
    <section className="relative m-12 h-[90vh] overflow-hidden rounded-3xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images[index]}// replace with your image
          alt="Furnishing Interior"
          fill
          priority
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20">
        <div className="max-w-3xl text-left text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-semibold leading-snug mb-60"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-30 w-auto object-contain"
            />
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-6xl font-semibold leading-snug"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-accent">Carefully</span>{" "}
            <span className="text-primary">Chosen &</span> <br />
            <span className="text-accent">Thoughtfully </span>
            <span className="text-primary">Organized</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-base md:text-lg font-light text-gray-200 max-w-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Transforming Indian homes into luxurious sanctuaries — blending
            timeless tradition, modern elegance, and cultural warmth.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="rounded-sm px-8 py-3 text-base md:text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
            >
              Start Your Furnishing Journey
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
