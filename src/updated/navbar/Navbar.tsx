// src/components/Navbar.tsx
import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left: Searchbar */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 w-64"
          placeholder="Search..."
        />
      </div>

      {/* Middle: Title */}
      <div className="text-xl font-bold text-gray-800">My Application</div>

      {/* Right: Dropdown, Notification Icon, Profile Icon */}
      <div className="flex items-center space-x-6">
        {/* Dropdown */}
        <div className="relative">
          <button className="text-gray-600 focus:outline-none">Menu ▼</button>
          {/* Dropdown content can be added here */}
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <button className="text-gray-600 focus:outline-none">🔔</button>
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            3
          </span>
        </div>

        {/* Profile Icon */}
        <div>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-full w-10 h-10"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
