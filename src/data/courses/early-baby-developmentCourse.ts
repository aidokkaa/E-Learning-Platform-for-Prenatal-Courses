import { Course } from "@/types";
export const earlyBabyDevCourse:Course={
  id: "early-baby-development",
  title: "Early Baby Development",
  slug: "early-baby-development",
  description: "Understand your baby's milestones in the first year and learn how to stimulate their healthy growth.",
  duration: "5 modules",
  price: "$55.0",
  image: "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?auto=format&fit=crop&q=80&w=400",
  category: ["Baby Care"],
  modules: [
    {
      id: "mod-1",
      title: "Sensory Development",
      duration: "10 min",
      lessons: [
        {
          id: "less-1-1",
          title: "1.1 Visual & Auditory Stimulation Activities",
          duration: "10 min",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      ]
    },
    {
      id: "mod-2",
      title: "Motor Skills (0-6m)",
      duration: "15 min",
      lessons: [
        {
          id: "less-2-1",
          title: "2.1 Tummy Time & Early Head Control",
          duration: "15 min",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      ]
    },
    {
      id: "mod-3",
      title: "Social Interaction",
      duration: "12 min",
      lessons: [
        {
          id: "less-3-1",
          title: "3.1 Eye Contact, Smiling & Babbling Cues",
          duration: "12 min",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      ]
    },
    {
      id: "mod-4",
      title: "Motor Skills (6-12m)",
      duration: "15 min",
      lessons: [
        {
          id: "less-4-1",
          title: "4.1 Rolling, Sitting & Crawling Readiness",
          duration: "15 min",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      ]
    },
    {
      id: "mod-5",
      title: "Milestone Tracking",
      duration: "10 min",
      lessons: [
        {
          id: "less-5-1",
          title: "5.1 Red Flags & When to Consult a Pediatrician",
          duration: "10 min",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      ]
    }
  ]
}