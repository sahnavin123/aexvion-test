// import { mdiCubeOutline, mdiTrendingUp } from "@mdi/js";
// export const BASE_PATH = import.meta.env.BASE_URL;

// export const profiles = [
//   {
//     name: "Elen",
//     role: "Product",
//     img: `${BASE_PATH}/profile/img-1.svg`,
//     roleIcon: mdiCubeOutline,
//     description:
//       "Elen is a strategic Product Manager who thrives at the intersection of vision and execution. She brings clarity to complex product goals, aligning cross-functional teams toward a shared roadmap. With a strong focus on outcomes, Elen ensures every feature delivers meaningful impact.",
//     chartData: [
//       { name: "Lorem", value: 30, color: "#5E1AE5" }, // purple
//       { name: "Ipsum", value: 40, color: "#EA580C" }, // orange
//       { name: "Dolor", value: 10, color: "#86EFAC" }, // light green
//       { name: "Sit amet", value: 20, color: "#D1D5DB" }, // gray
//     ],
//   },
//   {
//     name: "Kelsier",
//     role: "Marketing",
//     img: `${BASE_PATH}/profile/img-2.svg`,
//     roleIcon: mdiTrendingUp,
//     description:
//       "Elen is a strategic Product Manager who thrives at the intersection of vision and execution. She brings clarity to complex product goals, aligning cross-functional teams toward a shared roadmap. With a strong focus on outcomes, Elen ensures every feature delivers meaningful impact.",
//     chartData: [
//       { name: "Lorem", value: 30, color: "#5E1AE5" }, // purple
//       { name: "Ipsum", value: 40, color: "#EA580C" }, // orange
//       { name: "Dolor", value: 10, color: "#86EFAC" }, // light green
//       { name: "Sit amet", value: 20, color: "#D1D5DB" }, // gray
//     ],
//   },
//   // Add more as needed
// ];

import {
  mdiCubeOutline,
  mdiTrendingUp,
  mdiAccountTie,
  mdiFinance,
  mdiLightbulbOutline,
} from "@mdi/js";
export const BASE_PATH = import.meta.env.BASE_URL;

export const profiles = [
  {
    name: "Elen",
    role: "Product",
    img: `${BASE_PATH}/profile/img-1.svg`,
    roleIcon: mdiCubeOutline,
    description:
      "Elen is a strategic Product Manager who thrives at the intersection of vision and execution. She brings clarity to complex product goals, aligning cross-functional teams toward a shared roadmap. With a strong focus on outcomes, Elen ensures every feature delivers meaningful impact.",
    skills: [
      {
        title: "Vision-Oriented Thinking",
        description:
          "Aligns product development with long-term strategic goals and market needs.",
      },
      {
        title: "Cross-Functional Collaboration",
        description:
          "Bridges communication between design, engineering, and business teams.",
      },
      {
        title: "Execution Excellence",
        description:
          "Translates product vision into actionable tasks and ensures timely delivery.",
      },
      {
        title: "Customer-Centric Mindset",
        description:
          "Advocates for user needs through data-driven prioritization and feedback loops.",
      },
      {
        title: "Clarity Under Pressure",
        description:
          "Brings structure and focus to fast-moving projects, even in ambiguous environments.",
      },
    ],
    chartData: [
      { name: "Lorem", value: 30, color: "#5E1AE5" },
      { name: "Ipsum", value: 40, color: "#EA580C" },
      { name: "Dolor", value: 10, color: "#86EFAC" },
      { name: "Sit amet", value: 20, color: "#D1D5DB" },
    ],
  },
  {
    name: "Kelsier",
    role: "Marketing",
    img: `${BASE_PATH}/profile/img-2.svg`,
    roleIcon: mdiTrendingUp,
    description:
      "Kelsier is a bold Marketing Director who leverages data to tell compelling brand stories. He drives user engagement through integrated campaigns that connect emotionally with audiences while achieving high ROI.",
    skills: [
      {
        title: "Brand Storytelling",
        description:
          "Crafts narratives that emotionally connect with audiences and drive loyalty.",
      },
      {
        title: "Market Analysis",
        description:
          "Uses data to uncover trends, segment users, and shape marketing strategies.",
      },
      {
        title: "Omni-Channel Execution",
        description:
          "Delivers consistent brand messaging across digital and traditional channels.",
      },
      {
        title: "Growth Hacking",
        description:
          "Leverages creative tactics and rapid experimentation to maximize user acquisition.",
      },
      {
        title: "ROI-Driven Campaigns",
        description:
          "Focuses on measurable outcomes to ensure every initiative delivers business value.",
      },
    ],
    chartData: [
      { name: "Lorem", value: 45, color: "#5E1AE5" },
      { name: "Ipsum", value: 25, color: "#EA580C" },
      { name: "Dolor", value: 15, color: "#86EFAC" },
      { name: "Sit amet", value: 15, color: "#D1D5DB" },
    ],
  },
  {
    name: "Marin",
    role: "Design",
    img: `${BASE_PATH}/profile/img-3.svg`,
    roleIcon: mdiLightbulbOutline,
    description:
      "Marin is a visionary Design Lead passionate about intuitive user experiences. She combines aesthetics with functionality to create interfaces that delight users and drive business results.",
    skills: [
      {
        title: "User-Centered Design",
        description:
          "Crafts experiences that are intuitive, accessible, and delightful to users.",
      },
      {
        title: "Visual Storytelling",
        description:
          "Communicates brand identity and product purpose through compelling visuals.",
      },
      {
        title: "Design Systems",
        description:
          "Maintains consistency and scalability across products using modular components.",
      },
      {
        title: "Collaborative Prototyping",
        description:
          "Works closely with engineering and product to bring ideas to life quickly.",
      },
      {
        title: "Aesthetic Intelligence",
        description:
          "Combines form and function to create designs that are both beautiful and effective.",
      },
    ],
    chartData: [
      { name: "Lorem", value: 20, color: "#5E1AE5" },
      { name: "Ipsum", value: 50, color: "#EA580C" },
      { name: "Dolor", value: 20, color: "#86EFAC" },
      { name: "Sit amet", value: 10, color: "#D1D5DB" },
    ],
  },
  {
    name: "Tomas",
    role: "Finance",
    img: `${BASE_PATH}/profile/img-4.svg`,
    roleIcon: mdiFinance,
    description:
      "Tomas leads Finance with precision and foresight. He turns raw numbers into strategic insight, ensuring sustainable growth through responsible planning and forecasting.",
    skills: [
      {
        title: "Financial Planning",
        description:
          "Develops robust forecasts to guide business decisions and minimize risk.",
      },
      {
        title: "Data-Driven Budgeting",
        description:
          "Optimizes resource allocation by analyzing past trends and future needs.",
      },
      {
        title: "Strategic Forecasting",
        description:
          "Anticipates financial trends and advises on long-term investment strategies.",
      },
      {
        title: "Cost Control",
        description:
          "Implements processes to reduce overhead while maintaining performance.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Ensures accurate reporting and adherence to financial standards.",
      },
    ],
    chartData: [
      { name: "Lorem", value: 35, color: "#5E1AE5" },
      { name: "Ipsum", value: 30, color: "#EA580C" },
      { name: "Dolor", value: 25, color: "#86EFAC" },
      { name: "Sit amet", value: 10, color: "#D1D5DB" },
    ],
  },
  {
    name: "Lina",
    role: "Operations",
    img: `${BASE_PATH}/profile/img-4.svg`,
    roleIcon: mdiAccountTie,
    description:
      "Lina orchestrates Operations like a well-tuned machine. With a sharp eye for optimization, she bridges teams, processes, and systems to maximize efficiency at scale.",
    skills: [
      {
        title: "Operational Foresight",
        description:
          "Anticipates organizational needs and implements scalable solutions for long-term efficiency.",
      },
      {
        title: "Process Optimization",
        description:
          "Identifies bottlenecks and drives continuous improvements across workflows.",
      },
      {
        title: "Resource Management",
        description:
          "Balances capacity and capabilities to meet business demands without overextension.",
      },
      {
        title: "Systems Thinking",
        description:
          "Understands team and tool interdependencies to make holistic decisions.",
      },
      {
        title: "Execution Discipline",
        description:
          "Aligns planning with execution through tight coordination and feedback loops.",
      },
    ],
    chartData: [
      { name: "Lorem", value: 25, color: "#5E1AE5" },
      { name: "Ipsum", value: 35, color: "#EA580C" },
      { name: "Dolor", value: 30, color: "#86EFAC" },
      { name: "Sit amet", value: 10, color: "#D1D5DB" },
    ],
  },
];
