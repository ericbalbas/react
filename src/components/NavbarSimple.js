// Dropdown.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Dropdown = ({ navigator }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-sky-500 shadow-sm px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700"
      >
        <Bars3Icon className="h-5 w-5 text-sky-600" />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-300">
          <div className="py-1">
            {navigator.map((element, index) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-300"
              >
                {element.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
