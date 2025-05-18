"use client";
import React from "react";

const QualityPolicy = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#3E4095] mb-8">
          Our Quality Policy
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 sm:p-10">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
            At <span className="font-semibold text-[#3E4095]">Rimsha Lab</span>, we are committed to delivering precise, timely, and reliable diagnostic services that meet the highest standards of quality and patient care. Our Quality Policy focuses on:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2 text-base sm:text-lg">
            <li>
              Maintaining strict internal quality control procedures for all laboratory tests.
            </li>
            <li>
              Ensuring all equipment and methodologies comply with national and international standards.
            </li>
            <li>
              Regular training and competency assessments for all laboratory staff.
            </li>
            <li>
              Continuous improvement through feedback, audits, and performance evaluations.
            </li>
            <li>
              Protecting patient confidentiality and ensuring accurate record-keeping at all stages.
            </li>
          </ul>
          <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
            Through our commitment to quality and innovation, we aim to enhance clinical outcomes and build lasting trust with patients, healthcare providers, and regulatory authorities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
