"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCart } from "../../../cart-actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemoveItem = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this item from the cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed from cart", "success");
      }
    });
  };

  const handleQuantitiyChange = (id: number, quantity: number) => {
    updateCart(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: number) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantitiyChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: number) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantitiyChange(id, product.inventory - 1);
    }
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const router=useRouter()
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout",
      text: `Please review your cart before proceeding to checkout.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed to checkout",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Congratulations", "You have successfully placed your order", "success");
        router.push("/checkout");
        setCartItems([]);
      }

    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto bg-gray-200 shadow-lg rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-gray-400 to-gray-700 text-white py-4 px-6">
          <h1 className="text-xl font-bold text-center">Shopping Cart</h1>
        </div>
        {cartItems.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-gray-500 text-lg">Your cart is empty!</p>
          </div>
        ) : (
          <div className="p-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between py-4 border-b last:border-b-0"
              >
                <div className="flex items-center">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.productName}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                  )}
                  <div className="ml-4">
                    <h2 className="text-lg font-medium">{item.productName}</h2>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-md text-lg flex justify-center items-center"
                    onClick={() => handleDecrement(item._id)}
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.inventory}</span>
                  <button
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-md text-lg flex justify-center items-center"
                    onClick={() => handleIncrement(item._id)}
                  >
                    +
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
                    onClick={() => handleRemoveItem(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-lg font-semibold">Total: ${calculatedTotal()}</h2>
              <button
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md"
                onClick={handleProceed}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
