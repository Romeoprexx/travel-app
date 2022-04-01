import React from 'react';
import './Styles/footer.css';
import {FaGooglePlus, FaFacebook, FaPinterest, FaTwitter, FaInstagram} from 'react-icons/fa'
import Googlelogo from './Images/gplus-connect.png';
import Twitterlogo from './Images/twitter-connect.png';
import Facebooklogo from './Images/fb-connect.png';
import Pinterestlogo from './Images/pinterest-connect.png';
import Instagramlogo from './Images/instagram-connect.png';
import Logo from './Images/logo3.png';

const Footer = () => (
  <div className="footer-wrap">
    <div className="footer-wrapper">
      <div className="column-one">
        <img id="logo" src={Logo} alt="footer logo" />
        <p style={{fontSize: '15px', color: 'white'}}>Deno's Traveler is building the future of how we experience our cities.</p>
        <p
          style={{
            color: '#2980b9',
            fontSize: '14px',
            
          }}
        >
          Made with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          by Romeo
        </p>
        <p style={{fontSize: '13px', color: 'white'}}>&copy; Deno's Romeo Acuity.</p>
        <p style={{fontSize: '13px', color: 'white'}}>150 Wharf Road Sydney, NSW.</p>
      </div>
      <div className="column-two">
        <h3 style={{color: 'hsl(317 100% 54%)'}}>Cities</h3>
        <ul style={{fontSize: '15px', color:'whitesmoke'}}>
          <li >New York</li>
          <li>Las Vegas</li>
          <li>Rome</li>
          <li>Paris</li>
          <li>London</li>
          <li>Dubai</li>
          <li>Barcelona</li>
          <li>+8 more</li>
        </ul>
      </div>
      <div className="column-three">
        <h3 style={{color: 'hsl(317 100% 54%)'}}>About us</h3>
        <ul style={{fontSize: '15px'}}>
          <li>About Deno's</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Terms of Usage</li>
        </ul>
      </div>
      <div className="column-four">
        <h3 style={{color: 'hsl(317 100% 54%)'}}>Contact</h3>
        <p style={{fontSize: '15px', color: 'white'}}>Feel free to get in touch via email:</p>
        <p style={{ color: '#4fc3f7', cursor: 'pointer' }}>
          info@denotraveler.com
        </p>
        <div className="social-media-contact">
          <FaFacebook className='iconic'/>
          <FaGooglePlus className='iconic' />
          <FaInstagram className='iconic' />
          <FaTwitter  className='iconic'/>
          <FaPinterest className='iconic' />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
