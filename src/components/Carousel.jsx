import "../css/carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Carousel({ images, autoPlay = true, autoPlayInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [direction, setDirection] = useState(1); // 1 pour avancer, -1 pour reculer

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextImage();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, autoPlayInterval]);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToImage = (index) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;

    if (touchStartX - touchEndX > 50) {
      // Swipe left
      nextImage();
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right
      prevImage();
    }
  };

  const slideVariants = {
    enter: (custom) => ({
      opacity: 0,
      x: custom === 1 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (custom) => ({
      opacity: 0,
      x: custom === 1 ? -100 : 100,
    }),
  };
  return (
    <>
      <div
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="carousel-button prev" onClick={prevImage}>
          ◀
        </button>
        <div className="carousel-window">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="carousel-image"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
        <button className="carousel-button next" onClick={nextImage}>
          ▶
        </button>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>

        <button className="fullscreen-button" onClick={toggleFullscreen}>
          <FontAwesomeIcon
            className="expicn"
            icon={faUpRightAndDownLeftFromCenter}
          />
        </button>
      </div>

      {isFullscreen && (
        <div className="modal-overlay" onClick={toggleFullscreen}>
          <button className="close-buttonFullScreen" onClick={toggleFullscreen}>
            ✖
          </button>
          <div
            className="fullscreen-carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="carousel-button prev fullscreen-prev"
              onClick={prevImage}
            >
              ◀
            </button>
            <div className="carousel-window fullscreen-window">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={images[currentIndex]}
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  className="carousel-image"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
            <button
              className="carousel-button next fullscreen-next"
              onClick={nextImage}
            >
              ▶
            </button>
          </div>
          <div className="carousel-dots fullscreen-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Carousel;
