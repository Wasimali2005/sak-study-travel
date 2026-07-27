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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCS1PJJgqi_lZPWaIJnjqNhSC5_5fBPkHQY1wXJI8FEYnrppO00ATFNvbSONjrPiR_jefTqmHEKmH18jzmr-dCpZHgISsHj3i2aCehxa1p9ail7tks4Ion4yVTat5f3HPWehPVAplOBzXr7JEIfdTZJOgRe-HmG8SOHZfKhiykfvZmy2Kc8KZL7WbJZgu5GL6CsJT9cqSvgLbTNWqN0iSx0DcgHn9tu95FtLBLGCM7oRIWBk1BYAVy0",
    universitiesCount: "50+",
    popular: false,
  },
  {
    id: "usa",
    country: "USA",
    title: "Study in USA",
    description:
      "Access cutting-edge research facilities and a vast array of programs in the United States.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOmhYrqO0mMsp0ARIdiFmlIsIIkqSdpHfdNTUz5QapFEH2ZNDYjEhfvKiKSsKWesIhGvkl8XJIgIGQ88YAYCCOoVnnfJ_WMvw6kYXJw3OItXLD5ebBD5NHeA-J165RuZ5YX_e9XzK7rCZ4fS3nsn3NGdvPa3itEW4oImUnItPYPFhuIudeOnpy-5X-A-8uaNfBAFVMQ3yfUTE0JJTBYz57LP_-fJTgNAjDjgHtZpKLHVDd0WIzQhnr",
    universitiesCount: "100+",
    popular: true,
  },
  {
    id: "canada",
    country: "Canada",
    title: "Study in Canada",
    description:
      "Benefit from affordable tuition, high quality of life, and excellent post-study work opportunities.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCplsPn7IvM8kH7rjoQQ0bXUKFmV1JL8IFp_Gju1Fr91g9MW9SL01GUEPVE5j9ikWi55IRFKZw3YBXmAjir7Cel5oOY3nvVs0Y3pxdpPNJ_JvKhZjdSPPj8by-9OQP6ZQlQs6FeoY0PNxUe1ArTJH4IXTqnQyzFhjTRJgn466HVp4pMQQXxDEy6xVmt6b7CbuW875G46qrVqskTxsPrGo6olyiGvzMc7bjp9xIxfqz1gRxeP5P0W8KK",
    universitiesCount: "40+",
    popular: false,
  },
];

export default destinations;
