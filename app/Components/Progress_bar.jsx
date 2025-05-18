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
  const [currentValues, setCurrentValues] = useState(stats.map(() => 0));
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.7 }
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

  const animateCounters = () => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1000; // total time in ms
      const steps = 30;
      const increment = end / steps;
      const intervalTime = duration / steps;

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }

        setCurrentValues((prev) => {
          const updated = [...prev];
          updated[i] = Math.round(start);
          return updated;
        });
      }, intervalTime);
    });
  };

  return (
    <section
      ref={containerRef}
      className="bg-blue-900 text-white py-16 px-4 sm:px-8 lg:px-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-4xl sm:text-5xl font-extrabold text-white mb-1 drop-shadow-md transition-all duration-1000 ease-in-out">
              {filled ? `${currentValues[index]}%` : "0%"}
            </div>
            <p className="text-base sm:text-lg font-medium mb-4 text-blue-100">
              {stat.label}
            </p>

            <div className="w-full max-w-[200px] h-3 bg-blue-300 rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full bg-green-500 rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: filled ? `${stat.value}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Progress_bar;
