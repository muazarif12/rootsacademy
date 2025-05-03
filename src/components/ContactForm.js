import React, { useState } from "react";
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

// Subject options for dropdown
const subjectOptions = [
  { value: "admission", label: "Admission Inquiry" },
  { value: "course", label: "Course Information" },
  { value: "support", label: "Technical Support" },
  { value: "feedback", label: "Feedback" },
  { value: "other", label: "Other" }
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
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "",
    phoneNumber: "",
    subject: "",
    message: ""
  });
  
  // UI states
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[1]); // Default to Pakistan +92
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setFormData(prev => ({
      ...prev,
      phoneCode: selectedOption.value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Phone validation (basic)
    if (formData.phoneNumber && !/^[0-9\s-]{7,}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set phone code from selected country if not already set
    if (!formData.phoneCode && selectedCountry) {
      setFormData(prev => ({
        ...prev,
        phoneCode: selectedCountry.value
      }));
    }
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setSubmitStatus(null);
    
    try {
      // Prepare data for API
      const contactData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        contactNumber: `${formData.phoneCode || selectedCountry.value}${formData.phoneNumber}`,
        subject: formData.subject,
        message: formData.message
      };
      
      const response = await fetch(`${API_URL}/contact_form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Message sent successfully!'
        });
        
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneCode: selectedCountry.value,
          phoneNumber: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto my-10 p-8 rounded-lg shadow-lg">
      {/* Left Side: Contact Info */}
      <div className="md:w-1/2 px-5 py-3 rounded-lg ">
        <h1 className="text-[45px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal lg:pt-5">
          Contact Us
        </h1> 
        <p className="lg:text-[20px] text-[#4d3e78] leading-[1.3] font-normal max-w-[40rem] mx-auto mt-5">
          We would love to speak with you. Feel free to reach out using the details below.
        </p>
        
        {/* Contact Details */}
        <h3 className="mt-6 text-2xl font-semibold text-[#4d3e78]">Get in touch</h3>
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
        {/* Status Message */}
        {submitStatus && (
          <div 
            className={`mb-4 p-4 rounded-lg ${
              submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {submitStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label className="text-[#4D3E77] text-lg font-semibold">Student's Full Name</label>
          <div className="flex gap-4">
            <div className="w-1/2">
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name" 
                className={`w-full p-4 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md text-lg`} 
                required 
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div className="w-1/2">
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name" 
                className={`w-full p-4 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md text-lg`} 
                required 
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email */}
          <label className="text-[#4D3E77] text-lg font-semibold mt-5 block">Email Address</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address" 
            className={`w-full p-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md text-lg`} 
            required 
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

          {/* Mobile Number */}
          <label className="text-[#4D3E77] text-lg font-semibold mt-5 block">Mobile Number</label>
          <div className="flex items-center text-sm gap-1 text-[#4D3E77]">
            <Select
              options={countryOptions}
              value={selectedCountry}
              onChange={handleCountryChange}
              className="w-32"
              menuPortalTarget={document.body}
            />
            <div className="flex-1">
              <input 
                type="tel" 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Mobile Number" 
                className={`w-full p-4 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md text-md text-[#4D3E77]`} 
                required 
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>
          </div>

          {/* Subject Dropdown */}
          <label className="text-[#4D3E77] text-lg font-semibold mt-5 block">Subject</label>
          <select 
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full p-4 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md text-md`} 
            required
          >
            <option value="">-Select a subject-</option>
            {subjectOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}

          {/* Message */}
          <label className="text-[#4D3E77] text-lg font-semibold mt-5 block">Your Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message" 
            className={`w-full p-4 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md h-28 text-lg text-[#4D3E77]`} 
            required
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white text-xl font-semibold p-4 mt-5 rounded-[10px] ${
              loading ? 'bg-gray-500' : 'bg-[#4D3E78] hover:bg-[#3b2e5a] hover:scale-105'
            } transition duration-300 flex items-center justify-center`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : 'Submit Form'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;