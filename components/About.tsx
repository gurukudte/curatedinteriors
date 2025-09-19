"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section className="py-24 lg:py-40 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl mb-10 text-foreground font-serif tracking-tight">
              Crafting Timeless Elegance
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                {`With over a decade of expertise in luxury interior design, our
                studio curates sophisticated spaces that mirror your individuality
                while maintaining an enduring charm.`}
              </p>
              <p>
                {`We believe luxury is more than aesthetics—it’s about sculpting
                environments that elevate daily living, nurture creativity, and
                provide a sanctuary from the everyday.`}
              </p>
              <p>
                {`By fusing classical principles with contemporary innovation, we
                create interiors that are as functional as they are exquisite,
                balancing elegance with comfort.`}
              </p>
            </div>

            {/* Studio Philosophy */}
            <div className="mt-14 pt-10 border-t border-border/60">
              <h3 className="text-2xl mb-5 text-foreground font-serif">
                Our Philosophy
              </h3>
              <blockquote className="text-muted-foreground italic border-l-4 border-amber-600/40 pl-4">
                {`“Every space tells a story. Our role is to ensure it's a story
                worth telling—one that resonates deeply and endures the test of
                time.”`}
              </blockquote>
            </div>
          </motion.div>

          {/* Studio Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[500px] group">
              <Image
                src="https://images.unsplash.com/photo-1737305457496-dc7503cdde1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHN0dWRpbyUyMHdvcmtzcGFjZSUyMG9mZmljZXxlbnwxfHx8fDE3NTc3Nzk5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury interior design studio workspace with elegant decor"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Decorative Gold Glow */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-700/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
