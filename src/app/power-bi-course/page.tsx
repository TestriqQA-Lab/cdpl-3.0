// pages/index.tsx
import Head from 'next/head';
import HeroSection from '@/components/power-bi-course/HeroSection';
import StatsSection from '@/components/power-bi-course/StatsSection';
import WhyBIProgram from '@/components/power-bi-course/WhyBIProgram';
import CurriculumSection from '@/components/power-bi-course/CurriculumSection';
import ProjectsSection from '@/components/power-bi-course/ProjectsSection';
import TestimonialsSection from '@/components/power-bi-course/TestimonialsSection';
import CareerSection from '@/components/power-bi-course/CareerSection';
import WhoShouldEnroll from '@/components/power-bi-course/WhoShouldEnroll';
import ToolsSection from '@/components/power-bi-course/ToolsSection';
import FaqSection from '@/components/power-bi-course/FaqSection';
import CtaSection from '@/components/power-bi-course/CtaSection';
import CareerRoadmapSection from '@/components/power-bi-course/CareerRoadmapSection';

const PowerBIPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Master Data Analytics & Visualization with Power BI | Certified Course</title>
                <meta name="description" content="Enroll in the best Power BI course. Master DAX, Data Modeling, and Visualization in 20 hours. Get 100% job assistance and global certification. SEO optimized for 'Power BI Course', 'Data Analytics', 'DAX'." />
                <meta name="keywords" content="Power BI Course, Data Analytics, Power BI Certification, DAX, Power Query, Business Intelligence, Data Visualization, Next.js, Tailwind CSS" />
            </Head>

            <main>
                {/* Note: You would typically include a Header/Navbar component here */}

                <HeroSection />
                <StatsSection />
                <WhyBIProgram />
                <CurriculumSection />
                <ToolsSection />
                <CareerRoadmapSection /> {/* NEW SEO BOOST SECTION */}
                <ProjectsSection />
                <CareerSection />
                <WhoShouldEnroll />
                <TestimonialsSection />
                <FaqSection />
                <CtaSection />

                {/* Note: You would typically include a Footer component here */}
            </main>
        </>
    );
};

export default PowerBIPage;
