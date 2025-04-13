import Image, { StaticImageData } from "next/image";
import React from "react";
import cancerPatient from "@/public/images/cancer-patient.png";

interface HealthCardProps {
  photo: StaticImageData;
  title: string;
  alt: string;
  description: string;
  paint: string;
}

export default function HealthCard({
  photo,
  title,
  alt,
  description,
  paint,
}: HealthCardProps) {
  return (
    <div className="border-2 border-gray-20 rounded-lg text-center ">
      <div className={`${paint}  h-20`}></div>
      <Image src={photo} alt={alt} className="mx-auto mt-[-25px]" />
      <div className="p-8">
        <h3 className="text-xs font-medium pb-2">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}
