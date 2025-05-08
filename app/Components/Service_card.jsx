import React from "react";

const Service_card = ({ image, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden mb-8 transition hover:shadow-lg">
      {/* Image with consistent aspect ratio */}
      <div className="w-full md:w-[300px] aspect-[4/3] md:aspect-auto overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Service_card;
