import HeroSection from '@/components/software-testing-course/HeroSection';
import FeaturesSection from '@/components/software-testing-course/FeaturesSection';
import CurriculumSection from '@/components/software-testing-course/CurriculumSection';
import TestimonialsSection from '@/components/software-testing-course/TestimonialsSection';
import PricingSection from '@/components/software-testing-course/PricingSection';
import BatchesSection from '@/components/software-testing-course/BatchesSection';
import FAQSection from '@/components/software-testing-course/FAQSection';
import FinalCTASection from '@/components/software-testing-course/FinalCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CurriculumSection />
      <TestimonialsSection />
      <PricingSection />
      <BatchesSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}