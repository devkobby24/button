import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import {
  ChartBarIncreasing,
  HandCoinsIcon,
  IdCard,
  TrendingUp,
  User,
} from "lucide-react";

const Features = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* First section */}
      <div className="grid grid-cols-3 items-center justify-center gap-5 m-6">
        <div className="flex flex-col items-start space-y-10  lg:p-6">
          <h1 className="text-5xl font-bold ">
            Personalized Credit, Just for You!
          </h1>
          <p className=" text-sm ">
            We look beyond traditional credit scores to understand your true
            financial potential.
            <br /> Get the credit you deserve, not just what the system allows.
          </p>
          <div className="bg-teal-800 p-4 rounded-xl text-gray-300 text-center w-40">
            Pay Bills
          </div>

          <div className=" grid grid-cols-3 items-center justify-center gap-4">
            <Image
              className="shadow-xl shadow-gray-500 rounded-lg"
              src="/apple.png"
              alt="Apple"
              width={100}
              height={100}
            />
            <Image
              className="shadow-xl shadow-gray-500 rounded-lg"
              src="/netflix.png"
              alt="Netflix"
              width={100}
              height={100}
            />
            <Image
              className="shadow-xl shadow-gray-500 rounded-lg"
              src="/spotify.png"
              alt="Facebook"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className=""></div>

        <div className=" flex flex-col space-y-10">
          <Image
            src="/credit.webp"
            alt="Credit"
            className="rounded-2xl"
            width={400}
            height={200}
          />
          <h1 className="text-5xl font-bold">
            Rewards That Fit Your Lifestyle
          </h1>
          <p className=" text-sm">
            Turn everyday spending into extraordinary experiences. Earn buttons
            (points) on every purchase and unlock a world of rewards, from
            travel and cashback to discounts on the latest gadgets.
          </p>
        </div>
      </div>

      {/* Features Bar */}
      <div className="h-40 mt-10 bg-gradient-to-r from-teal-900 to-teal-600 w-full flex items-center justify-center rounded-3xl">
        <ul className="grid grid-cols-4 items-center justify-center gap-5 w-full">
          <li className="flex flex-col text-gray-300 font-semibold text-lg text-center items-center justify-center">
            <User color="white" className="flex" />
            Sign up easily
          </li>
          <li className="flex flex-col text-gray-300 font-semibold text-lg text-center items-center justify-center">
            <IdCard color="white" className="flex" />
            Start spending with your virtual card
          </li>
          <li className="flex flex-col text-gray-300 font-semibold text-lg text-center items-center justify-center">
            <HandCoinsIcon color="white" className="flex" />
            Manage your finances
          </li>
          <li className="flex flex-col text-gray-300 font-semibold text-lg text-center items-center justify-center">
            <TrendingUp color="white" className="flex" />
            Grow with Button
          </li>
        </ul>
      </div>

      {/* Second section */}
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-6 items-center justify-center p-6 w-[700px] h-[600px]">
          <Image
            src="/theboy.webp"
            alt="Thebot"
            className="h-[400px] rounded-2xl"
            width={600}
            height={400}
          />
          <div className="space-y-8">
            <h1 className="font-bold text-4xl">
              Make a Difference with Every Swipe
            </h1>
            <hr className="h-4 border-black" />
            <p className="text-start text-sm">
              Your purchases have the power to change lives. With Button, you
              can support the causes you're passionate about and build a better
              future for Africa
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-orange-300 p-4 rounded-full text-gray-900 shadow-lg shadow-gray-400"
            >
              Start your journey
            </Button>
          </div>
        </div>

        <div className="space-y-8 bg-gradient-to-b from-teal-900 to-teal-600 rounded-2xl p-10">
          <span className="text-5xl text-gray-200 font-bold">
            Live your dreams<span className="text-orange-300"> today</span>
          </span>

          <p className="font-bold text-lg text-gray-200">
            Button is more than just a credit card.
            <br />
            It's the key to your financial future
          </p>

          <Button
            size="lg"
            variant="outline"
            className="bg-orange-300 p-4 rounded-full text-gray-900 shadow-lg shadow-gray-400"
          >
            Start your journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
