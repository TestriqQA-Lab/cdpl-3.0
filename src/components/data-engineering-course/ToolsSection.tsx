// components/sections/ToolsSection.tsx
"use client";

import { useMemo } from "react";
import {
  Boxes,        // Hadoop
  Flame,        // Spark
  Radio,        // Kafka
  Hexagon,      // Hive
  CloudCog,     // AWS EMR
  Blocks,       // Databricks
  Workflow,     // Airflow
  Ship,         // Docker
  Rocket,
} from "lucide-react";
import Link from "next/link";

type Tool = {
  name: string;
  badge: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bg: string;       // card bg
  text: string;     // body text color
  border: string;   // card border
  iconBg: string;   // icon chip bg
  iconColor: string;// icon color
  desc: string;
};

const TOOLS: Tool[] = [
  {
    name: "Hadoop",
    badge: "Distributed Storage",
    icon: Boxes,
    bg: "bg-amber-50",
    text: "text-amber-900",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    desc: "HDFS & YARN for batch processing and durable, scalable storage across clusters.",
  },
  {
    name: "Spark",
    badge: "Compute Engine",
    icon: Flame,
    bg: "bg-rose-50",
    text: "text-rose-900",
    border: "border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-700",
    desc: "Unified batch & streaming with Spark SQL, DataFrames, tuning, and checkpoints.",
  },
  {
    name: "Kafka",
    badge: "Event Streaming",
    icon: Radio,
    bg: "bg-indigo-50",
    text: "text-indigo-900",
    border: "border-indigo-200",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-700",
    desc: "Durable pub/sub, Connect, and Schema Registry for real-time data pipelines.",
  },
  {
    name: "Hive",
    badge: "SQL on Data Lake",
    icon: Hexagon,
    bg: "bg-lime-50",
    text: "text-lime-900",
    border: "border-lime-200",
    iconBg: "bg-lime-100",
    iconColor: "text-lime-700",
    desc: "Warehouse-style queries with metastore-driven schemas and partitions.",
  },
  {
    name: "AWS EMR",
    badge: "Managed Hadoop/Spark",
    icon: CloudCog,
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    desc: "Elastic clusters, spot savings, autoscaling, and integrations with S3/Lake Formation.",
  },
  {
    name: "Databricks",
    badge: "Lakehouse",
    icon: Blocks,
    bg: "bg-violet-50",
    text: "text-violet-900",
    border: "border-violet-200",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    desc: "Delta Lake, notebooks, jobs, Unity Catalog, and collaborative ML/ETL workflows.",
  },
  {
    name: "Airflow",
    badge: "Orchestration",
    icon: Workflow,
    bg: "bg-sky-50",
    text: "text-sky-900",
    border: "border-sky-200",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-700",
    desc: "Author DAGs, schedule & monitor pipelines with retries, SLAs, and alerts.",
  },
  {
    name: "Docker",
    badge: "Containers",
    icon: Ship,
    bg: "bg-cyan-50",
    text: "text-cyan-900",
    border: "border-cyan-200",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
    desc: "Portable runtime for services & jobs; build reproducible images for data apps.",
  },
];

export default function ToolsSection() {
  // SEO: ItemList for rich results
  const jsonLd = useMemo(
    () =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Big Data Tools & Technologies You’ll Master",
        itemListElement: TOOLS.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: t.name,
          description: t.desc,
          keywords:
            "big data tools, kafka, spark, hadoop, hive, airflow, databricks, aws emr, docker, data engineering stack, streaming pipelines",
        })),
      }),
    []
  );

  return (
    <section
      className="relative py-14 md:py-16 bg-white"
      aria-labelledby="tools-heading"
    >
      {/* Sleek futuristic accent (thin gradient line only) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 md:mb-12">
          <h2
            id="tools-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            <span className="text-DS">Tools</span> & <span className="text-DS">Technologies</span> You’ll Master
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Build production-grade <strong>data pipelines</strong> and{" "}
            <strong>lakehouse platforms</strong> using a curated stack recruiters trust:
            <strong> Hadoop</strong>, <strong>Spark</strong>, <strong>Kafka</strong>,{" "}
            <strong>Hive</strong>, <strong>AWS EMR</strong>, <strong>Databricks</strong>,{" "}
            <strong>Airflow</strong>, and <strong>Docker</strong>.
          </p>

          {/* quick highlights */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-4xl mx-auto">
            <KPI label="Hands-On Stack" value="8 Core Tools" note="Batch + Streaming + Orchestration" />
            <KPI label="Deploy Anywhere" value="Cloud & On-Prem" note="AWS • GCP • Azure patterns" />
            <KPI label="Outcome" value="Job-Ready Portfolio" note="Pipelines • DAGs • Lakehouse" />
          </div>
        </header>

        {/* Tools grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {TOOLS.map((t) => (
            <li key={t.name}>
              <ToolCard tool={t} />
            </li>
          ))}
        </ul>

        {/* sr-only helper for SEO */}
        <p className="sr-only">
          Master Hadoop, Spark, Kafka, Hive, AWS EMR, Databricks, Airflow, and Docker to build
          scalable, fault-tolerant, real-time data engineering solutions.
        </p>
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </section>
  );
}

/* ---------- Subcomponents ---------- */

function KPI({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur">
      <div className="text-[11px] font-semibold text-slate-600">{label}</div>
      <div className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-0.5 text-xs text-slate-500">{note}</div>
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  return (
    <article
      className={[
        "group rounded-2xl border p-3 md:p-4 lg:p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition hover:shadow-md focus-within:shadow-md",
        tool.bg,
        tool.text,
        tool.border,
      ].join(" ")}
      tabIndex={0}
      aria-label={`${tool.name} tool`}
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <span className={`p-2 rounded-xl ${tool.iconBg} ring-1 ring-black/5`}>
            <Icon className={`h-4 w-4 md:h-5 md:w-5 ${tool.iconColor}`} strokeWidth={2.2} />
          </span>
          {tool.name}
        </span>
        <span
          className={[
            "text-[10px] hidden md:block rounded-full border px-2.5 py-0.5 font-semibold",
            tool.border,
            "bg-white/70 text-slate-700",
          ].join(" ")}
        >
          {tool.badge}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-700">{tool.desc}</p>

      <div className="mt-3">
        <Link
          href="contact-us"
          className="inline-flex items-center gap-1 rounded-lg border border-slate-900 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_1px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-300"
          aria-label={`Learn ${tool.name} in the Big Data Engineering program`}
        >
          Learn with Projects
          <Rocket className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
