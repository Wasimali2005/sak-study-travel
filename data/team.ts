export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Michael Chen",
    role: "Senior Admissions Counselor",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmVuIpG0wWzKz8hUkJYmdojI_Jc_FYygpTmRUXjGHiAebMQ3vxwGM9LuP3hFqCT99N3-PjnH6FDJWs_HvlmX4fvqKOkABwYQFVFx9-9qMyMzlBKpGcS_7yDX04TTP5aDQmg41MU-HGnJuqgOB_fNyYOnFVG-ahKGwgKxj93Odq4Rojw3tzpGrhWEeCLmGY009d0cnOT37mDzirWcyhnpF3WA4m-g4Il59iZYVYJ0hPmmxGqvwNpEdZ",
  },
  {
    id: "team-2",
    name: "Jessica Taylor",
    role: "Visa Specialist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpcE7WLs9KWVQ6ngMYr4ACp4EGkTqb6Wo4m1hs8OeNDPbCL1dnlwxkz8Oga9R_bKZ8SYauwrRRRwBsjwFCvAcBcZbOvYX9pWzuox48iJQF6dSdKCfqU-C5qAruronwvS90au0z7GiPSFr3zEuBAn13XpdlduIpou8hd8xnfEBZECZ_gVNqcdfDCWdwh3NezhzeUUlAiva3QfSK_nToPVDIcEZJz2K2T7E4HnjIm32kjJRQT3drj7kg",
  },
  {
    id: "team-3",
    name: "David Rodriguez",
    role: "Financial Aid Advisor",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAI5EBw8ASYZptntIYsoeDHBVEsdq6C-TT1Sy2Wx2pP8cS6HPLRwMyTJ5Q66KsJC48rWgoNF-osBxCNEdWgb7WcnY4B03LQ5bGPGAsWaupjhNUqjBMeWRCfG3fc2W6Vc1IClgGhcKOGHx5ZzfMgbno-BgbuerbO0BQ8cuXZUj-ClfiZl2_VEpZPKDaF2TPXgYmNtIq2rzpGSimWK4eJ4_3DdQhMPbAyHlhHvE1GT6EcxNQjxoLLUyX9",
  },
  {
    id: "team-4",
    name: "Anita Patel",
    role: "Pre-Departure Coordinator",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIVbEqxGkEA8cgDZzKWLM6Y5h2AlwMg6JMOCVLjNkY87r0_YrXImImitUVLAlBUO2Qf7RDFCbpKV_rH-9VW0f60SiX8K5rthhT3sCuChixKFrDRF8Gw_ASRXjAmcknoDrqOO2NpMS8L4IM_X-hMIySSKg-mf0qlcZVMp1TRWRGrLZGPv_6Zz9-BcwWB4y_IDcMG3l8-LKhpuHR1C6fYn74IRRVHWbvMuUuPcird3z0xXDlH0-zLSK",
  },
];

export default teamMembers;
