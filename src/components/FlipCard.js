import React from 'react';

const FlipCard = ({ isFlipped, title, description, buttonText, onFlip }) => {
    return (
        <div className={"flip-card " + (isFlipped ? "flipped" : "")}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className='text-body'>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <h2>Complete the Form to Begin Your Journey.</h2>
                        <button onClick={onFlip}>{buttonText}</button>
                    </div>
                </div>

                <div className="flip-card-back">
                    <h2 className='form-title'>Complete the Form to Begin Your Journey.</h2>

                    <form action="#">
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" required placeholder='First Name' />
                                <div className="underline"></div>
                            </div>
                            <div className="input-data">
                                <input type="text" required placeholder='Last Name' />
                                <div className="underline"></div>
                            </div>
                            <div className="input-data">
                                <input type="text" required placeholder='E-mail' />
                                <div className="underline"></div>
                            </div>
                            <div className="input-data">
                                <input type="text" required placeholder='Phone Number' />
                                <div className="underline"></div>
                            </div>
                            <div className='button-cont'>
                                <button type="button" onClick={onFlip}>Cancel</button>
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
