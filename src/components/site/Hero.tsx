import { Button } from "@/components/ui/button";
import bg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={bg} alt="" aria-hidden className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>

      <div className="container grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-8 animate-fade-in">
          <p className="text-primary uppercase tracking-[0.35em] text-xs">
            Founder & CEO · Amasteve Integrated Services
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02]">
            Stephen Egar Ayim
            <span className="block italic text-gold font-light">— Amasteve.</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            Digital marketer, front-end engineer, designer and storyteller.
            Building brands, communities and technology that move Ghana — and the world — forward.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold rounded-none px-8 h-12 uppercase tracking-widest text-xs">
              <a href="#work">View Portfolio</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-8 h-12 uppercase tracking-widest text-xs">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          <div className="flex items-center gap-8 pt-6 text-xs uppercase tracking-widest text-muted-foreground">
            <div>
              <div className="text-2xl font-display text-foreground">8+</div>
              <div>Disciplines</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-2xl font-display text-foreground">50+</div>
              <div>Projects</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-2xl font-display text-foreground">1</div>
              <div>Ward Served</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 relative animate-fade-in-slow">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute -inset-3 bg-gradient-gold opacity-30 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden gold-border">
              <img
                src="/portrait.png"
                alt="Stephen Egar Ayim (Amasteve) — Founder & CEO, Digital Marketer, Web Developer, and Community Advocate in Nigeria"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                itemProp="image"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background border border-primary/40 px-6 py-4 shadow-elegant">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Currently</div>
              <div className="font-display text-lg text-primary">Ward Rural Development Officer</div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-fade-in">
        <ArrowDown size={20} />
      </a>
    </section>
  );
};
