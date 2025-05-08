import React from "react";
import ImagingService from '../Components/Service_card';
import AppointmentForm from "../Components/AppointmentForm";
const imagingServices = [
  {
    image: "/imge6.jpg",
    title: "Clinical Lab",
    description:
      "Our Clinical Lab offers comprehensive diagnostic testing, including blood, urine, and tissue analysis. Equipped with advanced technology and staffed by expert technologists, we ensure accurate, timely, and reliable results to support effective patient care and diagnosis.",
  },
  {
    image: "/imge8.jpg",
    title: "Digital X-rays",
    description:
      "Digital X-rays provide high-resolution images with reduced radiation exposure compared to traditional methods. They are essential for diagnosing fractures, infections, and abnormalities in bones and soft tissues, offering fast and efficient imaging solutions.",
  },
  {
    image: "/img7.jpg",
    title: "Ultrasound Imaging",
    description:
      "Ultrasound imaging uses sound waves to produce real-time visuals of internal organs, tissues, and blood flow. It is non-invasive, safe, and widely used for prenatal care, abdominal evaluations, and cardiovascular assessments.",
  },
];

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {imagingServices.map((service, index) => (
        <ImagingService key={index} {...service} />
      ))}
      <AppointmentForm/>
    </div>
    
  );
};

export default page;
