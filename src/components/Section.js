import React, { useEffect } from "react";
import Typed from "typed.js";
import myPicture from "../assets/me2.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const Section = () => {
  useEffect(() => {
    // // Initialize Typed.js for h1 element
    // const typedH1 = new Typed("#typed-h1", {
    //   strings: ["I'm Eric John Balbas,"],
    //   typeSpeed: 50,
    //   showCursor: false,
    // });

    // // Initialize Typed.js for p element
    // const typedP = new Typed("#typed-p", {
    //   strings: [Full stack web developer."],
    //   typeSpeed: 50,
    //   showCursor: false,
    // });

    AOS.init();

    // Clean up Typed instances on unmount
    // return () => {
    //   typedH1.destroy();
    //   typedP.destroy();
    // };
  }, []);

  return (
    <>
      {/**Section 1: Home Page */}
      <section
        id="home"
        className="h-screen flex items-center justify-center text-white"
      >
        <div
          className="container mt-10 flex justify-center items-center"
          data-aos="fade-up"
        >
          <img
            src={myPicture}
            alt="Your Name"
            className="w-100 h-100 object-cover rounded-full mr-10"
            data-aos="fade-up-left"
            data-aos-delay="600"
          />
          <div
            className="text-left text-gray-800 profile"
            data-aos="fade-down-right"
            data-aos-delay="600"
          >
            <h1 id="typed-h1" className="text-4xl font-bold mb-2">
              I'm Eric John Balbas
            </h1>
            <p id="typed-p" className="text-xl">
              Full stack web developer.
            </p>
          </div>
        </div>
      </section>

      {/* Add other sections as needed */}
      {/* Section 2: About Us */}
      <section
        id="about"
        className="h-screen flex flex-col justify-center items-center text-center "
      >
        <div className="container mt-5 px-12 py-12">
          <div className="text-center">
            <h2
              className="text-3xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h2>
            <p
              className="text-lg text-gray-700 text-justify leading-loose"
              id="aboutMe"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              Hey there! Eric John Balbas, a code enthusiast and dedicated Web
              Developer residing in the vibrant town of San Fabian Pangasinan.
              My journey into the realm of programming has been nothing short of
              exhilarating. From crafting elegant lines of code to architecting
              robust web applications, I find solace in the world of algorithms
              and the endless possibilities they offer. Passionate about turning
              innovative ideas into functional and user-friendly solutions, I'm
              constantly pushing my boundaries to stay at the forefront of
              technology. Beyond the screen, you'll find me immersed in the
              latest programming books, exploring open-source projects, and
              engaging with the ever-evolving tech community. I believe in the
              power of continuous learning and thrive in environments that
              foster creativity and collaboration. When not coding, I enjoy
              reading books, sports and online games, and also learning
              algorithms fueling my curiosity and providing a well-rounded
              perspective that transcends the digital realm. Let's embark on
              this coding adventure together!
            </p>

            {/* Add more content as needed, such as skills, education, etc. */}
            {/* Add more sections like education, work experience, etc. */}
          </div>
        </div>
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
