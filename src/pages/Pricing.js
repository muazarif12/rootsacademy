import React from "react";

import Footer from "../components/Footer";
import PricingPlans from "../components/Pricingplans";
const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FDF9F6]">
      <div className="max-w-4xl mx-auto py-10 px-6">
        <PricingPlans />
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
};

export default Contact;
