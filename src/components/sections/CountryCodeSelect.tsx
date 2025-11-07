"use client";

import { useMemo, CSSProperties } from "react";

export type Country = { iso: string; code: string; name: string };

const COUNTRIES: Country[] = [
  { iso: "IN", code: "+91",  name: "India" },
  { iso: "US", code: "+1",   name: "United States" },
  { iso: "GB", code: "+44",  name: "United Kingdom" },
  { iso: "AE", code: "+971", name: "UAE" },
  { iso: "AU", code: "+61",  name: "Australia" },
  { iso: "SG", code: "+65",  name: "Singapore" },
  { iso: "DE", code: "+49",  name: "Germany" },
  { iso: "CA", code: "+1",   name: "Canada" },
];

// O(1) lookup map
const COUNTRY_MAP: Record<string, Country> = COUNTRIES.reduce((acc, c) => {
  acc[c.code] = c;
  return acc;
}, {} as Record<string, Country>);

// Turn "IN" → "🇮🇳" using regional indicator symbols (no images)
function isoToFlag(iso: string): string {
  if (!iso || iso.length !== 2) return "";
  const base = 0x1f1e6; // regional indicator 'A'
  const A = "A".charCodeAt(0);
  const up = iso.toUpperCase();
  return String.fromCodePoint(
    base + (up.charCodeAt(0) - A),
    base + (up.charCodeAt(1) - A)
  );
}

// Emoji-capable font stack so flags show reliably on desktop
const emojiFont: CSSProperties = {
  fontFamily:
    'system-ui, -apple-system, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "Twemoji Mozilla", "Helvetica Neue", Arial, sans-serif',
};

export function CountryCodeSelect({
  value,
  onChange,
  className,
  selectClassName,
  label = "Country code",
}: {
  value: string;               // e.g. "+91"
  onChange: (val: string) => void;
  className?: string;
  selectClassName?: string;
  label?: string;
}) {
  const current = useMemo(
    () => COUNTRY_MAP[value] ?? COUNTRIES[0],
    [value]
  );

  return (
    <div className={["relative", className].filter(Boolean).join(" ")}>
      {/* Persistent flag chip (no images) */}
      <span
        className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 rounded-md
                   border border-white/60 bg-white/70 px-1.5 py-0.5 text-[14px]
                   shadow-sm backdrop-blur"
        style={emojiFont}
        aria-hidden
      >
        {isoToFlag(current.iso)}
      </span>

      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={[
          "w-full rounded-lg border border-slate-200 bg-slate-50 pl-12 pr-8 py-2",
          "text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200",
          selectClassName,
        ].join(" ")}
        style={emojiFont}
      >
        {COUNTRIES.map((c) => (
          <option key={c.iso} value={c.code}>
            {isoToFlag(c.iso)} {c.name} ({c.code})
          </option>
        ))}
      </select>
    </div>
  );
}
