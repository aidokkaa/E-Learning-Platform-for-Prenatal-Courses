import { Course } from "@/types";
export const babyCareSecretsCourse: Course = {
  id: "baby-care-secrets",
  title: "Baby Care Secrets",
  slug: "baby-care-secrets",
  description: "Practical tips on sleep, soothing techniques, and handling common newborn challenges with ease.",
  duration: "4 modules",
  price: "$45",
  image: "https://images.pexels.com/photos/6849309/pexels-photo-6849309.jpeg?auto=compress&cs=tinysrgb&w=1200",
  category: ["Baby Care", "Featured"],
  modules: [
    {
      id: "mod-1",
      title: "Soothing a Crying Baby",
      duration: "10 min",
      lessons: [
        {
          id: "less-1-1",
          title: "1.1 The 5 S's Technique & Colic Relief",
          duration: "10 min",

        }
      ]
    },
    {
      id: "mod-2",
      title: "Sleep Routines",
      duration: "15 min",
      lessons: [
        {
          id: "less-2-1",
          title: "2.1 Differentiating Day & Night & Wake Windows",
          duration: "15 min",

        }
      ]
    },
    {
      id: "mod-3",
      title: "Common Challenges",
      duration: "12 min",
      lessons: [
        {
          id: "less-3-1",
          title: "3.1 Diaper Rash, Gas & Spit-Up Solutions",
          duration: "12 min",

        }
      ]
    },
    {
      id: "mod-4",
      title: "Handling Stress",
      duration: "10 min",
      lessons: [
        {
          id: "less-4-1",
          title: "4.1 Parental Burnout Prevention & Mindful Breaks",
          duration: "10 min",

        }
      ]
    }
  ]
}