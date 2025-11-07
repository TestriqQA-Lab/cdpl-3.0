// components/sections/CurriculumSection.tsx
// Sleek, slightly futuristic curriculum with distinct non-repeating accents, SEO JSON-LD, fully responsive.

type Module = {
  num: string;
  title: string;
  outcome: string;
};

const MODULES: Module[] = [
  { num: "01", title: "Python Fundamentals & Syntax", outcome: "Write clean, efficient Python code from scratch." },
  { num: "02", title: "Data Structures & Algorithms", outcome: "Master lists, dicts, OOP, and DSA in Python." },
  { num: "03", title: "Web Development with Django", outcome: "Build full-stack web apps with Django & REST." },
  { num: "04", title: "Data Science with Pandas & NumPy", outcome: "Analyze real-world datasets and generate insights." },
  { num: "05", title: "Machine Learning with scikit-learn", outcome: "Train and evaluate ML models end-to-end." },
  { num: "06", title: "Automation & Scripting", outcome: "Automate repetitive tasks and workflows." },
  { num: "07", title: "API & Web Scraping", outcome: "Extract, clean, and persist data from APIs & websites." },
  { num: "08", title: "Database & SQL with Python", outcome: "Integrate Python with MySQL/PostgreSQL securely." },
  { num: "09", title: "Deployment & DevOps", outcome: "Containerize & deploy apps (Docker, CI/CD)." },
  { num: "10", title: "Capstone Project & Portfolio", outcome: "Build 3 industry-grade projects employers value." },
];

// Distinct soft accents (cycled without repeating back-to-back)
const ACCENTS = [
  { line: "bg-sky-300/70", chip: "bg-sky-50 text-sky-800 border-sky-200", ring: "focus:ring-sky-300" },
  { line: "bg-emerald-300/70", chip: "bg-emerald-50 text-emerald-800 border-emerald-200", ring: "focus:ring-emerald-300" },
  { line: "bg-amber-300/70", chip: "bg-amber-50 text-amber-900 border-amber-200", ring: "focus:ring-amber-300" },
  { line: "bg-violet-300/70", chip: "bg-violet-50 text-violet-800 border-violet-200", ring: "focus:ring-violet-300" },
  { line: "bg-rose-300/70", chip: "bg-rose-50 text-rose-800 border-rose-200", ring: "focus:ring-rose-300" },
  { line: "bg-indigo-300/70", chip: "bg-indigo-50 text-indigo-800 border-indigo-200", ring: "focus:ring-indigo-300" },
];

export default function CurriculumSection() {
  // SEO: JSON-LD for syllabus visibility
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Python Master Program — 10-Module Curriculum",
    description:
      "Hands-on Python syllabus covering fundamentals, DSA, Django, Data Science, Machine Learning, Automation, APIs, SQL, and DevOps with capstone projects.",
    itemListElement: MODULES.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: m.title,
        description: m.outcome,
        educationalCredentialAwarded: "Certificate (QR-verified)",
      },
    })),
    keywords:
      "python course syllabus, django curriculum, data science with python, machine learning python modules, python projects, job ready python program",
  };

  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="relative py-12 sm:py-16 md:py-20 bg-gray-50">
      {/* subtle futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.03)_1px,transparent_1px)] bg-[size:26px_26px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(20,184,166,0.10),transparent_60%)]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 xl:px-10">
        {/* Heading */}
        <header className="text-center max-w-4xl mx-auto">
          <h2 id="curriculum-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            10-Module <span className="text-FS">Python Curriculum</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A carefully sequenced, <strong>project-driven</strong> roadmap from basics to deployment — built for
            <strong> job-ready outcomes</strong>.
          </p>
        </header>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {MODULES.map((m, i) => {
            const a = ACCENTS[i % ACCENTS.length];
            return (
              <article
                key={m.num}
                className={[
                  "group relative overflow-hidden rounded-2xl border bg-white p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]",
                  "transition hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2",
                  `border-slate-200 ${a.ring}`,
                ].join(" ")}
                tabIndex={0}
                aria-label={`${m.num} — ${m.title}`}
              >
                {/* animated micro line (fills on hover only for this card) */}
                <span
                  className={[
                    "absolute left-0 top-0 h-1 w-0",
                    "transition-all duration-500 ease-out",
                    "group-hover:w-full",
                    a.line,
                  ].join(" ")}
                  aria-hidden
                />
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
                    {m.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{m.outcome}</p>

                    {/* meta chips */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span
                        className={[
                          "inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-semibold",
                          a.chip,
                        ].join(" ")}
                      >
                        Outcome-Focused
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                        Project-Driven
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                        Interview-Ready
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            className="inline-flex items-center gap-2 rounded-xl border border-slate-900 bg-slate-900 px-4 md:px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Download detailed Python curriculum"
          >
            Download Detailed Syllabus
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M3 4.5A1.5 1.5 0 014.5 3h11A1.5 1.5 0 0117 4.5v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 15.5v-11zm5 2a1 1 0 00-1 1v2H5.707a1 1 0 00-.707 1.707l4.293 4.293a1 1 0 001.414 0l4.293-4.293A1 1 0 0014.293 10H13V7.5a1 1 0 00-1-1H8z" />
            </svg>
          </button>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Includes topics, outcomes, tools, and project checklist.
          </p>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
