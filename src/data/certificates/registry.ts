export type Program = "AAA" | "ACTD";

export type Certificate = {
  id: string;                 // e.g. "CDPL-AAA-2025-8Q7K2"
  holder: string;             // e.g. "Ananya Sharma"
  program: Program;           // AAA | ACTD
  issuedOn: string;           // ISO date string
  status: "Valid" | "Revoked" | "Expired";
  // Optional fields you might surface later
  batch?: string;
  score?: string;
  instructor?: string;
};



/**
 * Two sample certs with random-ish IDs in the format:
 * CDPL-(AAA|ACTD)-2025-[A-Z0-9]{5}
 */
export const CERTIFICATES: Certificate[] = [
  {
    id: "CDPL-AAA-2025-8Q7K2",
    holder: "Ananya Sharma",
    program: "AAA",
    issuedOn: "2025-07-18",
    status: "Valid",
    batch: "AAA-2025-July",
    score: "A",
    instructor: "R. Menon",
  },
  {
    id: "CDPL-ACTD-2025-3M8Q1",
    holder: "Rahul Verma",
    program: "ACTD",
    issuedOn: "2025-08-05",
    status: "Valid",
    batch: "ACTD-2025-Aug",
    score: "A-",
    instructor: "S. Gupta",
  },
];

/** Quick in-memory index for O(1) lookups */
const BY_ID = new Map(CERTIFICATES.map((c) => [c.id, c] as const));

export function getCertificateById(id: string) {
  return BY_ID.get(id.toUpperCase()) ?? null;
}
