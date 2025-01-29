"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { AllProduct } from "@/sanity/lib/query";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/products";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products: Product[] = await client.fetch(AllProduct);
        setAllProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const results = allProducts.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(results);
  }, [searchTerm, allProducts]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredProducts.length > 0 && (
        <div className="absolute w-full bg-white shadow-lg rounded-lg mt-1 max-h-60 overflow-y-auto">
          {filteredProducts.map((product) => (
            <Link
              href={`/products/${product.slug.current}`}
              key={product._id}
              className="flex items-center p-2 hover:bg-gray-100 transition duration-200"
            >
              <Image
                src={urlFor(product.image).url()}
                alt={product.productName}
                width={40}
                height={40}
                className="w-10 h-10 rounded object-cover mr-3"
              />
              <span className="text-gray-700">{product.productName}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
