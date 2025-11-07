'use client';

import Image from "next/image";
import { useMemo, useState } from "react";
import type { PastEvent } from "@/data/eventsData";

type Props = { event: PastEvent };

function slugify(input: string) {
  return (input || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
function ensureExt(path: string) {
  return /\.(png|jpg|jpeg|webp|svg)$/i.test(path) ? path : `${path}.png`;
}
function normalizeVenueSrc(
  venueImageUrl: string | undefined,
  venueTitle: string | undefined,
  location: string | undefined,
  perEventFallback: string | undefined
) {
  const DEFAULT_FALLBACK = "/events/venues/college-venue-fallback.png";
  const fallback = (perEventFallback?.trim() || DEFAULT_FALLBACK);

  if (venueImageUrl && venueImageUrl.trim()) {
    let src = venueImageUrl.trim();
    if (!src.startsWith("/")) src = `/events/venues/${src}`;
    if (src.startsWith("/venues/")) src = `/events${src}`;
    src = ensureExt(src);
    return { initialSrc: src, fallbackSrc: fallback };
  }
  const base = venueTitle || location || "venue";
  const derived = `/events/venues/${slugify(base)}.png`;
  return { initialSrc: derived, fallbackSrc: fallback };
}

function SmartImage({
  src,
  fallbackSrc,
  alt,
  className,
  width = 72,
  height = 72,
  sizes = "72px",
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      onError={() => imgSrc !== fallbackSrc && setImgSrc(fallbackSrc)}
      className={className}
      priority={false}
    />
  );
}

export default function EventDetailsVenueSection({ event }: Props) {
  const title = event.venueTitle ?? event.location ?? "";
  const address = event.venueAddress;

  // Avoid `any`: add a tiny helper type for events that may carry mapUrl
  type WithMapUrl = { mapUrl?: string };
  const mapUrl = (event as WithMapUrl).mapUrl;

  const { initialSrc, fallbackSrc } = useMemo(
    () =>
      normalizeVenueSrc(
        event.venueImageUrl,
        event.venueTitle,
        event.location,
        event.venueFallbackImageUrl
      ),
    [
      event.venueImageUrl,
      event.venueTitle,
      event.location,
      event.venueFallbackImageUrl,
    ]
  );

  return (
    <section className="w-full bg-white text-slate-900">
      {/* No inner container — inherits parent max-w & padding */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg ring-1 ring-slate-900/5">
        {/* Section label */}
        <div className="px-6 pt-6 md:px-10 md:pt-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Venue
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-4 md:p-10 md:pt-6">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-6">
            {/* Image (flush) */}
            <div className="self-start">
              <div className="relative h-14 w-14 md:h-20 md:w-20 md:-ml-3 -mt-1">
                <SmartImage
                  src={initialSrc}
                  fallbackSrc={fallbackSrc}
                  alt={title || "Venue"}
                  width={80}
                  height={80}
                  sizes="80px"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Right column: title → address → description */}
            <div className="min-w-0 self-start">
              <h3 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                {title || "Not specified"}
              </h3>

              {address ? (
                <p className="mt-1 text-sm text-slate-600 break-words">
                  {address}
                </p>
              ) : null}

              {event.venueDescription ? (
                <p className="mt-1 max-w-3xl text-[15px] leading-relaxed text-slate-700">
                  {event.venueDescription}
                </p>
              ) : null}

              {mapUrl ? (
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-indigo-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded"
                >
                  View on map <span aria-hidden>→</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  );
}
