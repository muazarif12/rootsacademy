import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-purple-200 text-gray-800">
      <div className="text-2xl font-bold">Roots Academy</div>
      <div className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/subjects" className="hover:underline">Subjects</Link>
        <Link to="/results" className="hover:underline">Results</Link>
        <Link to="/pricing" className="hover:underline">Pricing</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/blogs" className="hover:underline">Blogs</Link>
      </div>
      <div className="space-x-4">
        <button className="bg-purple-400 px-4 py-2 rounded-lg">Register</button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
