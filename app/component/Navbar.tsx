"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <div className="text-xl font-bold">
        <Link href="/">Logo</Link>
      </div>
      <div className="flex items-center space-x-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <div
          className="relative"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <span className="cursor-pointer p-3">Services</span>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
              <Link
                href="/telehealth"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Telehealth Consultations
              </Link>
              <Link
                href="/specialist-care"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Specialist Care
              </Link>
              <Link
                href="/medical-records"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Medical Records Management
              </Link>
              <Link
                href="/medical-tests"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Medical Tests & Diagnostics
              </Link>
              <Link
                href="/wellness-program"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Wellness Program
              </Link>
              <Link
                href="/appointment-scheduling"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Appointment Scheduling
              </Link>
            </div>
          )}
        </div>
        <Link href="/pricing">Pricing</Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Search
        </button>
        <Link href="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
