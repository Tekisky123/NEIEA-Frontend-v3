import React from "react";

const Introduction = () => {
  return (
    <div className="introduction-page">
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
                Mission
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Our Mission Section */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "80px 0" }}>
        <div className="container">
          <div className="text-center">
            <h6
              style={{
                color: "#fd7e14",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "30px",
              }}
            >
              OUR MISSION
            </h6>
            <blockquote
              style={{
                fontSize: "28px",
                lineHeight: "1.4",
                color: "#495057",
                maxWidth: "800px",
                margin: "0 auto",
                fontWeight: "400",
              }}
            >
              "Our mission is to inspire and position the Indian diaspora to be
              a{" "}
              <strong style={{ color: "#06038F", fontWeight: "700" }}>
                force for good
              </strong>{" "}
              and to build bridges among diaspora leaders in several countries
              and professions with leaders residing in India."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Colorful Divider */}
      <div
        style={{
          height: "6px",
          background:
            "linear-gradient(to right, #dc3545, #28a745, #fd7e14, #6f42c1)",
        }}
      ></div>

      {/* Who We Are Section */}
      <section style={{ backgroundColor: "#fff", padding: "80px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  color: "#212529",
                  marginBottom: "30px",
                  lineHeight: "1.2",
                }}
              >
                Who We Are
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  color: "#6c757d",
                  marginBottom: "0",
                }}
              >
                Indiaspora, a nonprofit organization, unites global leaders of
                Indian origin from diverse backgrounds and professions who are
                committed to inspiring the diaspora to be a force for good by
                providing a platform to collaborate, build community engagement,
                and catalyze social change.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative" style={{ height: "400px" }}>
                {/* Main group photo */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "1",
                  }}
                >
                  <img
                    src="/assets/images/testimonial1.jpg"
                    alt="Group photo"
                    className="rounded-3 shadow-lg"
                    style={{
                      width: "350px",
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Top left circular image */}
                <div
                  className="position-absolute"
                  style={{
                    top: "20px",
                    left: "20px",
                    zIndex: "2",
                  }}
                >
                  <img
                    src="/assets/images/leader.jpg"
                    alt="Leader"
                    className="rounded-circle shadow-lg"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Bottom right circular image */}
                <div
                  className="position-absolute"
                  style={{
                    bottom: "20px",
                    right: "20px",
                    zIndex: "2",
                  }}
                >
                  <img
                    src="/assets/images/Leader2.jpeg"
                    alt="Leader 2"
                    className="rounded-circle shadow-lg"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our People Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #f59e0b 100%)",
          padding: "80px 0",
        }}
      >
        <div className="container">
          <div className="mb-5">
            <h6
              style={{
                color: "white",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "15px",
              }}
            >
              OUR PEOPLE
            </h6>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "700",
                color: "white",
                marginBottom: "0",
              }}
            >
              Powerful Network for the Indian Diaspora
            </h2>
          </div>

          <div className="row g-4">
            {/* Board of Directors Card */}
            <div className="col-lg-4 col-md-6">
              <div
                className="card h-100 shadow-lg border-0"
                style={{
                  borderRadius: "15px",
                  padding: "40px 30px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="mb-4"
                      style={{ fontSize: "60px", opacity: "0.1" }}
                    >
                      01
                    </div>
                    <h3
                      style={{
                        fontSize: "32px",
                        fontWeight: "700",
                        color: "#06038F",
                        marginBottom: "30px",
                        lineHeight: "1.2",
                      }}
                    >
                      Board of
                      <br />
                      Directors
                    </h3>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="#"
                      className="btn"
                      style={{
                        color: "#06038F",
                        fontWeight: "600",
                        textDecoration: "none",
                        fontSize: "16px",
                      }}
                    >
                      View All →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Members Card */}
            <div className="col-lg-4 col-md-6">
              <div
                className="card h-100 shadow-lg border-0"
                style={{
                  borderRadius: "15px",
                  padding: "40px 30px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="mb-4"
                      style={{ fontSize: "60px", opacity: "0.1" }}
                    >
                      02
                    </div>
                    <h3
                      style={{
                        fontSize: "32px",
                        fontWeight: "700",
                        color: "#06038F",
                        marginBottom: "30px",
                        lineHeight: "1.2",
                      }}
                    >
                      Members
                    </h3>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="#"
                      className="btn"
                      style={{
                        color: "#06038F",
                        fontWeight: "600",
                        textDecoration: "none",
                        fontSize: "16px",
                      }}
                    >
                      View All →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambassadors Card */}
            <div className="col-lg-4 col-md-6">
              <div
                className="card h-100 shadow-lg border-0"
                style={{
                  borderRadius: "15px",
                  padding: "40px 30px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="mb-4"
                      style={{ fontSize: "60px", opacity: "0.1" }}
                    >
                      03
                    </div>
                    <h3
                      style={{
                        fontSize: "32px",
                        fontWeight: "700",
                        color: "#06038F",
                        marginBottom: "30px",
                        lineHeight: "1.2",
                      }}
                    >
                      Ambassadors
                    </h3>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="#"
                      className="btn"
                      style={{
                        color: "#06038F",
                        fontWeight: "600",
                        textDecoration: "none",
                        fontSize: "16px",
                      }}
                    >
                      View All →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas Section */}
      <section style={{ backgroundColor: "#fff", padding: "80px 0" }}>
        <div className="container">
          <div className="row">
            {/* Images Grid */}
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src="/assets/images/event1.jpg"
                    alt="Art and Culture"
                    className="img-fluid rounded-3 shadow-sm"
                    style={{
                      height: "280px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="col-6">
                  <img
                    src="/assets/images/event2.jpg"
                    alt="Community"
                    className="img-fluid rounded-3 shadow-sm"
                    style={{
                      height: "280px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="col-6">
                  <img
                    src="/assets/images/testimonial3.jpg"
                    alt="Technology"
                    className="img-fluid rounded-3 shadow-sm"
                    style={{
                      height: "280px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="col-6">
                  <img
                    src="/assets/images/testimonial4.jpg"
                    alt="Innovation"
                    className="img-fluid rounded-3 shadow-sm"
                    style={{
                      height: "280px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Focus Areas Content */}
            <div className="col-lg-6 ps-lg-5">
              <h6
                style={{
                  color: "#fd7e14",
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                OUR FOCUS AREAS
              </h6>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#212529",
                  marginBottom: "40px",
                  lineHeight: "1.3",
                }}
              >
                Take a closer look at where our efforts are concentrated.
              </h2>

              <ul className="list-unstyled">
                {[
                  "Impact Report",
                  "Civic Engagement & Social Impact",
                  "Entrepreneurship & Innovation",
                  "Global Programs",
                  "Philanthropy",
                  "DiasporaNEXT",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="d-flex justify-content-between align-items-center py-3 border-bottom"
                  >
                    <span
                      style={{
                        color: "#495057",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      {item}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="#06038F"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
