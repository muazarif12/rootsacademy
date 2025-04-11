import React, { useState } from "react";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryOfResidence: "",
    schoolName: "",
    caieExam: "",
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
  };

  const handleNext = () => {
    if (step === 1) setStep(2);
  };

  const handlePrevious = () => {
    if (step === 2) setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add API call or action here
  };

  return (
    <div className="max-w-6xl w-full mx-auto py-10 px-6 bg-[#FDF9F6] lg:rounded-lg lg:shadow-lg">

      <h2 className="text-3xl font-semibold text-center mb-16 font-['Inter_Tight'] text-[#4B3676]">
        Student Registration Form
      </h2>

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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200"
                placeholder="Enter your first name"
              />
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200"
                placeholder="Enter your last name"
              />
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200"
                placeholder="Enter your country"
              />
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200"
                placeholder="Enter your school name"
              />
            </div>
            <div className="relative">
              <label className="block font-semibold font-['Inter_Tight'] text-gray-700 mb-1">
                Appearing for CAIE Examination <span className="text-red-500">*</span>
              </label>
              <select
                name="caieExam"
                value={formData.caieExam}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
              >
                <option value="">-Please Select-</option>
                <option value="O Level">O Level</option>
                <option value="A Level">A Level</option>
              </select>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
              >
                <option value="">-Please Select-</option>
                <option value="2025">May/June 2025</option>
                <option value="2025-nov">Oct/Nov 2025</option>
              </select>
            </div>
            <div className="col-span-2 mt-6">
              <label className="block mb-3 font-semibold font-['Inter_Tight'] text-gray-700">
                Subjects <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-medium font-['Inter_Tight']">
                {[
                  "Physics (0625)",
                  "Chemistry (0620)",
                  "Mathematics (0580)",
                  "English (0500/0511)",
                  "ICT/CS (0420/0478)",
                  "Biology (0610)",
                  "Add Mathematics (0606)",
                  "Accounts (0452)",
                  "Business Studies (0450)",
                  "Economics (0455)",
                ].map((subject) => (
                  <label key={subject} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="subjects"
                      value={subject}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-[#6B5CA5] rounded border-gray-300 focus:ring-[#6B5CA5]"
                    />
                    <span className="text-gray-700">{subject}</span>
                  </label>
                ))}
              </div>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200"
                placeholder="+92 300 1234567"
              />
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200"
                placeholder="student@example.com"
              />
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200"
                placeholder="Enter your city"
              />
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200"
                placeholder="Enter your country"
              />
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
              <select
                name="guardianRelation"
                value={formData.guardianRelation}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
              >
                <option value="">-Please Select-</option>
                <option value="Parent">Parent</option>
                <option value="Sibling">Sibling</option>
                <option value="Guardian">Guardian</option>
              </select>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200"
                placeholder="Enter guardian's name"
              />
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200"
                placeholder="+92 300 1234567"
              />
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent transition-all duration-200"
                placeholder="guardian@example.com"
              />
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B5CA5] focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
              >
                <option value="">-Please Select-</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Friend">Friend</option>
                <option value="School">School</option>
              </select>
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
              className="px-8 py-3 bg-[#4B3676] hover:bg-[#3A2A5F] text-white rounded-full shadow text-sm font-semibold transition-colors duration-200"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;