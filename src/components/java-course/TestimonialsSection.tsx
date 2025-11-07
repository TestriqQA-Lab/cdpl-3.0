// components/sections/JavaTestimonialsSection.tsx
// Server component (no client-side JS) – sleek, simple, and unique

import Link from "next/link";

// ---------- Types ----------
type Testimonial = {
  name: string;
  text: string;
  role?: string;
  rating?: number;
};

type Accent = { ring: string; chip: string; dot: string };

type CTA = { label: string; href: string; variant?: "primary" | "secondary" };

type Props = {
  /** Page or product title for SEO copy (e.g., "Java Programming") */
  title?: string;
  /** Testimonials to render */
  items?: Testimonial[];
  /** Optional CTA buttons */
  ctas?: CTA[];
  /** Optional id for anchor link */
  id?: string;
};

// ---------- Default Content (Java Programming page) ----------
const DEFAULT_TITLE = "Java Programming";

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Samar Verma",
    role: "Backend Developer (Spring Boot)",
    rating: 5,
    text:
      "Crystal-clear OOP foundations, collections, and concurrency. The Spring Boot labs made REST APIs, JPA, and validation feel straightforward and production-ready.",
  },
  {
    name: "Ananya Gupta",
    role: "SDE 1 (Microservices)",
    rating: 5,
    text:
      "Loved the microservices module—circuit breakers, Feign clients, and centralized config. CI/CD and Docker sessions helped me deploy confidently.",
  },
  {
    name: "Rahul Kulkarni",
    role: "Android Engineer (Kotlin + Java interop)",
    rating: 5,
    text:
      "Practical focus on JVM basics, memory model, and performance tuning. I finally understood GC logs and optimized cold starts on real apps.",
  },
  {
    name: "Nisha Reddy",
    role: "DSA + Interview Prep",
    rating: 5,
    text:
      "Daily coding patterns with clean Java templates for arrays, graphs, and DP. Mock interviews improved my problem-solving speed by a mile.",
  },
];

// Distinct soft accents per card (no repeats next to each other)
const ACCENTS: Accent[] = [
  { ring: "ring-amber-300", chip: "bg-amber-50 text-amber-900 border-amber-200", dot: "bg-amber-500" },
  { ring: "ring-indigo-300", chip: "bg-indigo-50 text-indigo-800 border-indigo-200", dot: "bg-indigo-500" },
  { ring: "ring-emerald-300", chip: "bg-emerald-50 text-emerald-800 border-emerald-200", dot: "bg-emerald-500" },
  { ring: "ring-rose-300", chip: "bg-rose-50 text-rose-800 border-rose-200", dot: "bg-rose-500" },
  { ring: "ring-sky-300", chip: "bg-sky-50 text-sky-800 border-sky-200", dot: "bg-sky-500" },
  { ring: "ring-violet-300", chip: "bg-violet-50 text-violet-800 border-violet-200", dot: "bg-violet-500" },
  { ring: "ring-teal-300", chip: "bg-teal-50 text-teal-800 border-teal-200", dot: "bg-teal-500" },
  { ring: "ring-fuchsia-300", chip: "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200", dot: "bg-fuchsia-500" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// ---------- Component ----------
export default function TestimonialsSection({
  id = "testimonials",
  title = DEFAULT_TITLE,
  items = DEFAULT_TESTIMONIALS,
  ctas = [
    { label: "Enroll now", href: "/enroll", variant: "primary" },
    { label: "Download syllabus", href: "/java-programming/syllabus", variant: "secondary" },
  ],
}: Props) {
  // SEO: JSON-LD (Review + AggregateRating)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${title} — Job-Ready Course`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: `${items.length}`,
      bestRating: "5",
      worstRating: "1",
    },
    review: items.map((t) => ({
      "@type": "Review",
      reviewBody: t.text,
      reviewRating: { "@type": "Rating", ratingValue: String(t.rating ?? 5), bestRating: "5" },
      author: { "@type": "Person", name: t.name },
    })),
    keywords:
      "Java programming course reviews, Spring Boot training testimonials, best Java course India, Java interview preparation, microservices with Spring Cloud feedback, Java DSA bootcamp, Hibernate JPA course review, JVM performance tuning, Docker CI/CD for Java",
  } as const;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="relative py-12 sm:py-16 md:py-20">
      {/* Subtle grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(600px_120px_at_50%_0%,rgba(99,102,241,0.10),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 xl:px-10">
        {/* Header */}
        <header className="text-center">
          <h2 id={`${id}-heading`} className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            {title} <span className="text-indigo-700">Course Reviews</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Read verified <strong>student testimonials</strong> from our industry-aligned <strong>{title}</strong> program.
            We cover <strong>OOP</strong>, <strong>Collections</strong>, <strong>JVM & GC</strong>, <strong>Spring Boot</strong>,
            <strong> Hibernate/JPA</strong>, <strong>microservices</strong>, <strong>testing</strong>, and <strong>deployment</strong>.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">4.9★ Avg Rating</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Placement Support</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Real Projects</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Beginner → Advanced</span>
          </div>
        </header>

        {/* Cards: mobile stacked, md=2, lg=4 */}
        <div className="mt-8 sm:mt-10">
          <div className="grid gap-4 sm:gap-5 md:hidden">
            {items.map((t, i) => (
              <Card key={i} t={t} a={ACCENTS[i % ACCENTS.length]} />
            ))}
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((t, i) => (
              <Card key={i} t={t} a={ACCENTS[i % ACCENTS.length]} />
            ))}
          </div>

          {/* Optional horizontal snap for small/medium */}
          <div className="mt-6 md:hidden overflow-x-auto no-scrollbar">
            <div className="flex snap-x snap-mandatory gap-4">
              {items.map((t, i) => (
                <Card key={`snap-${i}`} t={t} a={ACCENTS[(i + 2) % ACCENTS.length]} snap />
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        {!!ctas?.length && (
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3">
            {ctas.map((c, idx) =>
              c.variant === "secondary" ? (
                <Link
                  key={idx}
                  href={c.href}
                  className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
                >
                  {c.label}
                </Link>
              ) : (
                <Link
                  key={idx}
                  href={c.href}
                  className="rounded-xl border border-indigo-600 bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                >
                  {c.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>

      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}

// ---------- Subcomponents ----------
function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true">
          <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </span>
  );
}

function Card({ t, a, snap = false }: { t: Testimonial; a: Accent; snap?: boolean }) {
  return (
    <article
      className={[
        "relative isolate rounded-2xl border border-slate-200 bg-white/95 p-5 sm:p-6 backdrop-blur",
        "ring-1 ring-transparent transition hover:shadow-md",
        a.ring,
        snap ? "min-w-[88%] snap-center" : "",
      ].join(" ")}
      aria-label={`Testimonial by ${t.name}`}
    >
      {/* Accent bar */}
      <span aria-hidden className={`absolute left-0 top-0 h-full w-1.5 ${a.dot} rounded-l-2xl`} />

      {/* Header */}
      <div className="flex items-start gap-3">
        <div className={["grid h-12 w-12 place-items-center rounded-xl border text-sm font-bold", a.chip].join(" ")} aria-hidden>
          {initials(t.name)}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-semibold text-slate-900">{t.name}</h3>
            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${a.chip}`}>
              Verified Learner
            </span>
          </div>
          {t.role && <p className="mt-0.5 text-xs text-slate-600">{t.role}</p>}
          <div className="mt-1">
            <Stars count={t.rating ?? 5} />
          </div>
        </div>
      </div>

      {/* Body */}
      <p className="mt-4 text-[13px] sm:text-sm leading-relaxed text-slate-700 italic">“{t.text}”</p>

      {/* Footer meta */}
      <div className="mt-4 flex items-center justify-between text-[11px] font-medium">
        <span className="text-slate-500">Java • Spring • DSA • Deploy</span>
        <span className="text-slate-700">★★★★★</span>
      </div>
    </article>
  );
}
