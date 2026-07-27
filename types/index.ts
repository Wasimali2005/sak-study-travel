export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Country {
  id: string;
  name: string;
  tagline: string;
  image: string;
}

export interface VisaType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SectionStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  href: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  university: string;
  quote: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
