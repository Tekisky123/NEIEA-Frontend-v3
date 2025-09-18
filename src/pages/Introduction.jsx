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
              "To provide good quality and innovative education to all segments of society with high consideration given to providing free education to the poor."
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
                Registration
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  color: "#6c757d",
                  marginBottom: "0",
                }}
              >
                NEIEA was officially registered on April 18, 2022, as a Section 8a non-profit educational organization in India, after two years of active educational discussions and planning during the Pandemic. NEIEA has 12a and 80g approvals from the Government of India and also Darpan ID.
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

    </div>
  );
};

export default Introduction;