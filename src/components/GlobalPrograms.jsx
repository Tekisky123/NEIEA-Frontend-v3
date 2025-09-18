import React from 'react';

const GlobalPrograms = () => {
  return (
    <section className="global-program section-padding">
      <div className="container container-responsive">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <div className="gp-cont spacing-responsive-sm">
              <h1 className="sec-heading text-responsive-2xl font-bold mb-3">Collective Working Through Partnerships</h1>
              <p className="text-responsive-base text-gray-600 leading-relaxed mb-3">NEIEA's partnership model is rooted in collective effort. Partner institutions provide infrastructure, student safety, and classroom coordination, while NEIEA delivers high-quality content, innovative pedagogy, and live teaching. Together, they actively involve parents in the learning process, ensuring stronger student outcomes. NEIEA also enhances the capacity of partner institutions by training their teachers in pedagogy, technology, classroom management, and English proficiency.</p>
              <p className="text-responsive-base text-gray-600 leading-relaxed mb-4"><strong className="text-ngo-color1">Open-Source Approach:</strong> NEIEA makes its content materials freely available to all institutions that wish to adopt and benefit from its model, reinforcing its commitment to equitable and collaborative education.</p>
              <a className="main-btn btn-responsive touch-manipulation inline-flex items-center" href="#" aria-label="Learn more about partnerships">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-2">
                  <path d="M6 12H18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12 6L18 12L12 18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <div className="gp-cont">
              <img 
                src="/assets/images/global-map.png" 
                alt="Global Map showing our partnerships worldwide" 
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPrograms;