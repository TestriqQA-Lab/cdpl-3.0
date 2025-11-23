"use client";


import {
  Clock,
  Star,
  BadgeCheck,
  TrendingUp,
  Zap,
  ShieldCheck,
  BookOpen,
  Layers,
  Code,
  Network,
  BarChart3,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CareerSessionModal from "@/components/CareerSessionModal";

type Course = {
  slug: string;
  title: string;
  duration: string;
  originalPrice?: string;
  features: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  mode: "Online" | "Hybrid" | "Classroom";
  badge?: "Most Popular" | "New" | "Placement Prep";
  accent: string;
  icon: React.ReactNode;
};

const COURSES: Course[] = [
  {
    slug: "automation-testing-selenium-java",
    title: "Automation Testing (Selenium + Java)",
    duration: "16 Weeks",
    originalPrice: "₹39,999",
    features: [
      "Selenium WebDriver",
      "Java OOPs + Collections",
      "TestNG + Maven",
      "API + CI/CD (Jenkins, GitHub Actions)",
      "3 Industry Projects",
    ],
    level: "Intermediate",
    mode: "Online",
    badge: "Most Popular",
    accent: "indigo",
    icon: <Code className="w-6 h-6" aria-hidden="true" />,
  },
  {
    slug: "full-stack-qa-manual-automation",
    title: "Full-Stack QA (Manual + Automation)",
    duration: "20 Weeks",
    originalPrice: "₹49,999",
    features: [
      "Manual + Automation",
      "API & DB Testing",
      "Git, Jenkins, Docker basics",
      "5 Capstone Projects",
      "ISTQB + Placement Assistance",
    ],
    level: "Advanced",
    mode: "Hybrid",
    badge: "Placement Prep",
    accent: "cyan",
    icon: <Layers className="w-6 h-6" aria-hidden="true" />,
  },
  {
    slug: "api-testing-postman-restassured",
    title: "API Testing (Postman + RestAssured)",
    duration: "8 Weeks",
    originalPrice: "₹24,999",
    features: [
      "Postman Advanced",
      "RestAssured + Java",
      "JSON/XML + Auth",
      "Automation Frameworks",
      "Live API Project",
    ],
    level: "Intermediate",
    mode: "Online",
    accent: "emerald",
    icon: <Network className="w-6 h-6" aria-hidden="true" />,
  },
  {
    slug: "performance-testing-jmeter",
    title: "Performance Testing (JMeter)",
    duration: "6 Weeks",
    features: [
      "Load/Stress/Soak Testing",
      "Throughput & Latency Analysis",
      "Distributed Testing",
      "Grafana + InfluxDB Dashboards",
      "Real E-commerce Scenario",
    ],
    level: "Intermediate",
    mode: "Online",
    badge: "New",
    accent: "amber",
    icon: <BarChart3 className="w-6 h-6" aria-hidden="true" />,
  },
  {
    slug: "mobile-app-testing",
    title: "Mobile App Testing (Android + iOS)",
    duration: "8 Weeks",
    features: [
      "Appium Basics to Advanced",
      "Real Devices & Emulators",
      "Mobile Gestures & Locators",
      "Hybrid/Native App Coverage",
      "Device Lab Project",
    ],
    level: "Intermediate",
    mode: "Online",
    accent: "rose",
    icon: <Smartphone className="w-6 h-6" aria-hidden="true" />,
  },
  {
    slug: "istqb-foundation",
    title: "ISTQB® Foundation Certification Prep",
    duration: "4 Weeks",
    features: [
      "Syllabus-Aligned Modules",
      "High-Yield Question Bank",
      "Mock Exams & Explanations",
      "Exam Strategy Workshops",
      "Official-Style Patterns",
    ],
    level: "Beginner",
    mode: "Online",
    accent: "sky",
    icon: <BookOpen className="w-6 h-6" aria-hidden="true" />,
  },
];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function accentClass(accent: Course["accent"]) {
  return {
    ring: `ring-1 ring-${accent}-200`,
    border: `border border-${accent}-100`,
    topBar: `bg-${accent}-600`,
    iconBg: `bg-${accent}-600`,
    badge: `bg-${accent}-50 text-${accent}-700`,
    check: `text-${accent}-600`,
    hover: `hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)]`,
    buttonBg: `bg-${accent}-600 hover:bg-${accent}-700 focus:ring-${accent}-500`,
  };
}

const Badge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 ring-1 ring-inset ring-neutral-200">
    <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
    {label}
  </span>
);

const Feature = ({ text, accent }: { text: string; accent: Course["accent"] }) => {
  const styles = accentClass(accent);
  return (
    <li className="flex items-start gap-3">
      <ShieldCheck className={cx("mt-0.5 h-5 w-5 flex-none", styles.check)} aria-hidden="true" />
      <span className="text-sm text-neutral-700">{text}</span>
    </li>
  );
};

const CourseCard = ({ course }: { course: Course }) => {
  const a = accentClass(course.accent);
  return (
    <article
      className={cx(
        "group relative flex flex-col rounded-2xl bg-white/90 backdrop-blur p-6 shadow-sm",
        a.border,
        a.ring,
        a.hover,
        "transition-shadow"
      )}

    >
      {/* Top accent bar */}
      <div className={cx("absolute inset-x-0 -top-0.5 h-1.5 rounded-t-2xl", a.topBar)} aria-hidden="true" />

      <header className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Icon with matching dark background */}
          <div className={cx("grid place-items-center rounded-xl p-2.5", a.iconBg)}>
            <div className="text-white">{course.icon}</div>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900" itemProp="name">
            {course.title}
          </h3>
        </div>
        {course.badge && (
          <span className={cx("ml-3 hidden rounded-full px-2.5 py-1 text-xs font-medium md:inline-flex", a.badge)}>
            <SparkLine />
            {course.badge}
          </span>
        )}
      </header>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1 rounded-full bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700 ring-1 ring-inset ring-neutral-200">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          <span itemProp="timeRequired">{course.duration}</span>
        </span>
        <Badge label={course.level} />
        <Badge label={course.mode} />
      </div>

      <ul className="mb-6 space-y-2" itemProp="description">
        {course.features.map((f) => (
          <Feature key={f} text={f} accent={course.accent} />
        ))}
      </ul>

      {/* Removed Price Section */}
      <div className="mt-auto">
        <button
          className={cx(
            "inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-md font-semibold text-white",
            a.buttonBg,
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          )}
          aria-label={`View syllabus for ${course.title}`}
        >
          View Syllabus
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};

const SparkLine = () => (
  <svg className="mr-1 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 17l5-6 4 3 6-8 3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function OtherCoursesSection() {
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

  return (
    <section className="py-10 md:py-10 bg-white" id="other-courses" aria-label="Other professional software testing courses">
      {/* Invisible SEO keywords */}
      <p className="sr-only">
        Best software testing courses, automation testing with Selenium Java, full-stack QA training, API testing with
        Postman and RestAssured, performance testing JMeter, mobile app testing Appium, ISTQB Foundation certification.
        Job-ready curriculum, placement assistance, live projects.
      </p>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title block */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Explore <span className="text-blue-700">Other Courses</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Accelerate your career with industry-ready, mentor-led training. Hands-on, project-based and aligned with
            high-demand QA jobs.
          </p>

          {/* Trust strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700 ring-1 ring-emerald-200">
              <Star className="h-4 w-4" aria-hidden="true" /> 4.8/5 Learner Rating
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700 ring-1 ring-indigo-200">
              <TrendingUp className="h-4 w-4" aria-hidden="true" /> Job-Ready Curriculum
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-cyan-50 px-3 py-1 font-medium text-cyan-700 ring-1 ring-cyan-200">
              <Zap className="h-4 w-4" aria-hidden="true" /> Live Projects & Labs
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>

        {/* Value props */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-neutral-100">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-900">
              <BadgeCheck className="h-5 w-5 text-indigo-600" aria-hidden="true" /> Industry-Validated Syllabus
            </h3>
            <p className="text-neutral-700 text-sm">
              Designed with input from hiring managers to help you master **Selenium, API testing, CI/CD, JMeter, and
              Appium** with confidence.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-neutral-100">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-900">
              <ShieldCheck className="h-5 w-5 text-emerald-600" aria-hidden="true" /> Placement Assistance
            </h3>
            <p className="text-neutral-700 text-sm">
              Resume reviews, mock interviews, and referrals to **QA Analyst**, **Automation Engineer**, and **SDET**
              roles.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-neutral-100">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-900">
              <BookOpen className="h-5 w-5 text-rose-600" aria-hidden="true" /> Lifetime Learning Access
            </h3>
            <p className="text-neutral-700 text-sm">
              Get recordings, templates, and updates—stay current with **test automation frameworks** and **DevOps** trends.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm ring-1 ring-neutral-100">
          <h3 className="text-2xl font-bold text-neutral-900">
            Not sure which course fits you best?
          </h3>
          <p className="mt-2 text-neutral-700">
            Talk to a mentor for a personalized **career roadmap** based on your experience and goals.
          </p>
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="cursor-pointer mt-4 inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2"
          >
            Get Free Counselling
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
      />
    </section>
  );
}

