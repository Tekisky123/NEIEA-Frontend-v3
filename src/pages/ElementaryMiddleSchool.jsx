import React from 'react';
import PageTemplate from '../components/PageTemplate';

const ElementaryMiddleSchool = () => {
  const programFeatures = [
    {
      id: 1,
      title: "Age-Appropriate Curriculum",
      level: "Grades 1-8",
      description: "Specially designed curriculum that matches cognitive development stages of elementary and middle school students.",
      modules: ["Foundational Literacy", "Basic Numeracy", "Science Exploration", "Social Skills Development"],
      outcome: "Strong academic foundation for higher education"
    },
    {
      id: 2,
      title: "Interactive Learning Methods",
      level: "Engaging Pedagogy",
      description: "Using games, storytelling, and hands-on activities to make learning enjoyable and effective for young minds.",
      modules: ["Educational Games", "Story-based Learning", "Visual Arts Integration", "Music and Movement"],
      outcome: "Enhanced engagement and retention"
    },
    {
      id: 3,
      title: "Digital Literacy for Young Learners",
      level: "Technology Integration",
      description: "Introduction to basic computer skills and digital tools appropriate for elementary and middle school students.",
      modules: ["Computer Basics", "Educational Software", "Digital Safety", "Creative Tools"],
      outcome: "Technology-ready students for the digital age"
    },
    {
      id: 4,
      title: "Character Development",
      level: "Values Education",
      description: "Building moral values, social skills, and emotional intelligence alongside academic learning.",
      modules: ["Ethics and Values", "Teamwork Skills", "Emotional Intelligence", "Leadership Qualities"],
      outcome: "Well-rounded individuals with strong character"
    },
    {
      id: 5,
      title: "Parental Involvement Programs",
      level: "Community Engagement",
      description: "Engaging parents and families in the educational process to support student success at home and school.",
      modules: ["Parent Workshops", "Home Learning Support", "Progress Tracking", "Community Events"],
      outcome: "Strong school-home partnership for student success"
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "Our Work", link: null },
        { name: "Education", link: null },
        { name: "Elementary & Middle School", link: null }
      ]}
      title="Elementary & Middle School Education"
      subtitle="Building Strong Foundations for Young Learners"
      description="NEIEA's elementary and middle school programs focus on creating solid academic foundations while nurturing creativity, critical thinking, and character development in young students."
      heroImage="/assets/images/resized_classroom_image.png"
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
            Elementary and middle school years are crucial for laying the foundation of lifelong learning. Our programs are designed to nurture young minds with age-appropriate, engaging, and comprehensive educational experiences.
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
            Our Elementary & Middle School Programs
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

      {/* Age Group Focus */}
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
            Age-Appropriate Learning Approach
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>👶</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Early Elementary (Grades 1-3)
            </h5>
            <div style={{ backgroundColor: "#06038F", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "15px" }}>
              Ages 6-9
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Focus on basic literacy, numeracy, and social skills through play-based learning and interactive activities.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>🧒</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Late Elementary (Grades 4-5)
            </h5>
            <div style={{ backgroundColor: "#06038F", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "15px" }}>
              Ages 9-11
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Building on foundations with more complex problem-solving, reading comprehension, and independent learning skills.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>🧑</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Middle School (Grades 6-8)
            </h5>
            <div style={{ backgroundColor: "#06038F", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "15px" }}>
              Ages 11-14
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
              Preparing for high school with advanced critical thinking, research skills, and subject specialization.
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
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
            Student Learning Outcomes
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
                Strong Academic Foundation
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Students develop solid skills in reading, writing, mathematics, and science that prepare them for advanced learning.
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
                Critical Thinking Skills
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Development of analytical and problem-solving abilities through inquiry-based learning approaches.
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
                Social and Emotional Development
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Building empathy, teamwork, communication skills, and emotional intelligence for healthy relationships.
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
                Digital Literacy and 21st Century Skills
              </h6>
              <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Preparation for the digital world with technology skills and modern learning competencies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Our Program */}
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
            Why Choose Our Elementary & Middle School Program?
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div style={{ fontSize: "50px", marginBottom: "15px" }}>🎯</div>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Child-Centered
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", margin: "0" }}>
              Programs designed around child development and learning needs
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div style={{ fontSize: "50px", marginBottom: "15px" }}>🎨</div>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Creative
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", margin: "0" }}>
              Innovative teaching methods that make learning fun and engaging
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div style={{ fontSize: "50px", marginBottom: "15px" }}>🏆</div>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Excellence
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", margin: "0" }}>
              High academic standards with qualified and caring educators
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="text-center">
            <div style={{ fontSize: "50px", marginBottom: "15px" }}>🤗</div>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Supportive
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", margin: "0" }}>
              Nurturing environment that supports every child's growth
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
              We believe that every child deserves a <strong>strong educational foundation</strong> that not only prepares them academically but also nurtures their creativity, character, and love for learning.
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
              ✨ Enroll Your Child in Our Elementary & Middle School Program
            </h4>
            <p style={{ color: "#6c757d", marginBottom: "25px", maxWidth: "600px", margin: "0 auto 25px", lineHeight: "1.6" }}>
              Give your child the best start in their educational journey with our comprehensive, engaging, and nurturing programs designed for young learners.
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
                🌐 Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ElementaryMiddleSchool;
