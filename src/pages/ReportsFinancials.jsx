import React from 'react';
import PageTemplate from '../components/PageTemplate';

const ReportsFinancials = () => {
  const reports = [
    {
      id: 1,
      title: "Annual Report 2023",
      type: "Annual Report",
      date: "March 2024",
      description: "Comprehensive overview of NEIEA's activities, achievements, and impact during the fiscal year 2023.",
      pages: "45 pages",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Financial Statement 2023",
      type: "Financial Report",
      date: "March 2024",
      description: "Detailed financial statements including income, expenditure, and fund utilization for transparency.",
      pages: "28 pages",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Impact Assessment Report",
      type: "Impact Report",
      date: "February 2024",
      description: "Comprehensive evaluation of educational programs and their impact on student learning outcomes.",
      pages: "62 pages",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "12A & 80G Compliance Report",
      type: "Compliance Report",
      date: "January 2024",
      description: "Documentation of compliance with government regulations and tax exemption requirements.",
      pages: "18 pages",
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "Program Effectiveness Study",
      type: "Research Report",
      date: "December 2023",
      description: "Research findings on the effectiveness of NEIEA's blended learning methodology.",
      pages: "38 pages",
      downloadUrl: "#"
    },
    {
      id: 6,
      title: "Quarterly Update Q4 2023",
      type: "Quarterly Report",
      date: "December 2023",
      description: "Latest updates on ongoing programs, new partnerships, and upcoming initiatives.",
      pages: "15 pages",
      downloadUrl: "#"
    }
  ];

  const impactHighlights = [
    {
      metric: "Total Enrollments",
      amount: "10,116",
      description: "Individuals from various age groups, ranging from 8 years to 40+ years",
      icon: "📚"
    },
    {
      metric: "Course Completions",
      amount: "3,845",
      description: "Learners who have successfully completed their courses",
      icon: "🎓"
    },
    {
      metric: "Certifications Issued",
      amount: "1,500",
      description: "Learners certified including individuals from various institutions",
      icon: "📜"
    },
    {
      metric: "Live Online Classes",
      amount: "49",
      description: "Daily classes running from 6:00 AM till 10:00 PM",
      icon: "⏰"
    },
    {
      metric: "Online Courses",
      amount: "13",
      description: "Free courses in English, Math, Sciences, Computer Science and NIOS subjects",
      icon: "💻"
    },
    {
      metric: "Institutional Collaborators",
      amount: "39",
      description: "Institutions partnered to expand reach and engage more learners",
      icon: "🤝"
    }
  ];

  const certifications = [
    {
      name: "Section 8A Registration",
      authority: "Ministry of Corporate Affairs",
      status: "Active",
      validUntil: "Perpetual"
    },
    {
      name: "12A Tax Exemption",
      authority: "Income Tax Department",
      status: "Active",
      validUntil: "March 2027"
    },
    {
      name: "80G Donation Exemption",
      authority: "Income Tax Department",
      status: "Active",
      validUntil: "March 2027"
    },
    {
      name: "NITI Aayog Darpan ID",
      authority: "NITI Aayog",
      status: "Active",
      validUntil: "Annual Renewal"
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "About", link: null },
        { name: "Reports and Financials", link: null }
      ]}
      title="NEIEA Impact Report 2022-24"
      subtitle="New Equitable and Innovative Educational Association"
      description="NEIEA is committed to revolutionizing education through innovative approaches and extensive collaborations. Since April 2022, NEIEA has introduced 13 free online courses and partnered with various institutions to benefit thousands of learners."
      heroImage="/assets/images/Stats_Background.jpg"
    >
      {/* Mission and Vision */}
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
              To provide good quality and innovative education to all segments of society with high consideration given to providing free education to the poor.
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
              🌟 Our Vision
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                fontSize: "16px", 
                lineHeight: "1.6", 
                marginBottom: "0" 
              }}
            >
              To envision a society where all youth and citizens are able to obtain good quality education and use this to transform society ensuring human welfare, sustainability, and progress.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Highlights */}
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
            Our Achievements (2022-24)
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {impactHighlights.map((highlight, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div 
              className="card h-100 border-0 text-center"
              style={{ 
                backgroundColor: "#f8f9fa", 
                borderRadius: "15px", 
                padding: "25px 20px" 
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>
                {highlight.icon}
              </div>
              <h4 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
                {highlight.amount}
              </h4>
              <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
                {highlight.metric}
              </h6>
              <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
                {highlight.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Key Program Areas */}
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
            Key Program Areas
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "25px" }}
          >
            <div className="text-center mb-3">
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>👩‍🎓</div>
              <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
                Girls Education
              </h5>
              <div style={{ backgroundColor: "#06038F", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "18px", fontWeight: "700", marginBottom: "15px" }}>
                80% Girl Students
              </div>
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", textAlign: "center" }}>
              NEIEA recognizes the transformative power of education in the lives of young girls. By providing free courses to every girl child enrolled, we create inclusive and supportive learning environments.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "25px" }}
          >
            <div className="text-center mb-3">
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>👩‍🏫</div>
              <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
                Women Empowerment
              </h5>
              <div style={{ backgroundColor: "#06038F", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "18px", fontWeight: "700", marginBottom: "15px" }}>
                90% Women Educators
              </div>
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", textAlign: "center" }}>
              Our predominantly female teaching team creates a powerful dynamic where girl learners can see and learn from strong female role models on a daily basis.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "25px" }}
          >
            <div className="text-center mb-3">
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>📊</div>
              <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
                Assessment Standards
              </h5>
              <div style={{ backgroundColor: "#06038F", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "18px", fontWeight: "700", marginBottom: "15px" }}>
                85% Attendance Required
              </div>
            </div>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", textAlign: "center" }}>
              To earn certification, learners must maintain minimum 85% attendance, complete all assignments, and participate in module tests ensuring quality outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Special Programs */}
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
            Special Programs & Initiatives
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <div 
            className="card h-100 border-0"
            style={{ backgroundColor: "#f8f9fa", borderRadius: "15px", padding: "25px" }}
          >
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              🏚️ Empowering Slum Children
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px" }}>
              Strategic collaborations with local organizations such as Umeed in Aligarh and MV Foundation (MVF) in Hyderabad have enabled us to reach over <strong>300 children</strong> living in slum areas.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                Umeed, Aligarh
              </span>
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                MV Foundation, Hyderabad
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div 
            className="card h-100 border-0"
            style={{ backgroundColor: "#f8f9fa", borderRadius: "15px", padding: "25px" }}
          >
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              🕌 Integrating Madrasas into Mainstream Education
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px" }}>
              Collaborating with more than <strong>20 Madrasas</strong> across the country to integrate their educational offerings into mainstream system, focusing on English, Math, Sciences, and NIOS secondary syllabus.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                20+ Madrasas
              </span>
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                NIOS Integration
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div 
            className="card h-100 border-0"
            style={{ backgroundColor: "#f8f9fa", borderRadius: "15px", padding: "25px" }}
          >
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              💻 IT Skills Training
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px" }}>
              Providing IT skills training for children aged 12 and above including Basic Computing, Google Applications, Microsoft Office, and Canva - all offered for free.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                Google Workspace
              </span>
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                Microsoft Office
              </span>
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                Canva
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div 
            className="card h-100 border-0"
            style={{ backgroundColor: "#f8f9fa", borderRadius: "15px", padding: "25px" }}
          >
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              🧠 Building Critical Thinking Using Modern Pedagogy
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px" }}>
              NEIEA uses Discourse Oriented Pedagogy (DOP) to nurture critical thinking, unlike rote-memorization. Using trigger activities with visuals, pictures, and videos enhances comprehension.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                DOP Methodology
              </span>
              <span style={{ backgroundColor: "#06038F", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                Interactive Learning
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Available Courses */}
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
            Available Courses
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "25px" }}
          >
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              📚 Foundational & Academic Courses
            </h5>
            <div className="row">
              <div className="col-md-6">
                <ul style={{ color: "#6c757d", fontSize: "13px", paddingLeft: "20px", lineHeight: "1.8" }}>
                  <li>Foundational English</li>
                  <li>Foundational Math (1-5)</li>
                  <li>Level-1 English</li>
                  <li>English Beginner's Level</li>
                  <li>Middle Level Math (6-8)</li>
                  <li>High School Math (9-10)</li>
                  <li>EVS (Environmental Studies)</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul style={{ color: "#6c757d", fontSize: "13px", paddingLeft: "20px", lineHeight: "1.8" }}>
                  <li>NIOS English</li>
                  <li>NIOS Mathematics</li>
                  <li>NIOS Computer Science</li>
                  <li>NIOS Data Entry</li>
                  <li>NIOS Social Science</li>
                  <li>NIOS Home Science</li>
                  <li>Technical Training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "25px" }}
          >
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "15px" }}>
              🌍 SDG 4: Quality Education - Inclusive and Equitable
            </h5>
            <p style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.6", marginBottom: "15px" }}>
              At NEIEA, we are committed to advancing Sustainable Development Goal 4, ensuring inclusive and equitable quality education for all, specifically focusing on marginalized and underserved children.
            </p>
            <div className="mb-3">
              <h6 style={{ color: "#495057", fontWeight: "600", marginBottom: "10px", fontSize: "14px" }}>
                Key Focus Areas:
              </h6>
              <div className="d-flex flex-wrap gap-2">
                <span style={{ backgroundColor: "#28a745", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                  Inclusivity
                </span>
                <span style={{ backgroundColor: "#28a745", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                  Quality Education
                </span>
                <span style={{ backgroundColor: "#28a745", color: "white", padding: "3px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: "500" }}>
                  Equity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {reports.map((report) => (
          <div key={report.id} className="col-lg-6">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ borderRadius: "15px", padding: "25px" }}
            >
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
                  {report.type}
                </span>
                <div className="text-end">
                  <span style={{ color: "#6c757d", fontSize: "12px", display: "block" }}>
                    {report.date}
                  </span>
                  <span style={{ color: "#6c757d", fontSize: "12px" }}>
                    {report.pages}
                  </span>
                </div>
              </div>
              
              <h5 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "15px" 
                }}
              >
                {report.title}
              </h5>
              
              <p 
                style={{ 
                  color: "#6c757d", 
                  fontSize: "14px", 
                  lineHeight: "1.6", 
                  marginBottom: "20px" 
                }}
              >
                {report.description}
              </p>
              
              <div className="d-flex gap-2">
                <button
                  className="btn btn-primary btn-sm"
                  style={{
                    backgroundColor: "#06038F",
                    borderColor: "#06038F",
                    borderRadius: "20px",
                    padding: "8px 16px",
                    fontSize: "14px",
                    fontWeight: "500"
                  }}
                >
                  📄 View Report
                </button>
                <button
                  className="btn btn-outline-primary btn-sm"
                  style={{
                    borderColor: "#06038F",
                    color: "#06038F",
                    borderRadius: "20px",
                    padding: "8px 16px",
                    fontSize: "14px",
                    fontWeight: "500"
                  }}
                >
                  📥 Download PDF
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications & Compliance */}
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
            Certifications & Compliance
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {certifications.map((cert, index) => (
          <div key={index} className="col-lg-6">
            <div 
              className="card h-100 border-0"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "15px", padding: "25px" }}
            >
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h5 
                  style={{ 
                    color: "#212529", 
                    fontWeight: "600", 
                    marginBottom: "0" 
                  }}
                >
                  {cert.name}
                </h5>
                <span 
                  style={{ 
                    backgroundColor: "#28a745", 
                    color: "white", 
                    padding: "2px 8px", 
                    borderRadius: "12px", 
                    fontSize: "11px",
                    fontWeight: "600"
                  }}
                >
                  {cert.status}
                </span>
              </div>
              <p style={{ color: "#6c757d", fontSize: "14px", marginBottom: "8px" }}>
                <strong>Authority:</strong> {cert.authority}
              </p>
              <p style={{ color: "#6c757d", fontSize: "14px", margin: "0" }}>
                <strong>Valid Until:</strong> {cert.validUntil}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* How Can You Support Us */}
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
            How Can You Support Us?
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
            NEIEA is dedicated to providing quality education for FREE to all. Alone we can do little, together we can do so much. Invest in education. Donate generously. Transform lives.
          </p>
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
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>👶</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Sponsor a Child
            </h5>
            <h6 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
              ₹500/month
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              Commit to sponsoring a child's education for a year
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
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>👨‍💼</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Support a Coordinator
            </h5>
            <h6 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
              ₹10,000/month
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              Help maintain educational coordination and support
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
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Sponsor a Mentor Teacher
            </h5>
            <h6 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
              ₹25,000/month
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              Support qualified educators to teach and mentor students
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
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>💻</div>
            <h5 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
              Support IT Classroom
            </h5>
            <h6 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
              ₹1,00,000
            </h6>
            <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
              One-time cost to create IT-enabled learning environment
            </p>
          </div>
        </div>
      </div>

      {/* Bank Details and Contact */}
      <div className="row mb-5">
        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <h5 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "20px" 
              }}
            >
              💳 Bank Details
            </h5>
            <div style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.8" }}>
              <p style={{ marginBottom: "10px" }}>
                <strong>Account Name:</strong> New Equitable Innovative Educational Association
              </p>
              <p style={{ marginBottom: "10px" }}>
                <strong>Bank:</strong> State Bank of India
              </p>
              <p style={{ marginBottom: "10px" }}>
                <strong>Branch:</strong> Kakatiya Nagar, Hyderabad
              </p>
              <p style={{ marginBottom: "10px" }}>
                <strong>A/C NO:</strong> 41003616136
              </p>
              <p style={{ marginBottom: "0" }}>
                <strong>IFSC CODE:</strong> SBIN0020534
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div 
            className="card h-100 border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <h5 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "20px" 
              }}
            >
              📞 Contact Us
            </h5>
            <div style={{ color: "#6c757d", fontSize: "14px", lineHeight: "1.8" }}>
              <p style={{ marginBottom: "10px" }}>
                <strong>Phone:</strong> +91 70907 70784
              </p>
              <p style={{ marginBottom: "10px" }}>
                <strong>Email:</strong> feedback@neiea.org
              </p>
              <p style={{ marginBottom: "10px" }}>
                <strong>Website:</strong> www.neiea.org
              </p>
              <p style={{ marginBottom: "0" }}>
                <strong>Address:</strong> 22-2-472/3, Panjathan colony, Hyderabad, TS, 500024 IN.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Ways to Help */}
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
              Additional Ways to Help
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                marginBottom: "25px",
                maxWidth: "600px",
                margin: "0 auto 25px"
              }}
            >
              Beyond financial support, you can contribute through volunteering, spreading awareness, and encouraging others to join our cause.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <div style={{ backgroundColor: "#06038F", color: "white", padding: "8px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "500" }}>
                🤝 Volunteer Your Time
              </div>
              <div style={{ backgroundColor: "#06038F", color: "white", padding: "8px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "500" }}>
                📢 Spread Awareness
              </div>
              <div style={{ backgroundColor: "#06038F", color: "white", padding: "8px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "500" }}>
                👨‍👩‍👧‍👦 Encourage Family & Friends
              </div>
            </div>
            <div style={{ marginTop: "25px" }}>
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
                Contact Us to Help
              </a>
              <a 
                href="/partners/join" 
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
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ReportsFinancials;
