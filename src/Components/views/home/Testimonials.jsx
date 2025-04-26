import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-3xl font-bold text-center text-red-600">What Our Customers Say</h2>
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <p className="text-gray-700">
            "The best pizza I've ever had! The crust was perfect, and the toppings were fresh."
          </p>
          <p className="mt-4 font-bold">- John Doe</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <p className="text-gray-700">
            "Fast delivery and amazing taste. I highly recommend Pizza Corner!"
          </p>
          <p className="mt-4 font-bold">- Jane Smith</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;