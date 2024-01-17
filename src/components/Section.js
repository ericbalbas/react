import React, { useEffect } from "react";
import Typed from "typed.js";
import myPicture from "../assets/me2.png";
import HomeElement from "./HomeElement";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { UsersIcon,PuzzlePieceIcon,CodeBracketIcon,FlagIcon,PhoneIcon, EnvelopeIcon, CodeBracketSquareIcon,MapPinIcon } from "@heroicons/react/24/outline";



const Card = ({ title, description, icon , color, delay  }) => {
  
  const gradient = {
    blue: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
    purple: "bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600",
    orange: "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600",
    green: "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
  };

  return (
    <div
      className="max-w-md mx-auto rounded-lg overflow-hidden shadow-md mb-4 bg-gray-800"
      data-aos="fade-right"
      data-aos-delay={`${delay}`}
    >
      {/* Card Header */}
      <div
        className={`p-4 flex items-center justify-center card-header bg-gray-700 border-2 rounded-md border-gray-500`}
      >
        <div
          className={`bg-purple-600 h-10 w-10 flex items-center justify-center rounded-full mr-2 header-icon`}
          data-aos="slide-right"
          data-aos-delay={`${700}`}
        >
          {icon}
        </div>
        <h2
          className="text-xl font-bold text-sky-500  card-text-header"
          data-aos="slide-left"
          data-aos-delay={`${700}`}
        >
          {title}
        </h2>
      </div>

      {/* Card Body */}
      <div className={`p-2 card-body`}>
        <p
          className="text-lg text-gray-300 py-4 px-4 text-justify card-text-body"
          data-aos="fade-down"
          data-aos-delay={`${700}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const TimeLine = ({ count, year, icon, title, description }) => {
  const position = count % 2 == 0 ? "start" : "end";
  return (
    <li>
      <div className="timeline-middle rounded-full bg-purple-700 p-2">{icon}</div>
      <div
        className={`timeline-${position} md:text-${
          count % 2 == 0 ? "end" : "start"
        } mb-10`}
      >
        <time className="text-xl ">{year}</time>
        <div className="text-xl text-sky-500">{title}</div>
        {description}
      </div>
      <hr className="w-5 h-5 bg-gray-300" />
    </li>
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
       icon: <UsersIcon className="h-6 w-6text-gray-300 icon" />,
       color: "bg-blue-600",
       description:
         "Hello, I'm Eric John Balbas, a Web Developer from San Fabian, Pangasinan. Passionate about coding and innovation. Join me on this journey in the dynamic world of web development.",
     },
     {
       title: "Things I like to do",
       delay: "450",
       icon: <PuzzlePieceIcon className="h-6 w-6 text-gray-300 icon" />,
       color: "bg-purple-600",
       description:
         "I enjoy playing video games, participating in sports, reading books, and coding. Each activity contributes a unique element to my life, creating a dynamic mix of enjoyment, challenge, and learning.",
     },
     {
       title: "Programming thoughts",
       delay: "550",
       icon: <CodeBracketIcon className="h-6 w-6 text-gray-300 icon" />,
       color: "bg-violet-600",
       description:
         "Code is my canvas, crafting digital possibilities and Embracing challenges. I find joy in the art of programming.",
     },
     {
       title: "Career",
       delay: "650",
       icon: <FlagIcon className="h-6 w-6 text-gray-300 icon" />,
       color: "bg-sky-600",
       description:
         "Navigating the digital realm, my career is a journey of innovation, problem-solving, and continuous growth in the ever-evolving field of web development.",
     },
     // Add more cards as needed
   ];

   const TimelineData = [
     {
       year: "2018",
       icon: <UsersIcon className="h-6 w-6 text-gray-300 icon " />,
       title: "Dummy title",
       description: (
         <p class="text-sm">
           iMac is a family of all-in-one Mac desktop computers designed and
           built by Apple Inc. It has been the primary part of Apple's consumer
           desktop offerings since its debut in August 1998, and has evolved
           through seven distinct forms
         </p>
       ),
     },
     {
       year: "2022",
       icon: <UsersIcon className="h-6 w-6 text-gray-300 icon " />,
       title: "Dummy title",
       description: (
         <p class="text-sm">
           iMac is a family of all-in-one Mac desktop computers designed and
           built by Apple Inc. It has been the primary part of Apple's consumer
           desktop offerings since its debut in August 1998, and has evolved
           through seven distinct forms
         </p>
       ),
     },
     {
       year: "2023",
       icon: <UsersIcon className="h-6 w-6 text-gray-300 icon " />,
       title: "Dummy title",
       description: (
         <p class="text-sm">
           iMac is a family of all-in-one Mac desktop computers designed and
           built by Apple Inc. It has been the primary part of Apple's consumer
           desktop offerings since its debut in August 1998, and has evolved
           through seven distinct forms
         </p>
       ),
     },
   ];


  return (
    <>
      {/**Section 1: Home Page */}
      <section
        id="home"
        className="h-screen flex items-center justify-center text-white"
      >
        <div
          className="container flex justify-center items-center"
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
            className="text-left profile"
            data-aos="fade-down-right"
            data-aos-delay="600"
          >
            <h1 id="typed-h1" className="text-4xl text-sky-500 font-bold mb-2">
              <HomeElement
                data={[
                  "I'm Eric John Balbas",
                  "Dummy Text 2",
                  "Dummy Text 3",
                  "Dummy Text 4",
                ]}
              />
            </h1>
            <div className="flex items-center ps-2 mb-2">
              <div class="p-1 rounded-full bg-purple-700">
                <CodeBracketSquareIcon className="w-5 h-5  text-gray-300" />
              </div>
              <p
                id="typed-p"
                className="text-xl ms-2 font-semibold text-gray-400"
              >
                Full Stak Developer
              </p>
            </div>
            <div className="flex items-center ps-2  mb-2">
              <div class="p-1 rounded-full bg-purple-700">
                <PhoneIcon className="w-5 h-5  text-gray-300" />
              </div>
              <p
                id="typed-p"
                className="text-xl ms-2 font-semibold text-gray-400"
              >
                +639683070411
              </p>
            </div>

            <div className="flex items-center ps-2 mb-2">
              <div class="p-1 rounded-full bg-purple-700">
                <EnvelopeIcon className="w-5 h-5  text-gray-300" />
              </div>

              <p
                id="typed-p"
                className="text-xl ms-2 font-semibold text-gray-400"
              >
                ericjohnbalbas@gmail.com
              </p>
            </div>

            <div className="flex items-center ps-2 mb-2">
              <div class="p-1 rounded-full bg-purple-700">
                <MapPinIcon className="w-5 h-5  text-gray-300" />
              </div>
              <p
                id="typed-p"
                className="text-xl ms-2 font-semibold text-gray-400"
              >
                St. tomas, Batangas, Philippines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: about */}
      <section
        id="about"
        className="h-screen pt-20 flex flex-col justify-center items-center text-center"
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
        <div className="container mx-auto px-8" id="experience-card">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {/* <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">1984</time>
                <div className="text-lg font-black">
                  First Macintosh computer
                </div>
                The Apple Macintosh—later rebranded as the Macintosh 128K—is the
                original Apple Macintosh personal computer. It played a pivotal
                role in establishing desktop publishing as a general office
                function. The motherboard, a 9 in (23 cm) CRT monitor, and a
                floppy drive were housed in a beige case with integrated
                carrying handle; it came with a keyboard and single-button
                mouse.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">1998</time>
                <div className="text-lg font-black">iMac</div>
                iMac is a family of all-in-one Mac desktop computers designed
                and built by Apple Inc. It has been the primary part of Apple's
                consumer desktop offerings since its debut in August 1998, and
                has evolved through seven distinct forms
              </div>
              <hr />
            </li> */}
            {TimelineData.map((data, index) => {
              console.log(index); // Log the index/key
              return (
                <TimeLine
                  key={index}
                  count={index}
                  year={data.year}
                  icon={data.icon}
                  title={data.title}
                  description={data.description}
                />
              );
            })}
          </ul>
        </div>
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
