import { Button } from "@/components/ui/button";
import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-6 font-sans">
      <div>
        <Button variant="outline" className="bg-white border-o text-emerald-700 rounded-full">
          Button
        </Button>
      </div>
      <ul className="list-none flex items-center justify-center space-x-3">
        <li>
          <Button
            variant="outline"
            className="border-0 hover:border-2 text-emerald-700 rounded-full"
          >
            Home
          </Button>
        </li>
        <li>
          <Button
            variant="outline"
            className="border-0 hover:border-2 text-emerald-700 rounded-full"
          >
            Features
          </Button>
        </li>
        <li>
          <Button className="bg-emerald-800 rounded-full">Apply Now</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
