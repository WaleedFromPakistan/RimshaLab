"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation'; // ✅ fixed here
import Image from "next/image";

const heroCards = [
  {
    title: "State-of-the-Art Lab with Official Registration",
    description:
      "Rimsha Laboratories is a leading provider of advanced diagnostic services, equipped with cutting-edge medical technology to ensure precise and reliable testing. As a fully registered entity with the Punjab Healthcare Commission, we adhere to stringent regulatory standards, delivering accurate results that empower healthcare professionals to make informed clinical decisions with confidence.",
    image: "/imge4.png",
    img_style: "h-[300px] w-[880px]",
    buttons: [
      {
        text: "Our Services",
        style: "bg-[#3E4095] text-white font-bold hover:bg-black transition",
      },
      {
        text: "Contact Us",
        style: "bg-[#3E4095] text-white font-bold hover:bg-black transition",
      },
    ],
  },
  {
    title: "100% Accurate Results with Trusted Satisfaction",
    description:
      "Our diagnostic services are rooted in clinical excellence and a steadfast commitment to precision, delivering test results with uncompromising accuracy and reliability. Every procedure is performed under rigorous quality control measures and verified according to the Standard Operating Procedures (SOPs) established by the Punjab Healthcare Commission (PHC) and National Health Services (NHS), ensuring transparency, trust, and adherence to the highest standards of healthcare integrity.",
    image: "/imge3.png",
    img_style: "h-[300px] w-[950px] px-0",
    buttons: [
      {
        text: "Our Services",
        style: "bg-[#3E4095] text-white font-bold hover:bg-black transition",
        href: "/services",
      },
      {
        text: "Contact Us",
        style: "bg-[#3E4095] text-white font-bold hover:bg-black transition",
        href: "/contact_us",
      },
    ],
  },
  {
    title: "Book Your Sample or Reach Out Anytime",
    description:
      "Easily connect with our expert team to schedule your diagnostic tests or explore our wide range of healthcare services. We are committed to delivering timely, personalized, and dependable care through seamless communication and compassionate support at every stage of your healthcare journey.",
    image: "/imge5.png",
    img_style: "h-[350px] w-[780px] mt-[-35px]",
    buttons: [
      {
        text: "Our Services",
        style: "bg-[#3E4095] text-white font-bold hover:bg-black transition",
      },
      {
        text: "Contact Us",
        style: "bg-[#3E4095] text-white font-bold hover:bg-black transition",
      },
    ],
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter(); // ✅ correctly initialize router

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroCards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[550px] bg-gradient-to-r from-[#1c2b8f] to-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/imge2.jpg"
          alt="Lab background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Main content */}
      <div className="mx-auto px-6 py-16 flex flex-col-reverse md:flex-row h-[100%] items-center justify-between gap-10">
        <AnimatePresence mode="wait">
          {heroCards.map((card, i) =>
            i === index ? (
              <motion.div
                key={i}
                initial={{ x: i % 2 === 0 ? -150 : 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: i % 2 === 0 ? -150 : 150, opacity: 0 }}
                transition={{ duration: 0.9 }}
                className="bg-white bg-opacity-90 p-15 rounded-3xl flex justify-center h-full md:h-[400px] shadow-xl z-10"
              >
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2e50] mb-4">
                    {card.title}
                  </h1>
                  <p className="text-gray-600 text-base sm:text-lg mb-6">
                    {card.description}
                  </p>

                  <div className="flex justify-center gap-4 md:mt-20 flex-wrap">
                    <button
                      className={`rounded-full px-9 py-3 bg-[#3E4095] cursor-pointer text-white font-bold hover:bg-black transition`}
                      onClick={() => router.push('/our_services')}
                    >
                      Our Services
                    </button>
                    <button
                      className={`rounded-full px-9 py-3 bg-[#3E4095] cursor-pointer text-white font-bold hover:bg-black transition`}
                      onClick={() => router.push('/contact_us')}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src={card.image}
                    className={`hidden md:block ${card.img_style} px-2`}
                    alt="Hero card image"
                  />
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Placeholder for right-side image */}
        <div className="hidden md:block z-10"></div>
      </div>
    </div>
  );
};

export default Hero;
