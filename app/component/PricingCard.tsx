import Image, { StaticImageData } from "next/image";
import React from "react";
import cancerPatient from "@/public/images/cancer-patient.png";
import basic from "@/public/icons/basic.png";
import checkBlue from "@/public/icons/checkBlue.png";
import checkWhite from "@/public/icons/checkWhite.png";
import arrowRightWhite from "@/public/icons/rightArrowWhite.png";
import arrowRightBlue from "@/public/icons/arrowBlue.png";

interface PricingCardProps {
  photo: StaticImageData;
  title: string;
  subTitle: string;
  price: string;
  duration: string;
  alt: string;
  description: string;
  included: string[];
  btn: string;
  btnStyle: string;
  btnImage: StaticImageData;
  checkImage: StaticImageData;
  paint: string;
}

export default function PricingCard({
  photo,
  title,
  subTitle,
  price,
  duration,
  alt,
  description,
  included,
  btn,
  btnStyle,
  btnImage,
  checkImage,
  paint,
}: PricingCardProps) {
  return (
    <div className={`${paint}   rounded-lg w-full h-auto  p-4`}>
      <div className="flex gap-5 items-center  ">
        <Image src={photo} alt={alt} />
        <div className="">
          <p className="text-xs font-light">{title}</p>
          <p className="font-medium text-sm">{subTitle}</p>
        </div>
      </div>
      <p className="text-xs font-light py-3">{description}</p>
      <div className="flex items-center gap-1 py-5 ">
        <p className="text-2xl font-bold">{price}</p>
        <p className="text-xs font-light text-shadow-gray-secondary-text">
          {duration}
        </p>
      </div>
      <div className=" border-t border-t-gray-200 pt-4">
        <p className="text-sm font-medium pb-1">What's included?</p>
        {included.map((item, index) => (
          <div className="py-2 flex gap-2" key={index}>
            <Image src={checkImage} alt="check icon" />
            <p className="text-xs font-light">{item}</p>
          </div>
        ))}
      </div>
      <div
        className={`${btnStyle} my-2  w-full h-10 rounded-2xl  text-xs flex justify-center items-center gap-1 hover:opacity-90  cursor-pointer`}
      >
        <p>{btn}</p> <Image src={btnImage} alt="right arrow" width={12} />
      </div>
    </div>
  );
}
