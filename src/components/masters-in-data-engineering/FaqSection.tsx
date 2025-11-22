"use client";

// src/components/data-analytics-bi-bigdata/FaqSection.tsx
import React, { useState } from "react";
import Link from "next/link";
import { FaqItem } from "./types";
import { ChevronDown } from "lucide-react";

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What is the eligibility for this program?",
    answer:
      "A bachelor's degree in any discipline is generally required. Basic knowledge of programming or databases is beneficial but not mandatory, as the program starts with foundational concepts.",
  },
  {
    id: 2,
    question: "Is this program suitable for beginners?",
    answer:
      "Yes, the curriculum is structured to take beginners through foundational concepts in SQL and Python before moving to advanced topics like Big Data Engineering and BI tools.",
  },
  {
    id: 3,
    question: "What is the difference between a Data Analyst and a Data Engineer?",
    answer:
      "A Data Analyst focuses on analyzing data to extract insights and create reports (using BI tools). A Data Engineer focuses on building and maintaining the robust infrastructure (pipelines, databases) that makes the data available for the analyst.",
  },
  {
    id: 4,
    question: "What kind of job assistance is provided?",
    answer:
      "We provide comprehensive job assistance including resume building, mock interviews, portfolio review, and connections to our network of hiring partners. We are committed to helping you secure a role.",
  },
  {
    id: 5,
    question: "Are the certifications globally recognized?",
    answer:
      "Yes, the program includes preparation for and certification in industry-standard tools and technologies like Tableau, Power BI, and Big Data concepts, which are globally recognized.",
  },
];

// Map each FAQ to a category for grouped layout (no change in Q/A content)
const faqCategoryMap: Record<number, string> = {
  1: "Eligibility & Basics",
  2: "Learning Format & Suitability",
  3: "Roles & Career Clarity",
  4: "Placement & Job Assistance",
  5: "Certification & Recognition",
};

const categories = Array.from(
  new Set(faqData.map((item) => faqCategoryMap[item.id]))
);

const FaqSection: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-[0.25em] text-teal-600 uppercase">
            Quick Answers
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h3>
          <p className="text-lg text-slate-600">
            Everything you need to know about the program, eligibility, and
            career outcomes.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Get clarity on how this{" "}
            <strong>Data Analytics with BI and Big Data Engineering Master Program</strong>{" "}
            helps you transition into{" "}
            <em>Business Intelligence, Data Analyst, and Big Data Engineer</em>{" "}
            roles using tools like <strong>SQL, Python, Tableau, Power BI, Hadoop, and Spark</strong>.
          </p>
        </div>

        {/* FAQs by Category */}
        {categories.map((category) => (
          <div key={category} className="mb-12 max-w-4xl mx-auto">
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-teal-500 rounded-full"></span>
              {category}
            </h3>

            {/* FAQs List */}
            <div className="space-y-4">
              {faqData
                .filter((item) => faqCategoryMap[item.id] === category)
                .map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border-2 border-slate-200 hover:border-teal-300 transition-all duration-300 overflow-hidden"
                  >
                    {/* Question */}
                    <button
                      onClick={() =>
                        setExpandedFAQ(
                          expandedFAQ === item.id ? null : item.id
                        )
                      }
                      className="w-full px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors text-left"
                    >
                      <h4 className="text-lg font-semibold text-slate-900">
                        {item.question}
                      </h4>
                      <ChevronDown
                        className={`w-6 h-6 text-teal-600 transition-transform duration-300 flex-shrink-0 ${expandedFAQ === item.id ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {/* Answer */}
                    {expandedFAQ === item.id && (
                      <div className="px-6 pb-5 border-t border-slate-200 bg-slate-50">
                        <p className="text-slate-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Still Have Questions CTA */}
        <div className="mt-8 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Our counseling team can guide you on whether this{" "}
            <strong>BI & Big Data Engineering master program</strong> is the
            right fit for your goals—whether you&apos;re an{" "}
            <em>IT professional, fresher, BI analyst, or career changer</em>.
            Reach out for personalized guidance on{" "}
            <strong>career paths, placements, and curriculum details</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="tel:+917888383788"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              📞 Call Us
            </Link>
            <Link
              href="mailto:contact@cinutedigital.com"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              ✉️ Email Us
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600 sm:text-sm">
            Keywords: Data Analytics with BI and Big Data Engineering FAQ •
            eligibility for data engineering course • job assistance and
            placement support • globally recognized Tableau and Power BI
            certifications • difference between Data Analyst and Data Engineer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
