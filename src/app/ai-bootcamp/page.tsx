import HeroSection from '@/components/ai-bootcamp/HeroSection';
import StatsSection from '@/components/ai-bootcamp/StatsSection';
import WhyEngineerProgram from '@/components/ai-bootcamp/WhyEngineerProgram';
import CurriculumSection from '@/components/ai-bootcamp/CurriculumSection';
import ProjectsSection from '@/components/ai-bootcamp/ProjectsSection';
import TestimonialsSection from '@/components/ai-bootcamp/TestimonialsSection';
import CareerSection from '@/components/ai-bootcamp/CareerSection';
import WhoShouldEnroll from '@/components/ai-bootcamp/WhoShouldEnroll';
import ToolsSection from '@/components/ai-bootcamp/ToolsSection';
import FaqSection from '@/components/ai-bootcamp/FaqSection';
import CtaSection from '@/components/ai-bootcamp/CtaSection';
import CareerRoadmapSection from '@/components/ai-bootcamp/CareerRoadmapSection';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <main>
                <HeroSection />
                <StatsSection />
                <WhyEngineerProgram />
                <CurriculumSection />
                <ToolsSection />
                <CareerRoadmapSection />
                <ProjectsSection />
                <TestimonialsSection />
                <CareerSection />
                <WhoShouldEnroll />
                <FaqSection />
                <CtaSection />
            </main>
        </div>
    );
}
