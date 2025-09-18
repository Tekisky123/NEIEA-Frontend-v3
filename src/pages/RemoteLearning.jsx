import React from 'react';
import PageTemplate from '../components/PageTemplate';

const RemoteLearning = () => {
  const coursesOffered = [
    {
      id: 1,
      title: "English Language Programs",
      description: "From beginner and foundational levels for first-time learners to advanced modules that refine fluency, confidence, and communication skills.",
      icon: "🗣️"
    },
    {
      id: 2,
      title: "Mathematics & Science Foundations",
      description: "Strengthening conceptual clarity, problem-solving, and critical thinking across different age groups.",
      icon: "🧮"
    },
    {
      id: 3,
      title: "Technical & Digital Literacy",
      description: "Practical training in Google Workspace, Microsoft Office Suite, and other essential tools for academic, professional, and entrepreneurial growth.",
      icon: "💻"
    }
  ];

  const learningFeatures = [
    {
      title: "Device Flexibility",
      description: "Access courses using smartphone, laptop, or tablet - learn with any device you have available.",
      icon: "📱"
    },
    {
      title: "Anytime, Anywhere Learning",
      description: "Transcend geographical boundaries with 24/7 access to expert instruction and resources.",
      icon: "🌍"
    },
    {
      title: "Expert Instruction",
      description: "Direct access to qualified mentors providing personalized support and guidance.",
      icon: "👨‍🏫"
    },
    {
      title: "Holistic Education",
      description: "Integration of linguistic, academic, and technical skills for comprehensive development.",
      icon: "🎯"
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "About", link: null },
        { name: "Our Working Model", link: null },
        { name: "Remote Individual Learning", link: null }
      ]}
      title="Online Education Model for Individual Learners"
      subtitle="Remote Individual Learning"
      description="NEIEA's Online Education Model is a learner-centric framework that empowers individuals to access courses independently using their own digital devices—smartphone, laptop, or tablet."
      heroImage="/assets/images/innovation.jpeg"
    >
      {/* Introduction */}
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
            Designed to transcend geographical boundaries, it enables students to learn anytime, anywhere, with direct access to expert instruction and high-quality resources. By integrating linguistic, academic, and technical education, this model creates a holistic, inclusive, and transformative learning ecosystem that equips learners with critical skills needed to thrive in today's knowledge-driven global economy.
          </p>
        </div>
      </div>

      {/* Courses Offered */}
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
            Courses Offered
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {coursesOffered.map((course) => (
          <div key={course.id} className="col-lg-4">
            <div 
              className="card h-100 border-0 shadow-sm text-center"
              style={{ borderRadius: "15px", padding: "30px" }}
            >
              <div 
                style={{ 
                  fontSize: "60px", 
                  marginBottom: "20px"
                }}
              >
                {course.icon}
              </div>
              <h4 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "15px" 
                }}
              >
                {course.title}
              </h4>
              <p 
                style={{ 
                  color: "#6c757d", 
                  lineHeight: "1.6", 
                  margin: "0",
                  fontSize: "15px"
                }}
              >
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pedagogical Approach */}
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
            Pedagogical Approach
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div className="text-center mb-3">
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>🎥</div>
              <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
                Live Interactive Sessions
              </h5>
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", textAlign: "center", margin: "0" }}>
              Led by expert mentors, fostering real-time dialogue, collaboration, and personalized support for each learner.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div className="text-center mb-3">
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>📚</div>
              <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
                Digital Resources & Assignments
              </h5>
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", textAlign: "center", margin: "0" }}>
              Available anytime for flexible, self-paced learning, allowing students to progress at their own rhythm.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div className="text-center mb-3">
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>📋</div>
              <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
                Assessments & Feedback
              </h5>
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", textAlign: "center", margin: "0" }}>
              Continuous evaluation ensures measurable progress and provides tailored guidance for improvement.
            </p>
          </div>
        </div>
      </div>

      {/* Key Learning Features */}
      <div className="row mt-5 mb-5">
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
            Key Learning Features
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {learningFeatures.map((feature, index) => (
          <div key={index} className="col-lg-6">
            <div 
              className="d-flex align-items-start p-4"
              style={{ 
                backgroundColor: "#f8f9fa", 
                borderRadius: "15px",
                height: "100%"
              }}
            >
              <div 
                style={{ 
                  fontSize: "40px", 
                  marginRight: "20px",
                  flexShrink: 0
                }}
              >
                {feature.icon}
              </div>
              <div>
                <h5 
                  style={{ 
                    color: "#212529", 
                    fontWeight: "600", 
                    marginBottom: "10px" 
                  }}
                >
                  {feature.title}
                </h5>
                <p 
                  style={{ 
                    color: "#6c757d", 
                    lineHeight: "1.6", 
                    margin: "0" 
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="row">
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
              Transform Your Future with Individual Online Learning
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                marginBottom: "25px",
                maxWidth: "700px",
                margin: "0 auto 25px",
                lineHeight: "1.6"
              }}
            >
              Join NEIEA's learner-centric online education model and gain the critical skills needed to thrive in today's knowledge-driven global economy. Access expert instruction, high-quality resources, and transformative learning experiences from any device, anywhere.
            </p>
            <a 
              href="/about-us/contact" 
              className="btn btn-primary"
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
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default RemoteLearning;
