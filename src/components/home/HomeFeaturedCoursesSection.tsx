import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Clock, Users, ArrowRight, Star, Zap, Download, BookOpen, Gauge, Shield, Smartphone, CheckCircle, Cpu, BarChart3, Code, TrendingUp } from 'lucide-react';
import { DownloadFormButton } from '@/components/DownloadForm';
import Link from 'next/link';

// --- Card Styling Constants from CourseOverviewSection.tsx ---
type Variant = {
  header: string;
  button: string;
  hoverBorder: string;
};

const VARIANTS: Variant[] = [
  {
    header:
      "bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white",
    button: "bg-gradient-to-r from-indigo-600 to-fuchsia-600",
    hoverBorder: "hover:border-indigo-300",
  },
  {
    header:
      "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white",
    button: "bg-gradient-to-r from-emerald-600 to-cyan-600",
    hoverBorder: "hover:border-emerald-300",
  },
  {
    header:
      "bg-gradient-to-br from-rose-600 via-pink-600 to-orange-500 text-white",
    button: "bg-gradient-to-r from-rose-600 to-orange-500",
    hoverBorder: "hover:border-rose-300",
  },
];

const pickVariant = (i: number): Variant => {
  return VARIANTS[i % VARIANTS.length];
};

// --- Mock Data Structure (Updated to match new categories) ---
interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  students: string;
  rating: number;
  level: string;
  popular: boolean;
  link: string;
  icon: keyof typeof iconMap;
  features: string[];
}

const iconMap = {
  BookOpen: <BookOpen className="w-10 h-10" />,
  Zap: <Zap className="w-10 h-10" />,
  Gauge: <Gauge className="w-10 h-10" />,
  Shield: <Shield className="w-10 h-10" />,
  Smartphone: <Smartphone className="w-10 h-10" />,
  Cpu: <Cpu className="w-10 h-10" />,
  BarChart3: <BarChart3 className="w-10 h-10" />,
  Code: <Code className="w-10 h-10" />,
  TrendingUp: <TrendingUp className="w-10 h-10" />,
};

const COURSES: Course[] = [
  // --- Software Testing Courses (Mapped from Header.tsx) ---
  {
    id: 1,
    title: 'Manual Software Testing',
    category: 'Software Testing',
    description: 'Learn to facilitate Scrum teams and drive Agile projects effectively.',
    duration: '12 Weeks',
    students: '1200+',
    rating: 4.9,
    level: 'Beginner',
    popular: true,
    link: '/manual-testing-course',
    icon: 'BookOpen',
    features: ['ISTQB Foundation Prep', 'Test Case Design', 'Defect Life Cycle'],
  },
  {
    id: 2,
    title: 'Advanced Automation Testing',
    category: 'Software Testing',
    description: 'Drive product vision and delivery in SAFe settings.',
    duration: '16 Weeks',
    students: '950+',
    rating: 4.8,
    level: 'Intermediate',
    popular: true,
    link: '/automation-testing-course',
    icon: 'Code',
    features: ['Selenium WebDriver', 'CI/CD Integration (Jenkins)', 'Advanced Java Concepts'],
  },
  {
    id: 3,
    title: 'API Testing using POSTMAN and RestAPIs',
    category: 'Software Testing',
    description: 'Master API testing using Postman, Rest Assured, and Groovy for robust web services.',
    duration: '10 Weeks',
    students: '700+',
    rating: 4.7,
    level: 'Intermediate',
    popular: false,
    link: '/api-testing',
    icon: 'Zap',
    features: ['Postman & Swagger', 'Rest Assured Framework', 'JSON/XML Validation'],
  },
  {
    id: 4,
    title: 'ETL Testing Course',
    category: 'Software Testing',
    description: 'Learn to lead Agile transformations using the SAFe framework.',
    duration: '10 Weeks',
    students: '500+',
    rating: 4.6,
    level: 'Intermediate',
    popular: false,
    link: '/etl-testing',
    icon: 'Shield',
    features: ['Data Warehousing Concepts', 'SQL Testing', 'ETL Tools'],
  },

  // --- Data Science Courses (Mapped from Header.tsx) ---
  {
    id: 5,
    title: 'Advanced Data Science and Machine Learning Masterclass',
    category: 'Data Science',
    description: 'Master coding challenges and technical questions.',
    duration: '20 Weeks',
    students: '1100+',
    rating: 4.9,
    level: 'Advanced',
    popular: true,
    link: '/data-science-course',
    icon: 'BarChart3',
    features: ['Python Programming', 'Statistical Modeling', 'Machine Learning'],
  },
  {
    id: 6,
    title: 'Machine Learning and Data Science with Python - Hero Program',
    category: 'Data Science',
    description: 'Build strategies to ace behavioral and technical interviews.',
    duration: '16 Weeks',
    students: '900+',
    rating: 4.8,
    level: 'Intermediate',
    popular: true,
    link: '/machine-learning-course',
    icon: 'Cpu',
    features: ['Supervised/Unsupervised Learning', 'TensorFlow & Keras', 'Model Deployment'],
  },
  {
    id: 7,
    title: 'Advanced Data Analytics - Hero Program',
    category: 'Data Science',
    description: 'Craft a standout resume to impress recruiters.',
    duration: '14 Weeks',
    students: '750+',
    rating: 4.7,
    level: 'Intermediate',
    popular: false,
    link: '/data-analytics',
    icon: 'Gauge',
    features: ['Data Cleaning & Preprocessing', 'Advanced Excel', 'Data Visualization'],
  },

  // --- Business Intelligence Courses (Mapped from Header.tsx - part of Data Science category) ---
  {
    id: 8,
    title: 'Data Analysis with BI & Big Data Engineering Master Program',
    category: 'Business Intelligence',
    description: 'Master coding challenges and technical questions.',
    duration: '24 Weeks',
    students: '600+',
    rating: 4.8,
    level: 'Advanced',
    popular: true,
    link: '/data-analysis-bi-big-data',
    icon: 'BarChart3',
    features: ['Power BI/Tableau', 'Big Data Concepts', 'Data Warehousing'],
  },
  {
    id: 9,
    title: 'Big Data Engineering',
    category: 'Business Intelligence',
    description: 'Master coding challenges and technical questions.',
    duration: '18 Weeks',
    students: '450+',
    rating: 4.6,
    level: 'Advanced',
    popular: false,
    link: '/data-engineering-course',
    icon: 'Gauge',
    features: ['Hadoop & Spark', 'NoSQL Databases', 'Data Pipelines'],
  },

  // --- Artificial Intelligence Courses (Mapped from Header.tsx - part of Data Science category) ---
  {
    id: 10,
    title: 'Comprehensive Data Science and AI - Master Program',
    category: 'Artificial Intelligence',
    description: 'Master coding challenges and technical questions.',
    duration: '28 Weeks',
    students: '800+',
    rating: 4.9,
    level: 'Master',
    popular: true,
    link: '/ai-course',
    icon: 'Cpu',
    features: ['Deep Learning', 'NLP', 'Computer Vision'],
  },
  {
    id: 11,
    title: 'Deep Learning, NLP and GenerativeAI',
    category: 'Artificial Intelligence',
    description: 'Practice real-world interview scenarios with feedback.',
    duration: '12 Weeks',
    students: '550+',
    rating: 4.8,
    level: 'Advanced',
    popular: false,
    link: '/generative-ai-course',
    icon: 'TrendingUp',
    features: ['LLM Architectures', 'Prompt Engineering', 'AI Ethics'],
  },
  {
    id: 12,
    title: 'Prompt Engineering with Generative AI',
    category: 'Artificial Intelligence',
    description: 'Master coding challenges and technical questions.',
    duration: '8 Weeks',
    students: '400+',
    rating: 4.7,
    level: 'Intermediate',
    popular: false,
    link: '/prompt-engineering-course',
    icon: 'Zap',
    features: ['Advanced Prompting', 'AI Tools', 'Creative AI'],
  },

  // --- Digital Marketing Courses (Mapped from Header.tsx) ---
  {
    id: 13,
    title: 'Digital Marketing and Analytics - Master Program',
    category: 'Digital Marketing',
    description: 'Develop skills to manage projects efficiently and effectively.',
    duration: '16 Weeks',
    students: '700+',
    rating: 4.8,
    level: 'Master',
    popular: true,
    link: '/digital-marketing-course',
    icon: 'Smartphone',
    features: ['SEO & SEM', 'Google Analytics 4', 'Social Media Marketing'],
  },
];

// --- Course Card Component (Styled like ModuleCard) ---
const CourseCard: React.FC<{ course: Course; index: number }> = ({ course, index }) => {
  const variant = pickVariant(index);
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.article
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`relative group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 ${variant.hoverBorder} transform hover:-translate-y-2 flex flex-col h-full`}
    >
      <div className={`${variant.header} p-6 relative overflow-hidden`}>
        {/* Background Pattern (simplified) */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
              {iconMap[course.icon]}
            </div>
            <div
              className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg"
              aria-label={`Rating ${course.rating.toFixed(1)} out of 5`}
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold text-gray-800">
                {course.rating.toFixed(1)}
              </span>
            </div>
          </div>

          {course.popular && (
            <span className="inline-flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-lg">
              <Zap className="w-3 h-3" />
              POPULAR
            </span>
          )}

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
            {course.title}
          </h3>

          <p className="text-white/90 text-sm leading-relaxed">
            {course.description}
          </p>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center space-x-2 text-slate-700">
            <Clock className="w-4 h-4 text-blue-500" />
            <span className="font-medium">{course.duration}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-semibold">
              {course.level}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm text-slate-700 bg-slate-50 rounded-lg p-3">
          <Users className="w-4 h-4 text-purple-500" />
          <span className="font-medium">
            {course.students} students enrolled
          </span>
        </div>

        <ul className="space-y-2 flex-grow">
          {course.features.slice(0, 4).map((feature, i) => (
            <li
              key={i}
              className="flex items-start space-x-2 text-sm text-slate-700"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 space-y-3 mt-auto">
          <Link
            href={course.link}
            className={`flex items-center justify-center gap-2 w-full ${variant.button} text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
          >
            <span>View Course Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <DownloadFormButton
            courseTitle={course.title}
            buttonText={
              <span className="flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                <span>Download Brochure</span>
              </span>
            }
            buttonClassName="w-full flex items-center justify-center space-x-2 text-slate-700 font-semibold py-3 rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
            onSubmit={(values) => {
              // Replace with your actual submission logic (e.g., API call, analytics, file download)
              console.log("Download form submitted:", { ...values, course: course.title });
            }}
          />
        </div>
      </div>
    </motion.article>
  );
};


/**
 * HomeFeaturedCoursesSection - Interactive Course Cards
 *
 * Shows popular courses with filtering
 * CDPL brand design with card styling from CourseOverviewSection.tsx
 */
export default function HomeFeaturedCoursesSection() {
  // Updated categories as requested
  const ALL_CATEGORIES = ['All', 'Software Testing', 'Data Science', 'Business Intelligence', 'Artificial Intelligence', 'Digital Marketing'];
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES[0]);

  const filteredCourses = activeCategory === 'All'
    ? COURSES
    : COURSES.filter(course => course.category === activeCategory);

  return (
    <section className="py-6 lg:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            Popular Courses
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-brand">Industry-Ready</span> Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to make you job-ready with hands-on projects and expert mentorship.
          </p>
        </motion.div>

        {/* Category Filter (Tabs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {ALL_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                activeCategory === category
                  ? 'bg-brand text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-xl shadow-md border-2 border-gray-200 hover:border-brand transition-all duration-300"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
