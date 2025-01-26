import { groq } from "next-sanity";

 export const AllProduct=groq`*[_type=="product"]`
