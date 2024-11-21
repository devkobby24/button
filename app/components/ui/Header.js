import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between space-x-5 p-6">
      <div className="cursor-pointer h-auto w-auto -mb-5">
        <Image src={'/logo.png'} width={120} height={100} alt="logo"/>
      </div>
      <ul className="list-none flex items-center justify-between space-x-1 md:space-x-3">
        <li>
          <Button
            variant="outline"
            size="sm"
            className="border-0 hover:border-2 text-teal-700 rounded-full hidden md:block"
          >
            Home
          </Button>
        </li>
        <li>
          <Button
            variant="outline"
            size="sm"
            className="border-0 hover:border-2 text-teal-700 rounded-full hidden md:block"
          >
            Features
          </Button>
        </li>
        <li>
          <Button size="sm" className="bg-teal-800 rounded-full text-xs">Apply Now</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
