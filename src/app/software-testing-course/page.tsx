import HeroSection from '@/components/software-testing-course/HeroSection';
import FeaturesSection from '@/components/software-testing-course/FeaturesSection';
import CurriculumSection from '@/components/software-testing-course/CurriculumSection';
import TestimonialsSection from '@/components/software-testing-course/TestimonialsSection';
import CoursesSection from '@/components/software-testing-course/CoursesSection';
import BatchesSection from '@/components/software-testing-course/BatchesSection';
import FAQSection from '@/components/software-testing-course/FAQSection';
import FinalCTASection from '@/components/software-testing-course/FinalCTASection';
import ProjectsSection from '@/components/software-testing-course/ProjectsSection';
import CareerPathSection from '@/components/software-testing-course/CareerPathSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
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