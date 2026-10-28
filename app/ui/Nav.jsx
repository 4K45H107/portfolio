import React from "react";

const Nav = () => {
  return (
    <div className="hidden lg:block fixed bottom-12 left-12">
      <a
        href="/#home"
        className="block mb-4 transition duration-300 hover:text-green"
      >
        /fahad
      </a>
      <a
        href="/#about"
        className="block mb-4 transition duration-300 hover:text-blue"
      >
        /about
      </a>
      <a
        href="/#work"
        className="block mb-4 transition duration-300 hover:text-red"
      >
        /education and experience
      </a>
      <a
        href="/#projects"
        className="block mb-4 transition duration-300 hover:text-magenta"
      >
        /project showcase
      </a>
      <a
        href="/#achievements"
        className="block mb-4 transition duration-300 hover:text-green"
      >
        /achievements
      </a>
    </div>
  );
};

export default Nav;
