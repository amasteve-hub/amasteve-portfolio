export const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 relative">
      <div className="container grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4 space-y-4">
          <p className="text-primary uppercase tracking-[0.35em] text-xs">01 — About</p>
          <h2 className="font-display text-5xl md:text-6xl">
            A creator of <span className="italic text-gold">systems</span>, brands & change.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm <span className="text-foreground font-medium">Stephen Egar Ayim</span> — known
            professionally as <span className="text-primary">Amasteve</span>. As Founder & CEO of
            Amasteve Integrated Services, I lead a practice that fuses digital marketing,
            engineering, and design with a deep commitment to community development.
          </p>
          <p>
            My work moves fluidly between crafting front-end experiences,
            directing photography and video, analysing data, telling stories through the written
            word, and mobilising people around ideas that matter.
          </p>
          <p>
            As a Ward Rural Development Officer, I bring that same discipline to public service —
            turning ambition into measurable impact for the communities I serve.
          </p>
          <div className="divider-gold my-8" />
          <div className="grid grid-cols-2 gap-6 text-sm uppercase tracking-widest">
            <div>
              <div className="text-muted-foreground/70">Based in</div>
              <div className="text-foreground mt-1">Ghana</div>
            </div>
            <div>
              <div className="text-muted-foreground/70">Available for</div>
              <div className="text-foreground mt-1">Select projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
