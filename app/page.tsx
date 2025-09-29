"use client";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import PageLoader from "@/components/PageLoader";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TrustFeatures } from "@/components/TrustFeatures"

import { useState } from "react";

export default function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {/* Show loader until content is ready */}
      {!showContent && (
        <PageLoader onLoadComplete={() => setShowContent(true)} />
      )}

      <div className="min-h-screen">
        <Navigation />

        <main>
          {/* Only render main content once showContent is true */}
          {showContent && (
            <>
              <section id="home">
                <Hero />
              </section>
              <section id="services">
                <Services />
              </section>
              <TrustFeatures />
              {/* <section id="about">
              <About />
              </section> */}

              <section id="portfolio">
                <Portfolio />
              </section>

              <section id="testimonials">
                <Testimonials />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

