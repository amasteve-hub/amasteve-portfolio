import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";

const works = [
  { img: w1, title: "Loslean — Brand Identity", tag: "Graphic Design", year: "2025" },
  { img: w2, title: "Editorial Web Platform", tag: "Front-End", year: "2025" },
  { img: w3, title: "Documentary Series", tag: "Videography", year: "2024" },
  { img: w4, title: "Growth Analytics Dashboard", tag: "Data", year: "2024" },
];

export const Work = () => {
  return (
    <section id="work" className="py-28 md:py-36">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <p className="text-primary uppercase tracking-[0.35em] text-xs">03 — Selected Work</p>
            <h2 className="font-display text-5xl md:text-6xl">
              Featured <span className="italic text-gold">projects</span>.
            </h2>
          </div>
          <a href="#contact" className="story-link text-sm uppercase tracking-widest text-primary">
            Commission a project →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {works.map((w, i) => (
            <article
              key={w.title}
              className={`group relative overflow-hidden bg-card hover-lift ${i % 3 === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex items-end justify-between gap-6 border-t border-border/60">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                    {w.tag} · {w.year}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl">{w.title}</h3>
                </div>
                <span className="text-primary text-2xl opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
