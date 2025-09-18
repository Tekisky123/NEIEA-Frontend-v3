import React, { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    // Initialize Owl Carousel for testimonials
    const initTestimonialCarousel = () => {
      if (window.$ && window.$.fn.owlCarousel) {
        // Destroy existing carousel if it exists
        $('.testimonial-car').trigger('destroy.owl.carousel');
        $('.testimonial-car').removeClass('owl-carousel owl-theme');
        
        // Reinitialize
        $('.testimonial-car').addClass('owl-carousel owl-theme').owlCarousel({
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
        const retryCount = (window.owlRetryCount || 0) + 1;
        if (retryCount < 50) { // Max 5 seconds
          window.owlRetryCount = retryCount;
          setTimeout(initTestimonialCarousel, 100);
        }
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(initTestimonialCarousel, 200);
    
    // Cleanup function
    return () => {
      if (window.$ && window.$.fn.owlCarousel) {
        $('.testimonial-car').trigger('destroy.owl.carousel');
      }
    };
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
                  <img src="/assets/images/waise12.png" alt="Md Wais Raza" />
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
                  <img src="/assets/images/misbha1.png" alt="Misbah Rehman" />
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
                  <img src="/assets/images/malik khan .png" alt="Malik Khan" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="test-cont">
                  <div className="profile-name d-block d-md-none mt-4 mb-4">
                    <h5>Malik Khan</h5>
                    <p>Karnataka India</p>
                  </div>
                  <img className="d-none d-md-block" src="/assets/images/Quotes3.png" alt="Quote" />
                  <p>I took an online course in NEIEA which is regarding spoken English and I was blown away by how much I learned. The instructor was engaging and knowledgeable, and the course material was presented in a clear and concise way ....</p>
                  <div className="profile-name d-none d-md-block">
                    <h5>Malik Khan</h5>
                    <p>Karnataka India</p>
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
                  <img src="/assets/images/kaur1.jpeg" alt="Jaswinder Kaur" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="test-cont">
                  <div className="profile-name d-block d-md-none mt-4 mb-4">
                    <h5>Jaswinder Kaur</h5>
                    <p></p>
                  </div>
                  <img className="d-none d-md-block" src="/assets/images/Quotes4.png" alt="Quote" />
                  <p>As a 59-year-old from Nagpur, I'm thrilled to have discovered NEIEA. Thanks to Niloufer Ma'am's excellent teaching and patience, I've been able to overcome my doubts and learn effectively. Online classes have made it easy for me to pursue my education, and I'm so grateful for this opportunity. NEIEA has shown me that age is no barrier to learning, and I can't wait to continue my studies. Thank you, NEIEA!</p>
                  <div className="profile-name d-none d-md-block">
                    <h5>Jaswinder Kaur</h5>
                    <p></p>
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