import React, { useEffect, useState } from "react";
import avatar from '../assets/avatar.jpg'
import Background from '../assets/fuxz.jpg'
import JsCert from '../assets/javascript.png'
import InterCert from '../assets/itermidiate.png'
import PHPCert from '../assets/php.png'

import {Details, Timeline, Career, Carousel} from "./Details";
import Flag from '../assets/ph.png'
import {CodeBracketIcon} from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";
// import reactIcon from "@iconify/icons-mdi/account";


// datas for the display 
const personalInfo = [
  {
    title: "Full name",
    icon: "",
    content: "Eric John Balbas",
  },
  {
    title: "Birthday",
    icon: "",
    content: "01 Feb, 2000",
  },
  {
    title: "Works At",
    icon: "",
    content: "Arktech Phils. Inc.",
  },
  {
    title: "Mobile",
    icon: "",
    content: "(+63) 968*****1",
  },
  {
    title: "Email",
    icon: "",
    content: "ericjohnbalbas@gmail.com",
  },
  ,
  {
    title: "Languages",
    icon: "",
    content: "English, Filipino",
  },
];
const TimelineData = [
  {
    main: "Completed Senior Highschool.",
    highlight: "With honors",
    sub: "at San Fabian Integrated School.",
    time: "2018-2019",
    icon: "",
  },
  {
    main: "Attained a Bachelor's degree.",
    highlight: "Computer Science",
    sub: "DMMMMSU-SLUC",
    time: "2022-2023",
    icon: "",
  },
  {
    main: "First Job.",
    highlight: "Computer Programmer",
    sub: "Arktech Phils. Inc.",
    time: "Jul-2022 Dec 2022",
    icon: "",
  },
  {
    main: "Explored the role of a Data Analyst.",
    highlight: "Data monitoring",
    sub: "LDP Farms Food Corp.",
    time: "Jan 2023 - Jun 2023 ",
    icon: "",
  },
  {
    main: "Pursuing Web Development",
    highlight: "Web dev.",
    sub: "Arktech Phils. Inc",
    time: "Jun-2023 Presnt",
    icon: "",
  },
];
const CareerData = [
  {
    title: "HTML/CSS",
    sub: "Front End",
    color: "orange",
    icon: <Icon icon="icon-park-outline:html-five" className="w-12 h-12" />,
    level: "92",
    status: "advanced",
  },
  {
    title: "JS",
    sub: "Front/Back",
    color: "yellow",
    icon: <Icon icon="fa-brands:js-square" className="w-12 h-12" />,
    level: "89",
    status: "intermediate",
  },
  {
    title: "PHP",
    color: "purple",
    sub: "Back end",
    icon: <Icon icon="file-icons:php" className="w-12 h-12" />,
    level: "90",
    status: "intermediate",
  },
  {
    title: "React",
    color: "green",
    sub: "Front end",
    icon: <Icon icon="nonicons:react-16" className="w-12 h-12" />,
    level: "30",
    status: "beginner",
  },
  {
    title: "MySQL",
    color: "blue",
    sub: "Back end",
    icon: <Icon icon="logos:mysql" className="w-12 h-12" />,
    level: "80",
    status: "advanced",
  },
  {
    title: "Frameworks",
    color: "blue",
    sub: "Tailwind - Bootsrap 5",
    icon: <Icon icon="fluent:library-32-regular" className="w-12 h-12" />,
    level: "50",
    status: "mid",
  },
];
const CarouselData = [
  {
    img : JsCert
  },
  {
    img : InterCert
  },
  {
    img : PHPCert
  },
]

//


const LandingPage = () => {
   const [openSettings, setOpenSettings] = useState(false);

   const handleSettingsClick = () => {
     setOpenSettings(!openSettings);
   };

   const handleOutsideClick = () => {
     setOpenSettings(false);
   };

   return (
     <>
       <div class="bg-white rounded-lg shadow-xl pb-8">
         <div className="absolute right-12 mt-4 rounded">
           <button
             onClick={handleSettingsClick}
             className="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20"
             title="Settings"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-4 w-4"
               fill="currentColor"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="3"
                 d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
               ></path>
             </svg>
           </button>
           {openSettings && (
             <div
               onClick={handleOutsideClick}
               className="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl"
             >
               <div className="py-2 border-b">
                 <p className="text-gray-400 text-xs px-6 uppercase mb-1">
                   Settings
                 </p>
                 <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-4 w-4 text-gray-400"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       stroke-width="2"
                       d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                     ></path>
                   </svg>
                   <span className="text-sm text-gray-700">Share Profile</span>
                 </button>
                 <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-4 w-4 text-gray-400"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       stroke-width="2"
                       d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                     ></path>
                   </svg>
                   <span className="text-sm text-gray-700">Block User</span>
                 </button>
                 <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-4 w-4 text-gray-400"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       stroke-width="2"
                       d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                     ></path>
                   </svg>
                   <span className="text-sm text-gray-700">More Info</span>
                 </button>
               </div>
               <div className="py-2">
                 <p className="text-gray-400 text-xs px-6 uppercase mb-1">
                   Feedback
                 </p>
                 <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-4 w-4 text-gray-400"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       stroke-width="2"
                       d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                     ></path>
                   </svg>
                   <span className="text-sm text-gray-700">Report</span>
                 </button>
               </div>
             </div>
           )}
         </div>
         <div className="w-full h-[250px]">
           <img
             src={Background}
             className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
             alt="Profile Background"
           />
         </div>

         <div className="flex flex-col items-center -mt-20">
           <img
             src={avatar}
             className="w-40 border-4 border-white rounded-full"
             alt="Profile"
           />
           <div className="flex items-center space-x-2 mt-2">
             <p className="text-2xl">Eric John balbas</p>
             <span className="bg-blue-500 rounded-full p-1" title="Verified">
               <CodeBracketIcon className="h-3 w-3 text-white " />
             </span>
           </div>
           <p className="text-gray-700">IT - Computer Programmer</p>
           <div className="flex items-center space-x-2">
             <p className="text-sm text-gray-500">Pangasinan, Philippines</p>
             <span>
               {" "}
               <img className="w-5 h-5" src={Flag}></img>
             </span>
           </div>
         </div>

         <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
           <div className="flex items-center space-x-4 mt-2">
             <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-4 w-4"
                 viewBox="0 0 20 20"
                 fill="currentColor"
               >
                 <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
               </svg>
               <span>Connect</span>
             </button>
             <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-4 w-4"
                 viewBox="0 0 20 20"
                 fill="currentColor"
               >
                 <path
                   fill-rule="evenodd"
                   d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                   clip-rule="evenodd"
                 ></path>
               </svg>
               <span>Message</span>
             </button>
           </div>
         </div>
       </div>
       <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
         <div class="w-full flex flex-col 2xl:w-1/3">
           <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
             <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
             <ul className="mt-2 text-gray-700">
               <Details data={personalInfo} />
               <li class="flex items-center border-b py-2 space-x-2">
                 <span class="font-bold w-24">Elsewhere:</span>
                 <a>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height="16"
                     width="16"
                     viewBox="0 0 512 512"
                   >
                     <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                   </svg>
                 </a>
                 <a>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height="16"
                     width="16"
                     viewBox="0 0 512 512"
                   >
                     <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
                   </svg>
                 </a>
                 <a>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height="16"
                     width="16"
                     viewBox="0 0 512 512"
                   >
                     <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                   </svg>
                 </a>
                 <a>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height="16"
                     width="16"
                     viewBox="0 0 512 512"
                   >
                     <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                   </svg>
                 </a>
               </li>
             </ul>
           </div>
           <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
             <h4 className="text-xl text-gray-900 font-bold">Timeline</h4>
             <div className="relative px-4">
               <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
               <Timeline data={TimelineData} />
             </div>
           </div>
         </div>
         <div class="flex flex-col w-full 2xl:w-2/3">
           <div class="flex-2 bg-white rounded-lg shadow-xl p-8">
             <h4 class="text-xl text-gray-900 font-bold">About</h4>
             <p class="mt-2 text-gray-700">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
               voluptates obcaecati numquam error et ut fugiat asperiores. Sunt
               nulla ad incidunt laboriosam, laudantium est unde natus cum
               numquam, neque facere. Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum!
               Voluptas eveniet aperiam at maxime, iste id dicta autem odio
               laudantium eligendi commodi distinctio!
             </p>
           </div>
           <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
             <h4 class="text-xl text-gray-900 font-bold">Career</h4>

             <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
               <Career data={CareerData} />
             </div>

             <div class="mt-4">
               <h4 class="text-xl text-gray-900 font-bold">Certificates</h4>
               <div className="carousel w-full h-96 mt-4">
                  <Carousel data={CarouselData} />
               </div>
             </div>
           </div>
         </div>
       </div>
     </>
   );
}


export default LandingPage;
