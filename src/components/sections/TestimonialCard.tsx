"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export type TestimonialCardProps = {
  name: string;
  role: string;
  company?: string;
  rating: number;
  content: string;
  avatar: string;
};

export default function TestimonialCard({
  name,
  role,
  company,
  rating,
  content,
  avatar,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.35 }}
      className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_2px_18px_-10px_rgba(0,0,0,.3)]"
    >
      {/* Quote */}
      <p className="text-[15px] leading-relaxed text-neutral-800">
        “{content}”
      </p>

      {/* Footer */}
      <div className="mt-5 flex items-center gap-3">
        <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white shadow">
          <Image src={avatar} alt={`${name} avatar`} fill className="object-cover" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-neutral-900">{name}</p>
          <p className="truncate text-xs text-neutral-500">
            {role}{company ? ` • ${company}` : ""}
          </p>
        </div>
        <div className="ml-auto inline-flex items-center gap-1 rounded-full bg-[var(--color-brand)]/10 px-2 py-0.5 text-xs">
          <Star className="h-3.5 w-3.5 text-[var(--color-brand)]" />
          <span className="font-medium">{rating}</span>
        </div>
      </div>
    </motion.article>
  );
}
