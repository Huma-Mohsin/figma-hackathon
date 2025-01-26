import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

type SelectedFilters = {
  gender: string[];
  price: string[];
};

type FetchDataProps = {
  filters: SelectedFilters;
};

type Product = {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  imageUrl: string;
  description: string;
  slug: string;
};

const FetchData: React.FC<FetchDataProps> = ({ filters }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      
      // Build GROQ query dynamically based on filters
      const query = `
        *[_type == "product" ${
          filters.gender.length > 0
            ? `&& gender in $genderFilters`
            : ""
        } ${
        filters.price.length > 0
          ? `&& price >= $minPrice && price <= $maxPrice`
          : ""
      }] {
          _id,
          productName,
          category,
          price,
          inventory,
          colors,
          status,
          "imageUrl": image.asset->url,
          description,
          "slug": slug.current
        }
      `;

      // Handle filters for gender and price range
      const params: Record<string, any> = {
        genderFilters: filters.gender,
        minPrice: filters.price.length > 0 ? parseInt(filters.price[0]) : 0,
        maxPrice: filters.price.length > 1 ? parseInt(filters.price[1]) : Infinity,
      };

      try {
        const data = await client.fetch(query, params);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (products.length === 0) {
    return <p>No products found for the selected filters.</p>;
  }

  return (
    <div>
      <h3>Filtered Products:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="p-4 border rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={product.imageUrl || "/placeholder.jpg"}
              alt={product.productName}
              className="w-full h-48 object-cover rounded-md"
            />
            <h4 className="mt-2 text-lg font-semibold">{product.productName}</h4>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="text-lg font-bold text-green-600">${product.price}</p>
            <p
              className={`text-sm ${
                product.status === "Available"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {product.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
