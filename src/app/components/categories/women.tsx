import Image from "next/image";
import React from "react";

const womenClothingData = [
  {
    id: 1,
    name: "Nike Women's Performance Tank Top",
    price: "$49.99",
    image: "/women/dp1.png",
    description: "Stay cool and comfortable during workouts with this lightweight, sweat-wicking tank top designed for performance and style."
  },
  {
    id: 2,
    name: "Nike Women's Air Max Sports Bra",
    price: "$69.99",
    image: "/women/dp5.png",
    description: "Support meets style with this Air Max-inspired sports bra, perfect for medium-impact activities and all-day wear."
  },
  {
    id: 3,
    name: "Nike Women's Training Shorts",
    price: "$39.99",
    image: "/women/image3.png",
    description: "Flexible and breathable, these training shorts are ideal for high-intensity workouts or casual lounging."
  },
  {
    id: 4,
    name: "Nike Women's Flex Leggings",
    price: "$59.99",
    image: "/women/legging.png",
    description: "Move freely and confidently with these full-length leggings that combine stretch and support."
  },
  {
    id: 5,
    name: "Nike Pro 2.0 Compression Tights",
    price: "$54.99",
    image: "/women/pro20.png",
    description: "Experience next-level support with these compression tights, engineered for intense workouts and recovery."
  },
  {
    id: 6,
    name: "Nike Pro 2.2 Training Shorts",
    price: "$44.99",
    image: "/women/pro22.png",
    description: "Comfortable and snug, these training shorts are a must-have for active women seeking performance and style."
  },
  {
    id: 7,
    name: "Nike Club Fleece Crew Sweatshirt",
    price: "$29.99",
    image: "/women/W+NSW+CLUB+FLC+CREW+STD.png",
    description: "Relax in ultimate coziness with this classic fleece sweatshirt, perfect for layering or casual outings."
  },
  {
    id: 8,
    name: "Nike Phoenix Fleece Relaxed Joggers",
    price: "$99.99",
    image: "/women/W+NSW+PHNX+FLC+MR+OH+PANT.png",
    description: "Soft and warm, these relaxed joggers offer a perfect blend of comfort and street-ready style."
  },
  {
    id: 9,
    name: "Nike Phoenix Fleece Oversized Crew",
    price: "$39.99",
    image: "/women/W+NSW+PHNX+FLC+OOS+CREW (1).png",
    description: "Designed with an oversized fit, this crewneck sweatshirt delivers effortless style and cozy warmth."
  },
  {
    id: 10,
    name: "Nike Phoenix Fleece Crew Pullover",
    price: "$24.99",
    image: "/women/W+NSW+PHNX+FLC+OOS+CREW.png",
    description: "This lightweight fleece pullover offers everyday comfort and a sporty, casual look."
  }
];

const WomenClothing = () => {
  return (
    <div className="p-8 ">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Women's Clothing Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {womenClothingData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col p-6 flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-lg text-gray-600 mb-4">{item.description}</p>
              <p className="text-lg font-bold text-gray-900">{item.price}</p>
            </div>

            {/* Buttons Section */}
            <div className="flex justify-center gap-4 p-4 ">
              {/* Add to Cart Button */}
              <button className="px-4 py-2 text-white border border-blue-600 rounded-xl bg-blue-500 hover:bg-blue-600 transition-all duration-300">
                Add to Cart
              </button>

              {/* Add to Wishlist Button */}
              <button className="px-4 py-2 text-white border border-green-600 rounded-xl bg-green-500 hover:bg-red-600 transition-all duration-300">
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenClothing;
