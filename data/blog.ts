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

const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "How to Write a Winning Statement of Purpose",
    excerpt:
      "A compelling SOP can make or break your university application. Learn the key elements to include...",
    category: "Study Tips",
    date: "Oct 12, 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdErIYk5lXhguEDp3iuIMkBjEbSt8qrag5d2U7QjveWYDYQ89vyd1m9Bb90vjkpEQuWCN4QWpls5Me6JfSwR3kinrl06BQ_6OD0pkPE-qTqim0rdBkqZUJBcKS2dol22KSCrKuX1ANLLYAJMlrBZPCYlIG5Yuuv8t57bQnmT19hB_4-7aCWcsVRLdsA2frcs2rAkHobCAWqX-CBtIybkdTLL03zFkNNM8gnqyzv5sB7ChfUIHR20w0",
    href: "#",
    featured: false,
  },
  {
    id: "blog-2",
    title: "Recent Changes in UK Student Visa Policies",
    excerpt:
      "Stay informed about the latest regulations and requirements for international students planning to study in the UK.",
    category: "Visa Updates",
    date: "Oct 05, 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgRPgeh8jP5eWtUih-uPKWbU_v5EwWxUios5OV_g7AtndR4ud3-kqEgyo-38hAqy-QC_zsiA1q8ISOWwTpHgfSEBFLeDKOBLVtaBKiCnwdBTkxfezDGUHQfp85fuve8gufyjfG1rbWfbodTrGu7VCE6N0KDp9eDZxI-HzUTXGuzOn9F6RnP2cxdbfIBVVibKcbj6xPd3bKDmIGH57Fs2tlgPh_CsWmhLx_sgEQySpBm24hy1t15RMq",
    href: "#",
    featured: true,
  },
  {
    id: "blog-3",
    title: "Top Fully Funded Scholarships for 2024",
    excerpt:
      "Explore a curated list of prestigious scholarships that cover full tuition and living expenses for international students.",
    category: "Scholarships",
    date: "Sep 28, 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6-f-8BpsRO5jaz0eMpHsDLQE9bOCoEfPg1KzjhKC2nwOFwTRf35T0SOtyVWNtFm-RXtuVXKDTQ4a0GM6N8hPO0RC4Dhz0hoBDPS06KsUBlSQnNO-ZLS11BoazFU2Y9R3Ae-usJSgLKVAGYaQYFSmPXJiGxeAVJdUZjAXILigZ3ypzDsVehLrgF7kPLOxRlEzVzFF3BTHQ0d4hiFCbLRyY8LhLoLd_u5jOq1jk233dL2zv8lGmAAhl",
    href: "#",
    featured: false,
  },
];

export default blogPosts;
