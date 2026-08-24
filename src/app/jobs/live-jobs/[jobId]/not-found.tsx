import Link from "next/link";

/**
 * 404 for a live-job detail URL.
 *
 * Reached whenever `getLiveJobBySlug` returns nothing — the job was closed in
 * Studio (Active toggled off), its apply-by date passed, or the slug never
 * existed. The HTTP status is still 404, which is what Google needs in order to
 * drop an expired posting from Google for Jobs. This route only replaces the
 * bare global 404 with something useful for the person who arrived here.
 *
 * That matters because these URLs get shared: a candidate may open a WhatsApp
 * link days after the drive closed. Stranding them on "Page Not Found / Go
 * Home" loses a real applicant; sending them to the current openings does not.
 */
export default function JobNotFound() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-16">
            <div className="w-full max-w-xl text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Live Jobs
                </p>

                <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                    This opening is no longer accepting applications
                </h1>

                <p className="mx-auto mb-8 max-w-md text-base text-slate-600">
                    Walk-in drives and internships close once their apply-by date
                    passes, so this listing has been taken down. Our current
                    openings are always on the live jobs page.
                </p>

                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="/jobs/live-jobs"
                        className="w-full rounded-xl px-6 py-3 font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 sm:w-auto"
                        style={{ backgroundColor: "rgb(0, 105, 168)" }}
                    >
                        See current openings
                    </Link>

                    <Link
                        href="/jobs/placements"
                        className="w-full rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                    >
                        Placement support
                    </Link>
                </div>

                <p className="mt-8 text-sm text-slate-500">
                    Looking to build the skills these roles ask for?{" "}
                    <Link
                        href="/courses"
                        className="font-medium underline underline-offset-2"
                        style={{ color: "#ff8c00" }}
                    >
                        Browse CDPL courses
                    </Link>
                </p>
            </div>
        </div>
    );
}
