import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./Reveal";

const timeline = [

  {
    year: "2025",
    title: "B.Sc. Artificial Intelligence · UET Lahore",
    body: "Pursuing my undergraduate degree in Artificial Intelligence at the University of Engineering & Technology, Lahore. Expected graduation 2029.",
  },
  {
    year: "2024",
    title: "Intermediate · Computer Science",
    body: "Completed FSc Pre-Engineering with Computer Science. Score: 1024 / 1200.",
  },
  {
    year: "2022",
    title: "Matriculation · Medical Sciences",
    body: "Began with Pre-Medical sciences — a foundation in precision, patience and rigorous study. Score: 1024 / 1100.",
  },
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="education" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
            Education
          </p>
          <h2 className="font-display text-5xl md:text-6xl max-w-3xl leading-[1.02] mb-20">
            From medical sciences to <span className="text-gradient">artificial intelligence</span>.
          </h2>
        </Reveal>

        <div ref={ref} className="relative pl-8 md:pl-0">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <motion.div
            style={{ height: lineH }}
            className="absolute left-3 md:left-1/2 top-0 w-px bg-gradient-to-b from-accent via-primary to-rose origin-top glow-teal"
          />
          <ul className="space-y-20">
            {timeline.map((t, i) => (
              <li
                key={t.year}
                className={`relative grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
              >
                <Reveal>
                  <div className={`${i % 2 ? "md:text-left" : "md:text-right"}`}>
                    <div className="font-display text-6xl text-gradient">{t.year}</div>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="glass rounded-2xl p-6 relative">
                    <span className="absolute -left-[34px] md:left-auto md:-translate-x-1/2 top-7 h-3 w-3 rounded-full bg-accent ring-4 ring-background glow-teal" style={{ left: undefined }} />
                    <h3 className="font-display text-2xl mb-2">{t.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
