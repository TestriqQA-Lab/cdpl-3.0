import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import ManualTestingPageContent from "./ManualTestingPageContent";
import { MANUAL_TESTING_FAQS, MANUAL_TESTING_REVIEW_DATA } from "@/data/manualTestingData";

export const metadata: Metadata = generateMetadata({
  title: "Manual Testing Course with Placement | Learn QA from Scratch",
  description: "Master Manual Testing with our comprehensive course. Learn test cases, bug reporting, Agile, Jira, and API testing basics. 100% placement support. Enroll now!",
  keywords: [
    "manual testing course",
    "QA training for beginners",
    "software testing course with placement",
    "manual testing certification",
    "QA testing course online",
    "learn manual testing",
    "software testing training",
    "QA jobs for freshers",
    "manual testing syllabus",
    "ISTQB foundation level course",
  ],
  url: "/manual-testing-course",
  image: "/og-images/manual-testing-course.jpg",
});

export default function ManualTestingPage() {
  const courseSchema = generateCourseSchema({
    name: "Manual Testing Course",
    description: "Master Manual Testing with our comprehensive course. Learn test cases, bug reporting, Agile, and Jira. 100% placement support.",
    url: "/manual-testing-course",
    slug: "manual-testing-course",
    instructor: "CDPL Expert Mentors",
    duration: "P3M", // 3 months
    rating: MANUAL_TESTING_REVIEW_DATA.ratingValue,
    reviewCount: MANUAL_TESTING_REVIEW_DATA.reviewCount,
    price: 15000,
    currency: "INR",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Manual Testing", url: "/manual-testing-course" },
  ]);

  const faqSchema = generateFAQSchema(MANUAL_TESTING_FAQS);

  return (
    <>
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />
      <ManualTestingPageContent />
    </>
  );
}
