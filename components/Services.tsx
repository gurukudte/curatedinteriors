"use client";

import { motion } from "framer-motion";
import { Home, Building2, Hammer, Palette, Lightbulb } from "lucide-react";


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
    <section className="bg-gradient-to-b from-stone-50 via-white to-stone-100 mb-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            From concept to completion, we create interiors that exude
            sophistication, blending functionality with artistic excellence for
            a truly elevated lifestyle.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full blur-2xl bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl mb-4 text-stone-900 group-hover:text-amber-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6">
                    <span className="text-amber-600 font-medium group-hover:text-amber-700 transition-colors duration-300 cursor-pointer">
                      Learn more →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <ContactCard /> */}
          {/* <div className="bg-white p-12 rounded-2xl shadow-xl max-w-3xl mx-auto border border-amber-100">
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 tracking-tight">
              Ready to Elevate Your Space?
            </h3>
            <p className="text-stone-800 text-xl mb-8 leading-relaxed">
              Let’s craft a masterpiece together—where design meets luxury, and
              every detail tells a story.
            </p>
            <button className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-amber-700 shadow-md transition-colors duration-300">
              Book Your Private Consultation
            </button>
          </div> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}
