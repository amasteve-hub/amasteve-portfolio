import { Suspense, lazy } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";

// Lazy load components that are not in the initial viewport
const Services = lazy(() => import("@/components/site/Services").then(m => ({ default: m.Services })));
const Work = lazy(() => import("@/components/site/Work").then(m => ({ default: m.Work })));
const Community = lazy(() => import("@/components/site/Community").then(m => ({ default: m.Community })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then(m => ({ default: m.Testimonials })));
const Journal = lazy(() => import("@/components/site/Journal").then(m => ({ default: m.Journal })));
const Contact = lazy(() => import("@/components/site/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/site/Footer").then(m => ({ default: m.Footer })));

// Loading placeholder component (minimal, lightweight)
const SectionSkeleton = () => (
  <div className="py-28 md:py-36 animate-pulse">
    <div className="container">
      <div className="h-48 bg-muted rounded" />
    </div>
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      
      {/* Lazy-loaded sections with Suspense boundary */}
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Work />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Community />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Journal />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
