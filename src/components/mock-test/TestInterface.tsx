"use client";

import { useEffect, useState } from "react";
import { Question } from "@/data/mockTestData";
import { Timer, CheckCircle, AlertCircle } from "lucide-react";

interface TestInterfaceProps {
    questions: Question[];
    onSubmit: (answers: Record<string, number>) => void;
    isSubmitting: boolean;
}

const TestInterface = ({ questions, onSubmit, isSubmitting }: TestInterfaceProps) => {
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

    useEffect(() => {
        if (timeLeft <= 0) {
            onSubmit(answers);
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, onSubmit, answers]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const handleOptionSelect = (questionId: string, optionIndex: number) => {
        setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    };

    const answeredCount = Object.keys(answers).length;
    const progress = (answeredCount / questions.length) * 100;
    const isUrgent = timeLeft < 300; // Less than 5 mins

    return (
        <div className="max-w-4xl mx-auto pb-24">
            {/* Sticky Header */}
            <div className="sticky top-0 z-40 pt-6 pb-6 bg-[#fafafa]/80 backdrop-blur-lg">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">

                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className={`p-3 rounded-xl transition-colors ${isUrgent ? 'bg-red-50 text-red-500 animate-pulse' : 'bg-brand/10 text-brand'}`}>
                            <Timer className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Time Remaining</p>
                            <p className={`text-2xl font-mono font-bold ${isUrgent ? 'text-red-600' : 'text-gray-900'}`}>
                                {formatTime(timeLeft)}
                            </p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 flex flex-col justify-center">
                        <div className="flex justify-between text-xs font-semibold uppercase tracking-wider mb-2">
                            <span className="text-gray-400">Progress</span>
                            <span className="text-brand">{Math.round(progress)}% Completed</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-brand to-orange-400 h-full rounded-full transition-all duration-700 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Questions List */}
            <div className="space-y-8 mt-2">
                {questions.map((q, index) => {
                    const isAnswered = answers[q.id] !== undefined;
                    return (
                        <div
                            key={q.id}
                            className={`bg-white rounded-3xl p-6 md:p-10 border transition-all duration-300 ${isAnswered ? 'border-brand/30 shadow-brand/5 shadow-lg' : 'border-gray-100 shadow-sm hover:shadow-md'}`}
                        >
                            <div className="flex gap-4 md:gap-6">
                                <div className={`hidden md:flex flex-shrink-0 w-12 h-12 rounded-2xl items-center justify-center text-lg font-bold transition-colors ${isAnswered ? 'bg-brand text-white' : 'bg-gray-100 text-gray-500'
                                    }`}>
                                    {index + 1}
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-6">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                                            <span className="md:hidden inline-block mr-2 text-brand">#{index + 1}.</span>
                                            {q.text}
                                        </h3>
                                        {isAnswered && (
                                            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wide">
                                                <CheckCircle className="w-3.5 h-3.5" /> Answered
                                            </span>
                                        )}
                                    </div>

                                    <div className="grid gap-3">
                                        {q.options.map((option, idx) => {
                                            const isSelected = answers[q.id] === idx;
                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleOptionSelect(q.id, idx)}
                                                    className={`group w-full text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between relative overflow-hidden ${isSelected
                                                        ? "border-brand bg-orange-50/50"
                                                        : "border-gray-100 bg-gray-50/30 hover:border-brand/30 hover:bg-white"
                                                        }`}
                                                >
                                                    {isSelected && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand"></div>}

                                                    <div className="flex items-center gap-4 relative z-10 w-full">
                                                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all flex-shrink-0 ${isSelected ? "border-brand bg-brand text-white scale-110" : "border-gray-300 text-gray-400 group-hover:border-brand/50 group-hover:text-brand"
                                                            }`}>
                                                            {String.fromCharCode(65 + idx)}
                                                        </div>
                                                        <span className={`text-base md:text-lg font-medium transition-colors ${isSelected ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>{option}</span>
                                                    </div>

                                                    {isSelected && <CheckCircle className="w-6 h-6 text-brand animate-in zoom-in spin-in-12 duration-300" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-gray-200 z-50">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="hidden sm:block text-sm text-gray-500">
                        <span className="font-bold text-gray-900">{answeredCount}</span> of {questions.length} attempted
                    </div>
                    <button
                        onClick={() => onSubmit(answers)}
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white text-lg font-bold py-3.5 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                                Submitting...
                            </>
                        ) : (
                            <>
                                Submit Assessment
                                {answeredCount < questions.length && <AlertCircle className="w-5 h-5 text-gray-400" />}
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestInterface;
