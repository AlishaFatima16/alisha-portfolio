import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import paint from "@/assets/skill-creativity.jpg";
import comm from "@/assets/skill-communication.jpg";
import lead from "@/assets/skill-leadership.jpg";

const cards = [
  {
    tag: "Atelier",
    title: "The painter's eye",
    body: "3rd position in the National Painting Competition of Pakistan. The brush taught me composition long before code did.",
    image: paint,
  },
  {
    tag: "Stage",
    title: "Debate & poetry",
    body: "Years on debate floors and quiet evenings writing poetry — language, argument and rhythm are my first programming languages.",
    image: comm,
  },
  {
    tag: "Lead",
    title: "Service & mentorship",
    body: "Vice President roles, Aspire Leaders cohort, hackathon mentoring — leadership as quiet stewardship, not noise.",
    image: lead,
  },
];

export function Beyond() {
  return (
    <section id="beyond" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
              Beyond Tech
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.02]">
              The chapters that don't live on <span className="text-gradient">GitHub</span>.
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <TiltCard className="group relative h-[420px] rounded-3xl overflow-hidden glass-strong ring-cinematic">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.6s] ease-cinematic opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">{c.tag}</span>
                  <h3 className="font-display text-3xl">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}