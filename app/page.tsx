import Image, { StaticImageData } from "next/image";
import arrow from "@/public/icons/arrow.png";
import pointer from "@/public/icons/pointer.png";
import medical from "@/public/images/hero-img.png";
import chatBot from "@/public/images/chatBot.png";
import HealthCard from "./component/HealthCard";
import consultant from "@/public/images/consultant.png";
import check from "@/public/icons/check.png";
import Step from "./component/Step";
import { accordionData } from "./utils/Accordion";
import Accordion from "./component/Accordion";
import { stepCardData } from "./utils/StepCard";
import { headerCardData } from "./utils/HeaderCard";

export default function Home() {
  return (
    <main className="w-full bg-primary-white flex flex-col items-center">
      {/* hero section  */}
      <div className="relative w-[90%] flex flex-col sm:flex-row  justify-between items-center py-16">
        <div className="w-full sm:w-[43%] md:-w-[40%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl  font-bold ">
            Your Path to{" "}
            <span className="text-primary-base">Better Health</span> Better
            Health is Just One Click Away!
          </h1>
          <p className="text-xs lg:text-sm text-gray-primary-text py-3 sm:py-5 lg:py-8">
            Set aside the inconvenience of scheduling appointments! Get in touch
            with a doctor whenever it's convenient for you. Our network of
            skilled and qualified doctors can provide you with first-rate
            medical treatment.
          </p>
          <div className="relative flex flex-col sm:flex-row  gap-5 text-xs ">
            <button className="bg-primary-base text-primary-white py-1.5 px-4 rounded-lg hover:scale-105 duration-500 cursor-pointer">
              Book Appointment
            </button>
            <button className="flex justify-center items-center cursor-pointer hover:scale-105 duration-500 border-2 sm:border-none border-gray-20 py-1.5 rounded-lg">
              Learn more
              <Image src={arrow} alt="arrow" width={12} height={12} />
            </button>

            <Image
              src={pointer}
              alt="pointer"
              className="absolute w-14 sm:w-28 left-[-30px] sm:left-[-50px] md:left-[-50px] lg:left-[-80px] sm:top-[-30px] top-[-5px]"
            />
          </div>
        </div>
        <div className="w-full sm:w-[45%] mt-20 sm:mt-0">
          <div className="">
            <Image src={medical} alt="medical personnel" />
            <Image
              src={chatBot}
              alt="chat Bot"
              className="hidden md:block absolute md:bottom-48 right-[-20px]  md:w-28 lg:w-36"
            />
          </div>
        </div>
      </div>
      {/* Card Section  */}
      <div className=" relative w-[90%] flex flex-col  justify-center  py-16">
        <div className="text-center flex flex-col items-center mb-5">
          <h2 className=" text-lg md:text-xl lg:text-2xl  font-bold ">
            Healthcare for
            <span className="text-primary-base"> Everyone</span>,
            <span className="text-primary-base">Wherever</span> You Are
          </h2>
          <p className=" text-xs lg:text-sm text-gray-primary-text py-3 ">
            E-MEDATT makes healthcare accessible for different <br /> groups,
            providing tailored care to meet your specific needs.
          </p>
        </div>
        {/* HealthCard Component  */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20">
          {headerCardData.map(({ alt, photo, title, description, paint }) => (
            <HealthCard
              key={alt}
              photo={photo}
              title={title}
              alt={alt}
              description={description}
              paint={paint}
            />
          ))}
        </div>
      </div>
      {/* Our Features  */}
      <div className=" relative w-[90%] flex flex-col  justify-center  py-16">
        <div className="flex flex-col sm:flex-row gap-5  items-center justify-between">
          <div className="w-full sm:w-[45%]">
            <Image src={consultant} alt="Consultant Doctor" />
          </div>
          <div className="w-full sm:w-[45%]">
            <h3 className=" text-lg md:text-xl lg:text-2xl  font-bold ">
              Our Features
            </h3>
            <p className="text-xs py-4 ">
              Experience convenient and affordable healthcare at your
              fingertips. From easy scheduling to secure telehealth, our
              features make accessing quality care simple and efficient.
            </p>
            <div className="flex flex-col gap-3 pt-3">
              <div className="flex items-center gap-2 text-xs">
                <Image src={check} alt="check icon" />
                <p>Easy Appointment Scheduling</p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Image src={check} alt="check icon" />
                <p>Access to Certified Healthcare Providers</p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Image src={check} alt="check icon" />
                <p>Telehealth Services</p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Image src={check} alt="check icon" />
                <p>Medical Records Management</p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Image src={check} alt="check icon" />
                <p>Accessible and Affordable Healthcare</p>
              </div>
              <div className="relative flex flex-col sm:flex-row  gap-5 text-xs pt-2">
                <button className="bg-primary-base text-primary-white py-1.5 px-4 rounded-lg hover:scale-105 duration-500 cursor-pointer">
                  Book Appointment
                </button>
                <button className="flex justify-center items-center cursor-pointer hover:scale-105 duration-500 border-2 sm:border-none border-gray-20 py-1.5 rounded-lg">
                  Learn more
                  <Image src={arrow} alt="arrow" width={12} height={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How it Works */}
      <div className=" relative w-[90%] flex flex-col mt  justify-center  pb-16">
        <div className="flex justify-center sm:mb-[-6rem] mb-5 text-center ">
          <div className="w-[80%h] sm:w-1/2 ">
            <h3 className=" text-lg md:text-xl lg:text-2xl  font-bold ">
              How It Works
            </h3>
            <p className="text-xs py-4 ">
              Follow these easy steps to enjoy quick and seamless <br /> access
              to certified doctors on E-Medatt.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 md:gap-10 lg:gap-24  items-center text-center sm:text-left justify-between">
          {stepCardData.map(
            ({ transform, step, nextArrow, mt, icon, title, description }) => (
              <Step
                transform={transform}
                key={step}
                nextArrow={nextArrow}
                mt={mt}
                step={step}
                icon={icon}
                title={title}
                description={description}
              />
            )
          )}
        </div>
      </div>
      {/* FAQs  */}
      <div className="w-full pt-5 pb-16 mb-10">
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
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
