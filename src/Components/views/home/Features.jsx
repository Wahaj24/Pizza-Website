import React from 'react';
import SectionContainer from '../../layouts/SectionContainer';
import CardLayout from '../../layouts/CardLayout';

const Features = () => {
  const features = [
    { id: 1, title: 'Fresh Ingredients', description: 'We use only the freshest ingredients for our pizzas.' },
    { id: 2, title: 'Fast Delivery', description: 'Your pizza delivered hot and fresh in no time.' },
    { id: 3, title: 'Affordable Prices', description: "Delicious pizzas that won't break the bank." },
  ];

  return (
    <SectionContainer>
      <h2 className="text-3xl font-bold text-center text-red-600 mb-12">Why Choose Us?</h2>
      <CardLayout>
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300 max-w-sm"
          >
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
          </div>
        ))}
      </CardLayout>
    </SectionContainer>
  );
};

export default Features;
