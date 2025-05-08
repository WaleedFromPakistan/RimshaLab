"use client";
import React from "react";

const AppointmentForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Book an Appointment
      </h2>

      <form className="grid md:grid-cols-2 gap-x-10 gap-y-6">
        {/* Left Column */}
        <div>
          <label className="block text-[#3E4095] font-extrabold mb-2">
            Select Collection Center
          </label>
          <select className="w-full border-b focus:outline-none py-2">
            <option selected >-- Choose your option --</option>
            <option>Nadirabad</option>
            <option>Saddar</option>
            <option>Guldasht Town</option>
            <option>Samnabad</option>
          </select>
        </div>

        {/* Right Column */}
        <div>
          <label className="block text-[#3E4095] font-extrabold mb-2">
            Service
          </label>
          <select className="w-full border-b focus:outline-none py-2">
          <option selected >-- Choose your option --</option>
            <option>Clinical Lab</option>
            <option>Digital X-ray</option>
            <option>Ultrasound</option>
            <option>Others</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-800 mb-1">Name</label>
          <input
            type="text"
            className="w-full border-b  py-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-800 mb-1">Phone</label>
          <input
            type="tel"
            className="w-full border-b  py-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-800 mb-1">Email</label>
          <input
            type="email"
            className="w-full border-b  py-2 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-800 mb-1">Date</label>
            <input
              type="date"
              className="w-full border-b  py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-1">Select Time</label>
            <input
              type="time"
              className="w-full border-b  py-2 focus:outline-none"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-[#3E4095] cursor-pointer text-white font-semibold px-6 py-3 mt-4"
          >
            Make an Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
