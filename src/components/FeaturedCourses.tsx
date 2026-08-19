"use client";
import React, { useMemo } from "react";
import { getAllCourses,getAllCoursesByCategory } from "../lib/courses";
import CardofCourse from "./CardofCourse";

const FeaturedCourses = () => {
  const [category,setCategory]=React.useState<string>('Featured')
  const filteredCourses = useMemo(()=>{
    return getAllCoursesByCategory(getAllCourses(),category)},[category])
    
  const CATEGORIES = ["Featured","Pregnancy","Baby Care","Postpartum"]

   return (
     <section className="py-20 px-4 bg-white">
       <div className="max-w-6xl mx-auto">
         <h1 className="text-4xl font-bold text-[#412B1A] text-center mb-12">
           Our Courses
         </h1>
 
         <div className="flex justify-center gap-4 mb-12">
         {CATEGORIES.map((cat)=>(
           <button key={cat}
            onClick={()=>setCategory(cat)}
            className={`px-3 py-3 rounded-full ${category==cat ? "bg-[#6e3412] text-white border-[#6e3412]" : "border-[#c26129] bg-amber-100 text-black"} `}>
             {cat}
           </button>
         ))}
         </div>
 
         <div className="grid md:grid-cols-3 gap-8">
          {
         
           filteredCourses.map(item=>(
           <CardofCourse key={item.id} item={item}/>
           ) )
         
          }
                
         </div>
       </div>
     </section>
   );
 
};

export default FeaturedCourses;


