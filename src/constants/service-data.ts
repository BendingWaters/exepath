import { Briefcase, Target, TrendingUp, Workflow } from "lucide-react";

export const services = [
  {
    number: "01",
    label: "Accountability",
    title: "Accountability & Performance Systems",
    icon: Target,
    description:
      "We help individuals, professionals, founders, and teams stay consistent with goals, responsibilities, and execution through structured accountability systems.",
    offerings: [
      "Accountability sessions",
      "Goal tracking and review",
      "Performance monitoring",
      "Execution follow-ups",
    ],
    idealFor: ["Professionals", "Entrepreneurs", "Startup founders", "Teams"],
    outcomes: [
      "Improved Consistency",
      "Clear Accountability",
      "Higher Performance",
    ],
  },

  {
    number: "02",
    label: "Productivity",
    title: "Productivity & Execution Systems",
    icon: Workflow,
    description:
      "Structured workflows, productivity systems, and operational clarity that improve focus and execution quality.",
    offerings: [
      "Workflow structuring",
      "Priority management",
      "Execution systems",
      "Performance tracking",
    ],
    idealFor: [
      "Professionals",
      "Remote workers",
      "Freelancers",
      "Growing businesses",
    ],
    outcomes: ["Better Focus", "Improved Efficiency", "Faster Execution"],
  },

  {
    number: "03",
    label: "Strategy",
    title: "Business Structure & Growth Strategy",
    icon: TrendingUp,
    description:
      "Strategic guidance, operational systems, and sustainable growth frameworks for startups and SMEs.",
    offerings: [
      "Growth strategy",
      "Operational structuring",
      "Process systems",
      "Team coordination",
    ],
    idealFor: ["Startups", "SMEs", "Growing brands", "Business owners"],
    outcomes: ["Operational Clarity", "Scalable Systems", "Sustainable Growth"],
  },

  {
    number: "04",
    label: "Advisory",
    title: "Project Management & Strategic Advisory",
    icon: Briefcase,
    description:
      "Project execution support and strategic advisory services to improve coordination, delivery, and operational performance.",
    offerings: [
      "Project planning",
      "Execution tracking",
      "Strategic advisory",
      "Performance reviews",
    ],
    idealFor: [
      "Organizations",
      "Project teams",
      "Executives",
      "Growing operations",
    ],
    outcomes: [
      "Better Delivery",
      "Improved Coordination",
      "Strategic Direction",
    ],
  },
] as const;

export type Service = (typeof services)[number];
