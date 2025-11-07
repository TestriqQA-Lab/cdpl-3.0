// components/sections/CurriculumSection.tsx
// Sleek, responsive, SEO-friendly curriculum section with subtle futuristic accents.
// No repeated colors, minimal (non-distracting) visual flourishes, fully self-contained.

"use client";

import {
  BookOpenCheck,
  Database,
  Atom,
  LayoutTemplate,
  Boxes,
  Layers3,
  Network,
  Dock,
  Cloud,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type Module = {
  num: string;
  title: string;
  outcome: string;
  icon: React.ComponentType<{ className?: string }>;
  bg: string; // unique background color per card (no repeats)
  text: string;
  ring: string;
  badge: string;
};

const MODULES: Module[] = [
  {
    num: "01",
    title: "Core Java & OOP Concepts",
    outcome: "Master Java syntax, OOP, Collections, Generics, Streams & error handling.",
    icon: BookOpenCheck,
    bg: "bg-sky-50",
    text: "text-sky-900",
    ring: "ring-sky-200",
    badge: "Foundation",
  },
  {
    num: "02",
    title: "Advanced Java & JDBC",
    outcome: "Build database-driven apps with JDBC, connection pooling & transactions.",
    icon: Database,
    bg: "bg-amber-50",
    text: "text-amber-900",
    ring: "ring-amber-200",
    badge: "Data Access",
  },
  {
    num: "03",
    title: "Spring Framework & Spring Boot",
    outcome: "Develop REST APIs using DI, AOP, Spring Boot starters & auto-config.",
    icon: Atom,
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    ring: "ring-emerald-200",
    badge: "APIs",
  },
  {
    num: "04",
    title: "Spring MVC & Thymeleaf",
    outcome: "Create dynamic MVC web apps with validation, forms & templating.",
    icon: LayoutTemplate,
    bg: "bg-rose-50",
    text: "text-rose-900",
    ring: "ring-rose-200",
    badge: "Web UI",
  },
  {
    num: "05",
    title: "Microservices with Spring Cloud",
    outcome: "Design resilient microservices with config server, discovery & gateways.",
    icon: Boxes,
    bg: "bg-violet-50",
    text: "text-violet-900",
    ring: "ring-violet-200",
    badge: "Architecture",
  },
  {
    num: "06",
    title: "Hibernate & JPA",
    outcome: "Model entities, relationships & queries with JPA, Hibernate & caching.",
    icon: Layers3,
    bg: "bg-cyan-50",
    text: "text-cyan-900",
    ring: "ring-cyan-200",
    badge: "ORM",
  },
  {
    num: "07",
    title: "REST API & JSON",
    outcome: "Design RESTful endpoints, pagination, versioning & OpenAPI/Swagger.",
    icon: Network,
    bg: "bg-lime-50",
    text: "text-lime-900",
    ring: "ring-lime-200",
    badge: "Standards",
  },
  {
    num: "08",
    title: "Docker & Kubernetes",
    outcome: "Containerize services, write Dockerfiles & deploy to K8s clusters.",
    icon: Dock,
    bg: "bg-fuchsia-50",
    text: "text-fuchsia-900",
    ring: "ring-fuchsia-200",
    badge: "DevOps",
  },
  {
    num: "09",
    title: "AWS Cloud Deployment",
    outcome: "Deploy Java apps on AWS (EC2/ECS/RDS), logging & monitoring.",
    icon: Cloud,
    bg: "bg-teal-50",
    text: "text-teal-900",
    ring: "ring-teal-200",
    badge: "Cloud",
  },
  {
    num: "10",
    title: "Capstone Project & Portfolio",
    outcome: "Build 3 enterprise-grade apps with CI/CD, reviews & job-ready docs.",
    icon: Briefcase,
    bg: "bg-indigo-50",
    text: "text-indigo-900",
    ring: "ring-indigo-200",
    badge: "Portfolio",
  },
];

export default function CurriculumSection() {
  const title = "10-Module Java Curriculum";
  const subtitle =
    "A job-ready Java developer path covering Core Java, Spring Boot, Microservices, Cloud, Docker & Kubernetes—designed for enterprise engineering careers.";
  const keywords =
    "Java curriculum, Spring Boot syllabus, Microservices course, REST API training, Hibernate JPA, Docker Kubernetes for Java, AWS Java deployment, Java developer portfolio";

  return (
    <section
      id="java-curriculum"
      aria-labelledby="curriculum-heading"
      className="relative py-8 md:py-14 bg-gray-50"
    >
      {/* subtle futuristic grid accent (sleek, non-intrusive) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="mx-auto h-full w-full max-w-7xl opacity-50">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,#e9e9e9_0_12px,transparent_12px_24px)]" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="curriculum-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            10-Module <span className="text-FS">Java Curriculum</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
            {subtitle}
          </p>
          {/* SEO keywords for crawlers that read visible content */}
          <p className="sr-only">{keywords}</p>
        </header>

        {/* Timeline legend (compact, improves scannability) */}
        <div className="mx-auto mt-6 flex flex-wrap max-w-4xl items-center justify-center gap-3 text-xs text-gray-600">
          <span className="inline-flex items-center gap-1"><span className="h-1 w-1 rounded-full bg-gray-900" /> Core</span>
          <span>•</span>
          <span>APIs</span>
          <span>•</span>
          <span>Architecture</span>
          <span>•</span>
          <span>DevOps & Cloud</span>
          <span>•</span>
          <span>Portfolio</span>
        </div>

        {/* Curriculum Grid */}
        <ol
          className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2"
          aria-label="Java curriculum modules"
        >
          {MODULES.map((m, i) => (
            <li key={m.num} className="relative">
              <article
                role="article"
                aria-label={`${m.num} ${m.title}`}
                className={[
                  "group relative overflow-hidden rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md",
                  "border border-white/70 backdrop-blur-sm ring-1",
                  m.bg,
                  m.ring,
                ].join(" ")}
              >
                {/* module header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-black/5 shadow-sm">
                      <m.icon className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold tracking-wider text-gray-700">
                          Module {m.num}
                        </span>
                        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-800 ring-1 ring-black/5">
                          {m.badge}
                        </span>
                      </div>
                      <h3 className="mt-1 text-lg font-bold text-gray-900 md:text-xl">
                        {m.title}
                      </h3>
                    </div>
                  </div>

                  {/* slim progress accent (sleek, non-gradient) */}
                  <div
                    className="hidden md:block h-8 w-1 rounded-full bg-white/70"
                    aria-hidden="true"
                  >
                    <div
                      className={["h-4 w-1 rounded-full", m.text.replace("text-", "bg-")].join(" ")}
                    />
                  </div>
                </div>

                {/* outcome */}
                <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
                  {m.outcome}
                </p>

                {/* footer cta */}
                <div className="mt-4 flex items-center justify-between">
                  <span className={["text-xs font-semibold", m.text].join(" ")}>
                    Outcome-Focused
                  </span>
                  <Link
                    href="contact-us"
                    className="inline-flex items-center text-sm font-semibold text-gray-900 hover:opacity-80"
                    aria-label={`See topics in Module ${m.num}`}
                  >
                    See topics
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>

              {/* lightweight timeline connector on large screens */}
              {i < MODULES.length - 1 && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-2 top-[calc(100%+0.25rem)] hidden h-4 w-px bg-gray-300/60 sm:block"
                />
              )}
            </li>
          ))}
        </ol>

        {/* Compact feature strip (SEO-rich bullets) */}
        <div className="mx-auto mt-10 max-w-6xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2">
            <Atom className="h-5 w-5 text-gray-900" />
            <h4 className="text-lg md:text-xl font-bold text-gray-900">
              What You’ll Build & Learn
            </h4>
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2 md:text-base">
            <li>Clean OOP design with SOLID principles & best practices</li>
            <li>Production-ready REST APIs with Spring Boot & OpenAPI</li>
            <li>Resilient microservices using Spring Cloud patterns</li>
            <li>JPA/Hibernate with real-world relational data modeling</li>
            <li>Containerization with Docker & orchestration on Kubernetes</li>
            <li>AWS deployments with logging, monitoring & scaling</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <Link
            href="contact-us"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            aria-label="Apply to the Java curriculum"
          >
            Apply Now
          </Link>
          <button
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            aria-label="Download full Java syllabus PDF"
          >
            Download Syllabus (PDF)
          </button>
        </div>
      </div>

      {/* Structured data for SEO (ItemList of modules) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "10-Module Java Curriculum",
            itemListElement: MODULES.map((m, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "Course",
                name: m.title,
                description: m.outcome,
                position: m.num,
              },
            })),
            numberOfItems: MODULES.length,
            keywords:
              "Java curriculum, Spring Boot syllabus, REST API, Microservices, Hibernate, JPA, Docker, Kubernetes, AWS, Java developer portfolio",
          }),
        }}
      />

      {/* Assist crawlers & screen readers */}
      <h1 className="sr-only">{title}</h1>
      <p className="sr-only">
        {subtitle}. Keywords: {keywords}.
      </p>
    </section>
  );
}
