import React from 'react';
import Image from 'next/image';

const Essentials = () => {
  return (
    <div className="relative bg-white py-16">
      {/* Header Section */}
      <div className="text-center px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-[52px] sm:text-[40px] md:text-[48px] font-bold leading-[60px] underline font-helvetica text-gray-900">
          Flight Essentials
        </h1>
        <p className="mt-4 text-lg sm:text-base text-gray-700">
          Built to last all week—wears with style only Jordan Brand can deliver.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
          Shop
        </button>
      </div>

      {/* Grid Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Image Card 1 */}
        <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-md">
          <Image
            src="/e1.png"
            alt="Men's Product"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
          <button className="absolute bottom-4 left-4 px-4 py-2 bg-gray-400 text-black font-medium text-sm rounded-full hover:bg-gray-800 hover:text-white transition">
            Men's
          </button>
        </div>

        {/* Image Card 2 */}
        <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-md">
          <Image
            src="/e2.png"
            alt="Women's Product"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
          <button className="absolute bottom-4 left-4 px-4 py-2 bg-gray-400 text-black font-medium text-sm rounded-full hover:bg-gray-800 hover:text-white transition">
            Women's
          </button>
        </div>

        {/* Image Card 3 */}
        <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-md">
          <Image
            src="/e3.png"
            alt="Kid's Product"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
          <button className="absolute bottom-4 left-4 px-4 py-2 bg-gray-400 text-black font-medium text-sm rounded-full hover:bg-gray-800 hover:text-white transition">
            Kid's
          </button>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
