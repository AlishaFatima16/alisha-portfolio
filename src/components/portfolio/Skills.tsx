import { motion } from "motion/react";
import skillComm from "@/assets/skill-communication.jpg";
import skillLead from "@/assets/skill-leadership.jpg";
import skillCreat from "@/assets/skill-creativity.jpg";
import skillProb from "@/assets/skill-problem.jpg";
import skillAdapt from "@/assets/skill-adapt.jpg";
import skillTeam from "@/assets/skill-team.jpg";
import { TiltCard } from "./TiltCard";
import { Reveal } from "./Reveal";

type Skill = {
  num: string;
  title: string;
  desc: string;
  image: string;
  overlay: "wave" | "ui" | "paint" | "neural" | "morph" | "network";
};

const skills: Skill[] = [
  {
    num: "01",
    title: "Communication",
    desc: "Years on debate stages and in classrooms — translating ideas across audiences, from engineers to non-technical decision makers.",
    image: skillComm,
    overlay: "wave",
  },
  {
    num: "02",
    title: "Leadership",
    desc: "Serving as Vice President and leading teams through Aspire Leaders, hackathons and student initiatives — quietly setting tempo.",
    image: skillLead,
    overlay: "ui",
  },
  {
    num: "03",
    title: "Creativity",
    desc: "A painter's instinct applied to architecture. 3rd in the National Painting Competition of Pakistan — composition is composition.",
    image: skillCreat,
    overlay: "paint",
  },
  {
    num: "04",
    title: "Problem Solving",
    desc: "From CS50 Puzzle Day to LUMS Hackathon Top 8 — decomposing chaos into clean abstractions, then collapsing them back to elegance.",
    image: skillProb,
    overlay: "neural",
  },
  {
    num: "05",
    title: "Adaptability",
    desc: "Medical Sciences → Computer Science → Artificial Intelligence. Three disciplines, one curiosity. I learn by reshaping myself.",
    image: skillAdapt,
    overlay: "morph",
  },
  {
    num: "06",
    title: "Team Collaboration",
    desc: "From hackathon teams to internship pods — I optimize for clarity, kindness and shared momentum over personal credit.",
    image: skillTeam,
    overlay: "network",
  },
];

function Overlay({ kind }: { kind: Skill["overlay"] }) {
  if (kind === "wave") {
    return (
      <div className="absolute bottom-6 left-6 right-6 flex items-end gap-[3px] h-12 opacity-90">
        {Array.from({ length: 32 }).map((_, i) => (
          <span
            key={i}
            className="flex-1 rounded-full bg-gradient-to-t from-primary to-accent animate-wave origin-bottom"
            style={{ animationDelay: `${(i % 12) * 0.08}s`, animationDuration: `${1 + (i % 4) * 0.2}s` }}
          />
        ))}
      </div>
    );
  }
  if (kind === "ui") {
    return (
      <div className="absolute top-6 right-6 glass rounded-xl px-3 py-2 text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" /> VP · Leading
      </div>
    );
  }
  if (kind === "neural") {
    return (
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 400 400">
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i}>
            <circle
              cx={50 + (i % 4) * 100}
              cy={80 + Math.floor(i / 4) * 120}
              r="3"
              fill="oklch(0.84 0.12 80)"
            >
              <animate attributeName="r" values="2;5;2" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
            </circle>
            {i < 8 && (
              <line
                x1={50 + (i % 4) * 100}
                y1={80 + Math.floor(i / 4) * 120}
                x2={50 + ((i + 1) % 4) * 100}
                y2={200 + Math.floor(i / 4) * 120}
                stroke="oklch(0.78 0.13 195 / 0.4)"
                strokeWidth="0.5"
              />
            )}
          </g>
        ))}
      </svg>
    );
  }
  if (kind === "morph") {
    return (
      <div className="absolute inset-0 mix-blend-screen">
        <div className="absolute inset-10 rounded-full border border-accent/40 animate-pulse-glow" />
        <div
          className="absolute inset-20 rounded-full border border-primary/40 animate-pulse-glow"
          style={{ animationDelay: "-1.5s" }}
        />
      </div>
    );
  }
  if (kind === "network") {
    return (
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full opacity-80">
        {[
          [100, 100, 40, 30],
          [100, 100, 160, 50],
          [100, 100, 30, 150],
          [100, 100, 170, 160],
          [100, 100, 100, 30],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="oklch(0.84 0.12 80 / 0.5)" strokeWidth="0.4" />
        ))}
      </svg>
    );
  }
  return null;
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
                Core Strengths
              </p>
              <h2 className="font-display text-5xl md:text-6xl max-w-3xl leading-[1.02]">
                The human layer beneath the <span className="text-gradient">engineering</span>.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Six qualities that shape how I think, build and lead — captured as cinematic scenes
              rather than bullet points.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <TiltCard className="group relative h-[460px] rounded-3xl overflow-hidden glass-strong ring-cinematic">
                <img
                  src={s.image}
                  alt={`${s.title} visual`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.4s] ease-cinematic opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <Overlay kind={s.overlay} />
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-1/2 bg-gradient-to-tr from-transparent via-accent/10 to-transparent"
                  animate={{ x: ["-20%", "30%"], y: ["-10%", "20%"] }}
                  transition={{ duration: 8 + i, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />

                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">{s.num} / 06</span>
                  <div>
                    <h3 className="font-display text-3xl mb-3">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 ease-cinematic">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
