import { Course } from "@/types";
export const babyCareSecretsCourse:Course={
  id: "baby-care-secrets",
  title: "Baby Care Secrets",
  slug: "baby-care-secrets",
  description: "Practical tips on sleep, soothing techniques, and handling common newborn challenges with ease.",
  duration: "4 modules",
  price: "$49.0",
  image: "https://images.unsplash.com/photo-1515485293833-3fb368bc00a6?auto=format&fit=crop&q=80&w=400",
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
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
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
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
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
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
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
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      ]
    }
  ]
}