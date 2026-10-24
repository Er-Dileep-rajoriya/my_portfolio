"use client";

import { useEffect, useRef, useState } from "react";

export function RoleLine({ roles }: { roles: readonly string[] }) {
  const [value, setValue] = useState(roles[0] ?? "");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || roles.length < 2) return;

    let phrase = 0;
    let count = roles[0]?.length ?? 0;
    let deleting = false;
    let timer = 0;

    const step = () => {
      const text = roles[phrase] ?? "";
      if (!deleting) {
        count += 1;
        setValue(text.slice(0, count));
        if (count >= text.length) {
          deleting = true;
          timer = window.setTimeout(step, 1400);
          return;
        }
        timer = window.setTimeout(step, 70);
        return;
      }
      count -= 1;
      setValue(text.slice(0, Math.max(count, 0)));
      if (count <= 0) {
        deleting = false;
        phrase = (phrase + 1) % roles.length;
        timer = window.setTimeout(step, 280);
        return;
      }
      timer = window.setTimeout(step, 36);
    };

    timer = window.setTimeout(step, 900);
    return () => window.clearTimeout(timer);
  }, [roles]);

  return (
    <div className="rise rise-4 flex h-7 items-center gap-2">
      <span className="text-muted">//</span>
      <span className="inline-flex h-8 items-center rounded-[14px] border border-line bg-surface/40 px-3.5 text-[14px] font-medium text-accent select-none">
        {value}
      </span>
      <span aria-hidden="true" className="hero-caret" />
    </div>
  );
}

type Point = { a: number; b: number; tube: number; size: number };

function readRgb(name: string) {
  const hex = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  const match = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!match) return "99, 102, 241";
  const value = Number.parseInt(match[1], 16);
  return `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`;
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const points: Point[] = Array.from({ length: 2400 }, () => ({
      a: Math.random() * Math.PI * 2,
      b: Math.random() * Math.PI * 2,
      tube: 0.08 + Math.random() * 0.62,
      size: Math.random() < 0.06 ? 2.4 : 1.05,
    }));
    const accent = readRgb("--accent");
    const link = readRgb("--link");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const draw = (time: number) => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      if (canvas.width !== Math.floor(width * ratio) || canvas.height !== Math.floor(height * ratio)) {
        canvas.width = Math.floor(width * ratio);
        canvas.height = Math.floor(height * ratio);
      }
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);

      const spin = reduce ? 0.4 : time * 0.00032;
      const tilt = 0.42;
      const radius = 0.95;
      const scale = Math.min(width, height) * 0.42;
      const glow = context.createRadialGradient(
        width / 2,
        height / 2,
        8,
        width / 2,
        height / 2,
        scale * 1.8,
      );
      glow.addColorStop(0, `rgba(${link}, 0.45)`);
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      const dots = points.map((point) => {
        const ring = radius + point.tube * Math.cos(point.b);
        const x = ring * Math.cos(point.a + spin);
        const y = point.tube * Math.sin(point.b);
        const z = ring * Math.sin(point.a + spin);
        return {
          x,
          y: y * Math.cos(tilt) - z * Math.sin(tilt),
          z: y * Math.sin(tilt) + z * Math.cos(tilt),
          size: point.size,
        };
      });
      dots.sort((left, right) => left.z - right.z);

      for (const dot of dots) {
        const depth = (dot.z + 2.4) / 4.6;
        context.fillStyle = `rgba(${depth > 0.55 ? link : accent}, ${0.12 + depth * 0.78})`;
        context.beginPath();
        context.arc(
          width / 2 + dot.x * scale,
          height / 2 + dot.y * scale * 0.7,
          dot.size * (0.55 + depth),
          0,
          Math.PI * 2,
        );
        context.fill();
      }

      for (let index = 0; index < 3; index += 1) {
        const angle = spin * 1.4 + (index * Math.PI * 2) / 3;
        const orbit = radius * 1.55;
        context.fillStyle = `rgba(${link}, 0.9)`;
        context.beginPath();
        context.arc(
          width / 2 + Math.cos(angle) * orbit * scale * 0.72,
          height / 2 + Math.sin(angle * 0.85) * scale * 0.22,
          3.2,
          0,
          Math.PI * 2,
        );
        context.fill();
      }
    };

    draw(0);
    if (reduce) return;
    const loop = (time: number) => {
      draw(time);
      frame = window.requestAnimationFrame(loop);
    };
    frame = window.requestAnimationFrame(loop);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return <canvas aria-hidden="true" className="block h-full w-full" ref={canvasRef} />;
}

export function ScrollCue() {
  return (
    <button
      aria-label="Scroll to projects"
      className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 cursor-pointer text-muted"
      onClick={() => {
        window.scrollBy({ top: Math.round(window.innerHeight * 0.85), behavior: "smooth" });
      }}
      type="button"
    >
      <span className="hero-bounce block md:hidden">
        <svg aria-hidden="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
      <span className="relative hidden md:block">
        <svg aria-hidden="true" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="32">
          <rect height="18" rx="5" width="10" x="7" y="3" />
          <path className="hero-wheel" d="M12 7v3" />
        </svg>
      </span>
    </button>
  );
}
