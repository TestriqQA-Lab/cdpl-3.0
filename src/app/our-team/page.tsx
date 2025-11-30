import type { Metadata } from "next";
import { teamData, trainers } from "@/app/our-team/data";
import TeamCultureSection from "@/components/sections/TeamCultureSection";
import TeamDirectory from "@/components/sections/TeamDirectorySection";
import TeamHeroSection from "@/components/sections/TeamHeroSection";
import TeamLeadershipSpotlight from "@/components/sections/TeamLeadershipSpotlight";
import TeamTrainersSection from "@/components/sections/TeamTrainersSection";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";

// ============================================================================
// SEO METADATA - Optimized for Our Team Page
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
  title: "Our Team - Expert Trainers & Mentors at CDPL | Industry Leaders in Tech Training",
  description: "Meet CDPL's team of expert trainers and mentors with 10+ years of industry experience in Software Testing, Data Science, AI/ML, and Automation. Learn from professionals who have worked at top companies and trained 5000+ students.",
  keywords: [
    "CDPL team",
    "Cinute Digital trainers",
    "software testing mentors",
    "data science trainers",
    "AI ML experts",
    "automation testing instructors",
    "industry expert trainers",
    "ISTQB certified trainers",
    "tech training mentors",
    "experienced instructors Mumbai",
    "our team CDPL",
    "meet our trainers",
  ],
  url: "/our-team",
  image: "/og-images/og-image-team.webp",
});

// ============================================================================
// OUR TEAM PAGE COMPONENT
// ============================================================================
export default function Page() {

  return (
    <>


      {/* Main Content - Semantic HTML Structure */}
      <main className="bg-white">


        <TeamHeroSection />
        <TeamLeadershipSpotlight data={teamData} />
        <TeamTrainersSection trainers={trainers} />
        <TeamDirectory data={teamData} />
        <TeamCultureSection />

      </main>
    </>
  );
}
