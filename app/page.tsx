
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TrustFeatures } from "@/components/TrustFeatures";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section id="home">
          <Hero />
        </section>
        <TrustFeatures/>
        <section id="services">
          <Services />
        </section>
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
      </main>

      <Footer />
    </div>
  );
}
