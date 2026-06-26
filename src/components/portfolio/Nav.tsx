import { motion, useScroll, useTransform } from "motion/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#achievements", label: "Honors" },
  { href: "#certificates", label: "Certificates" },
  { href: "#beyond", label: "Beyond" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 120], [0, 1]);
  return (
    <motion.header
      style={{ backgroundColor: useTransform(bg, (v) => `oklch(0.13 0.018 250 / ${v * 0.6})`) }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-border/40"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full glass">
            <span className="absolute inset-0 rounded-full bg-accent/30 blur-md opacity-60 group-hover:opacity-100 transition" />
            <span className="font-display text-lg text-gradient relative">A</span>
          </span>
          <span className="font-display tracking-tight text-sm">
            Alisha Fatima <span className="text-muted-foreground">/ AI Engineer</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground rounded-full transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/80 hover:text-primary transition"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
          Open to work
        </a>
      </div>
    </motion.header>
  );
}
