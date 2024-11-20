import {useState} from "react";
// import React, { useState } from "react";

const CauroselDisplay = () => {

    
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { backgroundImage: 'url(./ image1.jpg)' },
    { backgroundImage: 'url(image2.jpg)' },
    { backgroundImage: 'url(image3.jpg)' },
  ];

 
  return (
    <div className="relative max-w-md mx-auto">
      <div className="carousel overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide bg-cover bg-center h-64 transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: slide.backgroundImage }}
          ></div>
        ))}
      </div>
     
    </div>
  );
};
 
export default CauroselDisplay;