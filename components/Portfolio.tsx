"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {  Award } from "lucide-react";

const portfolioVideos = [
  {
    id: 1,
    title: "Luxury Interiors",
    customer: "Mr. & Mrs. Iyer",
    category: "Residential",
    videoId: "m9K56gVqa2U", // vertical reel
    description:
      "Elegant interiors, premium finishes, and attention to detail.",
    type: "reel",
  },
  {
    id: 2,
    title: "Luxury 1BHK Apartment Transformation",
    customer: "Mr.Potdar & Family",
    category: "Residential",
    videoId: "RGHeRNqBcwI", // wide format
    description:
      "A cozy 1BHK transformation featuring smart space-saving solutions, modern finishes, and a welcoming ambiance.",
    type: "wide",
  },
  {
    id: 3,
    title: "Modern 1BHK Interior",
    customer: "Mrs.Snehal & Mr. Nilesh Mhatre",
    category: "Residential",
    videoId: "KLW-uHJXZ9Q", // wide format
    description:
      "A full duplex transformation featuring a luxurious kitchen, spacious living, and refined bedrooms.",
    type: "wide",
  },
  {
    id: 4,
    title: "Luxury 3BHK Apartment Transformation",
    customer: "Mr.Pande & Family",
    category: "Residential",
    videoId: "m7AZCnvd-Ok", // wide format
    description:
      "A complete home makeover blending contemporary design with warm luxury — from living room to bedrooms.",
    type: "wide",
  },
  {
    id: 5,
    title: "Executive Office Interior",
    customer: "TechBadger info Solutions",
    category: "Office",
    imageUrl: "/office-space.jpg",
    description:
      "Sleek office space with modern furniture, collaborative zones, and state-of-the-art technology.",
  },
];

export function Portfolio() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "Residential",
    "Office"
  ];

  const filteredItems =
    filter === "All"
      ? portfolioVideos
      : portfolioVideos.filter((item) => item.category === filter);

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
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #bfa14a 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #FF8C1A 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-3"
          style={{
            background:
              "conic-gradient(from 0deg, #6f5b3e 0deg, #bfa14a 90deg, #FF8C1A 180deg, #6f5b3e 360deg)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Premium Header */}
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
              className="px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase relative"
              style={{
                background: "linear-gradient(135deg, #6f5b3e 0%, #bfa14a 100%)",
                color: "#ffffff",
                // boxShadow: "0 8px 32px rgba(111, 91, 62, 0.3)",
              }}
            >
              <Award className="w-4 h-4 inline-block mr-2" />
              <span className="relative z-10">Showcased Excellence</span>
            </span>
          </div>

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
            Projects
          </h2>

          {/* Decorative elements */}
          <div className="flex justify-center items-center gap-4 mb-8">
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
            Explore our curated collection of transformative spaces, where each
            design reflects timeless luxury, personalized elegance, and
            uncompromising craftsmanship.
          </p>
        </motion.div>

        {/* Premium Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-8 py-2 rounded-full font-semibold tracking-wide transition-all duration-300 overflow-hidden cursor-pointer ${
                filter === category
                  ? "text-white shadow-lg transform -translate-y-1"
                  : "text-stone-600 hover:text-white"
              }`}
              style={{
                background:
                  filter === category
                    ? "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)"
                    : "#ffffff",
                boxShadow:
                  filter === category
                    ? "0 12px 40px rgba(191, 161, 74, 0.4)"
                    : "0 4px 20px rgba(111, 91, 62, 0.1)",
                border: filter === category ? "none" : "1px solid #e6e1da",
              }}
            >
              {filter !== category && (
                <div
                  className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)",
                  }}
                ></div>
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Premium Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer h-full"
            >
              <div className="relative h-full">
                {/* Main card with premium styling */}
                <div
                  className="relative h-full overflow-hidden rounded-3xl transition-all duration-700 group-hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #f9f7f2 100%)",
                    boxShadow: "0 15px 50px rgba(111, 91, 62, 0.1)",
                  }}
                >
                  {/* Premium hover overlay */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(191, 161, 74, 0.1) 0%, rgba(255, 140, 26, 0.1) 100%)",
                      boxShadow: "0 25px 80px rgba(111, 91, 62, 0.2)",
                    }}
                  ></div>

                  {/* Media Container */}
                  <div className="relative">
                    {item.videoId ? (
                      <div className="relative h-70 lg:h-86 overflow-hidden bg-black rounded-t-3xl">
                        <iframe
                          src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1&controls=1`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className={`w-full h-full ${
                            item.type === "reel"
                              ? "object-contain"
                              : "object-cover"
                          }`}
                        />
                      </div>
                    ) : item.imageUrl ? (
                      <div className="relative h-70 lg:h-86 overflow-hidden bg-black rounded-t-3xl group">
                        {/* Image overlay - only shows on hover and doesn't block interaction */}

                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          style={{ position: "absolute", inset: 0 }}
                          loading="lazy"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          width={500}
                          height={300}
                        />
                      </div>
                    ) : null}

                    {/* Premium category badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <span
                        className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase"
                        style={{
                          background: "rgba(255, 255, 255, 0.95)",
                          color: "#6f5b3e",
                          backdropFilter: "blur(10px)",
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Premium Content */}
                  <div className="p-8">
                    <div className="flex flex-col space-y-4">
                      <h3
                        className="h-10 text-xl font-bold tracking-tight leading-tight transition-colors duration-300 group-hover:text-opacity-90"
                        style={{ color: "#6f5b3e" }}
                      >
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: "#bfa14a" }}
                        ></div>
                        <span
                          className="text-md font-semibold tracking-wide"
                          style={{ color: "#bfa14a" }}
                        >
                          {item.customer}
                        </span>
                      </div>

                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#6b6b6b" }}
                      >
                        {item.description}
                      </p>

                      {/* Premium divider */}
                      <div className="pt-4">
                        <div
                          className="w-0 h-0.5 rounded-full group-hover:w-16 transition-all duration-500"
                          style={{ backgroundColor: "#FF8C1A" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements on hover */}
                <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div
                    className="absolute top-0 left-0 w-2 h-2 rounded-full animate-bounce"
                    style={{ backgroundColor: "#bfa14a", animationDelay: "0s" }}
                  ></div>
                  <div
                    className="absolute top-4 right-2 w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{
                      backgroundColor: "#FF8C1A",
                      animationDelay: "0.5s",
                    }}
                  ></div>
                  <div
                    className="absolute bottom-2 left-4 w-1 h-1 rounded-full animate-bounce"
                    style={{ backgroundColor: "#6f5b3e", animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
