import community from "@/assets/community.jpg";
import { Sprout, HandHeart, GraduationCap } from "lucide-react";

const stories = [
  {
    icon: Sprout,
    title: "Youth Digital Skills Initiative",
    desc: "Introduced foundational design and marketing training to young people in the ward, opening pathways to online income.",
  },
  {
    icon: HandHeart,
    title: "Community Mobilisation",
    desc: "Coordinated grassroots forums that surfaced local priorities and connected residents with district-level programs.",
  },
  {
    icon: GraduationCap,
    title: "Storytelling for Development",
    desc: "Documented rural voices through photo, video and long-form writing to attract advocacy and investment.",
  },
];

export const Community = () => {
  return (
    <section id="community" className="py-28 md:py-36 bg-gradient-dark border-y border-border/60">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="aspect-[5/4] overflow-hidden gold-border">
            <img
              src={community}
              alt="Community engagement in rural Ghana"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 hidden md:block bg-background border border-primary/40 px-6 py-4 shadow-elegant max-w-[220px]">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Public service</div>
            <div className="font-display text-lg text-primary leading-tight mt-1">Ward Rural Development Officer</div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-8">
          <p className="text-primary uppercase tracking-[0.35em] text-xs">04 — Community</p>
          <h2 className="font-display text-5xl md:text-6xl">
            Craft in service of <span className="italic text-gold">people</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Beyond client work, I serve as a Ward Rural Development Officer — translating creative and
            digital fluency into on-the-ground programs that raise the standard of living in the
            communities I represent.
          </p>
          <div className="space-y-6 pt-4">
            {stories.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 border-t border-border/60 pt-6">
                <Icon className="text-primary shrink-0 mt-1" size={22} strokeWidth={1.4} />
                <div>
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
