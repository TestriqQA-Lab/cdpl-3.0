// components/ui/JobPill.tsx
interface JobPillProps {
  title: string;
}

export default function JobPill({ title }: JobPillProps) {
  return (
    <span className="inline-block px-5 py-3 m-2 text-sm md:text-base font-medium text-orange-700 bg-orange-50 border border-orange-200 rounded-full hover:bg-orange-100 transition">
      {title}
    </span>
  );
}