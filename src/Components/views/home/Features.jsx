import React from 'react';

const Features = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-red-600">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold">Fresh Ingredients</h3>
          <p className="text-gray-700 mt-2">We use only the freshest ingredients for our pizzas.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Fast Delivery</h3>
          <p className="text-gray-700 mt-2">Your pizza delivered hot and fresh in no time.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Affordable Prices</h3>
          <p className="text-gray-700 mt-2">Delicious pizzas that won't break the bank.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;