import { Course } from "@/types";
export const breathingTechniquesCourse:Course={
  id: "breathing-techniques",
  title: "Breathing Techniques: Birth Without Tears",
  slug: "breathing-techniques",
  description: "Master proven breathing methods to manage labor pain, stay calm, and support your baby during delivery.",
  duration: "3 modules",
  price: "$50.0",
  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400",
  category: ["Pregnancy"],
  modules: [
    {
      id: "mod-1",
      title: "Understanding Labor Pain",
      duration: "8 min",
      lessons: [
        {
          id: "less-1-1",
          title: "1.1 Physiology of Labor & Pain Signals",
          duration: "8 min",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      ]
    },
    {
      id: "mod-2",
      title: "Deep Breathing Methods",
      duration: "15 min",
      lessons: [
        {
          id: "less-2-1",
          title: "2.1 Diaphragmatic Breathing for Contractions",
          duration: "7 min",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
          id: "less-2-2",
          title: "2.2 Rhythmic Inhalation Technique",
          duration: "8 min",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      ]
    },
    {
      id: "mod-3",
      title: "Practice Sessions",
      duration: "20 min",
      lessons: [
        {
          id: "less-3-1",
          title: "3.1 Guided Breathing Simulation",
          duration: "10 min",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
          id: "less-3-2",
          title: "3.2 Calming Visualization Exercises",
          duration: "10 min",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      ]
    }
  ]
}