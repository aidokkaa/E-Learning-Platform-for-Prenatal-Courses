import { Course } from "@/types";

export const courses: Course[] = [
  {
    id: 1,
    title: "Mom & Baby: Theory & Seminars",
    slug: "mom-and-baby-theory",
    description: "A comprehensive guide to newborn care, covering essential parenting theory and daily routine management.",
    duration: "4 modules",
    price: "$149.0",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=400",
    category: ["Baby Care"],
    modules: [
      { title: "Introduction to Newborn Care", duration: "10 min" },
      { title: "Daily Routine Management", duration: "15 min" },
      { title: "Feeding Basics", duration: "20 min" },
      { title: "Safe Sleep Practices", duration: "12 min" }
    ]
  },
  {
    id: 2,
    title: "Breathing Techniques: Birth Without Tears",
    slug: "breathing-techniques",
    description: "Master proven breathing methods to manage labor pain, stay calm, and support your baby during delivery.",
    duration: "3 modules",
    price: "$59.0",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400",
    category: ["Pregnancy"],
    modules: [
      { title: "Understanding Labor Pain", duration: "8 min" },
      { title: "Deep Breathing Methods", duration: "15 min" },
      { title: "Practice Sessions", duration: "20 min" }
    ]
  },
  {
    id: 3,
    title: "Gentle & Natural Childbirth",
    slug: "gentle-natural-childbirth",
    description: "Step-by-step preparation for a natural birth experience with focus on comfort, safety, and confidence.",
    duration: "5 modules",
    price: "$129.0",
    image: "https://images.unsplash.com/photo-1516627145694-382956f66f30?auto=format&fit=crop&q=80&w=400",
    category: ["Pregnancy"],
    modules: [
      { title: "Preparing the Mind", duration: "10 min" },
      { title: "Creating a Birth Plan", duration: "12 min" },
      { title: "Comfort Measures", duration: "18 min" },
      { title: "Labor Positions", duration: "15 min" },
      { title: "Recovery Basics", duration: "10 min" }
    ]
  },
  {
    id: 4,
    title: "9-Month Pregnancy Plan",
    slug: "nine-month-pregnancy-plan",
    description: "Your structured roadmap for a healthy pregnancy, from first trimester well-being to final labor preparation.",
    duration: "8 modules",
    price: "$199.0",
    image: "https://images.unsplash.com/photo-1526045436584-b6ca8750aa6a?auto=format&fit=crop&q=80&w=400",
    category: ["Pregnancy", "Featured"],
    modules: [
      { title: "First Trimester Health", duration: "15 min" },
      { title: "Nutrition for Two", duration: "12 min" },
      { title: "Second Trimester Changes", duration: "10 min" },
      { title: "Physical Activity", duration: "14 min" },
      { title: "Third Trimester Prep", duration: "10 min" },
      { title: "Emotional Well-being", duration: "12 min" },
      { title: "Labor Preparation", duration: "20 min" },
      { title: "Post-Birth Checklist", duration: "10 min" }
    ]
  },
  {
    id: 5,
    title: "Postpartum Recovery & Wellness",
    slug: "postpartum-recovery-wellness",
    description: "Essential physical and emotional care practices to help you heal and restore your energy after childbirth.",
    duration: "6 modules",
    price: "$89.0",
    image: "https://images.unsplash.com/photo-1596464406182-3d7729f27d2c?auto=format&fit=crop&q=80&w=400",
    category: ["Postpartum", "Featured"],
    modules: [
      { title: "Physical Healing", duration: "15 min" },
      { title: "Emotional Balance", duration: "12 min" },
      { title: "Postpartum Nutrition", duration: "10 min" },
      { title: "Gentle Exercise", duration: "15 min" },
      { title: "Sleep Restoration", duration: "10 min" },
      { title: "Support Systems", duration: "8 min" }
    ]
  },
  {
    id: 6,
    title: "Early Baby Development",
    slug: "early-baby-development",
    description: "Understand your baby's milestones in the first year and learn how to stimulate their healthy growth.",
    duration: "5 modules",
    price: "$79.0",
    image: "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?auto=format&fit=crop&q=80&w=400",
    category: ["Baby Care"],
    modules: [
      { title: "Sensory Development", duration: "10 min" },
      { title: "Motor Skills (0-6m)", duration: "15 min" },
      { title: "Social Interaction", duration: "12 min" },
      { title: "Motor Skills (6-12m)", duration: "15 min" },
      { title: "Milestone Tracking", duration: "10 min" }
    ]
  },
  {
    id: 7,
    title: "Baby Care Secrets",
    slug: "baby-care-secrets",
    description: "Practical tips on sleep, soothing techniques, and handling common newborn challenges with ease.",
    duration: "4 modules",
    price: "$49.0",
    image: "https://images.unsplash.com/photo-1515485293833-3fb368bc00a6?auto=format&fit=crop&q=80&w=400",
    category: ["Baby Care", "Featured"],
    modules: [
      { title: "Soothing a Crying Baby", duration: "10 min" },
      { title: "Sleep Routines", duration: "15 min" },
      { title: "Common Challenges", duration: "12 min" },
      { title: "Handling Stress", duration: "10 min" }
    ]
  },
];