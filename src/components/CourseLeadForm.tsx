"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function LeadForm({
  className = '',
  variant = 'elevated',
  source = 'Course Page',
}: {
  className?: string;
  variant?: 'default' | 'elevated';
  source?: string;
}) {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setSubmitting(true);
    try {
      // await fetch('/api/lead', { method: 'POST', body: formData });
      // const payload = { ...Object.fromEntries(formData.entries()), source };
      // console.log('Lead:', payload); 
      // TODO: Actual implementation
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(formData.entries()), source }),
      });
      if (!response.ok) throw new Error('Submission failed');

      form.reset();
      alert('Thanks! We will contact you shortly.');
    } catch (error) {
      console.error('Lead submission failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Quick enrollment form"
      className={[
        'rounded-2xl border bg-white p-5 sm:p-6',
        variant === 'elevated' ? 'shadow-lg' : 'shadow-sm',
        'border-slate-200',
        className,
      ].join(' ')}
    >
      <h2 className="mb-4 text-xl font-semibold text-slate-900">Request a Callback</h2>
      <p className="mb-5 text-sm text-slate-600">
        Enter your details to get the full MySQL curriculum, fees, and upcoming batch dates.
      </p>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-800">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="block w-full rounded-lg border border-cyan-300 bg-white px-3 py-2 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
            placeholder="e.g., Priya Sharma"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-lg border border-violet-300 bg-white px-3 py-2 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
            placeholder="name@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-800">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            pattern="^[0-9+\\-()\\s]{7,16}$"
            title="Enter a valid phone number"
            required
            className="block w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            placeholder="+91 98XXXXXXXX"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:opacity-60"
        >
          {submitting ? 'Submitting…' : 'Get Course Details'}
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>

        <p className="text-xs text-slate-500">
          By submitting, you agree to our terms. We’ll never share your data.
        </p>
      </div>
    </form>
  );
}