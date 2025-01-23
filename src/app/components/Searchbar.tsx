"use client"
import React, { useState } from 'react';

const nikeProducts = [
  {
    id: 1,
    tags: ["Just In"],
    title: "Nike Air Force 1 Mid '07",
    description: "Men's Shoes",
    color: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imagesUrls: "/pro1.png",
  },
  {
    id: 2,
    tags: ["Just In"],
    title: "Nike Court Vision Low Next Nature",
    description: "Men's Shoes",
    color: "1 Colour",
    price: "MRP : ₹ 4 995.00",
    imagesUrls: "/pro2.png",
  },
  {
    id: 3,
    tags: ["Just In"],
    title: "Nike Air Force 1 PLT.AF.ORM",
    description: "Women's Shoes",
    color: "1 Colour",
    price: "MRP : ₹ 8 695.00",
    imagesUrls: "/pro3.png",
  },
  {
    id: 4,
    tags: ["Just In"],
    title: "Nike Air Force 1 React",
    description: "Men's Shoes",
    color: "1 Colour",
    price: "MRP : ₹ 13 295.00",
    imagesUrls: "/pro4.png",
  },
  {
    id: 5,
    tags: ["Promo Exclusion"],
    title: "Air Jordan 1 Elevate Low",
    description: "Women's Shoes",
    color: "1 Colour",
    price: "MRP : ₹ 11 895.00",
    imagesUrls: "/pro5.png",
  },
  {
    id: 6,
    tags: ["Just In"],
    title: "Nike Standard Issue",
    description: "Women's Basketball Jersey",
    color: "1 Colour",
    price: "MRP : ₹ 2 895.00",
    imagesUrls: "/pro6.png",
  },
];

type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  tags: string[];
  imagesUrls: string;
};

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === '') {
      setFilteredProducts([]);
    } else {
      const filtered = nikeProducts.filter(product =>
        product.title.toLowerCase().includes(term) || product.description.toLowerCase().includes(term)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 text-center relative">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-md p-4 rounded-lg border-2 border-gray-300 shadow-lg focus:outline-none focus:border-blue-500"
        />

        {/* Dropdown for search results */}
        {searchTerm && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-10">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div
                  key={product.id}
                  className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={product.imagesUrls}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">{product.title}</h3>
                    <p className="text-xs text-gray-500">{product.description}</p>
                    <p className="mt-2 font-semibold text-gray-800">{product.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="p-4 text-center text-gray-500">No products found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;