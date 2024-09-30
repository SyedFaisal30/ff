import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Slider = () => {
  // Image data (You can replace it with dynamic data if needed)
  const images = [
    "Images/Display/1.jpg",
    "Images/Display/2.jpeg",
    "Images/Display/3.jpg",
    "Images/Display/4.jpg",
    "Images/Display/5.jpg",
    "Images/Display/6.jpg",
    "Images/Display/7.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <div className="slides">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ display: index === currentSlide ? "block" : "none" }}
          />
        ))}
      </div>
      <FaAngleLeft className="prev" onClick={prevSlide} />
      <FaAngleRight className="next" onClick={nextSlide} />
    </div>
  );
};

export default Slider;
