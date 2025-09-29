// components/AdvancedPageLoader.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdvancedPageLoaderProps {
  imagesToPreload?: string[];
  minimumLoadTime?: number;
  onLoadComplete?: () => void;
}

export default function AdvancedPageLoader({
  imagesToPreload = [],
  minimumLoadTime = 1000,
  onLoadComplete,
}: AdvancedPageLoaderProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const startTime = Date.now();

    const preloadImages = async () => {
      if (imagesToPreload.length === 0) {
        // No images to preload, just wait for DOM
        await new Promise(resolve => {
          if (document.readyState === 'complete') {
            resolve(true);
          } else {
            window.addEventListener('load', () => resolve(true), { once: true });
          }
        });
        
        if (mounted) setLoadingProgress(100);
      } else {
        // Preload specific images
        const imagePromises = imagesToPreload.map((src, index) => {
          return new Promise((resolve, reject) => {
            const img = new window.Image();
            img.onload = () => {
              if (mounted) {
                const progress = ((index + 1) / imagesToPreload.length) * 100;
                setLoadingProgress(progress);
              }
              resolve(true);
            };
            img.onerror = reject;
            img.src = src;
          });
        });

        try {
          await Promise.all(imagePromises);
        } catch (err) {
          console.error('Error preloading images:', err);
        }
      }

      // Ensure minimum load time for smooth transition
      const elapsed = Date.now() - startTime;
      if (elapsed < minimumLoadTime) {
        await new Promise(resolve => 
          setTimeout(resolve, minimumLoadTime - elapsed)
        );
      }

      if (mounted) {
        setIsLoading(false);
        onLoadComplete?.();
      }
    };

    preloadImages();

    return () => {
      mounted = false;
    };
  }, [imagesToPreload, minimumLoadTime, onLoadComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="relative">
            {/* Animated Logo/Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="text-white text-3xl font-bold"
                >
                  ⚡
                </motion.div>
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
              />
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-center text-gray-700 dark:text-gray-300 text-sm font-medium"
            >
              Loading {Math.round(loadingProgress)}%
            </motion.p>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${10 + i * 20}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


// // Usage in your page:
// /*
// 'use client';

// import { useState } from 'react';
// import AdvancedPageLoader from '@/components/AdvancedPageLoader';

// export default function Home() {
//   const [showContent, setShowContent] = useState(false);

//   const imagesToPreload = [
//     '/hero-image.jpg',
//     '/section-bg.jpg',
//     '/product-image.png',
//   ];

//   return (
//     <>
//       <AdvancedPageLoader
//         imagesToPreload={imagesToPreload}
//         minimumLoadTime={1200}
//         onLoadComplete={() => setShowContent(true)}
//       />
      
//       <main className={showContent ? 'opacity-100' : 'opacity-0'}>
//         {/* Your content */}
// //       </main>
// //     </>
// //   );
// // }
// */