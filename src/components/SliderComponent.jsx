import React, { useState } from 'react';
import './SliderComponent.css';

const SliderComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        '/public/images/DALL·E 2024-07-04 14.43.43.webp',
        '/public/images/DALL·E 2024-07-04 14.43.40.webp',
        '/public/images/DALL·E 2024-07-04 14.43.29.webp',
    ];

    return (
        <div className="slider-container">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
                        <img src={image} alt={`Slide ${index}`} className="slider-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderComponent;
