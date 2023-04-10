import React, { useState, useEffect } from 'react';
import '../Styles.css/Slider.css'

// uses the "useState" and "useEffect" hooks from React to manage the state of the current slide 
//and to set an interval to automatically advance the slideshow.

//setCurrentSlide" function is used to update the state of the current slide,
// and it is initially set to 0

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
  {
  id: 0,
  image: '/images/scarlet.jpg',
  },
  {
  id: 1,
      image: '/images/stella.jpg',
    },
    {
      id: 2,
      image: '/images/leo.jpg' ,
    },
    {
      id: 3,
      image: '/images/nubia.jpg' ,
    },
    {
      id: 3,
      image: '/images/Kween.jpg' ,
    },
  
  ];
  
// "useEffect" hook is used to set an interval that calls the "setCurrentSlide" 
//function every 5000 milliseconds (or 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      <div className="hero-slider">
      <div className='about'>
<div class="content">
<br></br><h3>Why<span> Our Company </span></h3>
<p>Starting a makeup company VAB Cosmetics at the age of 17 in a dormitory may seem like a daunting task, but with a passion for makeup and determination, anything is possible. After practicing on friends and honing her skills, she became a professional makeup artist. Her love of makeup led her to design and come up with her own makeup formula. With the support of family and friends, her company grew quickly and became a great success. Through hard work and dedication, this young entrepreneur was able to turn her passion for makeup into a thriving business. Her story is an inspiration for anyone who wants to pursue their dreams and turn their passion into a career.

</p>
{/* <button className='btn'>read more</button> */}
</div>
</div>
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
      </div>
    </div>
  );

}

export default HeroSlider;
