import React from "react";
import { PastEvent } from "@/data/eventsData";
import { Calendar, MapPin, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, Clock, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

interface EventSidebarProps {
  event: PastEvent;
}

export default function EventSidebar({ event }: EventSidebarProps) {
  return (
    <div className="space-y-8 sticky top-24">
      {/* Event Details Card - High Contrast */}
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="bg-slate-900 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-green-400 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
              Registration Open
            </span>
          </div>
          <h3 className="text-xl font-bold leading-tight mb-2">{event.title}</h3>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Date & Time</p>
            <div className="flex items-center text-slate-900 font-semibold mb-1">
              <Calendar className="w-5 h-5 mr-3 text-blue-600" />
              {event.date}
            </div>
            <div className="flex items-center text-slate-500 text-sm pl-8">
              <Clock className="w-4 h-4 mr-2" />
              10:00 AM - 05:00 PM (IST)
            </div>
          </div>

          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Location</p>
            <div className="flex items-start text-slate-900 font-semibold">
              <MapPin className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-0.5" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <Link
              href="/contact-us"
              className="group block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center">
                Register Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <p className="text-center text-xs text-slate-400 mt-3">
              Limited seats available. Hurry up!
            </p>
          </div>
        </div>
      </div>

      {/* Share Card - Minimal */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100">
        <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center">
          <Share2 className="w-4 h-4 mr-2 text-slate-400" />
          Share Event
        </h4>
        <div className="flex gap-3">
          <button className="flex-1 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
            <Facebook className="w-4 h-4" />
          </button>
          <button className="flex-1 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-sky-50 hover:text-sky-500 hover:border-sky-200 transition-all">
            <Twitter className="w-4 h-4" />
          </button>
          <button className="flex-1 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all">
            <Linkedin className="w-4 h-4" />
          </button>
          <button className="flex-1 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-all">
            <LinkIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
