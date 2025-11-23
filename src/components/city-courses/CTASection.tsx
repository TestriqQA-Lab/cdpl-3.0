"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Check, Star, Zap } from "lucide-react";
import Link from "next/link";
import { EnrollFormData, EnrollPopup } from "../EnrollForms";

interface CTASectionProps {
  data: {
    ctaContent: {
      title: string;
      subtitle: string;
      description: string;
      benefits?: string[];
      contactInfo: {
        phone: string;
        email: string;
        address: string;
      };
    };
  };
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

const CTASection: React.FC<CTASectionProps> = ({ data }) => {
  const { ctaContent } = data;

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleEnrollSubmit = (enroll: EnrollFormData) => {
    alert(
      `Enroll Now Submitted:\nName: ${enroll.name}\nEmail: ${enroll.email}\nPhone: ${enroll.phone}`
    );
    setIsPopupOpen(false);
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Consultation Request:\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`
    );
  };

  return (
    <section id="cta-section" className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-violet-50">
      {/* Soft background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-24 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* LEFT: Content + Benefits */}
          <div className="lg:col-span-7">
            {/* Special offer badge */}
            <motion.div
              variants={itemVariants}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-1.5 shadow-sm"
            >
              <Zap className="h-4 w-4 fill-amber-500 text-amber-500" />
              <span className="text-xs font-semibold text-amber-900">
                Limited Time: 20% Discount Available!
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
            >
              {ctaContent.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-3 text-lg font-semibold text-indigo-700"
            >
              {ctaContent.subtitle}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700"
            >
              {ctaContent.description}
            </motion.p>

            {/* Benefits List */}
            {ctaContent.benefits && ctaContent.benefits.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="mt-8 space-y-3"
              >
                {ctaContent.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-base font-medium text-slate-800">
                      {benefit}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <button
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex items-center justify-center cursor-pointer rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-0.5" />
              </button>
              {/* Popup now uses reusable EnrollPopup */}
              <EnrollPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onSubmit={handleEnrollSubmit}
              />
              <Link
                href="contact-us"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-8 py-3.5 font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:shadow-md"
              >
                Get Free Demo
              </Link>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {/* Phone */}
              <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Phone
                </p>
                <Link
                  href={`tel:${ctaContent.contactInfo.phone}`}
                  className="mt-1 block text-sm font-semibold text-slate-900 transition group-hover:text-indigo-600"
                >
                  {ctaContent.contactInfo.phone}
                </Link>
              </div>

              {/* Email */}
              <div className="group rounded-xl border border-slate-200 bg-white p-4 lg:p-2 xl:p-4 shadow-sm transition hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </p>
                <Link
                  href={`mailto:${ctaContent.contactInfo.email}`}
                  className="mt-1 block text-sm lg:text-xs xl:text-sm font-semibold text-slate-900 transition group-hover:text-indigo-600"
                >
                  {ctaContent.contactInfo.email}
                </Link>
              </div>

              {/* Location */}
              <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Location
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {ctaContent.contactInfo.address}
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Consultation Form */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-600 to-violet-600 p-8 shadow-2xl max-w-md w-full lg:ml-auto">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm">
                <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                <span className="text-xs font-semibold text-white">
                  Free Consultation
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Get Expert Guidance
              </h3>
              <p className="mt-2 text-sm text-indigo-100">
                Schedule a free consultation with our career counselors and discover the best learning path for you.
              </p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="cta-name" className="mb-1.5 block text-sm font-medium text-white">
                    Your Name
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-indigo-200 shadow-sm backdrop-blur-sm outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/30"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="cta-email" className="mb-1.5 block text-sm font-medium text-white">
                    Your Email
                  </label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-indigo-200 shadow-sm backdrop-blur-sm outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/30"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="cta-phone" className="mb-1.5 block text-sm font-medium text-white">
                    Your Phone
                  </label>
                  <input
                    id="cta-phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="^[0-9+\\-\\s()]{7,15}$"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-indigo-200 shadow-sm backdrop-blur-sm outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/30"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3.5 font-semibold text-indigo-600 shadow-lg transition hover:bg-indigo-50 hover:shadow-xl"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>

                <p className="text-xs text-indigo-100">
                  By submitting, you agree to be contacted about courses and placements.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;