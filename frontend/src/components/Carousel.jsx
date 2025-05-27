import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useRef, useEffect } from 'react';
import '../styles/carousel.scss';

import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';






const images = [pic1, pic2, pic3, pic4, pic5];

export const Carousel = () => {
    const timer = useRef();
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        rtl: true,
        renderMode: 'performance',
        drag: false,
    });

    useEffect(() => {
        if (!slider) return;

        timer.current = setInterval(() => {
            slider.current?.next();
        }, 5000); // 5 seconds

        return () => clearInterval(timer.current);
    }, [slider]);

    return (
        <div className="carousel-wrapper">
            <div ref={sliderRef} className="keen-slider hero-carousel">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="keen-slider__slide hero-slide"
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
            </div>

            {/* You can position text or buttons here */}
            <div className="hero-overlay">
                <h1>פתרונות אבטחה לבית ולעסק</h1>
                <p>מצלמות, אזעקות, מערכות אינטרקום ועוד</p>
            </div>
        </div>
    );
};

