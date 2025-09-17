import React, { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    // Initialize Owl Carousel for testimonials
    const initTestimonialCarousel = () => {
      if (window.$ && window.$.fn.owlCarousel) {
        $('.testimonial-car').owlCarousel({
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
        setTimeout(initTestimonialCarousel, 100);
      }
    };

    initTestimonialCarousel();
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="owl-carousel owl-theme testimonial-car">
          <div className="item">
            <div className="row">
              <div className="col-lg-5">
                <div className="test-cont">
                  <img className="d-block d-md-none" src="/assets/images/Quotes1.png" alt="Quote" />
                  <img src="/assets/images/MdWais.jpeg" alt="Md Wais Raza" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="test-cont">
                  <div className="profile-name d-block d-md-none mt-4 mb-4">
                    <h5>Md Wais Raza</h5>
                    <p>Bihar, India</p>
                  </div>
                  <img className="d-none d-md-block" src="/assets/images/Quotes1.png" alt="Quote" />
                  <p>I am thrilled to share my experience with the NEIEA English proficiency course that is completely free of cost! Actually, I have completed my matriculation from English medium school but even then I used to hesitate before speaking English with others I wanted to speak fluent and flawless English....</p>
                  <div className="profile-name d-none d-md-block">
                    <h5>Md Wais Raza</h5>
                    <p>Bihar, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-lg-5">
                <div className="test-cont">
                  <img className="d-block d-md-none" src="/assets/images/Quotes2.png" alt="Quote" />
                  <img src="/assets/images/ChatGPT Image Sep 16, 2025, 09_58_12 PM.png" alt="Misbah Rehman" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="test-cont">
                  <div className="profile-name d-block d-md-none mt-4 mb-4">
                    <h5>Misbah Rehman</h5>
                  </div>
                  <img className="d-none d-md-block" src="/assets/images/Quotes2.png" alt="Quote" />
                  <p>Today I am talking about my English class. This class is too good. After taking these classes my confidence to speak english has built up. Now , I speak English properly. Now , when I speak English I do not hesitate. In these classes we are not only studying, we also have fun.</p>
                  <div className="profile-name d-none d-md-block">
                    <h5>Misbah Rehman</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-lg-5">
                <div className="test-cont">
                  <img className="d-block d-md-none" src="/assets/images/Quotes3.png" alt="Quote" />
                  <img src="/assets/images/testimonial3.jpg" alt="Anita Manwani" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="test-cont">
                  <div className="profile-name d-block d-md-none mt-4 mb-4">
                    <h5>Anita Manwani</h5>
                    <p>Former CEO, IBM India<br /><span>Board Member, Indiaspora</span></p>
                  </div>
                  <img className="d-none d-md-block" src="/assets/images/Quotes3.png" alt="Quote" />
                  <p>Being part of Indiaspora has given me the opportunity to connect with incredible leaders from the Indian diaspora community. The organization's commitment to fostering collaboration and driving positive change is truly inspiring.</p>
                  <div className="profile-name d-none d-md-block">
                    <h5>Anita Manwani</h5>
                    <p>Former CEO, IBM India<br /><span>Board Member, Indiaspora</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-lg-5">
                <div className="test-cont">
                  <img className="d-block d-md-none" src="/assets/images/Quotes4.png" alt="Quote" />
                  <img src="/assets/images/testimonial4.jpg" alt="Rajiv Shah" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="test-cont">
                  <div className="profile-name d-block d-md-none mt-4 mb-4">
                    <h5>Rajiv Shah</h5>
                    <p>President, Rockefeller Foundation<br /><span>Former USAID Administrator</span></p>
                  </div>
                  <img className="d-none d-md-block" src="/assets/images/Quotes4.png" alt="Quote" />
                  <p>Indiaspora represents the best of what the Indian diaspora can achieve when we come together with purpose and vision. The organization's impact on global development and social change is remarkable.</p>
                  <div className="profile-name d-none d-md-block">
                    <h5>Rajiv Shah</h5>
                    <p>President, Rockefeller Foundation<br /><span>Former USAID Administrator</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;