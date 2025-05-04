"use client";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#3E4095] text-white font-sans relative">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Column 1: Logo + Contact */}
        <div>
          <Link href="/">
            <img
              src="/logo.jpg"
              alt="Rimsha Lab Logo"
              className="w-32 mb-[-4px] hidden sm:block p-1.5"
            />
          </Link>
          <h1 className="hidden md:block text-xl text-center mb-6 sm:text-left font-bold text-white">
            RIMSHA LABS
          </h1>
          <div className="flex items-start gap-2 mb-2 text-sm">
            <FaMapMarkerAlt className="text-teal-500 mt-1" />
            <span>St-2 Nadirabad, Lahore</span>
          </div>
          <div className="flex items-start gap-2 mb-2 text-sm">
            <FaPhoneAlt className="text-teal-500 mt-1" />
            <span>Call Us: +92 323 1486205</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <FaEnvelope className="text-teal-500 mt-1" />
            <span className="hover:underline cursor-pointer">
              info@rimshalabs.com
            </span>
          </div>
        </div>

        {/* Column 2: Latest Events */}
        <div>
          <h3 className="font-bold text-lg mb-4">Latest Events</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <p className="font-medium">
                Decade of Action on Nutrition and Global Initiatives
              </p>
              <p className="text-gray-300 text-xs">27 May, 2021</p>
            </li>
            <li>
              <p className="font-medium">
                Standards and Scientific Advice on Food and Nutrition
              </p>
              <p className="text-gray-300 text-xs">27 May, 2021</p>
            </li>
            <li>
              <p className="font-medium">
                Monitoring Nutritional Status & Food Safety Events
              </p>
              <p className="text-gray-300 text-xs">27 May, 2021</p>
            </li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div>
          <h3 className="font-bold text-center  hidden  md:block md:text-start md:text-start text-lg mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 text-center hidden  md:block md:text-start text-md">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Services", href: "/our_services" },
              { label: "Blogs", href: "/blogs" },
              { label: "Contact Us", href: "/contact_us" },
              { label: "Policy", href: "/policy" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:underline cursor-pointer">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Map */}
        <div className="w-full h-56 sm:h-72">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.092267836104!2d74.40236227540481!3d31.494147574225956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f31ca8553f5%3A0x7400545d293c11ba!2sRimsha%20Lab!5e0!3m2!1sen!2s!4v1746382888462!5m2!1sen!2s"
            style={{ border: "1px solid black", width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 flex text-center py-4 text-sm px-4">
        <div className="w-full flex justify-center md:px-[10%]">
          Rimsha Labs © 2025 All Right Reserved
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 border-2 border-dashed border-white rounded-full p-3 hover:bg-blue-900 transition z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
