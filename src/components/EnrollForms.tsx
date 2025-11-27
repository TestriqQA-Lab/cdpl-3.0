"use client";

import React, { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export type LeadFormData = {
    name: string;
    email: string;
    phone: string;
    track?: string;
};

export type EnrollFormData = {
    name: string;
    email: string;
    phone: string;
};

interface LeadFormProps {
    variants?: any;
    tracks?: string[];
    onSubmit: (data: LeadFormData) => void;
    className?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ variants, tracks, onSubmit, className }) => {
    const [form, setForm] = useState<LeadFormData>({
        name: "",
        email: "",
        phone: "",
        track: tracks && tracks.length > 0 ? tracks[0] : "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <motion.div variants={variants} className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-lg ${className}`}>
            <h3 className="text-xl font-bold text-slate-900">Request a Callback</h3>
            <p className="mt-2 text-sm text-slate-600">
                Enter your details to get the full curriculum, fees, and upcoming batch dates.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="block w-full rounded-lg border border-slate-300 text-slate-900 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="block w-full rounded-lg border border-slate-300 text-slate-900 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="block w-full rounded-lg border border-slate-300 text-slate-900 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="+91 98765 43210"
                    />
                </div>
                {tracks && tracks.length > 0 && (
                    <div>
                        <label htmlFor="track" className="mb-1 block text-sm font-medium text-slate-700">
                            Interested Track
                        </label>
                        <select
                            id="track"
                            value={form.track}
                            onChange={(e) => setForm({ ...form, track: e.target.value })}
                            className="block w-full rounded-lg border border-slate-300 text-slate-900 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                            {tracks.map((track) => (
                                <option key={track} value={track}>
                                    {track}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Get Course Details <ArrowRight className="ml-2 h-4 w-4" />
                </button>
            </form>
        </motion.div>
    );
};

interface EnrollPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: (data: EnrollFormData) => void;
}

export const EnrollPopup: React.FC<EnrollPopupProps> = ({ isOpen, onClose }) => {
    return (
        <EnrollModal isOpen={isOpen} onClose={onClose} courseName="Course" />
    );
};
