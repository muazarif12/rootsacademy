import React from "react";

import Footer from "../components/Footer";
import PricingPlans from "../components/Pricingplans";
import PricingHeading from "../components/PricingHeading";
import PricingFeaturesSection from "../components/PricingFeaturesSection";
import GuaranteeSection from "../components/GuaranteeSection";
const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FDF9F6]">
      <div className="max-w-6xl mx-auto py-10 px-6">
        <PricingHeading />
        <PricingPlans />
        <PricingFeaturesSection />
        <GuaranteeSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
};

export default Contact;
