import { Reveal } from "./Reveal";

const groups = [
  {
    num: "01",
    title: "Runtime Languages & Frameworks",
    scope:
      "Scope: Low-level memory optimization, concurrent backends, and asynchronous APIs.",
    items: ["C", "C++", "Python", "JavaScript", "FastAPI"],
  },
  {
    num: "02",
    title: "Language Intelligence & Inference Pipelines",
    scope:
      "Scope: Context-aware parsing, neural search architectures, and output validation.",
    items: [
      "NLP",
      "NER",
      "Text Classification",
      "Information Extraction",
      "LLM Integration",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Verification Layer Design",
    ],
  },
  {
    num: "03",
    title: "Agentic Architectures & Workflow Orchestration",
    scope:
      "Scope: Stateful autonomous execution, distributed logic, and deterministic flows.",
    items: [
      "Multi-Agent Systems",
      "Agentic AI",
      "Workflow Orchestration",
      "AI System Design",
      "Procedural Reasoning",
      "Temporal Reasoning",
    ],
  },
  {
    num: "04",
    title: "Data, Deployment & Ecosystem",
    scope:
      "Scope: Relational storage, containerization, local LLM hosting, and CI/CD pipelines.",
    items: [
      "PostgreSQL",
      "Docker",
      "GCP",
      "Ollama",
      "n8n",
      "Git/GitHub",
      "Vercel",
      "Netlify",
      "Lovable",
      "Cursor",
      "VS Code",
      "Figma",
      "Notion",
    ],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl mb-24">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
              Technical Stack
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.02]">
              Technical Skills{" "}
              <span className="text-gradient">& Frameworks</span>.
            </h2>
          </div>
        </Reveal>

        <div className="relative divide-y divide-border/40 border-y border-border/40">
          {groups.map((g, i) => (
            <Reveal key={g.num} delay={i * 0.06}>
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 py-12 md:py-16 group/row">
                <div className="md:col-span-4 space-y-3">
                  <div className="font-mono text-[11px] tracking-[0.4em] text-accent">
                    {g.num} /
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl leading-[1.15] text-foreground/95">
                    {g.title}
                  </h3>
                  <p className="text-xs md:text-[13px] text-muted-foreground/70 leading-relaxed max-w-sm italic">
                    {g.scope}
                  </p>
                </div>

                <div className="md:col-span-8 flex items-start">
                  <p className="text-base md:text-lg leading-[2] tracking-wide text-muted-foreground/80">
                    {g.items.map((item, idx) => (
                      <span key={item}>
                        <span className="skill-token cursor-default transition-colors duration-300 hover:text-foreground">
                          {item}
                        </span>
                        {idx < g.items.length - 1 && (
                          <span className="mx-3 text-border select-none">·</span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
