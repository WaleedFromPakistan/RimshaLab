"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const AppointmentForm = () => {
  const formRef = useRef(null);
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    const formData = {
      form_type: "Appointment Request",
      collection_center: form.collection_center.value,
      service: form.service.value,
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      date: form.date.value,
      time: form.time.value,
    };

    setLoading(true);

    try {
      // Send email to Owner
      await emailjs.send(
        "service_gzi563d",
        "template_vjyxc4o",
        {
          ...formData,
          to_email: "laboratoryrimsha@gmail.com",
          subject: "New Appointment",
        },
        "-LaPCf-Pi7u3oQKrq"
      );

      // Send confirmation email to Customer
      await emailjs.send(
        "service_gzi563d",
        "template_2ob8xqp",
        {
          ...formData,
          title: formData.service,
          to_email: formData.email,
          subject: "Appointment Confirmation",
        },
        "-LaPCf-Pi7u3oQKrq"
      );

      // Show success popup
      setPopup(true);
      form.reset();
      setTimeout(() => setPopup(false), 3000);
    } catch (error) {
      console.error("FAILED TO SEND EMAILS:", error);
      alert("Something went wrong while sending. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 relative">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Book an Appointment
      </h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="grid md:grid-cols-2 gap-x-10 gap-y-6"
      >
        {/* Collection Center */}
        <div>
          <label className="block text-[#3E4095] font-extrabold mb-2">
            Select Collection Center
          </label>
          <select
            name="collection_center"
            className="w-full border-b focus:outline-none py-2"
            required
          >
            <option value="">-- Choose your option --</option>
            <option value="Nadirabad">Nadirabad</option>
            <option value="Saddar">Saddar</option>
            <option value="Guldasht Town">Guldasht Town</option>
            <option value="Samanbad">Samnabad</option>
          </select>
        </div>

        {/* Service */}
        <div>
          <label className="block text-[#3E4095] font-extrabold mb-2">Service</label>
          <select
            name="service"
            className="w-full border-b focus:outline-none py-2"
            required
          >
            <option value="">-- Choose your option --</option>
            <option value="Clinical Lab">Clinical Lab</option>
            <option value="Digital X-ray">Digital X-ray</option>
            <option value="Ultrasound">Ultrasound</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label className="block text-gray-800 mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border-b py-2 focus:outline-none"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-800 mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            className="w-full border-b py-2 focus:outline-none"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-800 mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border-b py-2 focus:outline-none"
            required
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-800 mb-1">Date</label>
            <input
              type="date"
              name="date"
              className="w-full border-b py-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 mb-1">Select Time</label>
            <input
              type="time"
              name="time"
              className="w-full border-b py-2 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#3E4095] text-white font-semibold px-6 py-3 mt-4 ${
              loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {loading ? "Sending..." : "Make an Appointment"}
          </button>

          <p className="text-sm text-gray-500 mt-2">
            You’ll receive a confirmation email after successful booking.
          </p>
        </div>
      </form>

      {/* Popup */}
      {popup && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Your appointment has been submitted successfully!
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
