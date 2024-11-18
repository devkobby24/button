import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-32 mt-10 bg-gradient-to-r from-teal-600 to-teal-800 w-full flex flex-col space-y-5 items-center justify-center rounded-t-3xl">
      <div className="grid grid-cols-3 items-center justify-center gap-5">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/facebook.svg" alt="Facebook" width={50} height={50} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/instagram.svg" alt="Instagram" width={50} height={50} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/linkedin.svg" alt="LinkedIn" width={50} height={50} />
        </a>
      </div>
      <span className="text-gray-300"> Button Credit, 2024.</span>
    </div>
  );
};

export default Footer;
