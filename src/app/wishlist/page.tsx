"use client";
import { useState, useEffect } from "react";
import { Product } from "../../../types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [wishlistCount, setWishlistCount] = useState(0); // Counter state for wishlist

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      const parsedWishlist = JSON.parse(storedWishlist);
      setWishlist(parsedWishlist);
      setWishlistCount(parsedWishlist.length); // Update counter
    }
  }, []);

  const handleRemoveFromWishlist = (productId: number) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== productId);
    setWishlist(updatedWishlist);
    setWishlistCount(updatedWishlist.length); // Update counter after removal
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">My Wishlist</h1>
      <p className="text-lg text-center mb-4">Total items in wishlist: {wishlistCount}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlist.length === 0 ? (
          <p className="text-center text-gray-600">Your wishlist is empty.</p>
        ) : (
          wishlist.map((product) => (
            <div key={product._id} className="bg-white shadow-lg p-4">
              {/* Check if image exists, and provide fallback if not */}
              {product.image ? (
                <Image
                  src={urlFor(product.image).url() || "/default-image.jpg"} // Fallback image in case urlFor returns undefined
                  alt={product.productName}
                  width={500}
                  height={500}
                  className="w-full h-64 object-contain mb-6"
                />
              ) : (
                <div className="w-full h-64 bg-gray-300 mb-6 flex justify-center items-center">
                  <span>No Image Available</span>
                </div>
              )}

              <h2 className="text-2xl font-bold">{product.productName}</h2>
              <p className="text-lg text-blue-500 font-bold mt-2">${product.price}</p>

              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg mt-2"
                onClick={() => handleRemoveFromWishlist(product._id)}
              >
                Remove ❌
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
