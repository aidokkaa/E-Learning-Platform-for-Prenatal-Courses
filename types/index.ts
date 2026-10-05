export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  category: string[];
  modules:Module[]
}
export interface Module {
  id:string,
  title: string;
  duration: string;
  lessons: Lesson[];
}
export interface Lesson {
  id:string,
  title:string,
  duration:string,
  videoUrl: string;
}

export interface FAQdata {
  q: string;
  a: string;
}