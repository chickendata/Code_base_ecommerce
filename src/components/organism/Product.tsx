import { product } from "@/lib/const/product";
import { ChevronRight, Heart, Star } from "lucide-react";
import Image from "next/image";

const Product = () => {
  return (
    <section className='py-16 lg:py-24'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center mb-12'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-bold mb-2 text-gray-900'>
              Featured Products
            </h2>
            <p className='text-gray-600 text-lg'>
              Handpicked items just for you
            </p>
          </div>
          <button className='hidden sm:flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors'>
            View All
            <ChevronRight className='ml-2 h-4 w-4' />
          </button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {product.map((product, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group'
            >
              <div className='relative overflow-hidden rounded-t-xl'>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className='w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <button className='absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50'>
                  <Heart className='h-4 w-4 text-gray-600' />
                </button>
                <span className='absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded'>
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  % OFF
                </span>
              </div>
              <div className='p-4 space-y-3'>
                <h3 className='font-semibold text-gray-900 line-clamp-2'>
                  {product.name}
                </h3>
                <div className='flex items-center gap-2'>
                  <div className='flex items-center'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className='text-sm text-gray-500'>
                    ({product.reviews})
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <span className='text-lg font-bold text-gray-900'>
                      ${product.price}
                    </span>
                    <span className='text-sm text-gray-500 line-through'>
                      ${product.originalPrice}
                    </span>
                  </div>
                  <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
