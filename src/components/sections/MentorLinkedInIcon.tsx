import type { SVGProps } from "react";

export default function MentorLinkedInIcon(props: SVGProps<SVGSVGElement>) {
  // `block` removes baseline whitespace that causes vertical misalignment
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props} className={`block ${props.className ?? ""}`}>
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5V16.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V24h-5V8z"
      />
    </svg>
  );
}
