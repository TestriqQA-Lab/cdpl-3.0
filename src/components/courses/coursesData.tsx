"use client"; // icons render on both sides; safe to mark client for simplicity
import { BookOpen, Code, TrendingUp, BarChart3, Brain, Workflow, Sparkles, Database, GraduationCap, Cpu, Megaphone } from "lucide-react";
import type { Category } from "@/components/courses/course";


export const coursesData: Category[] = [
    {
        id: 'software-testing',
        name: 'Software Testing',
        description: 'Master quality assurance and testing methodologies for robust software delivery',
        icon: <BookOpen className="w-6 h-6" />,
        color: 'text-blue-600',
        borderColor: 'border-blue-200',
        bgColor: 'bg-blue-50',
        iconBgColor: 'bg-blue-100',
        courses: [
            {
                id: 'st-1',
                title: 'Manual Testing Fundamentals',
                href: "manual-testing-course",
                description: 'Learn comprehensive manual testing techniques, test case design, bug reporting, and QA best practices for web and mobile applications',
                duration: '8 weeks',
                level: 'Beginner',
                students: '2,450+',
                rating: 4.8,
                price: '$299',
                skills: ['Test Case Design', 'Bug Tracking', 'SDLC', 'Agile Testing', 'JIRA'],
                icon: <BookOpen className="w-5 h-5" />
            },

            // Newly added from the image
            {
                id: 'st-2',
                title: 'API Testing using POSTMAN and RestAPIs',
                href: "api-testing",
                description: 'Hands-on API testing with Postman: REST principles, requests, assertions, environments, Newman, and basic automation.',
                duration: '5–6 weeks',
                level: 'Beginner–Intermediate',
                students: '1,350+',
                rating: 4.8,
                price: '$249',
                skills: ['Postman', 'REST', 'JSON', 'Auth (JWT/OAuth)', 'Newman Reports'],
                icon: <Code className="w-5 h-5" />
            },
            {
                id: 'st-3',
                href: "dbms-course",
                title: 'Database Management System using MySQL',
                description: 'Practical DBMS concepts with MySQL: schema design, SQL queries, joins, views, indexes, procedures, and data integrity.',
                duration: '6 weeks',
                level: 'Beginner–Intermediate',
                students: '1,600+',
                rating: 4.7,
                price: '$259',
                skills: ['SQL', 'Joins', 'Indexes', 'Normalization', 'Stored Procedures'],
                icon: <BookOpen className="w-5 h-5" />
            },
            {
                id: 'st-4',
                title: 'ETL Testing Course',
                href: "etl-testing",
                description: 'Validate data in ETL pipelines and data warehouses: source-to-target mapping, data quality, and reporting checks.',
                duration: '6–8 weeks',
                level: 'Intermediate',
                students: '980+',
                rating: 4.7,
                price: '$329',
                skills: ['ETL Concepts', 'Data Mapping', 'SQL for ETL', 'Data Quality', 'DW Basics'],
                icon: <BookOpen className="w-5 h-5" />
            },
            {
                id: 'st-5',
                title: 'Advanced Software Testing',
                href: "advance-software-testing",
                description: 'Deep dive into advanced test strategies, risk-based testing, test optimization, coverage, and metrics-driven QA.',
                duration: '8 weeks',
                level: 'Advanced',
                students: '1,120+',
                rating: 4.8,
                price: '$349',
                skills: ['Risk-based Testing', 'Coverage Analysis', 'Test Strategy', 'Metrics', 'Test Optimization'],
                icon: <BookOpen className="w-5 h-5" />
            },
            {
                id: 'st-6',
                title: 'Advanced Automation Testing',
                href: "automation-testing-course",
                description: 'Framework-level automation: page objects, data-driven testing, CI/CD integration, reporting, and best practices.',
                duration: '10–12 weeks',
                level: 'Advanced',
                students: '1,040+',
                rating: 4.9,
                price: '$429',
                skills: ['Framework Design', 'POM', 'Data-Driven', 'CI/CD', 'Reporting'],
                icon: <Code className="w-5 h-5" />
            },
            {
                id: 'st-7',
                title: 'Advanced Manual and Automation Testing - Master Program',
                href: "advance-manual-automation-testing",
                description: 'End-to-end master track covering advanced manual QA, API, DB/ETL, and enterprise-grade automation frameworks.',
                duration: '20–24 weeks',
                level: 'Advanced',
                students: '2,200+',
                rating: 4.9,
                price: '$899',
                skills: ['Advanced QA', 'API + DB Testing', 'ETL', 'Automation Frameworks', 'DevOps Basics'],
                icon: <BookOpen className="w-5 h-5" />
            }
        ]

    },
    {
        id: 'data-science',
        name: 'Data Science',
        description: 'Unlock insights from data with advanced analytics, machine learning, and statistical modeling',
        icon: <TrendingUp className="w-6 h-6" />,
        color: 'text-purple-600',
        borderColor: 'border-purple-200',
        bgColor: 'bg-purple-50',
        iconBgColor: 'bg-purple-100',
        courses: [
            {
                id: "ds-ml-python-hero",
                title: "Machine Learning and Data Science with Python - Hero Program",
                href: "machine-learning-course",
                description:
                    "Hands-on ML with Python: data wrangling, feature engineering, model building, and deployment using real projects and datasets.",
                duration: "16 weeks",
                level: "Intermediate",
                students: "3,800+",
                rating: 4.8,
                price: "$499",
                skills: [
                    "Python",
                    "Pandas/NumPy",
                    "Scikit-learn",
                    "Feature Engineering",
                    "Model Deployment",
                ],
                icon: <Brain className="w-5 h-5" />,
            },
            {
                id: "ds-deep-nlp-genai",
                title: "Deep Learning, NLP and GenerativeAI",
                href: "generative-ai-course",
                description:
                    "Build modern DL pipelines: CNNs, RNNs, Transformers, LLMs, prompt design, and fine-tuning for real-world NLP tasks.",
                duration: "12 weeks",
                level: "Advanced",
                students: "2,950+",
                rating: 4.9,
                price: "$599",
                skills: [
                    "PyTorch/TensorFlow",
                    "Transformers",
                    "LLMs & Prompting",
                    "Fine-tuning",
                    "Vector Databases",
                ],
                icon: <Cpu className="w-5 h-5" />,
            },
            {
                id: "ds-adv-analytics-hero",
                title: "Advanced Data Analytics - Hero Program",
                href: "data-analytics",
                description:
                    "Master analytics at scale: SQL power skills, BI storytelling, experimentation, and decision science for business impact.",
                duration: "10 weeks",
                level: "Intermediate",
                students: "4,200+",
                rating: 4.7,
                price: "$449",
                skills: [
                    "Advanced SQL",
                    "A/B Testing",
                    "BI Dashboards",
                    "Data Storytelling",
                    "Statistics",
                ],
                icon: <BarChart3 className="w-5 h-5" />,
            },
            {
                id: "ds-big-data-eng",
                title: "Big Data Engineering",
                href: "data-engineering-course",
                description:
                    "Design reliable data platforms with batch/stream processing, data quality, and orchestration on modern cloud stacks.",
                duration: "14 weeks",
                level: "Advanced",
                students: "1,900+",
                rating: 4.8,
                price: "$649",
                skills: [
                    "Spark",
                    "Kafka",
                    "Airflow",
                    "Data Modeling",
                    "Lakehouse & ETL",
                ],
                icon: <Database className="w-5 h-5" />,
            },
            {
                id: "ds-prompt-eng-genai",
                title: "Prompt Engineering with Generative AI",
                href: "prompt-engineering-course",
                description:
                    "Structure prompts, tools, and evaluation to build reliable GenAI apps: chaining, RAG basics, and safety/guardrails.",
                duration: "6 weeks",
                level: "Beginner",
                students: "2,300+",
                rating: 4.6,
                price: "$299",
                skills: [
                    "Prompt Patterns",
                    "RAG Basics",
                    "Evaluation",
                    "Guardrails",
                    "LLM APIs",
                ],
                icon: <Sparkles className="w-5 h-5" />,
            },
            {
                id: "ds-adv-ds-ml-masterclass",
                title: "Advanced Data Science and Machine Learning Masterclass",
                href: "data-science-course",
                description:
                    "End-to-end ML systems: feature stores, MLOps, experiment tracking, and production monitoring with case studies.",
                duration: "12 weeks",
                level: "Advanced",
                students: "1,450+",
                rating: 4.9,
                price: "$699",
                skills: [
                    "MLOps",
                    "Feature Stores",
                    "Experiment Tracking",
                    "Model Monitoring",
                    "CI/CD for ML",
                ],
                icon: <Workflow className="w-5 h-5" />,
            },
            {
                id: "ds-comprehensive-ai-master",
                title: "Comprehensive Data Science and AI - Master Program",
                href: "ai-course",
                description:
                    "A complete DS/AI pathway: Python, analytics, ML, DL, and GenAI—capstones, mentoring, and portfolio readiness.",
                duration: "24 weeks",
                level: "All Levels",
                students: "5,100+",
                rating: 4.9,
                price: "$1,199",
                skills: [
                    "Python & SQL",
                    "Analytics & BI",
                    "ML/DL",
                    "GenAI",
                    "Capstone Projects",
                ],
                icon: <GraduationCap className="w-5 h-5" />,
            },
        ]

    },
    {
        id: 'web-development',
        name: 'Web Development',
        description: 'Build modern, responsive, and scalable web applications with cutting-edge technologies',
        icon: <Code className="w-6 h-6" />,
        color: 'text-green-600',
        borderColor: 'border-green-200',
        bgColor: 'bg-green-50',
        iconBgColor: 'bg-green-100',
        courses: [
            // {
            //     id: 'wd-1',
            //     title: 'Full Stack Web Development',
            //     description: 'Complete MERN stack development covering MongoDB, Express.js, React, and Node.js with real-world projects',
            //     duration: '20 weeks',
            //     level: 'Intermediate',
            //     students: '4,500+',
            //     rating: 4.8,
            //     price: '$499',
            //     skills: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs'],
            //     icon: <Code className="w-5 h-5" />
            // },
            // {
            //     id: 'wd-2',
            //     title: 'Modern Frontend Development',
            //     description: 'Master React, Next.js, TypeScript, and Tailwind CSS to build lightning-fast, SEO-optimized web applications',
            //     duration: '14 weeks',
            //     level: 'Intermediate',
            //     students: '3,800+',
            //     rating: 4.9,
            //     price: '$449',
            //     skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Performance'],
            //     icon: <Code className="w-5 h-5" />
            // }
        ]
    },
    // add in your imports file (if not already present):
    // import { Megaphone, BarChart3 } from "lucide-react";

    {
        id: "digital-marketing",
        name: "Digital Marketing",
        description:
            "Master SEO, SEM, social media, content, and analytics to drive measurable growth across channels.",
        icon: <Megaphone className="w-6 h-6" />,
        color: "text-blue-600",
        borderColor: "border-blue-200",
        bgColor: "bg-blue-50",
        iconBgColor: "bg-blue-100",
        courses: [
            {
                id: "dm-analytics-master",
                title: "Digital Marketing and Analytics - Master Program",
                href: "digital-marketing-course",
                description:
                    "End-to-end training in SEO, Google & Meta Ads, social media strategy, GA4, and Looker Studio—learn to plan, execute, and measure ROI with real projects.",
                duration: "20 weeks",
                level: "Beginner–Advanced",
                students: "2,900+",
                rating: 4.9,
                price: "$599",
                skills: [
                    "SEO",
                    "Google Ads (SEM)",
                    "Meta Ads",
                    "GA4",
                    "Looker Studio",
                    "Content Strategy",
                    "A/B Testing"
                ],
                icon: <BarChart3 className="w-5 h-5" />,
            },
        ],
    },

    {
        id: 'business-intelligence',
        name: 'Business Intelligence',
        description: 'Transform data into actionable insights with powerful BI tools and analytics platforms',
        icon: <BarChart3 className="w-6 h-6" />,
        color: 'text-cyan-600',
        borderColor: 'border-cyan-200',
        bgColor: 'bg-cyan-50',
        iconBgColor: 'bg-cyan-100',
        courses: [],
        comingSoon: true
    },
    {
        id: 'artificial-intelligence',
        name: 'Artificial Intelligence',
        description: 'Explore the future of technology with AI, deep learning, and intelligent automation systems',
        icon: <Brain className="w-6 h-6" />,
        color: 'text-pink-600',
        borderColor: 'border-pink-200',
        bgColor: 'bg-pink-50',
        iconBgColor: 'bg-pink-100',
        courses: [],
        comingSoon: true
    }
];