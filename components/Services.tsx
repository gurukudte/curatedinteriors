"use client";

import { motion } from "framer-motion";
import { Home, Building2, Hammer, Palette, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Complete home transformations that reflect your lifestyle and personality while maximizing comfort and functionality."
  },
  {
    icon: Building2,
    title: "Commercial Design",
    description: "Professional spaces that enhance productivity and brand identity, from offices to retail environments."
  },
  {
    icon: Hammer,
    title: "Renovation",
    description: "Breathe new life into existing spaces with thoughtful renovations that preserve character while adding modern appeal."
  },
  {
    icon: Palette,
    title: "Interior Styling",
    description: "Complete styling services including furniture selection, color consultation, and decorative finishing touches."
  },
  {
    icon: Lightbulb,
    title: "Design Consultation",
    description: "Expert guidance and professional advice to help you make informed decisions about your interior design project."
  }
];

export function Services() {
  return (
    <section className="py-20 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl mb-6 text-stone-900 font-serif">
            Our Services
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {`From concept to completion, we offer comprehensive interior design services 
            tailored to your unique vision and requirements.`}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-4 text-stone-900 font-serif group-hover:text-amber-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6">
                    <span className="text-amber-600 group-hover:text-amber-700 transition-colors duration-300 cursor-pointer">
                      Learn more →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4 text-stone-900 font-serif">
              Ready to Transform Your Space?
            </h3>
            <p className="text-stone-600 mb-6">
              {`Let's discuss your vision and create something extraordinary together.`}
            </p>
            <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300">
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}