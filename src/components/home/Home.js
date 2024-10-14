import React from 'react';
import './home.css';
import Navbar from '../navbar/Navbar';
import { FaArrowRight } from "react-icons/fa";
import homeBanner from './../../assets/home-banner-image.png';
const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        
        <div className='home-content'>
            <div className='content'>
                <div className='heading'>
                    Your Favourite Food<br/>
                    Delivered Hot &<br/>
                    Fresh
                </div>

                <p>
                    Healthy switcher chefs do all the prep work, like<br/>
                    peeding, chopping & marinating,so you can cook<br/>
                    a fresh food.
                </p>

                <button>Order Now <FaArrowRight /></button>
            </div>

            <div className='home-img'>
                <img src={homeBanner} alt='homeBanner' />
            </div>
        </div>
    </div>
  )
}

export default Home