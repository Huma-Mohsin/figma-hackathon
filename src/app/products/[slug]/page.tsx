"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { addToCart } from "../../../../cart-actions/actions"; // Assuming addToCart is exported here
import Swal from "sweetalert2";

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  // State to store product data and loading state
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state

  // Fetch product data inside useEffect
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await client.fetch(
          groq`*[_type == "product" && slug.current == $slug][0]{
            _id,
            productName,
            _type,
            category,
            price,
            inventory,
            colors,
            status,
            image,
            description
          }`,
          { slug }
        );
        setProduct(fetchedProduct || null);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null); // Handle error by setting product to null
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchProduct(); // Call the fetch function
  }, [slug]); // Dependency array to trigger fetch when slug changes

  // Handle the case where the product is not found
  if (loading) {
    return <div>Loading...</div>; // Show loading state until data is fetched
  }

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <p>The product you are looking for does not exist or has been removed.</p>
      </div>
    );
  }

  // Handle Add to Cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });

    addToCart(product); // Add the product to cart
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side: Product Image */}
        <div className="w-full md:w-1/2">
          {product.image ? (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              height={500}
              width={500}
              className="max-w-full h-auto object-contain rounded-lg shadow-lg"
            />
          ) : (
            <p>No image available for this product</p>
          )}
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full md:w-1/2 pl-8 space-y-6">
          {/* Product Name */}
          <h1 className="text-4xl font-semibold text-gray-900">{product.productName}</h1>

          {/* Category */}
          <p className="text-xl text-gray-800 font-semibold">
            Category: <span className=" text-blue-500">{product.category}</span>
          </p>

          {/* Product Description */}
          <p className="text-xl text-gray-600">{product.description}</p>

          {/* Available Colors */}
          {product.colors?.length > 0 ? (
            <div>
              <p className="text-lg font-semibold">Available Colors:</p>
              <ul className="list-disc pl-5">
                {product.colors.map((color, index) => (
                  <li key={index} className="text-purple-700 text-lg">{color}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-600">No colors available for this product</p>
          )}

          {/* Inventory */}
          <p className="text-xl font-bold text-orange-600">
            Inventory: <span className="font-semibold">{product.inventory}</span>
          </p>

          {/* Price */}
          <p className="text-3xl text-green-600 font-semibold">Price: ${product.price}</p>

          {/* Add to Cart Button */}
          <button
            className="bg-gradient-to-r from-gray-500 to-gray-700 shadow-md text-white py-2 px-6 rounded-xl hover:bg-gray-700 transition duration-200 mt-2 ml-20"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
