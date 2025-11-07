"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";
import { Code2, Briefcase, Award, Zap } from "lucide-react";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  difficulty: string;
  skills: string[];
}

interface ProjectsContent {
  title: string;
  description: string;
  subtitle?: string;
  projects: Project[];
}

interface CourseData {
  projectsContent: ProjectsContent;
}

interface ProjectsSectionProps {
  data: CourseData;
}

const difficultyConfig = {
  Beginner: { bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-300" },
  Intermediate: { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-300" },
  Advanced: { bg: "bg-rose-100", text: "text-rose-700", border: "border-rose-300" },
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
  const { projectsContent } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-semibold mb-4 border border-cyan-200"
            variants={itemVariants}
          >
            <Code2 className="w-4 h-4" />
            Hands-On Projects
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
            variants={itemVariants}
          >
            {projectsContent.title}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {projectsContent.description}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projectsContent.projects.map((project, index) => {
            const diffConfig = difficultyConfig[project.difficulty as keyof typeof difficultyConfig] || difficultyConfig.Intermediate;

            return (
              <motion.div
                key={index}
                className="group"
                variants={cardVariants}
              >
                <div className="relative h-full bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:border-cyan-400 hover:shadow-xl transition-all duration-300">
                  {/* Content */}
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                          {project.name}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${diffConfig.bg} ${diffConfig.text}`}>
                          {project.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Skills */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        What You&apos;ll Build
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg text-sm border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-200"
                          >
                            <span className="text-cyan-500 text-xs">✓</span>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="contact-us"
                      className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      Explore Project
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Project Benefits */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              icon: <Briefcase className="w-6 h-6" />,
              title: "Portfolio Ready",
              description: "Build projects that impress employers and stand out in your portfolio.",
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: "Real-World Skills",
              description: "Gain practical experience with industry-standard tools and workflows.",
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Learn by Doing",
              description: "Master concepts through hands-on coding and problem-solving.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 text-center hover:border-cyan-300 hover:shadow-lg transition-all duration-300 group"
              variants={cardVariants}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-xl text-white mb-4 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;