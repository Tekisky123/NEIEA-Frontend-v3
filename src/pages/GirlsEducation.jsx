import React from 'react';
import PageTemplate from '../components/PageTemplate';

const GirlsEducation = () => {
  const programFeatures = [
    {
      id: 1,
      title: "Safe Learning Environments",
      level: "Security & Safety",
      description: "Creating secure, supportive spaces where girls can learn without fear, harassment, or discrimination.",
      modules: ["Safe Spaces", "Female Mentors", "Anti-Harassment Policies", "Supportive Counseling"],
      outcome: "Confident and secure female learners"
    },
    {
      id: 2,
      title: "Gender-Sensitive Curriculum",
      level: "Inclusive Education",
      description: "Curriculum that challenges gender stereotypes and promotes equal opportunities for girls in all subjects including STEM.",
      modules: ["STEM for Girls", "Leadership Training", "Career Guidance", "Role Model Programs"],
      outcome: "Girls pursuing diverse career paths confidently"
    },
    {
      id: 3,
      title: "Financial Support & Scholarships",
      level: "Economic Empowerment",
      description: "Removing financial barriers through scholarships, free materials, and support for families to keep girls in school.",
      modules: ["Scholarships", "Free Materials", "Uniform Support", "Family Assistance"],
      outcome: "Reduced dropout rates due to economic constraints"
    },
    {
      id: 4,
      title: "Life Skills & Empowerment",
      level: "Personal Development",
      description: "Building confidence, leadership skills, and life skills that empower girls to make informed decisions about their futures.",
      modules: ["Leadership Skills", "Communication Training", "Decision Making", "Self-Defense"],
      outcome: "Empowered and confident young women"
    },
    {
      id: 5,
      title: "Community Awareness Programs",
      level: "Social Change",
      description: "Working with families and communities to change attitudes about girls' education and promote gender equality.",
      modules: ["Community Workshops", "Parent Education", "Awareness Campaigns", "Male Ally Programs"],
      outcome: "Changed community attitudes supporting girls' education"
    }
  ];

  return (
    <div className="our-work-page">
      <PageTemplate
      breadcrumbPath={[
        { name: "Our Work", link: null },
        { name: "Education", link: null },
        { name: "Girl's Education", link: null }
      ]}
      title="Girl's Education Programs"
      subtitle="Empowering Girls Through Quality Education"
      description="NEIEA is committed to ensuring that girls have equal access to quality education, breaking down barriers and creating opportunities for female empowerment through learning."
      heroImage="/assets/images/vision2 (1).jpg"
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
            Educating girls transforms not just individual lives, but entire communities and societies. Our programs focus on breaking down barriers, challenging stereotypes, and creating supportive environments where girls can thrive academically and personally.
          </p>
        </div>
      </div>

      {/* Impact Statistics */}
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
            Our Impact on Girls' Education
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-3 col-md-6">
          <div 
            className="card h-100 border-0 text-center"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px", 
              padding: "25px 20px" 
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>👩‍🎓</div>
            <h4 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
              80%
            </h4>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Girl Students
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              Of our 10,116 total learners, demonstrating our commitment to girls' education
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div 
            className="card h-100 border-0 text-center"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px", 
              padding: "25px 20px" 
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>👩‍🏫</div>
            <h4 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
              90%
            </h4>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Women Educators
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              Female role models inspiring and teaching our students daily
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div 
            className="card h-100 border-0 text-center"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px", 
              padding: "25px 20px" 
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>🆓</div>
            <h4 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
              100%
            </h4>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Free Education
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              All courses provided free to remove financial barriers for girls
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div 
            className="card h-100 border-0 text-center"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px", 
              padding: "25px 20px" 
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>🌟</div>
            <h4 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
              1,500+
            </h4>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Girls Certified
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              Female students who have successfully completed our programs
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
            Our Girls' Education Programs
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
              At NEIEA, we recognize the <strong>transformative power of education</strong> in the lives of young girls. By providing free courses and creating inclusive learning environments, we aim to break down barriers and empower the next generation of female leaders.
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
              ✨ Support Girls' Education Initiative
            </h4>
            <p style={{ color: "#6c757d", marginBottom: "25px", maxWidth: "600px", margin: "0 auto 25px", lineHeight: "1.6" }}>
              Join us in empowering girls through education. Your support helps create opportunities for girls to learn, grow, and become leaders in their communities.
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
                📩 Get Involved
              </a>
              <a 
                href="/donate" 
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
                💝 Support Girls
              </a>
            </div>
          </div>
        </div>
      </div>
      </PageTemplate>
    </div>
  );
};

export default GirlsEducation;
