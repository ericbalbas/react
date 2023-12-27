import React, { useEffect } from "react";
import Typed from "typed.js";
import myPicture from "../assets/me2.png";

const Section = () => {
  useEffect(() => {
    // Initialize Typed.js for h1 element
    const typedH1 = new Typed("#typed-h1", {
      strings: ["I'm Eric John Balbas,"],
      typeSpeed: 50,
      showCursor: false,
    });

    // Initialize Typed.js for p element
    const typedP = new Typed("#typed-p", {
      strings: ["your aspiring full stack developer."],
      typeSpeed: 50,
      showCursor: false,
    });

    // Clean up Typed instances on unmount
    return () => {
      typedH1.destroy();
      typedP.destroy();
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="h-screen flex items-center justify-center text-white"
      >
        <div className="container mt-10 flex justify-center items-center">
          <img
            src={myPicture}
            alt="Your Name"
            className="w-120 h-100 object-cover rounded-full mr-10"
          />
          <div className="text-left text-gray-800 profile">
            <h1 id="typed-h1" className="text-4xl font-bold mb-2"></h1>
            <p id="typed-p" className="text-xl"></p>
          </div>
        </div>
      </section>

      {/* Add other sections as needed */}
      {/* Section 2: About Us */}
      <section
        id="about"
        className="h-screen flex flex-col justify-center items-center text-center"
      >
        <h2 className="text-4xl font-bold">About Us</h2>
        <p>Learn more about our company...</p>
      </section>

      {/* Section 3: Experience */}
      <section
        id="experience"
        className="h-screen flex flex-col justify-center items-center text-center"
      >
        <h2 className="text-4xl font-bold">Experience</h2>
        <p>Explore our professional journey...</p>
      </section>

      {/* Section 4: Skills */}
      <section
        id="skills"
        className="h-screen flex flex-col justify-center items-center text-center"
      >
        <h2 className="text-4xl font-bold">Skills</h2>
        <p>Discover our technical expertise...</p>
      </section>

      {/* Section 5: Contact */}
      <section
        id="contact"
        className="h-screen flex flex-col justify-center items-center text-center"
      >
        <h2 className="text-4xl font-bold">Contact</h2>
        <p>Reach out to us...</p>
      </section>
    </>
  );
};

export default Section;
