import { Course } from "@/types"
export const momAndBabyCourse: Course = {
  id: "mom-and-baby-theory",
  title: "Mom & Baby: Theory & Seminars",
  slug: "mom-and-baby-theory",
  description: "A comprehensive guide to newborn care, covering essential parenting theory and daily routine management.",
  duration: "4 modules",
  price: "$65",
  image: "https://images.pexels.com/photos/7282634/pexels-photo-7282634.jpeg?auto=compress&cs=tinysrgb&w=1200",
  category: ["Baby Care"],
  modules: [
    {
      id: "mod-1",
      title: "Introduction to Newborn Care",
      duration: "10 min",
      lessons: [
        {
          id: "less-1-1",
          title: "1.1 Basic Principles of Care",
          duration: "10 min",

        },
        {
          id: "less-1-2",
          title: "1.2 Handling & Hygiene",
          duration: "12 min",

        }
      ]
    },
    {
      id: "mod-2",
      title: "Daily Routine Management",
      duration: "15 min",
      lessons: [
        {
          id: "less-2-1",
          title: "2.1 Sleep Schedules & Awake Windows",
          duration: "10 min",

        },
        {
          id: "less-2-2",
          title: "2.2 Daytime Activities",
          duration: "10 min",

        },
        {
          id: "less-2-3",
          title: "2.3 Evening Wind-Down Routines",
          duration: "10 min",

        }
      ]
    },
    {
      id: "mod-3",
      title: "Feeding Basics",
      duration: "20 min",
      lessons: [
        {
          id: "less-3-1",
          title: "3.1 Latching & Positioning",
          duration: "10 min",

        }
      ]
    },
    {
      id: "mod-4",
      title: "Safe Sleep Practices",
      duration: "12 min",
      lessons: [
        {
          id: "less-4-1",
          title: "4.1 Crib Safety & Swaddling",
          duration: "10 min",

        }
      ]
    }
  ]
}