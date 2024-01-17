import React, { useState, useEffect } from "react";
import "../ChangeElement.css";


const HomeElement = ({data}) => {
  const [displayText, setDisplayText] = useState("Portfolio");
  const texts = data;

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      // Change the text to the next one in the array
      setDisplayText(texts[currentIndex]);

      currentIndex = (currentIndex + 1) % texts.length;
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []); // Empty dependency array ensures useEffect runs once on mount

  return <div className="changing-element" >
      {displayText}
    </div>;
};

export default HomeElement;
