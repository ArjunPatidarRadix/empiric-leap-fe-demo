// src/components/NavbarWithSidebar.tsx
import React from "react";
import SideBar from "../sideBar/SideBar";

interface NavbarWithSidebarProps {}

const NavbarWithSidebar: React.FC<NavbarWithSidebarProps> = () => {
  return (
    <div className="flex h-screen bg-blue">
      {/* Sidebar */}
      <aside className="w-20 bg-secondary text-white h-full flex flex-col justify-center">
        <SideBar />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-primary">
        {/* Navbar */}
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
          <div className="text-xl font-bold text-textColor">Dashboard</div>

          {/* Right: Dropdown, Notification Icon, Profile Icon */}
          <div className="flex items-center space-x-6">
            {/* Dropdown */}
            <div className="relative">
              <button className="text-gray-600 focus:outline-none">
                Menu ▼
              </button>
            </div>

            {/* Notification Icon */}
            <div className="relative">
              <button className="text-gray-600 focus:outline-none">🔔</button>
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

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          {/* Add your main content here */}
          <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
          <p>This is where your main content will go.</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarWithSidebar;
