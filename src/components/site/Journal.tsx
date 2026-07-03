const posts = [
  {
    date: "Coming soon",
    category: "Digital Marketing",
    title: "Building a brand that outlives the algorithm.",
    excerpt: "Why creative discipline still beats channel-chasing in 2026.",
  },
  {
    date: "Coming soon",
    category: "Community",
    title: "Rural development is a design problem.",
    excerpt: "Notes from the field on serving as a Ward Rural Development Officer.",
  },
  {
    date: "Coming soon",
    category: "Engineering",
    title: "Front-end craft in an AI-native world.",
    excerpt: "How I approach performance, accessibility, and aesthetics on modern React stacks.",
  },
];

export const Journal = () => {
  return (
    <section id="journal" className="py-28 md:py-36 bg-gradient-dark border-y border-border/60">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <p className="text-primary uppercase tracking-[0.35em] text-xs">06 — Journal</p>
            <h2 className="font-display text-5xl md:text-6xl">
              Field notes & <span className="italic text-gold">essays</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Thoughts on marketing, design, engineering, and the craft of community development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border/60">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group bg-background p-8 md:p-10 hover:bg-card transition-colors cursor-pointer"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
                {p.category} · {p.date}
              </div>
              <h3 className="font-display text-2xl md:text-3xl leading-tight mb-4 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
              <div className="mt-8 text-xs uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read essay →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
