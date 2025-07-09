import { Headphones, Shield, Truck } from "lucide-react";

const Features = () => {
  return (
    <section className='py-16 lg:py-24'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='text-center'>
            <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Truck className='h-8 w-8 text-blue-600' />
            </div>
            <h3 className='text-xl font-semibold mb-2 text-gray-900'>
              Free Shipping
            </h3>
            <p className='text-gray-600'>
              Free shipping on all orders over $50. Fast delivery guaranteed
              within 2-3 business days.
            </p>
          </div>
          <div className='text-center'>
            <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Shield className='h-8 w-8 text-green-600' />
            </div>
            <h3 className='text-xl font-semibold mb-2 text-gray-900'>
              Secure Payment
            </h3>
            <p className='text-gray-600'>
              Your payment information is processed securely with 256-bit SSL
              encryption.
            </p>
          </div>
          <div className='text-center'>
            <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Headphones className='h-8 w-8 text-purple-600' />
            </div>
            <h3 className='text-xl font-semibold mb-2 text-gray-900'>
              24/7 Support
            </h3>
            <p className='text-gray-600'>
              Get help whenever you need it with our round-the-clock customer
              support team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
