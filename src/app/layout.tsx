import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.cinutedigital.com'), // Replace with your site URL
  title: "CDPL - Software Testing & Data Science Training Institute",
  description: "Leading EdTech platform offering comprehensive courses in Software Testing, Data Science, AI, and Machine Learning. Transform your career with industry-expert training.",
  keywords: "software testing, data science, AI, machine learning, automation testing, EdTech, training institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {/* <FixedOfferBar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}