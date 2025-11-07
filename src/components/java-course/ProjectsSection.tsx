// components/sections/ProjectsSection.tsx
// Sleek, responsive, SEO-friendly projects section with subtle futuristic accents.
// Unique colors per card (no repeats), minimal/no gradients, fully self-contained.

"use client";

import {
  ShoppingCart,
  Banknote,
  Stethoscope,
  Smartphone,
  MessageSquare,
  Boxes,
  Sandwich,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type Project = {
  title: string;
  summary: string;
  stack: string[];
  icon: React.ComponentType<{ className?: string }>;
  bg: string;   // unique background
  text: string; // matching text color
  ring: string; // matching ring color
  aria: string;
};

const PROJECTS: Project[] = [
  {
    title: "E-Commerce Platform with Spring Boot",
    summary: "End-to-end cart, checkout, payments, search & admin analytics.",
    stack: ["Spring Boot", "JPA", "JWT", "MySQL", "Redis"],
    icon: ShoppingCart,
    bg: "bg-sky-50",
    text: "text-sky-900",
    ring: "ring-sky-200",
    aria: "E-Commerce Platform with Spring Boot project",
  },
  {
    title: "Banking System with Microservices",
    summary: "Accounts, ledger, KYC, transfers, and event-driven statements.",
    stack: ["Spring Cloud", "Kafka", "PostgreSQL", "Keycloak"],
    icon: Banknote,
    bg: "bg-amber-50",
    text: "text-amber-900",
    ring: "ring-amber-200",
    aria: "Banking System with Microservices project",
  },
  {
    title: "Hospital Management System",
    summary: "Appointments, EHR, pharmacy, role-based access & audit logs.",
    stack: ["Spring Boot", "Hibernate", "Flyway", "MySQL"],
    icon: Stethoscope,
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    ring: "ring-emerald-200",
    aria: "Hospital Management System project",
  },
  {
    title: "REST API for Mobile App",
    summary: "Secure, versioned APIs with OpenAPI docs & rate limiting.",
    stack: ["Spring MVC", "JWT", "OpenAPI", "MongoDB"],
    icon: Smartphone,
    bg: "bg-rose-50",
    text: "text-rose-900",
    ring: "ring-rose-200",
    aria: "REST API for Mobile App project",
  },
  {
    title: "Real-Time Chat Application",
    summary: "WebSocket channels, typing indicators & offline inbox.",
    stack: ["STOMP", "WebSocket", "Redis", "PostgreSQL"],
    icon: MessageSquare,
    bg: "bg-violet-50",
    text: "text-violet-900",
    ring: "ring-violet-200",
    aria: "Real-Time Chat Application project",
  },
  {
    title: "Inventory Management System",
    summary: "Multi-warehouse SKU tracking, alerts & demand forecasting.",
    stack: ["Spring Data", "Quartz", "MySQL", "Elasticsearch"],
    icon: Boxes,
    bg: "bg-cyan-50",
    text: "text-cyan-900",
    ring: "ring-cyan-200",
    aria: "Inventory Management System project",
  },
  {
    title: "Online Food Delivery App",
    summary: "Menu, cart, delivery slots, payments & order tracking.",
    stack: ["Spring Boot", "Stripe", "Redis", "Geo APIs"],
    icon: Sandwich,
    bg: "bg-lime-50",
    text: "text-lime-900",
    ring: "ring-lime-200",
    aria: "Online Food Delivery App project",
  },
  {
    title: "Job Portal with JPA",
    summary: "Search, filters, resume upload & recruiter dashboards.",
    stack: ["Spring Data JPA", "MySQL", "S3", "CloudFront"],
    icon: Briefcase,
    bg: "bg-fuchsia-50",
    text: "text-fuchsia-900",
    ring: "ring-fuchsia-200",
    aria: "Job Portal with JPA project",
  },
];

export default function ProjectsSection() {
  const title = "50+ Enterprise Projects";
  const subtitle =
    "Hands-on, real-world Java projects that mirror production challenges—covering Spring Boot, Microservices, REST APIs, Messaging, Security, and Cloud Deployments.";
  const keywords =
    "Java projects, Spring Boot projects, microservices portfolio, real-time chat WebSocket, e-commerce Java, banking microservices, REST API, Hibernate JPA, AWS deployment, enterprise Java applications";

  return (
    <section
      id="java-projects"
      aria-labelledby="projects-heading"
      className="relative py-8 md:py-14 bg-white"
    >
      {/* Subtle futuristic accent (no heavy gradients) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full w-full max-w-7xl opacity-50">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,#ededed_0_12px,transparent_12px_24px)]" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            50+ <span className="text-FS">Enterprise Projects</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
            {subtitle}
          </p>
          {/* SEO keywords for crawlers */}
          <p className="sr-only">{keywords}</p>
        </header>

        {/* Filters (non-functional placeholders, enhance UX scan) */}
        <div className="mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-2 text-xs text-gray-700">
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold">Spring Boot</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold">Microservices</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold">REST API</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold">Security</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold">Cloud</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold">DevOps</span>
        </div>

        {/* Projects Grid */}
        <div
          className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2"
          role="list"
          aria-label="Featured enterprise projects"
        >
          {PROJECTS.map((p, i) => (
            <article
              key={i}
              role="listitem"
              aria-label={p.aria}
              className={[
                "group rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-200",
                "hover:-translate-y-0.5 hover:shadow-md",
                "border border-white/70 backdrop-blur-sm ring-1",
                p.bg,
                p.ring,
              ].join(" ")}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-black/5 shadow-sm">
                  <p.icon className="h-6 w-6 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-700">
                    {p.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-800 ring-1 ring-black/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* slim progress bar accent (sleek, not gradient) */}
              <div className="mt-4 h-1 w-full rounded-full bg-white/70" aria-hidden="true">
                <div
                  className={["h-1 rounded-full", p.text.replace("text-", "bg-")].join(" ")}
                  style={{ width: ["85%", "78%", "70%", "76%", "68%", "72%", "74%", "80%"][i] }}
                />
              </div>

              {/* footer CTA */}
              <div className="mt-4 flex items-center justify-between">
                <span className={["text-xs font-semibold", p.text].join(" ")}>
                  Real-world, portfolio-ready
                </span>
                <Link
                  href="contact-us"
                  className="inline-flex items-center text-sm font-semibold text-gray-900 hover:opacity-80"
                  aria-label={`See more about ${p.title}`}
                >
                  See details
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* SEO-rich supporting bullets */}
        <div className="mx-auto mt-10 max-w-6xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h4 className="text-lg md:text-xl font-bold text-gray-900">What these projects teach</h4>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2 md:text-base">
            <li>Domain-driven design, clean architecture & SOLID principles</li>
            <li>Authentication & authorization with JWT/OAuth2 and role policies</li>
            <li>Observability: logging, metrics, tracing & health probes</li>
            <li>Async messaging with Kafka/WebSockets for real-time features</li>
            <li>CI/CD pipelines, Dockerization & Kubernetes deployment basics</li>
            <li>SQL/NoSQL data modeling, indexing & performance tuning</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <button
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            View Sample Portfolios
          </button>
          <Link
            href="contact-us"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
          >
            Explore Git Repos
          </Link>
        </div>
      </div>

      {/* Structured data for SEO (ItemList of projects) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Enterprise Java Project Portfolio",
            itemListElement: PROJECTS.map((p, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "SoftwareApplication",
                name: p.title,
                applicationCategory: "BusinessApplication",
                description: p.summary,
                operatingSystem: "Cross-platform",
                programmingLanguage: "Java",
                keywords:
                  "Java, Spring Boot, Microservices, REST API, Hibernate, JPA, Kafka, WebSocket, Docker, AWS",
              },
            })),
            numberOfItems: PROJECTS.length,
            keywords: keywords,
          }),
        }}
      />

      {/* Accessible helpers */}
      <h1 className="sr-only">{title}</h1>
      <p className="sr-only">{subtitle}</p>
    </section>
  );
}
