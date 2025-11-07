"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { X } from "lucide-react";

export type LeadFormData = {
  name: string;
  email: string;
  phone: string;
  track?: string;
};

export type EnrollFormData = {
  name: string;
  email: string;
  phone: string;
};

type CommonProps = {
  className?: string;
};

export type LeadFormProps = CommonProps & {
  /** Specialization/track options. Pass [] (or omit) to hide the dropdown. */
  tracks?: string[];
  /** Called with form data on submit. */
  onSubmit?: (data: LeadFormData, e: React.FormEvent<HTMLFormElement>) => void;
  /** Optional labels */
  title?: string;
  subtitle?: string;
  submitText?: string;
  /** framer-motion variants (optional) to plug into parent stagger/animations */
  variants?: Variants;
};

export function LeadForm({
  tracks,
  onSubmit,
  title = "Get a Free Counseling Session",
  subtitle = "Tell us a bit about you, and we’ll share the best track & syllabus.",
  submitText = "Request Syllabus PDF",
  className = "",
  variants,
}: LeadFormProps) {
  const [form, setForm] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    track: tracks?.[0],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(form, e);
  };

  const showTrack = Array.isArray(tracks) && tracks.length > 0;

  return (
    <motion.div variants={variants} className={className}>
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
        <h2 id="enroll" className="text-xl font-bold text-slate-900">
          {title}
        </h2>
        <p className="mt-1 text-sm text-slate-600">{subtitle}</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="lf-name" className="mb-1 block text-sm font-medium text-slate-700">
              Full Name *
            </label>
            <input
              id="lf-name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="lf-email" className="mb-1 block text-sm font-medium text-slate-700">
              Email *
            </label>
            <input
              id="lf-email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="lf-phone" className="mb-1 block text-sm font-medium text-slate-700">
              Phone *
            </label>
            <input
              id="lf-phone"
              name="phone"
              type="tel"
              required
              pattern="^[0-9+\-\s()]{7,15}$"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="+91 98765 43210"
            />
          </div>

          {showTrack && (
            <div>
              <label htmlFor="lf-track" className="mb-1 block text-sm font-medium text-slate-700">
                Select Track *
              </label>
              <select
                id="lf-track"
                name="track"
                required
                value={form.track}
                onChange={(e) => setForm((f) => ({ ...f, track: e.target.value }))}
                className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              >
                {tracks!.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
          >
            {submitText}
          </button>

          <p className="text-xs text-slate-500">
            By submitting, you agree to be contacted about courses and placements.
          </p>
        </form>
      </div>
    </motion.div>
  );
}

export type EnrollPopupProps = CommonProps & {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: EnrollFormData, e: React.FormEvent<HTMLFormElement>) => void;
  title?: string;
  subtitle?: string;
  /** framer-motion variants to match your page animations */
  variants?: Variants;
  /** optionally prefill */
  initialValues?: Partial<EnrollFormData>;
};

const popupVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

export function EnrollPopup({
  isOpen,
  onClose,
  onSubmit,
  title = "Enroll Now",
  subtitle = "Fill in your details to start your journey with us.",
  variants,
  initialValues,
}: EnrollPopupProps) {
  const [form, setForm] = useState<EnrollFormData>({
    name: initialValues?.name ?? "",
    email: initialValues?.email ?? "",
    phone: initialValues?.phone ?? "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(form, e);
  };

  return (
    <motion.div
      variants={variants ?? popupVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-500 hover:text-slate-700"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-600">{subtitle}</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="ep-name" className="mb-1 block text-sm font-medium text-slate-700">
              Full Name *
            </label>
            <input
              id="ep-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="ep-email" className="mb-1 block text-sm font-medium text-slate-700">
              Email *
            </label>
            <input
              id="ep-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="ep-phone" className="mb-1 block text-sm font-medium text-slate-700">
              Phone *
            </label>
            <input
              id="ep-phone"
              type="tel"
              required
              pattern="^[0-9+\\-\\s()]{7,15}$"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="+91 98765 43210"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
          >
            Submit Enrollment
          </button>

          <p className="text-xs text-slate-500">
            By submitting, you agree to be contacted about courses and placements.
          </p>
        </form>
      </div>
    </motion.div>
  );
}
