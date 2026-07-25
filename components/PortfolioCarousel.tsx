"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Pause,
  Images,
} from "lucide-react";

interface PortfolioCarouselProps {
  images: string[];
  title: string;
  customer?: string;
}

export function PortfolioCarousel({
  images,
  title,
  customer,
}: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextImage = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % images.length);
    },
    [images.length]
  );

  const prevImage = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    },
    [images.length]
  );

  // Auto-play interval for slideshow
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  // Keyboard navigation & body scroll locking for modal
  useEffect(() => {
    if (!isModalOpen) return;

    // Lock background scrolling when modal is active
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, nextImage, prevImage]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (isModalOpen && thumbnailRefs.current[currentIndex]) {
      thumbnailRefs.current[currentIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex, isModalOpen]);

  return (
    <>
      {/* Inline Card Carousel */}
      <div
        className="relative h-70 lg:h-86 overflow-hidden bg-stone-900 rounded-t-3xl group select-none cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Animated Main Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0.85 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.85 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full relative"
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} - Photo ${currentIndex + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 pointer-events-none" />

        {/* Top Right Photo Count Badge */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <span
            className="px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide text-white flex items-center gap-1.5 shadow-lg border border-white/20"
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Images className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {currentIndex + 1} / {images.length}
            </span>
          </span>
        </div>

        {/* Center Hover Prompt */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 pointer-events-none z-10">
          <span
            className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider text-stone-900 flex items-center gap-2 shadow-2xl uppercase transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            style={{
              background: "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)",
            }}
          >
            <Maximize2 className="w-4 h-4" /> View Gallery
          </span>
        </div>

        {/* Prev / Next Arrows for inline browsing */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full text-white bg-black/60 hover:bg-amber-500 hover:text-stone-950 transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-md border border-white/20 shadow-xl"
          title="Previous Photo"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full text-white bg-black/60 hover:bg-amber-500 hover:text-stone-950 transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-md border border-white/20 shadow-xl"
          title="Next Photo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Fullscreen Lightbox Gallery Modal (Rendered in document.body via Portal) */}
      {isModalOpen &&
        mounted &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[9999] bg-stone-950/95 backdrop-blur-2xl flex flex-col justify-between p-4 md:p-6 text-white select-none overflow-hidden"
              onClick={() => setIsModalOpen(false)}
            >
              {/* Modal Header Bar */}
              <div
                className="flex justify-between items-center z-30 pb-4 border-b border-stone-800/80"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <h3 className="text-amber-400 text-lg md:text-2xl font-bold tracking-tight">
                    {title}
                  </h3>
                  {customer && (
                    <p className="text-stone-400 text-xs md:text-sm font-medium mt-0.5">
                      {customer} &bull; Interior Gallery
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {/* Slideshow Play/Pause Toggle */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all shadow-md ${
                      isPlaying
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold"
                        : "bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white"
                    }`}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5" /> Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" /> Slideshow
                      </>
                    )}
                  </button>

                  {/* Counter */}
                  <span className="text-stone-300 text-xs md:text-sm font-mono px-3.5 py-1.5 bg-stone-900/90 rounded-full border border-stone-800 shadow-inner">
                    {currentIndex + 1} / {images.length}
                  </span>

                  {/* Close Button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-full bg-stone-800 text-stone-300 hover:bg-amber-500 hover:text-stone-950 transition-all duration-300 shadow-lg border border-stone-700"
                    title="Close (Esc)"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Main Content Area: High-Res Full Image */}
              <div
                className="relative flex-1 w-full my-3 flex items-center justify-center overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full flex items-center justify-center max-h-[73vh]"
                  >
                    <Image
                      src={images[currentIndex]}
                      alt={`${title} - High Res ${currentIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Left / Right Navigation Chevrons */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-stone-900/80 text-amber-400 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-stone-950 transition-all duration-300 border border-stone-700/80 shadow-2xl backdrop-blur-md"
                  title="Previous Photo (Left Arrow)"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-stone-900/80 text-amber-400 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-stone-950 transition-all duration-300 border border-stone-700/80 shadow-2xl backdrop-blur-md"
                  title="Next Photo (Right Arrow)"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </div>

              {/* Bottom Horizontal Thumbnails Navigation Bar */}
              <div
                className="z-30 pt-3 border-t border-stone-800/80 w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex gap-2.5 overflow-x-auto py-1.5 px-2 max-w-7xl mx-auto items-center justify-start md:justify-center scrollbar-thin scrollbar-thumb-amber-500/50 scrollbar-track-stone-900">
                  {images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      ref={(el) => {
                        thumbnailRefs.current[idx] = el;
                      }}
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                        idx === currentIndex
                          ? "border-amber-400 scale-105 shadow-xl shadow-amber-500/20 ring-2 ring-amber-400/40"
                          : "border-stone-800 opacity-40 hover:opacity-100 hover:border-stone-600"
                      }`}
                    >
                      <Image
                        src={imgUrl}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
