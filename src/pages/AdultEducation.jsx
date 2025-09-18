import React from 'react';
import PageTemplate from '../components/PageTemplate';

const AdultEducation = () => {
  const programs = [
    {
      id: 1,
      title: "Adult Literacy Program",
      duration: "6 Months",
      level: "Beginner",
      description: "Basic reading, writing, and numeracy skills for adults who missed formal education opportunities.",
      components: ["Reading Skills", "Writing Practice", "Basic Mathematics", "Digital Literacy", "Life Skills"],
      icon: "📖"
    },
    {
      id: 2,
      title: "Continuing Education",
      duration: "12 Months",
      level: "Intermediate",
      description: "Formal education completion programs for adults seeking to complete their schooling or higher education.",
      components: ["Secondary Education", "Higher Secondary", "Diploma Courses", "Degree Programs", "Professional Courses"],
      icon: "🎓"
    },
    {
      id: 3,
      title: "Professional Development",
      duration: "4 Months",
      level: "All Levels",
      description: "Career advancement programs for working adults seeking skill enhancement and professional growth.",
      components: ["Leadership Training", "Management Skills", "Industry Certifications", "Career Counseling", "Networking"],
      icon: "💼"
    },
    {
      id: 4,
      title: "Life Skills & Personal Development",
      duration: "3 Months",
      level: "All Levels",
      description: "Essential life skills training including health education, financial planning, and personal development.",
      components: ["Health & Wellness", "Financial Planning", "Communication Skills", "Problem Solving", "Goal Setting"],
      icon: "🌟"
    }
  ];

  const benefits = [
    {
      title: "Flexible Scheduling",
      description: "Evening and weekend classes designed to accommodate working adults' schedules.",
      icon: "⏰"
    },
    {
      title: "Practical Approach",
      description: "Real-world applications and immediately applicable skills for personal and professional life.",
      icon: "🎯"
    },
    {
      title: "Supportive Environment",
      description: "Encouraging, non-judgmental learning environment with peer support and mentorship.",
      icon: "🤝"
    },
    {
      title: "Affordable Programs",
      description: "Low-cost or free programs to ensure education accessibility for all economic backgrounds.",
      icon: "💰"
    }
  ];

  const successStories = [
    {
      name: "Sunita Devi",
      age: "35",
      background: "Housewife",
      achievement: "Completed Adult Literacy Program and started a small tailoring business",
      impact: "Now earning ₹8,000/month and educating her children"
    },
    {
      name: "Ramesh Kumar",
      age: "42",
      background: "Factory Worker",
      achievement: "Completed Secondary Education and got promoted to supervisor role",
      impact: "40% salary increase and better job security"
    },
    {
      name: "Priya Sharma",
      age: "38",
      background: "Domestic Worker",
      achievement: "Learned computer skills and digital payments",
      impact: "Started online business and expanded client base"
    }
  ];

  const statistics = [
    {
      number: "2,500+",
      label: "Adults Educated",
      description: "Successfully completed our adult education programs"
    },
    {
      number: "78%",
      label: "Career Improvement",
      description: "Participants experienced career advancement or new opportunities"
    },
    {
      number: "15+",
      label: "Program Locations",
      description: "Centers across urban and rural areas"
    },
    {
      number: "95%",
      label: "Completion Rate",
      description: "High program completion rate due to flexible scheduling"
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "Our Work", link: null },
        { name: "Adult Education", link: null }
      ]}
      title="Adult Education Programs"
      subtitle="It's Never Too Late to Learn"
      description="NEIEA's adult education programs provide second-chance learning opportunities for adults who want to complete their education, develop new skills, or advance their careers."
      heroImage="/assets/images/testimonial1.jpg"
    >
      {/* Program Overview */}
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
            Adult education is about empowerment, opportunity, and transformation. Our programs are specifically 
            designed for adults who want to continue their learning journey, whether for personal fulfillment, 
            career advancement, or to set a positive example for their families and communities.
          </p>
        </div>
      </div>

      {/* Program Benefits */}
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
            Why Choose Our Adult Education Programs?
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

      {/* Available Programs */}
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
            Available Programs
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {programs.map((program) => (
          <div key={program.id} className="col-lg-6">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ borderRadius: "15px", padding: "25px" }}
            >
              <div className="d-flex align-items-start mb-3">
                <div 
                  style={{ 
                    fontSize: "40px", 
                    marginRight: "20px",
                    flexShrink: 0
                  }}
                >
                  {program.icon}
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h4 
                      style={{ 
                        color: "#212529", 
                        fontWeight: "600", 
                        marginBottom: "0",
                        fontSize: "20px"
                      }}
                    >
                      {program.title}
                    </h4>
                  </div>
                  <div className="d-flex gap-3 mb-3">
                    <span 
                      style={{ 
                        backgroundColor: "#06038F", 
                        color: "white", 
                        padding: "2px 8px", 
                        borderRadius: "12px", 
                        fontSize: "11px", 
                        fontWeight: "600" 
                      }}
                    >
                      {program.level}
                    </span>
                    <span style={{ color: "#6c757d", fontSize: "12px" }}>
                      {program.duration}
                    </span>
                  </div>
                </div>
              </div>
              
              <p 
                style={{ 
                  color: "#6c757d", 
                  fontSize: "14px", 
                  lineHeight: "1.6", 
                  marginBottom: "20px" 
                }}
              >
                {program.description}
              </p>
              
              <div className="mb-3">
                <h6 style={{ color: "#495057", fontWeight: "600", marginBottom: "10px" }}>
                  Program Components:
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  {program.components.map((component, index) => (
                    <span 
                      key={index}
                      style={{ 
                        backgroundColor: "#f8f9fa", 
                        color: "#495057", 
                        padding: "2px 8px", 
                        borderRadius: "10px", 
                        fontSize: "12px",
                        border: "1px solid #e9ecef"
                      }}
                    >
                      {component}
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                className="btn btn-outline-primary btn-sm"
                style={{
                  borderColor: "#06038F",
                  color: "#06038F",
                  borderRadius: "20px",
                  padding: "8px 20px",
                  fontSize: "14px",
                  fontWeight: "500"
                }}
              >
                Join Program
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Success Stories */}
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
            Success Stories
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {successStories.map((story, index) => (
          <div key={index} className="col-lg-4">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ borderRadius: "15px", padding: "25px" }}
            >
              <div className="text-center mb-3">
                <div 
                  style={{ 
                    backgroundColor: "#06038F", 
                    color: "white", 
                    borderRadius: "50%", 
                    width: "60px", 
                    height: "60px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontSize: "24px",
                    margin: "0 auto 15px"
                  }}
                >
                  👤
                </div>
                <h5 
                  style={{ 
                    color: "#212529", 
                    fontWeight: "600", 
                    marginBottom: "5px" 
                  }}
                >
                  {story.name}
                </h5>
                <p style={{ color: "#6c757d", fontSize: "14px", marginBottom: "15px" }}>
                  Age: {story.age} • {story.background}
                </p>
              </div>
              
              <div className="mb-3">
                <h6 style={{ color: "#495057", fontWeight: "600", marginBottom: "8px", fontSize: "14px" }}>
                  Achievement:
                </h6>
                <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", marginBottom: "15px" }}>
                  {story.achievement}
                </p>
              </div>
              
              <div 
                style={{ 
                  backgroundColor: "#f8f9fa", 
                  padding: "15px", 
                  borderRadius: "10px",
                  textAlign: "center"
                }}
              >
                <h6 style={{ color: "#06038F", fontWeight: "600", marginBottom: "5px", fontSize: "14px" }}>
                  Impact:
                </h6>
                <p style={{ color: "#495057", fontSize: "13px", margin: "0", fontStyle: "italic" }}>
                  {story.impact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
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
            Our Impact
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {statistics.map((stat, index) => (
          <div key={index} className="col-lg-3 col-md-6">
            <div 
              className="card h-100 border-0 text-center"
              style={{ 
                backgroundColor: "#f8f9fa", 
                borderRadius: "15px", 
                padding: "30px 20px" 
              }}
            >
              <h3 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px", fontSize: "28px" }}>
                {stat.number}
              </h3>
              <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
                {stat.label}
              </h6>
              <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
                {stat.description}
              </p>
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
              Start Your Learning Journey Today
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                marginBottom: "25px",
                maxWidth: "600px",
                margin: "0 auto 25px"
              }}
            >
              Age is just a number when it comes to learning. Join our adult education programs and unlock new 
              opportunities for personal and professional growth. Take the first step towards a brighter future.
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
                Enroll Today
              </a>
              <a 
                href="/about-us/testimonials" 
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
                Read Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default AdultEducation;
