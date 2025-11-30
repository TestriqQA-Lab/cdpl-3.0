"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, Loader2, Send, Building2, User, Mail, Phone, MessageSquare } from "lucide-react";

interface TrainingEnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TrainingEnquiryModal({ isOpen, onClose }: TrainingEnquiryModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/enquire", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to submit enquiry");

            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                onClose();
            }, 3000);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={onClose}
                                    >
                                        <span className="sr-only">Close</span>
                                        <X className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                                            Enquire for Corporate Training
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Fill out the form below and our team will get back to you with a tailored training plan.
                                            </p>
                                        </div>

                                        {success ? (
                                            <div className="mt-6 rounded-lg bg-green-50 p-4 text-center">
                                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                                    <CheckIcon className="h-6 w-6 text-green-600" />
                                                </div>
                                                <h3 className="mt-2 text-sm font-medium text-green-800">Enquiry Sent!</h3>
                                                <p className="mt-1 text-sm text-green-600">We'll be in touch shortly.</p>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                        Full Name
                                                    </label>
                                                    <div className="relative mt-1 rounded-md shadow-sm">
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <User className="h-4 w-4 text-gray-400" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            required
                                                            className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 border"
                                                            placeholder="John Doe"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                        Work Email
                                                    </label>
                                                    <div className="relative mt-1 rounded-md shadow-sm">
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <Mail className="h-4 w-4 text-gray-400" />
                                                        </div>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            required
                                                            className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 border"
                                                            placeholder="john@company.com"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                        Phone Number
                                                    </label>
                                                    <div className="relative mt-1 rounded-md shadow-sm">
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <Phone className="h-4 w-4 text-gray-400" />
                                                        </div>
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            id="phone"
                                                            required
                                                            className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 border"
                                                            placeholder="+91 98765 43210"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                                        Company / Organization
                                                    </label>
                                                    <div className="relative mt-1 rounded-md shadow-sm">
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <Building2 className="h-4 w-4 text-gray-400" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="company"
                                                            id="company"
                                                            required
                                                            className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 border"
                                                            placeholder="Acme Corp"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                                        Training Requirements
                                                    </label>
                                                    <div className="relative mt-1 rounded-md shadow-sm">
                                                        <div className="pointer-events-none absolute top-3 left-0 flex items-center pl-3">
                                                            <MessageSquare className="h-4 w-4 text-gray-400" />
                                                        </div>
                                                        <textarea
                                                            name="message"
                                                            id="message"
                                                            rows={3}
                                                            required
                                                            className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 border"
                                                            placeholder="e.g., Looking for a 3-day workshop on Advanced Python for 10 developers..."
                                                        />
                                                    </div>
                                                </div>

                                                {error && <p className="text-sm text-red-600">{error}</p>}

                                                <div className="mt-5 sm:mt-6">
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#FF8C00] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                                                    >
                                                        {isSubmitting ? (
                                                            <>
                                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                                Sending...
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Send className="mr-2 h-4 w-4" />
                                                                Submit Enquiry
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    );
}
