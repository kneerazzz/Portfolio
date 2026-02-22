"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

export default function BackgroundParticles(): React.ReactElement {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (_container: Container | undefined) => {},
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="fixed inset-0 -z-10 pointer-events-none"
      options={{
        background: { color: { value: "transparent" } },

        // Cap at 30fps — smooth enough, half the CPU cost of 60
        fpsLimit: 30,

        // Disable retina doubling — biggest single perf win on HiDPI screens
        detectRetina: false,

        // Disable smooth interpolation (extra per-frame math)
        smooth: false,

        interactivity: {
          events: {
            // Hover interactions recalculate every frame — disabled for perf
            onHover: { enable: false },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            push: { quantity: 2 },
          },
        },

        particles: {
          color: {
            value: ["#a78bfa", "#34d399", "#f472b6", "#38bdf8"],
          },

          links: {
            enable: true,
            distance: 140,
            opacity: 0.06,
            width: 1,
            color: { value: "#a78bfa" },
          },

          move: {
            enable: true,
            speed: 0.5,          // Very slow = fewer position recalcs matter visually
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            // attract disabled — O(n²) cost per frame
            attract: { enable: false },
          },

          number: {
            // Fewer particles is the #1 perf lever — 35 vs 80 is ~2× faster
            value: 35,
            density: { enable: true, area: 800 },
          },

          opacity: {
            value: { min: 0.1, max: 0.5 },
            // Static opacity animation is cheap; keep it for depth
            animation: {
              enable: true,
              speed: 0.4,
              minimumValue: 0.05,
              sync: false,
            },
          },

          shape: { type: "circle" },

          size: {
            value: { min: 1, max: 3 },
            // Disable size animation — saves per-particle recalc every frame
            animation: { enable: false },
          },

          // Shadow/glow requires canvas compositing per particle — disabled
          shadow: { enable: false },

          // Twinkle is a random per-frame check on every particle — disabled
          twinkle: { particles: { enable: false } },
        },
      }}
    />
  );
}

/*
  ─── PERFORMANCE NOTES ────────────────────────────────────────────────────────

  The biggest CPU/GPU costs in tsparticles, in order:

  1. detectRetina: true  → doubles canvas resolution on HiDPI (2× pixel fill)
  2. Particle count      → link calculation is O(n²); 35 pts ≈ 4× faster than 80
  3. Hover interactivity → distance checks run every frame for every particle
  4. shadow/blur         → canvas filter compositing per particle per frame
  5. attract             → O(n²) force calculation
  6. fpsLimit: 60        → 30fps is imperceptible on slow background motion

  If you still see lag on lower-end devices, try reducing `number.value` to 20.

  ─── COMPANION CSS ────────────────────────────────────────────────────────────

  Pair with a CSS aurora layer (zero JS cost) instead of particle glow:

    .aurora {
      position: fixed;
      inset: 0;
      z-index: -20;
      pointer-events: none;
      background:
        radial-gradient(ellipse 60% 40% at 25% 15%, rgba(167,139,250,0.10) 0%, transparent 70%),
        radial-gradient(ellipse 50% 35% at 75% 70%, rgba(52,211,153,0.07) 0%, transparent 70%),
        radial-gradient(ellipse 40% 30% at 60% 5%,  rgba(244,114,182,0.06) 0%, transparent 70%);
    }

  ──────────────────────────────────────────────────────────────────────────────
*/