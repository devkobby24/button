import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { HandCoinsIcon, IdCard, TrendingUp, User } from "lucide-react";

const Features = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* First section */}
      <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-5 md:px-10 lg:px-16 max-w-screen-lg md:max-h-[1200px]">
        <div className="flex flex-col md:items-start items-center space-y-5 lg:p-6 md:mt-20">
          <h1 className="md:text-4xl md:text-start text-center text-2xl font-bold mt-10 px-10 md:px-0">
            Personalized Credit, Just for You!
          </h1>
          <p className="text-sm text-center md:text-start md:text-lg px-10 md:px-0">
            We look beyond traditional credit scores to understand your true
            financial potential.
            <br /> Get the credit you deserve &ndash; not just what the system
            allows.
          </p>
          <div className="bg-teal-900 p-4 rounded-xl md:text-lg text-gray-300 text-center h-15 w-30">
            Pay Bills
          </div>
          <Image
            src="/billing.png"
            alt="billing"
            width={456}
            height={210}
            className="md:-ml-4 object-cover"
          />
        </div>

        <div className="md:h-[1000px] md:w-[590px] px-10 md:px-0">
          <Image
            alt="holdcard"
            src={"/holdcard.png"}
            height={1118}
            width={793}
            className="md:-ml-6"
          />
        </div>

        <div className="flex flex-col space-y-5 md:mt-64 md:pl-20 mb-6">
          <h1 className="md:text-4xl text-2xl md:text-start text-center font-bold px-10 md:px-0 md:-ml-10">
            Rewards That Fit Your Lifestyle
          </h1>
          <p className="md:text-start text-center text-sm md:text-lg px-10 md:px-0 md:-ml-10">
            Turn everyday spending into extraordinary experiences. Earn buttons
            (points) on every purchase and unlock a world of rewards &ndash;
            from travel and cashback to discounts on the latest gadgets.
          </p>
        </div>
      </div>

      {/* Features Bar */}
      <div className="h-40 bg-gradient-to-r from-teal-900 to-teal-600 w-full flex items-center justify-center rounded-3xl">
        <ul className="grid md:grid-cols-4 grid-cols-2 items-center justify-center gap-5 w-full">
          <li className="flex flex-col text-gray-300 font-semibold text-xs md:text-lg text-center items-center justify-center">
            <User color="white" size={30} className="lg:h-[40px] md:w-[40px]" />
            Sign up easily
          </li>
          <li className="flex flex-col text-gray-300 font-semibold text-xs md:text-lg text-center items-center justify-center">
            <IdCard
              color="white"
              size={30}
              className="lg:h-[40px] md:w-[40px]"
            />
            Start spending with your virtual card
          </li>
          <li className="flex flex-col text-gray-300 font-semibold text-xs md:text-lg text-center items-center justify-center">
            <HandCoinsIcon
              color="white"
              size={30}
              className="lg:h-[40px] md:w-[40px]"
            />
            Manage your finances
          </li>
          <li className="flex flex-col text-gray-300 font-semibold text-xs md:text-lg text-center items-center justify-center ">
            <TrendingUp
              color="white"
              size={30}
              className="lg:h-[40px] md:w-[40px]"
            />
            Grow with Button
          </li>
        </ul>
      </div>

      {/* Second section */}

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center justify-center p-3 md:w-[800px] md:h-[500px]">
        <Image
          src="/kid.png"
          alt="kid"
          className="md:h-[400px] h-auto w-full p-4 md:p-0"
          width={600}
          height={400}
        />
        <div className="md:space-y-8 space-y-4 flex flex-col items-center md:items-start">
          <h1 className="font-bold text-2xl md:text-4xl text-center md:text-start">
            Make a Difference with Every Swipe
          </h1>
          <hr className="h-4 border-black w-full" />
          <p className="text-sm md:text-lg text-center md:text-start">
            Your purchases have the power to change lives. With Button, you can
            support the causes you&apos;re passionate about and build a better
            future for Africa.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-orange-200 p-4 md:text-lg rounded-full text-gray-900 shadow-lg shadow-gray-400"
          >
            Start your journey
          </Button>
        </div>
      </div>

      {/* Third section */}
      <div className=" bg-gradient-to-b from-teal-900 to-teal-600 grid grid-cols-1 md:grid-cols-2 gap-2 md:h-80 h-auto md:mb-40 rounded-3xl lg:max-w-[1200px] overflow-x-clip mt-20">
        <div className="flex flex-col items-center md:p-10 md:items-start mt-10 md:mt-0">
          <span className="md:text-5xl text-3xl text-center text-gray-200 font-bold mb-3 text-nowrap">
            Live your dreams <span className="text-orange-200">today</span>
          </span>

          <p className="font-bold text-sm md:text-lg text-gray-200 md:text-start mb-3">
            Button is more than just a credit card.
            <br />
            It&rsquo;s the key to your financial future.
          </p>

          <Button
            size="lg"
            variant="outline"
            className="bg-orange-200 md:text-lg p-4 rounded-full -mb-10 text-gray-900 shadow-lg shadow-gray-400"
          >
            Start your journey
          </Button>
        </div>
        <div className="-mb-10 md:-mb-0 md:-ml-32 lg:-ml-10 md:w-[700px] overflow-x-clip">
          <Image
            src={"/cards.png"}
            alt="card"
            height={723}
            width={723}
            className="h-auto w-auto md:w-[700px] md:h-[700px] md:-mt-32 lg:-ml-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
