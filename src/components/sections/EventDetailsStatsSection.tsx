// src/components/sections/EventDetailsStatsSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  attendees: number;
  sessions: number;
  bullets: number;
  org: string;
  fullWidth?: boolean;
};

export default function EventDetailsStatsSection({
  attendees,
  sessions,
  bullets,
  org,
  fullWidth = false,
}: Props) {
  const wrap = fullWidth ? "max-w-none px-0" : "max-w-7xl px-4 sm:px-6 lg:px-8";

  return (
    <section className="w-full mb-0 text-neutral-900">
      <div className={`mx-auto ${wrap}`}>
        <div className="grid gap-4 md:grid-cols-4">
          <Stat label="Participants" value={attendees} suffix="+" tint="orange" />
          <Stat label="Sessions" value={sessions} tint="sky" />
          <Stat label="Key Points" value={bullets} tint="violet" />
          <StatText label="Organized by" text={org} />
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  suffix = "",
  tint = "orange",
}: {
  label: string;
  value: number;
  suffix?: string;
  tint?: "orange" | "sky" | "violet";
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const viewed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!viewed.current && entries[0].isIntersecting) {
          viewed.current = true;
          animateCount(value, 900, setN);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  const ring =
    tint === "orange" ? "ring-orange-100" : tint === "sky" ? "ring-sky-100" : "ring-violet-100";
  const grad =
    tint === "orange"
      ? "from-orange-50 to-amber-50"
      : tint === "sky"
        ? "from-sky-50 to-cyan-50"
        : "from-violet-50 to-fuchsia-50";

  return (
    <div
      ref={ref}
      className={[
        "rounded-2xl border border-black/10 bg-gradient-to-br p-5 shadow-sm ring-1",
        grad,
        ring,
      ].join(" ")}
    >
      <div className="text-3xl font-extrabold tabular-nums">
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-neutral-600">{label}</div>
    </div>
  );
}

function StatText({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm ring-1 ring-black/5">
      <div className="text-sm text-neutral-600">{label}</div>
      {/* Wrap nicely, no ellipsis; keep it compact and readable */}
      <div
        className="mt-1 text-lg font-bold leading-snug break-words"
        title={text}
      >
        {text}
      </div>
    </div>
  );
}

function animateCount(target: number, ms: number, set: (n: number) => void) {
  const start = performance.now();
  const from = 0;
  const step = (t: number) => {
    const p = Math.min(1, (t - start) / ms);
    const eased = 1 - Math.pow(1 - p, 3);
    set(Math.round(from + (target - from) * eased));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
