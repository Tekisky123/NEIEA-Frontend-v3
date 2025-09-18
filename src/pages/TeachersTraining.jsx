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
      outcome: "Progress to become Mentor Teachers",
      icon: "👩‍🏫",
      color: "#4CAF50",
      gradient: "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)"
    },
    {
      id: 2,
      title: "Training for Partner Institutions",
      duration: "Ongoing",
      level: "Partner Schools",
      description: "NEIEA partners with schools and organizations to build teaching capacity, ensuring consistent pedagogy and quality.",
      modules: ["NEIEA Pedagogy Training", "Technology Integration", "Academic Quality Standards", "Classroom Management"],
      outcome: "Enhanced teaching capacity across partner institutions",
      icon: "🏫",
      color: "#2196F3",
      gradient: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)"
    },
    {
      id: 3,
      title: "Training for Classroom Coordinators",
      duration: "Progressive",
      level: "Support Staff",
      description: "Coordinators support Mentor Teachers and manage daily operations, growing from basic assistance to teaching responsibilities.",
      modules: ["Observation of Mentor Teachers", "Daily Guided Tasks", "Material Distribution", "Ongoing Mentorship"],
      outcome: "Development into effective teaching assistants",
      icon: "🤝",
      color: "#FF9800",
      gradient: "linear-gradient(135deg, #FF9800 0%, #F57C00 100%)"
    },
    {
      id: 4,
      title: "Training for Non-Profit & External Groups",
      duration: "Customized",
      level: "External Partners",
      description: "Several non-profits, teachers' unions, and private organizations partner with NEIEA to access our training expertise.",
      modules: ["Quality Teaching Practices", "NEIEA Methodology", "Professional Development", "Community Outreach"],
      outcome: "Extended quality teaching practices to broader community",
      icon: "🌍",
      color: "#9C27B0",
      gradient: "linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)"
    },
    {
      id: 5,
      title: "Remote Training Programs",
      duration: "Flexible",
      level: "All Educators",
      description: "Geography should never be a barrier to growth. Online training sessions accessible via laptops, tablets, or smartphones.",
      modules: ["Online Workshops", "Digital Accessibility", "Remote Mentorship", "Virtual Professional Development"],
      outcome: "Truly accessible professional development worldwide",
      icon: "💻",
      color: "#F44336",
      gradient: "linear-gradient(135deg, #F44336 0%, #D32F2F 100%)"
    }
  ];

  const coreComponents = [
    {
      id: 1,
      title: "Discourse Oriented Pedagogy",
      duration: "2 weeks",
      description: "Interactive teaching methods designed to engage learners deeply and promote critical thinking.",
      icon: "🎯",
      features: ["Student-Centered Learning", "Critical Thinking Development", "Interactive Discussions", "Practical Application"]
    },
    {
      id: 2,
      title: "Technology Training",
      duration: "2 weeks", 
      description: "Mastery of Google Workspace, digital tools, and apps that power NEIEA's blended model.",
      icon: "💻",
      features: ["Google Workspace", "Digital Classroom Management", "Online Assessment Tools", "Educational Apps"]
    },
    {
      id: 3,
      title: "English Proficiency & Confidence",
      duration: "2 months",
      description: "Enhancing language fluency and communication skills for effective teaching.",
      icon: "🗣️",
      features: ["Communication Skills", "Presentation Techniques", "Language Fluency", "Confidence Building"]
    }
  ];

  const skillsGained = [
    {
      id: 1,
      title: "Student-centered Pedagogy & Classroom Management",
      description: "Advanced strategies for engaging students and managing diverse classroom environments effectively.",
      icon: "👥",
      color: "#4CAF50"
    },
    {
      id: 2,
      title: "Digital Tools Proficiency",
      description: "Google Classroom, Docs, Meet, MS Word, Excel, Canva, and AI teaching aids mastery.",
      icon: "🛠️",
      color: "#2196F3"
    },
    {
      id: 3,
      title: "English Communication & Instruction Confidence",
      description: "Enhanced language fluency and confidence in delivering instruction effectively.",
      icon: "💬",
      color: "#FF9800"
    },
    {
      id: 4,
      title: "Practical Experience Through Mentorship",
      description: "Hands-on learning through observation, mentorship, and supervised practice sessions.",
      icon: "🎓",
      color: "#9C27B0"
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: "Comprehensive",
      description: "Covers pedagogy, technology, and communication",
      icon: "📚",
      color: "#4CAF50"
    },
    {
      id: 2,
      title: "Practical",
      description: "Hands-on experience through observation and guided teaching",
      icon: "🛠️",
      color: "#2196F3"
    },
    {
      id: 3,
      title: "Inclusive",
      description: "Open to staff, partners, coordinators, nonprofits, and independent educators",
      icon: "🤝",
      color: "#FF9800"
    },
    {
      id: 4,
      title: "Flexible",
      description: "Available both onsite and remotely",
      icon: "🌐",
      color: "#9C27B0"
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
      heroImage="/assets/images/Teacher's Training Picture.jpg"
    >
      {/* Mission Statement */}
      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="text-center" style={{ padding: "40px 20px" }}>
            <h2 
              style={{ 
                fontSize: "32px", 
                fontWeight: "700", 
                marginBottom: "25px",
                color: "#212529"
              }}
            >
              Transforming Education Through Empowered Teachers
            </h2>
            <p 
              style={{ 
                fontSize: "20px", 
                lineHeight: "1.8", 
                marginBottom: "0",
                color: "#6c757d"
              }}
            >
              Teacher training at NEIEA is not just a process—it's a transformation. We nurture <strong>innovators in education</strong> who are ready to inspire, guide, and shape the next generation of learners with confidence, skills, and digital readiness.
            </p>
          </div>
        </div>
      </div>

      {/* Our Training Pathways */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="text-center mb-5">
            <h6 
              style={{
                color: "#fd7e14",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "15px"
              }}
            >
              TRAINING PATHWAYS
            </h6>
            <h2 
              style={{ 
                fontSize: "36px", 
                fontWeight: "700", 
                color: "#212529", 
                marginBottom: "20px",
                lineHeight: "1.3"
              }}
            >
              Comprehensive Training Programs
            </h2>
            <p 
              style={{ 
                fontSize: "18px", 
                color: "#6c757d", 
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Multiple pathways designed to meet diverse educational needs and career stages
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {trainingPathways.map((pathway) => (
          <div key={pathway.id} className="col-lg-6">
            <div style={{ padding: "20px 0" }}>
              <div 
                style={{ 
                  backgroundColor: "#f8f9fa",
                  padding: "25px 30px",
                  color: "#212529",
                  borderBottom: "1px solid #e9ecef"
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div 
                    style={{ 
                      fontSize: "40px"
                    }}
                  >
                    {pathway.icon}
                  </div>
                  <div className="text-end">
                    <span 
                      style={{ 
                        backgroundColor: "#f8f9fa", 
                        color: "#212529", 
                        padding: "6px 12px", 
                        borderRadius: "6px", 
                        fontSize: "12px", 
                        fontWeight: "600",
                        border: "1px solid #e9ecef"
                      }}
                    >
                      {pathway.level}
                    </span>
                    <div style={{ color: "#6c757d", fontSize: "14px", marginTop: "5px" }}>
                      {pathway.duration}
                    </div>
                  </div>
                </div>
                <h4 
                  style={{ 
                    color: "#212529", 
                    fontWeight: "700", 
                    marginBottom: "15px"
                  }}
                >
                  {pathway.title}
                </h4>
              </div>
              
              <div className="card-body p-4" style={{ backgroundColor: "white" }}>
                <p style={{ color: "#6c757d", lineHeight: "1.6", marginBottom: "20px" }}>
                  {pathway.description}
                </p>
                <div className="mb-3">
                  <h6 style={{ color: "#495057", fontWeight: "600", marginBottom: "15px" }}>
                    Key Components:
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {pathway.modules.map((module, index) => (
                      <span 
                        key={index}
                        style={{ 
                          backgroundColor: "#f8f9fa", 
                          color: "#495057", 
                          padding: "6px 12px", 
                          borderRadius: "12px", 
                          fontSize: "12px",
                          border: "1px solid #e9ecef",
                          fontWeight: "500"
                        }}
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
                <div 
                  style={{ 
                    backgroundColor: "#f8f9fa",
                    padding: "15px", 
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#212529",
                    fontWeight: "600",
                    border: "1px solid #e9ecef"
                  }}
                >
                  <strong>Outcome:</strong> {pathway.outcome}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Core Components */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="text-center mb-5">
            <h6 
              style={{
                color: "#fd7e14",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "15px"
              }}
            >
              CORE COMPONENTS
            </h6>
            <h2 
              style={{ 
                fontSize: "36px", 
                fontWeight: "700", 
                color: "#212529", 
                marginBottom: "20px",
                lineHeight: "1.3"
              }}
            >
              Essential Training Modules
            </h2>
            <p 
              style={{ 
                fontSize: "18px", 
                color: "#6c757d", 
                maxWidth: "700px",
                margin: "0 auto"
              }}
            >
              Our training blends pedagogy, technology, and communication to prepare educators for modern classrooms
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {coreComponents.map((component) => (
          <div key={component.id} className="col-lg-4">
            <div 
              className="card h-100 border-0 text-center"
              style={{ 
                borderRadius: "8px", 
                padding: "40px 30px",
                backgroundColor: "white",
                border: "1px solid #e9ecef"
              }}
            >
              <div 
                style={{ 
                  fontSize: "60px", 
                  marginBottom: "25px"
                }}
              >
                {component.icon}
              </div>
              <h5 
                style={{ 
                  color: "#212529", 
                  fontWeight: "700", 
                  marginBottom: "15px",
                  fontSize: "22px"
                }}
              >
                {component.title}
              </h5>
              <div 
                style={{ 
                  backgroundColor: "#f8f9fa", 
                  color: "#212529", 
                  padding: "8px 20px", 
                  borderRadius: "6px", 
                  fontSize: "14px", 
                  fontWeight: "600", 
                  marginBottom: "20px",
                  display: "inline-block",
                  border: "1px solid #e9ecef"
                }}
              >
                {component.duration}
              </div>
              <p 
                style={{ 
                  color: "#6c757d", 
                  fontSize: "16px", 
                  lineHeight: "1.6", 
                  marginBottom: "20px"
                }}
              >
                {component.description}
              </p>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {component.features.map((feature, index) => (
                  <span 
                    key={index}
                    style={{ 
                      backgroundColor: "#f8f9fa", 
                      color: "#495057", 
                      padding: "4px 10px", 
                      borderRadius: "12px", 
                      fontSize: "12px",
                      border: "1px solid #e9ecef",
                      fontWeight: "500"
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills & Tools */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="text-center mb-5">
            <h6 
              style={{
                color: "#fd7e14",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "15px"
              }}
            >
              SKILLS DEVELOPMENT
            </h6>
            <h2 
              style={{ 
                fontSize: "36px", 
                fontWeight: "700", 
                color: "#212529", 
                marginBottom: "20px",
                lineHeight: "1.3"
              }}
            >
              Skills & Tools Teachers Gain
            </h2>
            <p 
              style={{ 
                fontSize: "18px", 
                color: "#6c757d", 
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              By the end of the program, teachers are equipped with comprehensive skills and tools
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {skillsGained.map((skill) => (
          <div key={skill.id} className="col-lg-6">
            <div 
              className="card h-100 border-0"
              style={{ 
                borderRadius: "8px",
                padding: "30px",
                backgroundColor: "white",
                border: "1px solid #e9ecef"
              }}
            >
              <div className="d-flex align-items-start">
                <div 
                  style={{ 
                    fontSize: "40px", 
                    marginRight: "20px"
                  }}
                >
                  {skill.icon}
                </div>
                <div>
                  <h5 
                    style={{ 
                      color: "#212529", 
                      fontWeight: "700", 
                      marginBottom: "15px",
                      fontSize: "20px"
                    }}
                  >
                    {skill.title}
                  </h5>
                  <p 
                    style={{ 
                      color: "#6c757d", 
                      fontSize: "16px", 
                      lineHeight: "1.6", 
                      margin: "0"
                    }}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose NEIEA */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="text-center mb-5">
            <h6 
              style={{
                color: "#fd7e14",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "15px"
              }}
            >
              WHY CHOOSE US
            </h6>
            <h2 
              style={{ 
                fontSize: "36px", 
                fontWeight: "700", 
                color: "#212529", 
                marginBottom: "20px",
                lineHeight: "1.3"
              }}
            >
              Why NEIEA Teacher Training?
            </h2>
            <p 
              style={{ 
                fontSize: "18px", 
                color: "#6c757d", 
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Discover what makes our training program unique and effective
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {whyChooseUs.map((reason) => (
          <div key={reason.id} className="col-lg-3 col-md-6">
            <div 
              className="card h-100 border-0 text-center"
              style={{ 
                borderRadius: "8px", 
                padding: "30px",
                backgroundColor: "white",
                border: "1px solid #e9ecef"
              }}
            >
              <div 
                style={{ 
                  fontSize: "50px", 
                  marginBottom: "20px"
                }}
              >
                {reason.icon}
              </div>
              <h6 
                style={{ 
                  color: "#212529", 
                  fontWeight: "700", 
                  marginBottom: "15px",
                  fontSize: "18px"
                }}
              >
                {reason.title}
              </h6>
              <p 
                style={{ 
                  color: "#6c757d", 
                  fontSize: "14px", 
                  lineHeight: "1.6", 
                  margin: "0"
                }}
              >
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div className="row mb-5">
        <div className="col-12">
          <div 
            className="card border-0"
            style={{ 
              borderRadius: "8px", 
              overflow: "hidden",
              backgroundColor: "white",
              border: "1px solid #e9ecef"
            }}
          >
            <div className="row g-0">
              <div className="col-lg-6">
                <img 
                  src="/assets/images/Teacher's Training Picture.jpg" 
                  alt="NEIEA Teacher Training"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div className="col-lg-6">
                <div 
                  style={{ 
                    padding: "50px 40px",
                    height: "400px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "white"
                  }}
                >
                  <h3 
                    style={{ 
                      color: "#212529", 
                      fontWeight: "700", 
                      marginBottom: "20px",
                      fontSize: "28px"
                    }}
                  >
                    Empowering Educators Worldwide
                  </h3>
                  <p 
                    style={{ 
                      color: "#6c757d", 
                      fontSize: "16px", 
                      lineHeight: "1.7",
                      marginBottom: "25px"
                    }}
                  >
                    At NEIEA, we don't just train teachers—we nurture <strong>innovators in education</strong> who are ready to inspire, guide, and shape the next generation of learners with confidence, skills, and digital readiness.
                  </p>
                  <div className="d-flex gap-2">
                    <div 
                      style={{
                        width: "4px",
                        height: "40px",
                        backgroundColor: "#6c757d",
                        borderRadius: "2px"
                      }}
                    ></div>
                    <p 
                      style={{ 
                        color: "#495057", 
                        fontSize: "14px", 
                        fontStyle: "italic",
                        margin: "0",
                        paddingLeft: "15px"
                      }}
                    >
                      "Building educators who transform communities and create lasting educational impact across the globe."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div 
            className="card border-0 text-center"
            style={{ 
              borderRadius: "8px", 
              backgroundColor: "white",
              color: "#212529",
              padding: "50px 40px",
              border: "1px solid #e9ecef"
            }}
          >
            <h3 
              style={{ 
                fontSize: "28px", 
                fontWeight: "700", 
                marginBottom: "20px"
              }}
            >
              ✨ Join the NEIEA Teacher Training Program
            </h3>
            <p 
              style={{ 
                fontSize: "18px", 
                marginBottom: "30px",
                color: "#6c757d",
                maxWidth: "600px",
                margin: "0 auto 30px"
              }}
            >
              Empower yourself with the skills, tools, and confidence to transform education. Become part of a community dedicated to shaping the future of learning.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button 
                className="btn btn-lg"
                style={{
                  borderRadius: "6px",
                  padding: "12px 30px",
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "white",
                  backgroundColor: "#212529",
                  border: "1px solid #212529"
                }}
              >
                📩 Contact Us
              </button>
              <button 
                className="btn btn-outline-secondary btn-lg"
                style={{
                  borderRadius: "6px",
                  padding: "12px 30px",
                  fontWeight: "600",
                  fontSize: "16px",
                  borderColor: "#6c757d",
                  color: "#6c757d",
                  backgroundColor: "transparent"
                }}
              >
                🌐 Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default TeachersTraining;
