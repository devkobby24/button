import { Button } from "@/components/ui/button";
import { Briefcase, Clock, DollarSignIcon, HandCoins } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="w-full flex flex-col pt-10 items-center font-sans justify-center space-y-20"
    >
      <h1 className="text-teal-800 font-bold text-6xl text-center">
        The Credit Card That Grows with You
      </h1>
      <p className="text-center font-xl font-semibold">
        Button is the first non-bank credit card built for Africa's <br />{" "}
        dreamers and doers.
      </p>
      <Button
        size="lg"
        className="bg-teal-800 font-normal w-60 text-gray-300 p-5 rounded-full"
      >
        Start Your Journey
      </Button>

      <div className="h-40 mt-10 bg-gradient-to-r from-teal-900 to-teal-600 w-full flex items-center justify-center rounded-b-3xl">
        <ul className="grid grid-cols-4 items-center justify-center gap-5 w-full">
          <li className="flex flex-col text-gray-300 font-semibold text-lg text-center items-center justify-center">
            <DollarSignIcon color="white" className="flex" />
            Instant access to credit
          </li>
          <li className="flex flex-col text-gray-300 font-semibold text-lg text-center items-center justify-center">
            <HandCoins color="white" className="flex" />
            No hidden fees
          </li>
          <li className="flex flex-col text-gray-300 font-semibold text-lg text-center items-center justify-center">
            <Clock color="white" className="flex" />
            Tailored Limits
          </li>
          <li className="flex flex-col text-gray-300 font-semibold text-lg text-center items-center justify-center">
            <Briefcase color="white" className="flex" />
            Built-in financial tools
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
