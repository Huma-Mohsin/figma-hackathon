"use client";

import { useEffect, useState } from "react";

// Define the type for a product
type Product = {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  status: string;
  imageUrl?: string; // imageUrl is optional
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]); // Array of Product type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Explicitly defining the type

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();

        if (data.success) {
          setProducts(data.data); // Assuming data.data is an array of Product objects
        } else {
          setError(data.error || "Failed to fetch products");
        }
      } catch (err) {
        setError("An error occurred while fetching products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = (productId: string) => {
    // Add to cart logic here (e.g., storing in localStorage or state management)
    console.log(`Product ${productId} added to cart.`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-8">All Products</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-6 rounded-lg shadow-lg bg-white flex flex-col h-[650px] w-[350px]"
          >
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-full h-[300px] object-cover rounded-t-lg mb-4 shadow-md"
              />
            )}
            <div className="px-4 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold mb-2">{product.productName}</h2>
              <p className="text-xl text-gray-600 mb-2">Category: {product.category}</p>
              <p className="text-xl text-blue-600 mb-2">Price: ${product.price}</p>
              <p className="text-xl text-red-600 mb-2">Inventory: {product.inventory}</p>
              <p className="text-xl text-green-600 mb-4">Status: {product.status}</p>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product._id)}
                className="mt-auto w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
