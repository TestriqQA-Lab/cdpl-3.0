// src/types/index.ts


export interface Stat {
  value: string;
  label: string;
}

export interface KeyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Module {
  title: string;
  topics: string[];
}

export interface ProjectExample {
  title: string;
  description: string;
  skills: string[];
}

export interface Tool {
  name: string;
  category: string;
  description: string;
}

export interface JobRole {
  role: string;
}

export interface CareerRoadmapStep {
  step: number;
  title: string;
  description: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ContentData {
  course_title: string;
  seo_description: string;
  seo_keywords: string;
  hero_section: {
    tagline: string;
    description: string;
    duration: string;
    key_features: KeyFeature[];
  };
  stats_section: {
    stats: Stat[];
    web_stats_reference: Stat[];
  };
  why_enroll_section: {
    title: string;
    points: KeyFeature[];
  };
  curriculum_section: {
    title: string;
    description: string;
    modules: Module[];
  };
  projects_section: {
    title: string;
    domains: string[];
    project_examples: ProjectExample[];
  };
  tools_section: {
    title: string;
    tools: Tool[];
  };
  career_section: {
    title: string;
    job_roles: string[];
    hiring_companies_placeholder: string;
    placement_support: string[];
  };
  who_should_enroll_section: {
    title: string;
    target_audience: string[];
    outcome: string;
  };
  faq_section: {
    questions: FaqItem[];
  };
  career_roadmap_section: {
    title: string;
    steps: CareerRoadmapStep[];
  };
}
