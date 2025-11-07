"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Certificate, getCertificateById } from "@/data/certificates/registry";
import { CheckCircle2, AlertCircle, Link as LinkIcon, Copy } from "lucide-react";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-8">
      <p className="text-gray-500 dark:text-gray-500">{label}</p>
    </div>
  );
}

/* Dynamic import of the named export */
const CertificationPreviewSection = dynamic(
  () => import("./CertificationPreviewSection").then((m) => m.CertificationPreviewSection),
  { ssr: false, loading: () => <SectionLoader label="Loading preview..." /> }
);

export default function CertificationValidatorSection() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Certificate | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Accept IDs like CDPL-AAA-2025-8Q7K2 / CDPL-ACTD-2025-3M8Q1
  const pattern = useMemo(() => /^CDPL-(AAA|ACTD)-2025-[A-Z0-9]{5}$/i, []);

  const setUrlId = (id?: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    if (!id) params.delete("id");
    else params.set("id", id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const validateAndShow = (raw: string) => {
    const id = raw.trim().toUpperCase();
    setError("");
    setResult(null);
    setCopied(false);

    if (!pattern.test(id)) {
      setError(
        "Invalid format. Use CDPL-AAA-2025-XXXXX or CDPL-ACTD-2025-XXXXX (A–Z, 0–9)."
      );
      setUrlId(undefined);
      return;
    }
    const hit = getCertificateById(id);
    if (!hit) {
      setError("No certificate found for this ID.");
      setUrlId(undefined);
      return;
    }
    setResult(hit);
    setUrlId(hit.id); // show in URL for sharing
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateAndShow(query);
  };

  // Auto-load from ?id=...
  useEffect(() => {
    const id = searchParams?.get("id");
    if (id) {
      setQuery(id);
      validateAndShow(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shareUrl =
    result && typeof window !== "undefined"
      ? `${window.location.origin}${pathname}?id=${encodeURIComponent(result.id)}`
      : result
        ? `${pathname}?id=${encodeURIComponent(result.id)}`
        : null;

  const copyShare = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  };

  const exampleIds = ["CDPL-AAA-2025-8Q7K2", "CDPL-ACTD-2025-3M8Q1"];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* ===== Container with clean, futuristic blend (no layout change) ===== */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          {/* blend layers */}
          <span
            aria-hidden
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(255,140,0,0.05)" }}
          />
          <span
            aria-hidden
            className="absolute inset-0 rounded-3xl opacity-90 [mask-image:radial-gradient(140%_120%_at_0%_0%,#000_40%,transparent_70%)]"
            style={{
              backgroundImage:
                "conic-gradient(from 0deg at 100% 0%, rgba(14,165,233,.12), transparent 40%), radial-gradient(80% 60% at 100% 0%, rgba(157,123,255,.12), transparent 55%)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5"
          />

          {/* ===== Form ===== */}
          <form onSubmit={onSubmit} className="relative grid gap-3 sm:grid-cols-[1fr_auto]">
            <label htmlFor="certId" className="sr-only">
              Certificate ID
            </label>

            <div className="relative">
              {/* input icon */}
              <svg
                aria-hidden
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="1.6" />
              </svg>

              <input
                id="certId"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try: CDPL-AAA-2025-8Q7K2 or CDPL-ACTD-2025-3M8Q1"
                className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-10 py-2.5 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-orange-300"
                aria-describedby="certHelp"
              />

              {/* clear button (appears when typing) */}
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs text-slate-600 hover:bg-slate-100"
                  aria-label="Clear"
                >
                  Clear
                </button>
              ) : null}
            </div>

            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Validate
            </button>

            {/* helper + quick examples */}
            <p id="certHelp" className="col-span-full text-xs text-slate-600">
              Format: CDPL-AAA-2025-XXXXX or CDPL-ACTD-2025-XXXXX (letters &amp; numbers).
            </p>
            <div className="col-span-full flex flex-wrap gap-2">
              {exampleIds.map((ex) => (
                <button
                  key={ex}
                  type="button"
                  onClick={() => setQuery(ex)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 hover:bg-slate-50"
                  aria-label={`Use example ${ex}`}
                >
                  {ex}
                </button>
              ))}
            </div>
          </form>

          {/* ===== Feedback & Result ===== */}
          <div className="relative mt-5">
            {error && (
              <div className="relative overflow-hidden rounded-xl border border-red-200 bg-white px-4 py-3 text-sm text-red-700">
                {/* error background pattern */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-xl opacity-90 [mask-image:radial-gradient(120%_100%_at_0%_0%,#000_35%,transparent_70%)]"
                  style={{
                    backgroundImage:
                      "radial-gradient(80% 60% at 100% 0%, rgba(248,113,113,.12), transparent 55%), repeating-linear-gradient(45deg, rgba(248,113,113,.10) 0 2px, transparent 2px 6px)",
                  }}
                />
                <div className="relative flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4" />
                  <span>{error}</span>
                </div>
              </div>
            )}

            {result && (
              <div className="relative grid gap-4 rounded-2xl border border-orange-100 bg-white p-4 sm:grid-cols-5 overflow-hidden">
                {/* success blend */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-2xl opacity-90 [mask-image:radial-gradient(140%_120%_at_0%_0%,#000_40%,transparent_70%)]"
                  style={{
                    backgroundImage:
                      "radial-gradient(80% 60% at 100% 0%, rgba(16,185,129,.12), transparent 55%), repeating-linear-gradient(90deg, rgba(255,140,0,.10) 0 1px, transparent 1px 5px)",
                  }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5"
                />

                <div className="relative sm:col-span-2">
                  <CertificationPreviewSection cert={result} />
                </div>

                <div className="relative sm:col-span-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-extrabold">
                      {result.program} Certificate — {result.status}
                    </h3>
                    {result.status?.toLowerCase() === "verified" ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Verified
                      </span>
                    ) : null}
                  </div>

                  <dl className="mt-3 grid grid-cols-1 gap-1 text-sm text-slate-800 sm:grid-cols-2">
                    <div>
                      <dt className="font-semibold">Certificate ID</dt>
                      <dd className="break-all">{result.id}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Issued on</dt>
                      <dd>{new Date(result.issuedOn).toLocaleDateString("en-IN")}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Holder</dt>
                      <dd>{result.holder}</dd>
                    </div>
                    <div className="flex min-w-0 items-center gap-2">
                      <div className="min-w-0">
                        <dt className="font-semibold">Shareable link</dt>
                        <dd className="truncate">
                          <Link
                            href={shareUrl ?? "#"}
                            className="inline-flex items-center gap-1 text-slate-900 underline underline-offset-4"
                          >
                            <LinkIcon className="h-4 w-4" />
                            <span className="truncate">{shareUrl}</span>
                          </Link>
                        </dd>
                      </div>
                      <button
                        type="button"
                        onClick={copyShare}
                        className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
                        aria-label="Copy shareable link"
                        title="Copy"
                      >
                        <span className="inline-flex items-center gap-1">
                          <Copy className="h-3.5 w-3.5" />
                          {copied ? "Copied" : "Copy"}
                        </span>
                      </button>
                    </div>
                  </dl>

                  <p className="mt-3 text-xs text-slate-700">
                    This verification is provided by CDPL (Cinute Digital Pvt. Ltd.). If you suspect misuse,{" "}
                    <Link href="/contact-us" className="underline underline-offset-4">
                      contact CDPL support
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="sr-only">Validate CDPL AAA and ACTD certificates using their unique IDs.</p>
      </div>
    </section>
  );
}
