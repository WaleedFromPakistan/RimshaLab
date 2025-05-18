"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactUsForm = () => {
  const formRef = useRef(null);
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    const formData = {
      form_type: "Contact Form",
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      // Send email to Owner
      await emailjs.send(
        "service_gzi563d",
        "template_vjyxc4o",
        {
          ...formData,
          to_email: "laboratoryrimsha@gmail.com",
        },
        "-LaPCf-Pi7u3oQKrq"
      );

      // Send confirmation email to Customer
      await emailjs.send(
        "service_gzi563d",
        "template_2ob8xqp",
        {
          ...formData,
          to_email: formData.email,
          subject: "Thank you for contacting us!",
        },
        "-LaPCf-Pi7u3oQKrq"
      );

      // Show popup and reset form
      setPopup(true);
      form.reset();
      setTimeout(() => setPopup(false), 3000);
    } catch (error) {
      console.error("EMAIL SENDING FAILED:", error);
      alert("Something went wrong while sending. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 relative">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Contact Us
      </h2>

      <form ref={formRef} onSubmit={sendEmail} className="grid gap-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full border-b border-gray-300 focus:outline-none focus:border-[#3E4095] py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full border-b border-gray-300 focus:outline-none focus:border-[#3E4095] py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="03XX-XXXXXXX"
            required
            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#3E4095] py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Let us know how we can help you"
            required
            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#3E4095] py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#3E4095] py-2 resize-none"
          ></textarea>
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#3E4095] ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#2d3075]"
            } transition duration-200 text-white font-semibold px-8 py-3 rounded-lg shadow-md`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          <p className="text-sm text-gray-500 mt-2">
            A confirmation email will be sent after submission.
          </p>
        </div>
      </form>

      {/* Success Popup */}
      {popup && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg text-sm">
          Your message has been sent successfully!
        </div>
      )}
    </div>
  );
};

export default ContactUsForm;
