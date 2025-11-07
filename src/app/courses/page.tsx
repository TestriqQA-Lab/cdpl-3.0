// app/courses/page.tsx (or pages/courses.tsx)
import HeroSection from "@/components/courses/HeroSection";
import StatsSection from "@/components/courses/StatsSection";
import BenefitsSection from "@/components/courses/BenefitsSection";
import FAQSection from "@/components/courses/FAQSection";
import CTASection from "@/components/courses/CTASection";

// If you kept it where I placed it in the canvas:
import FilterableCourseSections from "@/components/courses/FilterableCourseSections";
// If you moved it under components, use:
// import FilterableCourseSections from "@/components/courses/FilterableCourseSections";

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-white">
            <HeroSection />
            <FilterableCourseSections />
            <StatsSection />
            <BenefitsSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}
