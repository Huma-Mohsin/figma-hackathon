import React from "react";
import Image from "next/image"; // Import the Image component from Next.js

const StepIntoShoes = () => {
  return (
    // New Section (from Uploaded Image)
    <div className="relative bg-white py-16 px-4 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto text-center">
        {/* Image Section with extended left and right margins */}
        <div className="relative w-full overflow-hidden">
          <Image
            src="/featured.jpg" 
            alt="ManShoes"
            width={1600} // Wider width for a larger image
            height={800} // Increased height for better proportions
            className="w-full h-auto object-cover sm:w-[110%] md:w-[120%] lg:w-[130%] -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12"
          />
        </div>
        
        {/* Text Content */}
        <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-gray-900">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Cause everyone should know the feeling of running in that perfect pair!
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
          Find Your Shoe
        </button>
      </div>
    </div>
  );
};

export default StepIntoShoes;
