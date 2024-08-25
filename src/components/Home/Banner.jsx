/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import LuxuryPenthouse from '../../assets/Banner/LuxuryPenthouse.jpg'
import BeachfrontParadise from '../../assets/Banner/BeachfrontParadise.jpg'
import MountainRetreat from '../../assets/Banner/MountainRetreat.jpg'
import ModernVilla from '../../assets/Banner/ModernVilla.jpg'
import PrivateIslandEstate from '../../assets/Banner/PrivateIslandEstate.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';


const Banner = () => {
    const slides = [
        {
            image: LuxuryPenthouse,
            heading: 'Luxury Penthouse',
            description: 'Experience the pinnacle of urban living with our exclusive penthouse options.',
        },
        {
            image: BeachfrontParadise,
            heading: 'Beachfront Paradise',
            description: 'Step into your private oasis with stunning beachfront views and luxury amenities.',
        },
        {
            image: MountainRetreat,
            heading: 'Mountain Retreat',
            description: 'Escape to serenity in our exclusive mountain retreat residences.',
        },
        {
            image: ModernVilla,
            heading: 'Modern Villa',
            description: 'Elegance and comfort meet in our modern villa, perfect for sophisticated living.',
        },
        {
            image: PrivateIslandEstate,
            heading: 'Private Island Estate',
            description: 'Unparalleled privacy and luxury await you at our private island estates.',
        },
    ];

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                // navigation={true}
                centeredSlides={true}
                pagination={{ clickable: true, }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                style={{ width: '100%', height: '520px' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={slide.image} alt={slide.heading} className="w-full h-full object-cover" />
                        <div className="absolute bg-gray-700 text-white inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
                            <h2 className="text-5xl font-bold">{slide.heading}</h2>
                            <p className="mt-2">{slide.description}</p>
                        </div>
                    </SwiperSlide>
                ))}

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;