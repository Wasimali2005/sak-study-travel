export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "test-prep",
    title: "Test Preparation",
    description: "IELTS, TOEFL, GRE, GMAT coaching.",
    icon: "menu_book",
  },
  {
    id: "education-loan",
    title: "Education Loan",
    description: "Assistance with securing financial aid.",
    icon: "account_balance",
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Health and travel insurance guidance.",
    icon: "health_and_safety",
  },
  {
    id: "accommodation",
    title: "Accommodation",
    description: "Help finding suitable student housing.",
    icon: "apartment",
  },
];
