import React from 'react';

const VideoSection = () => {

  return (
    <section className="home-video section-padding">
      <div className="our-mission">
        <div className="container container-responsive">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="om-cont">
                <img 
                  src="/assets/images/innovation (1).png" 
                  alt="Innovation" 
                  className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-contain rounded-lg shadow-soft"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="om-cont spacing-responsive-sm">
                <span className="text-responsive-sm font-bold text-ngo-color2 uppercase tracking-wider block mb-2">Innovation</span>
                <p className="text-responsive-base text-gray-600 leading-relaxed mb-4">NEIEA has developed innovative approaches to advance its Vision and Mission. These include: a Blended Learning Model that integrates online teaching with onsite learning through advanced technology and pedagogy; a Partnering Model that fosters collective growth; a Flexible Learning System offering live sessions 18 hours a day, 7 days a week; and a Low-Cost and Free Education Model that makes quality education accessible and affordable for all.</p>
                <a className="main-btn btn-responsive touch-manipulation inline-flex items-center" href="#" aria-label="Learn more about innovation">
                  Learn more
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
    </section>
  );
};

export default VideoSection;