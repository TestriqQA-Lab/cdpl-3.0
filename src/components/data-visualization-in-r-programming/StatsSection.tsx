"use client";

import React from "react";
import { content } from "@/components/data-visualization-in-r-programming/data/content";
import { Star, Users, Trophy, DollarSign, Briefcase } from "lucide-react";

interface StatCardData {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  bgGradient: string;
  iconBg: string;
  ariaLabel: string;
}

export const StatsSection: React.FC = () => {
  const { stats_section } = content;

  // --- ORIGINAL CONTENT (unchanged: values, labels, icon choices) ---
  const combinedStatsBase = [
    {
      value: stats_section.web_stats_reference[0].value,
      label: stats_section.web_stats_reference[0].label,
      icon: <Star className="w-6 h-6 text-yellow-500" aria-hidden="true" />,
    },
    {
      value: stats_section.web_stats_reference[1].value,
      label: stats_section.web_stats_reference[1].label,
      icon: <Users className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
    },
    {
      value: stats_section.web_stats_reference[2].value,
      label: stats_section.web_stats_reference[2].label,
      icon: <Trophy className="w-6 h-6 text-orange-500" aria-hidden="true" />,
    },
    {
      value: stats_section.stats[1].value,
      label: stats_section.stats[1].label,
      icon: <Briefcase className="w-6 h-6 text-green-600" aria-hidden="true" />,
    },
    {
      value: stats_section.stats[2].value,
      label: stats_section.stats[2].label,
      icon: <DollarSign className="w-6 h-6 text-red-600" aria-hidden="true" />,
    },
  ];

  // Gradients + icon backgrounds (layout/design like reference section)
  const stylePresets = [
    { bgGradient: "from-blue-50 to-blue-100", iconBg: "bg-blue-500" },
    { bgGradient: "from-orange-50 to-orange-100", iconBg: "bg-orange-500" },
    { bgGradient: "from-green-50 to-green-100", iconBg: "bg-green-500" },
    { bgGradient: "from-purple-50 to-purple-100", iconBg: "bg-purple-500" },
    { bgGradient: "from-red-50 to-red-100", iconBg: "bg-red-500" },
  ];

  // Enrich each stat with SEO-friendly descriptions and aria labels
  const stats: StatCardData[] = combinedStatsBase.map((s, index) => {
    const preset = stylePresets[index % stylePresets.length];

    // Simple SEO-style description based on label/value
    const baseDesc = (() => {
      const label = s.label.toLowerCase();
      if (label.includes("rating")) {
        return `Average learner rating for our R programming and data visualization course.`;
      }
      if (label.includes("learners") || label.includes("students") || label.includes("graduates")) {
        return `Number of learners who have completed our R data visualization and machine learning training.`;
      }
      if (label.includes("experience") || label.includes("expertise")) {
        return `Years of industry and teaching experience behind our R, statistics, and data analytics curriculum.`;
      }
      if (label.includes("placement") || label.includes("job") || label.includes("hiring")) {
        return `Job-oriented R data analytics program with placement assistance and career guidance.`;
      }
      if (label.includes("salary") || label.includes("package")) {
        return `Typical salary outcomes for data analytics and R programming roles after course completion.`;
      }
      return `Key performance metric for our R data visualization and machine learning training program.`;
    })();

    return {
      icon: s.icon,
      value: s.value,
      label: s.label,
      description: baseDesc,
      bgGradient: preset.bgGradient,
      iconBg: preset.iconBg,
      ariaLabel: `${s.value} ${s.label} – core success metric of our R data visualization and machine learning course.`,
    };
  });

  // -------- JSON-LD (SEO) --------
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "R Programming, Data Visualization & Machine Learning Course Statistics",
    description:
      "Key statistics and success metrics for our R programming, data visualization, and machine learning course: student ratings, number of learners, faculty experience, placement support, and career outcomes.",
    itemListElement: stats.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: s.label,
      description: s.description,
    })),
    keywords:
      "R programming course, R data visualization training, R for data science, R machine learning course, data analytics with R, R course with placement, learn ggplot2 and dplyr, R programming institute in India, data analyst course with R, R for statistics and predictive modeling",
  };

  return (
    <section
      className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50"
      aria-labelledby="stats-heading"
    >
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (SEO-optimized) */}
        <header className="text-center mb-12 md:mb-16">
          <h2
            id="stats-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
          >
            Why Learners Trust Our{" "}
            <span className="text-orange-600">
              R Data Visualization & Machine Learning Program
            </span>
            ?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto">
            Build a <strong>job-ready data analytics profile with R</strong>. Our{" "}
            <strong>R programming course</strong> focuses on{" "}
            <strong>data visualization, statistics, and machine learning</strong> using
            industry-standard tools like <strong>ggplot2</strong>,{" "}
            <strong>dplyr</strong>, and <strong>tidyr</strong>. Work on{" "}
            <strong>real-world projects</strong>, sharpen your{" "}
            <strong>business analytics</strong> skills, and get{" "}
            <strong>career guidance and placement support</strong> for data analyst and
            data scientist roles.
          </p>
        </header>

        {/* Stats Grid (layout/design mirrored from reference) */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 md:mb-14"
          aria-label="Program statistics"
        >
          {stats.map((stat, index) => (
            <li key={index} className="h-full">
              <article
                tabIndex={0}
                aria-label={stat.ariaLabel}
                className={`h-full bg-gradient-to-br ${stat.bgGradient} rounded-2xl p-5 sm:p-6 border border-slate-200 outline-none transition-all duration-300 hover:border-orange-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-orange-300`}
              >
                {/* Icon – we wrap your existing icon inside colored circle */}
                <div
                  className={`${stat.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4`}
                  aria-hidden="true"
                >
                  {/* Preserve original icon node */}
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="mb-1">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                    {stat.value}
                  </p>
                </div>

                {/* Label */}
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1">
                  {stat.label}
                </h3>

                {/* Description (SEO copy) */}
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  {stat.description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        {/* Extra SEO keywords line */}
        <p className="mt-4 text-sm text-center sm:text-base text-slate-600 max-w-4xl mx-auto">
          <em>R Programming Course in India</em>,{" "}
          <em>R Data Visualization Training</em>,{" "}
          <em>R for Data Science & Analytics</em>,{" "}
          <em>Machine Learning with R</em>, <em>Data Analyst Course with R</em>,{" "}
          <em>Placement Assistance</em>, <em>Online & Classroom Batches</em>.
        </p>

        {/* SEO-Rich Key Insight Block */}
        <div className="mt-10 bg-gradient-to-r from-orange-50 via-white to-blue-50 rounded-2xl border-2 border-orange-200 p-6 sm:p-8 md:p-10">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div
                className="flex items-center justify-center h-12 w-12 rounded-xl bg-orange-500 text-white"
                aria-hidden="true"
              >
                <span className="text-xl">📈</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Turn R Programming Skills into a High-Growth Analytics Career
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Companies in <strong>banking</strong>, <strong>healthcare</strong>,{" "}
                <strong>e-commerce</strong>, <strong>marketing</strong>, and{" "}
                <strong>technology</strong> rely on{" "}
                <strong>R for statistics, forecasting, and visualization</strong>. Our{" "}
                <strong>R data visualization & machine learning course</strong> is built
                to help you move from basic spreadsheets to{" "}
                <strong>advanced analytics dashboards</strong>,{" "}
                <strong>predictive models</strong>, and{" "}
                <strong>data-driven decision making</strong>.
              </p>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 text-sm sm:text-[15px]">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">✅</span>
                  <span>
                    <strong>Core tools:</strong> R, RStudio, ggplot2, dplyr, tidyr,
                    readr, shiny dashboards
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">✅</span>
                  <span>
                    <strong>Hands-on projects</strong> in business analytics, marketing
                    analytics, and performance reporting
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">✅</span>
                  <span>
                    <strong>Career support</strong> with resume building, LinkedIn
                    optimization, and interview preparation for data roles
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">✅</span>
                  <span>
                    <strong>Flexible learning modes</strong> – weekend, evening, online
                    and classroom batches for students & working professionals
                  </span>
                </li>
              </ul>

              <p className="mt-4 text-slate-600 text-xs sm:text-sm">
                Keywords: R programming course • R data visualization training • R for
                data science • machine learning with R • data analyst course with R •
                ggplot2 and dplyr • RStudio projects • analytics training with placement
                assistance • job-oriented R course in India • beginner to advanced R
                programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
