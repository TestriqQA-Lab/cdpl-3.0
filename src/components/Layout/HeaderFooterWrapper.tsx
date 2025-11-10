"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import Header and Footer with ssr: false
// This component is a client component, so it can safely use ssr: false
const Header = dynamic(
  () => import("@/components/Layout/Header"),
  { ssr: false }
);

const Footer = dynamic(
  () => import("@/components/Layout/Footer"),
  { ssr: false }
);

interface HeaderFooterWrapperProps {
  children: React.ReactNode;
}

export default function HeaderFooterWrapper({ children }: HeaderFooterWrapperProps) {
  return (
    <>
      <Header />
      {/* <FixedOfferBar /> - Assuming this is a server component or a simple client component */}
      {children}
      <Footer />
    </>
  );
}
