import React from 'react'
import { BsCart } from 'react-icons/bs'; // Importing a cart icon from React Icons

const Product = () => {
  return (
    <div>
      <section className="text-gray-300 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="product"
              src="/p1.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold font-sans text-gray-900">
              Nike Air Force 1 PLT.AF.ORM
            </h1>
            <p className="mb-8 leading-relaxed">
              Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
            </p>

            <h1 className='text-black font-sans text-3xl font-bold'>₹ 8 695.00</h1>

            {/* Add to Cart Button */}
            <button className="flex items-center mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              <BsCart className="text-lg mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product;
