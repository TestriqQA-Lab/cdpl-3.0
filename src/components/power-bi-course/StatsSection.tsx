// components/powerbi/StatsSection.tsx
import React from "react";
import {
  DollarSign,
  Briefcase,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  icon: LucideIcon; // 👈 accept the component, not a ReactNode
  color: string;    // hex like "#3b82f6"
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon: Icon, color }) => {
  // soft background behind the icon, based on known palette
  const bgClass =
    color === "#3b82f6"
      ? "bg-blue-100"
      : color === "#10b981"
        ? "bg-green-100"
        : color === "#f97316"
          ? "bg-orange-100"
          : "bg-purple-100";

  return (
    <div
      className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl border-t-4"
      style={{ borderColor: color }}
    >
      <div className={`p-3 rounded-full mb-4 ${bgClass}`}>
        {/* Lucide icons accept size/className/style; TS-safe now */}
        <Icon size={32} style={{ color }} />
      </div>
      <p className="text-4xl font-extrabold text-gray-900 mb-2">{value}</p>
      <p className="text-lg font-medium text-gray-500 text-center">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const statsData: StatCardProps[] = [
    {
      value: "101,000+",
      label: "Job Vacancies for BI/Data Analysts in India",
      icon: Briefcase,
      color: "#3b82f6", // Blue
    },
    {
      value: "25%",
      label: "Projected Market Growth (2020-2030)",
      icon: TrendingUp,
      color: "#10b981", // Green
    },
    {
      value: "4 LPA",
      label: "Power BI Analyst Freshers’ Average Salary",
      icon: DollarSign,
      color: "#f97316", // Orange
    },
    {
      value: "75%",
      label: "High Job Satisfaction Rate in Data Roles",
      icon: Zap,
      color: "#8b5cf6", // Violet
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-semibold tracking-wider text-blue-600 uppercase">
            Career Potential
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Unlock Your Future: Key Statistics Driving the Power BI Market
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            The demand for skilled Power BI professionals is soaring. Invest in a
            skill that guarantees career growth and high returns.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
