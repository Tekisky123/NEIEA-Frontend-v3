import React from 'react';
import PageTemplate from '../components/PageTemplate';

const NeiUsaIntroduction = () => {
  const targetCommunities = [
    {
      id: 1,
      title: "US Urban Youth",
      level: "Urban Communities",
      description: "Tailored educational programs to combat concentrated poverty and unemployment, equipping young individuals with tools for personal growth and success.",
      modules: ["Poverty Combat Programs", "Employment Training", "Personal Development", "Success Tools"],
      outcome: "Empowered urban youth with career opportunities"
    },
    {
      id: 2,
      title: "Native American Youth",
      level: "Indigenous Communities",
      description: "Dedicated to uplifting through education, mentorship, and cultural preservation, fostering empowerment and brighter futures.",
      modules: ["Educational Support", "Cultural Preservation", "Mentorship Programs", "Community Empowerment"],
      outcome: "Culturally empowered and educated Native American youth"
    },
    {
      id: 3,
      title: "Immigrants",
      level: "Integration Support",
      description: "Support in overcoming language barriers and integrating into American society, creating a more inclusive and harmonious society.",
      modules: ["Language Support", "Integration Programs", "Cultural Bridge Building", "Society Inclusion"],
      outcome: "Successfully integrated immigrant communities"
    },
    {
      id: 4,
      title: "Incarcerated Youth",
      level: "Justice Reform",
      description: "Empowering through tailored educational programs and personalized support, breaking the school-to-prison pipeline.",
      modules: ["Educational Programs", "Personalized Support", "Pipeline Breaking", "Reentry Preparation"],
      outcome: "Reduced recidivism and successful reintegration"
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "NEI USA", link: null },
        { name: "Introduction", link: null }
      ]}
      title="NEI USA Initiative"
      subtitle="Expanding Our Proven Model"
      description="Building on the overwhelming success of NEIEA, we are expanding our proven model to the United States. Welcome to the New Education Initiative (NEI), a passionate advocate for accessible and transformative education."
      heroImage="/assets/images/global-map.png"
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
            We believe that education is the key to unlocking potential and creating lasting positive change. Our commitment extends to every corner of American society, ensuring no one is left behind.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="row mb-5">
        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <h4 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "20px" 
              }}
            >
              🎯 Our Mission
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                fontSize: "16px", 
                lineHeight: "1.6", 
                marginBottom: "0" 
              }}
            >
              To provide good-quality education for all, empowering youth and citizens to drive positive change. We believe that education is the key to unlocking potential and creating lasting positive change.
            </p>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <h4 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "20px" 
              }}
            >
              🌟 Our Focus
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                fontSize: "16px", 
                lineHeight: "1.6", 
                marginBottom: "0" 
              }}
            >
              Targeted Support for Every Community. We intend to focus on three distinct groups facing unique challenges: US urban youth, Native American youth, immigrants, and incarcerated youth.
            </p>
          </div>
        </div>
      </div>

      {/* Target Communities */}
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
            Targeted Support for Every Community
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {targetCommunities.map((community) => (
          <div key={community.id} className="col-lg-6">
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
                    {community.level}
                  </span>
                </div>
                <h4 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
                  {community.title}
                </h4>
                <p style={{ color: "#6c757d", lineHeight: "1.6", marginBottom: "20px" }}>
                  {community.description}
                </p>
                <div className="mb-3">
                  <h6 style={{ color: "#495057", fontWeight: "600", marginBottom: "10px" }}>
                    Key Components:
                  </h6>
                  <ul style={{ color: "#6c757d", paddingLeft: "20px", margin: "0" }}>
                    {community.modules.map((module, index) => (
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
                  <strong>Outcome:</strong> {community.outcome}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Focus - Incarcerated Youth */}
      <div className="row mb-5">
        <div className="col-12">
          <h3 
            style={{ 
              fontSize: "32px", 
              fontWeight: "700", 
              color: "#212529", 
              marginBottom: "20px",
              textAlign: "center"
            }}
          >
            Special Focus: Empowering Incarcerated Youth Through Education
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
            We believe that education is the key to a better future for incarcerated youth and our society as a whole.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>📚</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Inmate Learning
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Studies show that access to quality education significantly benefits incarcerated youth, enhancing cognitive development and reducing recidivism rates.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>🔄</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Reentry Education
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Tailored educational programs and personalized support to offer pathways to reintegration into society.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>⛓️‍💥</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Ending Pipeline
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Breaking the school-to-prison pipeline by providing supportive learning environments and creating opportunities for success.
            </p>
          </div>
        </div>
      </div>

      {/* Our Courses */}
      <div className="row mb-5">
        <div className="col-12">
          <h3 
            style={{ 
              fontSize: "32px", 
              fontWeight: "700", 
              color: "#212529", 
              marginBottom: "20px",
              textAlign: "center"
            }}
          >
            Our Courses
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
            Comprehensive Educational Programs. Our programs are designed to address the specific needs of each group, ensuring personalized learning experiences that lead to real success.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div className="text-center mb-3">
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>🎓</div>
              <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
                GED Preparation
              </h5>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                A recognized bridge to education and boundless opportunity for individuals who did not complete their high school education.
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul style={{ color: "#6c757d", fontSize: "13px", paddingLeft: "20px", lineHeight: "1.8" }}>
                  <li>Comprehensive curriculum</li>
                  <li>Experienced instructors</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul style={{ color: "#6c757d", fontSize: "13px", paddingLeft: "20px", lineHeight: "1.8" }}>
                  <li>Flexible learning</li>
                  <li>Career guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div className="text-center mb-3">
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>🌍</div>
              <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
                ESL Courses for Immigrants
              </h5>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                Specialized courses combining language skills with GED preparation, fostering confidence and community connections.
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul style={{ color: "#6c757d", fontSize: "13px", paddingLeft: "20px", lineHeight: "1.8" }}>
                  <li>Language skills</li>
                  <li>GED preparation</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul style={{ color: "#6c757d", fontSize: "13px", paddingLeft: "20px", lineHeight: "1.8" }}>
                  <li>Cultural integration</li>
                  <li>Higher education prep</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanding Our Reach */}
      <div className="row mb-5">
        <div className="col-12">
          <h3 
            style={{ 
              fontSize: "32px", 
              fontWeight: "700", 
              color: "#212529", 
              marginBottom: "20px",
              textAlign: "center"
            }}
          >
            Expanding Our Reach
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
            Join us in breaking barriers, empowering minds, and thriving through education. We are expanding our successful model in the United States to create more opportunities for all.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>🏆</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Quality Education
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Proven methodologies that work, bringing NEIEA's successful educational model to American communities.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>🎯</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Community Focus
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Addressing local needs and challenges specific to American communities and diverse populations.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>🤗</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Inclusive Approach
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Ensuring no one is left behind, with programs designed for every community and individual need.
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
              NEI USA expands our <strong>proven educational model</strong> to American communities, ensuring that transformative education reaches every corner of society, from urban youth to immigrants, Native Americans, and incarcerated individuals.
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
              ✨ Join NEI USA Initiative
            </h4>
            <p style={{ color: "#6c757d", marginBottom: "25px", maxWidth: "600px", margin: "0 auto 25px", lineHeight: "1.6" }}>
              Be part of expanding our proven educational model in the United States. Help us break barriers, empower minds, and create transformative educational opportunities for all American communities.
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
                📚 Support Our Mission
              </a>
              <a 
                href="/donation/volunteer" 
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
                🤝 Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default NeiUsaIntroduction;
