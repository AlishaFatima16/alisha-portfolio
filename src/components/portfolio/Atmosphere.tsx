import { useEffect, useState } from "react";

/** Background atmosphere: aurora gradients, drifting orbs, particles. */
export function Atmosphere() {
  const [particles, setParticles] = useState<{ x: number; y: number; d: number; s: number }[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: 36 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      d: 6 + Math.random() * 14,
      s: 0.4 + Math.random() * 0.8,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 noise" />
      {/* Drifting orbs */}
      <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-accent/15 blur-[120px] animate-drift" />
      <div
        className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-primary/15 blur-[140px] animate-drift"
        style={{ animationDelay: "-12s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-rose/15 blur-[150px] animate-drift"
        style={{ animationDelay: "-22s" }}
      />
      {/* Floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-foreground/40 animate-float-slow"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.d / 4}px`,
            height: `${p.d / 4}px`,
            opacity: p.s * 0.5,
            boxShadow: `0 0 ${p.d}px oklch(0.78 0.13 195 / ${p.s * 0.6})`,
            animationDelay: `${(i % 8) * -1.2}s`,
            animationDuration: `${6 + (i % 5)}s`,
          }}
        />
      ))}
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,oklch(0.09_0.02_250/0.7)_100%)]" />
    </div>
  );
}
