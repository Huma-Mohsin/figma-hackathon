import React from 'react';
import { nikeProducts } from '../components/card/data'; 


import Image from 'next/image';

const ProductList = () => {
  return (
    <div className="p-8">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Nike Products Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {nikeProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {/* Card Image Section */}
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <Image
              width={500}
              height={500}
                src={product.imagesUrls} // Keep your image paths the same as the original
                alt={product.title}
                className="object-contain w-full h-full transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Card Content Section */}
            <div className="flex flex-col p-6 flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-lg text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-gray-900">{product.price}</p>
            </div>

            {/* Buttons Section */}
            <div className="flex justify-center gap-4 p-4">
              {/* Add to Cart Button */}
              <button className="px-4 py-2 text-white border border-blue-600 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300">
                Add to Cart
              </button>

              {/* Add to Wishlist Button */}
              <button className="px-4 py-2 text-white border border-green-600 rounded-lg bg-green-500 hover:bg-red-600 transition-all duration-300">
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
