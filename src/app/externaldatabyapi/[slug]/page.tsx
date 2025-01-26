'use client'; // Ensures this component is rendered on the client side

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  status: string;
  description: string;
  imageUrl: string;
}

const ProductDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Fetch slug from the URL

  const [product, setProduct] = useState<Product | null>(null); // Define the type for product state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return; // Don't fetch until slug is available

    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/products/${slug}`);
        const data = await response.json();

        if (data.success) {
          setProduct(data.data);
        } else {
          setError('Product not found.');
        }
      } catch (err) {
        setError('An error occurred while fetching the product.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [slug]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{product.productName}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          {product.imageUrl && (
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="w-full h-auto rounded-lg shadow-md"
            />
          )}
        </div>
        <div>
          <p className="text-xl text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-xl text-blue-600 mb-2">Price: ${product.price}</p>
          <p className="text-xl text-red-600 mb-2">Inventory: {product.inventory}</p>
          <p className="text-xl text-green-600 mb-4">Status: {product.status}</p>
          <p className="text-lg mb-4">{product.description}</p>

          <button
            className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => console.log(`Product ${product._id} added to cart.`)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
