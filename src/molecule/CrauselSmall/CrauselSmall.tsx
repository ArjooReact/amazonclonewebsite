import React, { useState, useEffect } from 'react';
import './CrauselSmall.css';
import image1 from '../../assets/crausel1.png'
import image2 from '../../assets/crausel2.png'
import image3 from '../../assets/crausel3.png'
import image4 from '../../assets/crausel4.png'
import image5 from '../../assets/crausel5.png'
import image6 from '../../assets/crausel6.png'
import image7 from '../../assets/crausel7.png'
import image8 from '../../assets/crausel8.png'
import image9 from '../../assets/crausel9.png'
import image10 from '../../assets/crausel10.png'
import image11 from '../../assets/crausel11.png'
import image12 from '../../assets/crausel12.png'
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
    image2,
    image3,
    image4,

    image5,
    image6,
    image7,
    image8,

    image9,
    image10,
    image11,
    image12,

]

const CarouselSmall: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000); // Change slide every 3 seconds
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
    <div className="carousel-container-small">
      {/* Carousel images container */}
      <div
        className="carousel-slide-small"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images1.map((image, index) => (
          <img 
          style={{width:'140px', height:'140px'}}
          key={index} src={image} alt={`advertisement ${index + 1}`} />
        ))}
      </div>

      {/* Navigation buttons */}
      <button className="carousel-button-small prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button-small next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {images1.map((_, index) => (
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

export default CarouselSmall;
