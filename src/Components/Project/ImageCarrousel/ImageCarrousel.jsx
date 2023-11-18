import React, { useState } from 'react';
import styles from './ImageCarrousel.module.css';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1 );
  };

  return (
    <div className={styles.carousel}>
        {
            currentIndex === 0 ? 
                <button onClick={prevSlide} className={styles.prevButton} disabled>
                    <FaArrowAltCircleLeft />
                </button> :
                <button onClick={prevSlide} className={styles.prevButton}>
                    <FaArrowAltCircleLeft />
                </button>
        }
      <div className={styles.slideContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            <img src={image} alt={`slide ${index + 1}`} className={styles.img}/>
          </div>
        ))}
      </div>
      {
        currentIndex === images.length - 1 ?       
            <button onClick={nextSlide} className={styles.nextButton} disabled>
                <FaArrowAltCircleRight />
            </button> :
            <button onClick={nextSlide} className={styles.nextButton}>
                <FaArrowAltCircleRight />
            </button>
      }
    </div>
  );
};

export default ImageCarousel;