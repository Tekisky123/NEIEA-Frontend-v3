import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Md Wais Raza",
      role: "Student",
      location: "Bihar",
      image: "/assets/images/Md Wais Raza.png",
      content: "I am thrilled to share my experience with the NEIEA English proficiency course that is completely free of cost! Actually, I have completed my matriculation from English medium school but even then I used to hesitate before speaking English with others I wanted to speak fluent and flawless English...."
    },
    {
      id: 2,
      name: "Misbah Rehman",
      role: "Student",
      location: "India",
      image: "/assets/images/Misbah Rehman.png",
      content: "Today I am talking about my English class. This class is too good. After taking these classes my confidence to speak english has built up. Now , I speak English properly. Now , when I speak English I do not hesitate. In these classes we are not only studying, we also have fun."
    },
    {
      id: 3,
      name: "Malik Khan",
      role: "Student",
      location: "Karnataka",
      image: "/assets/images/Malik Khan.png",
      content: "I took an online course in NEIEA which is regarding spoken English and I was blown away by how much I learned. The instructor was engaging and knowledgeable, and the course material was presented in a clear and concise way ...."
    },
    {
      id: 4,
      name: "Asna Shaikh",
      role: "Student",
      location: "Telangana",
      image: "/assets/images/No image.webp",
      content: "I know how to speak in English but I was hesitant to speak in English in front of others. I was confused, about how to take out this fear. Then I got to know about the NEIEA free English course. I have joined this course. After joining this course, I have seen much improvement in my communication skills...."
    },
    {
      id: 5,
      name: "Shagufta Nemath",
      role: "Student",
      location: "India",
      image: "/assets/images/Shagufta Nemath.jpg",
      content: "I am filled with immense joy while telling you that, despite the increasing cost of education, some philanthropists have come together to initiate an organization that aims to uplift those sections of society who not only lack financial resources but also access to basic amenities......"
    },
    {
      id: 6,
      name: "Shaista Parveen Begum",
      role: "Student",
      location: "India",
      image: "/assets/images/Shaista Parveen Begum.png",
      content: "In March, I embarked on my NEIEA class journey with excitement. The course offered a chance to learn without cost and gain knowledge. The instructors, Sree Kutty Ma'am, Zeba Ma'am, and Danish Ali Sir, were inspiring, especially Sir's English skills and his signature address, 'GUYS....'"
    },
    {
      id: 7,
      name: "Shaik Azhar Shareef",
      role: "Student",
      location: "Hyderabad",
      image: "/assets/images/Shaik Azhar Shareef.png",
      content: "Kick off with greetings I am Shaik Azhar Shareef, currently dwelling in Hyderabad Rajendra Nagar. I am pursuing B.com (computer) final year from Osmania University. Anyway, I have completed Board of Secondary Education in English medium. However, I wasn't speaking manifestly in front of people, relatives, strangers......"
    },
    {
      id: 8,
      name: "Amena",
      role: "Student",
      location: "Telangana, Hyderabad",
      image: "/assets/images/No image.webp",
      content: "I am writing this to express my gratitude to NEIEA. When I saw this course I thought it must be a fake why would anyone provide a 3 months free course but it was real joining this course was my best decision. Best of all I felt no student will be bored by the syllabus prepared by them...."
    },
    {
      id: 9,
      name: "Jaswinder Kaur",
      role: "Student",
      location: "Nagpur, Maharashtra",
      image: "/assets/images/Jaswinder kaur .jpg",
      content: "As a 59-year-old from Nagpur, I'm thrilled to have discovered NEIEA. Thanks to Niloufer Ma'am's excellent teaching and patience, I've been able to overcome my doubts and learn effectively. Online classes have made it easy for me to pursue my education, and I'm so grateful for this opportunity. NEIEA has shown me that age is no barrier to learning, and I can't wait to continue my studies."
    },
    {
      id: 10,
      name: "Mohan",
      role: "Student",
      location: "Hyderabad, Telangana",
      image: "/assets/images/Mohan .jpg",
      content: "I had to leave my education earlier due to personal reasons, but thanks to NEIEA's free online classes, I've been able to continue learning in new ways. The Microsoft Office course for beginners has been a huge help, especially for my business. I can now create advertisements, keep records, and manage my tasks much more efficiently. I'm really impressed with the quality of the classes, and I'm grateful for the opportunity to learn and grow again. NEIEA's support has truly made a difference in my life."
    },
    {
      id: 11,
      name: "PALAK MEHTA",
      role: "Student",
      location: "Patiala, Punjab",
      image: "/assets/images/palak mehta .jpg",
      content: "Hello, my name is Palak from Patiala, Punjab. I want to share my experience with NEIEA, an online platform offering 100% free courses in subjects like English, Maths, and Science. I completed the foundational English course and truly enjoyed the classes. My mother and younger brother were so impressed by the teaching that they joined as well. Now, I'm pursuing the proficiency-level English course, which is also free. The teachers are cooperative, and NEIEA even provides certificates for their courses. I highly recommend NEIEA to everyone—it's a great opportunity for learning!"
    }
  ];

  const featuredVideos = [
    {
      id: 1,
      title: "Student Success Stories Compilation",
      description: "Highlighted moments that capture the essence of our mission and the transformation happening in communities worldwide.",
      image: "/assets/images/video-thumbnail.jpg",
      type: "Featured Video",
      duration: "5:30"
    },
    {
      id: 2,
      title: "NEIEA English Course Impact",
      description: "Real testimonials from students who transformed their English communication skills through our free courses.",
      image: "/assets/images/event1.jpg",
      type: "Student Testimonials",
      duration: "8:45"
    },
    {
      id: 3,
      title: "Community Transformation Through Education",
      description: "Documenting the positive changes in communities where NEIEA has implemented educational programs.",
      image: "/assets/images/event2.jpg",
      type: "Impact Documentary",
      duration: "12:20"
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "About", link: null },
        { name: "Testimonials & Featured Stories", link: null }
      ]}
      title="Testimonials & Featured Stories"
      subtitle="Voices of Change"
      description="Hear from students, teachers, parents, and communities whose lives have been transformed through NEIEA's educational programs."
      heroImage="/assets/images/testimonial1.jpg"
    >
      {/* Testimonials Section */}
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
            What People Say About NEIEA
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-lg-6 col-md-12">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ borderRadius: "15px", padding: "25px" }}
            >
              <div className="d-flex align-items-start mb-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle me-3"
                  style={{ 
                    width: "60px", 
                    height: "60px", 
                    objectFit: "cover",
                    objectPosition: (testimonial.name === "Md Wais Raza" || testimonial.name === "Malik Khan") ? "top" : testimonial.name === "Shaik Azhar Shareef" ? "center top" : "center"
                  }}
                />
                <div>
                  <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "5px" }}>
                    {testimonial.name}
                  </h5>
                  <p style={{ color: "#6c757d", fontSize: "14px", margin: "0" }}>
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
              <p style={{ color: "#495057", lineHeight: "1.6", fontStyle: "italic", fontSize: "14px" }}>
                "{testimonial.content}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Videos Section */}
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

      <div className="row g-4">
        {featuredVideos.map((video) => (
          <div key={video.id} className="col-lg-4 col-md-6">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                <img
                  src={video.image}
                  alt={video.title}
                  className="card-img-top"
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
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                  }}
                >
                  <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span 
                    style={{ 
                      backgroundColor: "#06038F", 
                      color: "white", 
                      padding: "3px 10px", 
                      borderRadius: "12px", 
                      fontSize: "11px", 
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}
                  >
                    {video.type}
                  </span>
                  <span style={{ color: "#6c757d", fontSize: "12px" }}>
                    {video.duration}
                  </span>
                </div>
                <h5 
                  style={{ 
                    color: "#212529", 
                    fontWeight: "600", 
                    marginBottom: "15px",
                    lineHeight: "1.3"
                  }}
                >
                  {video.title}
                </h5>
                <p 
                  style={{ 
                    color: "#6c757d", 
                    lineHeight: "1.6", 
                    fontSize: "14px",
                    marginBottom: "15px"
                  }}
                >
                  {video.description}
                </p>
                <button
                  className="btn btn-outline-primary btn-sm"
                  style={{
                    borderColor: "#06038F",
                    color: "#06038F",
                    borderRadius: "20px",
                    padding: "6px 16px",
                    fontSize: "12px",
                    fontWeight: "500"
                  }}
                >
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <div 
            style={{ 
              backgroundColor: "#f8f9fa", 
              padding: "40px", 
              borderRadius: "15px" 
            }}
          >
            <h4 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "15px" 
              }}
            >
              Share Your Story
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                marginBottom: "25px",
                maxWidth: "600px",
                margin: "0 auto 25px"
              }}
            >
              Have you been impacted by NEIEA's programs? We'd love to hear your story and share it with our community.
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
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Testimonials;
