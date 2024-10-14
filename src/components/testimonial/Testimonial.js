import React from 'react';

import './testimonial.css';
import john from './../../assets/john-doe-image.png';
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className='test'>
        <div className='test-content'>
            <h4>Testimonial</h4>
            <div className='test-heading'>
                What They Are Saying
            </div>
            <p>
            Lorem ipsum dolor sit amet consectetur.Non tincidunt<br/>
            manga non et elit.Dolor tupis molestie dui<br/>
            magnis facilisis at fringilla quam.
            </p>
        </div>

        <div className='test-box'>
            <img src={john} alt='john'/>
            <p>
            Lorem ipsum dolor sit amet consectetur.Non tincidunt<br/>
            manga non et elit.Dolor tupis molestie dui<br/>
            magnis facilisis at fringilla quam.
            </p>
            <div className='stars'>
                < FaStar className='star'/>
                < FaStar className='star'/>
                < FaStar className='star'/>
                < FaStar className='star'/>
                < FaStar className='star'/>

                
            </div>

            <h3>John Doe</h3>
        </div>
    </div>
  )
}

export default Testimonial