// src/components/data-analytics-bi-bigdata/index.tsx
// This file acts as the main page component that assembles all sections.

import React from 'react';
import HeroSection from '@/components/masters-in-data-engineering/HeroSection';
import StatsSection from '@/components/masters-in-data-engineering/StatsSection';
import WhyEngineerProgram from '@/components/masters-in-data-engineering/WhyEngineerProgram';
import CurriculumSection from '@/components/masters-in-data-engineering/CurriculumSection';
import ProjectsSection from '@/components/masters-in-data-engineering/ProjectsSection';
import TestimonialsSection from '@/components/masters-in-data-engineering/TestimonialsSection';
import CareerSection from '@/components/masters-in-data-engineering/CareerSection';
import WhoShouldEnroll from '@/components/masters-in-data-engineering/WhoShouldEnroll';
import ToolsSection from '@/components/masters-in-data-engineering/ToolsSection';
import FaqSection from '@/components/masters-in-data-engineering/FaqSection';
import CtaSection from '@/components/masters-in-data-engineering/CtaSection';
import CareerRoadmapSection from '@/components/masters-in-data-engineering/CareerRoadmapSection';

// Note: In a real Next.js application, this would typically be a page file like app/data-analytics/page.tsx
// and the components would be imported from a shared components directory.
// For delivery, we place the main assembly file here as requested by the user's structure.

const DataAnalyticsMasterProgramPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans antialiased">
            {/* Optional: Add a simple Header/Navbar component here if needed */}

            <main>
                <HeroSection />
                <StatsSection />
                <WhyEngineerProgram />
                <ToolsSection />
                <CurriculumSection />
                <ProjectsSection />
                <CareerRoadmapSection /> {/* NEW SEO BOOST SECTION */}
                <CareerSection />
                <WhoShouldEnroll />
                <TestimonialsSection />
                <FaqSection />
                <CtaSection />
            </main>

            {/* Optional: Add a simple Footer component here if needed */}
        </div>
    );
};

export default DataAnalyticsMasterProgramPage;
