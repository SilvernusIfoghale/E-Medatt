import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/icons/e-medatt-logo.png";
import facebook from "@/public/icons/Facebook.png";
import x from "@/public/icons/Twitter.png";
import instagram from "@/public/icons/Instagram.png";
import linkedin from "@/public/icons/LinkedIn.png";
import youtube from "@/public/icons/YouTube.png";
import email from "@/public/icons/email-dark.png";
import phone from "@/public/icons/phone-dark.png";

export default function Footer() {
  return (
    <footer className="relative bg-primary-100 w-full flex justify-center items-center text-primary-white text-sm">
      <div className="w-[90%] pt-20">
        <div className="grid sm:grid-cols-2 grid-cols-1 justify-between gap-[15%] mb-4 pb-4 sm:border-b-[1px] border-gray-secondary-text">
          <div className="flex flex-col items-center sm:items-start sm:text-left text-center">
            <div className=" w-28 bg-primary-white text-xs text-primary-base font-bold rounded-3xl ">
              <Link href="/" className="flex items-center gap-2 py-1 px-2">
                <Image src={logo} width={18} height={18} alt="E-Medatt logo" />
                <p>E-MEDATT</p>
              </Link>
            </div>
            <p className="text-xs mt-3">
              Providing accessible, affordable, and quality telehealth services.
              Connecting you with certified healthcare professionals for your
              medical needs.
            </p>
            <div className="flex gap-2 items-center pt-5">
              <Image src={facebook} alt="facebook" />
              <Image src={x} alt="x" />
              <Image src={instagram} alt="instagram" />
              <Image src={linkedin} alt="linkedin" />
              <Image src={youtube} alt="youtube" />
            </div>
          </div>
          <div className="hidden sm:grid  justify-end content-center">
            <h4 className="mb-2">Subscribe to our newsletter</h4>
            <div className="bg-primary-white w-full h-10 rounded-lg flex justify-between px-2 items-center gap-5 py-1 min-w-80">
              <input
                type="text"
                placeholder="Enter your email address"
                className="text-gray-secondary-text text-xs outline-none py-2"
              />
              <button className="bg-primary-base  font-medium text-xs rounded-lg py-2 px-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="grid  py-3 md:grid-cols-4 grid-cols-2">
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-medium text-xs mb-3 ">
              About us
            </Link>
            <Link href="/" className="text-xs font-light hover:font-medium">
              Mission
            </Link>
            <Link href="/" className="text-xs font-light hover:font-medium">
              Vision
            </Link>
            <Link href="/" className="text-xs font-light hover:font-medium">
              Our Values
            </Link>
            <Link href="/" className="text-xs font-light hover:font-medium">
              Why Choose Us?
            </Link>
          </div>
          <div className="flex flex-col gap-4 ">
            <Link href="/" className="font-medium text-xs mb-3 ">
              Services
            </Link>
            <Link href="/" className="text-xs font-light hover:font-medium">
              Telehealth Consultations
            </Link>
            <Link href="/" className="text-xs font-light hover:font-medium">
              Specialist Care
            </Link>
            <Link href="/" className="text-xs font-light hover:font-medium">
              Medical Records Management
            </Link>
            <Link href="/" className="text-xs font-light hover:font-medium">
              Wellness Programs
            </Link>
          </div>
          <div className="flex flex-col  md:items-center mt-10 md:mt-0">
            <div className="flex flex-col gap-4 ">
              <Link href="/" className="font-medium text-xs mb-3 ">
                Pricing
              </Link>
              <Link href="/" className="text-xs font-light hover:font-medium">
                Basic Plan
              </Link>
              <Link href="/" className="text-xs font-light hover:font-medium">
                Pro Plan
              </Link>
              <Link href="/" className="text-xs font-light hover:font-medium">
                Premium Plan
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:items-end  mt-10 md:mt-0">
            <div className="flex flex-col gap-4">
              <Link href="/" className="font-medium text-xs mb-3 ">
                Contact us
              </Link>
              <div className="flex items-center gap-3">
                <div className="bg-primary-white w-8 h-8 rounded-md flex items-center justify-center cursor-pointer">
                  <Image src={email} alt="email" width={18} height={18} />
                </div>
                <div className="">
                  <p className="text-[0.70rem] font-light pb-1">Email:</p>
                  <p className="text-[0.65rem]">contact@e-medatt.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary-white w-8 h-8 rounded-md flex items-center justify-center cursor-pointer">
                  <Image src={phone} alt="phone" width={18} height={18} />
                </div>
                <div className="">
                  <p className="text-[0.70rem] font-light pb-1">Phone:</p>
                  <p className="text-[0.65rem]">(414) 687 - 5892</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile newsletter  */}
        <div className="grid sm:hidden py-4">
          <h4 className="mb-2">Subscribe to our newsletter</h4>
          <div className="bg-primary-white w-full h-12 rounded-lg flex justify-between px-2 items-center gap-5 py-1 min-w-80">
            <input
              type="text"
              placeholder="Enter your email address"
              className="text-gray-primary-text text-xs outline-none py-2"
            />
            <button className="bg-primary-base  font-medium text-xs rounded-lg py-2 px-4">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mb-4 pb-4 border-b-[1px] border-gray-secondary-text mx-10 "></div>
        <div className="text-center pb-7 text-xs text-gray-secondary-text">
          <p className="">
            Copyright © 2025 E-Medatt | All Rights Reserved | Terms and
            Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
