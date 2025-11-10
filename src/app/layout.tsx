import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import dynamic from "next/dynamic";
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/seo-enhanced';
// import FixedOfferBar from '@/components/FixedOfferBar';

const inter = Inter({ subsets: ["latin"] });

const Header = dynamic(
  () => import("@/components/Layout/Header"),
  {
    loading: () => (
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-gray-500 text-center">Loading header...</p>
        </div>
      </header>
    ),
  }
);

const Footer = dynamic(
  () => import("@/components/Layout/Footer"),
  {
    loading: () => (
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-gray-500 text-center">Loading footer...</p>
        </div>
      </footer>
    ),
  }
);

// ========================================
// ENHANCED GLOBAL METADATA
// ========================================
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.cinutedigital.com'),
  
  // Basic Metadata
  title: {
    default: "CDPL - Best Software Testing, Data Science & AI/ML Training Institute in India",
    template: "%s | CDPL - Cinute Digital",
  },
  description: "Leading EdTech company providing industry-focused training in Software Testing, Data Science, AI/ML, and Digital Marketing with 100% placement support. Transform your career with expert-led courses.",
  
  // Keywords (for older search engines and AI crawlers)
  keywords: [
    "software testing course",
    "data science training",
    "AI ML course",
    "machine learning training",
    "automation testing",
    "manual testing",
    "data analytics course",
    "python training",
    "digital marketing course",
    "placement support",
    "career change",
    "IT training India",
    "CDPL",
    "Cinute Digital",
  ],
  
  // Authors
  authors: [
    { name: "CDPL - Cinute Digital" },
  ],
  
  // Creator
  creator: "CDPL - Cinute Digital",
  publisher: "CDPL - Cinute Digital",
  
  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cinutedigital.com",
    siteName: "CDPL - Cinute Digital",
    title: "CDPL - Best Software Testing, Data Science & AI/ML Training Institute in India",
    description: "Leading EdTech company providing industry-focused training in Software Testing, Data Science, AI/ML, and Digital Marketing with 100% placement support.",
    images: [
      {
        url: "/og-image-default.jpg",
        width: 1200,
        height: 630,
        alt: "CDPL - Cinute Digital Training Institute",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@cinutedigital",
    creator: "@cinutedigital",
    title: "CDPL - Best Software Testing, Data Science & AI/ML Training Institute in India",
    description: "Leading EdTech company providing industry-focused training with 100% placement support.",
    images: ["/og-image-default.jpg"],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification (Add your verification codes here)
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE, // Replace with your actual code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  
  // Category
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data schemas
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en">
      <head>
        {/* ========================================
            STRUCTURED DATA (Schema.org)
            ======================================== */}
        
        {/* Organization Schema (Knowledge Graph) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* ========================================
            AI CRAWLER OPTIMIZATION
            ======================================== */}
        
        {/* AI-specific meta tags for better understanding */}
        <meta 
          name="ai:summary" 
          content="CDPL provides comprehensive training in Software Testing, Data Science, AI/ML with 100% placement support. Expert-led courses with hands-on projects and industry certifications." 
        />
        <meta 
          name="ai:key_points" 
          content="Software Testing Training | Data Science Courses | AI/ML Training | 100% Placement Support | Industry Expert Mentors | Hands-on Projects | Career Transformation" 
        />
        <meta 
          name="ai:target_audience" 
          content="Career changers, fresh graduates, IT professionals seeking upskilling, non-IT professionals transitioning to tech" 
        />
        
        {/* ========================================
            ADDITIONAL SEO TAGS
            ======================================== */}
        
        {/* Geo Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        
        {/* Language */}
        <meta httpEquiv="content-language" content="en-IN" />
        
        {/* Theme Color (for mobile browsers) */}
        <meta name="theme-color" content="#ff8c00" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      
      <body className={`${inter.className} antialiased`}>
        <Header />
        {/* <FixedOfferBar /> */}
        {children}
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
