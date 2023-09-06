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
                    <h2>Complete the Form to Begin Your Journey.</h2>
                    <div className='container'>
                        <form action="#">
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="">First Name</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="">Last Name</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="">Email Address</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="">Website Name</label>
                                </div>
                                <div className="form-row submit-btn">
                                    <div className="input-data">
                                        <div className="inner"></div>
                                        <input type="submit" value="submit" />
                                    </div>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
