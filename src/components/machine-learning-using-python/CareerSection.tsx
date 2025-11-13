import { Briefcase, TrendingUp, Users } from "lucide-react";

const jobRoles = [
  { role: "Machine Learning Engineer", salary: "9-15 LPA", icon: "🤖" },
  { role: "Data Scientist", salary: "8-14 LPA", icon: "📊" },
  { role: "Data Analyst", salary: "6-10 LPA", icon: "📈" },
  { role: "Business Intelligence Analyst", salary: "7-12 LPA", icon: "💼" },
  { role: "Software Engineer (ML)", salary: "10-16 LPA", icon: "💻" },
  { role: "Computer Vision Engineer", salary: "10-15 LPA", icon: "👁️" },
  { role: "Predictive Modeler", salary: "8-13 LPA", icon: "🎯" },
  { role: "Research Scientist", salary: "12-18 LPA", icon: "🔬" },
];

const placementProgram = [
  {
    step: 1,
    title: "Craft a Winning Portfolio",
    description: "Build a standout portfolio and network to showcase your skills and projects.",
    icon: "📁",
  },
  {
    step: 2,
    title: "Polish Your Resume",
    description: "Our experts will update your resume with the latest skills and projects.",
    icon: "📝",
  },
  {
    step: 3,
    title: "LinkedIn Profile Optimization",
    description: "Boost your professional LinkedIn profile by adding your certifications.",
    icon: "🔗",
  },
  {
    step: 4,
    title: "Expand Your Reach",
    description: "Update your profiles on job portals like Naukri, Indeed, and Foundit.",
    icon: "🌐",
  },
  {
    step: 5,
    title: "Interview Preparation",
    description: "Intensive interview preparation from Day 1 to prepare for technical interviews.",
    icon: "🎤",
  },
  {
    step: 6,
    title: "Ace Your Interviews",
    description: "Industry experts conduct SWOT analysis and provide feedback on performance.",
    icon: "✅",
  },
];

export default function CareerSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your Career Path After ML Mastery
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore lucrative career opportunities and roles you can pursue after completing the program.
          </p>
        </div>

        {/* Job Roles Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Job Roles You Can Apply For</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobRoles.map((job, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <p className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {job.icon}
                </p>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {job.role}
                </h4>
                <p className="text-blue-600 font-semibold">
                  {job.salary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Program */}
        <div className="mb-16 bg-gradient-to-b from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-12">
            Our Comprehensive Placement Program
          </h3>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {placementProgram.map((item, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < placementProgram.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                )}

                {/* Card */}
                <div className="bg-white rounded-lg p-6 border border-blue-200 h-full">
                  {/* Number */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold mb-4">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <p className="text-3xl mb-3">{item.icon}</p>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="bg-white rounded-lg p-8 border border-blue-300 text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">
              🚀 Launch Your Career Journey
            </p>
            <p className="text-slate-700">
              Get our support to secure your ideal role and kickstart your professional path in machine learning.
            </p>
          </div>
        </div>

        {/* Top Hiring Companies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Top Companies Hiring Our Graduates
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Google",
              "Microsoft",
              "Amazon",
              "Apple",
              "Meta",
              "Tesla",
              "IBM",
              "Adobe",
              "Accenture",
              "Infosys",
              "TCS",
              "Wipro",
            ].map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <p className="text-4xl mb-2">🏢</p>
                <p className="font-semibold text-slate-900">{company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
            <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />
            <p className="text-3xl font-bold text-blue-600 mb-2">25%</p>
            <p className="text-slate-700 font-semibold">Market Growth</p>
            <p className="text-sm text-slate-600 mt-2">Expected growth in ML jobs 2020-2030</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 border border-indigo-200">
            <Briefcase className="w-8 h-8 text-indigo-600 mb-4" />
            <p className="text-3xl font-bold text-indigo-600 mb-2">101,000+</p>
            <p className="text-slate-700 font-semibold">Job Vacancies</p>
            <p className="text-sm text-slate-600 mt-2">Currently open positions in India</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
            <Users className="w-8 h-8 text-purple-600 mb-4" />
            <p className="text-3xl font-bold text-purple-600 mb-2">500+</p>
            <p className="text-slate-700 font-semibold">Successful Placements</p>
            <p className="text-sm text-slate-600 mt-2">From our training programs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
