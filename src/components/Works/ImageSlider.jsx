import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // const handleImageClick = () => {
  //   alert("Navigating to the image...");
  // };

  return (
    <div className="slider">
      {/* Arrows */}
      <button
        className="slider__arrow slider__arrow--left"
        onClick={goToPrevious}
      >
        <BiChevronLeft />
      </button>
      <button className="slider__arrow slider__arrow--right" onClick={goToNext}>
        <BiChevronRight />
      </button>

      {/* Display the current slide */}
      <div className="slider__image-container">
        <img src={images[currentIndex].src} className="slider__image" />
      </div>

      {/* Dot indicators */}
      <div className="slider__indicators">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`slider__indicator ${
              currentIndex === index ? "current" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
