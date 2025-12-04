import CurriculumSection from '@/components/DS&ML-Courses/CurriculumSection';
import TestimonialsSection from '@/components/software-testing-course/TestimonialsSection';
import CoursesSection from '@/components/DS&ML-Courses/CoursesSection';
import BatchesSection from '@/components/DS&ML-Courses/BatchesSection';
import FAQSection from '@/components/DS&ML-Courses/FAQSection';
import FinalCTASection from '@/components/DS&ML-Courses/FinalCTASection';
import ProjectsSection from '@/components/software-testing-course/ProjectsSection';
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
            <BatchesSection />
            <ProjectsSection />
            <CareerPathSection />
            <FAQSection />
            <FinalCTASection />
        </>
    );
}