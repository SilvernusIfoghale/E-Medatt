import React from "react";
import Image, { StaticImageData } from "next/image";
import arrow from "@/public/icons/arrow.png";
import pointer from "@/public/icons/pointer.png";
import medical from "@/public/images/hero-img.png";
import ellipse from "@/public/icons/ellipse.png";
import star from "@/public/icons/starBlue.png";
import arrowBlue from "@/public/icons/arrowBlue.png";
import Accordion from "../component/Accordion";
import basic from "@/public/icons/basic.png";
import pro from "@/public/icons/pro.png";
import premium from "@/public/icons/premium.png";
import checkBlue from "@/public/icons/checkBlue.png";
import checkWhite from "@/public/icons/checkWhite.png";
import arrowRightWhite from "@/public/icons/rightArrowWhite.png";
import arrowRightBlue from "@/public/icons/rightArrowBlue.png";
import { accordionPricingData } from "../utils/AccordionPricing";
import PricingCard from "../component/PricingCard";

export default function page() {
  const itemsList1 = [
    "1 user account",
    "Access to certified health professionals",
    "3 consultations per month (chat or call)",
    "Access to medical records",
    "Appointment scheduling",
    "General health tips and wellness resources",
    "24/7 support",
  ];
  const itemsList2 = [
    "5 user account",
    "Access to certified health professionals",
    "10 consultations per month (chat or call)",
    "Access to medical records",
    "Appointment scheduling",
    "Priority support",
    "Chronic disease management resources",
  ];
  const itemsList3 = [
    "Unlimited users",
    "Unlimited consultations (chat or call)",
    "Access to specialist doctors",
    "Comprehensive medical records",
    "Personalized health programs",
    "Virtual health check-ups and reminders",
    "24/7 premium customer support",
  ];
  return (
    <section className="w-full flex flex-col items-center relative">
      <Image
        src={ellipse}
        alt="ellipse"
        className="absolute left-[-50px] top-[-170px] rotate-180"
      />
      <div className="w-[90%]">
        <div className="text-center flex flex-col items-center  my-16 ">
          <div className="relative">
            <Image
              src={star}
              alt="star"
              className="absolute top-[-30px] right-5  md:top-[-50px]  md:right-0 w-20 md:w-24"
            />
            <h2 className=" text-xl md:text-2xl lg:text-3xl  font-bold ">
              Simple
              <span className="text-primary-base"> Pricing Plan</span>,
              <span className="block">For You!</span>
            </h2>
            <p className="hidden sm:block text-xs lg:text-sm text-gray-primary-text py-3 ">
              We offer flexible pricing options to ensure everyone has access to
              <br />
              quality healthcare. Select a plan that fits your needs and budget.
            </p>
            <p className="sm:hidden text-xs lg:text-sm text-gray-primary-text py-3 w-[90%]">
              We offer flexible pricing options to ensure everyone has access to
              quality healthcare. Select a plan that fits your needs and budget.
            </p>
            <Image
              src={arrowBlue}
              alt="blue arrow"
              className="absolute top-16 md:top-5 left-[-30px]  sm:left-[-90px] md:left-[-170px] w-20 md:w-40 "
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          <PricingCard
            photo={basic}
            alt="basic icon"
            title="Personal"
            subTitle="Basic"
            description="Get essential healthcare services with the Basic Plan. Perfect for
              individuals looking for affordable care"
            price="#2,499"
            duration=" /month"
            included={itemsList1}
            btn="Upgrade to Basic plan"
            btnStyle=" bg-primary-base hover:opacity-5 text-white"
            btnImage={arrowRightWhite}
            checkImage={checkBlue}
            paint="bg-white shadow-sm"
          />
          <PricingCard
            photo={pro}
            alt="pro icon"
            title="Family"
            subTitle="Pro"
            description="Ensure the well-being of your entire family with the Family Plan. Manage multiple users and enjoy more consultations"
            price="#7,499"
            duration=" /month"
            included={itemsList2}
            btn="Upgrade to Family plan"
            btnStyle=" bg-white hover:opacity-5 text-primary-base"
            btnImage={arrowRightBlue}
            checkImage={checkWhite}
            paint="bg-gradient-to-r  from-[#437FF4] to-[#3268D0] text-white"
          />

          <PricingCard
            photo={premium}
            alt="premium icon"
            title="All-inclusive"
            subTitle="Premium"
            description="Experience complete peace of mind with the Premium Plan. Enjoy unlimited consultations and access to specialists"
            price="#12,499"
            duration=" /month"
            included={itemsList3}
            btn="Upgrade to Premium plan"
            btnStyle=" bg-primary-base hover:opacity-5 text-white"
            btnImage={arrowRightWhite}
            checkImage={checkBlue}
            paint="bg-white shadow-sm"
          />
        </div>
      </div>

      {/* FAQs  */}
      <div className="w-full pt-5 pb-16 mb-8">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between sm:mb-[-6rem] mb-5 gap-10 ">
          <div className="flex flex-col justify-center items-center  bg-primary-base text-primary-white w-full sm:w-[45%] md:w-[40%] lg:w-[25%] h-64 sm:h-96 p-2 mb-10 sm:mb-0">
            <div className="w-[90%] sm:w-[75%]  md:w-[65%]">
              <h3 className="text-xl sm:text-2xl  font-bold text-center sm:text-left">
                FAQs
              </h3>
              <p className="text-xs font-light py-3 ">
                Here, we’ve compiled answers to some of the most common
                inquiries to help you navigate your online consultation
                experience with ease and confidence.
              </p>
              <button className="flex  justify-center items-center text-xs  cursor-pointer hover:scale-105 duration-500  bg-primary-white text-black  border-gray-20 py-2 px-4 rounded-xl mx-auto sm:mx-0">
                Learn more
                <Image src={arrow} alt="arrow" width={12} height={12} />
              </button>
            </div>
          </div>
          <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[45%] flex flex-col gap-5 justify-center items-center sm:items-start">
            {accordionPricingData.map(({ title, content }) => (
              <Accordion key={title} title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
