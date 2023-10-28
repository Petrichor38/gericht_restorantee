import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9W 53rd St, NewYork NY10019 USA</p>
        <p className='p__opensans'>+1-212-344-1230</p>
        <p className='p__opensans'>+1-212-355-1632</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer__logo" />
        <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others.</p>
        <img src={images.spoon} alt="footer__spoon" style={{ marginTop: '15px' }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>



      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00-12:00 PM</p>
        <p className='p__opensans'>Saturday-Wednesday:</p>
        <p className='p__opensans'>07:00-18:00 PM</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Gericht.All rights reserved.</p>
    </div>

  </div>

);

export default Footer;
