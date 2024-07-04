// src/components/SliderComponent.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import './SliderComponent.css'; // تأكد من استيراد ملف CSS

const SliderComponent = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const images = [
        '/public/images/DALL·E 2024-07-04 14.43.29 - A 3D image of a pyramid with a soft, gradient blue background, rendered in a sleek, modern style with detailed textures and realistic shadows.webp',
        '/public/images/DALL·E 2024-07-04 14.43.40 - A 3D image of a cube with a soft, gradient blue background, rendered in a sleek, modern style with detailed textures and realistic shadows.webp',
        '/public/images/DALL·E 2024-07-04 14.43.43 - A 3D image of a sphere with a soft, gradient blue background, rendered in a sleek, modern style with detailed textures and realistic shadows.webp',
        

        
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index}`} className="slider-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
