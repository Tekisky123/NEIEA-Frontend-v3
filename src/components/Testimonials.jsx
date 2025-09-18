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
    <section className="testimonials section-padding h-auto-responsive">
      <div className="container container-responsive">
        <div className="row mb-3">
          <div className="col-12 text-center">
            <h2 className="text-responsive-3xl font-bold text-gray-800 mb-2">What Our Students Say</h2>
            <p className="text-responsive-lg text-gray-600">Hear from our learners about their transformative experiences</p>
          </div>
        </div>
        <div className="owl-carousel owl-theme testimonial-car h-auto-responsive">
          <div className="item">
            <div className="row align-items-center">
              <div className="col-lg-5 order-2 order-lg-1">
                <div className="test-cont testimonial-card spacing-responsive-sm">
                  <img 
                    className="d-block d-md-none mb-4 w-8 h-8 dimensions-auto" 
                    src="/assets/images/Quotes1.png" 
                    alt="Quote" 
                    loading="lazy"
                  />
                  <img 
                    src="/assets/images/Md Wais Raza.png" 
                    alt="Md Wais Raza" 
                    className="w-full h-[200px] sm:h-[250px] lg:h-[280px] object-cover object-top rounded-lg shadow-soft"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2">
                <div className="test-cont spacing-responsive-sm">
                  <div className="profile-name d-block d-md-none mb-4">
                    <h5 className="text-responsive-lg font-semibold text-gray-800">Md Wais Raza</h5>
                    <p className="text-responsive-sm text-gray-600">Bihar, India</p>
                  </div>
                  <img 
                    className="d-none d-md-block mb-4 w-12 h-12" 
                    src="/assets/images/Quotes1.png" 
                    alt="Quote" 
                    loading="lazy"
                  />
                  <p className="text-responsive-base text-gray-700 leading-relaxed mb-6">I am thrilled to share my experience with the NEIEA English proficiency course that is completely free of cost! Actually, I have completed my matriculation from English medium school but even then I used to hesitate before speaking English with others I wanted to speak fluent and flawless English....</p>
                  <div className="profile-name d-none d-md-block">
                    <h5 className="text-responsive-lg font-semibold text-gray-800">Md Wais Raza</h5>
                    <p className="text-responsive-sm text-gray-600">Bihar, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row align-items-center">
              <div className="col-lg-5 order-2 order-lg-1">
                <div className="test-cont testimonial-card spacing-responsive-sm">
                  <img 
                    className="d-block d-md-none mb-4 w-8 h-8 dimensions-auto" 
                    src="/assets/images/Quotes2.png" 
                    alt="Quote" 
                    loading="lazy"
                  />
                  <img 
                    src="/assets/images/Misbah Rehman.png" 
                    alt="Misbah Rehman" 
                    className="w-full h-[200px] sm:h-[250px] lg:h-[280px] object-cover object-top rounded-lg shadow-soft"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2">
                <div className="test-cont spacing-responsive-sm">
                  <div className="profile-name d-block d-md-none mb-4">
                    <h5 className="text-responsive-lg font-semibold text-gray-800">Misbah Rehman</h5>
                    <p className="text-responsive-sm text-gray-600">India</p>
                  </div>
                  <img 
                    className="d-none d-md-block mb-4 w-12 h-12" 
                    src="/assets/images/Quotes2.png" 
                    alt="Quote" 
                    loading="lazy"
                  />
                  <p className="text-responsive-base text-gray-700 leading-relaxed mb-6">Today I am talking about my English class. This class is too good. After taking these classes my confidence to speak english has built up. Now , I speak English properly. Now , when I speak English I do not hesitate. In these classes we are not only studying, we also have fun.</p>
                  <div className="profile-name d-none d-md-block">
                    <h5 className="text-responsive-lg font-semibold text-gray-800">Misbah Rehman</h5>
                    <p className="text-responsive-sm text-gray-600">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row align-items-center">
              <div className="col-lg-5 order-2 order-lg-1">
                <div className="test-cont testimonial-card spacing-responsive-sm">
                  <img 
                    className="d-block d-md-none mb-4 w-8 h-8 dimensions-auto" 
                    src="/assets/images/Quotes3.png" 
                    alt="Quote" 
                    loading="lazy"
                  />
                  <img 
                    src="/assets/images/testimonial3.jpg" 
                    alt="Anita Manwani" 
                    className="w-full h-[200px] sm:h-[250px] lg:h-[280px] object-cover object-top rounded-lg shadow-soft"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2">
                <div className="test-cont spacing-responsive-sm">
                  <div className="profile-name d-block d-md-none mb-4">
                    <h5 className="text-responsive-lg font-semibold text-gray-800">Anita Manwani</h5>
                    <p className="text-responsive-sm text-gray-600">Former CEO, IBM India<br /><span>Board Member, Indiaspora</span></p>
                  </div>
                  <img 
                    className="d-none d-md-block mb-4 w-12 h-12" 
                    src="/assets/images/Quotes3.png" 
                    alt="Quote" 
                    loading="lazy"
                  />
                  <p className="text-responsive-base text-gray-700 leading-relaxed mb-6">Being part of Indiaspora has given me the opportunity to connect with incredible leaders from the Indian diaspora community. The organization's commitment to fostering collaboration and driving positive change is truly inspiring.</p>
                  <div className="profile-name d-none d-md-block">
                    <h5 className="text-responsive-lg font-semibold text-gray-800">Anita Manwani</h5>
                    <p className="text-responsive-sm text-gray-600">Former CEO, IBM India<br /><span>Board Member, Indiaspora</span></p>
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