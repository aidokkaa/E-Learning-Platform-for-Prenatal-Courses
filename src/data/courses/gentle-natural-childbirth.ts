import { Course } from "@/types";
export const naturalChildBirthCourse: Course = {
  id: "gentle-natural-childbirth",
  title: "Gentle & Natural Childbirth",
  slug: "gentle-natural-childbirth",
  description: "Step-by-step preparation for a natural birth experience with focus on comfort, safety, and confidence.",
  duration: "5 modules",
  price: "$70",
  image: "https://images.unsplash.com/photo-1770831208268-07daeaa6c6c4?auto=format&fit=crop&w=1200&q=80",
  category: ["Pregnancy"],
  modules: [
    {
      id: "mod-1",
      title: "Preparing the Mind",
      duration: "10 min",
      lessons: [
        {
          id: "less-1-1",
          title: "1.1 Overcoming Fear & Building Confidence",
          duration: "10 min",

        }
      ]
    },
    {
      id: "mod-2",
      title: "Creating a Birth Plan",
      duration: "12 min",
      lessons: [
        {
          id: "less-2-1",
          title: "2.1 Essential Components of a Birth Plan",
          duration: "12 min",

        }
      ]
    },
    {
      id: "mod-3",
      title: "Comfort Measures",
      duration: "18 min",
      lessons: [
        {
          id: "less-3-1",
          title: "3.1 Hydrotherapy & Massage Techniques",
          duration: "9 min",

        },
        {
          id: "less-3-2",
          title: "3.2 Partner Support & Touch Relief",
          duration: "9 min",

        }
      ]
    },
    {
      id: "mod-4",
      title: "Labor Positions",
      duration: "15 min",
      lessons: [
        {
          id: "less-4-1",
          title: "4.1 Active Labor & Gravity-Assisted Positions",
          duration: "15 min",

        }
      ]
    },
    {
      id: "mod-5",
      title: "Recovery Basics",
      duration: "10 min",
      lessons: [
        {
          id: "less-5-1",
          title: "5.1 The Golden Hour & Immediate Postpartum Care",
          duration: "10 min",

        }
      ]
    }
  ]
}