import { COURSES } from "../data/courses";
import { Course } from "@/types";
export function getAllCourses (){
    return COURSES;
}

// export const getAllCoursesByCategory =(data:Course[],category:string)=>{
//    return data.filter(item=>{
//      const catArray = Array.isArray(item.category) ? item.category : [item.category]
//      return catArray.includes(category)
//    })
// }
export const getAllCoursesByCategory =(data:Course[],category:string)=>{
 return data.filter(item=>item.category.includes(category))
}