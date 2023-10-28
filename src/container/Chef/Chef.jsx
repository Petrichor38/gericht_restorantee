import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quas voluptatibus cum inventore cupiditate molestias nobis saepe quod, officia iure sint magni, recusandae accusamus praesentium atque. Fugit quo id iste sit facilis?</p>
      </div>

      <div className='app__chef-sign'>
        <p className='app__chef-sign_first'>Kevin Luo</p>
        <p className='p__opensans'>Chef&Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
