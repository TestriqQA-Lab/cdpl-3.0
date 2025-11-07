"use client";

export default function EventsPastEventsFeatureEventsRequestTrainingButton() {
    return (
        <button
            onClick={() => {
                const evt = new CustomEvent("openCorporateRegistration");
                window.dispatchEvent(evt);
            }}
            className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
            Request Training for Your Organization
        </button>
    );
}
