import React, { useEffect } from 'react';
// Using public path for images
const slider1 = '/assets/images/resized_classroom_image.png';
const slider2 = '/assets/images/resized_classroom_image2.png';
const slider3 = '/assets/images/slider5 (1).jpg';
const slider4 = '/assets/images/slider6 (1).jpeg';

const Banner = () => {
  useEffect(() => {
    // Initialize Owl Carousel after component mounts
    const initOwlCarousel = () => {
      if (window.$ && window.$.fn.owlCarousel) {
        // Destroy existing carousel if it exists
        $('.banner-car').trigger('destroy.owl.carousel');
        $('.banner-car').removeClass('owl-carousel owl-theme');
        
        // Reinitialize
        $('.banner-car').addClass('owl-carousel owl-theme').owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          nav: false,
          dots: true,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          responsive: {
            0: { items: 1 },
            768: { items: 1 },
            1024: { items: 1 }
          }
        });
      } else {
        // Wait for scripts to load with timeout limit
        const retryCount = (window.bannerRetryCount || 0) + 1;
        if (retryCount < 50) { // Max 5 seconds
          window.bannerRetryCount = retryCount;
          setTimeout(initOwlCarousel, 100);
        }
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(initOwlCarousel, 200);
    
    // Cleanup function
    return () => {
      if (window.$ && window.$.fn.owlCarousel) {
        $('.banner-car').trigger('destroy.owl.carousel');
      }
    };
  }, []);

  return (
    <section className="banner">
      <div className="banner-body">
        <div className="owl-carousel owl-theme banner-car">
          {/* Slider 1 */}
          <div className="item">
            <img 
              className="main-img home-banner-desk" 
              src={slider1} 
              alt="Philanthropy Summit" 
              loading="eager"
            />
            <img 
              className="main-img home-banner-mob" 
              src={slider1} 
              alt="Philanthropy Summit" 
              loading="eager"
            />
            <div className="container container-responsive">
              {/* <div className="ban-cont">
                <a className="main-btn" href="#">
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 6L18 12L12 18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div> */}
            </div>
          </div>

          {/* Slider 2 */}
          <div className="item">
            <img 
              className="main-img home-banner-desk" 
              src={slider2} 
              alt="US Forum" 
              loading="lazy"
            />
            <img 
              className="main-img home-banner-mob" 
              src={slider2} 
              alt="US Forum" 
              loading="lazy"
            />
            <div className="container container-responsive">
              {/* <div className="ban-cont">
                <a className="main-btn" href="#">
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 6L18 12L12 18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div> */}
            </div>
          </div>

          {/* Slider 3 */}
          <div className="item">
            <img 
              className="main-img home-banner-desk" 
              src={slider3} 
              alt="Impact Report" 
              loading="lazy"
            />
            <img 
              className="main-img home-banner-mob" 
              src={slider3} 
              alt="Impact Report" 
              loading="lazy"
            />
            <div className="container container-responsive">
              {/* <div className="ban-cont">
                <h2><span></span> BCG-Indiaspora Impact Report</h2>
                <p>First-ever data-driven report showcasing the contributions of the Indian diaspora in the US</p>
                <a className="main-btn" href="#">
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 6L18 12L12 18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div> */}
            </div>
          </div>

          {/* Slider 4 (New) */}
          <div className="item">
            <img 
              className="main-img home-banner-desk" 
              src={slider4} 
              alt="New Event" 
              loading="lazy"
            />
            <img 
              className="main-img home-banner-mob" 
              src={slider4} 
              alt="New Event" 
              loading="lazy"
            />
            <div className="container container-responsive">
              {/* <div className="ban-cont">
                <h2><span>EVENT</span> Special Highlight</h2>
                <p>This slide showcases the latest update or event highlight.</p>
                <a className="main-btn" href="#">
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 6L18 12L12 18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div> */}
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
