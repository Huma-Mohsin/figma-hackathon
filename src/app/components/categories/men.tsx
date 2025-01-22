import Image from "next/image";
import React from "react";

const menClothingData = [
  {
    id: 1,
    name: "Nike Men's Graphic T-Shirt",
    price: "$24.99",
    image: "/men/1.png",
    description: "This graphic tee offers both style and comfort, perfect for casual outings."
  },
  {
    id: 2,
    name: "Nike Men's Running Shorts",
    price: "$29.99",
    image: "/men/2.png",
    description: "These lightweight shorts are great for running or casual wear, offering flexibility and comfort."
  },
  {
    id: 3,
    name: "Nike Men's Training Pants",
    price: "$39.99",
    image: "/men/3.png",
    description: "Stretchy and durable pants designed for high-intensity workouts and everyday use."
  },
  {
    id: 4,
    name: "Nike Men's Hoodie",
    price: "$49.99",
    image: "/men/4.png",
    description: "A cozy hoodie perfect for layering, offering warmth and style."
  },
  {
    id: 5,
    name: "Nike Men's Sports Socks",
    price: "$14.99",
    image: "/men/5.jpeg",
    description: "Durable sports socks designed for comfort and breathability during physical activities."
  },
  {
    id: 6,
    name: "Nike Men's Training Shoes",
    price: "$79.99",
    image: "/men/6.png",
    description: "These versatile shoes provide support and comfort for all sports activities."
  },
  {
    id: 7,
    name: "Nike Men's Sweatpants",
    price: "$34.99",
    image: "/men/7.png",
    description: "Soft, comfortable sweatpants, ideal for lounging or casual workouts."
  },
  {
    id: 8,
    name: "Nike Men's Tracksuit",
    price: "$89.99",
    image: "/men/8.png",
    description: "A stylish tracksuit that offers flexibility and comfort for sports or casual wear."
  },
  {
    id: 9,
    name: "Nike Men's Sports Jacket",
    price: "$59.99",
    image: "/men/9.png",
    description: "A sleek jacket that offers warmth and protection, perfect for outdoor activities."
  },
  {
    id: 10,
    name: "Nike Men's Fleece Pullover",
    price: "$39.99",
    image: "/men/10.png",
    description: "This fleece pullover provides warmth and comfort, perfect for chilly days."
  },
  {
    id: 11,
    name: "Nike Men's Jogger Pants",
    price: "$49.99",
    image: "/men/11.jpeg",
    description: "Comfortable joggers that blend style and functionality, great for workouts or casual wear."
  },
  {
    id: 12,
    name: "Nike Men's Baseball Cap",
    price: "$19.99",
    image: "/men/12.webp",
    description: "A trendy cap designed to protect from the sun while adding style to your outfit."
  }
];

const MenClothing = () => {
  return (
    <div className="p-8">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Men's Clothing Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {menClothingData.map((item) => (
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
              <button className="px-4 py-2 text-white border border-blue-600 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300">
                Add to Cart
              </button>

              {/* Add to Wishlist Button */}
              <button className="px-4 py-2 text-white border border-green-600 rounded-lg bg-green-500 hover:bg-red-600 transition-all duration-300">
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenClothing;
