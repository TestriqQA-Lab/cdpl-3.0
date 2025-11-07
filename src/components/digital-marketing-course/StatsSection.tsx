// components/sections/StatsSection.tsx
// Server component (no client/runtime JS needed)

export default function StatsSection() {
  // JSON-LD to help search engines understand the highlights
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Digital Marketing Career Highlights',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Global digital marketing market by 2028',
        item: { '@type': 'Thing', name: '$671.86 Billion (by 2028)' },
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'High-income skills to learn',
        item: { '@type': 'Thing', name: '4th Most High-Income Skill (2024)' },
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Most in-demand skills',
        item: { '@type': 'Thing', name: '#3 Most In-Demand Skill (2023 Guide)' },
      },
    ],
    keywords:
      'digital marketing course, AI marketing, marketing analytics, GA4 training, performance marketing career, SEO course Mumbai',
  };

  return (
    <section
      id="dm-stats"
      aria-labelledby="dm-stats-heading"
      className="relative py-4 md:py-10 bg-gradient-to-b from-white to-blue-50"
    >
      {/* Subtle futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="dm-stats-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Why Is <span className="text-green-700">Digital Marketing</span> a Smart Career Choice?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700">
            The field evolves fast—<strong>grow with the latest AI, analytics, and performance skills</strong>.
          </p>
        </header>

        {/* Cards */}
        <dl
          className="
            mt-10 grid gap-5 sm:gap-6
            grid-cols-1 md:grid-cols-3
            max-w-5xl mx-auto
          "
        >
          {/* Card 1 */}
          <div
            role="listitem"
            className="
              group relative rounded-2xl border p-7 sm:p-8 text-center shadow-sm
              bg-white border-orange-100
              transition
              hover:shadow-md
              focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-300
            "
          >
            {/* top accent */}
            <span
              aria-hidden
              className="
                absolute left-6 right-6 top-0 h-1.5 rounded-b-full
                bg-orange-200
                transition-all duration-300
                group-hover:left-4 group-hover:right-4 group-hover:bg-orange-300
              "
            />
            <dt className="sr-only">Market Size</dt>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-orange-600">
              $671.86&nbsp;B
            </div>
            <dd className="mt-2 text-slate-700">
              Global digital marketing market by <span className="font-medium">2028</span>
            </dd>
            <p className="mt-3 text-xs text-slate-500">
              Source trend widely cited by market research reports
            </p>
          </div>

          {/* Card 2 */}
          <div
            role="listitem"
            className="
              group relative rounded-2xl border p-7 sm:p-8 text-center shadow-sm
              bg-white border-yellow-100
              transition
              hover:shadow-md
              focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-300
            "
          >
            <span
              aria-hidden
              className="
                absolute left-6 right-6 top-0 h-1.5 rounded-b-full
                bg-yellow-200
                transition-all duration-300
                group-hover:left-4 group-hover:right-4 group-hover:bg-yellow-300
              "
            />
            <dt className="sr-only">High-Income Skill Rank</dt>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-yellow-600">
              4th Most High-Income Skill
            </div>
            <dd className="mt-2 text-slate-700">
              Recommended to learn in <span className="font-medium">2024</span> (Forbes)
            </dd>
            <p className="mt-3 text-xs text-slate-500">
              Recognition for lucrative, future-proof upskilling
            </p>
          </div>

          {/* Card 3 */}
          <div
            role="listitem"
            className="
              group relative rounded-2xl border p-7 sm:p-8 text-center shadow-sm
              bg-white border-emerald-100
              transition
              hover:shadow-md
              focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-300
            "
          >
            <span
              aria-hidden
              className="
                absolute left-6 right-6 top-0 h-1.5 rounded-b-full
                bg-emerald-200
                transition-all duration-300
                group-hover:left-4 group-hover:right-4 group-hover:bg-emerald-300
              "
            />
            <dt className="sr-only">Demand Ranking</dt>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-emerald-600">
              #3 Most In-Demand Skill
            </div>
            <dd className="mt-2 text-slate-700">
              Cited in <span className="font-medium">Michael Page Salary Guide 2023</span>
            </dd>
            <p className="mt-3 text-xs text-slate-500">
              Consistent hiring demand across industries
            </p>
          </div>
        </dl>

        {/* SEO-supportive copy */}
        <p className="mt-8 md:mt-10 text-center text-sm sm:text-base text-slate-600 max-w-4xl mx-auto">
          Build a career in <strong>AI-driven digital marketing, SEO, performance ads, GA4 analytics</strong>, and{' '}
          <strong>automation</strong>. Our master program is designed to be <em>job-ready, portfolio-first, and
          placement-focused</em>.
        </p>
      </div>

      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
