import Link from "next/link";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="my-32 text-center center">
      <div className="w-48 h-[2px] mb-4 bg-green mx-auto"></div>
      Built and designed by Fahad Ahmed Akash <br />
      <div className="flex items-center mt-2 text-white-3/[0.7]">
        <span className="mr-2">
          <IoMail />
        </span>
        <span className="select-all">fahad11.ahmed11@gmail.com</span>
      </div>
      <div className="mx-auto gap-x-3 text-lg flex mt-4">
        <Link
          className="hover:text-green transition duration-300"
          target="_blank"
          href="https://github.com/4K45H107"
          aria-label="GitHub"
        >
          <IoLogoGithub />
        </Link>

        <Link
          className="hover:text-green transition duration-300"
          target="_blank"
          href="https://www.linkedin.com/in/fahad-ahmed-4k45h/"
          aria-label="LinkedIn"
        >
          <IoLogoLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
