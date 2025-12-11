"use client";

import { ArrowRight, Trophy, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";
import { MockCourse } from "@/data/mockTestData";

interface ResultViewProps {
    score: number;
    totalQuestions: number;
    relatedCourses: MockCourse[];
}

const ResultView = ({ score, totalQuestions, relatedCourses }: ResultViewProps) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 60;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 animate-in fade-in duration-500">

            {/* Result Card */}
            <div className="relative bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden mb-16">
                <div className={`absolute top-0 w-full h-3 ${passed ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

                <div className="relative z-10 px-6 py-12 md:p-16 text-center">

                    <div className={`inline-flex items-center justify-center p-6 rounded-full mb-8 shadow-xl ${passed ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'} animate-in zoom-in duration-700`}>
                        {passed ? <Trophy className="w-16 h-16" /> : <Sparkles className="w-16 h-16" />}
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        {passed ? "Excellent Performance!" : "Keep Learning!"}
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        {passed
                            ? "You've demonstrated strong knowledge in this area. A detailed performance report has been sent to your email."
                            : "Great effort! A detailed report has been sent to your email to help you improve your weak areas."}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-12">
                        <div className="bg-gray-50 rounded-3xl p-6 md:p-8 flex flex-col justify-center">
                            <p className="text-xs text-gray-500 uppercase font-extrabold tracking-widest mb-1">Score</p>
                            <p className="text-4xl md:text-5xl font-black text-gray-900">{score}<span className="text-2xl text-gray-400">/{totalQuestions}</span></p>
                        </div>
                        <div className="bg-gray-50 rounded-3xl p-6 md:p-8 flex flex-col justify-center">
                            <p className="text-xs text-gray-500 uppercase font-extrabold tracking-widest mb-1">Percentage</p>
                            <p className={`text-4xl md:text-5xl font-black ${passed ? 'text-green-600' : 'text-orange-500'}`}>{percentage}%</p>
                        </div>
                        <div className="col-span-2 md:col-span-1 bg-gray-50 rounded-3xl p-6 md:p-8 flex flex-col justify-center">
                            <p className="text-xs text-gray-500 uppercase font-extrabold tracking-widest mb-1">Status</p>
                            <p className={`text-2xl md:text-3xl font-bold ${passed ? 'text-green-600' : 'text-gray-700'}`}>
                                {passed ? "PASSED" : "NEEDS IMPROVEMENT"}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/mock-test"
                            className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center"
                        >
                            <ArrowRight className="mr-2 w-5 h-5 rotate-180" /> Back to Courses
                        </Link>
                        <Link
                            href="/"
                            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-100 text-gray-700 font-bold rounded-xl hover:border-brand hover:text-brand transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
                        >
                            Go to Home
                        </Link>
                    </div>
                </div>
            </div>

            {/* Recommended Courses */}
            {relatedCourses.length > 0 && (
                <div className="text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8 px-2">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900">Recommended Next Steps</h3>
                            <p className="text-gray-500 mt-2">Based on your interest, you might like these courses</p>
                        </div>
                        <Link href="/courses" className="hidden md:flex items-center font-semibold text-brand hover:underline">
                            View All Courses <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedCourses.slice(0, 4).map((course) => (
                            <Link
                                key={course.id}
                                href={`/${course.slug}`} // Or Link to mock-test if user wants to take another test? Assuming course details for now.
                                className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 border-b-4 hover:-translate-y-1 flex flex-col h-full"
                            >
                                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-brand mb-4 group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors line-clamp-2">
                                    {course.name}
                                </h4>
                                <p className="text-sm text-gray-500 mb-4 line-clamp-3 leading-relaxed flex-1">
                                    {course.description}
                                </p>
                                <span className="text-brand font-bold text-sm flex items-center mt-auto">
                                    View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                    <Link href="/courses" className="md:hidden mt-8 inline-flex items-center font-bold text-brand">
                        View All Courses <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ResultView;
