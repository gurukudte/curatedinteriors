"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl mb-8 text-foreground font-serif">
              Crafting Timeless Elegance
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                {`With over a decade of experience in luxury interior design, our
                studio specializes in creating sophisticated spaces that reflect
                your unique personality while maintaining timeless appeal.`}
              </p>
              <p>
                {`We believe that exceptional design goes beyond aesthetics—it's
                about creating environments that enhance your daily life,
                inspire creativity, and provide a sanctuary from the everyday.`}
              </p>
              <p>
                {`Our approach combines classical design principles with
                contemporary innovation, resulting in interiors that are both
                beautiful and functional, elegant yet comfortable.`}
              </p>
            </div>

            {/* Studio Philosophy */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl mb-4 text-foreground font-serif">
                Our Philosophy
              </h3>
              <blockquote className="text-muted-foreground italic">
                {`“Every space tells a story. Our role is to ensure it's a story
                worth telling—one that speaks to the soul and stands the test of
                time.”`}
              </blockquote>
            </div>
          </motion.div>

          {/* Studio Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl h-96 lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1737305457496-dc7503cdde1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHN0dWRpbyUyMHdvcmtzcGFjZSUyMG9mZmljZXxlbnwxfHx8fDE3NTc3Nzk5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury interior design studio workspace with elegant decor"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Decorative gold accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-600/20 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
