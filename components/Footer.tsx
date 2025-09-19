"use client";

import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <Image
                  src="/company-logo-removebg-preview.png"
                  alt="Curated Interior Logo"
                  width={95}
                  height={95}
                  priority
                  className="object-contain brightness-110 drop-shadow-[0_0_15px_rgba(255,180,50,0.6)]"
                />
              </div>
              <h3 className="text-2xl font-serif tracking-wide text-amber-400 drop-shadow-lg">
                Curated Interior
              </h3>
            </div>
            <p className="text-stone-300 mb-6 leading-relaxed max-w-md">
              Curating timeless, luxurious spaces with a touch of Indian
              elegance. Our interiors blend craftsmanship, culture, and
              contemporary design to transform your home into a masterpiece.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300 shadow-md"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 font-medium">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", link: "#about" },
                { name: "Portfolio", link: "#portfolio" },
                { name: "Services", link: "#services" },
                { name: "Testimonials", link: "#testimonials" },
                { name: "Contact", link: "#contact" },
              ].map(({ name, link }) => (
                <li key={name}>
                  <a
                    href={link}
                    className="text-stone-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4 font-medium">Contact Info</h4>
            <div className="space-y-3 text-stone-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>hello@curatedinteriors.co.in</span>
              </div>
              <div>
                <p>508 - Olympia B Premises Co-operative Society Ltd.</p>
                <p>Baner, Pune 411045, Maharashtra</p>
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
            © {new Date().getFullYear()} Curated Interior. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-stone-400">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
