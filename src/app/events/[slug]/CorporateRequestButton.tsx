'use client';

interface CorporateRequestButtonProps {
  eventCategory: string;
}

export default function CorporateRequestButton({ eventCategory }: CorporateRequestButtonProps) {
  const handleClick = () => {
    const customEvent = new CustomEvent('openCorporateRegistration', {
      detail: { eventType: eventCategory }
    });
    window.dispatchEvent(customEvent);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
    >
      Request for Your Organization
    </button>
  );
}