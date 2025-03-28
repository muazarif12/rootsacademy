import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Results from "../pages/Results";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
