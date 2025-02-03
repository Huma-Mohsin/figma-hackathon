'use client';
import React, { useState } from 'react';
import { FiFilter, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ProductList from '../components/StaticDataproductlist';
import Link from 'next/link';

const Page = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="grid grid-cols-12 gap-4 px-4 md:px-10 py-20 relative">
      <div
        className={`col-span-12 md:col-span-3 lg:col-span-3 pr-4 md:pr-20 bg-white z-10 transform ${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static p-10 lg:p-0 w-full lg:w-60 fixed top-0 left-0 h-full overflow-y-auto transition-transform duration-300`}
      >
        <button
          className="block lg:hidden absolute top-4 right-4 text-lg"
          onClick={() => setIsSidebarVisible(false)}
        >
          ✕ Hide Filters
        </button>
        <h3 className="text-2xl">New (500)</h3>
        <ul className="mt-4 space-y-4">
          {['Shoes', 'Sports Bras', 'Tops & T-Shirts', 'Hoodies & Sweatshirts', 'Jackets', 'Trousers & Tights', 'Shorts', 'Tracksuits', 'Jumpsuits & Rompers', 'Skirts & Dresses', 'Socks', 'Accessories & Equipment'].map((category) => (
            <li key={category} className="leading-8">
              <Link href="#">{category}</Link>
            </li>
          ))}
        </ul>
        <div className="my-10 border-t-2 pt-4">
          <div className="flex justify-between pb-4">
            <p>Gender</p>
            <FiChevronUp />
          </div>
          {['Men', 'Women', 'Unisex'].map((gender) => (
            <div key={gender}>
              <input type="checkbox" id={gender} />
              <label className="pl-2 cursor-pointer" htmlFor={gender}>
                {gender}
              </label>
            </div>
          ))}
        </div>
        <div className="my-10 border-t-2 pt-4">
          <div className="flex justify-between pb-4">
            <p>Shop By Price</p>
            <FiChevronUp />
          </div>
          {['Under ₹ 2,500.00', '₹ 2,501.00 - ₹ 7,500.00'].map((priceRange) => (
            <div key={priceRange}>
              <input type="checkbox" id={priceRange} />
              <label className="pl-2 cursor-pointer" htmlFor={priceRange}>
                {priceRange}
              </label>
            </div>
          ))}
        </div>
      </div>

      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setIsSidebarVisible(false)}
        ></div>
      )}

      <div className="col-span-12 lg:col-span-9">
        <div className="flex justify-between lg:justify-end gap-10 mb-8">
          <button
            className="flex items-center lg:hidden"
            onClick={() => setIsSidebarVisible(true)}
          >
            Show Filters <FiFilter className="ml-2" />
          </button>
          <button className="hidden lg:flex">
            Hide Filters <FiFilter className="ml-2" />
          </button>
          <div className="flex items-center">
            Sort By <FiChevronDown className="ml-2" />
          </div>
        </div>
        <ProductList />
        <div>
          <h3 className="mt-12 font-bold">Related Categories</h3>
          <ul className="flex gap-x-4 gap-y-2 flex-wrap mt-4">
            {['Best Selling Products', 'Best Shoes', 'New Basketball Shoes', 'New Football Shoes', 'New Men\'s Shoes', 'New Running Shoes', 'Best Men\'s Shoes', 'New Jordan Shoes', 'Best Women\'s Shoes', 'Best Training & Gym'].map((category) => (
              <li key={category} className="border-[1px] rounded-full px-6 py-[0.5px]">
                <Link href="#">{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
