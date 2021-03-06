import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div class="row footer-background" >
            <div class="col-12 col-md-4 col-lg-4 footer-1stcol">
                <img src={logo} alt="" />
                <p>A team of doctor working to ensure you receive the best treatment.</p>
                <span> <i class="fas fa-map-marker-alt"></i>  55 Main Road, USA</span><br />
                <span> <i class="far fa-envelope"></i>  support@gmail.com</span><br />
                <span><i class="fas fa-phone-alt"></i>  +012 (345) 678 99</span><br />


            </div>
            <div class="col-12 col-md-4 col-lg-4">
                <h1>Popular Services</h1>
                <p> aDental Surgery</p>
                <p>Heart Center</p>
                <p>Drug / Medicine</p>
                <p>Neurology</p>

            </div>
            <div class="col-12 col-md-4 col-lg-4 footer">
                <h1>Contact Form</h1>
                <input type="text" placeholder="Your Name" /><br />
                <input type="email" placeholder='Your Email' /><br />
                <input type="message" placeholder='Message' /><br />
                <textarea name="message" ></textarea><br />
                <button id='send-button' >Send Now</button>

            </div>
        </div>
    );
};

export default Footer;