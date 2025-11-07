import { Award, Users as UsersIcon, Code as CodeIcon } from "lucide-react";

/**
 * BenefitsSection – sleek, responsive, slightly futuristic
 * - Unique dark icon colors per card (no repeats, no heavy gradients)
 * - Gentle lift on hover, soft shadows, rounded-2xl
 * - SEO: ItemList/ListItem microdata
 * - A11y: clear labels, icons aria-hidden, focus styles
 */
export default function BenefitsSection() {
  // Card content
  const BENEFITS = [
    {
      title: "Industry Certifications",
      desc:
        "Earn recognized certificates that validate your skills, strengthen your resume, and open doors to high-growth tech roles.",
      icon: <Award className="w-6 h-6 text-white" aria-hidden />,
    },
    {
      title: "Expert Mentorship",
      desc:
        "Learn from experienced professionals with real-world projects, code reviews, and personalized guidance to stay job-ready.",
      icon: <UsersIcon className="w-6 h-6 text-white" aria-hidden />,
    },
    {
      title: "Hands-On Projects",
      desc:
        "Build a portfolio of practical, industry-aligned projects that showcase your problem-solving and boost interview success.",
      icon: <CodeIcon className="w-6 h-6 text-white" aria-hidden />,
    },
  ];

  // Rotating accents: panel/bg/border + matching text accents (no repetition)
  const ACCENTS = [
    { panel: "bg-indigo-50 border-indigo-200", chip: "bg-indigo-700", text: "text-indigo-700", dot: "bg-indigo-500" },
    { panel: "bg-emerald-50 border-emerald-200", chip: "bg-emerald-700", text: "text-emerald-700", dot: "bg-emerald-500" },
    { panel: "bg-rose-50 border-rose-200", chip: "bg-rose-700", text: "text-rose-700", dot: "bg-rose-500" },
  ];

  return (
    <section
      className="py-20 px-4 bg-white"
      aria-label="Key benefits of our learning platform"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading + concise, SEO-friendly subline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose Our Platform?
          </h2>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl mx-auto">
            Job-ready training with certification, mentor support, and real projects—built to
            accelerate your tech career and improve placement outcomes.
          </p>
          <meta itemProp="itemListOrder" content="http://schema.org/ItemListOrderAscending" />
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => {
            const a = ACCENTS[i % ACCENTS.length];
            return (
              <div
                key={b.title}
                className={[
                  "relative h-full rounded-2xl border p-6",
                  "shadow-[0_1px_0_#0000000a,_0_8px_30px_#0000000a]",
                  "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_#0000001a]",
                  a.panel,
                ].join(" ")}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(i + 1)} />

                {/* tiny status dot (subtle futuristic vibe) */}
                <span aria-hidden className={`absolute right-5 top-5 h-1.5 w-1.5 animate-ping rounded-full ${a.dot}`} />

                {/* Icon chip (dark, unique per card) */}
                <div
                  aria-hidden
                  className={`inline-flex items-center justify-center ${a.chip} h-12 w-12 rounded-xl border border-black/10 shadow-sm`}
                >
                  {b.icon}
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900" itemProp="name">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700" itemProp="description">
                  {b.desc}
                </p>

                {/* Keyword hint (visible accent, compact) */}
                <div className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold ${a.text}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                  Certification • Mentorship • Portfolio
                </div>

                {/* SR-only context for search engines/screen readers */}
                <span className="sr-only">
                  Online courses, certification, hands-on practice, interview preparation, career services.
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
