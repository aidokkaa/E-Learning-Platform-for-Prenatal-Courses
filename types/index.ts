export interface Course {
  id: number;
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
  title: string;
  duration: string;
}

export interface FAQdata {
    id:number,
    question:string,
    answer:string
}