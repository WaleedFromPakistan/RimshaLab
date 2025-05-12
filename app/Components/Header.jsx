"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/our_services", label: "Our Services" },
    // { href: "/blogs", label: "Blogs" },
    { href: "/careers", label: "Careers" },
    { href: "/contact_us", label: "Contact Us" },
  ];

  const linkClass = (href) =>
    pathname === href
      ? "bg-[#3E4095] text-white px-3 py-2 rounded transition"
      : "hover:bg-[#3E4095] hover:text-white px-3 py-2 rounded transition";

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-[#3E4095] flex justify-between items-center px-4 py-3 flex-wrap">
        <div className="flex items-center gap-3">
          <Link href="/">
            <img
              src="/logo.jpg"
              alt="Rimsha Laboratories"
              className="h-16 w-16 object-cover"
            />
          </Link>
          <h1 className="text-xl md:text-3xl cursor-default font-bold text-white">
            RIMSHA LABS
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span className="hover:underline cursor-pointer">
             laboratoryrimsha@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span>St-2 Nadirabad, Lahore</span>
          </div>
          <Link
            href="#" // /online_report
            className="bg-[#4346c9] text-white font-bold px-5 py-2 rounded-full hover:bg-black transition"
          >
            Online Report
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`z-50 w-full transition-all duration-300 ease-in-out ${
          isSticky ? "fixed top-0 bg-white shadow-md" : "relative"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-center items-center py-3 md:py-4">
            <div className="hidden md:flex justify-center gap-6 text-[#1f2e50] font-semibold">
              {navItems.map(({ href, label }) => {
                const link = (
                  <Link key={href} href={href} className={linkClass(href)}>
                    {label}
                  </Link>
                );

                if (href === "/our_services") {
                  return (
                    <React.Fragment key={href}>
                      {link}
                      {/* Core Values Dropdown */}
                      <div className="relative group">
                        <button
                          className={`${
                            pathname === "/certification" ||
                            pathname === "/quality_policy"
                              ? "bg-[#3E4095] text-white"
                              : "hover:bg-[#3E4095] hover:text-white"
                          } px-3 py-2 rounded transition`}
                        >
                          Core Values
                        </button>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded z-50 min-w-[180px]">
                          <Link
                            href="/certification"
                            className="block px-4 py-2 text-sm text-[#1f2e50] hover:bg-[#3E4095] hover:text-white"
                          >
                            Certifications
                          </Link>
                          <Link
                            href="/quality_policy"
                            className="block px-4 py-2 text-sm text-[#1f2e50] hover:bg-[#3E4095] hover:text-white"
                          >
                            Lab Quality Policy
                          </Link>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                }

                return link;
              })}
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-2 px-4 pb-4 text-[#1f2e50] font-semibold bg-white">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={linkClass(href) + " text-center"}
              >
                {label}
              </Link>
            ))}

            {/* Mobile Core Values Dropdown */}
            <div className="flex flex-col px-4 pb-4 gap-2 text-center">
              <Link
                href="/certification"
                onClick={() => setMenuOpen(false)}
                className=" text-[#1f2e50] px-5 py-1 hover:bg-[#3E4095] hover:text-white rounded transition"
              >
                Certifications
              </Link>
              <Link
                href="/quality_policy"
                onClick={() => setMenuOpen(false)}
                className=" text-[#1f2e50] px-5 py-1 hover:bg-[#3E4095] hover:text-white rounded transition"
              >
                Lab Quality Policy
              </Link>
            </div>

            <Link
              href="/online_report"
              className="hover:bg-[#3E4095] hover:text-white px-5 py-1 text-center rounded transition"
            >
              Online Report
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
