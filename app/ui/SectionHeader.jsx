import Image from "next/image";
import React from "react";
import { cn } from "../utils/cn";

// bg-green/[0.2] bg-red/[0.2] bg-blue/[0.2] bg-magenta/[0.2]
// border-green border-red border-blue border-magenta

const SectionHeader = ({ icon, header, subheader, color }) => {
  return (
    <div className={cn(`flex gap-x-8 items-center relative my-12`)}>
      <div
        className={cn(
          `border-2 border-${color} inline-block rounded-full p-2 bg-${color}/[0.2]`
        )}
      >
        <Image
          className="rounded-full"
          width={40}
          height={40}
          src={icon}
          alt={header}
        ></Image>
      </div>
      <p className="text-2xl md:text-4xl font-bold">{header}</p>
      <div className={cn(`flex-1 h-px bg-${color}/[0.2]`)}></div>
    </div>
  );
};

export default SectionHeader;
