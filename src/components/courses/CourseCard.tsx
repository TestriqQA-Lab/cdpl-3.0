import type { Course as BaseCourse } from "@/components/courses/course";
import { Star, Clock, Users, ChevronRight, BookOpenCheck, Download } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

/** Optional UI fields your component reads in addition to the base Course type */
type CourseExtras = {
    href?: string;
    trending?: boolean;
    highlights?: string[];
    brochureHref?: string;
    countdown?: { hours: number; minutes: number; seconds: number };
    icon?: ReactNode;
    /** If your data sometimes includes students as string like "2,000+" keep it */
    students?: string;
    /** level/duration/price might be missing in some cards */
    level?: string;
    duration?: string;
    price?: string;
};

type UICourse = BaseCourse & Partial<CourseExtras>;

export default function CourseCard({
    course,
    categoryBgColor,
}: {
    course: UICourse;
    categoryBgColor: string;
}) {
    const hasLink = typeof course.href === "string" && course.href.length > 0;
    const href = course.href;
    const trending = !!course.trending;
    const highlights = course.highlights;
    const brochureHref = course.brochureHref;
    const countdown = course.countdown;

    const rating = Number(course.rating ?? 4.8);
    const duration = course.duration ?? "6–8 weeks";
    const students = course.students ?? "2,000+ students enrolled";
    const level = course.level ?? "Beginner";



    const { headerGradient, accentBorder, accentText, primaryBtn, primaryBtnHover } =
        getAccentsFromClass(categoryBgColor);

    const listItems = (highlights && highlights.length > 0 ? highlights : (course.skills ?? [])).slice(0, 4);

    const Card = (
        <article
            className={[
                "relative w-full h-full rounded-3xl overflow-hidden",
                "border border-slate-200 bg-white",
                "shadow-[0_2px_20px_rgba(0,0,0,0.06)]",
                "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]",
                "flex flex-col",
            ].join(" ")}

            aria-label={`${course.title} course`}
        >
            {/* Header band */}
            <div className={`relative px-5 pt-5 pb-16 ${headerGradient} min-h-[150px]`}>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-white/20 text-white">
                            {course.icon ?? <BookOpenCheck className="h-5 w-5" />}
                        </span>
                        {trending && (
                            <span className="ml-2 inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white">
                                <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" /> TRENDING
                            </span>
                        )}
                    </div>

                    <span
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-slate-900 shadow-sm"
                        itemProp="aggregateRating"

                        aria-label={`Rating ${rating} out of 5`}
                    >
                        <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" aria-hidden />
                        <span itemProp="ratingValue">{rating.toFixed(1)}</span>
                        <meta itemProp="bestRating" content="5" />
                        <meta itemProp="ratingCount" content="200" />
                    </span>
                </div>

                <h3 className="mt-4 text-white text-xl md:text-2xl font-extrabold leading-snug" itemProp="name">
                    {course.title}
                </h3>
                <p className="mt-1 text-white/90 text-sm md:text-[15px]" itemProp="alternateName">
                    {course.title} certification & training – hands-on projects and job-ready skills
                </p>

                <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-white/30" />
            </div>

            {/* Body */}
            <div className="px-5 pt-4 pb-5 flex flex-col grow">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200">
                        <Clock className="h-4 w-4" aria-hidden />
                        {duration}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {level}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200">
                        <Users className="h-4 w-4" aria-hidden />
                        {students}
                    </span>
                </div>

                <ul className="mt-4 space-y-2 text-[14px] text-slate-700">
                    {listItems.map((it, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className={`mt-1 h-4 w-4 rounded-full ${accentBorder} flex items-center justify-center`}>
                                <svg width="10" height="10" viewBox="0 0 24 24" className={`${accentText}`}>
                                    <path fill="currentColor" d="M20.285 6.708l-11.01 11.01-5.56-5.56 1.415-1.414 4.145 4.144 9.596-9.596z" />
                                </svg>
                            </span>
                            <span>{it}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <p className="text-[12px] text-slate-600 mb-2">Limited-time offer ends in</p>
                    <div className="grid grid-cols-3 gap-2">
                        {["HOURS", "MINUTES", "SECONDS"].map((label, idx) => {
                            const val = countdown
                                ? [countdown.hours, countdown.minutes, countdown.seconds][idx]
                                : [47, 59, 16][idx];
                            return (
                                <div key={label} className="rounded-lg bg-white border border-slate-200 p-3 text-center">
                                    <div className="text-xl font-extrabold text-slate-900 leading-none">
                                        {String(val).padStart(2, "0")}
                                    </div>
                                    <div className="mt-1 text-[10px] tracking-wide text-slate-500">{label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTAs pinned to the bottom */}
                <div className="mt-auto pt-5 flex flex-col gap-3">


                    <Link
                        href={href ?? "#"}
                        className={[
                            "inline-flex items-center justify-center w-full h-11 rounded-xl text-white font-semibold",
                            primaryBtn,
                            "transition-colors", primaryBtnHover,
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300",
                        ].join(" ")}
                        aria-label={`View ${course.title} details`}
                    >
                        View Course Details
                        <ChevronRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>

                    {brochureHref ? (
                        <Link
                            href={brochureHref}
                            className="inline-flex items-center justify-center w-full h-11 rounded-xl border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 transition-colors"
                        >
                            <Download className="mr-2 h-4 w-4" aria-hidden />
                            Download Brochure
                        </Link>
                    ) : (
                        <button
                            type="button"
                            className="inline-flex items-center justify-center w-full h-11 rounded-xl border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 transition-colors"
                            aria-label="Download brochure"
                        >
                            <Download className="mr-2 h-4 w-4" aria-hidden />
                            Download Brochure
                        </button>
                    )}
                </div>

                <span className="sr-only">
                    {course.title} online course. Certification, training, hands-on projects, mentorship, placement assistance.
                </span>
            </div>
        </article>
    );

    return hasLink ? (
        <Link
            href={href!}
            className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300 rounded-3xl"
            aria-label={`${course.title} – view course details`}
        >
            {Card}
        </Link>
    ) : (
        Card
    );
}

/** Helpers */
function getAccentsFromClass(input: string) {
    const families = ["rose", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "slate"];
    const fam = families.find(f => input.includes(`-${f}-`)) ?? "violet";

    const map: Record<string, {
        headerGradient: string;
        accentBorder: string;
        accentText: string;
        primaryBtn: string;
        primaryBtnHover: string;
    }> = {
        emerald: { headerGradient: "bg-gradient-to-br from-emerald-500 to-teal-500", accentBorder: "bg-emerald-50 border border-emerald-200", accentText: "text-emerald-600", primaryBtn: "bg-emerald-600", primaryBtnHover: "hover:bg-emerald-700" },
        sky: { headerGradient: "bg-gradient-to-br from-sky-500 to-cyan-500", accentBorder: "bg-sky-50 border border-sky-200", accentText: "text-sky-600", primaryBtn: "bg-sky-600", primaryBtnHover: "hover:bg-sky-700" },
        violet: { headerGradient: "bg-gradient-to-br from-violet-500 to-fuchsia-500", accentBorder: "bg-violet-50 border border-violet-200", accentText: "text-violet-600", primaryBtn: "bg-violet-600", primaryBtnHover: "hover:bg-violet-700" },
        pink: { headerGradient: "bg-gradient-to-br from-pink-500 to-rose-500", accentBorder: "bg-pink-50 border border-pink-200", accentText: "text-pink-600", primaryBtn: "bg-pink-600", primaryBtnHover: "hover:bg-pink-700" },
        amber: { headerGradient: "bg-gradient-to-br from-amber-500 to-orange-500", accentBorder: "bg-amber-50 border border-amber-200", accentText: "text-amber-600", primaryBtn: "bg-amber-600", primaryBtnHover: "hover:bg-amber-700" },
        indigo: { headerGradient: "bg-gradient-to-br from-indigo-500 to-blue-500", accentBorder: "bg-indigo-50 border border-indigo-200", accentText: "text-indigo-600", primaryBtn: "bg-indigo-600", primaryBtnHover: "hover:bg-indigo-700" },
        slate: { headerGradient: "bg-gradient-to-br from-slate-600 to-slate-800", accentBorder: "bg-slate-50 border border-slate-200", accentText: "text-slate-600", primaryBtn: "bg-slate-900", primaryBtnHover: "hover:bg-black" },
        teal: { headerGradient: "bg-gradient-to-br from-teal-500 to-emerald-500", accentBorder: "bg-teal-50 border border-teal-200", accentText: "text-teal-600", primaryBtn: "bg-teal-600", primaryBtnHover: "hover:bg-teal-700" },
        blue: { headerGradient: "bg-gradient-to-br from-blue-500 to-sky-500", accentBorder: "bg-blue-50 border border-blue-200", accentText: "text-blue-600", primaryBtn: "bg-blue-600", primaryBtnHover: "hover:bg-blue-700" },
        red: { headerGradient: "bg-gradient-to-br from-red-500 to-rose-500", accentBorder: "bg-red-50 border border-red-200", accentText: "text-red-600", primaryBtn: "bg-red-600", primaryBtnHover: "hover:bg-red-700" },
    };

    return map[fam] ?? map["violet"];
}
