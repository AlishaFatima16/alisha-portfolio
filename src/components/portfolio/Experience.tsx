import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    t: "NER Pipelines",
    d: "Built named-entity extraction systems that turn raw enterprise text into structured, queryable knowledge.",
  },
  {
    t: "Organizational Memory Graphs",
    d: "Designed graph-based memory that lets agents recall context across users, projects and time.",
  },
  {
    t: "Procedural Reasoning",
    d: "Engineered step-by-step reasoning chains so agents can plan, justify and revise their actions.",
  },
  {
    t: "Multi-Agent Orchestration",
    d: "Coordinated specialist agents into a single reliable workflow with clear hand-offs and guards.",
  },
  {
    t: "Workflow Integrity",
    d: "Wrote the validation, retry and fallback layer that keeps production pipelines honest under load.",
  },
  {
    t: "Production AI Infrastructure",
    d: "Shipped containerized FastAPI services on Cloud Run — observable, versioned and ready for scale.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-44 overflow-hidden">
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-30 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M0 ${80 + i * 70} Q 600 ${40 + i * 80} 1200 ${120 + i * 60}`}
            stroke="oklch(0.78 0.13 195 / 0.3)"
            strokeWidth="0.6"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Olyxee */}
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-20">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
                Experience
              </p>
              <h2 className="font-display text-5xl md:text-6xl leading-[1.02]">
                Inside <span className="text-gradient">Olyxee Cortex</span>.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 text-muted-foreground leading-relaxed">
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                AI / ML Intern · Olyxee · 2026 — Present
              </p>
              <p>
                Contributing to Olyxee Cortex — enterprise cognition infrastructure. Working on
                the layer where retrieval, memory and agents quietly become a single reasoning
                system inside a production-grade platform.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-3xl overflow-hidden glass-strong mb-32">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 0.06}>
              <div className="relative group h-full p-8 bg-background/40 hover:bg-background/10 transition-colors duration-700 overflow-hidden">
                <span className="font-mono text-[10px] text-accent tracking-widest">
                  PILLAR / 0{i + 1}
                </span>
                <h3 className="font-display text-2xl mt-4 mb-3">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-[width] duration-1000 ease-cinematic"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* FlyRank */}
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
                Upcoming
              </p>
              <h2 className="font-display text-5xl md:text-6xl leading-[1.02]">
                Inside <span className="text-gradient">FlyRank Corp</span>.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 text-muted-foreground leading-relaxed">
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                Back-End AI Engineering Intern · FlyRank Corp. · July 1 – Aug 12, 2026
              </p>
              <p>
                Accepted into FlyRank's 6-week Backend AI Engineering program — building
                back-end AI systems under Alen Malkoc, Founder & CEO. Starting July 1, 2026,
                focused on real-world backend infrastructure for AI-powered products.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}