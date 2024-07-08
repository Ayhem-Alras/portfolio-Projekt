import React, { useState } from 'react';
import './SliderComponent.css';

const SliderComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        '/public/images/DALL·E 2024-07-04 14.43.43 - A 3D image of a sphere with a soft, gradient blue background, rendered in a sleek, modern style with detailed textures and realistic shadows.webp',
        '/public/images/DALL·E 2024-07-04 14.43.40 - A 3D image of a cube with a soft, gradient blue background, rendered in a sleek, modern style with detailed textures and realistic shadows.webp',
        '/public/images/DALL·E 2024-07-04 14.43.29 - A 3D image of a pyramid with a soft, gradient blue background, rendered in a sleek, modern style with detailed textures and realistic shadows.webp',
    ];

    const goToNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    const goToPrev = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    return (
        <div className="slider-container">
            <div className="slider">
                {images.map((image, index) => (
                    <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
                        <img src={image} alt={`Slide ${index}`} className="slider-image" />
                    </div>
                ))}
            </div>
            <div className="arrow-left" onClick={goToPrev}></div>
            <div className="arrow-right" onClick={goToNext}></div>
        </div>
    );
};

export default SliderComponent;
