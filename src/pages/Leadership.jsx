import React from 'react';

const Leadership = () => {
  return (
    <div className="leadership-page">
      {/* Breadcrumb */}
      <div
        className="container-fluid"
        style={{ backgroundColor: "#f8f9fa", padding: "10px 0" }}
      >
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol
              className="breadcrumb mb-0"
              style={{ backgroundColor: "transparent" }}
            >
              <li className="breadcrumb-item">
                <a
                  href="/"
                  style={{ color: "#6c757d", textDecoration: "none" }}
                >
                  🏠 Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <span style={{ color: "#6c757d" }}>About</span>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
                style={{ color: "#495057" }}
              >
                Board of Directors
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "80px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  color: "#212529",
                  marginBottom: "30px",
                  lineHeight: "1.2",
                }}
              >
                Meet Our Team
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  color: "#6c757d",
                  marginBottom: "0",
                }}
              >
                Meet our team of dedicated leaders at NEIEA, a passionate group committed to empowering communities through innovative education and skill-building programs. With diverse backgrounds in teaching, administration, technology, and outreach, our team brings extensive experience and vision to every project. From pioneering online education to leading curriculum initiatives, each leader is instrumental in inspiring lifelong learning and creating opportunities for students from all walks of life. Together, we strive to foster growth, inclusion, and meaningful change across India.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img 
                  src="/assets/images/banner-2.png" 
                  alt="Leadership Team" 
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "15px"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section style={{ backgroundColor: "#fff", padding: "80px 0" }}>
        <div className="container">
          <div className="row g-4">
            {/* Team Member 1 - Mr Javeed Mirza */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/Leader2.jpeg"
                    alt="Mr Javeed Mirza"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Mr Javeed Mirza
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    Founder & President - Highly motivated and dynamic Educator, Entrepreneur and Community activist interested in bringing Quality Education to the underprivileged youth of India
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 - Dr. K. N. Anandan */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/Dr.K.Anand.png"
                    alt="Dr. K. N. Anandan"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Dr. K. N. Anandan
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    Co-Founder & Guru - Indian Linguist, ELT specialist and social activist. Developer of Discourse Oriented Pedagogy (DOP)
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 - Ms Nasreen Fatima */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/Ms.-Nasreen-Fatima-Director-1.jpg"
                    alt="Ms Nasreen Fatima"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Ms Nasreen Fatima
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    Director - Secretary and Correspondent of Neo Rosary School. B.Sc, B.Ed, B.M.R.C.Sc., MA in English Literature, and M.Ed
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 4 - Ms Tahseen Sakina */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/Ms-Tahseen-Sakina-Director.png"
                    alt="Ms Tahseen Sakina"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Ms Tahseen Sakina
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    Director - Trained post graduate with over 32 years of experience in reputed schools as Academic Director, Principal, Vice Principal
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 5 - Ms Niloufer Baig */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/Niloufer Baig_croped.jpg"
                    alt="Ms Niloufer Baig"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Ms Niloufer Baig
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    Director - Senior Leader with Master's degree and over 12 years of experience overseeing operations across Telangana and Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 6 - Dr. Peshimam Nazeer Ahmed */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/Dr.-Peshimam-Nazeer-Ahmed.png"
                    alt="Dr. Peshimam Nazeer Ahmed"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Dr. Peshimam Nazeer Ahmed
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    Joint Secretary OMEIAT - 45 years Administrative & Teaching Experience, Government Best Teacher Awardee
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 7 - Prof. Shantha Sinha */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/Prof.-Shantha-Sinha.png"
                    alt="Prof. Shantha Sinha"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Prof. Shantha Sinha
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    India's leading child rights activist. Headed National Commission for Protection of Child Rights (2007-2013), Ramon Magsaysay Award recipient
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 8 - Mrs. M. Chaya Ratan */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/chaya.png"
                    alt="Mrs. M. Chaya Ratan"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Mrs. M. Chaya Ratan
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    IAS (Rtd.) - Retired IAS officer (1977 batch), Master's degree in Eco-Social Policy and Planning from London School of Economics
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 9 - Vinod Mubayi */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/Vinod-Mubayi.jpg"
                    alt="Vinod Mubayi"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Vinod Mubayi
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    American Physicist - Member American Association for the Advancement of Science, American Nuclear Society, PhD from Brandeis University
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 10 - Ms AV AMBIKA */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/AV-AMBIKA.png"
                    alt="Ms AV AMBIKA"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Ms AV AMBIKA
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    Treasurer of Aman Vedika - Activist, school teacher, theatre artist, singer, documentary film maker
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 11 - Hrushikesh M */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/defaultProfile2.jpg"
                    alt="Hrushikesh M"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Hrushikesh M
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    Vice President - Human Resources, Capgemini India Pvt. Ltd. Over three decades of HR experience, XLRI alumnus
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row of Team Members */}
          <div className="row g-4">
            {/* Team Member 12 - Ms Uzma Nahid */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/Ms.-Uzma-Nahid.png"
                    alt="Ms Uzma Nahid"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Ms Uzma Nahid
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    Founder President of India International Women's Alliance (IIWA), renowned social activist empowering women since 1977
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 13 - Syed Danish Ali */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/danishAli.jpeg"
                    alt="Syed Danish Ali"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Syed Danish Ali
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    Supervisor - 20 years experience in diverse domains, 7 years BPO experience, 5 years dedicated to education and teaching
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 14 - Ms Taskeen Tarannum */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/Ms-Taskeen-Tarannum croped.png"
                    alt="Ms Taskeen Tarannum"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Ms Taskeen Tarannum
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    Deputy Supervisor - B.A, B.Ed with over 12 years of teaching experience, driving force behind online English program at NEIEA
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 15 - Ms Farha Khan */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/defaultProfile2.jpg"
                    alt="Ms Farha Khan"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Ms Farha Khan
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    Math Team Leader & IT Deputy Team Leader - Google certified educator, Master's in Computer Applications and Mathematics, 15+ years experience
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 16 - Ms Gulfisha Khan */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/defaultProfile2.jpg"
                    alt="Ms Gulfisha Khan"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Ms Gulfisha Khan
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    English Proficiency Level-1 Team Leader - 15 years media experience, Bachelor's in Political Science, Post Graduation in Journalism
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 17 - Ms Arzoo Siraj */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    height: "280px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/images/defaultProfile2.jpg"
                    alt="Ms Arzoo Siraj"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#212529",
                      marginBottom: "10px",
                    }}
                  >
                    Ms Arzoo Siraj
                  </h4>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: "0",
                    }}
                  >
                    Data Entry Operation Lead - M.Tech in Computer Science, technical member and team leader for Data entry and operation course
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Leadership;
