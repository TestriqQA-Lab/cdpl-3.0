"use client";
import { ChevronDown, BookOpen } from "lucide-react";
import { useState } from "react";

interface Module {
    id: number;
    title: string;
    duration: string;
    topics: string[];
    projects?: string[];
    color: string;
    icon: string;
}

export default function CurriculumSection() {
    const [expandedModule, setExpandedModule] = useState<number | null>(null);

    const modules: Module[] = [
        {
            id: 1,
            title: "Python Fundamentals",
            duration: "2 hours",
            icon: "🐍",
            color: "from-blue-50 to-blue-100",
            topics: [
                "Introduction to Python Programming",
                "Basic Syntax, Variables, and Data Types",
                "Control Structures: Conditionals and Loops",
                "Functions, Modules, and Script Execution",
            ],
        },
        {
            id: 2,
            title: "Python Visualization & Environment Setup",
            duration: "1.5 hours",
            icon: "⚙️",
            color: "from-purple-50 to-purple-100",
            topics: [
                "Python for Visualization: An Overview",
                "Key Python Libraries for Data Visualization",
                "Installing Python and Setting Up Jupyter Notebook",
                "Environment Setup on Windows, macOS, and Linux",
            ],
        },
        {
            id: 3,
            title: "Machine Learning Basics",
            duration: "2 hours",
            icon: "🤖",
            color: "from-green-50 to-green-100",
            topics: [
                "Introduction to Machine Learning",
                "Supervised vs. unsupervised learning",
                "A Glimpse into Model Building",
                "Overview of basic evaluation metrics",
            ],
        },
        {
            id: 4,
            title: "Data Analysis with Pandas",
            duration: "3.5 hours",
            icon: "📊",
            color: "from-orange-50 to-orange-100",
            topics: [
                "Introduction to pandas & DataFrames",
                "Working with External Data Sources",
                "Data Exploration and Cleaning",
                "Data Manipulation and Transformation",
                "Exploratory Data Analysis (EDA) with Pandas",
                "Cancer Data Analysis Case Study",
            ],
            projects: [
                "Analysing Patient Survival Rates in Cancer Dataset",
                "Visualizing Cancer Incidence and Mortality Statistics",
            ],
        },
        {
            id: 5,
            title: "Data Visualization with Matplotlib",
            duration: "3 hours",
            icon: "📈",
            color: "from-red-50 to-red-100",
            topics: [
                "Introduction to Matplotlib",
                "Customizing Plots",
                "Figures, Axes, and Advanced Plot Types",
                "Visualization with Annotations and DataFrames",
                "Interactivity and Animation",
                "Best Practices for Effective Visualizations",
            ],
            projects: [
                "HR Data Plotting",
                "Real-Time Data Monitoring with Animations",
            ],
        },
        {
            id: 6,
            title: "Advanced Visualization with Seaborn",
            duration: "2.5 hours",
            icon: "🎨",
            color: "from-cyan-50 to-cyan-100",
            topics: [
                "Introduction to Seaborn",
                "Basic Plotting with Seaborn",
                "Statistical Visualization Techniques",
                "Categorical Data Visualization",
                "Advanced Visualization Techniques",
                "Customization and Aesthetics in Seaborn",
            ],
            projects: [
                "Titanic Survival Analysis",
                "Financial Dataset Visualization",
            ],
        },
        {
            id: 7,
            title: "Scientific Computing with NumPy",
            duration: "2 hours",
            icon: "🔬",
            color: "from-indigo-50 to-indigo-100",
            topics: [
                "Introduction to NumPy",
                "Numpy Basics",
                "Numpy Arrays",
                "Data Preparation with NumPy",
                "Mathematical Functions",
                "Advanced Indexing",
            ],
            projects: [
                "Analysing Patient Survival Rates in Cancer Dataset",
                "Visualizing Cancer Incidence and Mortality Statistics",
            ],
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                        Comprehensive <span className="text-orange-600">Curriculum</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Master 7 modules covering Python fundamentals to advanced data visualization. Each module is designed with hands-on projects and real-world applications.
                    </p>
                </div>

                {/* Modules List */}
                <div className="space-y-4 mb-12">
                    {modules.map((module) => (
                        <div
                            key={module.id}
                            className={`bg-gradient-to-r ${module.color} rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-all duration-300 overflow-hidden`}
                        >
                            {/* Module Header */}
                            <button
                                onClick={() =>
                                    setExpandedModule(
                                        expandedModule === module.id ? null : module.id
                                    )
                                }
                                className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/30 transition-colors"
                            >
                                <div className="flex items-center gap-4 text-left">
                                    <span className="text-3xl">{module.icon}</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">
                                            Module {module.id}: {module.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 mt-1">
                                            {module.duration}
                                        </p>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${expandedModule === module.id ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Module Content */}
                            {expandedModule === module.id && (
                                <div className="px-6 pb-6 border-t border-slate-200/50 bg-white/50">
                                    {/* Topics */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                            <BookOpen className="w-5 h-5 text-orange-600" />
                                            Topics Covered
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {module.topics.map((topic, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-3 text-slate-700"
                                                >
                                                    <span className="text-orange-500 font-bold mt-0.5">
                                                        •
                                                    </span>
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Projects */}
                                    {module.projects && module.projects.length > 0 && (
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                                <span className="text-2xl">🚀</span>
                                                Hands-On Projects
                                            </h4>
                                            <ul className="space-y-2">
                                                {module.projects.map((project, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-3 bg-orange-50 p-3 rounded-lg border border-orange-200"
                                                    >
                                                        <span className="text-orange-600 font-bold">→</span>
                                                        <span className="text-slate-700">{project}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Learning Outcomes */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">What You'll Master</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Data Processing",
                                description: "Clean, transform, and prepare data for analysis",
                            },
                            {
                                title: "Statistical Analysis",
                                description: "Perform exploratory data analysis and statistical modeling",
                            },
                            {
                                title: "Data Visualization",
                                description: "Create compelling visualizations and interactive dashboards",
                            },
                        ].map((outcome, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-5 border border-orange-200">
                                <h4 className="font-bold text-slate-900 mb-2">{outcome.title}</h4>
                                <p className="text-sm text-slate-600">{outcome.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
