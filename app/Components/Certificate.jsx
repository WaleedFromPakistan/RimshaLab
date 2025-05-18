"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificateData = [
  {
    id: 1,
    src: "/Certificates/cert1.png",
    alt: "Membership Certificate 2022",
  },
  {
    id: 2,
    src: "/Certificates/cert2.jpg",
    alt: "Membership Certificate 2021",
  },
  {
    id: 3,
    src: "/Certificates/cert3.png",
    alt: "Membership Certificate 2024",
  },
];

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
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

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-[#3E4095] mb-12">
        Our Membership Certificates
      </h2>

      <Slider {...settings}>
        {certificateData.map((cert) => (
          <div key={cert.id} className="px-2">
            <div
              className="flex items-center justify-center border-4 border-[#3E4095] rounded-xl shadow-md overflow-hidden bg-white h-[400px] w-full cursor-pointer"
              onClick={() => handleOpenModal(cert)}
            >
              <div className="relative w-[90%] h-full">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full relative p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            <div className="relative w-full aspect-[4/3] border-4 border-[#3E4095] rounded-lg">
              <Image
                src={selectedCert.src}
                alt={selectedCert.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-sm mt-4 text-gray-600 italic">
              {selectedCert.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
