import key from "@/public/icons/key.png";
import stethoscope from "@/public/icons/stethoscope.png";
import record from "@/public/icons/record.png";
import calender from "@/public/icons/calender.png";
import { StaticImageData } from "next/image";

interface StepProps {
  icon: StaticImageData;
  step: string;
  title: string;
  description: string;
  mt: string;
  nextArrow: boolean;
  transform: boolean;
}

export const stepCardData: StepProps[] = [
  {
    nextArrow: true,
    transform: false,
    mt: "mt-0",
    step: "01",
    icon: key,
    title: "Register or Log in",
    description:
      "Sign up for a new account or log in to access personalized healthcare services. It's quick and easy.",
  },
  {
    nextArrow: true,
    transform: true,
    mt: "sm:mt-[6rem]",
    step: "02",
    icon: stethoscope,
    title: "Choose a Doctor",
    description:
      "Select the service that suits your needs, from virtual consultations to specialist appointments. We offer a range of options for you.",
  },
  {
    nextArrow: true,
    transform: false,
    mt: "sm:mt-[12rem]",
    step: "03",
    icon: calender,
    title: "Book an Appointment",
    description:
      "Connect instantly with a licensed doctor through secure video calls. Get expert advice and treatment from the comfort of your home.",
  },
  {
    nextArrow: false,
    transform: false,
    mt: "sm:mt-[18rem] ",
    step: "04",
    icon: record,
    title: "Manage Records",
    description:
      "Easily access your medical records anytime and schedule follow-ups as needed. Stay organized and in control of your health journey.",
  },
];
