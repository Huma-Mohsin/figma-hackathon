import { NextApiRequest, NextApiResponse } from "next";  // Import necessary types
import { client } from "@/sanity/lib/client"; // Assuming you have sanity client configured

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { q } = req.query;  // Get the search query (q) from the URL

  // If the query parameter is not provided, return an error
  if (!q || typeof q !== "string") {
    return res.status(400).json({ message: "Missing or invalid search query" });
  }

  try {
    // Create a GROQ query to search products by productName or description
    const query = `*[_type == "product" && (productName match $q || description match $q)]{
      _id, productName, description, slug
    }`;

    // Parameters to be used in the query
    const params = { q: `${q}*` };  // Add '*' to allow partial matching

    // Fetch data from Sanity
    const results = await client.fetch(query, params);

    // Return the results as JSON
    res.status(200).json(results);
  } catch (error) {
    console.error('Search error:', error);
    
    // Return an error message if the query fails
    res.status(500).json({ message: 'Error fetching search results' });
  }
}
