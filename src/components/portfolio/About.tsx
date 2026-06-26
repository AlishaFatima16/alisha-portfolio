import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

function CountUp({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2.2, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 5, suffix: "+", label: "AI Projects Built" },
  { value: 8, prefix: "Top ", label: "LUMS Hackathon (65 teams)" },
  { value: 3, suffix: "+", label: "Hackathons Competed" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16 items-center">
        {/* LEFT — animated stat counters */}
        <div className="lg:col-span-5 space-y-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
              About
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.02]">
              AI Engineer & <span className="text-gradient">Developer</span>
            </h2>
          </Reveal>

          <div className="space-y-8 pt-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.1}>
                <div className="flex flex-col">
                  <div className="font-display text-6xl md:text-7xl shimmer-gold-teal leading-none">
                    <CountUp to={s.value} suffix={s.suffix} prefix={s.prefix} />
                  </div>
                  <div className="mt-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* RIGHT — bio */}
        <div className="lg:col-span-6 lg:col-start-7 space-y-8 text-lg leading-relaxed text-muted-foreground">
          <Reveal delay={0.05}>
            <p>
              I'm an AI undergraduate at <span className="text-foreground">UET Lahore</span> (graduating 2029),
              passionate about building intelligent systems that solve real-world problems. I specialize in
              NLP, multi-agent architectures, LLM integration, and applied machine learning. I've competed
              in international hackathons, completed programs at <span className="text-foreground">Stanford</span> and{" "}
              <span className="text-foreground">Harvard</span>, and currently intern as an AI/ML engineer at{" "}
              <span className="text-foreground">Olyxee</span>.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
