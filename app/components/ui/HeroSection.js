import { Button } from "@/components/ui/button";
import { Briefcase, Clock, DollarSignIcon, HandCoins } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="w-full flex flex-col pt-10 items-center justify-center"
    >
      <h1 className="text-teal-800 font-bold md:text-[40px] text-3xl text-center p-4 mb-4">
        The Credit Card That Grows with You
      </h1>
      <p className="text-center font-xl font-semibold mb-8 px-10 md:px-0">
        Button is the first non-bank credit card built for Africa&apos;s
        dreamers and doers.
      </p>
      <Button
        size="sm"
        className="bg-teal-800 font-normal md:w-30 text-gray-300 p-5 rounded-full"
      >
        Start Your Journey
      </Button>
      <div className="flex flex-col w-full items-center">
        <Image
          src={"/bgcards.png"}
          alt="cards"
          height={600}
          width={400}
          className="h-auto z-50 w-auto md:w-[663px]"
        />
        <div className="h-40 bg-gradient-to-r from-teal-900 to-teal-600 w-full flex items-center justify-center rounded-b-3xl">
          <ul className="grid md:grid-cols-4 grid-cols-2 items-center justify-center gap-5 w-full">
            <li className="flex flex-col text-gray-300 font-semibold text-xs md:text-lg text-center items-center justify-center">
              <DollarSignIcon color="white" className="flex" />
              Instant access to credit
            </li>
            <li className="flex flex-col text-gray-300 font-semibold text-xs md:text-lg text-center items-center justify-center">
              <HandCoins color="white" className="flex" />
              No hidden fees
            </li>
            <li className="flex flex-col text-gray-300 font-semibold text-xs md:text-lg text-center items-center justify-center">
              <Clock color="white" className="flex" />
              Tailored Limits
            </li>
            <li className="flex flex-col text-gray-300 font-semibold text-xs md:text-lg text-center items-center justify-center">
              <Briefcase color="white" className="flex" />
              Built-in financial tools
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
