/**
 * ============================================================================
 * HOME PAGE - ENHANCED SEO & SCHEMA MARKUP
 * ============================================================================
 * 
 * This file implements the comprehensive SEO strategy for the home page,
 * including multiple rich schema types for maximum search visibility.
 * 
 * @version 2.0.0
 * @updated 2025-11-12
 */

import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateHomePageSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// ============================================================================
// DYNAMIC IMPORTS (for performance)
// ============================================================================

const HomeHeroSection = dynamic(() => import('@/components/home/HomeHeroSection'), { ssr: true });
const HomeTrustBarSection = dynamic(() => import('@/components/home/HomeTrustBarSection'), { ssr: true });
const HomeFeaturedCoursesSection = dynamic(() => import('@/components/home/HomeFeaturedCoursesSection'), { ssr: true });
const HomeLearningExperienceSection = dynamic(() => import('@/components/home/HomeLearningExperienceSection'), { ssr: true });
const HomePlacementSupportSection = dynamic(() => import('@/components/home/HomePlacementSupportSection'), { ssr: true });
const PlacementsCompanyWallSection = dynamic(() => import("@/components/sections/PlacementsCompanyWallSection"),{ ssr: true});
const HomeWhyChooseSection = dynamic(() => import('@/components/home/HomeWhyChooseSection'), { ssr: true });
const HomeLatestBlogSection = dynamic(() => import('@/components/home/HomeLatestBlogSection'), { ssr: true });
const HomeFAQSection = dynamic(() => import('@/components/home/HomeFAQSection'), { ssr: true });
const HomeFinalCTASection = dynamic(() => import('@/components/home/HomeFinalCTASection'), { ssr: true });

// ============================================================================
// HOME PAGE METADATA
// ============================================================================

export const metadata: Metadata = generateMetadata({
  title: "Best Software Testing, Data Science & AI/ML Courses | CDPL - Cinute Digital",
  description: "CDPL offers industry-leading training in Software Testing, Data Science, and AI/ML with 100% placement support. Start your high-paying tech career with expert-led courses and hands-on projects.",
  keywords: [
    "software testing course",
    "data science course",
    "AI ML course",
    "CDPL",
    "Cinute Digital",
    "best tech training institute",
    "100% placement support",
    "career change",
    "IT training India",
    "online courses",
    "job guarantee",
    "automation testing",
    "machine learning training",
  ],
  url: '/',
});

// ============================================================================
// HOME PAGE COMPONENT
// ============================================================================

export default function HomePage(): React.ReactElement {
  // ========================================
  // SCHEMA DATA
  // ========================================

  // The generateHomePageSchema function combines LocalBusiness, ItemList, FAQPage, and VideoObject
  // into a single, optimized array of schemas for the Home Page.
  const homePageSchemas = generateHomePageSchema();

  return (
    <>
      {/* ========================================
          JSON-LD SCHEMA INJECTION
          ======================================== */}
      {homePageSchemas.map((schema, index) => (
        <JsonLd key={index} id={`home-schema-${index}`} schema={schema} />
      ))}

      <main className="relative bg-white">
        {/* ========================================
            PAGE CONTENT
            ======================================== */}
        <HomeHeroSection />
        <HomeTrustBarSection />
        <HomeFeaturedCoursesSection />
        <HomeLearningExperienceSection />
        <HomePlacementSupportSection />
        <section
          className="w-full scroll-mt-[96px] md:scroll-mt-[104px] lg:scroll-mt-[112px]"
          data-scroll-target="placements-partners"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PlacementsCompanyWallSection />
          </div>
        </section>
        <HomeWhyChooseSection />
        <HomeLatestBlogSection />
        <HomeFAQSection />
        <HomeFinalCTASection />
      </main>
    </>
  );
}
