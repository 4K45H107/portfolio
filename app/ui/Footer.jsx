import Link from "next/link";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { EMAIL, GITHUB, LINKEDIN } from "../data/contact";

const Footer = () => {
  return (
    <div className="my-32 text-center center">
      <div className="w-48 h-[2px] mb-4 bg-green mx-auto"></div>
      Built and designed by Fahad Ahmed Akash <br />
      <div className="flex items-center mt-2 text-white-3/[0.7]">
        <span className="mr-2">
          <IoMail />
        </span>
        <span className="select-all">{EMAIL}</span>
      </div>
      <div className="mx-auto gap-x-3 text-lg flex mt-4">
        <Link
          className="hover:text-green transition duration-300"
          target="_blank"
          href={GITHUB.url}
          aria-label="GitHub"
        >
          <IoLogoGithub />
        </Link>

        <Link
          className="hover:text-green transition duration-300"
          target="_blank"
          href={LINKEDIN.url}
          aria-label="LinkedIn"
        >
          <IoLogoLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
