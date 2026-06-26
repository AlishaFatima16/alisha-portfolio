import { createFileRoute } from "@tanstack/react-router";
import { Atmosphere } from "@/components/portfolio/Atmosphere";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Marquee } from "@/components/portfolio/Marquee";

import { Expertise } from "@/components/portfolio/Expertise";
import { SoftSkills } from "@/components/portfolio/SoftSkills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Achievements } from "@/components/portfolio/Achievements";
import { Certificates } from "@/components/portfolio/Certificates";
import { Beyond } from "@/components/portfolio/Beyond";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alisha Fatima — AI Engineer & Developer" },
      {
        name: "description",
        content:
          "Portfolio of Alisha Fatima — AI engineer at UET Lahore building agentic systems, multi-agent orchestration, RAG pipelines and intelligent automation.",
      },
      { property: "og:title", content: "Alisha Fatima — AI Engineer & Developer" },
      {
        property: "og:description",
        content:
          "Agentic AI, multi-agent systems, RAG and automation — a cinematic portfolio for an AI engineer who paints, debates and ships.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Atmosphere />
      <Nav />
      <main>
        <Hero />
        <About />
        <Marquee />

        <Expertise />
        <SoftSkills />
        <Projects />
        <Journey />
        <Experience />
        <Achievements />
        <Certificates />
        <Beyond />
        <Contact />
      </main>
    </div>
  );
}
