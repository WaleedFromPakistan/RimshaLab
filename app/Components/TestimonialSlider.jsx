"use client"
import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Muhammad Waleed",
    comment: "Rimsha Lab provides top-notch services that truly stand out.",
  },
  {
    name: "Wardah Mumtaz",
    comment: "Quick, efficient and reliable. Highly recommended.",
  },
 
  {
    name: "Irfan Bhatti",
    comment: "Staff was polite and guided me properly through the entire process. I’ll surely visit again if needed.",
  },

];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // screens smaller than 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // screens smaller than 640px (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-[#3E4095] mb-10">
        What Our Patients Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="p-6">
            <div className="bg-white border w-full border-gray-200 rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-[#3E4095] mb-3">{item.name}</h3>
              <p className="text-gray-700 italic leading-relaxed">
                “{item.comment}”
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
