"use client";

import { useTheme } from "@/lib/theme";

const particles = [
  { size: 3, x: "10%", y: "15%", delay: "0s", dur: "22s" },
  { size: 2, x: "25%", y: "45%", delay: "-5s", dur: "28s" },
  { size: 4, x: "70%", y: "20%", delay: "-10s", dur: "25s" },
  { size: 2, x: "85%", y: "60%", delay: "-3s", dur: "30s" },
  { size: 3, x: "50%", y: "80%", delay: "-15s", dur: "20s" },
  { size: 2, x: "35%", y: "70%", delay: "-8s", dur: "26s" },
  { size: 3, x: "90%", y: "35%", delay: "-12s", dur: "24s" },
  { size: 2, x: "15%", y: "90%", delay: "-18s", dur: "27s" },
];

export function BackgroundEffects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Ambient gradient orbs */}
      <div
        className="ambient-glow w-[600px] h-[600px] -top-60 -left-60"
        style={{
          background: isDark
            ? "rgba(201,165,92,0.06)"
            : "rgba(201,165,92,0.08)",
        }}
      />
      <div
        className="ambient-glow w-[500px] h-[500px] top-[40%] -right-48"
        style={{
          background: isDark
            ? "rgba(138,109,53,0.05)"
            : "rgba(201,165,92,0.06)",
          animationDelay: "-9s",
        }}
      />
      <div
        className="ambient-glow w-[400px] h-[400px] bottom-[20%] left-[30%]"
        style={{
          background: isDark
            ? "rgba(201,165,92,0.04)"
            : "rgba(201,165,92,0.05)",
          animationDelay: "-14s",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}
    </div>
  );
}
