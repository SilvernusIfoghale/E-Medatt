"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/icons/e-medatt-logo.png";
import downIcon from "@/public/icons/down-arrow-icon.png";
import search from "@/public/icons/search-icon.png";
import { Menu } from "@deemlol/next-icons";
import { X } from "@deemlol/next-icons";
import { usePathname } from "next/navigation";
import email from "@/public/icons/email-icon.png";
import phone from "@/public/icons/phone-icon.png";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const pathName = usePathname();
  // toggle services DropDown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  //   toggle mobile navbar
  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
    console.log(mobileNav);
  };

  return (
    <nav className="relative flex  justify-center items-center bg-primary-100">
      <div className=" w-[90%] flex py-4 justify-between items-center    text-primary-white shadow-md text-sm font-light">
        <div className="bg-primary-white text-xs text-primary-base font-bold rounded-3xl ">
          <Link href="/" className="flex items-center gap-2 py-1 px-2">
            <Image src={logo} width={18} height={18} alt="E-Medatt logo" />
            <p>E-MEDATT</p>
          </Link>
        </div>

        <div
          className={`${mobileNav ? "flex" : "hidden"}  sm:flex items-center  `}
        >
          <div className="absolute right-0 top-14 h-[calc(100vh-56px)] sm:h-auto bg-primary-100  sm:relative sm:right-auto sm:top-auto  flex gap-8 sm:gap-0.5 text-center flex-col sm:flex-row sm:justify-center sm:items-center sm:space-x-4 w-[90%] sm:w-auto pt-10 sm:pt-0">
            <Link
              href="/"
              className={`${
                pathName === "/" ? "font-medium" : "font-light"
              } hover:font-medium w-14 mx-auto`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                pathName === "/about" ? "font-medium" : "font-light"
              } hover:font-medium w-14 mx-auto`}
            >
              About
            </Link>
            <div
              className="relative  text-gray-primary-text text-[11px] "
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <div className="cursor-pointer p-3 flex items-center sm:w-24 w-full   text-primary-white text-sm hover:font-medium  mx-auto">
                <p className="text-center w-full flex items-center justify-center">
                  {mobileNav ? "Features" : "Services"}
                  <span className=" pl-0.5">
                    <Image
                      src={downIcon}
                      width={12}
                      height={12}
                      alt="down-arrow"
                    />
                  </span>
                </p>
              </div>
              {dropdownOpen && (
                <div className="sm:absolute sm:left-0 sm:ml-10 sm:w-52 relative  bg-primary-white shadow-sm sm:rounded-md z-10 p-3">
                  <Link
                    href="/telehealth"
                    className="block px-4 py-2 rounded-md hover:bg-primary-10"
                  >
                    Telehealth Consultations
                  </Link>
                  <Link
                    href="/specialist-care"
                    className="block px-4 py-2 rounded-md hover:bg-primary-10"
                  >
                    Specialist Care
                  </Link>
                  <Link
                    href="/medical-records"
                    className="block px-4 py-2 rounded-md hover:bg-primary-10"
                  >
                    Medical Records Management
                  </Link>
                  <Link
                    href="/medical-tests"
                    className="block px-4 py-2 rounded-md hover:bg-primary-10"
                  >
                    Medical Tests & Diagnostics
                  </Link>
                  <Link
                    href="/wellness-program"
                    className="block px-4 py-2 rounded-md hover:bg-primary-10"
                  >
                    Wellness Program
                  </Link>
                  <Link
                    href="/appointment-scheduling"
                    className="block px-4 py-2 rounded-md hover:bg-primary-10"
                  >
                    Appointment Scheduling
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/pricing"
              className={`${
                pathName === "/pricing" ? "font-medium" : "font-light"
              } hover:font-medium w-14 mx-auto`}
            >
              Pricing
            </Link>
            {/* Header Mobile Info */}
            <div className="  w-full h-10 flex gap-10 sm:hidden text-primary-white text-xs  pl-5 py-4 flex-col">
              <div className="flex justify-center items-center gap-2">
                <Image src={email} width={16} height={16} alt="email icon" />
                <p>contact@e-medatt.com</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image src={phone} width={16} height={16} alt="phone icon" />
                <p>(414) 850 - 0417</p>
              </div>
            </div>
            {/* Login and Sign Up Mobile Version  */}
            <div
              className={`sm:hidden mt-16 px-10 flex flex-col gap-10  space-x-4 text-xs text-primary-white text-center`}
            >
              <Link
                href="/login"
                className={`${
                  pathName === "/login" ? "font-medium" : "font-light"
                } hover:font-medium w-full`}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className={`${
                  pathName === "/signup" ? "font-medium" : "font-light"
                }  bg-primary-base hover:bg-primary-10 hover:text-gray-primary-text p-3 rounded-lg`}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`hidden px-10 sm:px-0 sm:flex items-center space-x-4 text-xs text-primary-white`}
        >
          <button className="p-2 bg-primary-white hover:bg-primary-10 rounded-md cursor-pointer  ">
            <Image src={search} width={12} height={12} alt="search icon" />
          </button>
          <Link
            href="/login"
            className={`${
              pathName === "/login" ? "font-medium" : "font-light"
            } hover:font-medium w-10`}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className={`${
              pathName === "/signup" ? "font-medium" : "font-light"
            }  bg-primary-base hover:bg-primary-10 hover:text-gray-primary-text p-2 rounded-xl`}
          >
            Sign Up
          </Link>
        </div>
        {/* toggle  bar  */}
        <div className="sm:hidden">
          {mobileNav ? (
            <X size={24} color="#FFFFFF" onClick={handleMobileNav} />
          ) : (
            <Menu size={28} color="#FFFFFF" onClick={handleMobileNav} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
