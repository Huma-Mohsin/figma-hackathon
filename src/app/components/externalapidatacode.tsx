"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the type for each product item
interface Product {
  productName: string;
  image: string;
  category: string;
  price: number;
  inventory: number;
  status: string;
  colors: string[];
}

const FetchData = () => {
  // Use the specific Product type for the data state
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://template-03-api.vercel.app/api/products"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData.data);  // Assuming jsonData.data contains the array of products
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Fetched Products</h1>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto border rounded-lg shadow-lg p-4 hover:scale-105 hover:shadow-xl transition-all"
            >
              {/* Image Section */}
              <div className="flex justify-center mb-4">
                <Image
                  src={item.image || "/placeholder.png"}
                  alt={item.productName}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto"
                />
              </div>
              {/* Product Details */}
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center">
                <Link href={`/product/${item.productName}`}>
                  {item.productName}
                </Link>
              </h2>
              <p className="text-gray-600 text-center">Category: {item.category}</p>
              <p className="text-gray-800 font-medium text-center">
                Price: ₹{item.price}
              </p>
              <p className="text-gray-600 text-center">
                Inventory: {item.inventory}
              </p>
              <p className="text-green-600 text-center">{item.status}</p>
              <p className="text-gray-600 mb-4 text-center">
                Colors: {item.colors.join(", ")}
              </p>
              {/* Action Buttons */}
              <div className="flex justify-between mt-4 gap-4 flex-col sm:flex-row">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto mb-2 sm:mb-0">
                  Add to Cart
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full sm:w-auto">
                  Add to Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Loading products...</p>
      )}
    </div>
  );
};

export default FetchData;
