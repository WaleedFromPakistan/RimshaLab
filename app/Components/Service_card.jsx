"use client";
import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";

const ServiceCard = ({ image, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <div className="group flex flex-col md:flex-row bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 mb-6 w-full">
        {/* Image */}
        <div className="w-full md:w-[320px] h-48 md:h-auto overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-4 sm:p-6 md:p-8 w-full">
          <div>
            {/* <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              Our Service
            </span> */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              {title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          <div className="mt-4 sm:mt-5">
            <button
              onClick={handleOpenModal}
              className="flex items-center gap-2 text-blue-600 font-semibold hover:underline transition"
            >
              Learn More <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-2xl w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl overflow-hidden relative shadow-lg p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X size={24} />
            </button>

            <div className="w-full aspect-video mb-4 rounded-md overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
              {title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
