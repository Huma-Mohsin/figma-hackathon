"use client";

import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

interface StoreMarkerProps {
  lat: number;
  lng: number;
  text: string;
}

const StoreMarker: React.FC<StoreMarkerProps> = ({ text }) => (
  <div className="text-black font-semibold bg-white px-3 py-2 rounded-md shadow-md">
    <div>{text}</div>
  </div>
);

const FindStore = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stores = [
    {
      id: 1,
      name: "Nike Store - New York",
      lat: 40.7128,
      lng: -74.006,
      address: "123 Fifth Ave, NY",
      phone: "123-456-7890",
      hours: "Mon-Fri: 10am - 9pm, Sat-Sun: 11am - 7pm",
    },
    {
      id: 2,
      name: "Nike Outlet - Los Angeles",
      lat: 34.0522,
      lng: -118.2437,
      address: "456 Sunset Blvd, CA",
      phone: "987-654-3210",
      hours: "Mon-Sun: 10am - 8pm",
    },
    {
      id: 3,
      name: "Nike Flagship - Chicago",
      lat: 41.8781,
      lng: -87.6298,
      address: "789 Michigan Ave, IL",
      phone: "456-789-0123",
      hours: "Mon-Sun: 10am - 9pm",
    },
  ];

  const defaultCenter = { lat: 39.8283, lng: -98.5795 };
  const defaultZoom = 4;

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center bg-[url('/public/nikelogo.png')] text-white py-20 sm:py-32 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-5xl font-bold">Find a Nike Store</h1>
          <p className="mt-4 text-lg sm:text-xl">
            Discover the latest gear and expert service near you.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Enter your city, state, or zip code"
            className="w-full max-w-lg px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>

      {/* Store List */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
          Stores Near You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div
              key={store.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all border text-center sm:text-left"
            >
              <h3 className="text-lg sm:text-xl font-semibold">{store.name}</h3>
              <p className="text-gray-600 mt-2">{store.address}</p>
              <p className="text-gray-600 mt-2">{store.phone}</p>
              <p className="text-gray-600 mt-2">{store.hours}</p>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Explore Our Locations
          </h2>
          <p className="text-gray-600 mb-8">
            Use our interactive map to find the store closest to you.
          </p>
          <div className="relative w-full h-80 sm:h-96 max-w-5xl mx-auto rounded-lg overflow-hidden">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBXaZaLEDt4qGYqkTqC5JP8Cg3X9o5CRX8",
              }}
              defaultCenter={defaultCenter}
              defaultZoom={defaultZoom}
            >
              {stores.map((store) => (
                <StoreMarker
                  key={store.id}
                  lat={store.lat}
                  lng={store.lng}
                  text={store.name}
                />
              ))}
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindStore;
