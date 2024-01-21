import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export const Details = ({ data }) => {
  return (
    <>
      {data.map((items, index) => {
        return (
          <li className="flex border-b py-2" key={index}>
            <span className="font-bold w-24">{items.title}</span>
            <span className="text-gray-700">{items.content}</span>
          </li>
        );
      })}
    </>
  );
};

export const Timeline = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="flex items-center w-full my-6 -ml-1.5" key={index}>
            <div className="w-1/12 z-10">
              <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
            </div>
            <div className="w-11/12 border border-gray-300 p-2 rounded">
              <p className="text-sm">{item.main}</p>
              <p className="text-sm">{item.highlight}</p>
              <p className="text-sm">{item.sub}</p>
              <p className="text-xs text-gray-500">{item.time}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export const Career = ({ data }) => {
  const colorMap = {
    "HTML/CSS": { title: "text-orange-500", bg: "bg-orange-500" },
    JS: { title: "text-yellow-500", bg: "bg-yellow-500" },
    PHP: { title: "text-purple-700", bg: "bg-purple-500" },
    React: { title: "text-sky-700", bg: "bg-sky-300" },
    MySQL: { title: "text-blue-700", bg: "bg-blue-300" },
    Frameworks: { title: "text-pink-700", bg: "bg-pink-300" },
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl"
            key={index}
          >
            <div className="flex items-center justify-between">
              <span
                className={`font-bold text-sm ${colorMap[item.title]?.title}`}
              >
                {item.sub}
              </span>
              <span
                className={`text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default`}
              >
                {item.status}
              </span>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div
                className={`w-12 h-12 p-2.5 ${
                  colorMap[item?.title]?.title
                } bg-opacity-20 rounded-full text-indigo-600 flex items-center justify-center`}
              >
                <div>{item.icon}</div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-end">
                  <span className={`text-2xl 2xl:text-2xl font-bold`}>
                    {item.title}
                  </span>
                  <div className="flex items-center ml-2 mb-1">
                    <Icon
                      icon="icon-park-outline:level"
                      className="w-3 h-3 text-gray-500"
                    />
                    <span
                      className="font-bold text-sm text-gray-500 ml-0.5"
                      title="skill percentage"
                    >
                      {item.level}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export const Carousel = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            id={`slide${index}`}
            className="carousel-item relative w-full h-full"
            key={index}
          >
            <img src={item.img} className="w-full h-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? data.length - 1 : index - 1}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${(index + 1) % data.length}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export const Background = ({ images }) => {
  const [currentBgIndex , setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(()=>{
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    },5000)

  return () => clearInterval(interval);
  }, [images]);

  const currentBackground = images[currentBgIndex];
  return (
    <div className="w-full h-[250px] transition-transform ease-in-out duration-1000">
      <img
        src={currentBackground}
        className="w-full h-full object-cover transition-opacity ease-in-out duration-1000"
        style={{ opacity: 1 }}
        alt="Profile Background"
      />
    </div>
  );
}
