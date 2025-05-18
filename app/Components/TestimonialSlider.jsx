"use client";
import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Muhammad Waleed",
    comment: "Rimsha Lab provides top-notch services that truly stand out.",
    rating: 5,
  },
   {
    name: "Qaveem Raza",
    comment: "Good services",
    rating: 4,
  },
  {
    name: "Abdul Hanan",
    comment: "Very time-efficient lab.",
    rating: 5,
  },
  {
    name: "Wardah Mumtaz",
    comment: "Quick, efficient and reliable. Highly recommended.",
    rating: 4,
  },
  {
    name: "Munira Farhan",
    comment: "Rimsha lab an excellent lab performing all tests at affordable prices",
    rating: 4,
  },
  {
    name: "Irfan Bhatti",
    comment: "Staff was polite and guided me properly through the entire process. I’ll surely visit again if needed.",
    rating: 4.5,
  },
];

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }
  return <div className="flex justify-center gap-1 mt-2">{stars}</div>;
};

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
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
              {renderStars(item.rating)}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
