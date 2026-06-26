import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import { MagneticButton } from "./MagneticButton";

const ROLES = [
  "AI Undergraduate @ UET Lahore",
  "NLP & LLM Builder",
  "Multi-Agent AI Engineer",
  "NER & RAG Systems Developer",
  "Hackathon Finalist",
  "AI Systems Architect",
  "Agentic AI Enthusiast",
];

const PORTRAITS = [portrait1, portrait2];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const delay = deleting ? 35 : 70;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = current.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % PORTRAITS.length), 9000);
    return () => clearInterval(id);
  }, []);

  const role = useTypewriter(ROLES);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Background crossfade — full bleed portraits */}
      <motion.div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={PORTRAITS[active]}
              alt="Alisha Fatima — cinematic portrait"
              className="hidden md:block h-full w-full object-cover object-[65%_25%] md:object-[70%_25%]"
              style={{ filter: "saturate(0.85) contrast(1.05)" }}
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            key={`mobile-${active}`}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 md:hidden"
            style={{ opacity: 0.3 }}
          >
            <img
              src={PORTRAITS[active]}
              alt="Alisha Fatima portrait"
              className="h-full w-full object-cover object-[58%_18%]"
              style={{ filter: "saturate(0.92) contrast(1.08) brightness(0.88)" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/72 to-background/24 md:from-background md:via-background/80 md:to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,transparent_0%,oklch(0.09_0.02_250/0.55)_70%)]" />
        <div className="absolute inset-0 md:hidden bg-[linear-gradient(180deg,oklch(0.09_0.02_250/0.08)_0%,oklch(0.09_0.02_250/0.24)_28%,oklch(0.13_0.018_250/0.52)_58%,oklch(0.13_0.018_250/0.88)_100%)]" />

        {/* Ambient color wash */}
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-1/4 h-[42rem] w-[42rem] rounded-full bg-accent/25 blur-[150px]"
        />
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute right-1/4 bottom-0 h-[34rem] w-[34rem] rounded-full bg-primary/25 blur-[160px]"
        />

        {/* Cinematic light rays */}
        <div
          className="absolute -top-1/4 right-0 h-[150%] w-[60%] opacity-30 mix-blend-screen"
          style={{
            background:
              "conic-gradient(from 200deg at 80% 30%, transparent 0deg, oklch(0.92 0.08 130 / 0.18) 30deg, transparent 60deg, oklch(0.78 0.13 195 / 0.15) 120deg, transparent 180deg)",
            filter: "blur(40px)",
          }}
        />

        {/* Grain */}
        <div className="absolute inset-0 noise" />
      </motion.div>

      {/* Foreground content */}
      <motion.div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid min-h-[100svh] grid-cols-1 items-center gap-8 py-28 md:py-32 md:grid-cols-12">
          {/* LEFT — content */}
          <div className="relative z-10 md:col-span-7">

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground mb-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              AI Engineer & Developer · UET Lahore
              <span className="hidden md:inline h-px w-16 bg-foreground/20 ml-2" />
            </motion.div>

            <h1 className="font-display leading-[0.88] tracking-tight uppercase">
              <motion.span
                initial={false}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="block text-foreground/95 text-glow-white text-[clamp(3.25rem,11vw,9.5rem)]"
              >
                Alisha
              </motion.span>
              <motion.span
                initial={false}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="block shimmer-gold-teal text-[clamp(3.25rem,11vw,9.5rem)]"
              >
                Fatima
              </motion.span>
            </h1>

            {/* Typing tagline */}
            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-8 flex items-center gap-2 h-7 md:h-8 text-base md:text-lg font-mono text-accent"
            >
              <span className="text-foreground/60">{">"}</span>
              <span>{role}</span>
              <span className="inline-block h-5 md:h-6 w-[2px] bg-accent animate-pulse-glow" />
            </motion.div>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mt-7 max-w-xl text-[15px] md:text-base text-muted-foreground leading-relaxed"
            >
              Building intelligent systems that solve real-world problems. AI undergraduate at
              UET Lahore passionate about agentic AI, NLP, large language models, intelligent
              automation, and applied machine learning — combining technical depth with
              creativity, leadership, and problem-solving.
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-6 h-[42vh] min-h-[320px] overflow-hidden rounded-[6px] md:hidden"
            >
              <AnimatePresence>
                <motion.img
                  key={`mobile-panel-${active}`}
                  src={PORTRAITS[active]}
                  alt="Alisha Fatima portrait"
                  initial={{ opacity: 0.85, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover object-[56%_18%]"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-background/88 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/28" />
              <div className="absolute top-4 right-4 glass rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                AI Engineer
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-3 md:gap-4"
            >
              <MagneticButton href="#work" variant="primary">
                View Projects
                <span aria-hidden>→</span>
              </MagneticButton>
              <MagneticButton href="/Alisha-Fatima-CV.pdf" variant="ghost">
                Download CV
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                Contact Me
              </MagneticButton>
            </motion.div>
          </div>

          {/* RIGHT — circular portrait with glowing animated ring */}
          <div className="hidden md:flex md:col-span-5 relative h-full items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square w-[78%] max-w-[460px]"
            >
              {/* Rotating conic glowing ring */}
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, oklch(0.84 0.12 80), oklch(0.78 0.13 195), oklch(0.65 0.22 295), oklch(0.84 0.12 80))",
                  filter: "blur(14px)",
                  opacity: 0.85,
                }}
              />
              {/* Counter-rotating crisp ring */}
              <motion.div
                aria-hidden
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 90deg, transparent 0deg, oklch(0.92 0.08 130 / 0.9) 60deg, transparent 120deg, oklch(0.78 0.13 195 / 0.85) 220deg, transparent 300deg)",
                }}
              />
              {/* Pulsing glow halo */}
              <motion.div
                aria-hidden
                animate={{ opacity: [0.45, 0.85, 0.45], scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-10 rounded-full bg-accent/30 blur-[60px]"
              />

              {/* Photo */}
              <div className="absolute inset-0 rounded-full overflow-hidden ring-1 ring-foreground/15 bg-background">
                <AnimatePresence>
                  <motion.img
                    key={`circle-${active}`}
                    src={PORTRAITS[active]}
                    alt="Alisha Fatima portrait"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 h-full w-full object-cover object-[60%_22%]"
                  />
                </AnimatePresence>
              </div>

              {/* Floating meta chips */}

            </motion.div>
          </div>

        </div>

        {/* Floating socials — right edge */}
        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-6 text-[10px] uppercase tracking-[0.35em] text-muted-foreground"
        >
          {[
            { l: "LinkedIn", h: "https://linkedin.com/in/thealisha-fatima" },
            { l: "GitHub", h: "https://github.com/AlishaFatima16" },
            { l: "Email", h: "mailto:alishafatima2758@gmail.com" },
          ].map((s) => (
            <li key={s.l} className="relative">
              <a
                href={s.h}
                className="[writing-mode:vertical-rl] rotate-180 hover:text-accent transition-colors duration-500"
              >
                {s.l}
              </a>
            </li>
          ))}
          <span className="mx-auto h-16 w-px bg-foreground/20" />
        </motion.ul>

        {/* Scroll cue */}
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
        >
          <span>Scroll</span>
          <span className="relative h-9 w-5 rounded-full border border-foreground/30 flex justify-center pt-1.5 overflow-hidden">
            <span className="h-1.5 w-1 rounded-full bg-accent animate-scroll-cue" />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
