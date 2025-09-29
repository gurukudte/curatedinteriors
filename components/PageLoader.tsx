// components/InteriorLoader.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InteriorLoaderProps {
  onLoadComplete?: () => void;
}

export default function InteriorLoader({
  onLoadComplete,
}: InteriorLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        onLoadComplete?.();
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ backgroundColor: "#faf8f5" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            {/* Elegant spinner */}
            <motion.div
              className="relative w-20 h-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "3px solid #e8e0d5",
                  borderTopColor: "#6f5b3e",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner decorative element */}
              <motion.div
                className="absolute inset-3 rounded-full"
                style={{ backgroundColor: "#6f5b3e" }}
                animate={{ scale: [1, 0.8, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <p
                style={{ color: "#6f5b3e" }}
                className="text-sm font-light tracking-wider uppercase"
              >
                Loading
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Add to your globals.css:
/*
:root {
  --primary: #6f5b3e;
  --background: #faf8f5;
  --accent: #e8e0d5;
}
*/
