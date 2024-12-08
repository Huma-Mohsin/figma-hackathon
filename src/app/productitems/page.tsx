import React from "react";

const Multiproducts = () => {
  // Define an array of objects for products
  const products = [
    { 
      name: "Nike Air Force 1", 
      type: "Shoes", 
      color: "Yellow", 
      price: "₹ 8,695.00", 
      image: "/dp3.png" 
    },
    { 
      name: "Sports Dress", 
      type: "Sports Dress", 
      color: "Purple", 
      price: "₹ 1,295.00", 
      image: "/dp5.png" 
    },
    { 
      name: "T-shirt", 
      type: "Tops & T-shirts", 
      color: "Sea Green", 
      price: "₹ 799.00", 
      image: "/dp2.png" 
    },
    { 
      name: "Nike Hoodie", 
      type: "Hoodies & Sweatshirts", 
      color: "Cream", 
      price: "₹ 3,499.00", 
      image: "/dp4.jpeg" 
    },
    
    { 
      name: "Running Shoes", 
      type: "Shoes", 
      color: "white", 
      price: "₹ 1,199.00", 
      image: "/Airmax1.png" 
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar Menu */}
      <div className="w-full lg:w-1/4 p-4 bg-white text-black mb-6 lg:mb-0">
        <h2 className="text-xl font-bold mb-6">Categories</h2>
        <ul className="space-y-4">
          <li>Shoes</li>
          <li>Sports Bras</li>
          <li>Tops & T-shirts</li>
          <li>Hoodies & Sweatshirts</li>
          <li>Jackets</li>
          <li>Trousers</li>
          <li>Tights</li>
          <li>Shorts</li>
          <li>Track Suits</li>
          <li>Jumpsuits</li>
          <li>Romper</li>
          <li>Skirts</li>
          <li>Dresses</li>
          <li>Socks</li>
          <li>Other Accessories</li>
        </ul>
      </div>

      {/* Product Grid */}
      <div className="w-full lg:w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="w-full h-48 relative mb-4">
                <img
                  src={product.image} // Dynamic image path from each product object
                  alt={product.name}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.type}</p>
              <p className="text-gray-600">{product.color}</p>
              <p className="font-bold text-black">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Multiproducts;