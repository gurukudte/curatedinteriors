"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

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
    title: "Coffee Shop Interior Design",
    customer: "Brewed Awakenings",
    category: "Commercial",
    imageUrl: "/cofee shop.jpg",
    description:
      "Chic coffee shop with cozy seating, warm lighting, and a welcoming ambiance.",
  },
  {
    id: 6,
    title: "Executive Office Interior",
    customer: "TechBadger info Solutions",
    category: "Office",
    imageUrl: "/office-space.jpg",
    description:
      "Sleek office space with modern furniture, collaborative zones, and state-of-the-art technology.",
  },
  {
    id: 7,
    title: "Luxury Spa Lounge",
    customer: "Nature Spa Retreat",
    category: "Hospitality",
    imageUrl: "/spa.jpg",
    description:
      "Nature spa lounge with soothing colors, plush seating, and ambient lighting.",
  },
  {
    id: 8,
    title: "High-End Retail Store",
    customer: "The Book Nook",
    category: "Retail",
    imageUrl: "/book-shop.jpg",
    description:
      "Upscale retail store with elegant displays, premium materials, and inviting layout.",
  },
];

export function Portfolio() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Residential","Commercial", "Office", "Hospitality", "Retail"];

  const filteredItems =
    filter === "All"
      ? portfolioVideos
      : portfolioVideos.filter((item) => item.category === filter);

  return (
    <section className="py-10 lg:py-22 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 tracking-tight">
            Our Portfolio
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Explore our curated collection of video showcases, where each design
            reflects timeless luxury and personalized elegance.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Video */}
                {item.videoId ? (
                  <div className="relative h-80 lg:h-96 overflow-hidden bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1&controls=1`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={`absolute inset-0 w-full h-full ${
                        item.type === "reel" ? "object-contain" : "object-cover"
                      }`}
                    />
                  </div>
                ) : item.imageUrl ? (
                  <div className="relative h-80 lg:h-96 overflow-hidden bg-black">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      style={{ position: "absolute", inset: 0 }}
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      priority={index === 0}
                      width={500}
                      height={300}
                    />
                  </div>
                ) : null}

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-serif text-stone-900">
                      {item.title}
                    </h3>
                    <span className="text-sm text-amber-600 font-medium">
                      {item.customer}
                    </span>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-800 transition-colors duration-300">
            View Full Portfolio
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
