import { Code2, Database, BarChart3, Cpu } from "lucide-react";

const toolCategories = [
  {
    category: "Programming & Core Libraries",
    icon: Code2,
    color: "from-blue-500 to-blue-600",
    tools: [
      { name: "Python", icon: "🐍" },
      { name: "NumPy", icon: "📊" },
      { name: "Pandas", icon: "🐼" },
      { name: "Matplotlib", icon: "📈" },
      { name: "Seaborn", icon: "🎨" },
    ],
  },
  {
    category: "Machine Learning Frameworks",
    icon: Cpu,
    color: "from-purple-500 to-purple-600",
    tools: [
      { name: "Scikit-learn", icon: "🤖" },
      { name: "TensorFlow", icon: "⚡" },
      { name: "Keras", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "XGBoost", icon: "🚀" },
    ],
  },
  {
    category: "Data & Visualization",
    icon: BarChart3,
    color: "from-indigo-500 to-indigo-600",
    tools: [
      { name: "SQL", icon: "🗄️" },
      { name: "Power BI", icon: "📊" },
      { name: "Tableau", icon: "📉" },
      { name: "Plotly", icon: "📊" },
      { name: "Excel", icon: "📋" },
    ],
  },
  {
    category: "Development & Deployment",
    icon: Database,
    color: "from-green-500 to-green-600",
    tools: [
      { name: "Jupyter Notebook", icon: "📓" },
      { name: "Git & GitHub", icon: "🔗" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS/Cloud", icon: "☁️" },
      { name: "APIs", icon: "🔌" },
    ],
  },
];

export default function ToolsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tools & Technologies You Will Master
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Learn industry-standard tools and frameworks used by leading companies worldwide.
          </p>
        </div>

        {/* Tools Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {toolCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.category}
                  </h3>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-white rounded-lg p-4 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 group"
                    >
                      <p className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                        {tool.icon}
                      </p>
                      <p className="font-semibold text-slate-900 text-sm">
                        {tool.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Why These Tools */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Why These Tools?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">Industry Standard</p>
              <p className="text-slate-700">Used by Fortune 500 companies and leading tech organizations worldwide.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">High Demand</p>
              <p className="text-slate-700">Employers actively seek professionals proficient in these tools and frameworks.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-600 mb-2">Future-Ready</p>
              <p className="text-slate-700">Stay ahead with constantly updated tools and emerging technologies in ML.</p>
            </div>
          </div>
        </div>

        {/* Tool Proficiency Levels */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Your Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">B</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 text-center mb-2">Beginner</h4>
              <p className="text-slate-600 text-center text-sm">Foundation and basics of tools and frameworks</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">I</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 text-center mb-2">Intermediate</h4>
              <p className="text-slate-600 text-center text-sm">Practical implementation and real-world applications</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">A</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 text-center mb-2">Advanced</h4>
              <p className="text-slate-600 text-center text-sm">Expert-level proficiency and optimization techniques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
