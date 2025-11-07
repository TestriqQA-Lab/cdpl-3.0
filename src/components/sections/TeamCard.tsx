"use client";

import { useMemo, useState, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import {
  Users2,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Search,
  Filter,
  ChevronRight,
  Linkedin,
  Mail,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";

/**
 * Cinute Digital — Our Team Page (EdTech)  
 * Framework: Next.js + TypeScript + Tailwind CSS  
 * Theme: Light, sleek, slightly futuristic  
 * Brand: #ff8c00 (applied as --brand color and utilities)  
 * SEO: keyword-rich copy + JSON-LD (Organization + ItemList + Person)  
 * Accessibility: landmarks, alt text, focus states, keyboard-friendly  
 * Responsiveness: Mobile-first, fluid grids, content-first
 *
 * How to use:
 * - Drop this file into /components and import sections inside app/(site)/our-team/page.tsx (or any page).
 * - Make sure Tailwind is configured and brand utility is available. If not, we inline CSS vars here.
 * - Replace image src with your optimized assets. Keep descriptive alt for SEO.
 */

/* ------------------------------
   Motion & Styling utilities
------------------------------ */
const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: easeBezier } as Transition,
};

const BRAND = "#ff8c00"; // Cinute Digital brand

const gradientText =
  "bg-clip-text text-transparent bg-[linear-gradient(90deg,#ff8c00,#ffb95e,#ff8c00)]";
const softRing = "ring-1 ring-slate-200/80";

/* ------------------------------
   Types
------------------------------ */
export type TeamMember = {
  id: string;
  name: string;
  title: string;
  role: "Leadership" | "Faculty" | "Advisory" | "Operations";
  expertise: string[]; // keywords for filtering
  bio: string;
  location?: string;
  avatar: string; // public image path
  linkedin?: string;
  email?: string;
  highlights?: string[]; // short bullets
};

/* ------------------------------
   Sample Data — replace with CMS or DB later
------------------------------ */
const team: TeamMember[] = [
  {
    id: "1",
    name: "Ami Khambata",
    title: "Founder & Chief Mentor",
    role: "Leadership",
    expertise: ["Software Testing", "Automation", "Career Mentorship"],
    bio: "EdTech leader with a decade of experience enabling learners to build industry-ready skills through hands-on projects and mentor-led learning.",
    location: "Mumbai, India",
    avatar: "/team/ami-khambata.jpg",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:hello@cinutedigital.com",
    highlights: ["10+ years in EdTech", "Built 1k+ careers", "ISO-aligned delivery"],
  },
  {
    id: "2",
    name: "Jayesh Patel",
    title: "Head of Programs (QA & Automation)",
    role: "Faculty",
    expertise: ["Selenium", "Playwright", "API Testing", "CI/CD"],
    bio: "Drives job-ready curriculum for Manual, Automation, and API Testing with real-world sprints and capstones.",
    location: "Pune, India",
    avatar: "/team/jayesh-patel.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "3",
    name: "Rhea Sharma",
    title: "Data Science Mentor",
    role: "Faculty",
    expertise: ["Python", "ML", "NLP", "Generative AI"],
    bio: "Mentors learners on ML fundamentals, model deployment, and prompt engineering for GenAI applications.",
    location: "Remote, India",
    avatar: "/team/rhea-sharma.jpg",
  },
  {
    id: "4",
    name: "Arun Rao",
    title: "Industry Advisor (QA Strategy)",
    role: "Advisory",
    expertise: ["QA Strategy", "Test Architecture", "Agile"],
    bio: "Advises on QA strategy, governance, and enterprise-grade testing practices to align outcomes with hiring partner expectations.",
    location: "Bengaluru, India",
    avatar: "/team/arun-rao.jpg",
  },
  {
    id: "5",
    name: "Neha Verma",
    title: "Program Operations Lead",
    role: "Operations",
    expertise: ["Student Success", "Placements", "Admissions"],
    bio: "Ensures a smooth learning journey—from enrollment to placement—with data-driven student success operations.",
    location: "Mumbai, India",
    avatar: "/team/neha-verma.jpg",
  },
];

/* ------------------------------
   Reusable UI
------------------------------ */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm"
      style={{ boxShadow: "0 8px 24px -10px rgba(2,6,23,0.08)" }}
    >
      {children}
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-[11px] font-medium text-orange-700 ring-1 ring-orange-200">
      {children}
    </span>
  );
}

function TeamCard({ m }: { m: TeamMember }) {
  return (
    <motion.article
      {...fadeUp}
      className={`group relative rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md ${softRing}`}
    >
      <div className="flex items-start gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-slate-200">
          <Image
            src={m.avatar}
            alt={`${m.name} — ${m.title}`}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-slate-900">
            {m.name}
          </h3>
          <p className="text-sm text-slate-600">{m.title}</p>
          {m.location && (
            <p className="mt-0.5 text-xs text-slate-500">{m.location}</p>
          )}
          <p className="mt-3 line-clamp-3 text-sm text-slate-700">{m.bio}</p>
          {m.expertise?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {m.expertise.slice(0, 5).map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
          )}
          {(m.linkedin || m.email) && (
            <div className="mt-4 flex items-center gap-3">
              {m.linkedin && (
                <Link
                  href={m.linkedin}
                  aria-label={`Open ${m.name}'s LinkedIn profile`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Link>
              )}
              {m.email && (
                <Link
                  href={m.email}
                  aria-label={`Email ${m.name}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900"
                >
                  <Mail className="h-4 w-4" /> Email
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      {m.highlights && m.highlights.length > 0 && (
        <ul className="mt-4 grid grid-cols-1 gap-2 border-t border-slate-100 pt-4 text-xs text-slate-600 sm:grid-cols-3">
          {m.highlights.map((h) => (
            <li key={h} className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5" aria-hidden /> {h}
            </li>
          ))}
        </ul>
      )}
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-2 mx-4 h-8 rounded-3xl bg-gradient-to-b from-transparent to-orange-50/50 opacity-0 transition group-hover:opacity-100"
        aria-hidden
      />
    </motion.article>
  );
}

/* ------------------------------
   Hero Section
------------------------------ */
export function TeamHero() {
  return (
    <section
      aria-labelledby="our-team-heading"
      className="relative mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8"
      style={{
        // subtle futuristic mask edges
        WebkitMaskImage:
          "radial-gradient(1200px_200px at 50% -50px, black 40%, transparent 60%)",
      }}
    >
      <motion.div {...fadeUp} className="flex flex-wrap items-center gap-3">
        <Badge>
          <Sparkles className="h-3.5 w-3.5" />
          Future-Ready Mentors
        </Badge>
        <Badge>
          <ShieldCheck className="h-3.5 w-3.5" /> ISO-aligned Training
        </Badge>
        <Badge>
          <Users2 className="h-3.5 w-3.5" /> Industry Mentors
        </Badge>
      </motion.div>

      <motion.h1
        id="our-team-heading"
        {...fadeUp}
        transition={{ ...(fadeUp.transition as Transition), delay: 0.06 }}
        className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl ${gradientText}`}
      >
        Meet the People Behind <span style={{ color: BRAND }}>Cinute Digital</span>
      </motion.h1>
      <motion.p
        {...fadeUp}
        transition={{ ...(fadeUp.transition as Transition), delay: 0.12 }}
        className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg"
      >
        Our leadership, faculty, and advisors power career-focused education in
        <strong className="mx-1 text-slate-900">Software Testing</strong>,
        <strong className="mx-1 text-slate-900">Automation</strong>, and
        <strong className="mx-1 text-slate-900">Data Science</strong>. Mentors bring real industry projects,
        agile workflows, and interview preparation to help you land high-demand tech roles.
      </motion.p>

      <motion.div
        {...fadeUp}
        transition={{ ...(fadeUp.transition as Transition), delay: 0.18 }}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-800"
      >
        <GraduationCap className="h-4 w-4" />
        1,000+ learners mentored · Hiring partner referrals · Job-ready portfolios
      </motion.div>
    </section>
  );
}

/* ------------------------------
   Directory Section (Search + Filters)
------------------------------ */
export function TeamDirectory({ data = team }: { data?: TeamMember[] }) {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState<"All" | TeamMember["role"]>("All");
  const [skill, setSkill] = useState<string>("All");
  const id = useId();

  const skills = useMemo(() => {
    const s = new Set<string>();
    data.forEach((m) => m.expertise.forEach((e) => s.add(e)));
    return ["All", ...Array.from(s).sort((a, b) => a.localeCompare(b))];
  }, [data]);

  const roles: ("All" | TeamMember["role"])[] = [
    "All",
    "Leadership",
    "Faculty",
    "Advisory",
    "Operations",
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.filter((m) => {
      const matchesRole = role === "All" || m.role === role;
      const matchesSkill = skill === "All" || m.expertise.includes(skill);
      const matchesSearch =
        q.length === 0 ||
        [m.name, m.title, m.bio, ...m.expertise]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return matchesRole && matchesSkill && matchesSearch;
    });
  }, [data, query, role, skill]);

  return (
    <section aria-labelledby={`${id}-directory`} className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 id={`${id}-directory`} className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Our Team Directory
      </h2>

      {/* Controls */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <label className="relative">
          <span className="sr-only">Search team</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search mentors by name, skill, or role…"
            className="w-full rounded-2xl border border-slate-200 bg-white px-9 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </label>

        <label className="relative">
          <span className="inline-flex items-center gap-2 pb-1 text-xs font-medium text-slate-600">
            <Filter className="h-3.5 w-3.5" /> Role
          </span>
          <select
            aria-label="Filter by role"
            value={role}
            onChange={(e) => setRole(e.target.value as TeamMember["role"] | "All")}
            className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>

        <label className="relative">
          <span className="inline-flex items-center gap-2 pb-1 text-xs font-medium text-slate-600">
            <Filter className="h-3.5 w-3.5" /> Expertise
          </span>
          <select
            aria-label="Filter by expertise"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            {skills.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Results */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => (
          <TeamCard key={m.id} m={m} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-8 rounded-3xl border border-dashed border-slate-200 bg-white p-8 text-center text-slate-600">
          No results. Try a different keyword or filter.
        </div>
      )}
    </section>
  );
}

/* ------------------------------
   Leadership Spotlight
------------------------------ */
export function LeadershipSpotlight({ data = team }: { data?: TeamMember[] }) {
  const leaders = data.filter((m) => m.role === "Leadership");
  if (leaders.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Leadership Spotlight
        </h2>
        <Link
          href="#directory"
          className="inline-flex items-center gap-1 text-sm font-semibold text-slate-800 hover:text-slate-900"
        >
          See all mentors <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {leaders.map((m) => (
          <TeamCard key={m.id} m={m} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------
   Culture & Values band
------------------------------ */
export function CultureValuesBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 pt-2 sm:px-6 lg:px-8">
      <div className="grid items-stretch gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-slate-800" />
            <h3 className="text-base font-semibold text-slate-900">Outcomes First</h3>
          </div>
          <p className="mt-2 text-sm text-slate-700">
            We align projects, assessments, and feedback with hiring partner standards so learners graduate job-ready.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-slate-800" />
            <h3 className="text-base font-semibold text-slate-900">Evergreen Curriculum</h3>
          </div>
          <p className="mt-2 text-sm text-slate-700">
            Content is continuously refreshed—Playwright, Postman, Git, CI/CD, and GenAI—to mirror modern engineering.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Users2 className="h-5 w-5 text-slate-800" />
            <h3 className="text-base font-semibold text-slate-900">Human Mentorship</h3>
          </div>
          <p className="mt-2 text-sm text-slate-700">
            Mentor-led sessions, code reviews, and interview drills accelerate confidence and real-world readiness.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------
   Social Proof / Testimonials (short)
------------------------------ */
export function TestimonialsBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <Quote className="h-5 w-5 text-slate-800" />
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Learner stories
          </h2>
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <blockquote className="text-sm text-slate-700">
                “Cinute Digital helped me switch to Automation Testing with a solid portfolio and real interview prep.”
              </blockquote>
              <figcaption className="mt-3 text-xs text-slate-500">— Placement Success, QA Engineer</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------
   CTA Section
------------------------------ */
export function TeamCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
      <div
        className="relative overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white p-8 sm:p-10"
        style={{ boxShadow: "0 30px 80px -30px rgba(255,140,0,0.25)" }}
      >
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Learn with mentors who build careers—not just courses
          </h2>
          <p className="mt-3 text-sm text-slate-700 sm:text-base">
            Join mentor-led programs in Manual & Automation Testing, API Testing, and Data Science.
            Build a portfolio, practice interviews, and get hiring partner referrals.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-2xl bg-[--brand] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
              style={{
                backgroundColor: "var(--brand)",
                // fallback for older browsers
                // @ts-expect error -- CSS var set on wrapper below
              }}
            >
              Explore Programs <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-md"
            >
              Talk to Admissions
            </Link>
          </div>
        </div>

        {/* Glow accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,140,0,0.25), transparent)",
          }}
        />
      </div>
    </section>
  );
}

/* ------------------------------
   SEO — JSON-LD for Organization + Mentors
------------------------------ */
function JsonLdOrganization({ data = team }: { data?: TeamMember[] }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cinute Digital",
    url: "https://cinutedigital.com/",
    logo: "https://cinutedigital.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/cinute-digital/",
      "https://www.facebook.com/",
    ],
    employee: data.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.title,
      worksFor: "Cinute Digital",
      url: m.linkedin ?? "https://cinutedigital.com/mentors/",
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Prevent hydration mismatch in strict mode
      dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
    />
  );
}

/* ------------------------------
   Page Assembler — import this in page.tsx
------------------------------ */
export default function OurTeamPage({ data = team }: { data?: TeamMember[] }) {
  return (
    <main
      className="bg-[color:var(--page-bg,white)]"
      style={{
        // expose brand as CSS variable so children can use it
        // You can also put this on <html> in app/layout.tsx once globally
        // @ts-expect-error — CSS custom prop
        "--brand": BRAND,
      }}
    >
      <TeamHero />
      <LeadershipSpotlight data={data} />
      <CultureValuesBand />
      <div id="directory">
        <TeamDirectory data={data} />
      </div>
      <TestimonialsBand />
      <TeamCTA />
      <JsonLdOrganization data={data} />
    </main>
  );
}

/* ------------------------------
   Notes
------------------------------
- Replace placeholder images in /public/team/*.jpg
- Consider moving data to a CMS or a typed data file.
- If you use shadcn/ui, swap inputs with <Input/> and <Select/>.
- Keep the site in light theme by not toggling dark classes.
*/
