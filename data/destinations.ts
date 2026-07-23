export interface Destination {
  id: string;
  country: string;
  title: string;
  description: string;
  image: string;
  universitiesCount: string;
  popular?: boolean;
}

const destinations: Destination[] = [
  {
    id: "uk",
    country: "UK",
    title: "Study in UK",
    description:
      "Experience world-class education in the UK with globally recognized degrees and diverse cultural experiences.",
    image: "/images/dest-uk.jpg",
    universitiesCount: "50+",
    popular: false,
  },
  {
    id: "usa",
    country: "USA",
    title: "Study in USA",
    description:
      "Access cutting-edge research facilities and a vast array of programs in the United States.",
    image: "/images/dest-usa.jpg",
    universitiesCount: "100+",
    popular: true,
  },
  {
    id: "canada",
    country: "Canada",
    title: "Study in Canada",
    description:
      "Benefit from affordable tuition, high quality of life, and excellent post-study work opportunities.",
    image: "/images/dest-canada.jpg",
    universitiesCount: "40+",
    popular: false,
  },
];

export default destinations;
