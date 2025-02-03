import React from 'react';

const NikeAirPlus = () => {
  return (
    <div className="w-full mt-10">
      {/* Parent div with image */}
      <div className="w-full max-w-[1200px] mx-auto h-auto sm:h-[500px] md:h-[600px]">
        <img
          src="/nikeAirPulse.png" 
          alt="Nike Air Max Pulse"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Child div with text */}
      <div className="w-full mx-auto flex flex-col justify-center items-center text-center py-8 sm:py-12 md:py-16 space-y-6 md:space-y-8">
        <h1 className="text-[#111111] font-bold font-sans text-xl sm:text-2xl md:text-3xl">
          First Look
        </h1>
        <h2 className="text-[#111111] text-2xl sm:text-3xl md:text-4xl font-sans font-bold mt-2">
          NIKE AIR MAX PULSE
        </h2>
        <p className="text-[#111111] text-base sm:text-lg md:text-xl font-sans mt-4 px-4 sm:px-8 md:px-12">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          <br />
          — designed to push you past your limits and help you go to the max.
        </p>

        {/* Button Section */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6 space-y-4 sm:space-y-0">
          <button className="bg-black text-white px-6 py-3 rounded-full sm:w-auto w-full">
            Notify Me
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-full sm:w-auto w-full">
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  );
};

export default NikeAirPlus;
