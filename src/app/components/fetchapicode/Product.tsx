// "use client";
// import React, { useEffect, useState } from "react";
// import { Product } from "../../../types/products";
// import { client } from "@/sanity/lib/client";
// import { AllProduct } from "@/sanity/lib/query";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";

// const DataFetchByAPI = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         const fetchedData: Product[] = await client.fetch(AllProduct);
//         setProducts(fetchedData);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }

//     fetchProduct();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center">Nike Products</h1>
      
//       <h1 className="text-xl font-bold text-center">By Fetch API</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product._id} className="bg-white shadow-lg p-4">
//             <Link href={`/products/${product.slug.current}`}>
//             <Image
//               src={urlFor(product.image).url()}
//               alt={product.productName}
//               width={500}
//               height={500}
//               className="w-full h-64 object-contain mb-6"
//             />
//             <h2 className="text-2xl font-bold">{product.productName}</h2>
//             <p className="text-sm text-gray-600">{product.description}</p>
//             <p className="text-lg text-blue-500 font-bold mt-2">${product.price}</p>
//             <p className="text-lg text-green-600 font-bold">In Stock: {product.inventory}</p>
           
//               {/* Add to Cart Button */}
//           <button className="bg-gray-500 text-white py-2 px-6 rounded-xl hover:bg-gray-700 transition duration-200 mt-2 ml-20">
//             Add to Cart
//           </button>
//           </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DataFetchByAPI;
