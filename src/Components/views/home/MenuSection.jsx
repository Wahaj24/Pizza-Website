import React from 'react';

const MenuSection = () => {
  const pizzas = [
    {
      id: 1,
      name: 'Margherita',
      price: 1200,
      rating: 4.5,
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Pepperoni',
      price: 1400,
      rating: 4.7,
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'BBQ Chicken',
      price: 1500,
      rating: 4.6,
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      id: 4,
      name: 'Veggie Delight',
      price: 1100,
      rating: 4.4,
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
  ];

  return (
    <section id="menu-section" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={pizza.image}
              alt={pizza.name}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">{pizza.name}</h3>
            <p className="text-gray-700">Pizza - Rs.{pizza.price}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 text-lg">★</span>
              <span className="ml-1 text-gray-700">{pizza.rating}</span>
            </div>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;