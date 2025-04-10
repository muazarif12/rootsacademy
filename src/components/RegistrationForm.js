import React, { useState } from "react";
import underline_design from "../assets/images/underline_design.png";

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

    <div className="max-w-6xl w-full mx-auto py-10 px-6 bg-[#F2F3F8]">
      <h2 className="text-3xl font-semibold text-center mb-16 font-['Inter_Tight']">Student Registration Form</h2>

      
      <div className="mb-6">
        <p className="font-medium font-['Inter_Tight'] mb-10"><span className="text-red-500">*</span> indicates required fields</p>

        {/* Step indicators */}
        {/* Step indicators */}
        <div className="flex space-x-10 mb-8">
          <div className={`flex items-center space-x-2 ${step >= 1 ? "font-bold" : "font-['Inter_Tight']"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${step >= 1 ? "bg-[#B9BECA]" : ""}`}>
              {step >= 2 ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                "1"
              )}
            </div>
            <span>Step "A"</span>
          </div>
          <div className={`flex items-center space-x-2 ${step === 2 ? "font-bold" : "font-['Inter_Tight']"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${step === 2 ? "bg-[#B9BECA]" : ""}`}>2</div>
            <span>Step "B"</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="block space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
            {/* Student Info Fields */}
            <div>
              <label className="block font-semibold font-['Inter_Tight']" >First Name <span className="text-red-500">*</span></label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-1 mt-2 font-['Inter_Tight']" />
            </div>
            <div>
              <label className="block font-semibold font-['Inter_Tight']">Last Name <span className="text-red-500">*</span>  </label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-1 mt-2 font-['Inter_Tight']" />
            </div>
            <div>
              <label className="pt-6 block font-semibold font-['Inter_Tight']">Country Of Residence <span className="text-red-500">*</span></label>
              <input type="text" name="countryOfResidence" value={formData.countryOfResidence} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-1  mt-2 font-['Inter_Tight']" />
            </div>
            <div>
              <label className="pt-6 block font-semibold font-['Inter_Tight']">School / College Name <span className="text-red-500">*</span></label>
              <input type="text" name="schoolName" value={formData.schoolName} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-1 mt-2 font-['Inter_Tight']" />
            </div>
            <div>
              <label className="pt-6 block font-semibold font-['Inter_Tight']">Appearing for CAIE Examination <span className="text-red-500">*</span></label>
              <select name="caieExam" value={formData.caieExam} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-[0.535rem] mt-2 font-['Inter_Tight']">
                <option value="">-Please Select-</option>
                <option value="O Level">O Level</option>
                <option value="A Level">A Level</option>
              </select>
            </div>
            <div>
              <label className="pt-6 block font-semibold font-['Inter_Tight']">Enrolling for <span className="text-red-500">*</span></label>
              <select name="enrollingFor" value={formData.enrollingFor} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-[0.535rem] mt-2 font-['Inter_Tight']">
                <option value="">-Please Select-</option>
                <option value="2025">May/June 2025</option>
                <option value="2025-nov">Oct/Nov 2025</option>
              </select>
            </div>
            <div className="col-span-2 mt-6">
              <label className="pt-6 block mb-1 font-semibold font-['Inter_Tight']">Subjects <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 font-medium font-['Inter_Tight']">
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
                  <label key={subject}>
                    <input type="checkbox" name="subjects" value={subject} onChange={handleInputChange} /> {subject}
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <label className="pt-6 block font-semibold font-['Inter_Tight']">Student's Contact Number <span className="text-red-500">*</span></label>
              <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-1 mt-2 font-['Inter_Tight']" />
            </div>
            <div className="mt-6">
              <label className="pt-6 block font-semibold font-['Inter_Tight']">Student's Email Address <span className="text-red-500">*</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-1 mt-2 font-['Inter_Tight']" />
            </div>
            <div className="mt-6">
              <label className="pt-6 block font-semibold font-['Inter_Tight']">City <span className="text-red-500">*</span></label>
              <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-1 mt-2 font-['Inter_Tight']" />
            </div>
            <div className="mt-6">
              <label className="pt-6 block font-semibold font-['Inter_Tight']">Country <span className="text-red-500">*</span></label>
              <input type="text" name="country" value={formData.country} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-1 mt-2 font-['Inter_Tight']" />
            </div>
            <div className="col-span-2 mt-6">
              <label className="pt-6 block mb-1 font-semibold font-['Inter_Tight']">Preferred Teaching Language</label>
              <label>
                <input type="checkbox" name="teachingLanguage" value="Urdu" onChange={handleInputChange} /> Urdu
              </label>
              <label className="ml-6">
                <input type="checkbox" name="teachingLanguage" value="English" onChange={handleInputChange} /> English
              </label>
              <p className="text-xs mt-1 font-medium font-['Inter_Tight']">
                You can select both.
              </p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="block space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
            <div>
              <label className="block block font-semibold font-['Inter_Tight']">Relationship with Student <span className="text-red-500">*</span></label>
              <select name="guardianRelation" value={formData.guardianRelation} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-[0.535rem] mt-2 font-['Inter_Tight']">
                <option value="">-Please Select-</option>
                <option value="Parent">Parent</option>
                <option value="Sibling">Sibling</option>
                <option value="Guardian">Guardian</option>
              </select>
            </div>
            <div>
              <label className="block block font-semibold font-['Inter_Tight']">Guardian's Full Name <span className="text-red-500">*</span></label>
              <input type="text" name="guardianName" value={formData.guardianName} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-1 mt-2 font-['Inter_Tight']" />
            </div>
            <div>
              <label className="pt-6 block block font-semibold font-['Inter_Tight']">Phone <span className="text-red-500">*</span></label>
              <input type="text" name="guardianPhone" value={formData.guardianPhone} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-1 mt-2 font-['Inter_Tight']" />
            </div>
            <div>
              <label className="pt-6 block block font-semibold font-['Inter_Tight']">Email <span className="text-red-500">*</span></label>
              <input type="email" name="guardianEmail" value={formData.guardianEmail} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-1 mt-2 font-['Inter_Tight']" />
            </div>
            <div className="col-span-2">
              <label className="pt-6 block block font-semibold font-['Inter_Tight']">How did you get to know about us? <span className="text-red-500">*</span></label>
              <select name="referralSource" value={formData.referralSource} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-[0.565rem] mt-2 font-['Inter_Tight']">
                <option value="">-Please Select-</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Friend">Friend</option>
                <option value="School">School</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="pt-6 block block font-semibold font-['Inter_Tight']">Referral Code <span className="text-sm text-gray-500">(if any)</span></label>
              <input type="text" name="referralCode" value={formData.referralCode} onChange={handleInputChange} className="w-full border-b border-[#6B5CA5] bg-transparent focus:outline-none focus:border-[#6B5CA5] placeholder:text-sm pt-1 mt-2 font-['Inter_Tight']" />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-start mt-10 gap-4">
          {step === 2 && (
            <button type="button" onClick={handlePrevious} className="px-8 py-3 bg-gray-300 rounded-full shadow text-sm font-semibold text-gray-600">
              Previous
            </button>
          )}
          {step === 1 ? (
            <button type="button" onClick={handleNext} className=" px-8 py-3 bg-[#4B3676] text-white rounded-full shadow text-sm font-semibold">
              Next
            </button>
          ) : (
            <button type="submit" className="px-8 py-3 bg-[#4B3676] text-white rounded-full shadow text-sm font-semibold">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
