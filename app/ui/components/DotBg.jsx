import React from "react";

const DotBg = ({ children }) => {
  return (
    <div className="h-full w-full lg:bg-dot-white-1/[0.15] relative center">
      <div className="hidden absolute pointer-events-none inset-0 lg:flex items-center justify-center bg-black-2 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      {children}
    </div>
  );
};

export default DotBg;
