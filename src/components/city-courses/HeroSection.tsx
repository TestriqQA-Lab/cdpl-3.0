"use client";

import { LeadForm, EnrollPopup, type LeadFormData, type EnrollFormData } from "@/components/EnrollForms";
import React, { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Star, MapPin, Home, ChevronRight } from "lucide-react";
import type { CourseData } from "@/types/courseData";
import Link from "next/link";

interface HeroSectionProps {
  data: CourseData;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const { heroContent, location } = data;

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const crumbs = useMemo(() => {
    if (data.breadcrumbs?.length) return data.breadcrumbs;
    return [
      { label: "Home", href: "/" },
      { label: "Courses", href: "/courses" },
      { label: data.courseName, href: `/courses/${data.slug}` },
      { label: location, href: "#" },
    ];
  }, [data.breadcrumbs, data.courseName, data.slug, location]);

  // Handlers now receive the data object from the reusable components
  const handleLeadSubmit = (lead: LeadFormData) => {
    alert(
      `Submitted:\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nTrack: ${lead.track ?? "(none)"}`
    );
  };

  const handleEnrollSubmit = (enroll: EnrollFormData) => {
    alert(
      `Enroll Now Submitted:\nName: ${enroll.name}\nEmail: ${enroll.email}\nPhone: ${enroll.phone}`
    );
    setIsPopupOpen(false);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-indigo-50">
      {/* soft shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}

                {i === 1 ? (
                  // 2nd item: non-clickable
                  <span
                    className={`cursor-default ${i === crumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                    aria-current={i === crumbs.length - 1 ? "page" : undefined}
                  >
                    {c.label}
                  </span>
                ) : c.href ? (
                  // Other items: clickable (use Next.js Link)
                  <Link
                    href={c.href}
                    className={`hover:text-indigo-700 ${i === crumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                    aria-current={i === crumbs.length - 1 ? "page" : undefined}
                  >
                    {c.label}
                  </Link>
                ) : (
                  // Fallback if no href
                  <span
                    className={`${i === crumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                    aria-current={i === crumbs.length - 1 ? "page" : undefined}
                  >
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <motion.div
          className="grid grid-cols-1 items-start gap-10 md:grid-cols-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT: Heading + Form (mobile) + Description + Stats */}
          <div className="md:col-span-7 lg:col-span-8">
            {/* Location chip */}
            <motion.div
              variants={itemVariants}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-slate-700 shadow-sm backdrop-blur"
            >
              <MapPin className="h-4 w-4 text-indigo-600" />
              <span className="text-xs font-medium">
                {location}, {data.state}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold leading-12 tracking-tight text-slate-900 sm:text-5xl"
            >
              {heroContent.title}
            </motion.h1>

            {/* Mobile form uses reusable LeadForm */}
            <div className="md:hidden mt-6">
              <LeadForm
                variants={itemVariants}
                tracks={data.specializations && data.specializations.length ? data.specializations : undefined}
                onSubmit={handleLeadSubmit}
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="mt-7 md:mt-3 text-lg font-semibold text-indigo-700"
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4"
            >
              {heroContent.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  <p className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-2xl font-extrabold text-transparent">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{stat.label}</p>
                  <p className="mt-0.5 text-xs text-slate-600">{stat.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Certifications & Benefits
              </p>
              <div className="flex flex-wrap gap-2">
                {heroContent.certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
                  >
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex items-center justify-center cursor-pointer rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-0.5" />
              </button>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:shadow-md"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* RIGHT column form (desktop only) now reusable */}
          <div className="hidden md:block md:col-span-5 lg:col-span-4 md:-mt-2 lg:-mt-10">
            <LeadForm
              variants={itemVariants}
              tracks={data.specializations && data.specializations.length ? data.specializations : undefined}
              onSubmit={handleLeadSubmit}
              className="mt-6"
            />
          </div>
        </motion.div>

        {heroContent.landmarks?.length ? (
          <motion.div variants={itemVariants} className="mt-14 border-t border-slate-200 pt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Serving {location}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroContent.landmarks.map((lm, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm text-slate-700 shadow-sm"
                >
                  {lm}
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>

      {/* Popup now uses reusable EnrollPopup */}
      <EnrollPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSubmit={handleEnrollSubmit}
      />
    </section>
  );
};

export default HeroSection;