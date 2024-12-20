import React, { useState, useEffect } from 'react';
import './Crausel.css';
import image1 from '../../assets/banner1.png'
import image2 from '../../assets/banner2.png'
const images = [
  'https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg',
  'https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png',
  'https://m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg',
  'https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg',
  'https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg',
  'https://m.media-amazon.com/images/I/61O72XhcEkL._SX3000_.jpg',
  'https://m.media-amazon.com/images/I/61VuJdpjvaL._SX3000_.jpg',
  'https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg'
];

const images1= [
    image1,
    image2

]

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      {/* Carousel images container */}
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`advertisement ${index + 1}`} />
        ))}
      </div>

      {/* Navigation buttons */}
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
