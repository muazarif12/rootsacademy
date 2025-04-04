import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Results from "../pages/Results";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import Pricing from "../pages/Pricing"

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element= {<Contact/>}/>
        <Route path="/pricing" element= {<Pricing/>}/>


      </Routes>
    </Router>
  );
};

export default AppRouter;
