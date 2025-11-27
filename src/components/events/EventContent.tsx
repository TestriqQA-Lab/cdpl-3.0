import React from "react";
import { PastEvent } from "@/data/eventsData";
import { Check, Lightbulb, Target, Building2, MapPin, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

interface EventContentProps {
    event: PastEvent;
}

export default function EventContent({ event }: EventContentProps) {
    return (
        <div className="space-y-20">
            {/* Purpose Section - Large Typography */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        <Target className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Event Purpose</h2>
                </div>
                <div className="prose prose-xl text-slate-600 max-w-none leading-relaxed">
                    <p>{event.purpose}</p>
                </div>
            </section>

            {/* Session Highlights - Colorful Card Grid */}
            {event.sessionHighlights && event.sessionHighlights.length > 0 && (
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                            <Lightbulb className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Session Highlights</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {event.sessionHighlights.map((session, idx) => (
                            <div
                                key={idx}
                                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />

                                <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10 group-hover:text-blue-600 transition-colors">
                                    {session.title}
                                </h3>
                                <ul className="space-y-3 relative z-10">
                                    {session.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start text-slate-600">
                                            <ArrowRight className="w-4 h-4 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Key Takeaways - Feature List */}
            {event.keyTakeaways && event.keyTakeaways.length > 0 && (
                <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -ml-20 -mb-20" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-white/10 rounded-lg text-yellow-400 backdrop-blur-sm">
                                <Star className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Key Takeaways</h2>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            {event.keyTakeaways.map((takeaway, idx) => (
                                <div key={idx} className="flex items-start bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mr-4 flex-shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-slate-200 font-medium leading-relaxed">{takeaway}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Organizer & Venue - Split Feature Cards */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Organizer */}
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col h-full">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                        <Building2 className="w-5 h-5 mr-2 text-slate-400" />
                        Organizer
                    </h2>
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            CDPL
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">{event.organization}</h3>
                            <Link href="https://cinutedigital.com" className="text-sm text-blue-600 hover:underline font-medium">
                                Visit Website
                            </Link>
                        </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                        {event.organizerDetails || "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing."}
                    </p>
                </section>

                {/* Venue */}
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col h-full">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-slate-400" />
                        Venue
                    </h2>
                    <div className="flex-grow">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{event.venueTitle || event.location}</h3>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                            {event.venueDescription || "A state-of-the-art facility equipped with modern amenities to ensure a seamless learning experience."}
                        </p>
                        {event.venueAddress && (
                            <div className="flex items-center text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">
                                <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                                {event.venueAddress}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
