import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// GROQ query to fetch all products
const allProductsQuery = groq`
  *[_type == "product"] {
    _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    "imageUrl": image.asset->url,
    description,
    "slug": slug.current
  }
`;

export async function GET() {
  try {
    // Fetch products from Sanity
    const products = await client.fetch(allProductsQuery);

    // Return products as JSON
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch products" }, { status: 500 });
  }
}
