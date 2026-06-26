import { Reveal } from "./Reveal";

const honors = [
  { y: "2025", t: "LUMS Hackathon Finalist", s: "Top 8 of 65 teams · full-stack AI solution", c: "Hackathon" },
  { y: "2025", t: "Harvard CS50 Puzzle Day", s: "Winner · algorithmic problem-solving", c: "Competition" },
  { y: "2025", t: "Aspire Leaders Program", s: "Globally competitive leadership scholar", c: "Leadership" },
  { y: "2025", t: "Code in Place — Stanford University", s: "Selected for global CS program", c: "Program" },
  { y: "2025", t: "HEC Generative AI Hackathon (Cohort-2)", s: "Built AgriAssist among 170+ teams", c: "AI" },
  { y: "2025", t: "HackNation Global Hackathon", s: "AI-based solution · international competition", c: "Hackathon" },
  { y: "2025", t: "FAST Softtech Hackathon", s: "Industry-level software engineering exposure", c: "Hackathon" },
  { y: "2024", t: "lablab.ai — NovaAI Trading Agent", s: "Volunteer · agentic AI workflow design", c: "AI" },
  { y: "2023", t: "Vice President — School Leadership", s: "Elected leadership & coordination", c: "Leadership" },
  { y: "2023", t: "National Painting Competition", s: "3rd Position · Pakistan", c: "Art" },
  { y: "2022", t: "District & Tehsil Debating Competitions", s: "Winner · communication & argumentation", c: "Voice" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl mb-20">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
              Achievements & Recognition
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.02]">
              Moments where the work was <span className="text-gradient">recognized</span>.
            </h2>
          </div>
        </Reveal>

        <ul className="divide-y divide-border/60 border-y border-border/60">
          {honors.map((h, i) => (
            <Reveal key={h.t} delay={(i % 4) * 0.04}>
              <li className="group relative grid grid-cols-12 gap-6 py-8 md:py-10 items-baseline cursor-default">
                <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground tracking-widest">
                  {h.y}
                </span>
                <div className="col-span-10 md:col-span-7">
                  <h3 className="font-display text-2xl md:text-4xl leading-tight group-hover:text-gradient transition-all duration-700">
                    {h.t}
                  </h3>
                </div>
                <span className="col-span-7 md:col-span-3 text-sm md:text-base text-muted-foreground md:text-right">
                  {h.s}
                </span>
                <span className="col-span-5 md:col-span-1 text-[10px] uppercase tracking-[0.25em] text-accent md:text-right">
                  {h.c}
                </span>
                {/* underline sweep */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent via-primary to-rose group-hover:w-full transition-[width] duration-[1.2s] ease-cinematic"
                />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
