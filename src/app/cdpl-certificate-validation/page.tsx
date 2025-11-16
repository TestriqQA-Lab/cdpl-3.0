import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateSEO } from "@/lib/seo";

/* ---------- Small, reusable loading UI ---------- */
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

/* ---------- Dynamic sections (client components) ---------- */
const CertificationValidationHeroSection = dynamic(
  () => import("@/components/sections/CertificationValidationHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const CertificationValidatorSection = dynamic(
  () => import("@/components/sections/CertificationValidatorSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading validator..." /> }
);

/* ---------- SEO ---------- */
export const metadata: Metadata = generateSEO({
  title: "CDPL Certificate Validation - Verify AAA & ACTD Certificates Online",
  description:
    "Instantly validate and verify CDPL certificates online. Check authenticity of AAA, ACTD, and other CDPL certification courses. Enter certificate ID for instant verification. Trusted by employers worldwide.",
  keywords: [
    "CDPL certificate validation",
    "verify CDPL certificate",
    "AAA certificate verification",
    "ACTD certificate verification",
    "certificate authenticity check",
    "online certificate validation",
    "CDPL certification verify",
    "check certificate validity",
    "certificate ID verification",
    "validate training certificate",
    "employer certificate verification",
    "authentic certificate check",
    "CDPL certificate lookup",
    "certification verification tool",
    "digital certificate validation",
  ],
  url: "/cdpl-certificate-validation",
  image: "/og-image-certificate-validation.jpg",
  imageAlt: "CDPL Certificate Validation - Verify Certificates Online",
});



/* ---------- Page (server component) ---------- */
export default function CertificateValidationPage() {
  return (
    <main 

    >
      <meta itemProp="name" content="CDPL Certificate Validation Tool" />
      <meta itemProp="description" content="Verify CDPL certificate authenticity online" />
      <meta itemProp="url" content="https://www.cinutedigital.com/cdpl-certificate-validation" />
      <meta itemProp="applicationCategory" content="BusinessApplication" />
      
      <CertificationValidationHeroSection />
      <CertificationValidatorSection />
    </main>
  );
}
