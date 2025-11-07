/* ==================== CURRICULUM (Light Theme) ==================== */
"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Clock, BookOpen, Target, Sparkles, ChevronDown, Download, ShieldCheck, Code2, NotebookPen, FlaskConical, Bug, Layers, Trophy, Brain, Pin } from "lucide-react";
import Link from "next/link";

/* ---------- Token: small color map so cards feel lively but not loud ---------- */
const ACCENTS = ["indigo", "cyan", "emerald", "amber", "rose", "violet"] as const;
type Accent = typeof ACCENTS[number];

void ACCENTS;

type Module = {
    id: string;
    weeks: string;
    title: string;
    accent: Accent;
    outcomes: string[];
    topics: string[];
    projects: string[];
    tools?: string[];
};

const MODULES: Module[] = [
    {
        id: "fundamentals",
        weeks: "Weeks 1–2",
        title: "Software Testing Fundamentals",
        accent: "indigo",
        outcomes: [
            "Understand QA role across SDLC & STLC",
            "Apply core testing principles & quality gates",
            "Map V-Model & Agile ceremonies to QA deliverables"
        ],
        topics: ["SDLC/STLC", "Testing Principles", "QA Roles", "Agile & Scrum Basics", "V-Model Overview"],
        projects: ["Mini Project: Requirement Review & Test Strategy Snapshot"],
        tools: ["Confluence", "Miro", "Google Docs"]
    },
    {
        id: "design",
        weeks: "Weeks 3–4",
        title: "Test Design Techniques",
        accent: "cyan",
        outcomes: [
            "Design robust test suites using black-box techniques",
            "Increase coverage with systematic partitioning",
            "Document reusable test scenarios with clear oracles"
        ],
        topics: ["Equivalence Partitioning", "Boundary Value Analysis", "Decision Tables", "State Transition", "Exploratory Charters"],
        projects: ["Workshop: Design a Coverage-First Test Suite for a Login & Checkout Flow"],
        tools: ["XMind", "Notion", "Excel/Sheets"]
    },
    {
        id: "cases",
        weeks: "Weeks 5–6",
        title: "Test Cases, RTM & Documentation",
        accent: "emerald",
        outcomes: [
            "Write atomic, traceable test cases linked to requirements",
            "Build a living Requirements Traceability Matrix (RTM)",
            "Prepare production-like test data safely"
        ],
        topics: ["Test Case Writing", "RTM Mapping", "Test Data Strategies", "Peer Review Process", "Versioning Basics"],
        projects: ["Capstone 1: RTM + 40 High-Quality Test Cases for a Feature Module"],
        tools: ["TestRail / Zephyr", "Google Sheets", "Git Basics"]
    },
    {
        id: "defects",
        weeks: "Weeks 7–8",
        title: "Defect Lifecycle & Collaboration",
        accent: "amber",
        outcomes: [
            "Report actionable defects with repro steps & logs",
            "Use severity/priority effectively in triage",
            "Collaborate with devs using data, not opinions"
        ],
        topics: ["Bug Life Cycle", "Jira Reporting", "Severity vs Priority", "Root Cause Hints", "Dev Handoffs"],
        projects: ["Live Lab: Create 10 Production-Grade Bug Reports from a Staging App"],
        tools: ["Jira", "Loom", "Lightshot"]
    },
    {
        id: "types",
        weeks: "Weeks 9–10",
        title: "Testing Types & Environments",
        accent: "rose",
        outcomes: [
            "Plan layered testing: Smoke → Functional → Regression → UAT",
            "Execute cross-browser & responsive checks",
            "Differentiate non-functional checks (basic performance & usability)"
        ],
        topics: ["Smoke/Regression/UAT", "Functional vs Non-Functional", "Web & Mobile Basics", "Cross-Browser/Viewport", "Accessibility Intro"],
        projects: ["Playbook: Regression Suite + Execution Report for Web App"],
        tools: ["Chrome DevTools", "Lighthouse", "BrowserStack"]
    },
    {
        id: "projects",
        weeks: "Weeks 11–12",
        title: "Projects, ISTQB & Placement Prep",
        accent: "violet",
        outcomes: [
            "Author end-to-end test plans with risk-based prioritization",
            "Attempt ISTQB mock tests confidently",
            "Present capstone projects with ROI-focused storytelling"
        ],
        topics: ["Test Planning", "ISTQB Foundation Mocks", "5 Capstone Projects", "Interview Preparation", "Portfolio & Git"],
        projects: ["Capstone 2–5: E-commerce, FinTech, Healthcare, SaaS QA Projects"],
        tools: ["GitHub", "Google Slides", "Canva"]
    }
];

/* ---------- Color Mapping System ---------- */
const COLOR_MAP: Record<Accent, {
    iconBg: string;
    cardBg: string;
    borderColor: string;
    accentBorder: string
}> = {
    indigo: {
        iconBg: "bg-indigo-600",
        cardBg: "bg-indigo-50",
        borderColor: "border-indigo-200",
        accentBorder: "border-indigo-600"
    },
    cyan: {
        iconBg: "bg-cyan-600",
        cardBg: "bg-cyan-50",
        borderColor: "border-cyan-200",
        accentBorder: "border-cyan-600"
    },
    emerald: {
        iconBg: "bg-emerald-600",
        cardBg: "bg-emerald-50",
        borderColor: "border-emerald-200",
        accentBorder: "border-emerald-600"
    },
    amber: {
        iconBg: "bg-amber-600",
        cardBg: "bg-amber-50",
        borderColor: "border-amber-200",
        accentBorder: "border-amber-600"
    },
    rose: {
        iconBg: "bg-rose-600",
        cardBg: "bg-rose-50",
        borderColor: "border-rose-200",
        accentBorder: "border-rose-600"
    },
    violet: {
        iconBg: "bg-violet-600",
        cardBg: "bg-violet-50",
        borderColor: "border-violet-200",
        accentBorder: "border-violet-600"
    }
};

/* ---------- UI Bits ---------- */
function Badge({ children }: { children: string }) {
    return (
        <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            {children}
        </span>
    );
}

function TopicPill({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-inset ring-gray-200">
            <Pin className="mr-1 h-3 w-3" aria-hidden />
            {label}
        </span>
    );
}

function AccentBar({ accent }: { accent: Accent }) {
    return <div className={COLOR_MAP[accent].accentBorder} aria-hidden />;
}

function IconFor(title: string, accent: Accent) {
    const IconComponent =
        /fundamentals/i.test(title) ? BookOpen :
            /design/i.test(title) ? Layers :
                /cases/i.test(title) ? NotebookPen :
                    /defect/i.test(title) ? Bug :
                        /types|environments/i.test(title) ? FlaskConical :
                            /projects|ISTQB/i.test(title) ? Trophy :
                                Sparkles;

    return (
        <div className={`${COLOR_MAP[accent].iconBg} p-2.5 rounded-lg`}>
            <IconComponent className="h-5 w-5 text-white" aria-hidden />
        </div>
    );
}

/* ---------- Module Card ---------- */
function CurriculumCard({ mod }: { mod: Module }) {
    const colors = COLOR_MAP[mod.accent];

    return (
        <article
            className={`group mx-auto relative rounded-2xl ${colors.cardBg} ring-1 ring-inset ${colors.borderColor} shadow-sm hover:shadow-md transition-shadow border-l-4 ${colors.accentBorder}`}
            aria-label={`${mod.weeks}: ${mod.title}`}
        >
            <AccentBar accent={mod.accent} />
            <div className="mx-auto p-2 md:p-7">
                <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-gray-900">
                        {IconFor(mod.title, mod.accent)}
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">{mod.title}</h3>
                    </div>
                    <Badge>{mod.weeks}</Badge>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                    {mod.topics.slice(0, 5).map((t) => (
                        <TopicPill key={t} label={t} />
                    ))}
                </div>

                <ul className="space-y-2 text-sm leading-6 text-gray-700">
                    {mod.outcomes.map((o) => (
                        <li key={o} className="flex items-start">
                            <CheckCircle2 className="mt-0.5 mr-2 h-4 w-4 text-emerald-600" aria-hidden />
                            <span>{o}</span>
                        </li>
                    ))}
                </ul>

                <details className="mt-4">
                    <summary className="flex cursor-pointer select-none items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-700">
                        <ChevronDown className="h-4 w-4" aria-hidden />
                        View projects & tools
                    </summary>
                    <div className="mt-3 space-y-3">
                        <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Hands-On Projects</p>
                            <ul className="mt-1 list-disc pl-5 text-sm text-gray-700">
                                {mod.projects.map((p) => (
                                    <li key={p}>{p}</li>
                                ))}
                            </ul>
                        </div>
                        {mod.tools && (
                            <div className="flex flex-wrap items-center gap-2">
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mr-1">Tools</p>
                                {mod.tools.map((tool) => (
                                    <span key={tool} className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-200">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </details>
            </div>
        </article>
    );
}

/* ---------- Main Curriculum Section ---------- */
export default function CurriculumSection() {
    const [query, setQuery] = useState("");
    const [weekFilter, setWeekFilter] = useState<string>("All");

    const filtered = useMemo(() => {
        const q = query.toLowerCase();
        return MODULES.filter((m) => {
            const hit =
                m.title.toLowerCase().includes(q) ||
                m.topics.some((t) => t.toLowerCase().includes(q)) ||
                m.outcomes.some((o) => o.toLowerCase().includes(q));
            const weekOk = weekFilter === "All" || m.weeks.includes(weekFilter);
            return hit && weekOk;
        });
    }, [query, weekFilter]);

    /* ---------- SEO: JSON-LD (Course + Program) ---------- */
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        "name": "12-Week Manual Software Testing Curriculum",
        "provider": {
            "@type": "Organization",
            "name": "Your Ed-Tech Institute"
        },
        "timeToComplete": "P12W",
        "hasCourse": MODULES.map((m) => ({
            "@type": "Course",
            "name": `${m.weeks}: ${m.title}`,
            "description": `Outcomes: ${m.outcomes.join("; ")}. Topics: ${m.topics.join(", ")}.`,
            "provider": { "@type": "Organization", "name": "Your Ed-Tech Institute" }
        }))
    };

    return (
        <section className="py-15 md:py-20 bg-white" id="curriculum" aria-label="Manual Software Testing 12-Week Curriculum">
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        12-Week Curriculum: <span className="text-blue-700">Manual Testing & ISTQB Prep</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Industry-ready, project-based learning—covering QA fundamentals, test design, defect lifecycle,
                        regression strategy, and placement-focused interview training.
                    </p>

                    {/* Trust mini-stats for credibility & SEO */}
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <Stat icon={<ShieldCheck className="h-4 w-4 text-blue-800" />} label="ISTQB-Aligned" value="Yes" />
                        <Stat icon={<Clock className="h-4 w-4 text-red-800" />} label="Duration" value="12 Weeks" />
                        <Stat icon={<Target className="h-4 w-4 text-purple-800" />} label="Capstone Projects" value="90+" />
                        <Stat icon={<Brain className="h-4 w-4 text-green-800" />} label="Interview Prep" value="Included" />
                    </div>
                </div>

                {/* Controls */}
                <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="flex-1">
                        <label htmlFor="curriculum-search" className="sr-only">Search curriculum</label>
                        <input
                            id="curriculum-search"
                            placeholder="Search topics (e.g., 'RTM', 'Boundary Value', 'Jira')"
                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            aria-label="Search curriculum topics"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <label htmlFor="week-filter" className="sr-only">Filter by week</label>
                        <select
                            id="week-filter"
                            className="rounded-xl border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={weekFilter}
                            onChange={(e) => setWeekFilter(e.target.value)}
                        >
                            <option>All</option>
                            <option>Weeks 1–2</option>
                            <option>Weeks 3–4</option>
                            <option>Weeks 5–6</option>
                            <option>Weeks 7–8</option>
                            <option>Weeks 9–10</option>
                            <option>Weeks 11–12</option>
                        </select>

                        <button
                            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            aria-label="Download detailed syllabus PDF"
                        >
                            <Download className="h-4 w-4" />
                            Download Syllabus
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                    {filtered.map((m) => (
                        <CurriculumCard key={m.id} mod={m} />
                    ))}
                </div>

                {/* Bottom CTA & SEO blurb */}
                <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Job-Ready Outcomes</h3>
                            <p className="mt-2 text-gray-700">
                                Graduate with a portfolio of <strong>capstone QA projects</strong>, a polished <strong>regression suite</strong>,
                                and <strong>ISTQB-aligned</strong> fundamentals—optimized for roles like <em>Manual QA Engineer</em>, <em>Test Analyst</em>, and <em>QA Associate</em>.
                            </p>
                        </div>
                        <Link
                            href="contact-us"
                            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <Code2 className="h-4 w-4" />
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Mini Stat ---------- */
function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm">
            <span className="text-gray-700">{icon}</span>
            <div className="text-left">
                <p className="text-[11px] uppercase tracking-wide text-gray-500">{label}</p>
                <p className="text-sm font-semibold text-gray-900">{value}</p>
            </div>
        </div>
    );
}