import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import img1 from "@/assets/soft-1.jpeg";
import img2 from "@/assets/soft-2.jpeg";
import img3 from "@/assets/soft-3.jpeg";
import img4 from "@/assets/soft-4.jpeg";

const photos = [img1, img2, img3, img4];

const skills = [
  { n: "01", e: "👥", t: "Leadership & Teamwork", p: "Elected Vice President, led multi-team hackathon sprints" },
  { n: "02", e: "🗣️", t: "Communication", p: "District & Tehsil-level debating champion" },
  { n: "03", e: "🧩", t: "Problem Solving", p: "Top 8 of 65 teams at LUMS Hackathon" },
  { n: "04", e: "🎨", t: "Creativity", p: "3rd position in National Painting Competition, Pakistan" },
  { n: "05", e: "⚡", t: "Adaptability", p: "Delivered full AI systems in 24–72 hour sprint environments" },
  { n: "06", e: "🔬", t: "Research Mindset", p: "NER research, scientific AI, enterprise cognition systems" },
  { n: "07", e: "⏱️", t: "Time Management", p: "Consistently delivers complex AI projects under deadline" },
  { n: "08", e: "📚", t: "Continuous Learning", p: "Stanford, Harvard programs + active GDG & NIC workshops" },
];

export function SoftSkills() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % photos.length), 4000);
    return () => clearInterval(id);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="soft-skills"
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Parallax background slideshow */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        {photos.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
            initial={false}
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.13 0.018 250 / 0.85) 0%, oklch(0.13 0.018 250 / 0.7) 50%, oklch(0.13 0.018 250 / 0.9) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
            Soft Skills
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white inline-block relative">
            Beyond The Code
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[3px] w-24 bg-primary rounded-full" />
          </h2>
        </div>

        <ul className="divide-y divide-white/10 border-y border-white/10">
          {skills.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -80, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 md:gap-8 py-3 md:py-4 px-2 md:px-4 transition-all duration-500 hover:bg-white/[0.03]"
            >
              <span
                className="font-display text-4xl md:text-6xl font-bold tabular-nums select-none"
                style={{ color: "oklch(0.84 0.12 80 / 0.12)" }}
              >
                {s.n}
              </span>
              <span className="text-2xl md:text-3xl">{s.e}</span>
              <span className="font-display text-xl md:text-3xl font-semibold text-white tracking-tight transition-colors duration-500 group-hover:text-glow-white">
                {s.t}
              </span>
              <span className="hidden md:block text-right text-sm md:text-[15px] italic text-accent/90 max-w-xs">
                {s.p}
              </span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
