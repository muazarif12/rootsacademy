import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Results from "../pages/Results";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import Pricing from "../pages/Pricing"
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import BiologyPage from "../components/BIologyPage";
import ChemistryPage from "../components/ChemistryPage";
import PhysicsPage from "../components/PhysicsPage";
import MathematicsPage from "../components/MathematicsPage";
import ComputerSciencePage from "../components/ComputerSciencePage";



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
        <Route path="/about" element= {<About/>}/>
        <Route path="/blogs" element= {<Blogs/>}/>


        {/* Subject routes - direct from dropdown */}
        <Route path="/biology" element={<BiologyPage />} />
        <Route path="/chemistry" element={<ChemistryPage />} />
        <Route path="/physics" element={<PhysicsPage />} />
        <Route path="/mathematics" element={<MathematicsPage />} />
        <Route path="/computer-science" element={<ComputerSciencePage />} />

        {/* Subject routes */}
        <Route path="/subjects/biology" element={<BiologyPage />} />




      </Routes>
    </Router>
  );
};

export default AppRouter;
