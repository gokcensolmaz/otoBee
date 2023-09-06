import React from 'react';
import '../styles/main.css';
import { useState, useEffect } from 'react';
import TeslaWhite from '../assets/images/tesla/tesla_white.svg';
import TeslaGrey from '../assets/images/tesla/tesla_grey.svg';
import TeslaRed from '../assets/images/tesla/tesla_red.svg';
import TeslaBlue from '../assets/images/tesla/tesla_blue.svg';

import PorscheWhite from '../assets/images/porsche/porsche_white.svg';
import PorscheGrey from '../assets/images/porsche/porsche_grey.svg';
import PorscheRed from '../assets/images/porsche/porsche_red.svg';
import PorscheBlue from '../assets/images/porsche/porsche_blue.svg';

import MaseratiWhite from '../assets/images/maserati/maserati_white.svg';
import MaseratiGrey from '../assets/images/maserati/maserati_grey.svg';
import MaseratiRed from '../assets/images/maserati/maserati_red.svg';
import MaseratiBlue from '../assets/images/maserati/maserati_blue.svg';

import JaguarWhite from '../assets/images/jaguar/jaguar_white.svg';
import JaguarGrey from '../assets/images/jaguar/jaguar_grey.svg';
import JaguarRed from '../assets/images/jaguar/jaguar_red.svg';
import JaguarBlue from '../assets/images/jaguar/jaguar_blue.svg';

const Home = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName("dot");

        const updateSlides = () => {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex].style.display = "block";
            dots[slideIndex].className += " active";
        };

        const interval = setInterval(() => {
            setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
            updateSlides();
        }, 3000);
        return () => clearInterval(interval);
    }, [slideIndex]);


    return (
        <main>
            <div className="slide-container">
                <div className="slide">
                    <div className="brand tesla"> TESLA </div>
                    <div className="car-container">
                        <img src={TeslaWhite} className="car car1" alt="Tesla White"></img>
                        <img src={TeslaGrey} className="car car2" alt="Tesla Grey"></img>
                        <img src={TeslaRed} className="car car3" alt="Tesla Red"></img>
                        <img src={TeslaBlue} className="car car4" alt="Tesla Blue"></img>
                    </div>
                </div>

                <div className="slide">
                    <div className="brand porsche"> PORSCHE </div>
                    <div className="car-container">
                        <img src={PorscheWhite} className="car car1" alt="Porsche White"></img>
                        <img src={PorscheGrey} className="car car2" alt="Porsche Grey"></img>
                        <img src={PorscheRed} className="car car3" alt="Porsche Red"></img>
                        <img src={PorscheBlue} className="car car4" alt="Porsche Blue"></img>
                    </div>
                </div>

                <div className="slide">
                    <div className="brand maserati"> MASERATI </div>
                    <div className="car-container">
                        <img src={MaseratiWhite} className="car car1" alt="Maserati White"></img>
                        <img src={MaseratiGrey} className="car car2" alt="Maserati Grey"></img>
                        <img src={MaseratiRed} className="car car3" alt="Maserati Red"></img>
                        <img src={MaseratiBlue} className="car car4" alt="Maserati Blue"></img>
                    </div>
                </div>

                <div className="slide">
                    <div className="brand jaguar"> JAGUAR </div>
                    <div className="car-container">
                        <img src={JaguarWhite} className="car car1" alt="Jaguar White"></img>
                        <img src={JaguarGrey} className="car car2" alt="Jaguar Grey"></img>
                        <img src={JaguarRed} className="car car3" alt="Jaguar Red"></img>
                        <img src={JaguarBlue} className="car car4" alt="Jaguar Blue"></img>
                    </div>
                </div>
            </div>

            {/* The dots/circles */}
            <div className="slideNav">
                <span className="dot" ></span>
                <span className="dot" ></span>
                <span className="dot" ></span>
                <span className="dot" ></span>
            </div>
        </main>

    )
}

export default Home;
