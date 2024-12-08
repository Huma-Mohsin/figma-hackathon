import Image from 'next/image';
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <header className="bg-[#F5F5F5] border-b font-[Helvetica Neue] flex justify-between items-center px-4 sm:px-8 md:px-10 py-2">
        {/* Logo Section */}
        <Image src={"/logo.png"} alt="Logo" width={200} height={200} className="w-[50px] sm:w-[80px] ml-4" />

        {/* Links Section */}
        <nav className="hidden sm:flex items-center space-x-3 text-black text-[14px] sm:text-[16px] font-medium">
          <li><Link href="#">Find a Store</Link></li>
          <span className="h-[14px] w-px bg-gray-400" />
          <li><Link href="#">Help</Link></li>
          <span className="h-[14px] w-px bg-gray-400" />
          <li><Link href="#">Join Us</Link></li>
          <span className="h-[14px] w-px bg-gray-400" />
          <li><Link href="#">Sign In</Link></li>
        </nav>
      </header>

      {/* Main Navbar */}
      <header className="bg-white border-b shadow-sm">
        <div className="flex justify-between items-center px-4 sm:px-8 py-2">
          {/* Logo */}
          <Image src={"/nikelogo.png"} width={200} height={200} alt="Logo" className="w-[60px] sm:w-[80px] ml-8" />

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 justify-center items-center font-medium">
            <a href="#" className="text-black hover:underline">New & Featured</a>
            <a href="#" className="text-black hover:underline">Men</a>
            <a href="#" className="text-black hover:underline">Women</a>
            <a href="#" className="text-black hover:underline">Kids</a>
            <a href="#" className="text-black hover:underline">SNKRS</a>
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-slate-100 rounded-full px-2 py-1">
              <CiSearch className="text-black" />
              <input type="text" placeholder="Search" className="bg-transparent outline-none text-sm pl-2 py-1" />
            </div>

            <FaRegHeart className="text-black text-lg" />
            <BsBag className="w-6 h-6" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
