import React from 'react';
import PageTemplate from '../components/PageTemplate';

const PartneringInstitutions = () => {
  const partners = [
    {
      id: 1,
      name: "Delhi Public School Network",
      type: "K-12 Schools",
      location: "Pan India",
      collaboration: "Curriculum Enhancement & Teacher Training",
      students: "50,000+",
      since: "2022"
    },
    {
      id: 2,
      name: "Jamia Millia Islamia",
      type: "University",
      location: "New Delhi",
      collaboration: "Research & Higher Education Programs",
      students: "15,000+",
      since: "2023"
    },
    {
      id: 3,
      name: "Kendriya Vidyalaya Sangathan",
      type: "Government Schools",
      location: "National",
      collaboration: "Digital Learning Infrastructure",
      students: "1,200,000+",
      since: "2023"
    },
    {
      id: 4,
      name: "Teach for India",
      type: "NGO",
      location: "Multiple Cities",
      collaboration: "Teacher Fellowship Programs",
      students: "40,000+",
      since: "2022"
    },
    {
      id: 5,
      name: "IIT Delhi",
      type: "Technical Institute",
      location: "New Delhi",
      collaboration: "EdTech Research & Development",
      students: "8,000+",
      since: "2023"
    },
    {
      id: 6,
      name: "Ashoka University",
      type: "Private University",
      location: "Haryana",
      collaboration: "Liberal Arts & Innovation Programs",
      students: "3,000+",
      since: "2023"
    }
  ];

  const partnershipTypes = [
    {
      type: "Academic Partnerships",
      description: "Collaborative programs with universities and colleges for research, curriculum development, and student exchange.",
      benefits: ["Joint research projects", "Faculty exchange", "Student mobility", "Shared resources"],
      icon: "🎓"
    },
    {
      type: "School Collaborations",
      description: "Working directly with K-12 schools to implement innovative teaching methods and improve learning outcomes.",
      benefits: ["Teacher training", "Curriculum support", "Technology integration", "Assessment tools"],
      icon: "🏫"
    },
    {
      type: "Government Partnerships",
      description: "Collaborating with government bodies and public institutions to scale educational initiatives.",
      benefits: ["Policy alignment", "Large-scale implementation", "Funding support", "Regulatory compliance"],
      icon: "🏛️"
    },
    {
      type: "NGO Alliances",
      description: "Partnering with non-governmental organizations to reach underserved communities and marginalized populations.",
      benefits: ["Community outreach", "Social impact", "Resource sharing", "Grassroots implementation"],
      icon: "🤝"
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "About", link: null },
        { name: "Our Working Model", link: null },
        { name: "Partnering with Educational Institutions", link: null }
      ]}
      title="Partnering with Educational Institutions"
      subtitle="Building Collaborative Networks for Educational Excellence"
      description="NEIEA works closely with educational institutions across India and globally to create sustainable, scalable, and impactful educational programs."
      heroImage="/assets/images/waise12.png"
    >
      {/* Partnership Overview */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto text-center">
          <p 
            style={{ 
              fontSize: "18px", 
              lineHeight: "1.8", 
              color: "#495057",
              marginBottom: "0"
            }}
          >
            Our institutional partnerships form the backbone of NEIEA's mission to transform education. 
            By collaborating with schools, universities, government bodies, and NGOs, we create a 
            comprehensive ecosystem that supports innovative teaching, learning, and educational research.
          </p>
        </div>
      </div>

      {/* Partnership Types */}
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
            Types of Partnerships
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {partnershipTypes.map((partnership, index) => (
          <div key={index} className="col-lg-6">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ borderRadius: "15px", padding: "30px" }}
            >
              <div className="text-center mb-3">
                <div style={{ fontSize: "48px", marginBottom: "15px" }}>
                  {partnership.icon}
                </div>
                <h4 
                  style={{ 
                    color: "#212529", 
                    fontWeight: "600", 
                    marginBottom: "15px" 
                  }}
                >
                  {partnership.type}
                </h4>
                <p 
                  style={{ 
                    color: "#6c757d", 
                    lineHeight: "1.6", 
                    marginBottom: "20px" 
                  }}
                >
                  {partnership.description}
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
                  Key Benefits:
                </h6>
                <ul style={{ color: "#6c757d", paddingLeft: "20px", margin: "0" }}>
                  {partnership.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} style={{ marginBottom: "5px", fontSize: "14px" }}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Current Partners */}
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
            Our Institutional Partners
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {partners.map((partner) => (
          <div key={partner.id} className="col-lg-4 col-md-6">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <span 
                    style={{ 
                      backgroundColor: "#06038F", 
                      color: "white", 
                      padding: "4px 12px", 
                      borderRadius: "15px", 
                      fontSize: "12px", 
                      fontWeight: "600" 
                    }}
                  >
                    {partner.type}
                  </span>
                  <span style={{ color: "#6c757d", fontSize: "12px" }}>
                    Since {partner.since}
                  </span>
                </div>
                
                <h5 
                  style={{ 
                    color: "#212529", 
                    fontWeight: "600", 
                    marginBottom: "10px",
                    lineHeight: "1.3"
                  }}
                >
                  {partner.name}
                </h5>
                
                <div className="mb-3">
                  <p 
                    style={{ 
                      color: "#6c757d", 
                      fontSize: "14px", 
                      marginBottom: "8px" 
                    }}
                  >
                    📍 {partner.location}
                  </p>
                  <p 
                    style={{ 
                      color: "#6c757d", 
                      fontSize: "14px", 
                      marginBottom: "8px" 
                    }}
                  >
                    👥 {partner.students} students impacted
                  </p>
                </div>
                
                <p 
                  style={{ 
                    color: "#495057", 
                    fontSize: "14px", 
                    lineHeight: "1.5",
                    marginBottom: "0",
                    fontStyle: "italic"
                  }}
                >
                  {partner.collaboration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Partnership Process */}
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
            How We Partner
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          {[
            {
              step: "1",
              title: "Initial Assessment",
              description: "We evaluate the institution's needs, goals, and current educational practices to identify collaboration opportunities."
            },
            {
              step: "2",
              title: "Partnership Design",
              description: "Together, we design a customized partnership model that aligns with both organizations' objectives and capabilities."
            },
            {
              step: "3",
              title: "Pilot Implementation",
              description: "We start with pilot programs to test effectiveness and gather feedback before full-scale implementation."
            },
            {
              step: "4",
              title: "Scale & Sustain",
              description: "Successful programs are scaled across the institution with ongoing support, training, and continuous improvement."
            }
          ].map((step, index) => (
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
                {step.step}
              </div>
              <div>
                <h5 
                  style={{ 
                    color: "#212529", 
                    fontWeight: "600", 
                    marginBottom: "8px" 
                  }}
                >
                  {step.title}
                </h5>
                <p 
                  style={{ 
                    color: "#6c757d", 
                    lineHeight: "1.6", 
                    margin: "0" 
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
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
              Partner with NEIEA
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                marginBottom: "25px",
                maxWidth: "600px",
                margin: "0 auto 25px"
              }}
            >
              Join our network of institutional partners and help us transform education for millions of students across India and beyond.
            </p>
            <div>
              <a 
                href="/partners/join" 
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
                href="/about-us/contact" 
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
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default PartneringInstitutions;
