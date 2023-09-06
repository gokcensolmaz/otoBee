import React, { useState } from 'react';
import FlipCard from './FlipCard';
import '../styles/service.css';

const Service = () => {
    const [flipStatus, setFlipStatus] = useState([false, false, false]);

    const flipCard = (index) => {
        const newFlipStatus = [...flipStatus];
        newFlipStatus[index] = !newFlipStatus[index];
        setFlipStatus(newFlipStatus);
    }

    const cardData = [
        {
            title: 'Discover a New Standard of Buying with OtoBee.',
            description: "Discover a new level of luxury with OtoBee. We offer a personalized vehicle purchasing experience, guiding you through a curated selection of premium brands with a commitment to excellence. Start your exceptional journey with OtoBee today."
            
        },
        {
            title: 'Experience Premium Care: Service & Maintenance by OtoBee.',
            description: "At OtoBee, we believe the journey doesn't end with your purchase; it's just the beginning. Our dedicated team provides personalized after-sales service and maintenance, ensuring your vehicle performs at its best long after you drive off the lot. Experience the premium care you deserve with OtoBee."
            
        },
        {
            title: 'Navigate with Confidence: OtoBee Insurance.',
            description: "Your journey should be as secure as it is luxurious. With OtoBee Insurance, we provide comprehensive protection tailored to your needs, ensuring peace of mind wherever the road takes you. Navigate the world with confidence, knowing that OtoBee has you covered."
            
        }
    ];

    return (
        <main>
            <h1 className='service-page-title'>Services</h1>
            <div className='cards'>
                {cardData.map((card, index) => (
                    <FlipCard
                        key={index}
                        isFlipped={flipStatus[index]}
                        title={card.title}
                        description={card.description}
                        buttonText="Form"
                        onFlip={() => flipCard(index)}
                    />
                ))}
            </div>
        </main>
    );
}

export default Service;
