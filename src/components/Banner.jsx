import React, { useEffect } from 'react';
import slider1 from '../assets/images/resized_classroom_image.png';
import slider2 from '../assets/images/resized_classroom_image2.png';
import slider3 from '../assets/images/slider5 (1).jpg';
import slider4 from '../assets/images/slider6 (1).jpeg';

const Banner = () => {
  useEffect(() => {
    // Initialize Owl Carousel after component mounts
    const initOwlCarousel = () => {
      if (window.$ && window.$.fn.owlCarousel) {
        $('.banner-car').owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          nav: false,
          dots: true,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn'
        });
      } else {
        // Wait for scripts to load
        setTimeout(initOwlCarousel, 100);
      }
    };

    initOwlCarousel();
  }, []);

  return (
    <section className="banner">
      <div className="banner-body">
        <div className="owl-carousel owl-theme banner-car">
          {/* Slider 1 */}
          <div className="item">
            <img className="main-img home-banner-desk" src={slider1} alt="Philanthropy Summit" />
            <img className="main-img home-banner-mob" src="/assets/images/banner1.jpg" alt="Philanthropy Summit" />
            <div className="container">
              <div className="ban-cont">
                <a className="main-btn" href="#">
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 6L18 12L12 18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Slider 2 */}
          <div className="item">
            <img className="main-img home-banner-desk" src={slider2} alt="US Forum" />
            <img className="main-img home-banner-mob" src="/assets/images/banner2.jpg" alt="US Forum" />
            <div className="container">
              <div className="ban-cont">
                <a className="main-btn" href="#">
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 6L18 12L12 18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Slider 3 */}
          <div className="item">
            <img className="main-img home-banner-desk" src={slider3} alt="Impact Report" />
            <img className="main-img home-banner-mob" src="/assets/images/banner3.jpg" alt="Impact Report" />
            <div className="container">
              <div className="ban-cont">
                {/* <h2><span></span> BCG-Indiaspora Impact Report</h2> */}
                {/* <p>First-ever data-driven report showcasing the contributions of the Indian diaspora in the US</p> */}
                <a className="main-btn" href="#">
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 6L18 12L12 18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Slider 4 (New) */}
          <div className="item">
            <img className="main-img home-banner-desk" src={slider4} alt="New Event" />
            <img className="main-img home-banner-mob" src="/assets/images/banner4.jpg" alt="New Event" />
            <div className="container">
              <div className="ban-cont">
                {/* <h2><span>EVENT</span> Special Highlight</h2> */}
                {/* <p>This slide showcases the latest update or event highlight.</p> */}
                <a className="main-btn" href="#">
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 6L18 12L12 18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Mouse Indicator */}
      <div className="mouse-indi-wrap d-flex flex-column align-items-center">
        <div className="mouse-wrap position-relative">
          <svg className="rect-outer" xmlns="http://www.w3.org/2000/svg" width="26" height="40" viewBox="0 0 26 40" fill="none">
            <rect x="1" y="1" width="24" height="37.7143" rx="12" fill="black" fillOpacity="0.15" stroke="white" strokeWidth="2"></rect>
          </svg>
          <svg className="rect-line" xmlns="http://www.w3.org/2000/svg" width="2" height="7" viewBox="0 0 2 7" fill="none">
            <path d="M1 0L1 6.42857" stroke="white" strokeWidth="2"></path>
          </svg>
        </div>
        <div className="scroll-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
            <path d="M1 1L6.5 6L12 1" stroke="white" strokeWidth="2"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Banner;
