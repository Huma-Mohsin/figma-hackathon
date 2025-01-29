import React from 'react';
import { nikeProducts } from './card/data';
import Image from 'next/image';

const ProductList = () => {
  return (
    <div className="p-8">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Nike Products Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                src={product.imagesUrls}
                alt={product.title}
                className="object-contain w-full h-full transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Card Content Section */}
            <div className="flex flex-col p-6 flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-lg text-orange-500  font-bold mb-2">Tags: {product.tags}</p>
              <p className="text-lg text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg text-green-600 font-bold mb-4">Color: {product.color}</p>
              <p className="text-xl font-bold text-blue-600">Price: {product.price}</p>
            </div>

            {/* Buttons Section */}
            <div className="flex justify-around p-4">
              {/* Add to Cart Button */}
              <button className="bg-gray-500 text-white py-2 px-4 rounded-xl hover:bg-gray-700 transition duration-200">
                Add to Cart
              </button>

              {/* Add to Wishlist Button */}
              <button className="bg-gray-500 text-white border border-gray-300 py-2 px-4 rounded-xl hover:bg-gray-700 transition-all duration-300">
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
