import React from 'react';
import PageTemplate from '../components/PageTemplate';

const PartnersJoin = () => {
  const partnerTypes = [
    {
      id: 1,
      title: "Educational Institutions",
      description: "Schools, colleges, and universities looking to enhance their educational offerings through innovative programs.",
      benefits: ["Curriculum enhancement", "Teacher training", "Technology integration", "Student exchange programs"],
      icon: "🏫"
    },
    {
      id: 2,
      title: "Corporate Partners",
      description: "Businesses and corporations interested in supporting education and developing skilled workforce.",
      benefits: ["CSR opportunities", "Talent pipeline", "Brand visibility", "Community impact"],
      icon: "🏢"
    },
    {
      id: 3,
      title: "NGOs & Non-Profits",
      description: "Organizations working in education and social development sectors seeking collaborative opportunities.",
      benefits: ["Resource sharing", "Joint programs", "Expanded reach", "Capacity building"],
      icon: "🤝"
    },
    {
      id: 4,
      title: "Government Bodies",
      description: "Government agencies and departments working on educational policy and implementation.",
      benefits: ["Policy alignment", "Scale implementation", "Public-private partnership", "Community development"],
      icon: "🏛️"
    }
  ];

  const partnershipLevels = [
    {
      level: "Strategic Partner",
      commitment: "Long-term collaboration",
      benefits: [
        "Joint program development",
        "Co-branding opportunities", 
        "Executive advisory role",
        "Priority access to new initiatives",
        "Customized partnership agreements"
      ],
      color: "#06038F"
    },
    {
      level: "Program Partner",
      commitment: "Project-based collaboration",
      benefits: [
        "Specific program collaboration",
        "Resource sharing",
        "Joint marketing",
        "Regular progress reviews",
        "Flexible engagement terms"
      ],
      color: "#28a745"
    },
    {
      level: "Supporting Partner",
      commitment: "Ongoing support",
      benefits: [
        "Financial or in-kind contributions",
        "Volunteer opportunities",
        "Event participation",
        "Network access",
        "Recognition benefits"
      ],
      color: "#fd7e14"
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "Partners", link: null },
        { name: "Join NEIEA as a Partner", link: null }
      ]}
      title="Join NEIEA as a Partner"
      subtitle="Together We Can Transform Education"
      description="Partner with NEIEA to create lasting impact in education. Join our network of organizations committed to providing equitable and innovative learning opportunities."
      heroImage="/assets/images/waise12.png"
    >
      {/* Why Partner with NEIEA */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto text-center">
          <h3 
            style={{ 
              fontSize: "32px", 
              fontWeight: "700", 
              color: "#212529", 
              marginBottom: "30px"
            }}
          >
            Why Partner with NEIEA?
          </h3>
          <p 
            style={{ 
              fontSize: "18px", 
              lineHeight: "1.8", 
              color: "#495057",
              marginBottom: "0"
            }}
          >
            NEIEA partners with organizations that share our vision of transforming education through innovation, 
            equity, and excellence. Our partnerships create synergies that amplify impact and reach more learners 
            across diverse communities.
          </p>
        </div>
      </div>

      {/* Partner Types */}
      <div className="row mb-5">
        <div className="col-12">
          <h3 
            style={{ 
              fontSize: "32px", 
              fontWeight: "700", 
              color: "#212529", 
              marginBottom: "40px",
              textAlign: "center"
            }}
          >
            Partnership Opportunities
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {partnerTypes.map((partner) => (
          <div key={partner.id} className="col-lg-6">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ borderRadius: "15px", padding: "30px" }}
            >
              <div className="text-center mb-3">
                <div style={{ fontSize: "48px", marginBottom: "15px" }}>
                  {partner.icon}
                </div>
                <h4 
                  style={{ 
                    color: "#212529", 
                    fontWeight: "600", 
                    marginBottom: "15px" 
                  }}
                >
                  {partner.title}
                </h4>
                <p 
                  style={{ 
                    color: "#6c757d", 
                    lineHeight: "1.6", 
                    marginBottom: "20px" 
                  }}
                >
                  {partner.description}
                </p>
              </div>
              <div>
                <h6 
                  style={{ 
                    color: "#495057", 
                    fontWeight: "600", 
                    marginBottom: "10px" 
                  }}
                >
                  Partnership Benefits:
                </h6>
                <ul style={{ color: "#6c757d", paddingLeft: "20px" }}>
                  {partner.benefits.map((benefit, index) => (
                    <li key={index} style={{ marginBottom: "5px" }}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Partnership Levels */}
      <div className="row mb-5">
        <div className="col-12">
          <h3 
            style={{ 
              fontSize: "32px", 
              fontWeight: "700", 
              color: "#212529", 
              marginBottom: "40px",
              textAlign: "center"
            }}
          >
            Partnership Levels
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {partnershipLevels.map((level, index) => (
          <div key={index} className="col-lg-4">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <div 
                style={{ 
                  backgroundColor: level.color, 
                  color: "white", 
                  padding: "20px", 
                  textAlign: "center" 
                }}
              >
                <h4 style={{ fontWeight: "600", margin: "0" }}>
                  {level.level}
                </h4>
                <p style={{ margin: "10px 0 0 0", opacity: "0.9" }}>
                  {level.commitment}
                </p>
              </div>
              <div className="card-body p-4">
                <ul style={{ color: "#6c757d", paddingLeft: "20px", margin: "0" }}>
                  {level.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} style={{ marginBottom: "8px" }}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How to Get Started */}
      <div className="row mb-5">
        <div className="col-12">
          <h3 
            style={{ 
              fontSize: "32px", 
              fontWeight: "700", 
              color: "#212529", 
              marginBottom: "40px",
              textAlign: "center"
            }}
          >
            How to Get Started
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="timeline">
            {[
              {
                step: "1",
                title: "Initial Contact",
                description: "Reach out to us through our contact form or email to express your interest in partnership."
              },
              {
                step: "2",
                title: "Discovery Meeting",
                description: "We'll schedule a meeting to understand your organization's goals and explore partnership opportunities."
              },
              {
                step: "3",
                title: "Partnership Proposal",
                description: "Our team will develop a customized partnership proposal aligned with your objectives and our mission."
              },
              {
                step: "4",
                title: "Agreement & Launch",
                description: "Finalize partnership terms and begin collaborative activities with ongoing support and communication."
              }
            ].map((item, index) => (
              <div key={index} className="d-flex mb-4">
                <div 
                  style={{ 
                    backgroundColor: "#06038F", 
                    color: "white", 
                    borderRadius: "50%", 
                    width: "40px", 
                    height: "40px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontWeight: "600",
                    marginRight: "20px",
                    flexShrink: 0
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h5 
                    style={{ 
                      color: "#212529", 
                      fontWeight: "600", 
                      marginBottom: "8px" 
                    }}
                  >
                    {item.title}
                  </h5>
                  <p 
                    style={{ 
                      color: "#6c757d", 
                      lineHeight: "1.6", 
                      margin: "0" 
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="row mt-5">
        <div className="col-12">
          <div 
            style={{ 
              backgroundColor: "#f8f9fa", 
              padding: "40px", 
              borderRadius: "15px",
              textAlign: "center"
            }}
          >
            <h4 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "15px" 
              }}
            >
              Ready to Make a Difference Together?
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                marginBottom: "25px",
                maxWidth: "600px",
                margin: "0 auto 25px"
              }}
            >
              Join our network of partners committed to transforming education. Let's work together to create lasting impact in communities worldwide.
            </p>
            <div>
              <a 
                href="/about-us/contact" 
                className="btn btn-primary me-3"
                style={{
                  backgroundColor: "#06038F",
                  borderColor: "#06038F",
                  padding: "12px 30px",
                  fontSize: "16px",
                  fontWeight: "600",
                  borderRadius: "25px",
                  textDecoration: "none"
                }}
              >
                Become a Partner
              </a>
              <a 
                href="/partners/institutions" 
                className="btn btn-outline-primary"
                style={{
                  borderColor: "#06038F",
                  color: "#06038F",
                  padding: "12px 30px",
                  fontSize: "16px",
                  fontWeight: "600",
                  borderRadius: "25px",
                  textDecoration: "none"
                }}
              >
                View Current Partners
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default PartnersJoin;
