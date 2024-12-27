import Image from 'next/image';
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-[#F5F5F5] border-b font-[Helvetica Neue] flex justify-between items-center px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-2">
        {/* Logo Section */}
        <Image src={"/logo.png"} alt="Logo" width={150} height={100} className="w-[40px] sm:w-[60px] lg:w-[80px] ml-4" />

        {/* Links Section */}
        <nav className="hidden sm:flex items-center space-x-4 text-black text-sm sm:text-base md:text-lg font-medium">
          <Link href="/findstore">Find a Store</Link>
          <span className="hidden sm:inline-block h-[14px] w-[1px] bg-gray-400" />
          <Link href="/help">Help</Link>
          <span className="hidden sm:inline-block h-[14px] w-[1px] bg-gray-400" />
          <Link href="/joinus">Join Us</Link>
          <span className="hidden sm:inline-block h-[14px] w-[1px] bg-gray-400" />
          <Link href="/login">Sign In</Link>
        </nav>
      </header>

      {/* Main Navbar Section */}
      <header className="bg-white border-b shadow-sm">
        <div className="flex justify-between items-center px-4 sm:px-8 lg:px-12 py-2">
          {/* Logo */}
          <Image src={"/nikelogo.png"} width={150} height={150} alt="Logo" className="w-[50px] sm:w-[70px] md:w-[80px] ml-8" />

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 justify-center items-center font-medium">
            <Link href="/overallproducts" className="text-black hover:underline text-sm md:text-base">New & Featured</Link>
            <Link href="/overallproducts" className="text-black hover:underline text-sm md:text-base">Men</Link>
            <Link href="/overallproducts" className="text-black hover:underline text-sm md:text-base">Women</Link>
            <Link href="/overallproducts" className="text-black hover:underline text-sm md:text-base">Kids</Link>
            <Link href="/overallproducts" className="text-black hover:underline text-sm md:text-base">SNKRS</Link>
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-2 ml-4">
            <div className="flex items-center bg-slate-100 rounded-full px-2 py-1">
              <CiSearch className="text-black text-lg" />
              <input type="text" placeholder="Search" className="bg-transparent outline-none text-sm sm:text-base pl-2 py-1" />
            </div>

            <FaRegHeart className="text-black text-lg" />
            <BsBag className="w-6 h-6 text-lg" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
