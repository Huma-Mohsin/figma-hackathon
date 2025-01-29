import Image from 'next/image';
import React from 'react';

const NikeShoes = () => {
  const products = [
    {
      name: "Nike Air Max 270",
      price: 150,
      description: "The Nike Air Max 270 offers a breathable, lightweight upper with a large Air unit in the heel for ultimate comfort.",
      colors: ["Black", "White", "Red", "Blue", "Green"],
      availability: "In Stock",
      image:"/shoes/1.jpg", 
    },
    {
      name: "Nike Air Zoom Pegasus 37",
      price: 120,
      description: "The Nike Air Zoom Pegasus 37 offers responsive cushioning and a sleek design for runners looking for performance.",
      colors: ["Grey", "Black", "Purple"],
      availability: "In Stock",
      image: "/shoes/2.jpeg"
    },
    {
      name: "Nike React Infinity Run Flyknit",
      price: 160,
      description: "Experience maximum cushioning with Nike React Infinity Run Flyknit, designed to reduce injuries and help you go longer.",
      colors: ["White", "Black", "Blue"],
      availability: "Out of Stock",
      image: "/shoes/3.jpg",
    },
    {
      name: "Nike Air Force 1",
      price: 110,
      description: "A classic, the Nike Air Force 1 features timeless styling and durable comfort with the iconic Air-Sole unit.",
      colors: ["White", "Black", "Grey"],
      availability: "In Stock",
      image:"/shoes/4.jpeg", 
    },
    {
      name: "Nike ZoomX Vaporfly NEXT%",
      price: 250,
      description: "The Nike ZoomX Vaporfly NEXT% is built for serious runners, offering unmatched speed and responsiveness.",
      colors: ["Yellow", "Pink", "Blue"],
      availability: "In Stock",
      image: "/shoes/5.jpeg",
    },
    {
      name: "Nike SB Dunk Low",
      price: 110,
      description: "Designed for skateboarders, the Nike SB Dunk Low delivers a great combination of style and performance.",
      colors: ["Black", "Red", "White"],
      availability: "Limited Stock",
      image:"/shoes/6.webp", 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div key={index} className="nike-shoe-card max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
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

export default NikeShoes;
