import HeroSection from "@/components/machine-learning-using-python/HeroSection";
import StatsSection from "@/components/machine-learning-using-python/StatsSection";
import WhyMLPythonProgram from "@/components/machine-learning-using-python/WhyMLPythonProgram";
import CurriculumSection from "@/components/machine-learning-using-python/CurriculumSection";
import ProjectsSection from "@/components/machine-learning-using-python/ProjectsSection";
import ToolsSection from "@/components/machine-learning-using-python/ToolsSection";
import TestimonialsSection from "@/components/machine-learning-using-python/TestimonialsSection";
import CareerSection from "@/components/machine-learning-using-python/CareerSection";
import WhoShouldEnroll from "@/components/machine-learning-using-python/WhoShouldEnroll";
import CareerRoadmapSection from "@/components/machine-learning-using-python/CareerRoadmapSection";
import FaqSection from "@/components/machine-learning-using-python/FaqSection";
import CtaSection from "@/components/machine-learning-using-python/CtaSection";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <main className="flex-1">
                {/* Hero Section */}
                <HeroSection />

                {/* Stats Section */}
                <StatsSection />

                {/* Why Choose Program */}
                <WhyMLPythonProgram />

                {/* Curriculum Section */}
                <CurriculumSection />

                {/* Projects Section */}
                <ProjectsSection />

                {/* Tools Section */}
                <ToolsSection />

                {/* Who Should Enroll */}
                <WhoShouldEnroll />

                {/* Career Section */}
                <CareerSection />

                {/* Career Roadmap Section */}
                <CareerRoadmapSection />

                {/* Testimonials Section */}
                <TestimonialsSection />

                {/* FAQ Section */}
                <FaqSection />

                {/* CTA Section */}
                <CtaSection />

            </main>
        </div>
    );
}
