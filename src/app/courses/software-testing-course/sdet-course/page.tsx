import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { generateMetadata as generateSEOMetadata } from "@/lib/metadata-generator";
import {
    generateCourseSchema,
    generateBreadcrumbSchema,
    generateFAQSchema,
} from "@/lib/schema-generators";

/**
 * SDET course page — answer-first.
 *
 * WHY THIS PAGE EXISTS
 * --------------------
 * Six months of GSC data show ~1,000 impressions across sdet-qualified queries
 * — "sdet course syllabus" (224), "sdet online training in india" (179),
 * "sdet course fees" (176), "sdet automation course" (157), "java sdet course"
 * (103), "sdet course with placement" (68) — for essentially no clicks.
 *
 * RELATIONSHIP TO /automation-testing-course — READ BEFORE EDITING
 * ---------------------------------------------------------------
 * That page already carries "SDET" 63 times, in its <title> and its H1, and
 * ranks as CDPL's automation course. Two pages chasing one query is exactly the
 * cannibalisation that left 96 URLs fighting over "data science course in
 * mumbai" for zero clicks, so these two are deliberately split by INTENT:
 *
 *   this page  → definitional and career intent. What SDET means, how it
 *                differs from manual QA, what the syllabus covers, who it suits.
 *   automation → commercial course intent. Tooling depth, hands-on modules,
 *                enrolment.
 *
 * Every route into the tooling detail from here points at that page. Keep it
 * that way: if this page starts selling the course rather than explaining the
 * role, the two will compete and both will lose.
 *
 * FEES: intentionally absent. "sdet course fees" draws 176 impressions and
 * publishing a real number would likely convert them, but no fee has been
 * confirmed yet. `price` is omitted from the Course schema rather than guessed
 * — a fabricated price is a structured-data policy breach, and the FAQ below
 * says plainly that fees come from a counsellor. Add both together once the
 * real figure is confirmed.
 */

const FAQS = [
    {
        question: "What is the full form of SDET?",
        answer:
            "SDET stands for Software Development Engineer in Test. It is a tester who writes code — building automated test suites and the frameworks that run them, rather than checking software by hand.",
    },
    {
        question: "What is the difference between an SDET and a manual tester?",
        answer:
            "A manual tester exercises the application directly and reports what breaks. An SDET writes programs that do that checking automatically, and maintains the framework those programs run in. The SDET role therefore requires real programming ability — typically Java or Python — alongside testing judgement, and it usually sits closer to the development team.",
    },
    {
        question: "What does an SDET course syllabus cover?",
        answer:
            "A complete SDET syllabus has four layers: a programming language (Java or Python) to write tests in; a UI automation framework such as Selenium; API testing with tools like Postman and REST Assured; and the supporting skills — database querying with SQL, version control with Git, and running suites automatically in a CI pipeline. Testing fundamentals sit underneath all of it: without knowing what to test, automation only produces failures faster.",
    },
    {
        question: "Do I need to know programming before starting an SDET course?",
        answer:
            "No. CDPL's SDET track begins with programming from the start, so beginners and manual testers moving into automation both start at the same place. What does help is comfort with logic and problem solving, since a large part of the work is writing and debugging code.",
    },
    {
        question: "How long does it take to become an SDET?",
        answer:
            "For someone starting without programming experience, the realistic path is a few months of consistent study covering the language, an automation framework, API testing and CI. Manual testers already familiar with test design usually move faster because the testing judgement is already there — it is the coding layer they are adding.",
    },
    {
        question: "What is the SDET course fee at CDPL?",
        answer:
            "Fees depend on the track and batch format you choose. Speak to a CDPL counsellor for the current fee and the next batch date — the enquiry form on this page reaches them directly.",
    },
    {
        question: "Is SDET a good career choice?",
        answer:
            "Demand for automation-capable testers has grown as teams moved to continuous delivery, where releases are too frequent to check by hand. Because the role requires programming ability, SDET positions typically sit above manual QA on the pay scale, and the skills transfer readily into development and DevOps work later.",
    },
];

const SYLLABUS = [
    {
        title: "Programming foundation",
        detail: "Java or Python — the language you write every test in. Variables through to OOP, because frameworks are built with classes and inheritance.",
        href: "/courses/software-testing-course/java-course",
        linkLabel: "Java course",
    },
    {
        title: "Testing fundamentals",
        detail: "Test design, defect reporting, and knowing what is worth automating. Automation without this only produces failures faster.",
        href: "/courses/software-testing-course/manual-testing-course",
        linkLabel: "Manual testing course",
    },
    {
        title: "UI automation",
        detail: "Selenium and modern alternatives — locating elements, handling waits, and structuring suites so they do not turn flaky.",
        href: "/courses/software-testing-course/automation-testing-course",
        linkLabel: "Automation testing course",
    },
    {
        title: "API testing",
        detail: "Postman and REST Assured. Most defects surface at the service layer, and API tests run faster and break less often than UI ones.",
        href: "/courses/software-testing-course/api-testing",
        linkLabel: "API testing course",
    },
    {
        title: "Databases and SQL",
        detail: "Querying data to verify what the application actually stored, rather than trusting the screen.",
        href: "/courses/software-testing-course/dbms-course",
        linkLabel: "DBMS course",
    },
    {
        title: "CI and version control",
        detail: "Git, and running the suite automatically on every change so failures are caught at the commit that caused them.",
        href: "/courses/software-testing-course/advance-manual-automation-testing",
        linkLabel: "Master programme",
    },
];

export const metadata = generateSEOMetadata({
    // Answer-first: the expansion is the first thing in both the tab title and
    // the snippet, because the queries driving this page are definitional.
    title: "SDET Full Form: Software Development Engineer in Test | CDPL",
    description:
        "SDET stands for Software Development Engineer in Test — a tester who writes code. See the full syllabus, how it differs from manual QA, and the career path.",
    keywords: [
        "SDET",
        "SDET full form",
        "what is SDET",
        "SDET course",
        "SDET course syllabus",
        "SDET course fees",
        "SDET training",
        "SDET online training in india",
        "java SDET course",
        "SDET vs manual tester",
        "SDET automation course",
        "software development engineer in test",
    ],
    url: "/courses/software-testing-course/sdet-course",
    image: "/og-images/courses-software-testing-course-automation-testing-course-og.webp",
});

export default function SdetCoursePage() {
    const courseSchema = generateCourseSchema({
        name: "SDET (Software Development Engineer in Test) Training",
        description:
            "SDET stands for Software Development Engineer in Test — a tester who writes code. CDPL's SDET track covers Java or Python, Selenium, API testing with Postman and REST Assured, SQL, Git and CI.",
        url: "/courses/software-testing-course/sdet-course",
        slug: "sdet-course",
        // price is deliberately omitted — see the file header.
        syllabus: SYLLABUS.map((s) => s.title),
        prerequisites: ["No prior programming experience required"],
        learningOutcomes: [
            "Write automated tests in Java or Python",
            "Build and maintain a UI automation framework",
            "Test REST APIs with Postman and REST Assured",
            "Verify data directly with SQL",
            "Run suites automatically in a CI pipeline",
        ],
    });

    const faqSchema = generateFAQSchema(FAQS);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "Software Testing Course", url: "/courses/software-testing-course" },
        { name: "SDET Course", url: "/courses/software-testing-course/sdet-course" },
    ]);

    return (
        <>
            <JsonLd id="sdet-course-schema" schema={courseSchema} />
            <JsonLd id="sdet-faq-schema" schema={faqSchema} />
            <JsonLd id="sdet-breadcrumb-schema" schema={breadcrumbSchema} />

            <main className="bg-white text-slate-900">
                {/* HERO — the answer is the first thing on the page, not buried. */}
                <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
                    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
                            <Link href="/courses" className="hover:underline">Courses</Link>
                            <span className="mx-2">/</span>
                            <Link href="/courses/software-testing-course" className="hover:underline">Software Testing</Link>
                            <span className="mx-2">/</span>
                            <span className="text-slate-700">SDET</span>
                        </nav>

                        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            SDET Full Form:{" "}
                            <span style={{ color: "rgb(0, 105, 168)" }}>
                                Software Development Engineer in Test
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
                            <strong>SDET stands for Software Development Engineer in Test</strong> — a
                            tester who writes code. Instead of checking software by hand, an SDET builds
                            the automated tests that check it, and the framework those tests run in.
                        </p>

                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                            The role sits between testing and development: you need real programming
                            ability in Java or Python, and the testing judgement to know what is worth
                            automating in the first place.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact-us"
                                className="rounded-xl px-6 py-3 text-center font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                                style={{ backgroundColor: "rgb(0, 105, 168)" }}
                            >
                                Talk to a counsellor
                            </Link>
                            <Link
                                href="/courses/software-testing-course/automation-testing-course"
                                className="rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                            >
                                See the automation course
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SDET vs MANUAL — a table, because comparisons get extracted into
                    featured snippets far more readily than prose. */}
                <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold sm:text-3xl">SDET vs manual tester</h2>
                    <p className="mt-3 max-w-2xl text-slate-600">
                        Both roles are about finding defects. The difference is whether you find them by
                        hand or by writing a program that finds them for you.
                    </p>

                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                            <thead>
                                <tr className="border-b-2 border-slate-200">
                                    <th className="py-3 pr-4 font-semibold"></th>
                                    <th className="py-3 pr-4 font-semibold">Manual tester</th>
                                    <th className="py-3 font-semibold" style={{ color: "rgb(0, 105, 168)" }}>SDET</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-700">
                                {[
                                    ["Core work", "Runs the application and reports defects", "Writes code that tests the application automatically"],
                                    ["Programming", "Not required", "Required — usually Java or Python"],
                                    ["Main tools", "Test case management, bug trackers", "Selenium, REST Assured, Postman, Git, CI pipelines"],
                                    ["Works with", "QA team", "Development team, often inside it"],
                                    ["Typical pay", "Entry level for QA", "Higher — closer to a developer's band"],
                                ].map(([label, manual, sdet]) => (
                                    <tr key={label} className="border-b border-slate-100 align-top">
                                        <td className="py-3 pr-4 font-medium text-slate-900">{label}</td>
                                        <td className="py-3 pr-4">{manual}</td>
                                        <td className="py-3">{sdet}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="mt-5 text-sm text-slate-600">
                        Moving from manual QA to SDET is a common and realistic step — the testing
                        judgement already transfers, and what you add is the coding layer.
                    </p>
                </section>

                {/* SYLLABUS — the "sdet course syllabus" query, answered as structure,
                    with every item linking to the course that teaches it. */}
                <section className="border-y border-slate-100 bg-slate-50">
                    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold sm:text-3xl">What an SDET syllabus covers</h2>
                        <p className="mt-3 max-w-2xl text-slate-600">
                            Six layers, each building on the one before. CDPL teaches these as separate
                            courses you can take together or in sequence.
                        </p>

                        <ol className="mt-8 space-y-5">
                            {SYLLABUS.map((item, i) => (
                                <li key={item.title} className="rounded-xl border border-slate-200 bg-white p-5">
                                    <div className="flex items-start gap-4">
                                        <span
                                            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                                            style={{ backgroundColor: "rgb(0, 105, 168)" }}
                                        >
                                            {i + 1}
                                        </span>
                                        <div>
                                            <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                            <p className="mt-1 text-slate-600">{item.detail}</p>
                                            <Link
                                                href={item.href}
                                                className="mt-2 inline-block text-sm font-medium underline underline-offset-2"
                                                style={{ color: "#ff8c00" }}
                                            >
                                                {item.linkLabel}
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* FAQ — visible, and matching the FAQPage JSON-LD above. Google
                    requires the marked-up answers to be present on the page. */}
                <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
                    <dl className="mt-8 space-y-6">
                        {FAQS.map((faq) => (
                            <div key={faq.question} className="border-b border-slate-100 pb-6">
                                <dt className="font-semibold text-slate-900">{faq.question}</dt>
                                <dd className="mt-2 leading-relaxed text-slate-600">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                {/* CTA */}
                <section className="border-t border-slate-100 bg-slate-50">
                    <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold sm:text-3xl">Ready to start?</h2>
                        <p className="mx-auto mt-3 max-w-xl text-slate-600">
                            Talk to a CDPL counsellor about the current fee, the next batch date, and
                            whether the full SDET track or a single course fits where you are now.
                        </p>
                        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link
                                href="/contact-us"
                                className="rounded-xl px-6 py-3 font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                                style={{ backgroundColor: "rgb(0, 105, 168)" }}
                            >
                                Talk to a counsellor
                            </Link>
                            <Link
                                href="/courses/software-testing-course"
                                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-white"
                            >
                                All software testing courses
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
