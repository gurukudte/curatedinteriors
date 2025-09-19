"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      projectType: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 tracking-tight ">
            {`Let's Create Together`}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {`Ready to transform your space? Get in touch with us to discuss your
            project and schedule a consultation with our design team.`}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl mb-6 text-stone-900 ">
                Schedule a Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-stone-50 border-stone-200 focus:border-amber-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-stone-50 border-stone-200 focus:border-amber-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="bg-stone-50 border-stone-200 focus:border-amber-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Design</option>
                      <option value="renovation">Renovation</option>
                      <option value="styling">Interior Styling</option>
                      <option value="consultation">Design Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    rows={5}
                    className="bg-stone-50 border-stone-200 focus:border-amber-600"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3"
                  size="lg"
                >
                  Schedule Consultation
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6 text-stone-900 ">Get in Touch</h3>
              <p className="text-stone-600 mb-8 leading-relaxed">
                {`We'd love to hear about your project. Whether you're looking for
                a complete home transformation or need expert advice on a
                specific room, our team is here to help.`}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-lg text-stone-900 mb-1">Phone</h4>
                  <p className="text-stone-600">9876543210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-lg text-stone-900 mb-1">Email</h4>
                  <p className="text-stone-600">hello@curatedinteriors.co.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-lg text-stone-900 mb-1">
                    Studio Location
                  </h4>
                  <p className="text-stone-600">
                    508 - Olympia B premises co-operative society limited
                    <br />
                    Baner,Pune 411045,Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-lg text-stone-900 mb-1">Studio Hours</h4>
                  <p className="text-stone-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: By appointment only
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-amber-50 rounded-lg p-6 mt-8">
              <h4 className="text-lg text-stone-900 mb-2 ">Prefer to Talk?</h4>
              <p className="text-stone-600 mb-4">
                Schedule a phone consultation to discuss your project in detail.
              </p>
              <Button
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
              >
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}