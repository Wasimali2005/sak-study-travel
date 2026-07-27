export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What are the basic requirements to study abroad?",
    answer:
      "Requirements vary by country and program, but generally include academic transcripts, language proficiency test scores (IELTS/TOEFL), statement of purpose, and letters of recommendation.",
  },
  {
    id: "faq-2",
    question: "Do you help with scholarships?",
    answer:
      "Yes, we provide comprehensive guidance on available scholarships, grants, and financial aid options, and assist with the application process.",
  },
  {
    id: "faq-3",
    question: "How long does the visa process take?",
    answer:
      "Visa processing times depend on the destination country and time of year. On average, it takes 3 to 8 weeks. We recommend starting the process as early as possible.",
  },
];

export default faqItems;
