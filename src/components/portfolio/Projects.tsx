import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import imgFood from "@/assets/proj-food.jpeg";
import imgCiro from "@/assets/proj-ciro.png";
import imgAgri from "@/assets/proj-agri.png";
import imgResume from "@/assets/proj-resume.png";
import imgSpectra from "@/assets/proj-spectra.png";
import imgOllama from "@/assets/proj-ollama.png";
import imgNexp from "@/assets/proj-nexp.png";
import imgNova from "@/assets/proj-nova.png";

type Status = "live" | "github" | "experimental" | "progress";

type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  image?: string;
  emoji?: string;
  status: Status;
  feature: boolean;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "CIRO Lahore — Crisis Intelligence & Response Orchestrator",
    tag: "Multi-Agent AI · 3-Day Build",
    description:
      "A 5-agent AI system that detects urban crises in Lahore from Roman Urdu social signals, weather data, and traffic sensors — then autonomously executes coordinated emergency response through Google Antigravity. Built and deployed in 3 days.",
    stack: ["Google Antigravity", "FastAPI", "React Native", "GCP", "Python", "Multi-Agent AI"],
    image: imgCiro,
    status: "github",
    feature: true,
    github: "https://github.com/AlishaFatima16/ciro-lahore",
  },
  {
    title: "Inbox Copilot",
    tag: "Flagship Team Project · AI Email Intelligence",
    description:
      "An AI-powered email intelligence system that parses, classifies, and prioritizes student emails by urgency and opportunity type. Built the core NLP classification engine, designed the ranking logic for opportunity detection, and developed a student–opportunity matching system with skill-gap analysis and personalized recommendation output.",
    stack: ["Python", "NLP", "LLM", "AI Classification"],
    emoji: "📧",
    status: "github",
    feature: true,
    github: "https://github.com/ShadowFaiq/Claudians",
  },
  {
    title: "AgriAssist",
    tag: "HEC Generative AI Hackathon · 170+ Teams · 72-Hour Sprint",
    description:
      "A multimodal AI system for crop disease detection, accepting both image and text input in Urdu and English. Built a visual disease classification engine paired with a treatment and farming guidance recommendation system. Competed among 170+ teams and delivered a working prototype in a 72-hour hackathon sprint.",
    stack: ["Python", "Multimodal AI", "NLP", "Computer Vision"],
    image: imgAgri,
    status: "github",
    feature: false,
  },
  {
    title: "AI Resume Analyzer",
    tag: "Solo Project · NLP",
    description:
      "An ATS-style resume evaluation system that scores resumes against job descriptions using natural language processing. Implemented skill extraction, keyword matching, and gap identification — outputting structured, actionable improvement recommendations. Built to simulate how real Applicant Tracking Systems evaluate candidates.",
    stack: ["Python", "NLP", "ATS Scoring", "Skill Extraction"],
    image: imgResume,
    status: "github",
    feature: false,
    github: "https://github.com/AlishaFatima16/ai-resume-analyzer",
  },
  {
    title: "Spectra AI",
    tag: "In Progress",
    description:
      "A domain-specific AI system in active development, designed to analyze chemical compounds and generate structured scientific explanations. Currently focused on dataset curation, model training strategy, and building a structured reasoning pipeline for specialized scientific knowledge representation.",
    stack: ["Python", "ML", "Scientific AI", "Dataset Preparation"],
    image: imgSpectra,
    status: "progress",
    feature: false,
    github: "https://github.com/AlishaFatima16/spectra-ai",
  },
  {
    title: "Ollama LLM Chatbot",
    tag: "Solo Project · Live Demo",
    description:
      "A lightweight conversational AI assistant powered by locally-running large language models via Ollama. Built the full inference pipeline and conversational query-response system from scratch, with a focus on minimizing latency for real-time interactions — no cloud API required.",
    stack: ["Python", "Ollama", "Local LLM Inference"],
    image: imgOllama,
    status: "live",
    feature: false,
    github: "https://github.com/AlishaFatima16/ollama-chat-deployed",
    live: "https://aichatbot-llm.streamlit.app/",
  },
  {
    title: "Nexperiment",
    tag: "Deployed · Live",
    description:
      "A GPT-powered experimental web application built to explore the boundaries of prompt-driven AI behavior. Designed and deployed end-to-end — from prompt architecture to production hosting on Vercel. Iteratively improved the system through real-world testing and user feedback.",
    stack: ["GPT", "Prompt Engineering", "Vercel"],
    image: imgNexp,
    status: "live",
    feature: false,
    github: "https://github.com/AlishaFatima16/nexperiment",
    live: "https://nexperiment.vercel.app",
  },
  {
    title: "NovaAI — Autonomous Trading Agent",
    tag: "lablab.ai Global Hackathon",
    description:
      "An autonomous agentic AI system designed for adaptive trading decisions. Contributed to team coordination, agentic workflow architecture, and decision pipeline design in a global AI hackathon environment. Focused on building multi-step reasoning loops for dynamic market response.",
    stack: ["Agentic AI", "LLM", "Workflow Design"],
    image: imgNova,
    status: "github",
    feature: false,
    github: "https://github.com/ascenthurera/ai-trading-agent",
  },
  {
    title: "Online Food Ordering System",
    tag: "OOP Lab Project · Semester 2 · C++ & Qt",
    description:
      "A desktop-based food ordering system built entirely with C++ and Qt — full ownership of design and implementation. Designed a modular OOP architecture with inheritance, polymorphism, and pure virtual functions. Modeled real-world entities like MenuItem and SpecialMenuItem with dynamic pricing logic. Implemented persistent data storage via file handling (users, menu, cart, orders) with no database. Earned an A in a strictly graded lab evaluation; instructor recommended extending it into an AI-based recommendation system.",
    stack: ["C++", "Qt", "OOP", "File Handling", "GUI"],
    image: imgFood,
    status: "github",
    feature: false,
    github: "https://github.com/AlishaFatima16/OnlineFoodOrderingSystem",
  },
];

function StatusChip({ status }: { status: Status }) {
  const map: Record<Status, { label: string; dot: string }> = {
    live: { label: "Live", dot: "bg-accent" },
    github: { label: "Open Source", dot: "bg-primary" },
    experimental: { label: "Experimental", dot: "bg-rose" },
    progress: { label: "In Progress", dot: "bg-rose" },
  };
  const s = map[status];
  return (
    <div className="glass rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] flex items-center gap-2">
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot} animate-pulse-glow`} /> {s.label}
    </div>
  );
}

function Media({ p, className = "" }: { p: Project; className?: string }) {
  if (p.image) {
    return (
      <img
        src={p.image}
        alt={p.title}
        loading="lazy"
        className={`h-full w-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-[1.6s] ease-cinematic ${className}`}
      />
    );
  }
  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/15 via-background to-accent/10">
      <span className="text-[8rem] md:text-[10rem] leading-none drop-shadow-2xl">{p.emoji}</span>
    </div>
  );
}

function Links({ p }: { p: Project }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-foreground text-background hover:bg-primary transition-colors"
        >
          Live demo <span aria-hidden>↗</span>
        </a>
      )}
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full glass hover:text-primary transition-colors"
        >
          GitHub ↗
        </a>
      )}
    </div>
  );
}

function FeatureCard({ p }: { p: Project }) {
  return (
    <Reveal>
      <TiltCard className="group relative rounded-[28px] overflow-hidden glass-strong ring-cinematic">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-3 relative aspect-[16/10] md:aspect-auto overflow-hidden">
            <Media p={p} />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
            <div className="absolute top-5 left-5">
              <StatusChip status={p.status} />
            </div>
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-1/2 bg-gradient-to-tr from-transparent via-foreground/10 to-transparent"
              animate={{ x: ["-30%", "30%"] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </div>
          <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-between gap-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                {p.tag}
              </div>
              <h3 className="font-display text-3xl md:text-4xl leading-tight">{p.title}</h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono px-3 py-1 rounded-full border border-border/60 text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <Links p={p} />
            </div>
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
}

function CompactCard({ p }: { p: Project }) {
  return (
    <Reveal>
      <TiltCard className="group relative h-full rounded-3xl overflow-hidden glass-strong ring-cinematic flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Media p={p} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute top-4 left-4">
            <StatusChip status={p.status} />
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
            {p.tag}
          </div>
          <h3 className="font-display text-2xl md:text-3xl mb-3">{p.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="text-[10px] font-mono px-2 py-1 rounded border border-border/60 text-muted-foreground">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-6 pt-2">
            <Links p={p} />
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
}

export function Projects() {
  const features = projects.filter((p) => p.feature);
  const rest = projects.filter((p) => !p.feature);
  return (
    <section id="work" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
                Projects
              </p>
              <h2 className="font-display text-5xl md:text-6xl max-w-3xl leading-[1.02]">
                Systems that think, act and <span className="text-gradient">adapt</span>.
              </h2>
            </div>
            <p className="max-w-xs text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="inline-flex items-center gap-2 mr-4"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Live</span>
              <span className="inline-flex items-center gap-2 mr-4"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Open source</span>
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-rose" /> In progress</span>
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8">
          {features.map((p) => (
            <FeatureCard key={p.title} p={p} />
          ))}
          <div className="grid md:grid-cols-2 gap-8">
            {rest.map((p) => (
              <CompactCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
