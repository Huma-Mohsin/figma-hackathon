"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { AllProduct } from "@/sanity/lib/query";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "../../../cart-actions/actions";
import Swal from "sweetalert2";

const DataFetchByAPI = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedData: Product[] = await client.fetch(AllProduct);
        setProducts(fetchedData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProduct();

    // Load wishlist from localStorage
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Handle add to cart functionality
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });

    addToCart(product);
  };

  // Handle add/remove to wishlist functionality
  const handleWishlist = (product: Product) => {
    const updatedWishlist = [...wishlist];
    const isProductInWishlist = updatedWishlist.some(
      (item) => item._id === product._id
    );

    if (isProductInWishlist) {
      // Remove from wishlist
      const filteredWishlist = updatedWishlist.filter(
        (item) => item._id !== product._id
      );
      setWishlist(filteredWishlist);
      localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));

      // SweetAlert for removing from wishlist
      Swal.fire({
        position: "top-right",
        icon: "info",
        title: `${product.productName} removed from wishlist`,
        showConfirmButton: false,
        timer: 1000,
        customClass: {
          popup: "swal-small", // Add custom class to popup
        },
      });
    } else {
      // Add to wishlist
      updatedWishlist.push(product);
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      // SweetAlert for adding to wishlist
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: `${product.productName} added to wishlist`,
        showConfirmButton: false,
        timer: 1000,
        customClass: {
          popup: "swal-small", // Add custom class to popup
        },
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">Nike Products</h1>
      <h1 className="text-xl font-bold text-center">By Fetch API</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg p-4">
            <Link href={`/products/${product.slug.current}`}>
              <Image
                src={urlFor(product.image).url()}
                alt={product.productName}
                width={500}
                height={500}
                className="w-full h-64 object-contain mb-6"
              />
              <h2 className="text-2xl font-bold">{product.productName}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-lg text-blue-500 font-bold mt-2">
                ${product.price}
              </p>
              <p className="text-lg text-green-600 font-bold">
                In Stock: {product.inventory}
              </p>

              {/* Buttons in a single row with margin */}
              <div className="flex space-x-4 mt-4">
                {/* Add to Cart Button */}
                <button
                  className="bg-gradient-to-r from-gray-500 to-gray-700 shadow-md text-white py-2 px-6 rounded-xl hover:bg-gray-700 transition duration-200"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart
                </button>

                {/* Wishlist Button */}
                <button
                  className="bg-gradient-to-r from-red-500 to-red-700 shadow-md text-white py-2 px-6 rounded-xl hover:bg-pink-700 transition duration-200"
                  onClick={() => handleWishlist(product)}
                >
                  {wishlist.some((item) => item._id === product._id)
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetchByAPI;