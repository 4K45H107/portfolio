import React from "react";
import DotBg from "./components/DotBg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-screen" id="home">
      <DotBg>
        <div className="container center text-center">
          <div>
            <h1 className="text-4xl lg:text-6xl text-white-1 px-4">
              Hi, I am <span className="font-semibold text-green">Fahad.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-3xl my-8 text-white-3/[0.8]">
              Backend & full-stack engineer building enterprise video
              conferencing and cloud storage.
            </p>
            <p className="text-base lg:text-xl text-center max-w-4xl mx-auto">
              Software Engineer I at Synesis IT PLC in Dhaka, Bangladesh. I
              build backend and full-stack features with Go, Java and
              JavaScript, with a focus on authentication, load balancing and
              deployment automation.
            </p>
          </div>

          <div className="gap-x-12 lg:gap-x-16 mt-16 flex items-center justify-between">
            <Link
              href="mailto:fahad11.ahmed11@gmail.com"
              className="px-8 py-2 text-base md:text-lg rounded border-2 transition duration-300 border-white-3 hover:border-green text-center font-semibold hover:text-green"
            >
              Contact
            </Link>
            <Link
              href="/#projects"
              className="px-8 py-2 rounded-md bg-green text-black-2 text-base md:text-lg transition duration-300 hover:bg-white-1 border-2 border-transparent hover:border-green font-semibold"
            >
              Projects
            </Link>
          </div>
        </div>
      </DotBg>
    </div>
  );
};

export default Hero;
