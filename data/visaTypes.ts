export interface VisaType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const visaTypes: VisaType[] = [
  {
    id: "student-visa",
    title: "Student Visa",
    description: "For full-time degree programs at recognized institutions.",
    icon: "school",
  },
  {
    id: "research-visa",
    title: "Research Visa",
    description: "For academic research and fellowship programs.",
    icon: "science",
  },
  {
    id: "language-course",
    title: "Language Course",
    description: "Short-term visas for intensive language studies.",
    icon: "translate",
  },
  {
    id: "post-study-work",
    title: "Post-Study Work",
    description: "Guidance on post-graduation work opportunities.",
    icon: "work",
  },
];
