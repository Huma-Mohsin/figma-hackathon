import React from 'react';

const NikeAirPlus = () => {
  return (
    <div className="w-full mt-[80px]">
      {/* Parent div with image */}
      <div className="w-full h-[700px] sm:h-[500px] md:h-[600px]">
        <img
          src="/nikeAirPulse.png" 
          alt="Nike Air Max Pulse"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Child div with text */}
      <div className="w-full mx-auto flex flex-col justify-center items-center text-center py-20 sm:py-8">
        <h1 className="text-[#111111] font-bold font-sans text-xl sm:text-2xl md:text-3xl">
          First Look
        </h1>
        <h2 className="text-[#111111] text-4xl sm:text-3xl md:text-2xl font-sans font-bold mt-2">
          NIKE AIr MAX PULSE
        </h2>
        <p className="text-[#111111] text-xl sm:text-lg md:text-base font-sans mt-4 px-4">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          <br />
          — designed to push you past your limits and help you go to the max.
        </p>

        {/* Button Section */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6">
          <button className="bg-black text-white px-6 py-2 rounded-full mb-4 sm:mb-0">
            Notify Me
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  );
};

export default NikeAirPlus;
