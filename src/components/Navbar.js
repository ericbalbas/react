import React, { Component } from 'react'
import { Link } from 'react-scroll';

const navigator = [
  { label: "Home", link: "home" },
  { label: "About", link: "about" },
  { label: "Experience", link: "experience" },
  { label: "Skills", link: "skills" },
  { label: "Contact", link: "contact" },
];

export class Navbar extends Component {
  render() {
    return (
      <nav className="bg-gray-50 px-8 py-3 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-gray-800 text-2xl font-bold hover:animate-bounce navigator me-2">
            Portfolio.
          </div>
          <ul className="flex space-x-4 text-sm">
            {navigator.map((element, index) => (
              <li key={index} className="text-gray-800">
                <Link
                  to={element.link}
                  spy={true}
                  smooth={true}
                  // offset={-70} // Adjust offset as needed to account for fixed navbar
                  duration={500}
                  className="hover:text-gray-500 navigator"
                >
                  {element.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar
