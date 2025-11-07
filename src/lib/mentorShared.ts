// src/lib/mentorShared.ts  (or components/mentors/shared.ts)

export type Social = {
  platform: "linkedin" | "x" | "github" | "website";
  url: string;
};

export type Mentor = {
  id: string;
  name: string;
  title: string;
  company?: string;
  domain:
    | "QA"
    | "Data Science"
    | "Data Analytics"
    | "Marketing"
    | "Product"
    | "Engineering"
    | "Cloud"
    | "Security"
    | "Other"
    | "Data Engineering";
  location?: string;
  experience?: string;
  avatar?: string;
  highlights?: string[];
  bio?: string;
  socials?: Social[]; // <-- now recognized
};

export function classNames(...xs: (string | false | undefined | null)[]) {
  return xs.filter(Boolean).join(" ");
}

export const DOMAIN_COLORS: Record<NonNullable<Mentor["domain"]>, string> = {
  QA: "bg-blue-50 text-blue-700 ring-blue-200",
  "Data Science": "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "Data Analytics": "bg-purple-50 text-purple-700 ring-purple-200",
  Marketing: "bg-pink-50 text-pink-700 ring-pink-200",
  Product: "bg-amber-50 text-amber-700 ring-amber-200",
  Engineering: "bg-slate-50 text-slate-700 ring-slate-200",
  Cloud: "bg-cyan-50 text-cyan-700 ring-cyan-200",
  Security: "bg-red-50 text-red-700 ring-red-200",
  Other: "bg-gray-50 text-gray-700 ring-gray-200",
  "Data Engineering": "bg-indigo-50 text-indigo-700 ring-indigo-200",
};
