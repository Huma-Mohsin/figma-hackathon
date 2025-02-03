import { BsCart } from 'react-icons/bs';
import { nikeProducts } from '@/app/components/card/data';
import Image from 'next/image';
import Link from 'next/link';

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product = nikeProducts.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-32 my-16'>
      <div className='col-span-1 flex justify-center'>
        <Image
          src={product.imagesUrls}
          alt={product.title}
          width={500}
          height={500}
          className='object-cover'
        />
      </div>
      <div className='col-span-1 flex flex-col justify-start'>
        <h2 className='text-2xl md:text-3xl font-bold'>{product.title}</h2>
        <p className='py-4 text-lg md:text-xl'>
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
        </p>
        <h3 className='text-blue-500 font-bold text-lg md:text-xl'>{product.price}</h3>
        <div className='flex justify-start mt-6'>
          <Link href='/cart'>
            <button className="bg-gradient-to-r from-gray-500 to-gray-700 shadow-md text-white py-2 px-6 rounded-xl hover:bg-gray-700 transition duration-200 mt-4 w-full md:w-auto">
              <BsCart className="text-lg mr-2" />
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
