import React from "react";
import Image from "next/image";
import doctors from "@/public/images/heroAbout.png";
import doctorsMobile from "@/public/images/doctorsMobile.png";
import mission from "@/public/images/mission.png";
import vision from "@/public/images/vision.png";
import choose from "@/public/images/choose.png";
import left from "@/public/images/left.png";
import middle from "@/public/images/middle.png";
import right from "@/public/images/right.png";
import check from "@/public/icons/check.png";
import ellipse from "@/public/icons/ellipse.png";
import blueEmail from "@/public/icons/emailBlue.png";
import bluePhone from "@/public/icons/phoneBlue.png";

export default function page() {
  return (
    <main className="w-full bg-primary-white flex flex-col items-center">
      {/* hero section  */}
      <section className=" w-[90%] flex  justify-center sm:text-center py-16">
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl   font-bold z-10 relative">
            Your
            <span className="text-primary-base"> Health</span> , Our
            <span className="text-primary-base"> Priority</span>
          </h1>

          <p className="text-xs lg:text-sm text-gray-primary-text py-3 sm:py-5 lg:py-8 relative z-10 sm:w-[70%] md:w-[49%] mx-auto">
            We are committed to making healthcare accessible, affordable, and
            tailored to your needs. At E-MEDATT, your well-being comes
            first—delivering trusted care whenever and wherever you need it.
          </p>
          <div className="z-20 mt-5 sm:mt-auto">
            <Image
              src={doctors}
              alt="doctors"
              className="z-10 relative hidden sm:block"
            />
            <Image
              src={doctorsMobile}
              alt="doctors"
              className="z-10 relative sm:hidden mx-auto rounded-lg"
            />
          </div>
        </div>
        <Image
          src={ellipse}
          alt="ellipse"
          className="absolute right-0 top-5 sm:top-30 w-28 sm:w-32 "
        />
      </section>
      {/* Our mission  */}
      <section className="relative w-[90%] flex flex-col-reverse sm:flex-col justify-center items-center sm:items-end  py-10">
        <div className="sm:absolute bg-primary-white text-black  shadow-sm left-0 h-auto lg:h-48 flex justify-center flex-col w-[90%] sm:w-[60%] text-center sm:text-left p-10 rounded-lg  mt-[-40px] sm:mt-0">
          <h2 className="text-lg lg:text-2xl  font-bold pb-3">Our Mission</h2>
          <p className="text-xs lg:text-sm font-light">
            At E-Medatt, we believe everyone deserves access to quality
            healthcare, no matter where they are. Our mission is to break down
            barriers to healthcare by offering easy-to-use online consultations
            with certified doctors, providing a seamless and convenient
            experience for all.
          </p>
        </div>
        <div className="flex sm:justify-end justify-center">
          <Image
            src={mission}
            alt="mission image"
            className="xl:w-full sm:w-[70%]"
          />
        </div>
      </section>
      {/* our vision  */}
      <section className="relative w-[90%] flex   justify-center  py-16">
        <div className="flex sm:flex-row flex-col justify-center sm:justify-between items-center gap-5">
          <div className="sm:w-[40%] z-10 ">
            <Image src={vision} alt="vision" />
          </div>
          <div className="w-[90%] sm:w-[40%] md:pr-10 text-center sm:text-left z-10">
            <h2 className="text-lg lg:text-2xl  font-bold pb-3">Our Vision</h2>
            <p className="text-xs lg:text-sm font-light">
              We envision a world where healthcare is not just a privilege but a
              right. Our goal is to make professional healthcare available at
              the tap of a button, ensuring that no one is left behind when it
              comes to managing their health.
            </p>
          </div>
        </div>
        <Image
          src={ellipse}
          alt="ellipse"
          className="absolute left-[-7%] rotate-180 bottom-[-30px] w-28 sm:w-32 "
        />
      </section>
      {/* why choose us?  */}
      <section className="relative w-full flex  justify-center  py-16 overflow-hidden">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-5 lg:gap-10">
          <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%] flex  gap-5 justify-center items-center sm:items-start">
            <div className="w-full sm:w-[90%] lg:w-[75%] xl:w-[60%] text-center sm:text-left ">
              <h3 className=" text-lg md:text-xl lg:text-2xl  font-bold ">
                Why Choose Us?
              </h3>
              <p className="text-xs py-4 ">
                E-Medatt provides instant access to quality healthcare services
                and seasoned professionals across the medical fields. Our system
                is refined to keep your health in check while maintaining a high
                level of privacy.
              </p>
              <div className="flex flex-col gap-3 pt-3">
                <div className="flex items-center gap-2 text-xs">
                  <Image src={check} alt="check icon" />
                  <p>Quick Access to top-notch medical experts in Nigeria</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Image src={check} alt="check icon" />
                  <p>Skip the Travel Expenses</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Image src={check} alt="check icon" />
                  <p>Fast Access to Medical Care</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Image src={check} alt="check icon" />
                  <p>Available Anytime, Anywhere</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Image src={check} alt="check icon" />
                  <p>Secure and Private Consultations</p>
                </div>
                <div className="relative flex flex-col sm:flex-row  gap-5 text-xs pt-2">
                  <button className="bg-primary-base text-primary-white py-1.5 px-4 rounded-lg hover:scale-105 duration-500 cursor-pointer">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] sm:w-[40%] lg:mr-[-30px] ">
            <Image
              src={choose}
              alt="e-medatt app splash screen"
              className="rounded-lg sm:rounded-none"
            />
          </div>
        </div>
      </section>

      {/* Who Are We  */}
      <section className="relative w-full flex  justify-center  py-16 overflow-hidden">
        <div className="w-[90%] ">
          <h3 className=" text-lg md:text-xl lg:text-2xl text-center mb-10 font-bold ">
            Who Are We
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 justify-center">
            <div className="max-w-80 ">
              <Image src={left} alt="working colleagues" />

              <h4 className=" text-sm md:text-lg lg:text-xl pt-5 font-bold ">
                Our Team
              </h4>
              <p className="text-xs py-3 w-[98%] font-light">
                E-Medatt provides instant access to quality healthcare services
                and seasoned professionals across the medical fields. Our system
                is refined to keep your health in check while maintaining a high
                level of privacy.
              </p>
            </div>
            <div className="max-w-80 sm:justify-self-center">
              <Image src={middle} alt="working colleagues" />

              <h4 className=" text-sm md:text-lg lg:text-xl pt-5 font-bold ">
                Our Expertise
              </h4>
              <p className="text-xs py-3 w-[98%] font-light">
                With years of experience in telehealth, medical technology, and
                patient management, we specialize in providing tailored
                healthcare services that meet the unique needs of our
                communities
              </p>
            </div>
            <div className="max-w-80 sm:justify-self-end">
              <Image src={right} alt="working colleagues" />

              <h4 className=" text-sm md:text-lg lg:text-xl pt-5 font-bold ">
                Our Commitment
              </h4>
              <p className="text-xs py-3 w-[98%] font-light">
                We are dedicated to fostering trust and transparency in every
                interaction, ensuring that our patients receive personalized
                care and support throughout their healthcare journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Let us Know what you think!  */}
      <section className="relative w-full flex  justify-center  py-16 overflow-hidden">
        <div className="w-[90%] flex flex-col  sm:flex-row justify-between gap-5">
          <div className="sm:w-[40%] p-5  ">
            <h3 className=" text-lg md:text-xl lg:text-2xl  font-bold text-center sm:text-left">
              Let us know what you think!
            </h3>
            <p className="text-xs py-4 font-light text-center sm:text-left">
              We’d love to hear from you. Whether you have a question about our
              services, need assistance with your account, or just want to share
              feedback, our team is ready to assist.
            </p>
            <div className="ml-2 md:ml-5 pt-2">
              <div className="flex items-center gap-3">
                <div className="bg-primary-white w-8 h-8 rounded-md flex items-center justify-center cursor-pointer">
                  <Image src={blueEmail} alt="email" width={25} height={25} />
                </div>
                <div className="">
                  <p className="text-[0.70rem] font-light ">Email:</p>
                  <p className="text-[0.65rem]">contact@e-medatt.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-2">
                <div className="bg-primary-white w-8 h-8 rounded-md flex items-center justify-center cursor-pointer">
                  <Image src={bluePhone} alt="phone" width={25} height={25} />
                </div>
                <div className="">
                  <p className="text-[0.70rem] font-light ">Phone:</p>
                  <p className="text-[0.65rem]">(414) 687 - 5892</p>
                </div>
              </div>
            </div>
          </div>
          {/* form  */}
          <form className="border-gray-20 border-2 rounded-lg text-sm p-5 sm:w-[60%] md:w-[70%]  lg:w-[60%] xl:w-[40%] relative z-10">
            <div className="flex gap-3 pb-5">
              <div className="w-full">
                <label htmlFor="name" className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Ade John"
                  className="block border-gray-20 border-2 rounded-lg p-2 w-full"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@youremail.com"
                  className="block border-gray-20 border-2 rounded-lg p-2 w-full"
                />
              </div>
            </div>
            <div className="">
              <div className="mb-5">
                <label htmlFor="phone" className="font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="0000 0000 0000"
                  className="block border-gray-20 border-2 rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Type your message here..."
                  className="block border-gray-20 border-2 rounded-lg p-3 w-full resize-none h-28"
                ></textarea>
              </div>
              <button className="w-full sm:w-auto bg-primary-base text-primary-white py-2 px-4 rounded-xl text-xs hover:scale-105 duration-500 cursor-pointer">
                Send Message {"->"}
              </button>
            </div>
          </form>
        </div>
        <Image
          src={ellipse}
          alt="ellipse"
          className="absolute   right-0 bottom-[-130px] w-28 sm:w-32 "
        />
      </section>
    </main>
  );
}
