import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import Footer from "../components/Footer";
const Register = () => {
  return (
    <div className="min-h-screen bg-[#F2F3F8]">
      <div className="max-w-6xl mx-auto py-10 px-6">
        <RegistrationForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
};

export default Register;
