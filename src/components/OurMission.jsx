import React from 'react';

const OurMission = () => {
  return (
    <div className="our-mission">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 md-mt-5">
            <div className="om-cont">
              <img src="/assets/images/our-mission.png" alt="Our Mission" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="om-cont">
              <span>Our Mission</span>
              <p>To inspire the Indian Diaspora to be a force for good by providing a platform to collaborate and build community engagement, and catalyze social change.</p>
              <a className="main-btn" href="#">
                Explore more
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
  );
};

export default OurMission;