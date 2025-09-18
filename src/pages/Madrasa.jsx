import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Madrasa = () => {
  const programFeatures = [
    {
      id: 1,
      title: "Mainstream Subject Integration",
      level: "Academic Enhancement",
      description: "Integrating core academic subjects like English, Mathematics, and Science into traditional Madrasa curriculum for comprehensive education.",
      modules: ["English Language", "Mathematics", "Science Education", "Social Studies"],
      outcome: "Well-rounded education combining religious and secular learning"
    },
    {
      id: 2,
      title: "NIOS Secondary Syllabus",
      level: "Formal Recognition",
      description: "Providing NIOS (National Institute of Open Schooling) secondary syllabus to ensure students receive recognized qualifications.",
      modules: ["NIOS English", "NIOS Mathematics", "NIOS Science", "NIOS Social Science"],
      outcome: "Nationally recognized secondary education certificates"
    },
    {
      id: 3,
      title: "Teacher Training for Madrasa Educators",
      level: "Capacity Building",
      description: "Training Madrasa teachers in modern pedagogical methods and secular subject teaching while respecting traditional values.",
      modules: ["Modern Teaching Methods", "Subject Expertise", "Classroom Management", "Assessment Techniques"],
      outcome: "Enhanced teaching quality in Madrasas"
    },
    {
      id: 4,
      title: "Digital Literacy Programs",
      level: "Technology Integration",
      description: "Introducing computer skills and digital literacy to prepare Madrasa students for the modern world.",
      modules: ["Basic Computing", "Internet Skills", "Digital Communication", "Online Learning Platforms"],
      outcome: "Technology-ready students for higher education and careers"
    },
    {
      id: 5,
      title: "Bridge to Higher Education",
      level: "Future Pathways",
      description: "Creating pathways for Madrasa graduates to pursue higher education in universities and professional colleges.",
      modules: ["College Preparation", "Entrance Exam Training", "Career Counseling", "Scholarship Guidance"],
      outcome: "Successful transition to higher education and professional careers"
    }
  ];

  return (
    <div className="our-work-page">
      <PageTemplate
      breadcrumbPath={[
        { name: "Our Work", link: null },
        { name: "Education", link: null },
        { name: "Madrasa", link: null }
      ]}
      title="Madrasa Education Integration"
      subtitle="Bridging Traditional and Modern Education"
      description="NEIEA works with Madrasas across India to integrate mainstream academic subjects while respecting traditional Islamic education, creating well-rounded educational opportunities for students."
      heroImage="/assets/images/our-mission-bg.png"
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
            Madrasas play a vital role in educating Muslim children across India. Our programs help integrate modern academic subjects into traditional Madrasa education, ensuring students receive comprehensive learning that prepares them for both religious understanding and secular success.
          </p>
        </div>
      </div>

      {/* Partnership Impact */}
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
            Our Madrasa Partnerships
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 text-center"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px", 
              padding: "25px 20px" 
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>🕌</div>
            <h4 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
              20+
            </h4>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Madrasas Partnered
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              Collaborating with Madrasas across the country for educational integration
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 text-center"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px", 
              padding: "25px 20px" 
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>📚</div>
            <h4 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
              500+
            </h4>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Students Benefited
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              Madrasa students receiving integrated education and NIOS certification
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 text-center"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px", 
              padding: "25px 20px" 
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>👨‍🏫</div>
            <h4 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
              50+
            </h4>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Teachers Trained
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              Madrasa educators trained in modern teaching methods and secular subjects
            </p>
          </div>
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
            Our Madrasa Integration Programs
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

      {/* Integration Approach */}
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
            Our Integration Approach
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div style={{ fontSize: "50px", marginBottom: "15px" }}>🤝</div>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Respectful
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", margin: "0" }}>
              Honoring traditional Islamic education while adding modern subjects
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div style={{ fontSize: "50px", marginBottom: "15px" }}>⚖️</div>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Balanced
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", margin: "0" }}>
              Creating harmony between religious and secular education
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div style={{ fontSize: "50px", marginBottom: "15px" }}>🎯</div>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Quality-Focused
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", margin: "0" }}>
              Ensuring high standards in both traditional and modern education
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div style={{ fontSize: "50px", marginBottom: "15px" }}>🌟</div>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Future-Ready
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", margin: "0" }}>
              Preparing students for success in modern careers and higher education
            </p>
          </div>
        </div>
      </div>

      {/* Success Outcomes */}
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
            Success Outcomes
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
                Enhanced Educational Quality
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Madrasas now offer comprehensive education that meets both religious and academic standards.
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
                Improved Career Prospects
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Students gain access to higher education and diverse career opportunities beyond traditional religious roles.
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
                Community Acceptance
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Integration programs are designed with community input and respect for traditional values.
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
                National Recognition
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                NIOS certification provides nationally recognized qualifications for Madrasa students.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Details */}
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
            Integration Focus Areas
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <div 
            className="card h-100 border-0"
            style={{ backgroundColor: "#f8f9fa", borderRadius: "15px", padding: "25px" }}
          >
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              📖 Foundational Subjects Integration
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px" }}>
              Focusing on foundational subjects such as English, Math, and Sciences to provide students with essential academic skills alongside their religious education.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                English Language
              </span>
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                Mathematics
              </span>
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                Science Education
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div 
            className="card h-100 border-0"
            style={{ backgroundColor: "#f8f9fa", borderRadius: "15px", padding: "25px" }}
          >
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              🎓 NIOS Secondary Syllabus Implementation
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px" }}>
              Providing NIOS secondary syllabus as well as the OBE 3rd, 5th, and 8th grade syllabi for mainstreaming, ensuring students receive nationally recognized education.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                NIOS Certification
              </span>
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                OBE Syllabus
              </span>
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                Mainstreaming
              </span>
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
              Our efforts are aimed at <strong>strengthening the educational foundations</strong> of Madrasa institutions, enabling students to gain essential skills and knowledge critical for their overall development and success in a rapidly changing world.
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
              ✨ Support Madrasa Education Integration
            </h4>
            <p style={{ color: "#6c757d", marginBottom: "25px", maxWidth: "600px", margin: "0 auto 25px", lineHeight: "1.6" }}>
              Join our mission to bridge traditional and modern education in Madrasas. Help us create comprehensive learning opportunities that honor tradition while preparing students for the future.
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
                🤝 Partner with Us
              </a>
            </div>
          </div>
        </div>
      </div>
      </PageTemplate>
    </div>
  );
};

export default Madrasa;
