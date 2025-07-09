const NewsLetter = () => {
  return (
    <section className='py-16 lg:py-24 bg-blue-600 text-white'>
      <div className='container mx-auto px-4 text-center'>
        <div className='max-w-2xl mx-auto space-y-6'>
          <h2 className='text-3xl lg:text-4xl font-bold'>Stay Updated</h2>
          <p className='text-xl text-blue-100'>
            Subscribe to our newsletter and get 10% off your first order plus
            exclusive deals.
          </p>
          <div className='bg-white rounded-lg p-4 max-w-md mx-auto'>
            <div className='flex gap-2'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-3 py-2 border border-gray-300 rounded-md text-gray-900 outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button className='px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-md transition-colors'>
                Subscribe
              </button>
            </div>
          </div>
          <p className='text-sm text-blue-200'>
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
