"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaRegHeart, FaBars } from 'react-icons/fa';
import { PiGiftLight } from "react-icons/pi";
import { BsBag } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import SearchBar from '../components/Searchbar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    setWishlistCount(storedWishlist ? JSON.parse(storedWishlist).length : 0);
  }, []);

  // Update wishlist count
  const updateWishlistCount = () => {
    const storedWishlist = localStorage.getItem("wishlist");
    setWishlistCount(storedWishlist ? JSON.parse(storedWishlist).length : 0);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="bg-[#F5F5F5] border-b flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-4">
        {/* Logo Section */}
        <Image src="/logo.png" alt="Logo" width={50} height={50} className="w-[20px] sm:w-[30px] lg:w-[40px] ml-4" />

        {/* Hamburger Icon */}
        <div className="sm:hidden flex items-center space-x-4">
          <FaBars
            className="text-black mt-4 text-lg cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          />
        </div>

        {/* Links Section */}
        <nav
          className={`flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 text-black text-sm sm:text-base md:text-lg font-medium ${isMenuOpen ? 'block' : 'hidden'} sm:block`}
          aria-label="Primary navigation"
        >
          <Link href="/findstore" className="block sm:inline">
            Find a Store
          </Link>
          <span className="hidden sm:inline-block h-[14px] w-[1px] bg-gray-400" />
          <Link href="/help" className="block sm:inline">
            Help
          </Link>
          <span className="hidden sm:inline-block h-[14px] w-[1px] bg-gray-400" />
          <Link href="/joinus" className="block sm:inline">
            Join Us
          </Link>
          <span className="hidden sm:inline-block h-[14px] w-[1px] bg-gray-400" />
          <Link href="/login" className="block sm:inline">
            Sign In
          </Link>
        </nav>
      </header>

      {/* Main Navbar Section */}
      <header className="bg-white border-b shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-12 py-4">
          {/* Logo */}
          <Image src="/nikelogo.png" width={50} height={50} alt="Logo" className="w-[30px] sm:w-[40px] md:w-[50px] ml-8" />

          {/* Navigation Links */}
          <nav
            className="flex flex-col sm:flex-row text-xl text-bold space-y-4 mt-6 sm:space-y-0 sm:space-x-8 justify-center items-center font-medium"
            aria-label="Secondary navigation"
          >
            <Link href="/" className="text-black hover:underline text-sm md:text-base">
              Home
            </Link>
            <Link href="/news" className="text-black hover:underline text-sm md:text-base">
              New & Featured
            </Link>
            <Link href="/men" className="text-black hover:underline text-sm md:text-base">
              Men
            </Link>
            <Link href="/women" className="text-black hover:underline text-sm md:text-base">
              Women
            </Link>
            <Link href="/kids" className="text-black hover:underline text-sm md:text-base">
              Kids
            </Link>
            <Link href="/products" className="text-black hover:underline text-sm md:text-base">
              SNKRS
            </Link>
            <Link href="/overallproducts" className="text-black hover:underline text-sm md:text-base">
              All Products
            </Link>
          </nav>

          {/* Search and Icons */}
          <div className="flex flex-col sm:flex-row items-center mt-4 space-x-4 ml-4">
            <SearchBar />

            <div className="flex space-x-4 sm:space-x-2 mt-10">
              <Link href="/gifts">
                <PiGiftLight className="text-black text-2xl cursor-pointer mb-10" aria-label="GiftVouchers" />
              </Link>

              <Link href="/wishlist">
                <button className="text-white text-xl relative">
                  <FaRegHeart className="text-black text-2xl" aria-label="Favorites" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs px-2 py-1 rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </button>
              </Link>

              <Link href="/cart">
                <BsBag className=" text-xl font-bold text-black" aria-label="Shopping cart" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
