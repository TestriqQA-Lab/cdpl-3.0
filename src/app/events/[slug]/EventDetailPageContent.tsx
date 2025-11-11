// src/app/events/[slug]/EventDetailPageContent.tsx
'use client';

import { useSearchParams } from 'next/navigation';

export default function EventDetailPageContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get('ref');

  // Optional: Log referral or trigger analytics
  if (typeof window !== 'undefined' && ref) {
    console.log('Event page accessed via referral:', ref);
    // You can send to GA, etc. here
  }

  return null; // This component renders nothing visible
}