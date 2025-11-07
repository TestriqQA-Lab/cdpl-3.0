'use client';

interface RequestButtonProps {
  serviceTitle: string;
}

export default function RequestButton({ serviceTitle }: RequestButtonProps) {
  const handleClick = () => {
    const event = new CustomEvent('openCorporateRegistration', {
      detail: { service: serviceTitle },
    });
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={`Request ${serviceTitle}`}
      className="
        group relative inline-flex items-center justify-center
        rounded-xl p-[2px]
        bg-gradient-to-r from-cyan-400 to-sky-500
        shadow-lg shadow-cyan-500/15
        transition-transform duration-300 ease-out
        hover:-translate-y-0.5 active:translate-y-0
        focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50
        motion-reduce:transition-none motion-reduce:transform-none
      "
    >
      {/* Colored inner surface */}
      <span
        className="
          relative rounded-[10px]
          px-8 py-3.5
          text-white font-semibold tracking-wide
          bg-gradient-to-br from-cyan-600 via-cyan-600 to-sky-600
          shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_20px_-8px_rgba(14,165,233,0.45)]
          ring-1 ring-white/10
          grid grid-flow-col items-center gap-2
        "
      >
        {/* Subtle top highlight */}
        <span
          aria-hidden
          className="
            pointer-events-none absolute inset-0 rounded-[10px]
            bg-[linear-gradient(to_bottom,rgba(255,255,255,0.25),transparent_40%)]
            mix-blend-soft-light
          "
        />
        {/* Fine texture (SVG noise) */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[10px] opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,\
              <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'>\
                <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter>\
                <rect width='100%' height='100%' filter='url(%23n)' opacity='0.04'/>\
              </svg>\")",
          }}
        />
        {/* Sheen sweep */}
        <span
          aria-hidden
          className="
            pointer-events-none absolute inset-y-0 -left-1/2 w-1/2
            bg-gradient-to-r from-transparent via-white/60 to-transparent
            skew-x-[-20deg] translate-x-[-20%]
            transition-transform duration-700 ease-out
            group-hover:translate-x-[220%]
            motion-reduce:hidden
          "
        />

        <span className="relative">Request This Service</span>
        <svg
          className="relative h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>

      {/* Outer glow halo */}
      <span
        aria-hidden
        className="
          pointer-events-none absolute -inset-1 rounded-[14px]
          bg-gradient-to-r from-cyan-400/0 via-cyan-400/25 to-sky-400/0
          blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
        "
      />
    </button>
  );
}
