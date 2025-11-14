// src/components/data-analytics-bi-bigdata/types.ts

export interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: string; // Icon name from a library like Lucide or Heroicons
}

export interface CurriculumModule {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface ToolItem {
  id: number;
  name: string;
  icon: string; // Path to image or icon name
  category: 'BI & Visualization' | 'Databases' | 'Programming' | 'Big Data';
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string; // Path to image
}

export interface CareerPathStep {
  id: number;
  title: string;
  description: string;
  role: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tools: string[];
}

export interface WhyEnrollItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface HiringCompany {
  id: number;
  name: string;
  logo: string; // Path to logo image
}

export interface CareerRole {
  id: number;
  title: string;
  description: string;
  salaryRange: string;
}

export interface WhoShouldEnrollItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}
