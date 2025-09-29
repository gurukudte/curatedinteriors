"use client";

import { motion } from "framer-motion";
import { Star, Quote, Users } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Mr. Sai Prasad Poddar",
      review: `"That was delicate. I was always in need of subtleness around my home, but within my budget — We achieved that by having Curated Interiors as our interior designers."`,
      stars: 5,
      videoId: "rk8Y2CCw92s",
      type: "reel",
      project: "Luxury Residential",
    },
    {
      name: "Nilesh Mhatre",
      review: `"We compared many in the market. Curated Interiors offered very competitive prices, timeless designs, and exceptional material quality. Completed within 60 days as promised — every corner of our home became elegant and welcoming."`,
      stars: 5,
      videoId: "xQBtJIy9htA",
      type: "reel",
      project: "Modern 1BHK",
    },
    {
      name: "Sunil Pandey",
      review: `"Curated Interiors transformed our house into a home that truly reflects our personality. Their team was attentive to every detail, and the design process was smooth and transparent. We loved how they balanced style with practicality, and the final result exceeded our expectations."`,
      stars: 5,
      videoId: "xXECHon4meI",
      type: "reel",
      project: "Family Home Makeover",
    },
  ];

  return (
    <section
      className="py-10 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f4f1ec 0%, #ffffff 50%, #f9f7f2 100%)",
      }}
    >
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #bfa14a 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #FF8C1A 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-3"
          style={{
            background:
              "conic-gradient(from 45deg, #6f5b3e 0deg, #bfa14a 120deg, #FF8C1A 240deg, #6f5b3e 360deg)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Premium Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* Luxury badge */}
            <div className="inline-block mb-6">
              <span
                className="px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase relative"
                style={{
                  background:
                    "linear-gradient(135deg, #6f5b3e 0%, #bfa14a 100%)",
                  color: "#ffffff",
                  boxShadow: "0 8px 32px rgba(111, 91, 62, 0.3)",
                }}
              >
                <Users className="w-4 h-4 inline-block mr-2" />
                <span className="relative z-10">Client Stories</span>
              </span>
            </div>

            <h2
              className="text-zxl md:text-4xl font-bold mb-8 tracking-tight leading-tight"
              style={{ color: "#6f5b3e" }}
            >
              What Our{" "}
              <span className="relative inline-block">
                <span style={{ color: "#bfa14a" }}>Clients Say</span>
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
              Discover the transformative experiences of our valued clients who
              trusted us to create their dream spaces with unmatched
              craftsmanship and personalized service.
            </p>
          </motion.div>
        </div>

        {/* Premium Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-stretch">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className="relative h-full">
                {/* Card background with premium gradient */}
                <div
                  className="absolute inset-0 rounded-3xl transition-all duration-700 group-hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #f9f7f2 100%)",
                    boxShadow: "0 15px 50px rgba(111, 91, 62, 0.1)",
                  }}
                ></div>

                {/* Premium hover overlay */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(191, 161, 74, 0.05) 0%, rgba(255, 140, 26, 0.08) 100%)",
                    boxShadow: "0 25px 80px rgba(111, 91, 62, 0.2)",
                  }}
                ></div>

                <div className="relative overflow-hidden rounded-3xl">
                  {/* Video Section */}
                  <div className="relative">
                    <div
                      className={`relative bg-black overflow-hidden rounded-t-3xl h-70 lg:h-[300px]`}
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${testimonial.videoId}?rel=0&modestbranding=1&controls=1&playsinline=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={`w-full h-full ${
                          testimonial.type === "reel"
                            ? "object-contain bg-black"
                            : "object-cover"
                        }`}
                      />
                    </div>

                    {/* Project type badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <span
                        className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase"
                        style={{
                          background: "rgba(255, 255, 255, 0.95)",
                          color: "#6f5b3e",
                          backdropFilter: "blur(10px)",
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {testimonial.project}
                      </span>
                    </div>
                  </div>

                  {/* Premium Content Section */}
                  <div className="p-8">
                    {/* Quote icon */}
                    <div className="mb-6">
                      <div
                        className="w-8 h-8 rounded-2xl flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)",
                        }}
                      >
                        <Quote className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex mb-6 gap-1">
                      {Array.from({ length: testimonial.stars }).map(
                        (_, idx) => (
                          <Star
                            key={idx}
                            className="w-4 h-4 transition-colors duration-300"
                            style={{ color: "#bfa14a", fill: "#bfa14a" }}
                          />
                        )
                      )}
                    </div>
                    {/* Client Name */}
                    <div
                      className="border-t pt-6"
                      style={{ borderColor: "#e6e1da" }}
                    >
                      <h3
                        className="text-xl font-bold tracking-tight"
                        style={{ color: "#6f5b3e" }}
                      >
                        {testimonial.name}
                      </h3>
                      <div
                        className="mt-2 w-0 h-0.5 rounded-full group-hover:w-16 transition-all duration-500"
                        style={{ backgroundColor: "#bfa14a" }}
                      ></div>
                    </div>

                    {/* Review Text */}
                    <p
                      className="h-44 text-md leading-relaxed mb-6 italic"
                      style={{ color: "#6b6b6b" }}
                    >
                      {testimonial.review}
                    </p>

                  </div>
                </div>

                {/* Floating elements on hover */}
                <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div
                    className="absolute top-0 right-0 w-2 h-2 rounded-full animate-bounce"
                    style={{ backgroundColor: "#bfa14a", animationDelay: "0s" }}
                  ></div>
                  <div
                    className="absolute top-8 left-2 w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{
                      backgroundColor: "#FF8C1A",
                      animationDelay: "0.5s",
                    }}
                  ></div>
                  <div
                    className="absolute bottom-4 right-6 w-1 h-1 rounded-full animate-bounce"
                    style={{ backgroundColor: "#6f5b3e", animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium bottom section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div
            className="max-w-3xl mx-auto p-12 rounded-3xl"
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, #f9f7f2 100%)",
              boxShadow: "0 20px 60px rgba(111, 91, 62, 0.1)",
            }}
          >
            <h3
              className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
              style={{ color: "#6f5b3e" }}
            >
              Ready to Join Our Happy Clients?
            </h3>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "#6b6b6b" }}
            >
              Experience the same level of excellence and personalized service
              that has made our clients' dreams come true.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-2xl text-white"
              style={{
                background: "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)",
              }}
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
