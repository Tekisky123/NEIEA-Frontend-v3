import React from 'react';
import PageTemplate from '../components/PageTemplate';

const DiscourseOrientedPedagogy = () => {
  const principles = [
    {
      id: 1,
      title: "Student-Centered Dialogue",
      description: "Encouraging students to actively participate in classroom discussions and express their thoughts and ideas freely.",
      icon: "💬"
    },
    {
      id: 2,
      title: "Critical Thinking Development",
      description: "Fostering analytical skills through structured debates, questioning techniques, and problem-solving activities.",
      icon: "🧠"
    },
    {
      id: 3,
      title: "Collaborative Learning",
      description: "Promoting group discussions, peer-to-peer learning, and collective knowledge construction.",
      icon: "🤝"
    },
    {
      id: 4,
      title: "Reflective Practice",
      description: "Encouraging students to reflect on their learning process and connect new knowledge with prior experiences.",
      icon: "🪞"
    }
  ];

  const strategies = [
    "Socratic Questioning",
    "Think-Pair-Share Activities",
    "Structured Academic Discussions",
    "Problem-Based Learning",
    "Peer Review Sessions",
    "Reflective Journaling"
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "About", link: null },
        { name: "Our Working Model", link: null },
        { name: "Blended Learning Model", link: null },
        { name: "Discourse Oriented Pedagogy", link: null }
      ]}
      title="Introduction To Discourse Oriented Pedagogy (DOP)"
      subtitle="Facilitating Discourse Construction In Second Language"
      description="In the ever-evolving landscape of education, NEIEA has taken a progressive step by incorporating discourse-oriented pedagogy into the syllabus of secondary examinations offered by NIOS."
      heroImage="/assets/images/resized_classroom_image.png"
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
            Discourse-oriented pedagogy emphasizes interactive and collaborative learning through meaningful discussions, debates, and exchanges of ideas. Across subjects like English, mathematics, social science, and science, NEIEA encourages teachers to design activities that foster critical thinking, problem-solving, and effective communication among students.
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
            To achieve this, trigger activities with visuals are used to stimulate learners' thinking process, comprehension is enhanced through pictures and videos, and brainstorming sessions promote collaborative learning. This approach creates an interactive environment where students actively engage with peers, instructors, and participate in discussions.
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
            The integration of discourse-oriented pedagogy has numerous benefits on students' learning outcomes. It enhances their communication skills, enabling them to express ideas coherently and effectively. The collaborative learning environment nurtures teamwork, empathy, and respect for diverse viewpoints. Moreover, students develop critical thinking abilities, analyzing information, questioning assumptions, and forming well-reasoned opinions. Ultimately, this approach empowers students to think independently, make informed decisions, and become active contributors to society.
          </p>
        </div>
      </div>

      {/* Dr. K.N. Anandan's Quote */}
      <div className="row mb-5">
        <div className="col-12">
          <div 
            className="card border-0 shadow-sm"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px", 
              padding: "40px"
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-3 text-center mb-4 mb-lg-0">
                <img
                  src="/assets/images/Leader2.jpeg"
                  alt="Dr.K.N, Anandan"
                  className="rounded-circle shadow-lg"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <h5 
                  style={{ 
                    color: "#212529", 
                    fontWeight: "600", 
                    marginTop: "15px",
                    marginBottom: "5px"
                  }}
                >
                  Dr.K.N, Anandan
                </h5>
                <p style={{ color: "#6c757d", fontSize: "14px", margin: "0" }}>
                  Co-Founder & Guru
                </p>
              </div>
              <div className="col-lg-9">
                <blockquote 
                  style={{ 
                    fontSize: "18px", 
                    lineHeight: "1.7", 
                    color: "#495057",
                    fontStyle: "italic",
                    marginBottom: "20px",
                    borderLeft: "4px solid #06038F",
                    paddingLeft: "20px"
                  }}
                >
                  "I feel sad and even annoyed when I hear teachers and parents complaining about the poor performance standards of students in English. 'This is unfair,' I would say to myself. 'Have we ever asked those kids to communicate their ideas? 'No. All what we have done is teach them bits and fragments of English in terms of discrete sounds, words and sentences"."
                </blockquote>
                <p 
                  style={{ 
                    color: "#6c757d", 
                    lineHeight: "1.6", 
                    margin: "0",
                    fontSize: "16px"
                  }}
                >
                  Inspired from his approach, we encourage students to use English in real life situations by engaging them in conversations and guiding them express their ideas in writing, our motive being able to move beyond rote memorization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
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
            Case Studies
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {/* TMRIES PROJECT */}
        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div className="mb-3">
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
                HYDERABAD PROJECT
              </span>
            </div>
            <h4 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "15px" 
              }}
            >
              TMRIES PROJECT IN HYDERABAD
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                lineHeight: "1.6", 
                margin: "0",
                fontSize: "14px",
                textAlign: "justify"
              }}
            >
              Operating various residential schools and colleges in Hyderabad, TMRIES offers a conducive environment for students' academic and overall development, especially those from economically disadvantaged backgrounds. TMRIES prepares students for higher education and future careers. Supported and funded by the Telangana state government, TMRIES focuses on catering to students from diverse minority communities and aims to bridge educational disparities while promoting social inclusion.
            </p>
          </div>
        </div>

        {/* PROJECT SHAHEEN */}
        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div className="mb-3">
              <span 
                style={{ 
                  backgroundColor: "#28a745", 
                  color: "white", 
                  padding: "4px 12px", 
                  borderRadius: "15px", 
                  fontSize: "12px", 
                  fontWeight: "600" 
                }}
              >
                KARNATAKA PROJECT
              </span>
            </div>
            <h4 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "15px" 
              }}
            >
              PROJECT SHAHEEN
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                lineHeight: "1.6", 
                margin: "0",
                fontSize: "14px",
                textAlign: "justify"
              }}
            >
              Shaheen Group of Institutions, founded by Abdul Qadeer in Bidar, Karnataka, is a renowned minority educational conglomerate with schools, PU colleges, and graduation colleges spread across 13 states in India. The project focuses on academic excellence but also offers coaching for competitive exams like NEET, JEE Mains, JEE Advanced, UPSC, and more. The project has achieved impressive success where students have been gaining admissions to esteemed medical colleges, including AIIMS Delhi.
            </p>
          </div>
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
            style={{ borderRadius: "15px", overflow: "hidden" }}
          >
            <div className="row g-0">
              <div className="col-md-6">
                <div style={{ height: "300px", overflow: "hidden", position: "relative" }}>
                  <img
                    src="/assets/images/video-thumbnail.jpg"
                    alt="NEIEA's Way of Learning"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "rgba(6, 3, 143, 0.9)",
                      borderRadius: "50%",
                      width: "80px",
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                  >
                    <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body p-4 h-100 d-flex flex-column justify-content-center">
                  <div className="mb-3">
                    <span 
                      style={{ 
                        backgroundColor: "#fd7e14", 
                        color: "white", 
                        padding: "4px 12px", 
                        borderRadius: "12px", 
                        fontSize: "12px", 
                        fontWeight: "600",
                        textTransform: "uppercase"
                      }}
                    >
                      Featured Video
                    </span>
                  </div>
                  <h4 
                    style={{ 
                      color: "#212529", 
                      fontWeight: "600", 
                      marginBottom: "15px",
                      fontSize: "24px"
                    }}
                  >
                    NEIEA's Way of Learning: Discourse-Oriented Pedagogy in Action
                  </h4>
                  <p 
                    style={{ 
                      color: "#6c757d", 
                      lineHeight: "1.6", 
                      fontSize: "16px",
                      marginBottom: "20px"
                    }}
                  >
                    Watch how our innovative Discourse-Oriented Pedagogy transforms traditional classroom learning into dynamic, interactive experiences that empower students to think critically and communicate effectively.
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "#06038F",
                      borderColor: "#06038F",
                      padding: "10px 25px",
                      fontSize: "14px",
                      fontWeight: "600",
                      borderRadius: "20px",
                      alignSelf: "flex-start"
                    }}
                  >
                    Watch Full Video
                  </button>
                </div>
              </div>
            </div>
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
              Implement Discourse-Oriented Pedagogy
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                marginBottom: "25px",
                maxWidth: "600px",
                margin: "0 auto 25px"
              }}
            >
              Learn how to integrate discourse-oriented teaching methods into your educational programs and transform your classroom dynamics.
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
              Learn More
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default DiscourseOrientedPedagogy;
