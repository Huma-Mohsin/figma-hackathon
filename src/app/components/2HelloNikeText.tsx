import React from 'react';

const HelloNikeText = () => {
  return (
    <section className="w-full bg-[#F5F5F5] py-6 sm:py-10 md:py-12">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-4 sm:space-y-6">
        <h1 className="text-[#111111] text-2xl sm:text-3xl md:text-4xl font-bold font-sans">
          Hello Nike App
        </h1>
        <h2 className="text-[#111111] text-lg sm:text-xl md:text-2xl font-medium font-sans">
          Download the app to access everything Nike.{' '}
          <a href="/" className="hover:underline text-black font-semibold">
            Get Your Great
          </a>
        </h2>
      </div>
    </section>
  );
};

export default HelloNikeText;
