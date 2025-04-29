import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopSubjectsOpen, setIsDesktopSubjectsOpen] = useState(false);
  const [isMobileSubjectsOpen, setIsMobileSubjectsOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Close mobile subjects dropdown when closing sidebar
    if (isSidebarOpen) {
      setIsMobileSubjectsOpen(false);
    }
  };

  const toggleDesktopSubjects = () => {
    setIsDesktopSubjectsOpen(!isDesktopSubjectsOpen);
  };

  const toggleMobileSubjects = (e) => {
    e.stopPropagation(); // Prevent the event from bubbling up
    setIsMobileSubjectsOpen(!isMobileSubjectsOpen);
  };

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setIsDesktopSubjectsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        
        {/* Subjects with dropdown */}
        <div className="relative" ref={desktopDropdownRef}>
          <button 
            onClick={toggleDesktopSubjects}
            className="flex items-center hover:text-purple-600 focus:outline-none"
          >
            Subjects
            <ChevronDown className="ml-1 h-5 w-5" />
          </button>
          
          {/* Subjects dropdown */}
          {isDesktopSubjectsOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50">
              <div className="grid grid-cols-1 gap-2 p-4">
                <Link to="/biology" className="px-4 py-2 text-lg text-[#4D3E77] hover:bg-gray-100 rounded">Biology</Link>
                <Link to="/chemistry" className="px-4 py-2 text-lg text-[#4D3E77] hover:bg-gray-100 rounded">Chemistry</Link>
                <Link to="/physics" className="px-4 py-2 text-lg text-[#4D3E77] hover:bg-gray-100 rounded">Physics</Link>
                <Link to="/mathematics" className="px-4 py-2 text-lg text-[#4D3E77] hover:bg-gray-100 rounded">Mathematics</Link>
                <Link to="/computer-science" className="px-4 py-2 text-lg text-[#4D3E77] hover:bg-gray-100 rounded">Computer Science</Link>
              </div>
            </div>
          )}
        </div>
        
        <Link to="/results" className="hover:text-purple-600">Results</Link>
        <Link to="/pricing" className="hover:text-purple-600">Pricing</Link>
        <Link to="/contact" className="hover:text-purple-600">Contact</Link>
        <Link to="/blogs" className="hover:text-purple-600">Blogs</Link>
      </div>

      {/* Buttons - desktop only */}
      <div className="hidden lg:flex space-x-6">
        <Link
          to="/register"
          className="px-6 py-3 bg-[#C2AAFA] text-[#3C2A7B] font-semibold rounded-lg text-lg transition-all duration-300 transform hover:bg-[#A179D5] shadow-lg"
        >
          Register
        </Link>
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
          
          {/* Mobile Subjects Dropdown */}
          <div className="w-min whitespace-nowrap" ref={mobileDropdownRef}>
            <button 
              onClick={toggleMobileSubjects}
              className="flex items-center text-xl font-semibold hover:text-purple-600 focus:outline-none"
            >
              Subjects
              <ChevronDown className="ml-1 h-5 w-5" />
            </button>
            
            {isMobileSubjectsOpen && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link to="/biology" onClick={toggleSidebar} className="text-lg hover:text-purple-600">Biology</Link>
                <Link to="/chemistry" onClick={toggleSidebar} className="text-lg hover:text-purple-600">Chemistry</Link>
                <Link to="/physics" onClick={toggleSidebar} className="text-lg hover:text-purple-600">Physics</Link>
                <Link to="/mathematics" onClick={toggleSidebar} className="text-lg hover:text-purple-600">Mathematics</Link>
                <Link to="/computer-science" onClick={toggleSidebar} className="text-lg hover:text-purple-600">Computer Science</Link>
              </div>
            )}
          </div>
          
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
            <Link
              to="/register"
              onClick={toggleSidebar}
              className="px-6 py-3 bg-[#C2AAFA] text-[#3C2A7B] font-semibold rounded-lg text-lg transition-all duration-300 transform hover:bg-[#A179D5] shadow-lg"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;