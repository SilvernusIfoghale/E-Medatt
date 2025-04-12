import Image from "next/image";
import email from "@/public/icons/email-icon.png";
import phone from "@/public/icons/phone-icon.png";

export const Header = () => {
  return (
    <header className="hidden  bg-primary-white w-full sm:flex justify-center items-center">
      <div className="w-[90%] h-10 flex gap-5 text-gray-secondary-text text-xs py-4 ">
        <div className="flex justify-center items-center gap-2">
          <Image src={email} width={16} height={16} alt="email icon" />
          <p>contact@e-medatt.com</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image src={phone} width={16} height={16} alt="phone icon" />
          <p>(414) 850 - 0417</p>
        </div>
      </div>
    </header>
  );
};
