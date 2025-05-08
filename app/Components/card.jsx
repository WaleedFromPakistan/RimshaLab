// CardComponent.jsx
import React from "react";
import { clsx } from "clsx";

const CardComponent = ({ icon, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-white p-6 transition-all duration-500">
      <div className="absolute inset-0 bg-blue-900   z-0 origin-top scale-y-0 group-hover:scale-y-100  transition-transform duration-500 text-white ease-in-out-out" />
      
      <div className="relative z-10">
        <div className="mb-4 text-teal-500">{icon}</div>
        <h3 className="text-lg font-semibold group-hover:text-white text-gray-900">{title}</h3>
        <p className="text-gray-500 group-hover:text-white mb-4">{description}</p>
        
      </div>
    </div>
  );
};

export default CardComponent;
