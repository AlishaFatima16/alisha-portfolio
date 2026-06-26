import { Reveal } from "./Reveal";

import stanford from "@/assets/cert-stanford.jpeg";
import cs50 from "@/assets/cert-cs50.jpeg";
import lums from "@/assets/cert-lums.jpeg";
import fast from "@/assets/cert-fast.jpeg";
import icode from "@/assets/cert-icode.jpeg";
import hacknation from "@/assets/cert-hacknation.jpeg";
import lablab from "@/assets/cert-lablab.jpeg";
import pyshop from "@/assets/cert-pyshop.jpeg";
import painting from "@/assets/cert-painting.jpeg";
import vicepresident from "@/assets/cert-vicepresident.jpeg";
import debate from "@/assets/cert-debate.jpeg";
import excellence from "@/assets/cert-excellence.jpeg";

const certificate = [
    {
        y: "2026",
        t: "Stanford University — Code in Place",
        s: "Completion · Python, Karel, graphics, lists & dictionaries · Diagnostic + Final Project badges",
        c: "Program",
        img: stanford,
    },
    {
        y: "2026",
        t: "Harvard CS50x Puzzle Day",
        s: "Participation · collaborative algorithmic problem-solving with teammates worldwide",
        c: "Competition",
        img: cs50,
    },
    {
        y: "2025",
        t: "LUMS PSIFI XVII",
        s: "Participation · SPADES & LUMS Co-Curricular Activities Office",
        c: "Hackathon",
        img: lums,
    },
    {
        y: "2026",
        t: "FAST SOFTEC'26 — AI Hackathon",
        s: "Participation · AI Hackathon · Legacy Meets Tomorrow · FAST National University",
        c: "Hackathon",
        img: fast,
    },
    {
        y: "2025",
        t: "iCode Guru — Latest Trends in Technology",
        s: "Appreciation · Sep 1 – Oct 10, 2025 · UET Lahore & MEPS Group",
        c: "Program",
        img: icode,
    },
    {
        y: "2026",
        t: "5th Hack-Nation Global Hackathon",
        s: "Outstanding Participation · international AI competition · Apr 27, 2026",
        c: "Hackathon",
        img: hacknation,
    },
    {
        y: "2026",
        t: "lablab.ai — AI Trading Agents",
        s: "Completion · built ChatGPT-based trading solution · Mar 30 – Apr 12, 2026",
        c: "AI",
        img: lablab,
    },
    {
        y: "2025",
        t: "IEEE UET CS Chapter — PhShop",
        s: "Participation · exceptional performance and dedication · IEEE CS Chapter",
        c: "Competition",
        img: pyshop,
    },
    {
        y: "2023",
        t: "National Painting Competition — 3rd Position",
        s: "Winner · Signature Stationery nationwide competition · exceptional artistic achievement",
        c: "Art",
        img: painting,
    },
    {
        y: "2022",
        t: "Vice President Service Award",
        s: "Elected VP · Govt. Girls Hassan Model High School Khanewak · academic year 2021–2022",
        c: "Leadership",
        img: vicepresident,
    },
    {
        y: "2020",
        t: "District-Level Debating — 2nd Position",
        s: "Excellence in Debating · District Level · outstanding performance · May 13, 2020",
        c: "Voice",
        img: debate,
    },
    {
        y: "2022",
        t: "Certificate of Excellence",
        s: "Govt. Girls High School · inter-school competitions in painting, debating & co-curricular activities",
        c: "Excellence",
        img: excellence,
    },
];

export function Certificates() {
    return (
        <section id="certificates" className="relative py-32 md:py-44">
            <div className="mx-auto max-w-7xl px-6">
                <Reveal>
                    <div className="max-w-3xl mb-20">
                        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
                            Certifications & Awards
                        </p>
                        <h2 className="font-display text-5xl md:text-6xl leading-[1.02]">
                            Skills backed by <span className="text-gradient">proof</span>.
                        </h2>
                    </div>
                </Reveal>

                <ul className="divide-y divide-border/60 border-y border-border/60">
                    {certificate.map((c, i) => (
                        <Reveal key={c.t} delay={(i % 4) * 0.04}>
                            <li className="group relative grid grid-cols-12 gap-6 py-8 md:py-10 items-center cursor-default">
                                <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground tracking-widest">
                                    {c.y}
                                </span>
                                <div className="col-span-10 md:col-span-6">
                                    <h3 className="font-display text-xl md:text-3xl leading-tight group-hover:text-gradient transition-all duration-700">
                                        {c.t}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.s}</p>
                                </div>
                                <span className="hidden md:block col-span-2 text-[10px] uppercase tracking-[0.25em] text-accent text-right">
                                    {c.c}
                                </span>
                                <div className="hidden md:flex col-span-3 justify-end">
                                    <a href={c.img} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={c.img}
                                            alt={c.t}
                                            className="h-16 w-24 object-cover rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-border/60 hover:ring-accent"
                                        />
                                    </a>
                                </div>
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