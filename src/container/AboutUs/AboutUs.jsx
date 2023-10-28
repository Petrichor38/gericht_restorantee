import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" />
        <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni error delectus laborum! Dolor consequuntur facere incidunt iste quia deleniti voluptates repellat eius ipsam earum dolorem, maiores ipsum expedita officiis, commodi dolorum minus.</p>
        <button type='button' className='custom__button'>Known More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam cupiditate, architecto iste expedita vitae incidunt ipsa labore alias, dolores cumque. Suscipit nam dolore corrupti nihil dignissimos voluptate, tempora impedit dolorem ipsam.</p>
        <button type='button' className='custom__button'>Known More</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
