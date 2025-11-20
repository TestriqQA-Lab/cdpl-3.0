import HeroSection from "@/components/ai-in-digital-marketing/HeroSection";
import StatsSection from "@/components/ai-in-digital-marketing/StatsSection";
import WhyThisProgram from "@/components/ai-in-digital-marketing/WhyThisProgram";
import CurriculumSection from "@/components/ai-in-digital-marketing/CurriculumSection";
import ProjectsSection from "@/components/ai-in-digital-marketing/ProjectsSection";
import TestimonialsSection from "@/components/ai-in-digital-marketing/TestimonialsSection";
import WhoShouldEnroll from "@/components/ai-in-digital-marketing/WhoShouldEnroll";
import ToolsSection from "@/components/ai-in-digital-marketing/ToolsSection";
import CareerSection from "@/components/ai-in-digital-marketing/CareerSection";
import CareerRoadmapSection from "@/components/ai-in-digital-marketing/CareerRoadmapSection";
import FaqSection from "@/components/ai-in-digital-marketing/FaqSection";
import CtaSection from "@/components/ai-in-digital-marketing/CtaSection";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <main>
                <HeroSection />
                <StatsSection />
                <WhyThisProgram />
                <CurriculumSection />
                <ToolsSection />
                <CareerRoadmapSection />
                <ProjectsSection />
                <TestimonialsSection />
                <WhoShouldEnroll />
                <CareerSection />
                <FaqSection />
                <CtaSection />
            </main>
        </div>
    );
}
