"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Hammer,
  Palette,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Luxury Residential Design",
    description:
      "Transforming houses into timeless homes with bespoke interiors that embody elegance, comfort, and individuality.",
  },
  {
    icon: Building2,
    title: "Premium Commercial Spaces",
    description:
      "Curating sophisticated office and retail environments that elevate brand presence while enhancing functionality.",
  },
  {
    icon: Hammer,
    title: "Exclusive Renovations",
    description:
      "Reviving spaces with precision and craftsmanship—blending heritage charm with modern luxury.",
  },
  {
    icon: Palette,
    title: "Signature Interior Styling",
    description:
      "Tailored styling services with curated furniture, art, and accessories to achieve a refined and luxurious finish.",
  },
  {
    icon: Lightbulb,
    title: "Expert Design Consultation",
    description:
      "Professional guidance from our design specialists to bring clarity, inspiration, and direction to your vision.",
  },
];

export function Services() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f4f1ec 0%, #ffffff 50%, #f9f7f2 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, #bfa14a 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, #FF8C1A 0%, transparent 70%)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
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
              Our Expertise
            </span>
          </div>
          {/* Luxury Header */}
          <h2
            className="text-2xl md:text-4xl font-bold mb-8 tracking-tight leading-tight"
            style={{ color: "#6f5b3e" }}
          >
            <span className="relative inline-block">
              <span style={{ color: "#bfa14a" }}>Curated</span>
              <div
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #bfa14a 0%, #FF8C1A 100%)",
                }}
              ></div>
            </span>{" "}
            Services
          </h2>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div
              className="w-20 h-0.5 rounded-full"
              style={{ backgroundColor: "#bfa14a" }}
            ></div>
            <div
              className="w-4 h-4 rounded-full rotate-45 border-2"
              style={{ borderColor: "#FF8C1A", backgroundColor: "#ffffff" }}
            ></div>
            <div
              className="w-20 h-0.5 rounded-full"
              style={{ backgroundColor: "#bfa14a" }}
            ></div>
          </div>

          <p
            className="text-md leading-relaxed max-w-3xl mx-auto"
            style={{ color: "#6b6b6b" }}
          >
            From concept to completion, we create interiors that exude
            sophistication, blending functionality with artistic excellence for
            a truly elevated lifestyle.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full">
                  {/* Card background with premium styling */}
                  <div
                    className="absolute inset-0 rounded-3xl transition-all duration-500 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(145deg, #ffffff 0%, #f9f7f2 100%)",
                      boxShadow: "0 10px 40px rgba(111, 91, 62, 0.1)",
                    }}
                  ></div>

                  {/* Hover effect overlay */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(191, 161, 74, 0.05) 0%, rgba(255, 140, 26, 0.05) 100%)",
                      boxShadow: "0 20px 60px rgba(111, 91, 62, 0.2)",
                    }}
                  ></div>

                  <div className="relative p-8 h-full flex flex-col items-center">
                    {/* Icon with premium styling */}
                    <div className="relative mb-8">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:scale-110"
                        style={{
                          background:
                            "linear-gradient(135deg, #6f5b3e 0%, #bfa14a 100%)",
                        }}
                      >
                        <IconComponent className="w-8 h-8 text-white relative z-10" />

                        {/* Premium glow effect */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background:
                              "radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                            animation: "pulse 2s infinite",
                          }}
                        ></div>
                      </div>

                      {/* Floating particles effect */}
                      <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div
                          className="absolute top-0 left-0 w-2 h-2 rounded-full animate-bounce"
                          style={{
                            backgroundColor: "#bfa14a",
                            animationDelay: "0s",
                          }}
                        ></div>
                        <div
                          className="absolute top-2 right-0 w-1.5 h-1.5 rounded-full animate-bounce"
                          style={{
                            backgroundColor: "#FF8C1A",
                            animationDelay: "0.5s",
                          }}
                        ></div>
                        <div
                          className="absolute bottom-0 left-2 w-1 h-1 rounded-full animate-bounce"
                          style={{
                            backgroundColor: "#bfa14a",
                            animationDelay: "1s",
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow text-center">
                      <h3
                        className="text-lg md:text-xl font-bold mb-6 tracking-tight transition-colors duration-300 group-hover:text-opacity-90"
                        style={{ color: "#6f5b3e" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="leading-relaxed text-sm mb-8"
                        style={{ color: "#6b6b6b" }}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Premium CTA */}
                    {/* <div className="mt-auto">
                      <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                        <span
                          className="font-medium text-lg tracking-wide"
                          style={{ color: "#bfa14a" }}
                        >
                          Explore Service
                        </span>
                        <ArrowRight
                          className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                          style={{ color: "#FF8C1A" }}
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
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
