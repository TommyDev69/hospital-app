import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import PatientMap from "./PatientMap";

const Patient = () => {
  const { Patient: patient, pending, error } = useFetch("http://localhost:8002/data");

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = patient ? patient.length : 0;

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides); // Loop back to the first slide
  };

  // Autoplay logic with cleanup
  useEffect(() => {
    if (isPaused || totalSlides === 0) return; // If paused or no slides, do not start autoplay

    const interval = setInterval(() => {
      nextSlide(); // Move to the next slide
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount or pause
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, totalSlides]);

  return (
    <div>
      {error && <h1>No testimonies yet</h1>}
      {pending && <p className="text-2xl text-white">Loading...</p>}
      {patient && (
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)} // Pause autoplay on hover
          onMouseLeave={() => setIsPaused(false)} // Resume autoplay when mouse leaves
        >
          <PatientMap record={patient} currentIndex={currentIndex} />
        </div>
      )}
    </div>
  );
};

export default Patient;
