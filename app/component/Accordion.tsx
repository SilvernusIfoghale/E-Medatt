"use client";
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`w-[90%] sm:w-[80%] border-2 border-gray-20 p-4 rounded-xl ${
        isActive && "border-gray-primary-text"
      }`}
      key={Math.random()}
    >
      <div
        className=" flex justify-between gap-5 "
        onClick={() => setIsActive(!isActive)}
      >
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-sm font-medium cursor-pointer">
          {isActive ? "x" : "+"}
        </p>
      </div>
      <div className="">
        {isActive && (
          <p className=" text-xs font-light pt-2  w-[90%]">{content}</p>
        )}
      </div>
    </div>
  );
}
