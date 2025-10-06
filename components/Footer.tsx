"use client";

import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  const socialLinks = [
    { Icon: Youtube, label: "Youtube", href: "https://www.youtube.com/@CuratedInteriors2025" },
    { Icon: Instagram, label: "Instagram", href: "#" },
    { Icon: Facebook, label: "Facebook", href: "#" },
    { Icon: Twitter, label: "Twitter", href: "#" },
    { Icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  const quickLinks = [
    { name: "About Us", link: "#about" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Services", link: "#services" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  // const services = [
  //   "Residential Design",
  //   "Commercial Design",
  //   "Interior Renovation",
  //   "Space Planning",
  //   "Design Consultation",
  // ];

  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #2c2317 0%, #1a1611 50%, #0f0d09 100%)",
      }}
    >
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-3"
          style={{
            background: "radial-gradient(circle, #bfa14a 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-3"
          style={{
            background: "radial-gradient(circle, #FF8C1A 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-2"
          style={{
            background:
              "conic-gradient(from 45deg, #6f5b3e 0deg, #bfa14a 120deg, #FF8C1A 240deg, #6f5b3e 360deg)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Premium Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group"
          >
            <div className="relative">
              {/* Logo & Brand */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative group-hover:scale-110 transition-transform duration-500">
                  {/* <div
                    className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)",
                      filter: "blur(15px)",
                    }}
                  ></div> */}
                  <div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
                    // style={{
                    //   background:
                    //     "linear-gradient(145deg, #ffffff 0%, #f9f7f2 100%)",
                    //   boxShadow: "0 10px 30px rgba(111, 91, 62, 0.2)",
                    // }}
                  >
                    <Image
                      src="/logo-white.svg"
                      alt="Curated Interior Logo"
                      width={60}
                      height={60}
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3
                    className="text-3xl font-bold tracking-tight mb-1"
                    style={{ color: "#bfa14a" }}
                  >
                    Curated Interior
                  </h3>
                  <div
                    className="w-24 h-1 rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #bfa14a 0%, #FF8C1A 100%)",
                    }}
                  ></div>
                </div>
              </div>

              {/* Premium Description */}
              <div className="mb-8">
                <div
                  className="w-8 h-8 rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)",
                  }}
                >
                  <Quote className="w-4 h-4 text-white" />
                </div>
                <p
                  className="text-lg leading-relaxed max-w-md italic mb-4"
                  style={{ color: "#d4c5a9" }}
                >
                  "Curating timeless, luxurious spaces with a touch of Indian
                  elegance. Our interiors blend craftsmanship, culture, and
                  contemporary design to transform your home into a
                  masterpiece."
                </p>
                <div
                  className="w-0 h-0.5 rounded-full group-hover:w-32 transition-all duration-1000"
                  style={{ backgroundColor: "#bfa14a" }}
                ></div>
              </div>

              {/* Premium Social Media Links */}
              <div>
                <h4
                  className="text-sm font-semibold tracking-wider uppercase mb-4"
                  style={{ color: "#bfa14a" }}
                >
                  Follow Our Journey
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map(({ Icon, label, href }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                      aria-label={label}
                    >
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background:
                            "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)",
                          filter: "blur(8px)",
                        }}
                      ></div>
                      <div
                        className="relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(145deg, #3a3124 0%, #2c2317 100%)",
                          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        <Icon
                          className="w-5 h-5 transition-colors duration-300"
                          style={{
                            color: "#d4c5a9",
                          }}
                        />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premium Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative">
              <h4
                className="text-xl font-bold mb-2 tracking-tight"
                style={{ color: "#bfa14a" }}
              >
                Quick Links
              </h4>
              <div
                className="w-0 h-0.5 rounded-full group-hover:w-16 transition-all duration-500 mb-6"
                style={{ backgroundColor: "#FF8C1A" }}
              ></div>

              <ul className="space-y-4">
                {quickLinks.map(({ name, link }, index) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link}
                      className="group relative inline-block transition-all duration-300"
                      style={{ color: "#d4c5a9" }}
                    >
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        {name}
                      </span>
                      <div
                        className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300"
                        style={{ backgroundColor: "#bfa14a" }}
                      ></div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Premium Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative">
              <h4
                className="text-xl font-bold mb-2 tracking-tight"
                style={{ color: "#bfa14a" }}
              >
                Contact Info
              </h4>
              <div
                className="w-0 h-0.5 rounded-full group-hover:w-16 transition-all duration-500 mb-6"
                style={{ backgroundColor: "#FF8C1A" }}
              ></div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group/item flex items-center space-x-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)",
                    }}
                  >
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span
                    className="transition-colors duration-300 group-hover/item:text-white"
                    style={{ color: "#d4c5a9" }}
                  >
                    +91 8007033008
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group/item flex items-center space-x-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)",
                    }}
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span
                    className="transition-colors duration-300 group-hover/item:text-white"
                    style={{ color: "#d4c5a9" }}
                  >
                    hello@curatedinteriors.co.in
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group/item flex items-start space-x-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)",
                    }}
                  >
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div
                    className="transition-colors duration-300 group-hover/item:text-white leading-relaxed"
                    style={{ color: "#d4c5a9" }}
                  >
                    <p>508 - Olympia B Premises</p>
                    <p>Co-operative Society Ltd.</p>
                    <p>Baner, Pune 411045, Maharashtra</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Premium Services Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-50"
            style={{
              background:
                "linear-gradient(145deg, rgba(58, 49, 36, 0.3) 0%, rgba(44, 35, 23, 0.5) 100%)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
            }}
          ></div>

          <div className="relative p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h4
                className="text-xl font-bold mb-2 tracking-tight"
                style={{ color: "#bfa14a" }}
              >
                Our Expertise
              </h4>
              <div
                className="mx-auto w-20 h-0.5 rounded-full"
                style={{ backgroundColor: "#FF8C1A" }}
              ></div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #bfa14a 0%, #FF8C1A 100%)",
                      filter: "blur(10px)",
                    }}
                  ></div>
                  <div
                    className="relative p-4 rounded-xl text-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(58, 49, 36, 0.5) 0%, rgba(44, 35, 23, 0.7) 100%)",
                      boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2)",
                      color: "#d4c5a9",
                    }}
                  >
                    <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {service}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}

        {/* Premium Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className="absolute inset-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #bfa14a 50%, transparent 100%)",
            }}
          ></div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            <div
              className="text-sm mb-4 md:mb-0 flex items-center space-x-2"
              style={{ color: "#999177" }}
            >
              <span>© {new Date().getFullYear()}</span>
              <div
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: "#bfa14a" }}
              ></div>
              <span className="font-medium" style={{ color: "#bfa14a" }}>
                Curated Interior
              </span>
              <div
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: "#bfa14a" }}
              ></div>
              <span>All rights reserved.</span>
            </div>

            <div className="flex space-x-8">
              {legalLinks.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-sm relative group transition-colors duration-300"
                  style={{ color: "#999177" }}
                >
                  <span className="group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                  <div
                    className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "#bfa14a" }}
                  ></div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
