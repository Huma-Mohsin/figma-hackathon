'use client';

import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/products';
import { getCartItems } from '../../../cart-actions/actions';
import Swal from 'sweetalert2';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { CgChevronRight } from 'react-icons/cg';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Address: '',
    ShippingAddress: '',
    City: '',
    Country: '',
    ZipCode: '',
    Phone: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem('discount');
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  const Total = Math.max(subTotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors: Record<string, boolean> = {};
    Object.keys(formValues).forEach((key) => {
      errors[key] = !formValues[key as keyof typeof formValues];
    });
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem('discount');
      Swal.fire({
        title: 'Order Placed',
        text: 'Your order has been placed successfully',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/cart" className="hover:text-black">Cart</Link>
          <CgChevronRight className="w-4 h-4" />
          <span>Checkout</span>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 border-b py-3">
                  <Image src={urlFor(item.image).url()} alt={item.productName} width={64} height={64} className="rounded object-cover" />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.productName}</h3>
                    <p className="text-xs text-gray-500">Qty: {item.inventory}</p>
                  </div>
                  <p className="text-sm font-semibold">${item.price * item.inventory}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="mt-4 text-right">
              <p className="text-sm">Subtotal: <span className="font-semibold">${subTotal.toFixed(2)}</span></p>
              <p className="text-sm">Discount: <span className="font-semibold">-${discount.toFixed(2)}</span></p>
              <p className="text-lg font-bold">Total: ${Total.toFixed(2)}</p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.keys(formValues).map((key) => (
                <div key={key}>
                  <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <input
                    id={key}
                    value={formValues[key as keyof typeof formValues]}
                    onChange={handleInputChange}
                    placeholder={`Enter your ${key.replace(/([A-Z])/g, ' $1').trim().toLowerCase()}`}
                    className={`w-full border rounded-md p-2 mt-1 ${formErrors[key] ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {formErrors[key] && (
                    <p className="text-sm text-red-500">{key.replace(/([A-Z])/g, ' $1')} is required.</p>
                  )}
                </div>
              ))}
            </div>
            <button
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
