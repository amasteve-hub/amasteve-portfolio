import { Megaphone, Code2, Palette, Video, BarChart3, PenLine, Share2, Users } from "lucide-react";

const services = [
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, paid, and organic growth strategies that convert." },
  { icon: Code2, title: "Front-End Engineering", desc: "Fast, accessible React & TypeScript interfaces." },
  { icon: Palette, title: "Graphic Design", desc: "Brand identities, editorial, and print systems." },
  { icon: Video, title: "Videography", desc: "Cinematic direction, shooting, and post-production." },
  { icon: BarChart3, title: "Data Analytics", desc: "Insights that turn numbers into direction." },
  { icon: PenLine, title: "Blogging", desc: "Long-form writing that earns attention and trust." },
  { icon: Share2, title: "Social Media", desc: "Strategy and management across every platform." },
  { icon: Users, title: "Community Dev.", desc: "Rural mobilisation, programs, and civic impact." },
];

export const Services = () => {
  return (
    <section id="services" className="py-28 md:py-36 bg-gradient-dark border-y border-border/60">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <p className="text-primary uppercase tracking-[0.35em] text-xs">02 — Services</p>
            <h2 className="font-display text-5xl md:text-6xl max-w-2xl">
              Eight disciplines, <span className="italic text-gold">one standard</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Every engagement is treated with the same rigor: research, craft, ship, measure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-background p-8 hover-lift hover:bg-card transition-colors"
            >
              <Icon className="text-primary mb-6" size={28} strokeWidth={1.4} />
              <h3 className="font-display text-2xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <div className="mt-6 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
