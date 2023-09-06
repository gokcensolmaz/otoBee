import React, { useRef } from 'react';
import '../styles/about.css';
import ReactPlayer from 'react-player'
const VIDEO_PATH = 'videos/about_us_video.mp4';

const About = () => {
    const playerRef = useRef(null);
    return (
        <main>
            <div className='wrapper'>
                <div className='left-col'>
                    <h1 className='about-us-page-title'>About Us</h1>
                    <p className='about-us-page-paragraph'>OtoBee, a premier automotive subsidiary of BeeHIVE Holding, specializes in the sales and after-sales
                        services of elite brands like Tesla, Jaguar, Maserati, and Porsche. With 8 branches across 5 locations
                        in Turkey, our focus is on expansive service, unwavering customer satisfaction, and building lifelong
                        relationships. Committed to innovation and excellence, OtoBee envisions growth as a united family,
                        continually revitalizing the automotive sector.
                    </p>
                </div>

                <div className='right-col'>
                    <div>
                    <ReactPlayer 
                        ref={playerRef} 
                        url={VIDEO_PATH} 
                        playing={true} 
                        controls={false} 
                        onEnded={() => playerRef.current.seekTo(0)}
                    />
                    </div>

                </div>
            </div>
        </main>
    );

}
export default About;