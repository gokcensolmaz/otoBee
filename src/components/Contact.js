import React from 'react';
import '../styles/contact.css';

const Contact = () => {
    return (
        <main>
            <h1>Contact</h1>

            <div className="contact-container">
                <div className="contact-form">
                    <h2>Contact Form</h2>
                    <form action="#">
                        <div className="input-data">
                            <select required >
                                <option value="" disabled selected>Choose a Topic</option>
                                <option value="">Request</option>
                                <option value="email">Complaints</option>
                                <option value="phone">Suggestion</option>
                                <option value="phone">Thanks</option>
                                <option value="phone">Campaign</option>
                            </select>
                            <div className="underline"></div>
                        </div>
                        <div className='input-row'>
                            <div className="input-data">
                                <input type="text" required placeholder='First Name' />
                                <div className="underline"></div>
                            </div>
                            <div className="input-data">
                                <input type="text" required placeholder='Last Name' />
                                <div className="underline"></div>
                            </div>
                        </div>
                        <div className='input-row'>
                            <div className="input-data">
                                <input type="text" required placeholder='E-mail' />
                                <div className="underline"></div>
                            </div>
                            <div className="input-data">
                                <input type="text" required placeholder='Phone' />
                                <div className="underline"></div>
                            </div>
                        </div>
                        <div className="input-data">
                            <textarea rows="4" cols="40" required placeholder='Your message...'></textarea>
                            <div className="underline"></div>
                        </div>

                        <p>Within the scope of the lighting text, by OtoBee Otomotiv Ticaret ve Sanayi Anonim company;</p>
                        <div className="checkbox-container">
                            <input type="checkbox" id="customCheckbox" />
                            <label htmlFor="customCheckbox">
                                Processing my identity, communication, customer transaction, marketing and vehicle-insurance
                                data for the purposes of customizing the products and services offered according to my tastes,
                                usage habits and needs, and in this context, sending advertisements, promotions, campaigns and
                                similar commercial electronic messages to my contact information, I agree to share the flour
                                with the suppliers from whom it receives service.
                            </label>

                        </div>

                        <div className='button-cont'>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>

                <div className='contact-right-col'>
                    <div className="contact-map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.3002793485493!2d32.80157657598608!3d39.91229587152523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d348b3b125a689%3A0x9ca79f94c7adb83c!2zU8O2xJ_DvHTDtnrDvCwgU8O2xJ_DvHTDtnrDvCBDZC4gS2_DpyBUb3dlcnMgTm86MiwgMDY1MTAgw4dhbmtheWEvQW5rYXJh!5e0!3m2!1sen!2str!4v1694009855836!5m2!1sen!2str"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className='phone-card'>
                        <i className="fas fa-phone-alt"></i>
                        <h2>(0312) 220 55 02</h2>
                    </div>
                    <div className='mail-card'>
                        <i className="fas fa-envelope"></i>
                        <h2>info@otobee.com</h2>
                    </div>
                    <div className='address-card'>
                        <i className="fas fa-map-marker-alt"></i>
                        <h2>Söğütözü Cd. Koç Towers No:2, Söğütözü, 06510 Çankaya/Ankara</h2>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Contact;