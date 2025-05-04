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
    { href: "/blogs", label: "Blogs" },
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
      <div className="bg-[#3E4095] flex justify-between items-center px-4 py-3 flex-wrap shadow-md">
        <div className="flex items-center gap-3">
          <Link href="/">
            <img
              src="/logo.jpg"
              alt="Rimsha Laboratories"
              className="h-12 w-12 rounded-md object-cover"
            />
          </Link>
          <h1 className="text-xl md:text-2xl font-bold text-white">RIMSHA LABS</h1>
        </div>

        <div className="hidden md:flex items-center gap-6 text-white text-sm">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span className="hover:underline cursor-pointer">info@rimshalabs.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-400" />
            <span>St-2 Nadirabad, Lahore</span>
          </div>
          <Link
            href="/online_report"
            className="bg-indigo-600 hover:bg-indigo-700 transition-all px-4 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg"
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

      {/* Main Nav (Sticky) */}
      <nav
        className={`z-50 w-full transition-all duration-300 ease-in-out ${
          isSticky ? "fixed top-0 bg-white shadow-md" : "relative"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-center items-center py-2 md:py-3">
            <div className="hidden md:flex justify-center gap-6 text-[#1f2e50] font-medium text-sm md:text-base">
              {navItems.map(({ href, label }) => (
                <Link key={href} href={href} className={linkClass(href)}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-2 px-4 pb-4 text-[#1f2e50] font-medium bg-white">
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
            <Link
              href="/online_report"
              className="hover:bg-[#3E4095] hover:text-white px-3 py-2 text-center rounded transition"
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