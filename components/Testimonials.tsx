"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Mr. Sai Prasad Poddar",
      review: `“That was delicate. I was always in need of subtleness around my home, but within my budget — We achieved that by having Curated Interiors as our interior designers.”`,
      stars: 5,
      videoId: "rk8Y2CCw92s",
      type: "wide",
    },
    {
      name: "Nilesh Mhatre",
      review: `“We compared many in the market. Curated Interiors offered very competitive prices, timeless designs, and exceptional material quality. Completed within 60 days as promised — every corner of our home became elegant and welcoming.”`,
      stars: 5,
      videoId: "xQBtJIy9htA",
      type: "reel",
    },
    {
      name: "Sunil Pandey",
      review: `“Curated Interiors transformed our house into a home that truly reflects our personality. Their team was attentive to every detail, and the design process was smooth and transparent. We loved how they balanced style with practicality, and the final result exceeded our expectations.”`,
      stars: 5,
      videoId: "xXECHon4meI",
      type: "reel",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 via-white to-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900">
            What Our Clients Say
          </h2>
          <a
            href="#"
            className="hidden sm:inline-flex items-center px-6 py-3 text-sm font-medium rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors shadow-md"
          >
            All Testimonials →
          </a>
        </div>

        {/* Testimonials Row */}
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 w-[300px] flex-shrink-0"
            >
              {/* Video */}
              <div className="relative h-[380px] bg-black overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${t.videoId}?rel=0&modestbranding=1&controls=1&playsinline=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={`w-full h-full ${
                    t.type === "reel"
                      ? "object-contain bg-black" // keep reel intact
                      : "object-cover" // cinematic look for wide
                  }`}
                />
              </div>

              {/* Review */}
              <div className="p-5">
                <h3 className="text-lg font-serif text-stone-900 mb-2">
                  {t.name}
                </h3>
                <div className="flex mb-3">
                  {Array.from({ length: t.stars }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed italic line-clamp-4">
                  {t.review}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
