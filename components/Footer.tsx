"use client";

import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl mb-4 font-serif">Curated Interiors</h3>
            <p className="text-stone-300 mb-6 leading-relaxed max-w-md">
              Creating extraordinary interiors that reflect your unique style
              and enhance your daily life. Transforming spaces with timeless
              elegance and contemporary innovation.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 font-serif">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-stone-300 hover:text-amber-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-stone-300 hover:text-amber-400 transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-stone-300 hover:text-amber-400 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-stone-300 hover:text-amber-400 transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-stone-300 hover:text-amber-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4 font-serif">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="text-stone-300">9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="text-stone-300">
                  hello@curatedinteriors.co.in
                </span>
              </div>
              <div className="text-stone-300">
                <p>508 - Olympia B premises co-operative society limited</p>
                <p>Baner,Pune 411045,Maharashtra.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-stone-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm text-stone-400">
            <div>Residential Design</div>
            <div>Commercial Design</div>
            <div>Interior Renovation</div>
            <div>Space Planning</div>
            <div>Design Consultation</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-stone-400 text-sm mb-4 md:mb-0">
            © 2024 Interior Design Studio. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-stone-400">
            <a
              href="#"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}