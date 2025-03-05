import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-6 bg-[#E8DAF8] text-[#3C2A7B] shadow-md text-lg font-semibold">
      {/* Logo */}
      <div className="text-3xl font-extrabold">Roots Academy</div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-xl font-semibold">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <Link to="/about" className="hover:text-purple-600">About</Link>
        <Link to="/subjects" className="hover:text-purple-600">Subjects</Link>
        <Link to="/results" className="hover:text-purple-600">Results</Link>
        <Link to="/pricing" className="hover:text-purple-600">Pricing</Link>
        <Link to="/contact" className="hover:text-purple-600">Contact</Link>
        <Link to="/blogs" className="hover:text-purple-600">Blogs</Link>
      </div>

      {/* Buttons with gradient effect and hover animations */}
      <div className="space-x-6">
        <button className="px-6 py-3 bg-gradient-to-r from-[#D8B4F8] to-[#C9A7F5] text-[#3C2A7B] font-semibold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Register
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-[#5E3BEE] to-[#3C2A7B] text-white font-semibold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
