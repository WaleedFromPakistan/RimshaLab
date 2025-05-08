// Services.jsx
import React from "react";
import CardComponent from "@/app/Components/card";
import { FlaskConical, Beaker, Microscope, TestTube } from "lucide-react";

const Services = () => {
  const cards = [
    {
      icon: <FlaskConical size={40} />,
      title: "Clinical Microbiology Tests",
      description: "Identifies bacteria, viruses, fungi, and parasites causing infections through cultures, stains, and sensitivity testing. Helps guide targeted treatment by determining the most effective antibiotics or antifungal agents."
    },
    {
      icon: <Beaker size={40} />,
      title: "Immunopathology",
      description: " Evaluation of immune system function to identify autoimmune disorders, allergies, and immune deficiencies. Tests include ANA, rheumatoid factor, and allergy panels.."
    },
    {
      icon: <TestTube size={40} />,
      title: "Clinical Histopatology Tests",
      description: "Examination of tissue samples under a microscope to detect abnormalities such as cancer, inflammation, or infection. Essential for diagnosing diseases through biopsy and surgical specimens."
    },
    {
        icon: <Microscope size={40} />,
        title: "Clinical Chemistry",
        description: "Testing of blood and body fluids to assess organ function and detect metabolic imbalances. Includes glucose levels, liver function, kidney profiles, and electrolytes."
      }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-teal-500 font-medium uppercase tracking-wide">Laboratory Services</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Reliable & High-Quality <br className="hidden sm:block" /> Laboratory Service
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Services;
