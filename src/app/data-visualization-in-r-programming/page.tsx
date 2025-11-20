import { HeroSection } from '@/components/data-visualization-in-r-programming/HeroSection';
import { StatsSection } from '@/components/data-visualization-in-r-programming/StatsSection';
import { WhyRSection } from '@/components/data-visualization-in-r-programming/WhyRSection';
import { CurriculumSection } from '@/components/data-visualization-in-r-programming/CurriculumSection';
import { ProjectsSection } from '@/components/data-visualization-in-r-programming/ProjectsSection';
import { ToolsSection } from '@/components/data-visualization-in-r-programming/ToolsSection';
import { CareerSection } from '@/components/data-visualization-in-r-programming/CareerSection';
import { CareerRoadmapSection } from '@/components/data-visualization-in-r-programming/CareerRoadmapSection';
import { WhoShouldEnroll } from '@/components/data-visualization-in-r-programming/WhoShouldEnroll';
import { TestimonialsSection } from '@/components/data-visualization-in-r-programming/TestimonialsSection';
import { FaqSection } from '@/components/data-visualization-in-r-programming/FaqSection';
import { CtaSection } from '@/components/data-visualization-in-r-programming/CtaSection';


export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">

            <main>
                {/* Section 1: Hero and Form (Layout replication) */}
                <HeroSection />

                {/* Section 2: Stats/Achievements */}
                <StatsSection />

                {/* Section 3: Why Enroll/Program Highlights */}
                <WhyRSection />

                {/* Section 4: Detailed Curriculum */}
                <CurriculumSection />

                {/* Section 6: Tools & Technologies */}
                <ToolsSection />

                {/* Section 7: Career Roadmap (New SEO Boost Section) */}
                <CareerRoadmapSection />

                {/* Section 5: Real-Time Projects */}
                <ProjectsSection />

                {/* Section 8: Career Opportunities & Placement Support */}
                <CareerSection />

                {/* Section 9: Who Should Enroll */}
                <WhoShouldEnroll />

                {/* Section 10: Testimonials/Social Proof */}
                <TestimonialsSection />

                {/* Section 11: FAQ */}
                <FaqSection />

                {/* Section 12: Final Call to Action */}
                <CtaSection />
            </main>

        </div>
    );
}
