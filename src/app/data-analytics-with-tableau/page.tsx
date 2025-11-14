import HeroSection from "@/components/data-analytics-with-tableau/HeroSection";
import StatsSection from "@/components/data-analytics-with-tableau/StatsSection";
import WhyTableauProgram from "@/components/data-analytics-with-tableau/WhyTableauProgram";
import CurriculumSection from "@/components/data-analytics-with-tableau/CurriculumSection";
import ProjectsSection from "@/components/data-analytics-with-tableau/ProjectsSection";
import TestimonialsSection from "@/components/data-analytics-with-tableau/TestimonialsSection";
import CareerSection from "@/components/data-analytics-with-tableau/CareerSection";
import WhoShouldEnroll from "@/components/data-analytics-with-tableau/WhoShouldEnroll";
import ToolsSection from "@/components/data-analytics-with-tableau/ToolsSection";
import FaqSection from "@/components/data-analytics-with-tableau/FaqSection";
import CtaSection from "@/components/data-analytics-with-tableau/CtaSection";
import CareerRoadmapSection from "@/components/data-analytics-with-tableau/CareerRoadmapSection";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <main>
                {/* Hero Section */}
                <HeroSection />

                {/* Stats Section */}
                <StatsSection />

                {/* Why Program Section */}
                <WhyTableauProgram />

                {/* Curriculum Section */}
                <CurriculumSection />

                {/* Projects Section */}
                <ProjectsSection />

                {/* Testimonials Section */}
                <TestimonialsSection />

                {/* Career Section */}
                <CareerSection />

                {/* Who Should Enroll Section */}
                <WhoShouldEnroll />

                {/* Tools Section */}
                <ToolsSection />

                {/* Career Roadmap Section (SEO Boost) */}
                <CareerRoadmapSection />

                {/* FAQ Section */}
                <FaqSection />

                {/* Final CTA Section */}
                <CtaSection />
            </main>
        </div>
    );
}
