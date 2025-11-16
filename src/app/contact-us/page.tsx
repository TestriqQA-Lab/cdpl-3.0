import type { Metadata } from 'next';
import { ContactHeroSection } from '@/components/sections/ContactHeroSection';
import { ContactMethodsSection } from '@/components/sections/ContactMethodSection';
import { ContactOfficeMapSection } from '@/components/sections/ContactOfficeMapSection';
import { ContactBookCallSection } from '@/components/sections/ContactBookCall';
import { ContactFAQSection } from '@/components/sections/ContactFAQSection';
import ContactReviewSection from '@/components/sections/ContactReviewSection';
import { generateSEO} from '@/lib/seo';

// ============================================================================
// SEO METADATA - Optimized for Contact Page
// ============================================================================
export const metadata: Metadata = generateSEO({
  title: 'Contact us Cinute Digital | Get in Touch Today',
  description: 'Contact CDPL (Cinute Digital) for course inquiries, admissions support, and career guidance. Reach us via phone, email, WhatsApp, or visit our office in Mumbai. Expert advisors available to help with Software Testing, Data Science, and AI/ML courses.',
  keywords: [
    'contact CDPL',
    'Cinute Digital contact',
    'CDPL admissions',
    'software testing course inquiry',
    'data science training contact',
    'CDPL Mumbai office',
    'CDPL phone number',
    'CDPL email',
    'course inquiry',
    'admissions support',
    'career guidance',
    'training institute contact',
  ],
  url: '/contact-us',
  image: '/og-images/cdpl-og-image-contact.webp',
  imageAlt: 'Contact CDPL - Cinute Digital for Course Inquiries and Admissions Support',
});

// ============================================================================
// CONTACT PAGE COMPONENT
// ============================================================================
export default function ContactPage() {

  return (
    <>


      {/* Main Content - Semantic HTML Structure */}
      <main className="relative min-h-[220vh]" >
       

        <ContactHeroSection />
        <ContactMethodsSection />
        <ContactOfficeMapSection />
        <ContactReviewSection />
        <ContactBookCallSection />
        <ContactFAQSection />
      </main>
    </>
  );
}
