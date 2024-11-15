import { Button } from "@/components/ui/button";
import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between space-x-5 p-6 font-sans">
      <div>
        <Button variant="outline" className="bg-white border-0 text-teal-700 rounded-full">
          Button
        </Button>
      </div>
      <ul className="list-none flex items-center justify-between space-x-1 md:space-x-3">
        <li>
          <Button
            variant="outline"
            className="border-0 hover:border-2 text-teal-700 rounded-full"
          >
            Home
          </Button>
        </li>
        <li>
          <Button
            variant="outline"
            className="border-0 hover:border-2 text-teal-700 rounded-full"
          >
            Features
          </Button>
        </li>
        <li>
          <Button className="bg-teal-800 rounded-full">Apply Now</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
