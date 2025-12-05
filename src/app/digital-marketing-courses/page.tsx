import HeroSection from '@/components/Digital-Marketing/HeroSection';
import WhyChooseSection from '@/components/Digital-Marketing/WhyChooseSection';
import CurriculumSection from '@/components/Digital-Marketing/CurriculumSection';
import TestimonialsSection from '@/components/Digital-Marketing/TestimonialsSection';
import CoursesSection from '@/components/Digital-Marketing/CoursesSection';
import FAQSection from '@/components/Digital-Marketing/FAQSection';
import FinalCTASection from '@/components/Digital-Marketing/FinalCTASection';
import ProjectsSection from '@/components/Digital-Marketing/ProjectsSection';
import CareerPathSection from '@/components/Digital-Marketing/CareerPathSection';

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