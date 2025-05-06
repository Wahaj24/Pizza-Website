import React from 'react';

const PizzaCard = ({ name, image, price, description }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-center">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">{name}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
      <p className="text-green-600 font-semibold mt-2">Rs. {price}</p>
    </div>
  );
};

export default PizzaCard;