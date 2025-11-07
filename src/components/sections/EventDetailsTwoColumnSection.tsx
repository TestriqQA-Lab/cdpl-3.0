// src/components/sections/EventDetailsTwoColumnSection.tsx
import type { PastEvent } from "@/data/eventsData";

// Reused sections
import EventDetailsStatsSection from "./EventDetailsStatsSection";
import EventDetailsHighlightsSection from "./EventDetailsHighlightsSection";
import EventDetailsKeyTakeawaysSection from "./EventDetailsKeyTakeawaysSection";
import EventDetailsSidebarSection from "./EventDetailsSidebarSection";
import type { ReactNode } from "react";

type Props = {
  event: PastEvent;
  totalSessions: number;
  totalBullets: number;
  extras?: ReactNode; // ⬅️ New: extra blocks rendered after Key Takeaways
};

export default function EventDetailsTwoColumnSection({
  event,
  totalSessions,
  totalBullets,
  extras,
}: Props) {
  return (
    <section className="w-full bg-white text-neutral-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* LEFT: All content blocks */}
        <div className="lg:col-span-2 space-y-8">
          <EventDetailsStatsSection
            attendees={Number(event.attendees) || 0}
            sessions={totalSessions}
            bullets={totalBullets}
            org={event.organization}
            fullWidth
          />
          <EventDetailsHighlightsSection event={event} fullWidth />

          {/* Purpose */}
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <div
              aria-hidden
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(60rem 40rem at 10% -10%, rgba(255,140,0,.08), transparent 60%), radial-gradient(50rem 30rem at 120% 10%, rgba(59,130,246,.08), transparent 50%)",
              }}
            />
            <div className="relative p-6 md:p-8">
              <h2 className="text-2xl font-bold tracking-tight">Purpose</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
                {event.purpose}
              </p>
            </div>
          </div>

          {/* Takeaways */}
          <EventDetailsKeyTakeawaysSection takeaways={event.keyTakeaways ?? []} fullWidth />

          {/* ✅ New extras injected below */}
          {extras}
        </div>

        {/* RIGHT: Sticky sidebar */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <EventDetailsSidebarSection event={event} />
          </div>
        </div>
      </div>
    </section>
  );
}
