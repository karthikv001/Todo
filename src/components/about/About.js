import aboutBanner from './../../assets/about-background-image.png';
import { FaCirclePlay } from "react-icons/fa6";
import './about.css';

const About=()=>{

    return(
        <div className="about">
            <div className="about-img">
                <img src={aboutBanner} alt='aboutBanner'/>
            </div>

            <div className="about-content">

                <h4>About</h4>
            
                <div className='heading'>
                    Your Favourite Food<br/>
                    Delivered Hot &<br/>
                    Fresh
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur.Non tincidunt<br/>
                    manga non et elit.Dolor tupis molestie dui<br/>
                    magnis facilisis at fringilla quam.
                    <br/>
                    <br/>
                    Non tincidunt manga non et elit.Dolor tupis molestie<br/> 
                    dui magnis facilisis at fringilla quam.

                </p>
                <div className='btn'>
                <button>Learn More</button>
                <button><FaCirclePlay /> Watch Video</button>
                </div>

            </div>
        </div>
        
    )
}

export default About;