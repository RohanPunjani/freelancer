import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaEnvelope ,FaInstagram, FaTwitter} from "react-icons/fa";
import './home.css';


const Footer = () => {
    return (
        <footer class="footer-distributed">
        <div class="footer-left">

            <h3>Freelance<span>India</span></h3>

            <p class="footer-links">
                <a href="#" class="p-1">Home</a>
                 
                <a href="#" class="p-1">About</a>
                 
                <a href="#" class="p-1">Faq</a>
                  
                <a href="#" class="p-1">Contact</a>
            </p>

            <p class="footer-company-name">Freelance India &copy; 2020</p>

            <div class="footer-icons">

                <a href="#" class="m-1"><FaFacebook></FaFacebook></a>
                <a href="#" class="m-1"><FaTwitter></FaTwitter></a>
                <a href="#" class="m-1"><FaInstagram></FaInstagram></a>
                <a href="#" class="m-1"><FaEnvelope></FaEnvelope></a>

            </div>

        </div>

        <div class="footer-right">

            <p>Contact Us</p>

            <form action="#" method="post">

                <input type="text" name="email" placeholder="Email" />
                <textarea name="message" placeholder="Message"></textarea>
                <button>Send</button>

            </form>

        </div>
    </footer>
    );
}

export default Footer;