
import React, { useState, useEffect } from 'react';
import './Slideshow.css';

interface SlideshowProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
}

const Slideshow: React.FC<SlideshowProps> = ({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="slideshow no-images">
        <div className="slide-placeholder">
          <p>No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="slideshow">
      <div className="slide-container">
        <div 
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className="slide"
            >
              <img 
                src={image} 
                alt={`Slide ${index + 1}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&auto=format`;
                }}
              />
            </div>
          ))}
        </div>

        {showControls && images.length > 1 && (
          <>
            <button 
              className="slide-control prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button 
              className="slide-control next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ›
            </button>
          </>
        )}
      </div>

      {showIndicators && images.length > 1 && (
        <div className="slide-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
