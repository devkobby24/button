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
      <h1 className="text-teal-800 font-extrabold md:text-6xl text-4xl text-center p-5 mb-4">
        The Credit Card That Grows with You
      </h1>
      <p className="text-center md:text-lg font-semibold mb-8 px-10 md:px-0">
        Button is the first non-bank credit card built for Africa&apos;s
        dreamers and doers.
      </p>
      <Button
        size="sm"
        className="bg-teal-800 md:text-lg md:w-30 text-sm text-gray-200 p-5 rounded-full"
      >
        Start Your Journey
      </Button>
      <div className="w-full flex flex-col items-center">
        <Image
          src={"/Cards3.png"}
          alt="cards"
          height={803}
          width={1228}
          className="-mb-20 md:-mb-48 lg:-mb-60 w-auto md:h-full"
          loading="eager"
        />
        <div className="h-auto p-4 md:h-40 z-0 bg-gradient-to-r from-teal-900 to-teal-600 w-full flex items-center justify-center rounded-b-3xl">
          <ul className="grid md:grid-cols-4 grid-cols-2 items-center justify-center gap-5 w-full">
            <li className="flex flex-col text-gray-300 font-semibold text-xs md:text-lg text-center items-center justify-center">
              <DollarSignIcon
                color="white"
                size={30}
                className="lg:h-[40px] md:w-[40px]"
              />
              Instant access to credit
            </li>
            <li className="flex flex-col text-gray-300 font-semibold text-xs md:text-lg text-center items-center justify-center">
              <HandCoins
                color="white"
                size={30}
                className="lg:h-[40px] md:w-[40px]"
              />
              No hidden fees
            </li>
            <li className="flex flex-col text-gray-300 font-semibold text-xs md:text-lg text-center items-center justify-center">
              <Clock
                color="white"
                size={30}
                className="lg:h-[40px] md:w-[40px]"
              />
              Tailored Limits
            </li>
            <li className="flex flex-col text-gray-300 font-semibold text-xs md:text-lg text-center items-center justify-center">
              <Briefcase
                color="white"
                size={30}
                className="lg:h-[40px] md:w-[40px]"
              />
              Built-in financial tools
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
