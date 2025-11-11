import { TrendingUp, Briefcase, DollarSign, Smile, Globe } from "lucide-react";

interface StatCard {
    icon: React.ReactNode;
    value: string;
    label: string;
    description: string;
    bgGradient: string;
    iconBg: string;
}

export default function StatsSection() {
    const stats: StatCard[] = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            value: "25%",
            label: "Market Growth",
            description: "Data Analytics industry growth from 2020 to 2030",
            bgGradient: "from-blue-50 to-blue-100",
            iconBg: "bg-blue-500",
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            value: "101K+",
            label: "Job Vacancies",
            description: "Active job openings for Python Data Analysts in India",
            bgGradient: "from-orange-50 to-orange-100",
            iconBg: "bg-orange-500",
        },
        {
            icon: <DollarSign className="w-6 h-6" />,
            value: "4 LPA",
            label: "Average Salary",
            description: "Starting salary for Python Data Analyst freshers",
            bgGradient: "from-green-50 to-green-100",
            iconBg: "bg-green-500",
        },
        {
            icon: <Smile className="w-6 h-6" />,
            value: "75%",
            label: "Job Satisfaction",
            description: "Data professionals report high job satisfaction rates",
            bgGradient: "from-purple-50 to-purple-100",
            iconBg: "bg-purple-500",
        },
        {
            icon: <Globe className="w-6 h-6" />,
            value: "32%",
            label: "Market Share",
            description: "India's share in the global data analytics market",
            bgGradient: "from-red-50 to-red-100",
            iconBg: "bg-red-500",
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                        Why Invest in <span className="text-orange-600">Data Analytics</span>?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        The data analytics industry is booming with incredible opportunities. Here's why this course is your gateway to a lucrative career.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${stat.bgGradient} rounded-xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group`}
                        >
                            {/* Icon */}
                            <div
                                className={`${stat.iconBg} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                            >
                                {stat.icon}
                            </div>

                            {/* Value */}
                            <div className="mb-2">
                                <p className="text-3xl md:text-4xl font-bold text-slate-900">
                                    {stat.value}
                                </p>
                            </div>

                            {/* Label */}
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                {stat.label}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Key Insight */}
                <div className="bg-gradient-to-r from-orange-50 via-white to-blue-50 rounded-2xl border-2 border-orange-200 p-8 md:p-12">
                    <div className="flex gap-4 md:gap-6">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500 text-white">
                                <span className="text-xl">💡</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                                The Data Revolution is Here
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Every organization across finance, healthcare, retail, technology, and marketing is desperately seeking skilled data professionals. With Python data analytics skills, you're not just learning a tool—you're securing your future in one of the fastest-growing industries. Our comprehensive 20-hour program bridges the gap between academic learning and industry demands, ensuring you're job-ready from day one.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
