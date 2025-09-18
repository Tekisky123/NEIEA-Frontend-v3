import React from 'react';
import PageTemplate from '../components/PageTemplate';

const BlendedLearning = () => {
  const components = [
    {
      id: 1,
      title: "Online Learning Platform",
      description: "Interactive digital content delivery through our advanced learning management system.",
      features: ["Video lectures", "Interactive quizzes", "Progress tracking", "Mobile accessibility"],
      icon: "💻"
    },
    {
      id: 2,
      title: "Face-to-Face Sessions",
      description: "Traditional classroom interactions for hands-on learning and direct mentorship.",
      features: ["Live discussions", "Practical exercises", "Peer collaboration", "Instructor guidance"],
      icon: "👨‍🏫"
    },
    {
      id: 3,
      title: "Hybrid Workshops",
      description: "Combined online and offline workshops for comprehensive skill development.",
      features: ["Project-based learning", "Real-world applications", "Team activities", "Skill assessments"],
      icon: "🔧"
    }
  ];

  const benefits = [
    {
      title: "Flexibility",
      description: "Learn at your own pace with 24/7 access to online resources while maintaining structured classroom sessions.",
      icon: "⏰"
    },
    {
      title: "Personalization",
      description: "Adaptive learning paths that adjust to individual learning styles and progress rates.",
      icon: "🎯"
    },
    {
      title: "Enhanced Engagement",
      description: "Multiple learning modalities keep students engaged and motivated throughout their educational journey.",
      icon: "🚀"
    },
    {
      title: "Better Outcomes",
      description: "Research shows blended learning improves retention rates and academic performance significantly.",
      icon: "📈"
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "About", link: null },
        { name: "Our Working Model", link: null },
        { name: "Blended Learning Model", link: null }
      ]}
      title="Blended Learning Model"
      subtitle="The Future of Education"
      description="NEIEA's innovative blended learning approach combines the best of traditional classroom instruction with cutting-edge digital learning technologies."
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
            Our blended learning model represents a paradigm shift in education delivery, 
            seamlessly integrating online digital media with traditional face-to-face classroom methods. 
            This approach provides students with more control over time, place, path, and pace of learning 
            while maintaining the essential human connections that make education meaningful.
          </p>
        </div>
      </div>

      {/* Key Components */}
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
            Key Components of Our Model
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {components.map((component) => (
          <div key={component.id} className="col-lg-4">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ borderRadius: "15px", padding: "30px", textAlign: "center" }}
            >
              <div style={{ fontSize: "64px", marginBottom: "20px" }}>
                {component.icon}
              </div>
              <h4 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "15px" 
                }}
              >
                {component.title}
              </h4>
              <p 
                style={{ 
                  color: "#6c757d", 
                  lineHeight: "1.6", 
                  marginBottom: "20px" 
                }}
              >
                {component.description}
              </p>
              <div>
                {component.features.map((feature, index) => (
                  <span 
                    key={index}
                    style={{ 
                      display: "inline-block",
                      backgroundColor: "#f8f9fa", 
                      color: "#495057", 
                      padding: "4px 12px", 
                      borderRadius: "15px", 
                      fontSize: "12px", 
                      marginRight: "8px",
                      marginBottom: "8px",
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

      {/* Benefits Section */}
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
            Benefits of Blended Learning
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {benefits.map((benefit, index) => (
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
                {benefit.icon}
              </div>
              <div>
                <h5 
                  style={{ 
                    color: "#212529", 
                    fontWeight: "600", 
                    marginBottom: "10px" 
                  }}
                >
                  {benefit.title}
                </h5>
                <p 
                  style={{ 
                    color: "#6c757d", 
                    lineHeight: "1.6", 
                    margin: "0" 
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Implementation Process */}
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
            Our Implementation Process
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="timeline">
            {[
              {
                step: "1",
                title: "Assessment & Planning",
                description: "Comprehensive evaluation of learning needs and development of customized blended learning strategies."
              },
              {
                step: "2",
                title: "Content Development",
                description: "Creation of engaging digital content and integration with traditional classroom materials."
              },
              {
                step: "3",
                title: "Platform Setup",
                description: "Implementation of learning management systems and training for instructors and students."
              },
              {
                step: "4",
                title: "Pilot Testing",
                description: "Small-scale implementation to test effectiveness and gather feedback for improvements."
              },
              {
                step: "5",
                title: "Full Deployment",
                description: "Complete rollout with ongoing support, monitoring, and continuous improvement."
              }
            ].map((item, index) => (
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
                  {item.step}
                </div>
                <div>
                  <h5 
                    style={{ 
                      color: "#212529", 
                      fontWeight: "600", 
                      marginBottom: "8px" 
                    }}
                  >
                    {item.title}
                  </h5>
                  <p 
                    style={{ 
                      color: "#6c757d", 
                      lineHeight: "1.6", 
                      margin: "0" 
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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
            <h4 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "15px" 
              }}
            >
              Transform Your Educational Institution
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                marginBottom: "25px",
                maxWidth: "600px",
                margin: "0 auto 25px"
              }}
            >
              Ready to implement blended learning in your institution? Contact us to learn how NEIEA can help you create an innovative learning environment.
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

export default BlendedLearning;
