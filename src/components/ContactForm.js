import React, { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Select from "react-select";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// Custom country code list with flags
const countryOptions = [
  { value: "+1", label: <CountryOption code="us" dialCode="+1" /> },
  { value: "+92", label: <CountryOption code="pk" dialCode="+92" /> },
  { value: "+44", label: <CountryOption code="gb" dialCode="+44" /> },
  { value: "+61", label: <CountryOption code="au" dialCode="+61" /> },
  { value: "+91", label: <CountryOption code="in" dialCode="+91" /> },
  { value: "+971", label: <CountryOption code="ae" dialCode="+971" /> },
  { value: "+33", label: <CountryOption code="fr" dialCode="+33" /> },
  { value: "+27", label: <CountryOption code="sa" dialCode="+27" /> },

];

// Function to render country flag with dialing code
function CountryOption({ code, dialCode }) {
  return (
    <div className="flex items-center">
      <img
        src={`https://flagcdn.com/w40/${code}.png`}
        alt={code}
        className="w-6 h-4 mr-2"
      />
      {dialCode}
    </div>
  );
}

const ContactForm = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCaptchaVerify = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the captcha!");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto my-10 p-8 rounded-lg shadow-lg">
      {/* Left Side: Contact Info */}
      <div className="md:w-1/2 px-5 py-3 rounded-lg ">
      <h1 className="text-[45px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal lg:pt-5">
      
          Contact Us
      </h1> 
      <p className="lg:text-[20px]  text-[#4d3e78] leading-[1.3] font-normal max-w-[40rem] mx-auto mt-5">
      We would love to speak with you. Feel free to reach out using the details below.
      </p>
        

        {/* Contact Details */}
        <h3 className="mt-6 text-2xl font-semibold  text-[#4d3e78]">Get in touch</h3>
        <div className="flex items-center mt-3 text-[#4d3e78] text-lg">
          <FaPhone className="mr-2 text-[#4D3E77]" />
          +92 3252549968
        </div>
        <div className="flex items-center mt-3 text-[#4d3e78] text-lg">
          <FaEnvelope className="mr-2 text-[#4D3E77]" />
          team@roots-academy.org
        </div>

        {/* Social Icons */}
        <div className="flex mt-6 space-x-5 ">
          <FaFacebook className="text-blue-600 text-3xl cursor-pointer hover:scale-105 transition duration-300" />
          <FaInstagram className="text-black text-3xl cursor-pointer hover:scale-105 transition duration-300" />
          <FaLinkedin className="text-blue-700 text-3xl cursor-pointer hover:scale-105 transition duration-300" />
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="md:w-1/2 p-5 rounded-lg shadow-md bg-white">
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label className="text-[#4D3E77] text-lg font-semibold">Student's Full Name</label>
          <div className="flex gap-4">
            <input type="text" placeholder="First Name" className="w-1/2 p-4 border rounded-md text-lg" required />
            <input type="text" placeholder="Last Name" className="w-1/2 p-4 border rounded-md text-lg" required />
          </div>

          {/* Email */}
          <label className="text-[#4D3E77] text-lg font-semibold mt-5 block">Email Address</label>
          <input type="email" placeholder="Email Address" className="w-full p-4 border rounded-md text-lg" required />

          {/* Mobile Number */}
          <label className="text-[#4D3E77] text-lg font-semibold mt-5 block">Mobile Number</label>
          <div className="flex items-center text-sm gap-1 text-[#4D3E77]">
            <Select
              options={countryOptions}
              value={selectedCountry}
              onChange={setSelectedCountry}
              placeholder="Select Country"
              className="w-12px"
              menuPortalTarget={document.body}
            />
            <input type="tel" placeholder="Mobile Number" className="w-2/3 p-4 border rounded-md text-md text-[#4D3E77]" required />
          </div>

          {/* Dropdown */}
          <label className="text-[#4D3E77] text-md font-semibold mt-5 block">Select</label>
          <select className="w-full p-2 border rounded-md text-md" required>
            <option value="">-Select-</option>
          </select>

          {/* Message */}
          <label className="text-[#4D3E77] text-lg font-semibold mt-5 block">Your Message</label>
          <textarea placeholder="Your Message" className="w-full p-4 border rounded-md h-28 text-lg text-[#4D3E77]" required></textarea>

          {/* hCaptcha */}
          <div className="mt-5 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg scale-[0.85] sm:scale-100 transition-all">
              <HCaptcha sitekey="your-hcaptcha-site-key" onVerify={handleCaptchaVerify} />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white text-xl font-semibold p-4 mt-5 rounded-[10px] bg-[#4D3E78] transition duration-300 hover:bg-[#3b2e5a] hover:scale-105"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
