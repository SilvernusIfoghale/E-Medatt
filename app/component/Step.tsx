import Image, { StaticImageData } from "next/image";
import React from "react";
import nextPointer from "@/public/icons/nextPointer.png";

interface StepProps {
  icon: StaticImageData;
  step: string;
  title: string;
  description: string;
  mt: string;
  nextArrow: boolean;
  transform: boolean;
}

export default function Step({
  step,
  icon,
  title,
  description,
  mt,
  nextArrow,
  transform,
}: StepProps) {
  return (
    <div className={`mt-5 ${mt} w-[80%] sm:w-full  relative `}>
      <h2 className="text-lg  sm:text-2xl font-bold pb-4 text-primary-base">
        {step}
      </h2>
      <Image src={icon} alt="icon" width={30} className="mx-auto sm:mx-0" />
      <h3 className="text-sm  font-bold py-2">{title}</h3>
      <p className="text-xs font-light">{description}</p>
      {nextArrow && (
        <Image
          src={nextPointer}
          alt="arrow pointer"
          className={`absolute right-[70%] sm:right-0 w-12 sm:w-16 rotate-45 ${
            transform &&
            "rotate-[-45deg]  scale-x-[-1] left-[70%] sm:right-0 sm:scale-x-[1] sm:rotate-0"
          } sm:rotate-0`}
        />
      )}
    </div>
  );
}
