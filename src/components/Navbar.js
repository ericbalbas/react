import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Dropdown from "./NavbarSimple"; // Assume you have a DropdownMenu component
import {
  UsersIcon,
  PuzzlePieceIcon,
  CodeBracketIcon,
  FlagIcon,
  CubeIcon
} from "@heroicons/react/24/outline";

const navigator = [
  { label: "Home", link: "home" },
  { label: "About", link: "about" },
  { label: "Experience", link: "experience" },
  { label: "Skills", link: "skills" },
  { label: "Contact", link: "contact" },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isPhoneSize = window.matchMedia("(max-width: 768px)").matches; // Adjust the breakpoint as needed
      setIsMobile(isPhoneSize);
      
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="px-8 py-3 fixed w-full top-0 z-10" data-theme="night">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="flex items-center text-sky-500 text-2xl font-bold hover:animate-bounce navigator"
          data-theme="night"
        >
          <div
            className={`bg-purple-700 h-10 w-10 flex items-center justify-center rounded-full mr-2 header-icon`}
            data-aos="fade-right"
            data-aos-delay={`${700}`}
          >
            <CubeIcon className="h-6 w-6 text-gray-300 icon z-10" />
          </div>
          <span
            className="hidden sm:inline"
            data-aos="fade-left"
            data-aos-delay={`${700}`}
          >
            Portfolio.
          </span>
        </div>
        <div className="links-container">
          {isMobile ? (
            <Dropdown navigator={navigator} />
          ) : (
            <ul className="flex space-x-4 text-sm">
              {navigator.map((element, index) => (
                <li
                  key={index}
                  className="text-gray-300 active:text-blue-700 navigator transition duration-100 ease-in-out transform hover:scale-105 hover:text-sky-500"
                >
                  <Link
                    to={element.link}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 p-2 navigator transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    {element.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
