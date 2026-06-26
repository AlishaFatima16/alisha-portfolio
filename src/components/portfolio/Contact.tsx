import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative glass-strong rounded-[40px] overflow-hidden ring-cinematic p-10 md:p-20 text-center">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-accent/20 blur-[140px] animate-pulse-glow" />
          <div className="absolute -bottom-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[140px] animate-pulse-glow" style={{ animationDelay: "-2s" }} />
          <div className="relative">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
                Contact
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl mx-auto">
                Let's build something <span className="text-gradient">intelligent</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl mx-auto text-muted-foreground text-lg">
                Open to AI engineering roles, research collaborations and ambitious projects —
                especially anything involving agentic systems, automation or intelligent product
                surfaces.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <MagneticButton href="mailto:alishafatima2758@gmail.com" variant="primary">
                  alishafatima2758@gmail.com
                </MagneticButton>
                <MagneticButton href="https://linkedin.com/in/thealisha-fatima" variant="ghost">
                  LinkedIn
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <a href="https://github.com/AlishaFatima16" className="hover:text-foreground transition">GitHub ↗</a>
                <a href="https://linkedin.com/in/thealisha-fatima" className="hover:text-foreground transition">LinkedIn ↗</a>
                <a href="mailto:alishafatima2758@gmail.com" className="hover:text-foreground transition">Email ↗</a>
              </div>
            </Reveal>
          </div>
        </div>
        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span>© 2026 Alisha Fatima</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" /> Khanewal, Pakistan
          </span>
        </footer>
      </div>
    </section>
  );
}
