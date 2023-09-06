import '../styles/detail.css';
import React, { useState } from 'react';
import modelXImage from '../assets/images/tesla/modelx.jpeg';
import model3Image from '../assets/images/tesla/model3.jpeg';
import modelXInteriorImage from '../assets/images/tesla/modelx_interior.jpeg';
import model3InteriorImage from '../assets/images/tesla/model3_interior.jpeg';

const Tesla = () => {
    const [selectedModel, setSelectedModel] = useState(null);

    const models = [
        {
            name: 'Model X',
            previewImg: modelXImage,
            detailImg: modelXInteriorImage,
            description: 'Model X description here'
        },
        {
            name: 'Model 3',
            previewImg: model3Image,
            detailImg: model3InteriorImage,
            description: 'Model 3 description here'
        }
    ];

    return (
        <div>
            <div className="model-bar">
                {models.map(model => (
                    <div
                        key={model.name}
                        className="model-option"
                        onClick={() => setSelectedModel(model)}
                    >
                        <div className='model-bar-item'>
                            <img src={model.previewImg} alt={model.name} />
                            <p>{model.name}</p>
                        </div>
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

export default Tesla;
