import CurriculumSection from '@/components/AI-Courses/CurriculumSection';
import TestimonialsSection from '@/components/AI-Courses/TestimonialsSection';
import CoursesSection from '@/components/AI-Courses/CoursesSection';
import FAQSection from '@/components/AI-Courses/FAQSection';
import FinalCTASection from '@/components/AI-Courses/FinalCTASection';
import ProjectsSection from '@/components/AI-Courses/ProjectsSection';
import CareerPathSection from '@/components/AI-Courses/CareerPathSection';
import HeroSection from '@/components/AI-Courses/HeroSection';
import WhyChooseSection from '@/components/AI-Courses/WhyChooseSection';
export default function Home() {
    return (
        <>
            <HeroSection />
            <WhyChooseSection />
            <CoursesSection />
            <CurriculumSection />
            <TestimonialsSection />
            <ProjectsSection />
            <CareerPathSection />
            <FAQSection />
            <FinalCTASection />
        </>
    );
}