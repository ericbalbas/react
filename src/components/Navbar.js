import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Dropdown from "./NavbarSimple"; // Assume you have a DropdownMenu component

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
    <nav className="bg-gray-50 px-8 py-3 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-800 text-2xl font-bold hover:animate-bounce navigator">
          Portfolio.
        </div>
        <div className="links-container">
          {isMobile ? (
            <Dropdown navigator={navigator} />
          ) : (
            <ul className="flex space-x-4 text-sm">
              {navigator.map((element, index) => (
                <li key={index} className="text-gray-800">
                  <Link
                    to={element.link}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-gray-500 navigator"
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
