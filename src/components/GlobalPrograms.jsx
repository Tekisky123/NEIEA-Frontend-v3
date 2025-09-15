import React from 'react';

const GlobalPrograms = () => {
  return (
    <section className="global-program">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="gp-cont">
              <h1 className="sec-heading">Global programs</h1>
              <p>Our unwavering commitment to leadership development shapes the future for a better world.</p>
              <a className="main-btn" href="#">
                Explore more
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 12H18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12 6L18 12L12 18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
              <div className="gp-indicator-body d-none d-md-flex">
                <div className="gpib-cont">
                  <p>Countries with a dedicated team and operation and a strong member base.</p>
                </div>
                <div className="gpib-cont gpib-cont1">
                  <p>Countries where we have held events and where our G20 event participants come from.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="gp-cont">
              <img src="/assets/images/global-map.png" alt="Global Map" />
            </div>
            <div className="gp-indicator-body d-flex d-md-none">
              <div className="gpib-cont">
                <p>Countries with a dedicated team and operation and a strong member base.</p>
              </div>
              <div className="gpib-cont gpib-cont1">
                <p>Countries where we have held events and where our G20 event participants come from.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPrograms;