import React from 'react';
import PageTemplate from '../components/PageTemplate';

const PublicGovernmentSchool = () => {
  const programFeatures = [
    {
      id: 1,
      title: "Teacher Training & Development",
      level: "Capacity Building",
      description: "Comprehensive training programs for government school teachers to enhance their teaching skills and adopt modern pedagogical methods.",
      modules: ["Modern Teaching Methods", "Technology Integration", "Classroom Management", "Student Assessment"],
      outcome: "Improved teaching quality and student engagement"
    },
    {
      id: 2,
      title: "Infrastructure Support",
      level: "Resource Enhancement",
      description: "Supporting government schools with essential infrastructure improvements including digital classrooms and learning materials.",
      modules: ["Digital Classrooms", "Learning Materials", "Library Resources", "Technology Setup"],
      outcome: "Enhanced learning environment and resources"
    },
    {
      id: 3,
      title: "Curriculum Enhancement",
      level: "Academic Excellence",
      description: "Supplementing government curriculum with innovative teaching materials and methods to improve learning outcomes.",
      modules: ["Supplementary Materials", "Interactive Content", "Assessment Tools", "Learning Aids"],
      outcome: "Improved academic performance and understanding"
    },
    {
      id: 4,
      title: "Student Support Programs",
      level: "Individual Care",
      description: "Additional support for students who need extra help, including remedial classes and mentoring programs.",
      modules: ["Remedial Classes", "Peer Mentoring", "Academic Counseling", "Career Guidance"],
      outcome: "Reduced dropout rates and improved student success"
    },
    {
      id: 5,
      title: "Community Engagement",
      level: "Stakeholder Involvement",
      description: "Involving parents and community members in school activities to create a supportive educational ecosystem.",
      modules: ["Parent Workshops", "Community Events", "Volunteer Programs", "School Management Committees"],
      outcome: "Strong community support for public education"
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "Our Work", link: null },
        { name: "Education", link: null },
        { name: "Public (Government) School", link: null }
      ]}
      title="Public (Government) School Support"
      subtitle="Strengthening Public Education Systems"
      description="NEIEA works closely with government schools to enhance educational quality, support teachers, and improve learning outcomes for students in the public education system."
      heroImage="/assets/images/vision2.jpg"
    >
      {/* Introduction */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto text-center">
          <p 
            style={{ 
              fontSize: "18px", 
              lineHeight: "1.8", 
              color: "#495057",
              marginBottom: "0",
              fontWeight: "600"
            }}
          >
            Public schools serve the majority of India's students, especially those from economically disadvantaged backgrounds. Our mission is to strengthen these institutions through comprehensive support, training, and resource enhancement.
          </p>
        </div>
      </div>

      {/* Program Features */}
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
            Our Public School Support Programs
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {programFeatures.map((feature) => (
          <div key={feature.id} className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: "15px" }}>
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
                    {feature.level}
                  </span>
                </div>
                <h4 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
                  {feature.title}
                </h4>
                <p style={{ color: "#6c757d", lineHeight: "1.6", marginBottom: "20px" }}>
                  {feature.description}
                </p>
                <div className="mb-3">
                  <h6 style={{ color: "#495057", fontWeight: "600", marginBottom: "10px" }}>
                    Key Components:
                  </h6>
                  <ul style={{ color: "#6c757d", paddingLeft: "20px", margin: "0" }}>
                    {feature.modules.map((module, index) => (
                      <li key={index} style={{ marginBottom: "5px", fontSize: "14px" }}>
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>
                <div 
                  style={{ 
                    backgroundColor: "#f8f9fa", 
                    padding: "10px 15px", 
                    borderRadius: "8px",
                    fontSize: "13px",
                    color: "#06038F",
                    fontWeight: "600"
                  }}
                >
                  <strong>Outcome:</strong> {feature.outcome}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Focus Areas */}
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
            Our Focus Areas
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>👩‍🏫</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Teacher Empowerment
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Providing government school teachers with modern teaching skills, digital literacy, and professional development opportunities.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>💻</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Digital Integration
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Introducing technology and digital learning tools to enhance teaching effectiveness and student engagement.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>📚</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Quality Enhancement
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Improving overall education quality through curriculum support, materials, and innovative teaching methods.
            </p>
          </div>
        </div>
      </div>

      {/* Government Partnership Benefits */}
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
            Partnership Benefits
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <div 
            className="d-flex align-items-start p-4"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px",
              height: "100%"
            }}
          >
            <div style={{ fontSize: "30px", marginRight: "15px", color: "#28a745" }}>✅</div>
            <div>
              <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "8px" }}>
                Enhanced Teaching Quality
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Government school teachers receive professional development and modern teaching methodologies training.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div 
            className="d-flex align-items-start p-4"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px",
              height: "100%"
            }}
          >
            <div style={{ fontSize: "30px", marginRight: "15px", color: "#28a745" }}>✅</div>
            <div>
              <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "8px" }}>
                Improved Student Outcomes
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Students benefit from enhanced curriculum, better teaching methods, and additional learning resources.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div 
            className="d-flex align-items-start p-4"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px",
              height: "100%"
            }}
          >
            <div style={{ fontSize: "30px", marginRight: "15px", color: "#28a745" }}>✅</div>
            <div>
              <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "8px" }}>
                Resource Optimization
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Better utilization of existing resources and introduction of cost-effective educational technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div 
            className="d-flex align-items-start p-4"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px",
              height: "100%"
            }}
          >
            <div style={{ fontSize: "30px", marginRight: "15px", color: "#28a745" }}>✅</div>
            <div>
              <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "8px" }}>
                Community Strengthening
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Stronger school-community relationships and increased parental involvement in education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="row mb-5">
        <div className="col-12">
          <div 
            className="card border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px", backgroundColor: "#f8f9fa" }}
          >
            <p 
              style={{ 
                fontSize: "18px", 
                lineHeight: "1.8", 
                color: "#495057",
                marginBottom: "0",
                textAlign: "center",
                fontStyle: "italic"
              }}
            >
              We are committed to <strong>strengthening public education</strong> by working hand-in-hand with government schools to ensure every student receives quality education regardless of their economic background.
            </p>
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
            <h4 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              ✨ Partner with Us to Strengthen Public Education
            </h4>
            <p style={{ color: "#6c757d", marginBottom: "25px", maxWidth: "600px", margin: "0 auto 25px", lineHeight: "1.6" }}>
              Join our mission to enhance government school education. Together, we can create lasting improvements in public education quality and accessibility.
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
                📩 Contact Us
              </a>
              <a 
                href="/partners/join" 
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
                🤝 Become a Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default PublicGovernmentSchool;
