import React from 'react';
import PageTemplate from '../components/PageTemplate';

const ApplicationOfTechnology = () => {
  const technologies = [
    {
      id: 1,
      title: "Learning Management Systems (LMS)",
      description: "Comprehensive platforms for course delivery, student tracking, and resource management.",
      features: ["Course content delivery", "Progress tracking", "Assessment tools", "Communication features"],
      icon: "💻"
    },
    {
      id: 2,
      title: "Interactive Multimedia Content",
      description: "Engaging video lectures, animations, and interactive simulations for enhanced learning.",
      features: ["Video lectures", "Interactive simulations", "3D models", "Gamified content"],
      icon: "🎬"
    },
    {
      id: 3,
      title: "Mobile Learning Applications",
      description: "Mobile-first learning solutions that enable education access anytime, anywhere.",
      features: ["Offline content access", "Push notifications", "Mobile assessments", "Social learning"],
      icon: "📱"
    },
    {
      id: 4,
      title: "AI-Powered Personalization",
      description: "Artificial intelligence algorithms that adapt learning paths to individual student needs.",
      features: ["Adaptive learning paths", "Intelligent tutoring", "Performance analytics", "Predictive insights"],
      icon: "🤖"
    }
  ];

  const implementations = [
    {
      phase: "Assessment & Planning",
      description: "Evaluate current technology infrastructure and identify integration opportunities.",
      duration: "2-4 weeks"
    },
    {
      phase: "Platform Selection",
      description: "Choose appropriate technology solutions based on educational goals and budget.",
      duration: "1-2 weeks"
    },
    {
      phase: "Content Development",
      description: "Create and digitize educational content for technology-enhanced delivery.",
      duration: "4-8 weeks"
    },
    {
      phase: "Training & Support",
      description: "Train educators and students on new technology tools and provide ongoing support.",
      duration: "2-4 weeks"
    },
    {
      phase: "Deployment & Monitoring",
      description: "Roll out technology solutions and monitor effectiveness with continuous improvements.",
      duration: "Ongoing"
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "About", link: null },
        { name: "Our Working Model", link: null },
        { name: "Blended Learning Model", link: null },
        { name: "Application of Technology", link: null }
      ]}
      title="Applications Of Technology"
      subtitle="Transforming Education Through Digital Innovation"
      description="The usage of technology platforms like Google Classroom, MS Teams, and Zoom has facilitated massive growth and scaling of education. NEIEA has embraced these technologies to enhance learning outcomes and accessibility."
      heroImage="/assets/images/innovation.jpeg"
    >
      {/* Introduction */}
      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <p 
            style={{ 
              fontSize: "18px", 
              lineHeight: "1.8", 
              color: "#495057",
              marginBottom: "30px",
              textAlign: "justify"
            }}
          >
            Technology like MOOC (Massive Open Ware Online Courses) launched by MIT in the USA have paved the way for the simultaneous provision of education to hundreds of thousands of students globally. These technologies are now widely used by educational and business institutions globally for education and training purposes.
          </p>
          <p 
            style={{ 
              fontSize: "18px", 
              lineHeight: "1.8", 
              color: "#495057",
              marginBottom: "30px",
              textAlign: "justify"
            }}
          >
            NEIEA has opted for Google Classroom. It is an online platform developed by Google to facilitate communication, collaboration, and assignment management between teachers and students. It aims to streamline the process of creating, distributing, and grading assignments in a digital environment. It operates primarily as a Learning Management System (LMS) or a virtual classroom.
          </p>
          <p 
            style={{ 
              fontSize: "18px", 
              lineHeight: "1.8", 
              color: "#495057",
              marginBottom: "0",
              textAlign: "justify"
            }}
          >
            Google Classroom can support online learning by providing a central hub for teachers to organize and deliver materials, resources, and assignments. It allows students to access course materials, submit assignments digitally, and engage in discussions with peers and teachers regardless of their physical location.
          </p>
        </div>
      </div>

      {/* Enhancing Learning through DOP and Digital Tools */}
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
            Enhancing Learning through Discourse-Oriented Pedagogy and Digital Tools
          </h3>
          <p 
            style={{ 
              fontSize: "18px", 
              lineHeight: "1.8", 
              color: "#495057",
              marginBottom: "40px",
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto 40px"
            }}
          >
            Discourse-oriented pedagogy when combined with digital curriculum development and assessment tools like Google Docs and Google Forms, it can enhance the learning experience in several ways:
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {/* Digital Curriculum in Google Docs */}
        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div className="text-center mb-3">
              <div style={{ fontSize: "48px", marginBottom: "15px" }}>
                📝
              </div>
              <h4 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "15px" 
                }}
              >
                Digital Curriculum in Google Docs
              </h4>
              <p 
                style={{ 
                  color: "#6c757d", 
                  lineHeight: "1.6", 
                  margin: "0",
                  textAlign: "justify"
                }}
              >
                Google Docs enables seamless collaboration among educators and instructional designers, fostering dynamic and agile curriculum development through real-time editing and continuous improvement based on feedback and evolving educational needs.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Learning Materials */}
        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div className="text-center mb-3">
              <div style={{ fontSize: "48px", marginBottom: "15px" }}>
                🎯
              </div>
              <h4 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "15px" 
                }}
              >
                Interactive Learning Materials
              </h4>
              <p 
                style={{ 
                  color: "#6c757d", 
                  lineHeight: "1.6", 
                  margin: "0",
                  textAlign: "justify"
                }}
              >
                Discourse-oriented pedagogy integrates interactive learning materials in the digital curriculum, promoting active student engagement through discussions and exploration of diverse content types.
              </p>
            </div>
          </div>
        </div>

        {/* Collaborative Learning Opportunities */}
        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div className="text-center mb-3">
              <div style={{ fontSize: "48px", marginBottom: "15px" }}>
                🤝
              </div>
              <h4 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "15px" 
                }}
              >
                Collaborative Learning Opportunities
              </h4>
              <p 
                style={{ 
                  color: "#6c757d", 
                  lineHeight: "1.6", 
                  margin: "0",
                  textAlign: "justify"
                }}
              >
                Google Docs facilitates collaborative writing, enhancing discourse-oriented pedagogy by promoting joint problem analysis, solution discussions, and co-creation of knowledge, fostering improved teamwork and communication skills among students.
              </p>
            </div>
          </div>
        </div>

        {/* Real-Time Feedback and Assessment */}
        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div className="text-center mb-3">
              <div style={{ fontSize: "48px", marginBottom: "15px" }}>
                📊
              </div>
              <h4 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "15px" 
                }}
              >
                Real-Time Feedback and Assessment
              </h4>
              <p 
                style={{ 
                  color: "#6c757d", 
                  lineHeight: "1.6", 
                  margin: "0",
                  textAlign: "justify"
                }}
              >
                Google Forms functions as an assessment tool, enabling instructors to create quizzes and surveys for gauging students' understanding, progress, and feedback, while providing real-time feedback to address individual needs and improve teaching approaches.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Online Educational Tools */}
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
            Enhancing Collaborative and Interactive Learning with Online Educational Tools
          </h3>
          <p 
            style={{ 
              fontSize: "18px", 
              lineHeight: "1.8", 
              color: "#495057",
              marginBottom: "40px",
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto 40px"
            }}
          >
            Incorporating online tools like Jamboard, MathSpad, and Equatio enhances discourse-oriented pedagogy and digital curriculum development.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {/* Jamboard */}
        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "25px", textAlign: "center" }}
          >
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>
              📋
            </div>
            <h5 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "15px" 
              }}
            >
              Jamboard
            </h5>
            <p 
              style={{ 
                color: "#6c757d", 
                lineHeight: "1.6", 
                margin: "0",
                fontSize: "14px"
              }}
            >
              Fosters collaboration, geometrical construction, and conceptual mapping for interactive learning experiences.
            </p>
          </div>
        </div>

        {/* MathSpad */}
        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "25px", textAlign: "center" }}
          >
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>
              📐
            </div>
            <h5 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "15px" 
              }}
            >
              MathSpad
            </h5>
            <p 
              style={{ 
                color: "#6c757d", 
                lineHeight: "1.6", 
                margin: "0",
                fontSize: "14px"
              }}
            >
              Encourages hands-on exploration and visualization in geometry for enhanced mathematical understanding.
            </p>
          </div>
        </div>

        {/* Equatio */}
        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "25px", textAlign: "center" }}
          >
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>
              ∑
            </div>
            <h5 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "15px" 
              }}
            >
              Equatio
            </h5>
            <p 
              style={{ 
                color: "#6c757d", 
                lineHeight: "1.6", 
                margin: "0",
                fontSize: "14px"
              }}
            >
              Simplifies mathematical representation, enhances accessibility, and facilitates efficient feedback and assessment.
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-10 mx-auto text-center">
          <p 
            style={{ 
              fontSize: "18px", 
              lineHeight: "1.8", 
              color: "#495057",
              marginBottom: "0",
              textAlign: "justify"
            }}
          >
            These tools collectively provide an interactive, engaging, and inclusive learning environment that supports NEIEA's commitment to innovative education delivery.
          </p>
        </div>
      </div>

      {/* Featured Videos */}
      <div className="row mt-5 mb-5">
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
            Featured Videos
          </h3>
          <p 
            style={{ 
              fontSize: "18px", 
              color: "#6c757d", 
              textAlign: "center",
              marginBottom: "40px",
              maxWidth: "600px",
              margin: "0 auto 40px"
            }}
          >
            Highlighted moments that capture the essence of our mission and the transformation happening in communities worldwide.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-12">
          <div 
            className="card border-0 shadow-sm"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px", 
              padding: "40px",
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: "64px", marginBottom: "20px", opacity: "0.3" }}>
              📹
            </div>
            <h4 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "15px" 
              }}
            >
              No videos found for this page.
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                lineHeight: "1.6", 
                margin: "0",
                maxWidth: "500px",
                margin: "0 auto"
              }}
            >
              Video content for this section is currently being developed. Check back soon for educational videos showcasing our technology applications in action.
            </p>
          </div>
        </div>
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
              Ready to Embrace Educational Technology?
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                marginBottom: "25px",
                maxWidth: "600px",
                margin: "0 auto 25px"
              }}
            >
              Let NEIEA help you integrate cutting-edge technology into your educational programs and transform your teaching approach.
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
              Get Started
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ApplicationOfTechnology;
