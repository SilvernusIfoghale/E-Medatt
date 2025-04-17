import { StaticImageData } from "next/image";
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

export const headerCardData: HealthCardProps[] = [
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
