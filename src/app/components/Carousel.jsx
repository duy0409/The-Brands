// components/Carousel.js
import React from 'react';

//npm install react-slick slick-carousel
//[Consult https://github.com/akiran/react-slick]
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ slides }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index}>
                    <img src={slide} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
