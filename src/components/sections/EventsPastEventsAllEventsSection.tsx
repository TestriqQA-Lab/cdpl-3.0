// src/components/sections/EventsPastEventsAllEventsSection.tsx
"use client";

import Link from "next/link";
import { Calendar, Users, ArrowRight } from "lucide-react";
import Image from "next/image";

export type AllEvent = {
  id: string | number;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  attendees: string | number;
  organization: string;
  purpose: string;
  highlights: string[];
  category: string;
  heroImageUrl?: string;
};

const CATEGORY_STYLES: Record<string, { badgeBg: string; btnBg: string; text: string }> = {
  "AI & Machine Learning": { badgeBg: "bg-purple-600", btnBg: "bg-purple-600", text: "text-purple-600" },
  "Software Testing": { badgeBg: "bg-green-600", btnBg: "bg-green-600", text: "text-green-600" },
  "Data Science": { badgeBg: "bg-blue-600", btnBg: "bg-blue-600", text: "text-blue-600" },
  "Academic Training": { badgeBg: "bg-orange-600", btnBg: "bg-orange-600", text: "text-orange-600" },
  "Web Development": { badgeBg: "bg-cyan-600", btnBg: "bg-cyan-600", text: "text-cyan-600" },
  "Industrial Training": { badgeBg: "bg-teal-600", btnBg: "bg-teal-600", text: "text-teal-600" },
  "Corporate Training": { badgeBg: "bg-pink-600", btnBg: "bg-pink-600", text: "text-pink-600" },
  Technology: { badgeBg: "bg-indigo-600", btnBg: "bg-indigo-600", text: "text-indigo-600" },
};
const FALLBACK = { badgeBg: "bg-slate-700", btnBg: "bg-slate-700", text: "text-slate-700" };

export default function EventsPastEventsAllEventsSection({
  events,
  cardMinHClass = "min-h-[480px]",
}: {
  events: AllEvent[];
  cardMinHClass?: string;
}) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => {
        const cs = CATEGORY_STYLES[event.category] ?? FALLBACK;
        return (
          <article
            key={event.id}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${cardMinHClass}`}
          >
            <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
              <div className="absolute inset-0 flex items-center justify-center">
                {event.heroImageUrl ? (
                  <Image
                    src={event.heroImageUrl}
                    alt={event.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Calendar className="w-16 h-16 text-purple-300" />
                )}
              </div>
              <div className="absolute top-4 left-4">
                <span className={`${cs.badgeBg} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md`}>
                  {event.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
              <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2">
                {event.title}
              </h3>

              {event.subtitle ? (
                <p className={`mb-3 text-sm font-semibold ${cs.text}`}>
                  {event.subtitle}
                </p>
              ) : null}

              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>{event.attendees} participants</span>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {event.purpose}
              </p>

              <div className="mt-auto">
                <Link href={`/events/${event.slug}`}>
                  <button
                    className={`w-full text-white px-4 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer ${cs.btnBg}`}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
