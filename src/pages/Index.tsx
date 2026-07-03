import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Community } from "@/components/site/Community";
import { Testimonials } from "@/components/site/Testimonials";
import { Journal } from "@/components/site/Journal";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Community />
      <Testimonials />
      <Journal />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
