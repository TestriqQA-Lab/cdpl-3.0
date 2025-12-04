import CurriculumSection from '@/components/DS&ML-Courses/CurriculumSection';
import TestimonialsSection from '@/components/DS&ML-Courses/TestimonialsSection';
import CoursesSection from '@/components/DS&ML-Courses/CoursesSection';
import FAQSection from '@/components/DS&ML-Courses/FAQSection';
import FinalCTASection from '@/components/DS&ML-Courses/FinalCTASection';
import ProjectsSection from '@/components/DS&ML-Courses/ProjectsSection';
import CareerPathSection from '@/components/DS&ML-Courses/CareerPathSection';
import HeroSection from '@/components/DS&ML-Courses/HeroSection';
import WhyChooseSection from '@/components/DS&ML-Courses/WhyChooseSection';
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