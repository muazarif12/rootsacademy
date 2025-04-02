import React from "react";

import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FDF9F6]">
      <div className="max-w-4xl mx-auto py-10 px-6">
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
};

export default Contact;
