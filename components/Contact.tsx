"use client";

import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Clock, Users, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ContactSchema } from "@/schemas";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Client-side validation with Zod
    const validation = ContactSchema.safeParse(formData);

    if (!validation.success) {
      validation.error.errors.forEach((err) => {
        toast.error(err.message);
      });
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data), // use validated data
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await res.json();
      console.log("Form submitted successfully:", data);

      toast.success("Your consultation request has been submitted!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        projectType: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "8007033008",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@curatedinteriors.co.in",
      description: "Send us your project details",
    },
    {
      icon: MapPin,
      title: "Studio Location",
      details:
        "508 - Olympia B premises co-operative society limited, Baner, Pune 411045, Maharashtra",
      description: "Visit our design studio",
    },
    {
      icon: Clock,
      title: "Studio Hours",
      details:
        "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: By appointment only",
      description: "When we're available to help you",
    },
  ];

  return (
    <section
      className="py-20 lg:py-32 relative overflow-hidden"
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
                <MessageSquare className="w-4 h-4 inline-block mr-2" />
                <span className="relative z-10">Get In Touch</span>
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold mb-8 tracking-tight leading-tight"
              style={{ color: "#6f5b3e" }}
            >
              Let's Create{" "}
              <span className="relative inline-block">
                <span style={{ color: "#bfa14a" }}>Together</span>
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
              className="text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ color: "#6b6b6b" }}
            >
              Ready to transform your space? Get in touch with us to discuss
              your project and schedule a consultation with our expert design
              team.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative">
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

              <div className="relative p-8 rounded-3xl">
                <div className="mb-8">
                  <div
                    className="w-8 h-8 rounded-2xl flex items-center justify-center mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #6f5b3e 0%, #bfa14a 100%)",
                    }}
                  >
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <h3
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: "#6f5b3e" }}
                  >
                    Schedule a Consultation
                  </h3>
                  <div
                    className="mt-2 w-16 h-0.5 rounded-full"
                    style={{ backgroundColor: "#bfa14a" }}
                  ></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-sm font-semibold tracking-wide uppercase"
                        style={{ color: "#6f5b3e" }}
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-stone-50 border-stone-200 focus:border-amber-600 rounded-xl py-3 transition-all duration-300"
                        style={{
                          borderColor: "#e6e1da",
                          backgroundColor: "#f9f7f2",
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-semibold tracking-wide uppercase"
                        style={{ color: "#6f5b3e" }}
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-stone-50 border-stone-200 focus:border-amber-600 rounded-xl py-3 transition-all duration-300"
                        style={{
                          borderColor: "#e6e1da",
                          backgroundColor: "#f9f7f2",
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-semibold tracking-wide uppercase"
                        style={{ color: "#6f5b3e" }}
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="9876543210"
                        className="bg-stone-50 border-stone-200 focus:border-amber-600 rounded-xl py-3 transition-all duration-300"
                        style={{
                          borderColor: "#e6e1da",
                          backgroundColor: "#f9f7f2",
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="projectType"
                        className="text-sm font-semibold tracking-wide uppercase"
                        style={{ color: "#6f5b3e" }}
                      >
                        Project Type
                      </Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                        style={{
                          borderColor: "#e6e1da",
                          backgroundColor: "#f9f7f2",
                          color: "#6f5b3e",
                        }}
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Design</option>
                        <option value="renovation">Renovation</option>
                        <option value="styling">Interior Styling</option>
                        <option value="consultation">
                          Design Consultation
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-semibold tracking-wide uppercase"
                      style={{ color: "#6f5b3e" }}
                    >
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      rows={5}
                      className="bg-stone-50 border-stone-200 focus:border-amber-600 rounded-xl resize-none transition-all duration-300"
                      style={{
                        borderColor: "#e6e1da",
                        backgroundColor: "#f9f7f2",
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl text-lg font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-2xl text-white cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, #6f5b3e 0%, #bfa14a 100%)",
                    }}
                  >
                    Schedule Consultation
                  </motion.button>
                </form>
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

          {/* Premium Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl font-bold mb-6 tracking-tight"
                style={{ color: "#6f5b3e" }}
              >
                Get in Touch
              </h3>
              <p className="mb-8 leading-relaxed" style={{ color: "#6b6b6b" }}>
                We'd love to hear about your project. Whether you're looking for
                a complete home transformation or need expert advice on a
                specific room, our team is here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col space-y-2">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative">
                    <div className="relative p-2 rounded-2xl flex items-start space-x-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(135deg, #6f5b3e 0%, #bfa14a 100%)",
                        }}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4
                          className="text-lg font-bold mb-1 tracking-tight"
                          style={{ color: "#6f5b3e" }}
                        >
                          {info.title}
                        </h4>
                        <p
                          className="mb-2 whitespace-pre-line"
                          style={{ color: "#6b6b6b" }}
                        >
                          {info.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="group relative mt-4"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl transition-all duration-500 group-hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(191, 161, 74, 0.05) 0%, rgba(255, 140, 26, 0.08) 100%)",
                    boxShadow: "0 15px 40px rgba(111, 91, 62, 0.1)",
                  }}
                ></div>

                <div className="relative p-8 rounded-3xl">
                  <h4
                    className="text-xl font-bold mb-3 tracking-tight"
                    style={{ color: "#6f5b3e" }}
                  >
                    Prefer to Talk?
                  </h4>
                  <p
                    className="mb-6 leading-relaxed"
                    style={{ color: "#6b6b6b" }}
                  >
                    Schedule a phone consultation to discuss your project in
                    detail with our design experts.
                  </p>
                    <motion.a
                    href="tel:8007033008"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center cursor-pointer"
                    style={{
                      background:
                      "linear-gradient(135deg, #6f5b3e 0%, #bfa14a 100%)",
                      color: "#ffffff",
                    }}
                    >
                    Call Now
                    </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
