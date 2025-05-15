"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const JoinUsForm = () => {
  const formRef = useRef(null);
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendApplication = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    const formData = {
      form_type: "Join Us Form",
      first_name: form.first_name.value,
      last_name: form.last_name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      role: form.role.value,
      join_as:true
    };

    try {
      // Send to Owner
      await emailjs.send(
        "service_gzi563d",
        "template_vjyxc4o",
        {
          ...formData,
          to_email: "laboratoryrimsha@gmail.com",
        },
        "-LaPCf-Pi7u3oQKrq"
      );

      // Send confirmation to applicant
      await emailjs.send(
        "service_gzi563d",
        "template_2ob8xqp",
        {
          ...formData,
          to_email: formData.email,
          subject: "Thank you for applying to join our team!",
        },
        "-LaPCf-Pi7u3oQKrq"
      );

      setPopup(true);
      form.reset();
      setTimeout(() => setPopup(false), 3000);
      console.log(formData);
    } catch (error) {
      console.error("APPLICATION SENDING FAILED:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 relative">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
        Join Our Team
      </h2>

      <form
        ref={formRef}
        onSubmit={sendApplication}
        className="grid md:grid-cols-2 gap-8"
      >
        <div>
          <label className="block font-semibold text-[#3E4095] mb-1">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            required
            placeholder="Enter your first name"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#3E4095] py-2"
          />
        </div>

        <div>
          <label className="block font-semibold text-[#3E4095] mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            required
            placeholder="Enter your last name"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#3E4095] py-2"
          />
        </div>

        <div>
          <label className="block font-semibold text-[#3E4095] mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#3E4095] py-2"
          />
        </div>

        <div>
          <label className="block font-semibold text-[#3E4095] mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="03XX-XXXXXXX"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#3E4095] py-2"
          />
        </div>

        <div>
          <label className="block font-semibold text-[#3E4095] mb-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            placeholder="Write your subject"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#3E4095] py-2"
          />
        </div>

        <div>
          <label className="block font-semibold text-[#3E4095] mb-1">
            Join As
          </label>
          <select
            name="role"
            required
            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#3E4095] py-2"
          >
            <option value="">-- Select Role --</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Technologist">Technologist</option>
            <option value="Intern">Intern</option>
          </select>
        </div>

        <div className="md:col-span-2 mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#3E4095] text-white px-6 py-3 font-semibold rounded-md transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#2d3075]"
            }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
          <p className="text-sm text-gray-500 mt-2">
            A confirmation email will be sent after submission.
          </p>
        </div>

        <div className="md:col-span-2 mt-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
            <p className="text-sm text-gray-700 font-medium">
              <strong>Note:</strong> Please send your CV to{" "}
              <a
                href="mailto:laboratoryrimsha@gmail.com"
                className="text-[#3E4095] underline"
              >
                laboratoryrimsha@gmail.com
              </a>
            </p>
          </div>
        </div>
      </form>

      {popup && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Your application has been submitted successfully!
        </div>
      )}
    </div>
  );
};

export default JoinUsForm;
