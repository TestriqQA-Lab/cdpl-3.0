import HeroSection from "@/components/data-analytics-and-visualization/HeroSection";
import StatsSection from "@/components/data-analytics-and-visualization/StatsSection";
import WhyVisualizationProgram from "@/components/data-analytics-and-visualization/WhyVisualizationProgram";
import CurriculumSection from "@/components/data-analytics-and-visualization/CurriculumSection";
import ProjectsSection from "@/components/data-analytics-and-visualization/ProjectsSection";
import TestimonialsSection from "@/components/data-analytics-and-visualization/TestimonialsSection";
import CareerSection from "@/components/data-analytics-and-visualization/CareerSection";
import WhoShouldEnroll from "@/components/data-analytics-and-visualization/WhoShouldEnroll";
import ToolsSection from "@/components/data-analytics-and-visualization/ToolsSection";
import CareerRoadmapSection from "@/components/data-analytics-and-visualization/CareerRoadmapSection";
import FaqSection from "@/components/data-analytics-and-visualization/FaqSection";
import CtaSection from "@/components/data-analytics-and-visualization/CtaSection";

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-white">

            {/* Main content */}
            <main className="w-full">
                <HeroSection />
                <StatsSection />
                <WhyVisualizationProgram />
                <CurriculumSection />
                <ProjectsSection />
                <CareerRoadmapSection />
                <CareerSection />
                <ToolsSection />
                <WhoShouldEnroll />
                <TestimonialsSection />
                <FaqSection />
                <CtaSection />
            </main>
        </div>
    );
}
