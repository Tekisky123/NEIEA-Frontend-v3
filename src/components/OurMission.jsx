// import React from 'react';

// const OurMission = () => {
//   return (
//     <div className="our-mission">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 md-mt-5">
//             <div className="om-cont">
//               <img src="/assets/images/our-mission.png" alt="Our Mission" />
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="om-cont">
//               <span>Our Mission</span>
//               <p>To inspire the Indian Diaspora to be a force for good by providing a platform to collaborate and build community engagement, and catalyze social change.</p>
//               <a className="main-btn" href="#">
//                 Explore more
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                   <path d="M6 12H18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
//                   <path d="M12 6L18 12L12 18" stroke="#06038F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurMission;
import React from 'react';
import leader from '../assets/images/leader.jpg'
import '../assets/css/OurMission.css';

const OurMission = () => {
  return (
    <section className="our-mission-vision-section">
      <div className="container">
        <div className="ovm-box combined">
          {/* Images */}
          <div className="ovm-images">
            <img src={leader} alt="Our Mission" className="ovm-img" />
            {/* <img src="/assets/images/our-vision.png" alt="Our Vision" className="ovm-img" /> */}
          </div>

          {/* Text Content */}
          <div className="ovm-content">
            <div className="mission-section">
              <h2>Our Mission</h2>
              <p>
                "We are dedicated to ensuring that there is no loss of potential and wastage 
                of a child's life, due to inequities in education. Our mission is to create 
                an inclusive educational system that delivers high-quality learning which is 
                affordable, scalable, and transformative."
              </p>
            </div>

            <div className="vision-section">
              <h2>Our Vision</h2>
              <p>
                "To create a society that upholds the sanctity of every human life, 
                rejects all forms of discrimination, and aspires to build a peaceful, 
                compassionate, and sustainable world."
              </p>
            </div>

            <a className="main-btn" href="#">
              Explore More
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 6L18 12L12 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
