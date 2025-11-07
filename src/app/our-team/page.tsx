import type { Metadata } from "next";
import { teamData, trainers } from "@/app/our-team/data";
import TeamCultureSection from "@/components/sections/TeamCultureSection";
import TeamDirectory from "@/components/sections/TeamDirectorySection";
import TeamHeroSection from "@/components/sections/TeamHeroSection";
import TeamLeadershipSpotlight from "@/components/sections/TeamLeadershipSpotlight";
import TeamTrainersSection from "@/components/sections/TeamTrainersSection";
import JsonLdOrganization from "./JsonLdOrganization";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";

// ============================================================================
// SEO METADATA - Optimized for Our Team Page
// ============================================================================
export const metadata: Metadata = generateSEO({
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
  imageAlt: "Our Team - Expert Trainers and Mentors at CDPL Cinute Digital",
});

// ============================================================================
// OUR TEAM PAGE COMPONENT
// ============================================================================
export default function Page() {
  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Our Team", url: "/our-team" },
  ]);

  // CollectionPage Schema (for team listing)
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.cinutedigital.com/our-team#collectionpage",
    url: "https://www.cinutedigital.com/our-team",
    name: "Our Team - CDPL Trainers & Mentors",
    description: "Meet our team of expert trainers, mentors, and industry professionals",
    inLanguage: "en-IN",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: teamData.map((member, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          name: member.name,
          jobTitle: member.title,
          description: member.bio,
          worksFor: {
            "@type": "EducationalOrganization",
            name: "CDPL - Cinute Digital",
            url: "https://www.cinutedigital.com",
          },
          ...(member.linkedin && { sameAs: [member.linkedin] }),
          ...(member.email && { email: member.email }),
          ...(member.location && {
            workLocation: {
              "@type": "Place",
              name: member.location,
            },
          }),
          ...(member.avatar && {
            image: {
              "@type": "ImageObject",
              url: `https://www.cinutedigital.com${member.avatar}`,
            },
          }),
          ...(member.expertise && {
            knowsAbout: member.expertise,
          }),
        },
      })),
    },
  };

  // Organization Schema with Team Members
  const organizationWithTeamSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.cinutedigital.com/#organization",
    name: "CDPL - Cinute Digital Pvt. Ltd.",
    url: "https://www.cinutedigital.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.cinutedigital.com/logo.png",
      width: 600,
      height: 60,
    },
    description: "Leading EdTech institute with expert trainers and mentors in Software Testing, Data Science, AI/ML, and Automation",
    
    // Team Members as employees
    employee: teamData.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.title,
      description: member.bio,
      worksFor: {
        "@type": "EducationalOrganization",
        name: "CDPL - Cinute Digital",
      },
      ...(member.linkedin && { sameAs: [member.linkedin] }),
      ...(member.email && { email: member.email }),
      ...(member.location && {
        workLocation: {
          "@type": "Place",
          name: member.location,
        },
      }),
      ...(member.avatar && {
        image: {
          "@type": "ImageObject",
          url: `https://www.cinutedigital.com${member.avatar}`,
        },
      }),
      ...(member.expertise && {
        knowsAbout: member.expertise,
      }),
    })),
    
    // Trainers as faculty members
    ...(trainers && trainers.length > 0 && {
      member: trainers.map((trainer) => ({
        "@type": "Person",
        name: trainer.name,
        jobTitle: trainer.role,
        description: trainer.bio,
        worksFor: {
          "@type": "EducationalOrganization",
          name: "CDPL - Cinute Digital",
        },
        ...(trainer.linkedin && { sameAs: [trainer.linkedin] }),
        ...(trainer.avatar && {
          image: {
            "@type": "ImageObject",
            url: `https://www.cinutedigital.com${trainer.avatar}`,
          },
        }),
        ...(trainer.specialties && {
          knowsAbout: trainer.specialties,
        }),
        ...(trainer.yearsExp && {
          experienceRequirements: {
            "@type": "OccupationalExperienceRequirements",
            yearsOfExperience: trainer.yearsExp,
          },
        }),
      })),
    }),
  };

  // Leadership Team Schema (for key leaders) - Only if they have achievements
  const teamLeadersWithAchievements = teamData.filter(
    (member) => member.role === "Leadership" || 
    member.title.toLowerCase().includes("founder") || 
    member.title.toLowerCase().includes("ceo") || 
    member.title.toLowerCase().includes("chief") ||
    member.title.toLowerCase().includes("head")
  );

  const leadershipTeamSchema = teamLeadersWithAchievements.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CDPL Leadership Team",
    description: "Meet the leadership team driving innovation in EdTech training",
    itemListElement: teamLeadersWithAchievements.map((leader, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: leader.name,
        jobTitle: leader.title,
        description: leader.bio,
        worksFor: {
          "@type": "EducationalOrganization",
          name: "CDPL - Cinute Digital",
          url: "https://www.cinutedigital.com",
        },
        ...(leader.linkedin && { sameAs: [leader.linkedin] }),
        ...(leader.email && { email: leader.email }),
        ...(leader.avatar && {
          image: {
            "@type": "ImageObject",
            url: `https://www.cinutedigital.com${leader.avatar}`,
          },
        }),
        ...(leader.expertise && {
          knowsAbout: leader.expertise,
        }),
        // Note: achievements property doesn't exist in TeamMember type
        // Only use properties that exist in the type
      },
    })),
  } : null;

  return (
    <>   
      {/* Structured Data - Multiple Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationWithTeamSchema) }}
      />
      {leadershipTeamSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(leadershipTeamSchema) }}
        />
      )}

      {/* Main Content - Semantic HTML Structure */}
      <main className="bg-white" itemScope itemType="https://schema.org/CollectionPage">
        {/* Hidden metadata for schema.org */}
        <meta itemProp="name" content="Our Team - CDPL Trainers & Mentors" />
        <meta itemProp="description" content="Meet our team of expert trainers, mentors, and industry professionals" />
        <meta itemProp="url" content="https://www.cinutedigital.com/our-team" />

        <TeamHeroSection />
        <TeamLeadershipSpotlight data={teamData} />
        <TeamTrainersSection trainers={trainers} />
        <TeamDirectory data={teamData} />
        <TeamCultureSection />

        {/* Original JsonLdOrganization component (will be redundant but harmless) */}
        <JsonLdOrganization data={teamData} />
      </main>
    </>
  );
}
