import { Quote } from "lucide-react";

const items = [
  {
    quote: "Working with Amasteve elevated our brand beyond what we imagined. Rigorous, kind, and relentlessly creative.",
    name: "MRS KUKU EWORO",
    role: "FOUNDER, JODENKE ENTERPRISE",
  },
  {
    quote: "A rare combination of technical depth and cultural intuition. The team delivered on every promise.",
    name: " ",
    role: " ",
  },
  {
    quote: "From strategy to launch, everything moved with intention. Our metrics — and our people — feel it.",
    name: " ",
    role: " ",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-28 md:py-36">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <p className="text-primary uppercase tracking-[0.35em] text-xs">05 — Testimonials</p>
          <h2 className="font-display text-5xl md:text-6xl">
            In their <span className="italic text-gold">words</span>.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => {
            const name = t.name.trim();
            const role = t.role.trim();
            const hasAttribution = Boolean(name || role);
            return (
              <figure
                key={i}
                className="flex flex-col p-8 md:p-10 bg-card border border-border/60 hover:border-primary/50 transition-colors relative"
              >
                <Quote className="text-primary/50 mb-5 shrink-0" size={28} aria-hidden />
                <blockquote className="text-foreground/90 leading-relaxed font-display text-lg md:text-xl italic flex-1">
                  <p>"{t.quote}"</p>
                </blockquote>
                {hasAttribution && (
                  <figcaption className="mt-8 pt-6 border-t border-border/60">
                    {name && (
                      <div className="text-sm text-foreground uppercase tracking-widest">{name}</div>
                    )}
                    {role && (
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                        {role}
                      </div>
                    )}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};
