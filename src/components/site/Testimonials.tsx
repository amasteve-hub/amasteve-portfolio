import { Quote } from "lucide-react";

const items = [
  {
    quote: "Working with Amasteve elevated our brand beyond what we imagined. Rigorous, kind, and relentlessly creative.",
    name: "Client Name",
    role: "Founder, Placeholder Co.",
  },
  {
    quote: "A rare combination of technical depth and cultural intuition. The team delivered on every promise.",
    name: "Client Name",
    role: "Director, Placeholder Org.",
  },
  {
    quote: "From strategy to launch, everything moved with intention. Our metrics — and our people — feel it.",
    name: "Client Name",
    role: "CMO, Placeholder Ltd.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-28 md:py-36">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-primary uppercase tracking-[0.35em] text-xs">05 — Testimonials</p>
          <h2 className="font-display text-5xl md:text-6xl">
            In their <span className="italic text-gold">words</span>.
          </h2>
          <p className="text-sm text-muted-foreground uppercase tracking-widest">
            Placeholders — real endorsements coming soon.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure
              key={i}
              className="p-8 bg-card border border-border/60 hover:border-primary/50 transition-colors relative"
            >
              <Quote className="text-primary/50 mb-4" size={28} />
              <blockquote className="text-foreground/90 leading-relaxed font-display text-xl italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/60">
                <div className="text-sm text-foreground">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
