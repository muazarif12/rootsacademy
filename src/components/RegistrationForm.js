import React, { useState } from "react";

const RegistrationForm = () => {
  const [tab, setTab] = useState("oLevel"); // oLevel, aLevel, igcse
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryOfResidence: "",
    schoolName: "",
    curriculum: "oLevel", // Default curriculum
    enrollingFor: "",
    subjects: [],
    contactNumber: "",
    email: "",
    city: "",
    country: "",
    teachingLanguage: [],
    guardianRelation: "",
    guardianName: "",
    guardianPhone: "",
    guardianEmail: "",
    referralSource: "",
    referralCode: "",
  });
  const [errors, setErrors] = useState({});

  // Subject lists by curriculum
  const subjectsByCurriculum = {
    oLevel: [
      "Physics (5054)",
      "Chemistry (5070)",
      "Mathematics (4024)",
      "English (1123)",
      "ComputerScience (2210)",
      "Biology (5090)",
      "Additional Mathematics (4037)",
      "Accounts (7707)",
      "Business Studies (7115)",
      "Economics (2281)",
    ],
    aLevel: {
      AS: [
        "Physics AS (9702)",
        "Chemistry AS (9701)",
        "Mathematics AS (9709)",
        "Biology AS (9700)",
        "English (9093)",
        "Computer Science AS (9608)",
        "Accounts (9706)",
        "Economics AS (9708)",
        "Business Studies (9707)"
      ],
      A2: [
        "Physics A2 (9702)",
        "Chemistry A2 (9701)",
        "Mathematics A2 (9709)",
        "English (9093)",
        "Biology A2 (9700)",
        "Computer Science A2 (9618)",
        "Economics A2 (9708)",
        "Business A2 (9609)",
        "Accounting A2 (9706)",
      ]
    },
    igcse: [
      "Physics (0625)",
      "Chemistry (0620)",
      "Mathematics (0580)",
      "English (0500/0511)",
      "ICT (0417)",
      "ComputerScience (0478)",
      "Biology (0610)",
      "Additional Mathematics (0606)",
      "Accounts (0452)",
      "Business Studies (0450)",
      "Economics (0455)"
    ],
  };

  const guardianRelationOptions = [
    { value: "", text: "-Please Select-" },
    { value: "Parent", text: "Parent" },
    { value: "Sibling", text: "Sibling" },
    { value: "Guardian", text: "Guardian" }
  ];

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const handleTabChange = (selectedTab) => {
    setTab(selectedTab);
    // Reset to step 1 when changing tabs
    setStep(1);
    // Reset the entire form when changing tabs
    setFormData({
      firstName: "",
      lastName: "",
      countryOfResidence: "",
      schoolName: "",
      curriculum: selectedTab,
      enrollingFor: "",
      subjects: [],
      contactNumber: "",
      email: "",
      city: "",
      country: "",
      teachingLanguage: [],
      guardianRelation: "",
      guardianName: "",
      guardianPhone: "",
      guardianEmail: "",
      referralSource: "",
      referralCode: "",
    });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        if (name === "subjects" || name === "teachingLanguage") {
          const updatedList = checked
            ? [...prev[name], value]
            : prev[name].filter((item) => item !== value);
          return { ...prev, [name]: updatedList };
        }
        return { ...prev, [name]: checked };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    const requiredFields = [
      'firstName', 'lastName', 'countryOfResidence', 'schoolName', 
      'enrollingFor', 'contactNumber', 'email', 'city', 'country'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone number validation (basic)
    if (formData.contactNumber && !/^[+\d][\d\s-]{7,}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid phone number';
    }

    // Subjects validation
    if (formData.subjects.length === 0) {
      newErrors.subjects = 'Please select at least one subject';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    const requiredFields = [
      'guardianRelation', 'guardianName', 'guardianPhone', 
      'guardianEmail', 'referralSource'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    if (formData.guardianEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.guardianEmail)) {
      newErrors.guardianEmail = 'Please enter a valid email address';
    }

    // Phone number validation (basic)
    if (formData.guardianPhone && !/^[+\d][\d\s-]{7,}$/.test(formData.guardianPhone)) {
      newErrors.guardianPhone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handlePrevious = () => {
    if (step === 2) setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep2()) {
      setLoading(true);
      setSubmitStatus(null);
      
      try {
        const response = await fetch(`${API_URL}/register_student`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          setSubmitStatus({
            type: 'success',
            message: data.message || 'Registration successful!'
          });
          
          // Reset form after successful submission
          setFormData({
            firstName: "",
            lastName: "",
            countryOfResidence: "",
            schoolName: "",
            curriculum: tab,
            enrollingFor: "",
            subjects: [],
            contactNumber: "",
            email: "",
            city: "",
            country: "",
            teachingLanguage: [],
            guardianRelation: "",
            guardianName: "",
            guardianPhone: "",
            guardianEmail: "",
            referralSource: "",
            referralCode: "",
          });
          setStep(1);
        } else {
          setSubmitStatus({
            type: 'error',
            message: data.message || 'Registration failed. Please try again.'
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
    }
  };

  // Custom select handler for guardianRelation to prevent popup issues
  const handleGuardianRelationChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, guardianRelation: value }));
    
    // Clear error if it exists
    if (errors.guardianRelation) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors.guardianRelation;
        return newErrors;
      });
    }
  };

  return (
    <div className="max-w-6xl w-full mx-auto py-10 px-6 bg-[#FDF9F6] lg:rounded-lg lg:shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-8 font-['Inter_Tight'] text-[#4B3676]">
        Student Registration Form
      </h2>

      {/* Status Message */}
      {submitStatus && (
        <div className={`mb-6 p-4 rounded-lg ${
          submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}

      {/* Curriculum Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => handleTabChange("oLevel")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              tab === "oLevel"
                ? "bg-[#4B3676] text-white shadow-md"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            O Level
          </button>
          <button
            onClick={() => handleTabChange("aLevel")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              tab === "aLevel"
                ? "bg-[#4B3676] text-white shadow-md"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            A Level
          </button>
          <button
            onClick={() => handleTabChange("igcse")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              tab === "igcse"
                ? "bg-[#4B3676] text-white shadow-md"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            IGCSE
          </button>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-medium font-['Inter_Tight'] mb-10 text-gray-600">
          <span className="text-red-500">*</span> indicates required fields
        </p>

        {/* Step indicators */}
        <div className="flex space-x-10 mb-8">
          <div className={`flex items-center space-x-2 ${step >= 1 ? "font-bold" : "font-['Inter_Tight']"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? "border-[#4B3676] bg-[#4B3676] text-white" : "border-gray-300"}`}>
              {step >= 2 ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                "1"
              )}
            </div>
            <span className={step >= 1 ? "text-[#4B3676]" : "text-gray-500"}>Step "A"</span>
          </div>
          <div className={`flex items-center space-x-2 ${step === 2 ? "font-bold" : "font-['Inter_Tight']"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 2 ? "border-[#4B3676] bg-[#4B3676] text-white" : "border-gray-300"}`}>2</div>
            <span className={step === 2 ? "text-[#4B3676]" : "text-gray-500"}>Step "B"</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="block space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            {/* Student Info Fields */}
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200`}
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200`}
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                Country Of Residence <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="countryOfResidence"
                value={formData.countryOfResidence}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border ${errors.countryOfResidence ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200`}
                placeholder="Enter your country"
              />
              {errors.countryOfResidence && <p className="text-red-500 text-xs mt-1">{errors.countryOfResidence}</p>}
            </div>
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                School / College Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border ${errors.schoolName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200`}
                placeholder="Enter your school name"
              />
              {errors.schoolName && <p className="text-red-500 text-xs mt-1">{errors.schoolName}</p>}
            </div>
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                Enrolling for <span className="text-red-500">*</span>
              </label>
              <select
                name="enrollingFor"
                value={formData.enrollingFor}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border ${errors.enrollingFor ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]`}
              >
                <option value="">-Please Select-</option>
                <option value="2025">May/June 2025</option>
                <option value="2025-nov">Oct/Nov 2025</option>
              </select>
              {errors.enrollingFor && <p className="text-red-500 text-xs mt-1">{errors.enrollingFor}</p>}
            </div>
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                Student's Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200`}
                placeholder="+92 300 1234567"
              />
              {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
            </div>
            <div className="col-span-2 mt-6">
              <label className="block mb-3 font-semibold font-['Inter_Tight'] text-gray-700">
                Subjects <span className="text-red-500">*</span>
              </label>
              {errors.subjects && <p className="text-red-500 text-xs mb-2">{errors.subjects}</p>}
              
              {tab === "aLevel" ? (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4B3676] font-['Inter_Tight']">AS Level</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-medium font-['Inter_Tight'] mb-8">
                    {subjectsByCurriculum.aLevel.AS.map((subject) => (
                      <label key={subject} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="subjects"
                          value={subject}
                          checked={formData.subjects.includes(subject)}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-[#6B5CA5] rounded border-gray-300 focus:ring-[#6B5CA5]"
                        />
                        <span className="text-gray-700">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-medium font-['Inter_Tight']">
                  {subjectsByCurriculum[tab].map((subject) => (
                    <label key={subject} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="subjects"
                        value={subject}
                        checked={formData.subjects.includes(subject)}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-[#6B5CA5] rounded border-gray-300 focus:ring-[#6B5CA5]"
                      />
                      <span className="text-gray-700">{subject}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                Student's Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200`}
                placeholder="student@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200`}
                placeholder="Enter your city"
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200`}
                placeholder="Enter your country"
              />
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </div>
            <div className="col-span-2">
              <label className="block mb-3 font-semibold font-['Inter_Tight'] text-gray-700">
                Preferred Teaching Language
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="teachingLanguage"
                    value="Urdu"
                    checked={formData.teachingLanguage.includes("Urdu")}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-[#6B5CA5] rounded border-gray-300 focus:ring-[#6B5CA5]"
                  />
                  <span className="text-gray-700">Urdu</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="teachingLanguage"
                    value="English"
                    checked={formData.teachingLanguage.includes("English")}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-[#6B5CA5] rounded border-gray-300 focus:ring-[#6B5CA5]"
                  />
                  <span className="text-gray-700">English</span>
                </label>
              </div>
              <p className="text-xs mt-2 text-gray-500 font-['Inter_Tight']">
                You can select both.
              </p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="block space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                Relationship with Student <span className="text-red-500">*</span>
              </label>
              {/* Modified dropdown to use regular HTML elements instead of the select element */}
              <div className="relative">
                <select
                  name="guardianRelation"
                  value={formData.guardianRelation}
                  onChange={handleGuardianRelationChange}
                  required
                  className={`w-full px-4 py-2 border ${errors.guardianRelation ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200 appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]`}
                >
                  {guardianRelationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
              {errors.guardianRelation && <p className="text-red-500 text-xs mt-1">{errors.guardianRelation}</p>}
            </div>
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                Guardian's Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border ${errors.guardianName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200`}
                placeholder="Enter guardian's name"
              />
              {errors.guardianName && <p className="text-red-500 text-xs mt-1">{errors.guardianName}</p>}
            </div>
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="guardianPhone"
                value={formData.guardianPhone}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border ${errors.guardianPhone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200`}
                placeholder="+92 300 1234567"
              />
              {errors.guardianPhone && <p className="text-red-500 text-xs mt-1">{errors.guardianPhone}</p>}
            </div>
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="guardianEmail"
                value={formData.guardianEmail}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border ${errors.guardianEmail ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200`}
                placeholder="guardian@example.com"
              />
              {errors.guardianEmail && <p className="text-red-500 text-xs mt-1">{errors.guardianEmail}</p>}
            </div>
            <div className="col-span-2 relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                How did you get to know about us? <span className="text-red-500">*</span>
              </label>
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border ${errors.referralSource ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]`}
              >
                <option value="">-Please Select-</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Friend">Friend</option>
                <option value="School">School</option>
              </select>
              {errors.referralSource && <p className="text-red-500 text-xs mt-1">{errors.referralSource}</p>}
            </div>
            <div className="col-span-2 relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                Referral Code <span className="text-sm text-gray-500">(if any)</span>
              </label>
              <input
                type="text"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200"
                placeholder="Enter referral code"
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-start mt-16 gap-4">
          {step === 2 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="px-8 py-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow text-sm font-semibold text-gray-700 transition-colors duration-200"
            >
              Previous
            </button>
          )}
          {step === 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3 bg-[#4B3676] hover:bg-[#3A2A5F] text-white rounded-full shadow text-sm font-semibold transition-colors duration-200"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-3 ${
                loading ? 'bg-gray-500' : 'bg-[#4B3676] hover:bg-[#3A2A5F]'
              } text-white rounded-full shadow text-sm font-semibold transition-colors duration-200 flex items-center`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : 'Submit'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;