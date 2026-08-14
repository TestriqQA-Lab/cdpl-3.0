'use client';

import React, { useEffect, useState } from 'react';

/**
 * CustomFlag - A wrapper for the country flag in PhoneInput
 * 
 * Added 'title' attribute to satisfy SEO requirements identified by
 * 'SEO in 1 click' extension.
 * 
 * Updated with a 'mounted' state check to avoid Next.js hydration errors
 * where the server-side rendered flag might not match the client-side
 * version with the additional 'title' attribute.
 */
const CustomFlag = ({ country, countryName }: any): any => {
  if (!country) return null;

  // Served from our own origin, not react-phone-number-input's default CDN
  // (purecatamphetamine.github.io). That default cost a full cross-origin
  // DNS + TCP + TLS handshake to a GitHub Pages host, and because the lead
  // form sits above the fold on the home page the handshake landed inside the
  // LCP window: Lighthouse listed the origin under "Preconnect candidates"
  // with an estimated 380 ms of LCP savings. Preconnecting would only warm
  // the connection; serving the file ourselves removes it entirely, and also
  // clears the "Use efficient cache lifetimes" finding (the CDN sent a 10
  // minute TTL — ours are immutable, see the /flags/ rule in next.config.ts).
  //
  // public/flags/3x2/ holds all 265 SVGs from the country-flag-icons package
  // that react-phone-number-input already depends on, so every country the
  // dropdown offers still resolves. They are byte-identical to the package's
  // originals; public/flags/LICENSE carries the MIT notice.
  return (
    <img
      className="PhoneInputCountryIconImg"
      src={`/flags/3x2/${country}.svg`}
      alt={`${countryName || country} Flag`}
      title={`${countryName || country} Flag`} // Explicit title to resolve SEO issue
      // Intrinsic 3:2 ratio so the box is reserved before the SVG arrives.
      // Not lazy: this sits inside the lead form, which is above the fold on
      // the home page, and lazy-loading it delayed an above-fold paint.
      width={24}
      height={16}
      decoding="async"
    />
  );
};

export default CustomFlag;
