import React from 'react';
import { Link } from 'react-router-dom';
import './OurMission.css';

const OurMission = () => {
  return (
    <>
      {/* First Section - Image Left */}
      <div className="our-mission section-padding">
        <div className="container container-responsive">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="om-cont">
                <img 
                  src="/assets/images/vision2 (1).jpg" 
                  alt="our mission" 
                  className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover rounded-lg shadow-soft"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="om-cont spacing-responsive-sm">
                <span className="text-responsive-sm font-bold text-ngo-color2 uppercase tracking-wider block mb-2">Our Mission</span>
                <p className="text-responsive-base text-gray-600 leading-relaxed mb-4">We are dedicated to ensuring that there is no loss of potential and wastage of a child's life, due to inequities in education. Our mission is to create an inclusive educational system that delivers high-quality learning which is affordable, scalable, and transformative.</p>
                <span className="text-responsive-sm font-bold text-ngo-color2 uppercase tracking-wider block mb-2">Our Vision</span>
                <p className="text-responsive-base text-gray-600 leading-relaxed mb-4">To create a society that upholds the sanctity of every human life, rejects all forms of discrimination, and aspires to build a peaceful, compassionate, and sustainable world.</p>
                <a className="main-btn btn-responsive touch-manipulation inline-flex items-center" href="#" aria-label="Explore more about our mission">
                  Explore more
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-2">
                    <path d="M6 12H18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6L18 12L12 18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Meet Our Leadership */}
      <div className="our-mission leadership-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-1">
              <div className="om-cont">
                <span>Meet Our Leadership</span>
                <p>Visionary leaders dedicated to transforming education and empowering communities</p>
                
                <div className="leadership-card">
                  <h4>Founder & President</h4>
                  <h3>Javeed Mirza</h3>
                  <p>Javeed Mirza, Founder and President of NEIEA… A visionary leader with global experience in social and political activism, teaching, business and in research. It was his passionate pursuit for ending inequity and injustice meted out to the marginalized, that made him strive for many decades and build NEIEA…. a low-cost scalable model of education that has the potential to transform global education.</p>
                </div>
                
                <Link className="main-btn" to="/about-us/leadership">
                  Meet Our Full Leadership Team
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6L18 12L12 18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-2">
              <div className="om-cont">
                        <img src="/assets/images/leader4.png" alt="Javeed Mirza - Founder & President" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
