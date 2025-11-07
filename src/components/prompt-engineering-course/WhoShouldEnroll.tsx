// components/sections/WhoShouldEnroll.tsx
// Server component — clean, modern audience section with subtle futuristic accents + SEO (Prompt Engineering edition).

type Persona = {
  title: string;
  blurb: string;
  bullets: string[];
  accent: {
    bar: string;     // top bar
    border: string;  // card border
    text: string;    // accent text
    ring: string;    // focus ring
    chip: string;    // chip bg
  };
};

const PERSONAS: Persona[] = [
  {
    title: "Beginners Interested in AI",
    blurb:
      "Start from the fundamentals of LLMs, prompt patterns, and safe usage—no prior experience required.",
    bullets: ["Zero-to-one learning path", "Mentor-led practice & feedback"],
    accent: {
      bar: "bg-emerald-500",
      border: "border-emerald-200",
      text: "text-emerald-700",
      ring: "focus:ring-emerald-300",
      chip: "bg-emerald-50",
    },
  },
  {
    title: "Professionals in Content & Marketing",
    blurb:
      "Automate briefs, drafts, and repurposing with on-brand voice, tone control, and approval-ready outputs.",
    bullets: ["Brand voice locks", "SEO & readability tooling"],
    accent: {
      bar: "bg-sky-500",
      border: "border-sky-200",
      text: "text-sky-700",
      ring: "focus:ring-sky-300",
      chip: "bg-sky-50",
    },
  },
  {
    title: "Developers & Engineers",
    blurb:
      "Enhance coding workflows with tool-use prompts, structured outputs, and evaluation for reliability.",
    bullets: ["Spec → Code prompting", "JSON schema outputs & tests"],
    accent: {
      bar: "bg-violet-500",
      border: "border-violet-200",
      text: "text-violet-700",
      ring: "focus:ring-violet-300",
      chip: "bg-violet-50",
    },
  },
  {
    title: "Career Switchers to AI",
    blurb:
      "Build a recruiter-ready portfolio with real projects in chat, RAG, and automation—plus job assistance.",
    bullets: ["Interview prep & ATS resume", "Portfolio reviews"],
    accent: {
      bar: "bg-amber-500",
      border: "border-amber-200",
      text: "text-amber-700",
      ring: "focus:ring-amber-300",
      chip: "bg-amber-50",
    },
  },
];

export default function WhoShouldEnroll() {
  const seoKeywords =
    "who should enroll prompt engineering course, generative ai training audience, content marketing ai automation, developer llm prompting, career switch to ai, structured outputs json, rag evaluation guardrails";

  // JSON-LD Audience list for richer snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Who Should Enroll — Prompt Engineering with Gen AI",
    itemListElement: PERSONAS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Audience",
        audienceType: p.title,
        description: p.blurb,
        keywords:
          "prompt engineering audience, beginners, content marketing professionals, developers engineers, career switchers",
      },
    })),
  };

  return (
    <section
      id="who-should-enroll"
      aria-labelledby="wse-heading"
      className="relative py-8 md:py-14 bg-white"
    >
      {/* Subtle futuristic backdrop: fine grid + soft emerald/blue glow (no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="wse-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Who Is This <span className="text-DS">Course For</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Master <strong>Prompt Engineering</strong> to produce reliable, on-spec outputs for{" "}
            <strong>content</strong>, <strong>code</strong>, and <strong>automation</strong> use-cases with{" "}
            <strong>guardrails</strong> and <strong>LLM evaluation</strong>.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Cards */}
        <div
          role="list"
          aria-label="Who should enroll list"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {PERSONAS.map((p) => {
            const id = p.title.replace(/\s+/g, "-").toLowerCase();
            return (
              <article
                key={p.title}
                role="listitem"
                aria-labelledby={id}
                tabIndex={0}
                className={[
                  "group relative rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5",
                  p.accent.border,
                  "focus:outline-none focus:ring-2",
                  p.accent.ring,
                ].join(" ")}
              >
                {/* top accent bar */}
                <div
                  className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", p.accent.bar].join(" ")}
                  aria-hidden
                />

                <h3 id={id} className="text-lg md:text-xl font-bold text-slate-900">
                  <span className={p.accent.text}># </span>
                  {p.title}
                </h3>

                <p className="mt-2 text-sm md:text-base text-slate-700">{p.blurb}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className={["mt-1 inline-block h-1.5 w-1.5 rounded-full", p.accent.bar].join(" ")}
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* emphasis row */}
                <div className="mt-5 flex items-center justify-between">
                  <span
                    className={["text-xs font-semibold uppercase tracking-wide", p.accent.text].join(" ")}
                  >
                    Beginner-Friendly • Job-Ready
                  </span>
                  <span
                    className={[
                      "text-sm opacity-0 translate-x-1 transition-all duration-200",
                      "group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0",
                      p.accent.text,
                    ].join(" ")}
                  >
                    Learn more →
                  </span>
                </div>

                {/* micro-interaction underline */}
                <div className="mt-4 h-1 w-full rounded-full bg-slate-100" aria-hidden>
                  <div
                    className={[
                      "h-1 w-1/2 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out",
                      p.accent.bar,
                      "group-hover:scale-x-100 group-focus-visible:scale-x-100",
                    ].join(" ")}
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Ideal for <strong>beginners</strong>, <strong>content & marketing pros</strong>,{" "}
            <strong>developers</strong>, and <strong>career switchers</strong> targeting roles like{" "}
            <strong>Prompt Engineer</strong>, <strong>AI Automations Specialist</strong>, and{" "}
            <strong>Applied AI</strong>.
          </p>
          <p className="mt-2 text-[11px] text-slate-500">*Learning paths adapt by background and pace.</p>
        </div>
      </div>

      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
