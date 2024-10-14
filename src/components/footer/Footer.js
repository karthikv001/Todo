import React from 'react';
import './footer.css';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <h2>FOODIE</h2>
            <div className='icons'>
              <FaTwitter className='icon'/>
              <FaLinkedin className='icon'/>
              <FaYoutube className='icon'/>
              <FaFacebookF className='icon'/>
        </div>
        </div>

        <div className='footer-menu'>
          <div className='fmenu'>
            <ul>
              <li>Quality</li>
              <li>Help</li>
              <li>Share</li>
              <li>Carrers</li>
              <li>Work</li>
              <li>Testimonials</li>
            </ul>
          </div>     

          <div className='fmenu'>
            <ul>
              <li>244-5333-7783</li>
              <li>hello@food.com</li>
              <li>press@food.com</li>
              <li>Contact@food.com</li>
              
            </ul>
          </div>     

          <div className='fmenu'>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>     
</div>
             

    </div>        

  )
}
export default Footer;        
