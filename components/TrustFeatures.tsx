"use client";

import { motion } from "framer-motion";
import {
  Gem,
  Palette,
  Sofa,
  Building2,
  Leaf,
  ShieldCheck,
  Timer,
} from "lucide-react";

const features = [
  { icon: Gem, title: "Premium Craftsmanship" },
  { icon: Palette, title: "Personalized Designs" },
  { icon: Sofa, title: "Luxury Furnishings" },
  { icon: Building2, title: "20+ Cities Served" },
  { icon: Leaf, title: "Sustainable Materials" },
  { icon: ShieldCheck, title: "10+ Year Warranty" },
  { icon: Timer, title: "On-Time Delivery" },
];

export function TrustFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 tracking-tight"
        >
          Why Clients Trust{" "}
          <span className="text-amber-600">Curated Interiors</span>
        </motion.h2>

        {/* Features Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-50 text-amber-600 mb-4 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-sm md:text-base font-medium text-stone-800">
                  {feature.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
