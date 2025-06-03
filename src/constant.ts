import { mdiCubeOutline, mdiTrendingUp } from "@mdi/js";
export const BASE_PATH = import.meta.env.BASE_URL;

export const profiles = [
  {
    name: "Elen",
    role: "Product",
    img: `${BASE_PATH}/profile/img-1.svg`,
    roleIcon: mdiCubeOutline,
    description:
      "Elen is a strategic Product Manager who thrives at the intersection of vision and execution. She brings clarity to complex product goals, aligning cross-functional teams toward a shared roadmap. With a strong focus on outcomes, Elen ensures every feature delivers meaningful impact.",
  },
  {
    name: "Kelsier",
    role: "Marketing",
    img: `${BASE_PATH}/profile/img-2.svg`,
    roleIcon: mdiTrendingUp,
    description:
      "Elen is a strategic Product Manager who thrives at the intersection of vision and execution. She brings clarity to complex product goals, aligning cross-functional teams toward a shared roadmap. With a strong focus on outcomes, Elen ensures every feature delivers meaningful impact.",
  },
  // Add more as needed
];
