import React from 'react';

const CardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 justify-items-center">
      {children}
    </div>
  );
};

export default CardLayout;