import React from 'react';
import PageTemplate from '../components/PageTemplate';

const TeachersTraining = () => {
  const trainingPathways = [
    {
      id: 1,
      title: "Training for NEIEA Teachers",
      duration: "3-12 months",
      level: "New Teachers",
      description: "Every new teacher undergoes a structured induction program with comprehensive training in our methodology.",
      modules: ["Discourse Oriented Pedagogy (DOP)", "Digital Readiness with Google Workspace", "Mentorship with Senior Teachers", "Supervised Teaching Practice"],
      outcome: "Progress to become Mentor Teachers"
    },
    {
      id: 2,
      title: "Training for Partner Institutions",
      duration: "Ongoing",
      level: "Partner Schools",
      description: "NEIEA partners with schools and organizations to build teaching capacity, ensuring consistent pedagogy and quality.",
      modules: ["NEIEA Pedagogy Training", "Technology Integration", "Academic Quality Standards", "Classroom Management"],
      outcome: "Enhanced teaching capacity across partner institutions"
    },
    {
      id: 3,
      title: "Training for Classroom Coordinators",
      duration: "Progressive",
      level: "Support Staff",
      description: "Coordinators support Mentor Teachers and manage daily operations, growing from basic assistance to teaching responsibilities.",
      modules: ["Observation of Mentor Teachers", "Daily Guided Tasks", "Material Distribution", "Ongoing Mentorship"],
      outcome: "Development into effective teaching assistants"
    },
    {
      id: 4,
      title: "Training for Non-Profit & External Groups",
      duration: "Customized",
      level: "External Partners",
      description: "Several non-profits, teachers' unions, and private organizations partner with NEIEA to access our training expertise.",
      modules: ["Quality Teaching Practices", "NEIEA Methodology", "Professional Development", "Community Outreach"],
      outcome: "Extended quality teaching practices to broader community"
    },
    {
      id: 5,
      title: "Remote Training Programs",
      duration: "Flexible",
      level: "All Educators",
      description: "Geography should never be a barrier to growth. Online training sessions accessible via laptops, tablets, or smartphones.",
      modules: ["Online Workshops", "Digital Accessibility", "Remote Mentorship", "Virtual Professional Development"],
      outcome: "Truly accessible professional development worldwide"
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "Our Work", link: null },
        { name: "Teachers Training", link: null }
      ]}
      title="NEIEA Teacher Training Program"
      subtitle="Building Educators. Shaping Futures."
      description="At NEIEA, we believe that the foundation of quality education lies in empowered teachers. Our Teacher Training Program is designed to equip educators with the skills, confidence, and digital readiness needed to create impactful and engaging learning experiences."
      heroImage="/assets/images/testimonial3.jpg"
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
            Teacher training at NEIEA is not just a process—it's a transformation.
          </p>
        </div>
      </div>

      {/* Our Training Pathways */}
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
            Our Training Pathways
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {trainingPathways.map((pathway) => (
          <div key={pathway.id} className="col-lg-6">
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
                    {pathway.level}
                  </span>
                  <span style={{ color: "#6c757d", fontSize: "14px" }}>
                    {pathway.duration}
                  </span>
                </div>
                <h4 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
                  {pathway.title}
                </h4>
                <p style={{ color: "#6c757d", lineHeight: "1.6", marginBottom: "20px" }}>
                  {pathway.description}
                </p>
                <div className="mb-3">
                  <h6 style={{ color: "#495057", fontWeight: "600", marginBottom: "10px" }}>
                    Key Components:
                  </h6>
                  <ul style={{ color: "#6c757d", paddingLeft: "20px", margin: "0" }}>
                    {pathway.modules.map((module, index) => (
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
                  <strong>Outcome:</strong> {pathway.outcome}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Program Structure */}
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
            Program Structure
          </h3>
          <p 
            style={{ 
              fontSize: "16px", 
              color: "#6c757d", 
              textAlign: "center",
              marginBottom: "40px",
              maxWidth: "600px",
              margin: "0 auto 40px"
            }}
          >
            Our training blends pedagogy, technology, and communication to prepare educators for modern classrooms:
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>🎯</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Discourse Oriented Pedagogy
            </h5>
            <div style={{ backgroundColor: "#06038F", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "15px" }}>
              2 weeks
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Interactive teaching methods designed to engage learners deeply and promote critical thinking.
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
              Technology Training
            </h5>
            <div style={{ backgroundColor: "#06038F", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "15px" }}>
              2 weeks
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Mastery of Google Workspace, digital tools, and apps that power NEIEA's blended model.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>🗣️</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              English Proficiency & Confidence
            </h5>
            <div style={{ backgroundColor: "#06038F", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "15px" }}>
              2 months
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Enhancing language fluency and communication skills for effective teaching.
            </p>
          </div>
        </div>
      </div>

      {/* Skills & Tools */}
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
            Skills & Tools Teachers Gain
          </h3>
          <p 
            style={{ 
              fontSize: "16px", 
              color: "#6c757d", 
              textAlign: "center",
              marginBottom: "40px"
            }}
          >
            By the end of the program, teachers are equipped with:
          </p>
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
                Student-centered Pedagogy & Classroom Management
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Advanced strategies for engaging students and managing diverse classroom environments effectively.
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
                Digital Tools Proficiency
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Google Classroom, Docs, Meet, MS Word, Excel, Canva, and AI teaching aids mastery.
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
                English Communication & Instruction Confidence
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Enhanced language fluency and confidence in delivering instruction effectively.
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
                Practical Experience Through Mentorship
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Hands-on learning through observation, mentorship, and supervised practice sessions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why NEIEA Teacher Training */}
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
            Why NEIEA Teacher Training?
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div style={{ fontSize: "50px", marginBottom: "15px" }}>📚</div>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Comprehensive
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", margin: "0" }}>
              Covers pedagogy, technology, and communication
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div style={{ fontSize: "50px", marginBottom: "15px" }}>🛠️</div>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Practical
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", margin: "0" }}>
              Hands-on experience through observation and guided teaching
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div style={{ fontSize: "50px", marginBottom: "15px" }}>🤝</div>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Inclusive
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", margin: "0" }}>
              Open to staff, partners, coordinators, nonprofits, and independent educators
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div style={{ fontSize: "50px", marginBottom: "15px" }}>🌐</div>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Flexible
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", margin: "0" }}>
              Available both onsite and remotely
            </p>
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
              At NEIEA, we don't just train teachers—we nurture <strong>innovators in education</strong> who are ready to inspire, guide, and shape the next generation of learners.
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
              ✨ Join the NEIEA Teacher Training Program
            </h4>
            <p style={{ color: "#6c757d", marginBottom: "25px", maxWidth: "600px", margin: "0 auto 25px", lineHeight: "1.6" }}>
              Empower yourself with the skills, tools, and confidence to transform education. Become part of a community dedicated to shaping the future of learning.
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
                🌐 Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default TeachersTraining;
