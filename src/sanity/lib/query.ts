import { groq } from "next-sanity";

export const Allproducts=groq`*[_type=="product"]`;
export const fourproducts=groq`*[_type=="product"][0..3]`