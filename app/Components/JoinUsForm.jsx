"use client";
import React from "react";

const JoinUsForm = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Join Our Team
      </h2>

      <form className="grid gap-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#3E4095] font-semibold mb-2">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E4095]"
            />
          </div>

          <div>
            <label className="block text-[#3E4095] font-semibold mb-2">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E4095]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#3E4095] font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E4095]"
            />
          </div>

          <div>
            <label className="block text-[#3E4095] font-semibold mb-2">Phone</label>
            <input
              type="tel"
              placeholder="e.g. 03XX-XXXXXXX"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E4095]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[#3E4095] font-semibold mb-2">Subject</label>
          <input
            type="text"
            placeholder="Type your subject here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E4095]"
          />
        </div>

        <div>
          <label className="block text-[#3E4095] font-semibold mb-2">Join As</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E4095]">
            <option value="">-- Select Role --</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Technologist">Technologist</option>
            <option value="Internee">Internee</option>
          </select>
        </div>

        <div>
          <label className="block text-[#3E4095] font-semibold  mb-2">Upload Your CV</label>
          <input
            type="file"
            className="w-full border cursor-pointer border-gray-300 rounded-lg px-4 py-2 file:bg-[#3E4095] file:text-white file:rounded file:px-4 file:py-2 focus:outline-none"
          />
        </div>

        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-[#3E4095] cursor-pointer hover:bg-[#2d3075] transition duration-200 text-white font-semibold px-8 py-3 rounded-lg shadow-md"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinUsForm;
