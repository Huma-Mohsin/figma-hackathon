import Image from "next/image";
import React from "react";

const kidsClothingData = [
  {
    id: 1,
    name: "Nike Kids' Graphic T-Shirt",
    price: "$19.99",
    image: "/kids/1.png",
    description: "Soft and comfortable, this graphic tee is perfect for everyday wear and play."
  },
  {
    id: 2,
    name: "Nike Kids' Running Shorts",
    price: "$24.99",
    image: "/kids/2.png",
    description: "These lightweight shorts provide comfort and flexibility for active kids."
  },
  {
    id: 3,
    name: "Nike Kids' Training Pants",
    price: "$29.99",
    image: "/kids/3.png",
    description: "Durable and stretchy pants designed for training, sports, and all-day wear."
  },
  {
    id: 4,
    name: "Nike Kids' Hoodie",
    price: "$39.99",
    image: "/kids/4.png",
    description: "Cozy and stylish, this hoodie will keep your kids warm during outdoor activities."
  },
  {
    id: 5,
    name: "Nike Kids' Sports Socks",
    price: "$9.99",
    image: "/kids/5.png",
    description: "Comfortable socks perfect for sports, providing extra support and breathability."
  },
  {
    id: 6,
    name: "Nike Kids' Training Shoes",
    price: "$49.99",
    image: "/kids/6.png",
    description: "These supportive shoes are ideal for both sports activities and casual wear."
  },
  {
    id: 7,
    name: "Nike Kids' Sweatpants",
    price: "$34.99",
    image: "/kids/7.png",
    description: "Soft sweatpants that offer maximum comfort and warmth for all-day play."
  },
  {
    id: 8,
    name: "Nike Kids' Tracksuit",
    price: "$69.99",
    image: "/kids/8.png",
    description: "A stylish and functional tracksuit for kids who love to stay active and trendy."
  },
  {
    id: 9,
    name: "Nike Kids' Sports Jacket",
    price: "$54.99",
    image: "/kids/9.png",
    description: "This jacket is perfect for outdoor sports and offers warmth with a sleek look."
  },
  {
    id: 10,
    name: "Nike Kids' Fleece Pullover",
    price: "$29.99",
    image: "/kids/10.png",
    description: "Soft and warm, this fleece pullover is perfect for cool weather and casual outings."
  },
  {
    id: 11,
    name: "Nike Kids' Jogger Pants",
    price: "$39.99",
    image: "/kids/11.png",
    description: "Comfortable and versatile jogger pants that kids can wear during sports or casual days."
  },
  {
    id: 12,
    name: "Nike Kids' Baseball Cap",
    price: "$19.99",
    image: "/kids/12.png",
    description: "A stylish cap to protect your kids from the sun while keeping them cool and trendy."
  }
];

const KidsClothing = () => {
  return (
    <div className="p-8 ">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Kids' Clothing Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {kidsClothingData.map((item) => (
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
            <div className="flex justify-center gap-4 p-4">
              {/* Add to Cart Button */}
              <button className="bg-gradient-to-r from-gray-500 to-gray-700 shadow-md text-white py-2 px-3 rounded-xl hover:bg-gray-700 transition duration-200">
                Add to Cart
              </button>

              {/* Add to Wishlist Button */}
              <button className="bg-gradient-to-r from-red-500 to-red-700 shadow-md text-white py-2 px-3 rounded-xl hover:bg-pink-700 transition duration-200">
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsClothing;
