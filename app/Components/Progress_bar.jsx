"use client";
import React, { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Accurate Clinical Diagnosis", value: 96 },
  { label: "Patient Satisfaction Rate", value: 95 },
  { label: "Timely Report Delivery", value: 90 },
  { label: "ISO Lab Accreditation Score", value: 92 },
];

const Progress_bar = () => {
  const [filled, setFilled] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.disconnect(); // Stop observing after trigger
        }
      },
      { threshold: 0.9 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-blue-900 text-white my-2 py-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center"
    >
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-5xl font-extrabold mb-2">{stat.value}%</div>
          <div className="text-lg font-medium mb-4">{stat.label}</div>
          <div className="w-full h-3 bg-blue-400 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-1000 ease-in-out"
              style={{ width: filled ? `${stat.value}%` : "0%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progress_bar;
