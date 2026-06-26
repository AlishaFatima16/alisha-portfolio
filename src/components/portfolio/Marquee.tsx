const words = [
  "Agentic AI",
  "✦",
  "Multi-Agent Systems",
  "✦",
  "RAG Pipelines",
  "✦",
  "NER & Memory Graphs",
  "✦",
  "Prompt Engineering",
  "✦",
  "Workflow Automation",
  "✦",
  "Local LLMs · Ollama",
  "✦",
  "FastAPI · Cloud Run",
  "✦",
];

export function Marquee() {
  const items = [...words, ...words];
  return (
    <div className="relative border-y border-border/60 py-8 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {items.map((w, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl text-muted-foreground/60 shimmer-text"
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}
