import Image from "next/image";
import arrow from "@/public/icons/arrow.png";
import pointer from "@/public/icons/pointer.png";
import medical from "@/public/images/hero-img.png";
import chatBot from "@/public/images/chatBot.png";

export default function Home() {
  return (
    <main className="w-full bg-primary-white flex justify-center">
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
    </main>
  );
}
