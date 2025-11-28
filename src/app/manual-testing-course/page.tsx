import type { Metadata } from "next";
import { generateCourseMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import ManualTestingPageContent from "./ManualTestingPageContent";

export const metadata: Metadata = generateCourseMetadata({
  courseName: "Manual Testing Course",
  description: "Master Manual Testing with our comprehensive course. Learn test cases, bug reporting, Agile, and Jira. 100% placement support. Enroll now!",
  slug: "manual-testing-course",
});

export default function ManualTestingPage() {
  const courseSchema = generateCourseSchema({
    name: "Manual Testing Course",
    description: "Master Manual Testing with our comprehensive course. Learn test cases, bug reporting, Agile, and Jira. 100% placement support.",
    url: "/manual-testing-course",
    slug: "manual-testing-course",
    instructor: "CDPL Expert Mentors",
    duration: "P3M", // 3 months
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Manual Testing", url: "/manual-testing-course" },
  ]);

  return (
    <>
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <ManualTestingPageContent />
    </>
  );
}
