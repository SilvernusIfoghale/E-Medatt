import Image, { StaticImageData } from "next/image";
import arrow from "@/public/icons/arrow.png";
import pointer from "@/public/icons/pointer.png";
import medical from "@/public/images/hero-img.png";
import chatBot from "@/public/images/chatBot.png";
import HealthCard from "./component/HealthCard";
import cancerPatient from "@/public/images/cancer-patient.png";
import elderly from "@/public/images/elderly.png";
import workingProfessionals from "@/public/images/workingProfessionals.png";
import mentalPatients from "@/public/images/mentalPatient.png";
import youngAdult from "@/public/images/youngAdults.png";
import parents from "@/public/images/parent.png";

interface HealthCardProps {
  photo: StaticImageData;
  title: string;
  alt: string;
  description: string;
  paint: string;
}

export default function Home() {
  const headerCardData: HealthCardProps[] = [
    {
      photo: cancerPatient,
      title: "Chronic Disease Patients",
      alt: "Chronic Disease Patients",
      description:
        "Manage your health with regular check-ups and support to ensure you stay on track with your treatment, because your well-being is our top priority.",
      paint: "bg-success-10",
    },
    {
      photo: elderly,
      title: "Elderly",
      alt: "Elderly",
      description:
        "Receive compassionate care right at home by using our user-friendly telehealth services, allowing you to rest easy knowing expert help is just a call away.",
      paint: "bg-primary-10",
    },
    {
      photo: workingProfessionals,
      title: "Working Professionals",
      alt: "Working Professionals",
      description:
        "Receive compassionate care right at home by using our user-friendly telehealth services, allowing you to rest easy knowing expert help is just a call away.",
      paint: "bg-warning-10",
    },
    {
      photo: mentalPatients,
      title: "Mental Health Patients",
      alt: "Mental Health Patients",
      description:
        "Access confidential counseling and support at your convenience, providing you with the tools to improve your mental well-being and first step towards a brighter tomorrow.",
      paint: "bg-error-10",
    },
    {
      photo: youngAdult,
      title: "Young Adult",
      alt: "Young Adult",
      description:
        "You can access high-quality healthcare from the comfort of your home and connect with trusted doctors whenever you need them.",
      paint: "bg-error-20",
    },
    {
      photo: parents,
      title: "Parents",
      alt: "Parents",
      description:
        "Get instant access to pediatric care to ensure your child(ren) receive the best possible attention, as we’re here to support your family's health every step of the way.",
      paint: "bg-success-10",
    },
  ];
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
          {headerCardData.map((item) => (
            <HealthCard
              key={item.alt}
              photo={item.photo}
              title={item.title}
              alt={item.alt}
              description={item.description}
              paint={item.paint}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
