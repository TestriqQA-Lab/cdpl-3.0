"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { getCourseBySlug, getRelatedCourses } from "@/lib/mock-db";
import { MockCourse } from "@/data/mockTestData";
import TestInterface from "@/components/mock-test/TestInterface";
import ResultView from "@/components/mock-test/ResultView";
import { RegistrationData } from "@/components/mock-test/RegistrationModal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
    params: Promise<{ courseSlug: string }>;
}

export default function MockTestPage({ params }: PageProps) {
    const router = useRouter();
    // In Next.js 15 app router, params are async.
    const { courseSlug } = use(params);

    const [course, setCourse] = useState<MockCourse | null>(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<RegistrationData | null>(null);
    const [testCompleted, setTestCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [relatedCourses, setRelatedCourses] = useState<MockCourse[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Check registration
        const storedUser = sessionStorage.getItem("mockTestUser");
        if (!storedUser) {
            router.replace("/mock-test");
            return;
        }
        setUser(JSON.parse(storedUser));

        // Fetch Course
        getCourseBySlug(courseSlug).then((c) => {
            if (!c) {
                // Handle 404
                return;
            }
            setCourse(c);

            // Fetch related
            getRelatedCourses(c.categoryId, c.id).then(setRelatedCourses);

            setLoading(false);
        });
    }, [courseSlug, router]);

    const handleSubmit = async (answers: Record<string, number>) => {
        if (!course || !user) return;
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/mock-test/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userDetails: user,
                    answers,
                    courseSlug: course.slug,
                }),
            });

            if (!response.ok) throw new Error("Submission failed");

            const result = await response.json();
            setScore(result.score);
            setTestCompleted(true);
        } catch (error) {
            console.error(error);
            alert("Failed to submit test. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading || !course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {!testCompleted ? (
                    <div className="md:flex">
                        {/* Heading removed here, now handled inside TestInterface */}
                        <aside className="w-fit h-fit mb-2 md:mb-0 top-0 text-gray-700 mt-2 hover:text-brand transition-all duration-200">
                            <Link href="/mock-test" className="flex items-center gap-1">
                                <ArrowLeft className="w-4 h-4" />
                                <span className="text-md">Back</span>
                            </Link>
                        </aside>
                        <TestInterface
                            questions={course.questions}
                            courseName={course.name}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                        />
                    </div>
                ) : (
                    <ResultView
                        score={score}
                        totalQuestions={course.questions.length}
                        relatedCourses={relatedCourses}
                    />
                )}
            </div>
        </div>
    );
}
