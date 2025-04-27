import React from "react";

import Footer from "../components/Footer";
import BlogGrid from "../components/BlogGrid";
const Blogs = () => {
  return (
    <div className="min-h-screen bg-[#FDF9F6]">
      <div className="max-w-6xl mx-auto py-10 px-6">
        <BlogGrid />
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
};

export default Blogs;
