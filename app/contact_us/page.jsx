import React from "react";
import ContactUsForm from "../Components/ContactUsForm";

const Page = () => {
  return (
    <div>
      <div className="h-[600px] w-full bg-[url('/imge9.jpg')] bg-cover bg-center">
        {/* Optional overlay or heading */}
        <div className="h-full w-full bg-black/30 flex items-center justify-center text-white text-5xl font-bold">
          Contact Us
        </div>
      </div>
      <div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default Page;
