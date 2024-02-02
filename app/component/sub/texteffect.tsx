import React, { useEffect, useState } from "react";

const TextEffect = () => {
  const texts = ["Web developer", "Programmer","Learner"]; // Add more texts as needed
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [text, setText] = useState(texts[currentTextIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000); // Change the interval duration as needed (e.g., 2000 milliseconds = 2 seconds)

    return () => clearInterval(interval);
  }, []);
 
  useEffect(() => {
    const newText = texts[currentTextIndex];
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= newText.length) {
        setText(newText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 300); // Adjust the interval according to your preference

    return () => clearInterval(interval);
  }, [currentTextIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#413b47] to-[#2f2836]">
      {text}
    </span>
  );
};

export default TextEffect;
