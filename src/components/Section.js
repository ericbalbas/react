import React, { useEffect } from "react";
import Typed from "typed.js";
import myPicture from "../assets/me2.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { UsersIcon,PuzzlePieceIcon,CodeBracketIcon, FlagIcon } from "@heroicons/react/24/outline";

const Card = ({ title, description, icon , color, delay  }) => {
  return (
    <div
      className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md mb-4"
      data-aos="fade-right"
      data-aos-delay={`${delay}`}
    >
      {/* Card Header */}
      <div className="bg-gray-100 p-4 flex items-center justify-center card-header">
        <div
          className={` ${color} h-10 w-10 flex items-center justify-center rounded-full mr-2 header-icon`}
        >
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-gray-700 card-text-header">{title}</h2>
      </div>

      {/* Card Body */}
      <div className="p-4 card-body">
        <p className="text-lg text-gray-600 py-4 px-4 text-justify card-text-body">
          {description}
        </p>
      </div>
    </div>
  );
};



const Section = () => {
  useEffect(() => {
    AOS.init();
  }, []);

   const cardsData = [
     {
       title: "Me",
       delay: "300",
       icon: <UsersIcon className="h-6 w-6 text-white icon" />,
       color: "bg-blue-600",
       description:
         "Hello, I'm Eric John Balbas, a Web Developer from San Fabian, Pangasinan. Passionate about coding and innovation. Join me on this journey in the dynamic world of web development.",
     },
     {
       title: "Things I like to do",
       delay: "450",
       icon: <PuzzlePieceIcon className="h-6 w-6 text-white icon" />,
       color: "bg-purple-600",
       description:
         "I enjoy playing video games, participating in sports, reading books, and coding. Each activity contributes a unique element to my life, creating a dynamic mix of enjoyment, challenge, and learning.",
     },
     {
       title: "Programming thoughts",
       delay: "550",
       icon: <CodeBracketIcon className="h-6 w-6 text-white icon" />,
       color: "bg-orange-600",
       description:
         "Code is my canvas, crafting digital possibilities and Embracing challenges. I find joy in the art of programming.",
     },
     {
       title: "Career",
       delay: "650",
       icon: <FlagIcon className="h-6 w-6 text-white icon" />,
       color: "bg-green-600",
       description:
         "Navigating the digital realm, my career is a journey of innovation, problem-solving, and continuous growth in the ever-evolving field of web development.",
     },
     // Add more cards as needed
   ];


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
            className="w-100 h-100 object-cover rounded-full"
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

      {/* Section 2: about */}
      <section
        id="about"
        className="h-screen flex flex-col justify-center items-center text-center"
      >
        <div className="container mx-auto px-8" id="about-card">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 "
            id="about-wrapper"
          >
            {cardsData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
                color={card.color}
                delay={card.delay}
              />
            ))}
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
