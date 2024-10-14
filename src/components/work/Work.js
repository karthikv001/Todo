import React from 'react';
import './work.css';

import pickMeals from './../../assets/pick-meals-image.png';
import chooseHo from './../../assets/choose-image.png';
import FastD from './../../assets/delivery-image.png';

const Work = () => {
  return (
    <div className='work'>
      <div className='work-content'>
      <h4>Work</h4>
      <div className='heading'>How It Works</div>
      <p>
      Lorem ipsum dolor sit amet consectetur.Non tincidunt<br/>
      manga non et elit.Dolor tupis molestie dui<br/>
      magnis facilisis at fringilla quam.
      </p>
      </div>

      <div className='work-boxes'>

        <div className=' box'>
          <img src={pickMeals} alt='pickMeals' />
          <h3>Pick Meals</h3>
          <p>Lorem ipsum dolor sit amet consectetur.Non tincidunt
          manga non et elit.Dolor tupis molestie dui</p>
        </div>

        <div className=' box'>
          <img src={chooseHo} alt='chooseHO' />
          <h3>Choose How Often</h3>
          <p>Lorem ipsum dolor sit amet consectetur.Non tincidunt
          manga non et </p>
        </div>

        <div className=' box'>
          <img src={FastD} alt='fastD' />
          <h3>Fast Deliveries</h3>
          <p>Lorem ipsum dolor sit amet consectetur.Non tincidunt
          manga non et elit Lorem ipsum</p>
        </div>

      </div>
    </div>
  )
}

export default Work;