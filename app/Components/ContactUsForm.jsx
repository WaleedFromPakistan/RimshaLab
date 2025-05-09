"use client";
import React from "react";

const ContactUsForm = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Contact Us
      </h2>

      <form className="grid gap-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#3E4095] font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E4095]"
            />
          </div>

          <div>
            <label className="block text-[#3E4095] font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E4095]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#3E4095] font-semibold mb-2">Phone</label>
          <input
            type="tel"
            placeholder="e.g. 03XX-XXXXXXX"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E4095]"
          />
        </div>

        <div>
          <label className="block text-[#3E4095] font-semibold mb-2">Subject</label>
          <input
            type="text"
            placeholder="Let us know how we can help you"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E4095]"
          />
        </div>

        <div>
          <label className="block text-[#3E4095] font-semibold mb-2">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E4095] resize-none"
          ></textarea>
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-[#3E4095] hover:bg-[#2d3075] transition duration-200 text-white font-semibold px-8 py-3 rounded-lg shadow-md"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
