import React from "react";

const page = () => {
  return (
    <div className="mx-auto px-4 py-16 h-[90%] max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
          About RIMSHA LAB
        </h2>
        <p className="text-lg md:text-lg text-gray-600 leading-relaxed mb-6">
          RIMSHA LAB is recognized as one of Lahore’s leading pathology
          laboratories, committed to delivering precise and high-quality
          diagnostic services. Guided by a culture of integrity,
          professionalism, and patient-centered care, the lab has established
          itself as a trusted name in clinical diagnostics. Our facility is
          staffed by experienced consultant pathologists and certified medical
          technologists who utilize advanced diagnostic technologies to ensure
          accurate and timely test results. Every process is designed to meet
          the highest standards of quality and reliability. RIMSHA LAB is
          registered with the Punjab Healthcare Commission and holds ISO
          certification (Reg No: R 15074) under the Quality Management
          System—reinforcing our dedication to continuous improvement, patient
          safety, and clinical excellence.
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-800">
          Center is registered from PHC Punjab Health Care Commission and is ISO 9001:2015 (Quality Management System) certified.
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2  w-full">
        <img
          src="/imge5.webp"
          alt="Rimsha Lab"
          className="w-full h-[550px] rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default page;
