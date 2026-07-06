import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Facebook, Linkedin, Youtube, Instagram, Mail } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Please write a bit more").max(1000),
});

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/amasteve" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/amasteve" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@amasteve" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/amasteve" },
  { icon: Mail, label: "Email", href: "mailto:stephenayim9@gmail.com" },
];

// Custom X (Twitter) icon
const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const subject = encodeURIComponent(`New enquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:stephenayim9@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your mail client…");
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 400);
  };

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-8">
          <p className="text-primary uppercase tracking-[0.35em] text-xs">07 — Contact</p>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
            Let's build something <span className="italic text-gold">worth remembering</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            For commissions, collaborations, speaking or press —
            reach out and I'll respond personally within two business days.
          </p>

          <div className="space-y-3 pt-4">
            <a href="mailto:stephenayim9@gmail.com" className="story-link block text-lg text-foreground">
              stephenayim9@gmail.com
            </a>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">NIGERIA · AVAILABLE WORLDWIDE</p>
          </div>

          <div className="flex items-center gap-5 pt-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
            <a
              href="https://x.com/amasteve"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <XIcon />
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 space-y-6 bg-card p-8 md:p-12 border border-border/60">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</Label>
              <Input id="name" name="name" required maxLength={100} className="bg-background border-border rounded-none h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</Label>
              <Input id="email" name="email" type="email" required maxLength={255} className="bg-background border-border rounded-none h-12" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Project / Message</Label>
            <Textarea id="message" name="message" required maxLength={1000} rows={6} className="bg-background border-border rounded-none" />
          </div>
          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-none px-10 h-12 uppercase tracking-widest text-xs shadow-gold"
          >
            {loading ? "Sending…" : "Send Enquiry"}
          </Button>
        </form>
      </div>
    </section>
  );
};
