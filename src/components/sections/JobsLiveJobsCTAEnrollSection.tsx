import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JobsLiveJobsCTAEnrollSection() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      {/* Stack content until lg; side-by-side only on lg+ */}
      <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-semibold tracking-tight text-slate-900">
            Want a mentor to review your resume before you apply?
          </p>
        <p className="mt-1 text-sm text-slate-600">
            Get a free <span className="font-medium">15-min career consult</span> with CDPL mentors.
          </p>
        </div>

        {/* Buttons — full-width & stacked up to md/lg, row only on lg+ */}
        <div className="flex w-full flex-col items-stretch gap-2 md:w-full lg:w-auto lg:flex-row lg:items-center lg:gap-3">
          <Link
            href="/contact-us"
            className="inline-flex w-full lg:w-auto items-center justify-center gap-2 rounded-xl border border-transparent bg-[color:#ff8c00] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-300 min-h-[44px]"
          >
            Book a free session
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/programs"
            className="inline-flex w-full lg:w-auto items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 min-h-[44px]"
          >
            Explore programs
          </Link>
        </div>
      </div>
    </div>
  );
}
