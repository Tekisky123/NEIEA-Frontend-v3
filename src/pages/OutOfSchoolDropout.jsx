import React from 'react';
import PageTemplate from '../components/PageTemplate';

const OutOfSchoolDropout = () => {

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "Our Work", link: null },
        { name: "Education", link: null },
        { name: "Out of School / School Dropout", link: null }
      ]}
      title="Education for Dropout Children through NIOS"
      subtitle="Empowering Learners Beyond School Walls"
      description="To provide a second chance at formal education for dropout children through the NIOS Open Basic Education (OBE) and Secondary Education programs, ensuring they are re-integrated into learning and equipped with academic and vocational skills."
      heroImage="/assets/images/our-mission.png"
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
            Through NIOS Open Basic Education (OBE) and Secondary Education programs, we provide structured pathways for dropout children to re-enter formal education, ensuring they receive both academic knowledge and practical skills for future success.
          </p>
        </div>
      </div>

      {/* NIOS Open Basic Education Programme */}
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
            NIOS Open Basic Education (OBE) Programme
          </h3>
          <p 
            style={{ 
              fontSize: "16px", 
              color: "#6c757d", 
              textAlign: "center",
              marginBottom: "40px",
              maxWidth: "700px",
              margin: "0 auto 40px"
            }}
          >
            Bridging Educational Gaps for Out-of-School Learners. The OBE Programme is implemented across three levels, designed to match the mainstream school grades and suit the learning pace of underprivileged and out-of-school children.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>🔹</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Level A
            </h5>
            <div style={{ backgroundColor: "#06038F", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "15px" }}>
              Equivalent to Grade 3
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px", fontWeight: "600" }}>
              Subjects Offered:
            </p>
            <ul style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", textAlign: "left", paddingLeft: "20px" }}>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Data Entry</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>🔹</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Level B
            </h5>
            <div style={{ backgroundColor: "#06038F", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "15px" }}>
              Equivalent to Grade 5
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px", fontWeight: "600" }}>
              Subjects Offered:
            </p>
            <ul style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", textAlign: "left", paddingLeft: "20px" }}>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Data Entry</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm text-center"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>🔹</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              Level C
            </h5>
            <div style={{ backgroundColor: "#06038F", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", marginBottom: "15px" }}>
              Equivalent to Grade 8
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px", fontWeight: "600" }}>
              Subjects Offered:
            </p>
            <ul style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.6", textAlign: "left", paddingLeft: "20px" }}>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Data Entry</li>
            </ul>
          </div>
        </div>
      </div>

      {/* NIOS Secondary Education Programme */}
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
            NIOS Secondary Education Programme
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
            A Second Opportunity for Academic Success. For learners aiming to complete their 10th Grade (Secondary Level), NEIEA offers the following subjects under the NIOS curriculum.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-8 mx-auto">
          <div 
            className="card border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <div className="text-center mb-4">
              <div style={{ fontSize: "60px", marginBottom: "20px" }}>🎓</div>
              <h4 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
                10th Grade (Secondary Level) Subjects
              </h4>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul style={{ color: "#6c757d", fontSize: "16px", paddingLeft: "20px", lineHeight: "2.0" }}>
                  <li><strong>English</strong></li>
                  <li><strong>Mathematics</strong></li>
                  <li><strong>Home Science</strong></li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul style={{ color: "#6c757d", fontSize: "16px", paddingLeft: "20px", lineHeight: "2.0" }}>
                  <li><strong>Social Science</strong></li>
                  <li><strong>Data Entry</strong> (Skill-Based Subject)</li>
                </ul>
              </div>
            </div>
            <div 
              style={{ 
                backgroundColor: "#f8f9fa", 
                padding: "15px", 
                borderRadius: "10px",
                marginTop: "20px",
                textAlign: "center"
              }}
            >
              <p style={{ color: "#495057", fontSize: "14px", margin: "0", fontStyle: "italic" }}>
                Through this structured approach, we ensure not only academic development but also skill enhancement to promote employability and self-reliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact */}
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
            Impact
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
            Transforming Lives through Education. In the last academic year, NEIEA is proud to report the following outcomes:
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 text-center"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px", 
              padding: "25px 20px" 
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>🎓</div>
            <h4 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
              25
            </h4>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              NIOS Secondary (10th Grade)
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              Learners successfully appeared for NIOS Secondary examinations in 2024-2025 through NEIEA's academic support
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 text-center"
            style={{ 
              backgroundColor: "#f8f9fa", 
              borderRadius: "15px", 
              padding: "25px 20px" 
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>📚</div>
            <h4 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
              33
            </h4>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              NIOS Level-C (Grade 8)
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              Learners from Karnataka appeared for NIOS Level-C examination in 2024-2025 under the NEIEA program
            </p>
          </div>
        </div>

        <div className="col-lg-4">
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
              25
            </h4>
            <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Current Learners
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              Learners appearing this year from Karnataka TUMKUR and HOSKOTE MADRASA
            </p>
          </div>
        </div>
      </div>

      {/* Featured Videos */}
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
            Featured Videos
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
            Highlighted moments that capture the essence of our mission and the transformation happening in communities worldwide.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <div 
            className="card border-0 shadow-sm"
            style={{ borderRadius: "15px", overflow: "hidden" }}
          >
            <div 
              style={{ 
                position: "relative", 
                height: "200px", 
                backgroundImage: "url('/assets/images/resized_classroom_image.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div 
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  backgroundColor: "rgba(0, 0, 0, 0.4)"
                }}
              ></div>
              <button 
                style={{
                  position: "relative",
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#06038F",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
                }}
              >
                ▶️
              </button>
              <div 
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  padding: "3px 6px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  fontWeight: "600"
                }}
              >
                02:39
              </div>
            </div>
            <div className="card-body p-3">
              <h6 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "8px",
                  fontSize: "14px"
                }}
              >
                FREE | Crack the NIOS 10th Class Exams with NEIEA's Expert Preparatory Courses
              </h6>
              <p 
                style={{ 
                  color: "#6c757d", 
                  fontSize: "12px", 
                  lineHeight: "1.5", 
                  marginBottom: "10px" 
                }}
              >
                Comprehensive FREE NIOS 10th class exam preparatory courses designed to help students excel in their exams.
              </p>
              <button 
                className="btn btn-outline-primary btn-sm"
                style={{
                  borderColor: "#06038F",
                  color: "#06038F",
                  borderRadius: "15px",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: "500"
                }}
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div 
            className="card border-0 shadow-sm"
            style={{ borderRadius: "15px", overflow: "hidden" }}
          >
            <div 
              style={{ 
                position: "relative", 
                height: "200px", 
                backgroundImage: "url('/assets/images/resized_classroom_image2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div 
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  backgroundColor: "rgba(0, 0, 0, 0.4)"
                }}
              ></div>
              <button 
                style={{
                  position: "relative",
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#06038F",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
                }}
              >
                ▶️
              </button>
              <div 
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  padding: "3px 6px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  fontWeight: "600"
                }}
              >
                02:21
              </div>
            </div>
            <div className="card-body p-3">
              <h6 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "8px",
                  fontSize: "14px"
                }}
              >
                NEIEA - Education For All
              </h6>
              <p 
                style={{ 
                  color: "#6c757d", 
                  fontSize: "12px", 
                  lineHeight: "1.5", 
                  marginBottom: "10px" 
                }}
              >
                NEIEA employs cutting-edge technological tools and best pedagogy to expand education to new frontiers.
              </p>
              <button 
                className="btn btn-outline-primary btn-sm"
                style={{
                  borderColor: "#06038F",
                  color: "#06038F",
                  borderRadius: "15px",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: "500"
                }}
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div 
            className="card border-0 shadow-sm"
            style={{ borderRadius: "15px", overflow: "hidden" }}
          >
            <div 
              style={{ 
                position: "relative", 
                height: "200px", 
                backgroundImage: "url('/assets/images/vision2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div 
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  backgroundColor: "rgba(0, 0, 0, 0.4)"
                }}
              ></div>
              <button 
                style={{
                  position: "relative",
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#06038F",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
                }}
              >
                ▶️
              </button>
              <div 
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  padding: "3px 6px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  fontWeight: "600"
                }}
              >
                00:40
              </div>
            </div>
            <div className="card-body p-3">
              <h6 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "8px",
                  fontSize: "14px"
                }}
              >
                NEIEA Class Highlights | Empowering Education for All
              </h6>
              <p 
                style={{ 
                  color: "#6c757d", 
                  fontSize: "12px", 
                  lineHeight: "1.5", 
                  marginBottom: "10px" 
                }}
              >
                Real classroom moments — from slums to madarsas, every student is empowered with knowledge, guidance, and opportunity.
              </p>
              <button 
                className="btn btn-outline-primary btn-sm"
                style={{
                  borderColor: "#06038F",
                  color: "#06038F",
                  borderRadius: "15px",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: "500"
                }}
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div 
            className="card border-0 shadow-sm"
            style={{ borderRadius: "15px", overflow: "hidden" }}
          >
            <div 
              style={{ 
                position: "relative", 
                height: "200px", 
                backgroundImage: "url('/assets/images/homegroup.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div 
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  backgroundColor: "rgba(0, 0, 0, 0.4)"
                }}
              ></div>
              <button 
                style={{
                  position: "relative",
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#06038F",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
                }}
              >
                ▶️
              </button>
              <div 
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  padding: "3px 6px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  fontWeight: "600"
                }}
              >
                01:19
              </div>
            </div>
            <div className="card-body p-3">
              <h6 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "8px",
                  fontSize: "14px"
                }}
              >
                NEIEA Transforming Lives Through Education
              </h6>
              <p 
                style={{ 
                  color: "#6c757d", 
                  fontSize: "12px", 
                  lineHeight: "1.5", 
                  marginBottom: "10px" 
                }}
              >
                Young girls confidently reading and speaking in English through NEIEA's free online classes, transforming marginalized communities.
              </p>
              <button 
                className="btn btn-outline-primary btn-sm"
                style={{
                  borderColor: "#06038F",
                  color: "#06038F",
                  borderRadius: "15px",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: "500"
                }}
              >
                Watch Video
              </button>
            </div>
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
              Through NIOS programs, we provide <strong>structured pathways for dropout children</strong> to re-enter formal education, ensuring they receive both academic knowledge and practical skills for employability and self-reliance.
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
              ✨ Join Our NIOS Education Mission
            </h4>
            <p style={{ color: "#6c757d", marginBottom: "25px", maxWidth: "600px", margin: "0 auto 25px", lineHeight: "1.6" }}>
              Support our NIOS programs to provide second chances for dropout children. Help us transform lives through structured, recognized education pathways.
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
                💝 Support Recovery
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default OutOfSchoolDropout;
