import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-6">
      <div className="max-w-5xl w-full bg-white p-6">
        {/* Bag Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bag Items */}
          <div className="col-span-2">
            <h2 className="text-lg md:text-2xl font-bold mb-4">Bag</h2>
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-4">
              <img
                src="/image1.png"
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                className="w-24 h-24 rounded-md border mb-4 md:mb-0"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-medium text-gray-800 text-base md:text-lg">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="text-sm text-gray-600">Men's Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm text-gray-500">Size: L</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="font-medium text-base">₹ 3,895.00</p>
                <button className="text-sm text-red-500 hover:underline mt-2">Remove</button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-4">
              <img
                src="/image2.png"
                alt="Nike Air Max 97 SE"
                className="w-24 h-24 rounded-md border mb-4 md:mb-0"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-medium text-gray-800 text-base md:text-lg">
                  Nike Air Max 97 SE
                </h3>
                <p className="text-sm text-gray-600">Men's Shoes</p>
                <p className="text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
                <p className="text-sm text-gray-500">Size: 8</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="font-medium text-base">₹ 16,995.00</p>
                <button className="text-sm text-red-500 hover:underline mt-2">Remove</button>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gray-100 rounded-lg p-6 border border-gray-200 mt-6 md:mt-0">
            <h2 className="text-lg md:text-2xl font-bold mb-4">Summary</h2>
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">₹ 20,890.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Estimated Delivery & Handling</p>
              <p className="font-medium">Free</p>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-4">
              <p>Total</p>
              <p>₹ 20,890.00</p>
            </div>
            <button className="w-full bg-black text-white font-medium py-3 rounded-lg mt-4">
              Member Checkout
            </button>
          </div>
        </div>

        {/* Free Delivery Section */}
        <div className="mt-6 text-sm text-gray-500 text-center md:text-left">
          Free Delivery applies to orders of ₹ 14,000.00 or more.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
