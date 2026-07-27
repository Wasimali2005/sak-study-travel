export interface SectionStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const stats: SectionStat[] = [
  { id: "stat-1", value: 15000, suffix: "+", label: "Students Placed" },
  { id: "stat-2", value: 500, suffix: "+", label: "Partner Universities" },
  { id: "stat-3", value: 98, suffix: "%", label: "Visa Success Rate" },
  { id: "stat-4", value: 15, suffix: "+", label: "Countries Served" },
];
