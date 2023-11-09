import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'; // Import the brand icons you need
import './footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="wave"></div>
            <div className="section">
                <h3>INFORMATION</h3>
                <ul>
                    <li>Help</li>
                    <li>Order Status</li>
                    <li>Delivery Choices</li>
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Price Promise</li>
                </ul>
            </div>
            <div id="contact" className="section">
                <h3>CONTACT US</h3>
                <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                <p>(+0000) 123-456-789</p>
                <p>info@example.com</p>
            </div>
            <div className="section newsletter">
                <h3>NEWSLETTER</h3>
                <p>Enter your email</p>
                <div className="newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button id="subscribe">SUBSCRIBE</button>
                </div>
                <div className="social-icons">
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
