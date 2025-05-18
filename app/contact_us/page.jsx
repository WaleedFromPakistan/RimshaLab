import React from "react";
import ContactUsForm from "../Components/ContactUsForm";

const Page = () => {
  return (
    <div>
      <div className="h-[500px] w-full bg-[url('/imge9.jpg')] bg-cover bg-center">
        {/* Optional overlay or heading */}
        <div className="h-full w-full bg-black/30 flex items-center justify-center text-white text-5xl font-bold">
          Contact Us
        </div>
      </div>
      <div className="h-[8px] w-full bg-blue-900"></div>

      <div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default Page;
