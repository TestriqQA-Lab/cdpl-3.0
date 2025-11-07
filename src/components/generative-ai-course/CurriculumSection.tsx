// components/sections/CurriculumSection.tsx
// Fix: top accent bar now ALWAYS shows.
// Reason: Tailwind won't generate classes from dynamic strings (e.g., replace "text-" -> "bg-").
// Solution: provide explicit bar color classes in the data and use them directly. Also made the bar thicker & above content.

import Link from "next/link";

type Module = {
  num: string;
  title: string;
  outcome: string;
  accent: { bg: string; text: string; border: string; ring: string; bar: string };
};

const MODULES: Module[] = [
  {
    num: "01",
    title: "Foundations of Deep Learning",
    outcome:
      "Neural nets, activation functions, backprop, initialization, regularization. Build intuition with simple MLPs.",
    accent: {
      bg: "bg-sky-50",
      text: "text-sky-900",
      border: "border-sky-200",
      ring: "focus:ring-sky-300",
      bar: "bg-sky-600", // explicit bar color
    },
  },
  {
    num: "02",
    title: "Data Preparation for AI",
    outcome:
      "Data pipelines: cleaning, tokenization, vectorization, augmentations; datasets/dataloaders; efficiency tips.",
    accent: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      border: "border-emerald-200",
      ring: "focus:ring-emerald-300",
      bar: "bg-emerald-600",
    },
  },
  {
    num: "03",
    title: "Model Development",
    outcome:
      "CNNs for vision, RNN/LSTM/GRU, attention, Transformers; training loops, schedulers, checkpoints.",
    accent: {
      bg: "bg-amber-50",
      text: "text-amber-900",
      border: "border-amber-200",
      ring: "focus:ring-amber-300",
      bar: "bg-amber-600",
    },
  },
  {
    num: "04",
    title: "Optimization & Evaluation",
    outcome:
      "Losses, metrics, hyperparameter tuning, early stopping, mixed precision, error analysis, bias & robustness checks.",
    accent: {
      bg: "bg-rose-50",
      text: "text-rose-900",
      border: "border-rose-200",
      ring: "focus:ring-rose-300",
      bar: "bg-rose-600",
    },
  },
  {
    num: "05",
    title: "Deployment & Creative Applications",
    outcome:
      "Export, ONNX/TorchScript, lightweight APIs, RAG with vector DBs, prompt engineering, safety/guardrails.",
    accent: {
      bg: "bg-indigo-50",
      text: "text-indigo-900",
      border: "border-indigo-200",
      ring: "focus:ring-indigo-300",
      bar: "bg-indigo-600",
    },
  },
];

export default function CurriculumSection() {
  
  const subtitle =
    "An industry-aligned path from deep learning foundations to deploying Transformer-based applications and GenAI workflows.";

  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="relative overflow-hidden py-6 md:py-0 lg:py-6 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="curriculum-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            5-Module <span className="text-DS">Curriculum</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-700">{subtitle}</p>
        </header>

        {/* Modules grid */}
        <ol className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2" aria-label="Program modules">
          {MODULES.map((m) => (
            <li key={m.num} className="relative">
              <article
                tabIndex={0}
                className={[
                  "group relative overflow-hidden rounded-2xl border p-5 md:p-6 shadow-sm backdrop-blur transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:-translate-y-0.5",
                  "bg-white", // ensure contrast beneath bar
                  m.accent.bg,
                  m.accent.border,
                  m.accent.ring,
                ].join(" ")}
                aria-label={`${m.num} — ${m.title}`}
                title={m.title}
              >
                {/* Top accent bar (now visible) */}
                <div
                  className={[
                    "pointer-events-none absolute left-0 top-0 z-10 h-1.5 w-full", // thicker & full width
                    m.accent.bar, // explicit class — included by Tailwind
                  ].join(" ")}
                  aria-hidden
                />

                <div className="flex items-start gap-3">
                  <div
                    className={[
                      "grid h-10 w-10 place-items-center rounded-xl border text-sm font-extrabold shadow-sm bg-white ring-1 ring-black/5",
                      m.accent.text,
                      m.accent.border,
                    ].join(" ")}
                    aria-label={`Module ${m.num}`}
                  >
                    {m.num}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">{m.title}</h3>
                    <p className="mt-1 text-sm md:text-base leading-relaxed text-slate-700">{m.outcome}</p>
                  </div>
                </div>

                {/* Footer chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-black/5">
                    Hands-On Lab
                  </span>
                  <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-black/5">
                    Best Practices
                  </span>
                  <span className={["rounded-md px-2.5 py-1 text-[11px] font-semibold ring-1 ring-black/5 text-white", m.accent.bar].join(" ")}>
                    Mentor Tips
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ol>

        {/* CTA row */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <button
            className="inline-flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Download detailed curriculum syllabus"
          >
            Download Detailed Syllabus (PDF)
          </button>
          <Link
            href="contact-us"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            aria-label="Apply for the Deep Learning • NLP • GenAI program"
          >
            Apply Now
          </Link>
        </div>

        <p className="mx-auto mt-3 max-w-3xl text-center text-[11px] text-slate-500">
          *Module order may vary based on cohort needs and instructor discretion.
        </p>
      </div>
    </section>
  );
}
