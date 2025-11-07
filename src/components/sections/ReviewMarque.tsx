'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

/** ---------- Local data (no props) ---------- */
type Review = {
  name: string;
  date: string;
  source: 'Google' | 'Sulekha' | 'Justdial';
  text: string;
  city?: string;
  logo: { src: string; alt: string };
};

const PLATFORM = {
  Google: { title: 'Google', statLabel: 'Based on', statValue: '289 reviews', overall: 'EXCELLENT', logo: { src: '/slider_logos/google-logo.svg', alt: 'Google logo' } },
  Sulekha: { title: 'Sulekha', statLabel: 'Rating', statValue: '5.0 · 84 reviews', overall: 'EXCELLENT', logo: { src: '/slider_logos/sulekha.svg', alt: 'Sulekha logo' } },
  Justdial: { title: 'Justdial', statLabel: 'Ratings', statValue: '210 ratings', overall: 'GREAT', logo: { src: '/slider_logos/justdial.svg', alt: 'Justdial logo' } },
} as const;

const REVIEWS: Review[] = [
  // GOOGLE
  {
    name: "Prathik Singh",
    date: "2025-06-27",
    source: "Google",
    text:
      "I had the opportunity to intern at Cinute, and it has been a great learning experience... I worked on data analysis in Excel, created dashboards, and explored Power BI & Tableau. The quality of teaching is so good...",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },
  { name: "YASH", date: "2025-06-27", source: "Google", text: "—", logo: { src: "/slider_logos/google.svg", alt: "Google logo" } },
  { name: "Sujal Vaity", date: "2025-06-27", source: "Google", text: "—", logo: { src: "/slider_logos/google.svg", alt: "Google logo" } },
  {
    name: "bhumika Ankush",
    date: "2025-06-27",
    source: "Google",
    text: "The subjects taught are relevant and help prepare students for real-world challenges.",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },
  {
    name: "Vedang Mohit",
    date: "2025-06-27",
    source: "Google",
    text: "The subjects taught are relevant and help prepare students for real-world challenges.",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },
  {
    name: "Aryan Prasad",
    date: "2025-06-27",
    source: "Google",
    text: "It's a good opportunity to do course and learn coding languages... good mentors.",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },
  {
    name: "Dhruv Salvi",
    date: "2025-06-27",
    source: "Google",
    text:
      "Helped me to learn and gain a lot of knowledge and skills growth throughout, humble and good communicating staff and members.",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },
  {
    name: "Bhuvan Sharma",
    date: "2025-06-27",
    source: "Google",
    text:
      "Good information provided by the domain providers, very good at communicating and humble...",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },
  { name: "Sahil Bhaye", date: "2025-06-27", source: "Google", text: "—", logo: { src: "/slider_logos/google.svg", alt: "Google logo" } },
  {
    name: "Durgesh parab",
    date: "2025-06-27",
    source: "Google",
    text:
      "It is best company to get experience... I’m learning full-stack with highly talented staff...",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },

  // SULEKHA
  {
    name: "Aarya",
    city: "Mumbai",
    date: "06 Nov, 2024",
    source: "Sulekha",
    text:
      "Excellent Service, Extremely Professional Behavior, Most Trusted Company. Good explanation and friendly nature.",
    logo: { src: "/slider_logos/sulekha-logo.webp", alt: "Sulekha logo" },
  },
  {
    name: "Riya Rajnath Yadav",
    city: "Mumbai",
    date: "06 Nov, 2024",
    source: "Sulekha",
    text:
      "Highly Affordable Service, Extremely Professional Behavior, Most Trusted Company. The instructor teaches very well...",
    logo: { src: "/slider_logos/sulekha-logo.webp", alt: "Sulekha logo" },
  },
  {
    name: "Shital Sawant",
    city: "Mumbai",
    date: "28 Oct, 2024",
    source: "Sulekha",
    text:
      "Highly Affordable Service, Extremely Professional Behavior, Most Trusted Company. Would recommend the class to freshers & newcomers...",
    logo: { src: "/slider_logos/sulekha-logo.webp", alt: "Sulekha logo" },
  },
  {
    name: "Piyush Prasad",
    city: "Mumbai",
    date: "17 Oct, 2024",
    source: "Sulekha",
    text:
      "Tableau and Excel are excellent batches and the instructors are helpful... I recommend students to enroll in Cinute Digital.",
    logo: { src: "/slider_logos/sulekha-logo.webp", alt: "Sulekha logo" },
  },

  // JUSTDIAL
  {
    name: "Atul",
    date: "18 Nov",
    source: "Justdial",
    text:
      "EMI available, one-on-one mentoring from specialized faculty in AC classrooms. Approachable faculty and resourceful library...",
    logo: { src: "/slider_logos/justdial-logo.png", alt: "Justdial logo" },
  },
  {
    name: "User",
    date: "18 Nov",
    source: "Justdial",
    text:
      "Amazing trainers who make even tough topics easy to understand. Super approachable and always ready to help.",
    logo: { src: "/slider_logos/justdial-logo.png", alt: "Justdial logo" },
  },
  {
    name: "Aatish",
    date: "06 Nov",
    source: "Justdial",
    text:
      "Clean and highly specialized facilities. Regular evaluation ensures top-notch quality; multiple facilities cater to diverse needs.",
    logo: { src: "/slider_logos/justdial-logo.png", alt: "Justdial logo" },
  },
  {
    name: "Ami",
    date: "18 Nov",
    source: "Justdial",
    text: "Trainers were amazing.",
    logo: { src: "/slider_logos/justdial-logo.png", alt: "Justdial logo" },
  },
];

const SUMMARY_CARDS = [
  { label: 'Google Reviews', value: '289', note: 'Public reviews', logo: '/slider_logos/google.svg' },
  { label: 'Sulekha Reviews', value: '84', note: '5.0 average', logo: '/slider_logos/sulekha-logo.webp' },
  { label: 'Justdial Ratings', value: '210', note: 'Verified users', logo: '/slider_logos/justdial-logo.png' },
];

/** ---------- Component (no props) ---------- */
export default function ReviewsMarquee() {
  const [tab, setTab] = useState<keyof typeof PLATFORM>('Google');
  const filtered = useMemo(() => REVIEWS.filter((r) => r.source === tab), [tab]);
  const stat = PLATFORM[tab];
  const statLogo = filtered[0]?.logo ?? stat.logo;

  // marquee
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(80);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  const measure = () => {
    const track = trackRef.current;
    if (!track) return;
    halfWidthRef.current = track.scrollWidth / 2;
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) setSpeed(110);
      else if (window.innerWidth >= 1024) setSpeed(95);
      else if (window.innerWidth >= 640) setSpeed(85);
      else setSpeed(75);
    }
  };

  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [tab, filtered.length]);

  useEffect(() => {
    offsetRef.current = 0;
    lastTsRef.current = null;
    if (trackRef.current) trackRef.current.style.transform = `translateX(0px)`;
  }, [tab]);

  useEffect(() => {
    if (reduced) return;
    const tick = (ts: number) => {
      if (!trackRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      if (paused) {
        lastTsRef.current = ts;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - (lastTsRef.current || ts)) / 1000;
      lastTsRef.current = ts;
      offsetRef.current -= speed * dt;
      const half = halfWidthRef.current || 0;
      if (half > 0 && Math.abs(offsetRef.current) >= half) offsetRef.current += half;
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, speed, reduced]);

  return (
    <div className="w-full relative bg-gradient-to-b from-sky-50 via-white to-violet-50 dark:[color-scheme:light]">
      {/* ⬇️ Container now matches /apply: max-w-7xl px-4 py-10 sm:px-6 lg:px-8 */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Tabs + stat header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mt-1 flex items-center justify-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-2 pr-7 md:pr-3 py-1 border border-slate-200 shadow-sm">
              <Image src={statLogo.src} alt={statLogo.alt} width={18} height={18} />
              {stat.overall}
            </span>
            <span className="opacity-60">•</span>
            <span>
              {stat.statLabel} <strong className="text-slate-900">{stat.statValue}</strong>
            </span>
          </div>

          {/* Tabs */}
          <div className="mt-6 -mx-4 sm:mx-0">
            <div
              role="tablist"
              aria-label="Review platforms"
              className="
      flex justify-center gap-2 sm:gap-3
      px-4 sm:px-0 py-2
      scrollbar-none
      rounded-2xl border border-slate-200 bg-white/70 backdrop-blur shadow-md
      snap-x snap-mandatory sm:snap-none
    "
            >
              {(Object.keys(PLATFORM) as Array<keyof typeof PLATFORM>).map((p) => {
                const isActive = tab === p;

                return (
                  <button
                    key={String(p)}
                    onClick={() => setTab(p)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${String(p)}`}
                    id={`tab-${String(p)}`}
                    tabIndex={isActive ? 0 : -1}
                    aria-label={`View ${PLATFORM[p].title} reviews`}
                    className={[
                      "group relative shrink-0 snap-start",
                      "flex items-center justify-center rounded-xl",
                      "px-3 sm:px-4 py-2 sm:py-2.5",
                      "ring-1 ring-transparent transition",
                      // states
                      isActive
                        ? "bg-gradient-to-r from-blue-200 to-orange-200 text-white shadow-lg ring-sky-300/40"
                        : "bg-white/80 text-slate-700 hover:bg-slate-200/70",
                      // focus
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                    ].join(" ")}
                  >
                    {/* Logo scales a bit on larger screens without needing different width/height props */}
                    <span className="inline-flex items-center justify-center">
                      <Image
                        src={PLATFORM[p].logo.src}
                        alt={PLATFORM[p].logo.alt}
                        width={80}
                        height={68}
                        priority={p === "Google"}
                        className="md:scale-105 h-5 w-13 md:h-6 md:w-15"
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Example tab panel wrapper */}
          {/* <div id={`panel-${tab}`} role="tabpanel" aria-labelledby={`tab-${tab}`} className="mt-4"> ... </div> */}
        </div>

        {/* Marquee */}
        <div
          className="mt-8 overflow-x-auto sm:overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          {/* Mobile-friendly snap scroll fallback */}
          <div
            ref={trackRef}
            className="flex gap-4 md:gap-6 will-change-transform py-4 sm:py-5 snap-x snap-mandatory sm:snap-none"
          >
            {[...filtered, ...filtered].map((r, idx) => (
              <div
                key={`${r.source}-${r.name}-${idx}`}
                className="
          flex-none px-2 sm:px-3
          w-[88vw] sm:w-[60vw] md:w-[44vw] lg:w-[32vw] xl:w-[28vw] 2xl:w-[24vw]
          max-w-[520px] min-w-[260px]
          snap-start sm:snap-none
          transition-transform duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98]
        "
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <article
                  className="
            group relative h-full overflow-hidden rounded-3xl
            border border-slate-200 bg-white
            p-4 sm:p-6 shadow-md hover:shadow-lg
            focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
          "
                  tabIndex={0}
                  role="article"
                  aria-label={`Review by ${r.name}${r.city ? ` from ${r.city}` : ''} on ${r.source}`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-sky-400/15 to-indigo-400/10 blur-2xl"
                  />

                  <header className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 truncate">
                        {r.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                        {r.city ? `${r.city} • ` : ''}
                        {r.date} • {r.source}
                      </p>
                    </div>

                    <span
                      className="
                inline-flex items-center gap-1 rounded-full
                border border-slate-200 bg-slate-50
                px-2 py-1 text-[10px] sm:text-[11px] text-slate-600
                shrink-0
              "
                    >
                      <Image src={r.logo.src} alt={r.logo.alt} width={14} height={14} className="sm:h-4 sm:w-4" />
                      Verified
                    </span>
                  </header>

                  <p className="mt-3 text-[13px] sm:text-sm leading-6 text-slate-700 line-clamp-5">
                    {r.text}
                  </p>

                  <footer className="mt-4 text-[11px] sm:text-xs text-slate-500">
                    Trustindex verifies source on Google / platform verifies identity where applicable.
                  </footer>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom summary cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {SUMMARY_CARDS.map((b) => (
            <div key={b.label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-md">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center">
                <Image src={b.logo} alt={`${b.label} logo`} width={50} height={50} />
              </div>
              <div className="text-3xl font-extrabold tracking-tight text-slate-900">{b.value}</div>
              <div className="mt-1 text-sm font-medium text-slate-700">{b.label}</div>
              {b.note && <div className="text-xs text-slate-500 mt-1">{b.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
