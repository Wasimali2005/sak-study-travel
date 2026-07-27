export interface Country {
  id: string;
  name: string;
  tagline: string;
  image: string;
}

export const countries: Country[] = [
  {
    id: "germany",
    name: "Germany",
    tagline: "Tuition-free options",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQLd5efbvybogsWN4UfgKf5C1E2kJMWA9Q6SWqOO2209CQ3FReXPfsS8gKsvTj188kiZ9Q9SsRCA_nd-WpuB_JIQEdCC0Eg7viFGqnHuO_uqn23J3W5JlKCSjw4tO_iFC1ExHvMln_tt9bghvD8j5DNS_ZJXZT0CmekDgwbLxVK5KBwkeuxjXBg-1W3Q_0RJfGG6B-1D-wI5kbiaTARZOTgRJ4Hz6G5cr3qYGjS-0dKX4X_N40KXif",
  },
  {
    id: "australia",
    name: "Australia",
    tagline: "World-class research",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzMvlC9f8GDnrj40WX6vWF-b8JW4xNeAHysdpA4ktNfF7PSZF28mZ8dAhSIIOIxELd5A-IlLenpNzHAgfIGJ0I3ptfniq2gnlFYkzNAfttwM0KaxBB0nKax_JzFXVdXK_8A_BCHb2wvQmEWyDWCya451vDZFCqL-p-eQSbPz2OiVbyGvs9jZT1Tcaz9Zthdopvy8pkf2ctULmN7chhqgmk12ywxmqAbIyBDN_hBYgbEclw-lL34fxT",
  },
  {
    id: "newzealand",
    name: "New Zealand",
    tagline: "Safe environment",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVwC5hod5leBM-on8xIQUNgIk97Djve7oQxqBPq-HXKwuy8d05Rv5ZaSsNZNant9gfSUb3_BoLprt5zB9-Z5lWTUYOspJ9KVqJ1DeYUjPJDiUzj3HuHaB-VXklD-fwtGLW3X15CHkWAe8KqUeerJfvTzJe3l82yGKCAYMc0Jgyz_5gl4UloSjFd-n_",
  },
  {
    id: "ireland",
    name: "Ireland",
    tagline: "Tech hub of Europe",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCU8AIvkRimwCFdWnw6r7Mi-NbhnKkUt3eRikHZnksyr8B0bv0RM720JB-63uD8uYnSyHMRgw3pt1nKKNYBEY0NGSCEtF9h-IJRu30YrIFDMNUl4Oxa9mSx0aVU8buc8WbsJNn-4WhiLB6VxBVPIqal6UbnFY9Ky_AiVIQ1Ae1iApBM7tCM-6xpH95aMwGnHRRm_FxvYhkV6QBnNbmTHl77DIPoJ4e2Kgg5AVw-yG72KkOh1HxG7XbI",
  },
];
