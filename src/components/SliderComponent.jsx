import { useState } from 'react';
import './SliderComponent.css';

const SliderComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [];

    return (
        <div className="slider-container">
            {images.length > 0 && (
                <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
                            <img src={image} alt={`Slide ${index}`} className="slider-image" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SliderComponent;
