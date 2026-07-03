import { Facebook, Linkedin, Youtube, Instagram, Mail } from "lucide-react";

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5 space-y-4">
          <div className="font-display text-3xl text-gold">Amasteve</div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Stephen Egar Ayim — Founder & CEO of Amasteve Integrated Services and Ward Rural
            Development Officer.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#work" className="hover:text-primary">Work</a></li>
            <li><a href="#community" className="hover:text-primary">Community</a></li>
            <li><a href="#journal" className="hover:text-primary">Journal</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Elsewhere</div>
          <div className="flex items-center gap-5 text-muted-foreground">
            <a href="https://facebook.com/amasteve" aria-label="Facebook" className="hover:text-primary"><Facebook size={16} /></a>
            <a href="https://linkedin.com/in/amasteve" aria-label="LinkedIn" className="hover:text-primary"><Linkedin size={16} /></a>
            <a href="https://youtube.com/@amasteve" aria-label="YouTube" className="hover:text-primary"><Youtube size={16} /></a>
            <a href="https://instagram.com/amasteve" aria-label="Instagram" className="hover:text-primary"><Instagram size={16} /></a>
            <a href="https://x.com/amasteve" aria-label="X" className="hover:text-primary"><XIcon /></a>
            <a href="mailto:hello@amasteve.com" aria-label="Email" className="hover:text-primary"><Mail size={16} /></a>
          </div>
          <a href="/cv.txt" download className="inline-block mt-6 text-xs uppercase tracking-widest text-primary story-link">
            Download CV
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Amasteve Integrated Services</div>
          <div>Crafted with intention in Ghana</div>
        </div>
      </div>
    </footer>
  );
};
