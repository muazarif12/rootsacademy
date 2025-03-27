import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flex justify-between items-center px-12 py-6 bg-[#FDF9F6] text-[#4D3E77] shadow-md text-lg font-semibold">
      {/* Mobile & Tablet Header (Logo on left + Hamburger on right) */}
      <div className="lg:hidden w-full flex justify-between items-center">
        {/* Logo on left - stacked text */}
        <div className="flex flex-col">
          <span className="text-3xl font-extrabold leading-none">Roots</span>
          <span className="text-3xl font-extrabold leading-none">Academy</span>
        </div>

        {/* Hamburger Icon on right */}
        <button onClick={toggleSidebar} className="text-3xl">
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Logo for desktop */}
      <div className="hidden lg:block text-3xl font-extrabold">Roots Academy</div>

      {/* Navigation Links for desktop */}
      <div className="hidden lg:flex space-x-8 text-xl font-semibold">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <Link to="/about" className="hover:text-purple-600">About</Link>
        <Link to="/subjects" className="hover:text-purple-600">Subjects</Link>
        <Link to="/results" className="hover:text-purple-600">Results</Link>
        <Link to="/pricing" className="hover:text-purple-600">Pricing</Link>
        <Link to="/contact" className="hover:text-purple-600">Contact</Link>
        <Link to="/blogs" className="hover:text-purple-600">Blogs</Link>
      </div>

      {/* Buttons - desktop only */}
      <div className="hidden lg:flex space-x-6">
        <button className="px-6 py-3 bg-[#C2AAFA] text-[#3C2A7B] font-semibold rounded-lg text-lg transition-all duration-300 transform hover:bg-[#A179D5] shadow-lg">
          Register
        </button>
        <button className="px-6 py-3 bg-[#4D3E78] text-white font-semibold rounded-lg text-lg transition-all duration-300 transform hover:bg-[#3A2C5A] shadow-lg">
          Sign Up
        </button>
      </div>

      {/* Sidebar (Mobile & Tablet View) */}
      <div className={`fixed top-0 left-0 w-3/4 h-full bg-[#FDF9F6] p-6 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden z-50`}>
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-6 left-6 text-3xl font-bold"
        >
          &times; {/* Close icon */}
        </button>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-4 mt-16">
          <Link to="/" onClick={toggleSidebar} className="text-xl font-semibold hover:text-purple-600 w-min whitespace-nowrap">
            Home
          </Link>
          <Link to="/about" onClick={toggleSidebar} className="text-xl font-semibold hover:text-purple-600 w-min whitespace-nowrap">
            About
          </Link>
          <Link to="/subjects" onClick={toggleSidebar} className="text-xl font-semibold hover:text-purple-600 w-min whitespace-nowrap">
            Subjects
          </Link>
          <Link to="/results" onClick={toggleSidebar} className="text-xl font-semibold hover:text-purple-600 w-min whitespace-nowrap">
            Results
          </Link>
          <Link to="/pricing" onClick={toggleSidebar} className="text-xl font-semibold hover:text-purple-600 w-min whitespace-nowrap">
            Pricing
          </Link>
          <Link to="/contact" onClick={toggleSidebar} className="text-xl font-semibold hover:text-purple-600 w-min whitespace-nowrap">
            Contact
          </Link>
          <Link to="/blogs" onClick={toggleSidebar} className="text-xl font-semibold hover:text-purple-600 w-min whitespace-nowrap">
            Blogs
          </Link>

          {/* Buttons in Sidebar */}
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-3 bg-[#C2AAFA] text-[#3C2A7B] font-semibold rounded-lg text-lg transition-all duration-300 transform hover:bg-[#A179D5] shadow-lg">
              Register
            </button>
            <button className="px-6 py-3 bg-[#4D3E78] text-white font-semibold rounded-lg text-lg transition-all duration-300 transform hover:bg-[#3A2C5A] shadow-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;