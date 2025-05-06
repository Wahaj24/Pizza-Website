import React from 'react';

const SectionContainer = ({ id, children }) => {
  return (
    <section
      id={id} // Dynamically set the id for the section
      className="px-6 py-16 max-w-7xl mx-auto bg-gray-50 rounded-lg shadow-lg"
    >
      {children}
    </section>
  );
};

export default SectionContainer;