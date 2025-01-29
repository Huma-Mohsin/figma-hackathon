import Image from 'next/image';
import React from 'react';

const SportsBras = () => {
  const products = [
    {
      name: "Nike Pro Bra",
      price: 50,
      description: "The Nike Pro Bra offers support and comfort with moisture-wicking fabric to keep you dry.",
      colors: ["Black", "White", "Pink"],
      availability: "In Stock",
      image: "/sports/1.jpg",
    },
    {
      name: "Nike Indy Bra",
      price: 45,
      description: "The Nike Indy Bra provides light support for low-impact activities with breathable mesh fabric.",
      colors: ["Grey", "Black", "Purple"],
      availability: "In Stock",
      image: "/sports/2.jpg",
    },
    {
      name: "Nike High Support Bra",
      price: 60,
      description: "Designed for high-intensity workouts, the Nike High Support Bra offers maximum support and comfort.",
      colors: ["Black", "Blue", "Red"],
      availability: "Out of Stock",
      image: "/sports/3.jpg",
    },
    {
      name: "Nike Swoosh Bra",
      price: 40,
      description: "The Nike Swoosh Bra combines style and comfort for everyday wear with a smooth design.",
      colors: ["White", "Pink", "Black"],
      availability: "In Stock",
      image: "/sports/4.jpg",
    },
    {
      name: "Nike Training Bra",
      price: 55,
      description: "This bra is perfect for training, offering great support and breathability.",
      colors: ["Yellow", "Black", "Grey"],
      availability: "In Stock",
      image: "/sports/5.jpg",
    },
    {
      name: "Nike Victory Bra",
      price: 50,
      description: "The Nike Victory Bra is designed for comfort and support during workouts with a sleek design.",
      colors: ["Red", "Black", "White"],
      availability: "Limited Stock",
      image: "/sports/6.jpg",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div key={index} className="nike-bra-card max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-64 object-contain rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold text-blue-600">${product.price}</span>
            <span className={`text-sm ${product.availability === "In Stock" ? 'text-green-500' : 'text-red-500'}`}>
              {product.availability}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-green-500">Available Colors:</h3>
            <ul className="list-disc pl-5">
              {product.colors.map((color, index) => (
                <li key={index} className="text-gray-700">{color}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SportsBras;
