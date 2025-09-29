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
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f4f1ec 0%, #ffffff 25%, #f9f7f2 75%, #f4f1ec 100%)",
      }}
    >
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #bfa14a 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #FF8C1A 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background:
              "conic-gradient(from 0deg, #6f5b3e 0deg, #bfa14a 120deg, #FF8C1A 240deg, #6f5b3e 360deg)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Luxury badge */}
          <div className="inline-block mb-6">
            <span
              className="px-6 py-2 rounded-full text-sm font-medium tracking-wide uppercase"
              style={{
                background: "linear-gradient(135deg, #6f5b3e 0%, #bfa14a 100%)",
                color: "#ffffff",
              }}
            >
              <span className="relative z-10">Excellence Assured</span>
              <div
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)",
                }}
              ></div>
            </span>
          </div>

          <h2
            className="text-2xl md:text-4xl font-bold mb-8 tracking-tight leading-tight"
            style={{ color: "#6f5b3e" }}
          >
            Why Clients Trust{" "}
            <span className="relative inline-block">
              <span style={{ color: "#bfa14a" }}>Curated Interiors</span>
              <div
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #bfa14a 0%, #FF8C1A 100%)",
                }}
              ></div>
            </span>
          </h2>

          {/* Decorative elements */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div
              className="w-16 h-0.5 rounded-full"
              style={{ backgroundColor: "#bfa14a" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full rotate-45 border-2"
              style={{ borderColor: "#FF8C1A", backgroundColor: "#ffffff" }}
            ></div>
            <div
              className="w-16 h-0.5 rounded-full"
              style={{ backgroundColor: "#bfa14a" }}
            ></div>
          </div>

          <p
            className="text-md leading-relaxed max-w-3xl mx-auto"
            style={{ color: "#6b6b6b" }}
          >
            Experience the difference of working with India's premier interior
            design specialists, where every project reflects our unwavering
            commitment to excellence.
          </p>
        </motion.div>

        {/* Premium Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full">
                  {/* Card background with premium gradient */}
                  <div
                    className="absolute inset-0 rounded-3xl transition-all duration-500 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(145deg, #ffffff 0%, #f9f7f2 100%)",
                      boxShadow: "0 10px 40px rgba(111, 91, 62, 0.08)",
                    }}
                  ></div>

                  {/* Premium hover overlay */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(191, 161, 74, 0.05) 0%, rgba(255, 140, 26, 0.08) 100%)",
                      boxShadow: "0 20px 60px rgba(111, 91, 62, 0.15)",
                    }}
                  ></div>

                  {/* Border accent */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, #6f5b3e 0%, #bfa14a 100%)",
                      padding: "1px",
                    }}
                  >
                    <div
                      className="w-full h-full rounded-3xl"
                      style={{ backgroundColor: "#ffffff" }}
                    ></div>
                  </div>

                  <div className="relative p-2 flex flex-col items-center justify-center text-center h-full min-h-[180px]">
                    {/* Premium icon container */}
                    <div className="relative mb-6">
                      <div
                        className="w-14 h-14 flex items-center justify-center rounded-2xl relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{
                          background:
                            "linear-gradient(135deg, #6f5b3e 0%, #bfa14a 100%)",
                          boxShadow: "0 8px 32px rgba(191, 161, 74, 0.3)",
                        }}
                      >
                        <Icon className="w-6 h-6 text-white relative z-10" />

                        {/* Icon glow effect */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                          style={{
                            background:
                              "radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%)",
                            animation: "pulse 2s infinite",
                          }}
                        ></div>
                      </div>

                      {/* Premium floating elements */}
                      <div className="absolute -inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div
                          className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full animate-bounce"
                          style={{
                            backgroundColor: "#bfa14a",
                            animationDelay: "0s",
                          }}
                        ></div>
                        <div
                          className="absolute top-1 right-0 w-1 h-1 rounded-full animate-bounce"
                          style={{
                            backgroundColor: "#FF8C1A",
                            animationDelay: "0.5s",
                          }}
                        ></div>
                        <div
                          className="absolute bottom-0 left-1 w-1 h-1 rounded-full animate-bounce"
                          style={{
                            backgroundColor: "#6f5b3e",
                            animationDelay: "1s",
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Premium typography */}
                    <p
                      className="text-sm md:text-md font-semibold leading-tight tracking-wide transition-colors duration-300"
                      style={{ color: "#6f5b3e" }}
                    >
                      {feature.title}
                    </p>

                    {/* Subtle accent line */}
                    <div
                      className="mt-4 w-0 h-0.5 rounded-full group-hover:w-12 transition-all duration-500"
                      style={{ backgroundColor: "#bfa14a" }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-6">
            <div
              className="w-24 h-0.5 rounded-full"
              style={{ backgroundColor: "#bfa14a" }}
            ></div>
            <div className="relative">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)",
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{
                  background:
                    "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)",
                  opacity: 0.3,
                }}
              ></div>
            </div>
            <div
              className="w-24 h-0.5 rounded-full"
              style={{ backgroundColor: "#bfa14a" }}
            ></div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
