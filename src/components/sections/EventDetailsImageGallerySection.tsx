"use client";

import type { PastEvent } from "@/data/eventsData";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = { event: PastEvent };

export default function EventDetailsImageGallerySection({ event }: Props) {
  const gallery = useMemo(() => (event.gallery ?? []).filter(Boolean), [event]);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const show = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + gallery.length) % gallery.length), [gallery.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % gallery.length), [gallery.length]);

  // Keyboard controls + focus the dialog for a11y
  useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <section className="w-full bg-white text-neutral-900">
      <div className="mx-auto max-w-none px-0 py-0">
        <div className="rounded-2xl border border-black/10 bg-white shadow-sm">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight">Image Gallery</h2>

            {gallery.length === 0 ? (
              <p className="mt-3 text-sm text-neutral-700">No images available for this event.</p>
            ) : (
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {gallery.map((src, i) => (
                  <button
                    type="button"
                    key={src + i}
                    onClick={() => show(i)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-black/10"
                    aria-label={`Open image ${i + 1} of ${gallery.length}`}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={src}
                        alt={`Gallery image ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition group-hover:scale-[1.03]"
                        priority={i < 2}
                      />
                    </div>
                    <span className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {open && gallery.length > 0 && (
        <div
          ref={dialogRef}
          tabIndex={-1}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 focus:outline-none"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery viewer"
        >
          {/* Buttons are now above the image for clickability */}
          <button
            onClick={close}
            aria-label="Close gallery"
            className="absolute right-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow hover:bg-white"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image wrapper is below buttons to avoid overlap issues */}
          <div className="relative z-10 mx-auto w-[92vw] max-w-5xl">
            <div className="relative mx-auto aspect-[16/10] max-h-[82vh] w-full">
              <Image
                src={gallery[index]}
                alt={`Gallery image ${index + 1} of ${gallery.length}`}
                fill
                sizes="90vw"
                className="rounded-2xl object-contain"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm text-white/80">
              {index + 1} / {gallery.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
