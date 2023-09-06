import '../styles/detail.css';
import React, { useState } from 'react';
import panameraImage from '../assets/images/porsche/panamera.jpeg';
import taycanImage from '../assets/images/porsche/taycan.jpeg';
import panameraInteriorImage from '../assets/images/porsche/panamera-interior.jpeg';
import taycanInteriorImage from '../assets/images/porsche/taycan-interior.jpeg';

const Porsche = () => {
    const [selectedModel, setSelectedModel] = useState(null);

    const models = [
        {
            name: 'Model X',
            previewImg: panameraImage,
            detailImg: panameraInteriorImage,
            description: 'Model X description here'
        },
        {
            name: 'Model 3',
            previewImg: taycanImage,
            detailImg: taycanInteriorImage,
            description: 'Model 3 description here'
        }
    ];

    return (
        <div>
            <h1>porsche</h1>
            
            <div className="model-bar">
                {models.map(model => (
                    <div 
                        key={model.name} 
                        className="model-option" 
                        onClick={() => setSelectedModel(model)}
                    >
                        <img src={model.previewImg} alt={model.name} />
                        <p>{model.name}</p>
                    </div>
                ))}
            </div>

            {selectedModel && (
                <div className="model-detail">
                    <img src={selectedModel.detailImg} alt={selectedModel.name} />
                    <p>{selectedModel.description}</p>
                </div>
            )}
        </div>
    );
}

export default Porsche;
