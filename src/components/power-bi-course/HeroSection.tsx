// components/powerbi/HeroSection.tsx
import React from 'react';
import { Clock, CheckCircle, Award, Briefcase, ArrowRight, Download, Star, Users, TrendingUp } from 'lucide-react';

// Interface for the key features under the main title
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
    <div className="text-blue-600 mb-2">{icon}</div>
    <p className="text-sm font-semibold text-gray-700 text-center">{title}</p>
  </div>
);

// Interface for the lead form input
interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type = 'text' }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
    />
  </div>
);

const HeroSection: React.FC = () => {
  const features = [
    { icon: <CheckCircle size={24} />, title: 'Real-World Projects' },
    { icon: <Users size={24} />, title: 'Expert Instructors' },
    { icon: <Award size={24} />, title: 'Global Certification' },
    { icon: <Briefcase size={24} />, title: '100% Job Assistance' },
  ];

  const stats = [
    { icon: <Star size={20} className="text-yellow-500" />, text: '4.8/5 Average Rating' },
    { icon: <Users size={20} className="text-blue-500" />, text: '500+ Successful Graduates' },
    { icon: <TrendingUp size={20} className="text-green-500" />, text: '14+ Years Industry Experience' },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column: Course Details */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                <Clock size={16} className="mr-2" />
                Duration: 20 Hours Master Program
              </span>
            </div>

            <h1 className="md:mt-0 max-w-3xl text-3xl md:text-4xl xl:text-5xl font-extrabold leading-snug md:leading-tight tracking-tight text-slate-900 break-words">
              Master <span className="text-blue-600">Data Analytics</span> & Visualization with <span className="text-orange-500">Power BI</span>
            </h1>

            <p className="mt-3 text-xl text-gray-600 mb-8 max-w-3xl">
              Transform raw data into powerful, actionable insights. Learn from industry experts to master Microsoft Power BI, DAX, and Data Modeling for creating stunning, interactive dashboards.
            </p>

            <p className="text-base text-gray-500 mb-10">
              **Key Skills:** Power BI Desktop, Power BI Service, DAX Calculations, Power Query (M), Data Modeling, Advanced Visualization, Report Publishing, and Collaboration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button className="flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-orange-600 rounded-xl shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-[1.02]">
                Enroll Now <ArrowRight size={20} className="ml-3" />
              </button>
              <button className="flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300">
                Download Syllabus <Download size={20} className="ml-3" />
              </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {features.map((feature, index) => (
                <FeatureCard key={index} icon={feature.icon} title={feature.title} />
              ))}
            </div>

            {/* Mini Stats Bar */}
            <div className="flex flex-wrap gap-6 border-t pt-6 border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  {stat.icon}
                  <span className="ml-2 font-medium">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 p-8 bg-white rounded-2xl shadow-2xl border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Request Syllabus & Free Consultation
              </h2>
              <p className="text-gray-500 mb-6 text-sm">
                Get the detailed curriculum, career guidance, and upcoming batch information.
              </p>

              <form>
                <InputField label="Full Name" placeholder="Your full name" />
                <InputField label="Email" placeholder="you@example.com" type="email" />
                <InputField label="Mobile Number" placeholder="98765 43210" type="tel" />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.01] mt-4"
                >
                  Get Syllabus & Pricing <ArrowRight size={20} className="ml-2" />
                </button>

                <p className="text-xs text-gray-400 mt-4 text-center">
                  By submitting, you agree to our <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
