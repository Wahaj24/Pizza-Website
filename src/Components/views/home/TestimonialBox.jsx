import React from 'react';

const TestimonialBox = ({ id, customerName, feedback }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300 max-w-sm">
      <p className="text-xs text-gray-400 mb-2">ID: {id}</p> {/* Optional: Display ID */}
      <p className="italic text-gray-700">"{feedback}"</p>
      <p className="mt-4 text-sm font-medium text-gray-800">- {customerName}</p>
    </div>
  );
};

export default TestimonialBox;