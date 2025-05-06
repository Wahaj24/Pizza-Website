import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-red-600 text-white py-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#home-section" className="flex items-center text-xl font-bold">
          <img
            src="https://static.tossdown.com/images/73afe7f2-e973-4cbe-b99a-b472903b62da.webp"
            alt="Logo"
            className="h-10 mr-2"
          />
          Pizza Corner
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="#home-section" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#info-section" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#menu-section" className="hover:text-gray-300">
              Menu
            </a>
          </li>
          <li>
            <a href="#call-to-action-section" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;