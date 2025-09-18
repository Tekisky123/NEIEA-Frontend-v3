import React from 'react';
import PageTemplate from '../components/PageTemplate';

const GlobalEducation = () => {
  const climateEducationContent = [
    {
      id: 1,
      title: "Climate Education from Elementary Level",
      description: "The issue of Climate Control needs to begin from Elementary school. Education should serve to internalize Climate Control in all students. The segment that is most affected adversely are the young. A whole generation of youth are going to face the terrible consequences of bad climate.",
      keyPoints: ["Elementary school integration", "Youth awareness", "Future generation focus", "Internalization of climate consciousness"],
      icon: "🌱"
    },
    {
      id: 2,
      title: "Understanding Climate Forces",
      description: "Understanding the forces that purposefully degrade Climate for their vested interests is important. Making youth and students aware of this and structuring Education to produce globally minded, well-informed citizenry equipped with the knowledge and critical thinking skills to address the root causes of environmental degradation is needed.",
      keyPoints: ["Critical thinking skills", "Root cause analysis", "Global awareness", "Environmental justice"],
      icon: "🔍"
    },
    {
      id: 3,
      title: "NEIEA's Climate Mission",
      description: "NEIEA's mission is to provide good quality, innovative education to all, with a special focus on marginalized communities. This inclusive approach is vital for climate control. Environmental burdens often disproportionately affect the poor and marginalized, making their education and empowerment a matter of social and climate justice.",
      keyPoints: ["Inclusive education", "Social justice", "Marginalized communities", "Environmental equity"],
      icon: "⚖️"
    }
  ];


  const sdgImpact = [
    {
      metric: "17,500+",
      label: "Learners Enrolled",
      description: "Students reached across India through quality education programs",
      icon: "📚"
    },
    {
      metric: "58%",
      label: "Girls Participation",
      description: "Strong commitment to gender equity in education",
      icon: "👩‍🎓"
    },
    {
      metric: "17",
      label: "Diverse Courses",
      description: "Free high-quality online courses in English, math, science, IT skills, and NIOS subjects",
      icon: "💻"
    },
    {
      metric: "100%",
      label: "Free Access",
      description: "All educational offerings are low-cost/free, removing financial barriers",
      icon: "🆓"
    }
  ];

  const valuesInEducation = [
    {
      area: "Holistic Learning Approach",
      description: "NEIEA does not restrict education to academic achievement alone; it emphasizes moral, social, and emotional growth. Learners are encouraged to develop empathy, respect, and responsibility alongside literacy and numeracy.",
      initiatives: ["Moral education", "Social development", "Emotional growth", "Character building"]
    },
    {
      area: "Equity and Inclusivity as Core Values",
      description: "By offering low cost/free education to underserved communities and low-budget institutions, NEIEA ensures that education is accessible to all, reflecting the values of justice, equality, and fairness.",
      initiatives: ["Free education programs", "Marginalized community focus", "Equal access", "Social justice"]
    },
    {
      area: "Discourse-Oriented Pedagogy (DOP)",
      description: "Developed by co-founder Dr. K. N. Anandan, this pedagogy nurtures dialogue, collaboration, and critical thinking, promoting respect for diverse voices and perspectives—a core principle of value-based education.",
      initiatives: ["Interactive dialogue", "Collaborative learning", "Critical thinking", "Diverse perspectives"]
    },
    {
      area: "Teacher Empowerment with Values at the Center",
      description: "NEIEA's teacher training programs focus on building not only academic and technological skills but also values like inclusivity, empathy, and reflective practice. Teachers become role models who can transmit these values to students.",
      initiatives: ["Values-based training", "Inclusive practices", "Empathy development", "Role modeling"]
    },
    {
      area: "Community Building & Social Responsibility",
      description: "NEIEA's initiatives—whether in madrasas, schools, or foundations—emphasize social cohesion, respect for cultural diversity, and active citizenship. Learners are guided to see education as a tool for serving society, not just personal growth.",
      initiatives: ["Social cohesion", "Cultural diversity", "Active citizenship", "Community service"]
    },
    {
      area: "Integration of Life Skills & Soft Skills",
      description: "Through English communication, soft skills, and career planning programs, NEIEA equips learners with integrity, confidence, and collaboration skills, helping them lead value-driven personal and professional lives.",
      initiatives: ["Communication skills", "Career planning", "Integrity building", "Professional values"]
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "Our Work", link: null },
        { name: "Global Education", link: null }
      ]}
      title="Education: A potent tool for Climate Control"
      subtitle="Global Education for Sustainable Development"
      description="NEIEA envisions a society where quality education empowers individuals to drive positive changes for human welfare, sustainability, and progress."
      heroImage="/assets/images/global-map.png"
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
            The challenge of climate control is fundamentally an educational one. Climate Control needs to begin from Elementary school to internalize awareness in all students. Making youth aware of climate degradation and structuring Education to produce globally minded, well-informed citizenry equipped with the knowledge and critical thinking skills to address environmental challenges is essential for our planet's future.
          </p>
        </div>
      </div>

      {/* Climate Education Content */}
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
            Education for Climate Action
          </h3>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {climateEducationContent.map((content) => (
          <div key={content.id} className="col-lg-4">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ borderRadius: "15px", padding: "25px" }}
            >
              <div className="text-center mb-3">
                <div 
                  style={{ 
                    fontSize: "50px", 
                    marginBottom: "15px"
                  }}
                >
                  {content.icon}
                </div>
                <h4 
                  style={{ 
                    color: "#212529", 
                    fontWeight: "600", 
                    marginBottom: "15px",
                    fontSize: "20px"
                  }}
                >
                  {content.title}
                </h4>
              </div>
              
              <p 
                style={{ 
                  color: "#6c757d", 
                  fontSize: "14px", 
                  lineHeight: "1.6", 
                  marginBottom: "20px",
                  textAlign: "left"
                }}
              >
                {content.description}
              </p>
              
              <div className="mb-3">
                <h6 style={{ color: "#495057", fontWeight: "600", marginBottom: "10px", fontSize: "14px" }}>
                  Key Focus Areas:
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  {content.keyPoints.map((point, index) => (
                    <span 
                      key={index}
                      style={{ 
                        backgroundColor: "#f8f9fa", 
                        color: "#495057", 
                        padding: "3px 8px", 
                        borderRadius: "10px", 
                        fontSize: "11px",
                        border: "1px solid #e9ecef",
                        fontWeight: "500"
                      }}
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Climate Education Content */}
      <div className="row mb-5">
        <div className="col-12">
          <div 
            className="card border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <p 
              style={{ 
                fontSize: "16px", 
                lineHeight: "1.8", 
                color: "#495057",
                marginBottom: "20px"
              }}
            >
              Climate control demands more than just rote memorization of facts about greenhouse gases or melting ice caps. It requires a deep understanding of interconnected systems—how human activities impact ecosystems, how economic decisions affect our carbon footprint, and how personal choices can lead to collective action. NEIEA's work moves beyond passive learning, encouraging students to actively engage with the issue, ask difficult questions, and propose innovative solutions.
            </p>
            
            <p 
              style={{ 
                fontSize: "16px", 
                lineHeight: "1.8", 
                color: "#495057",
                marginBottom: "20px"
              }}
            >
              The very act of providing accessible education for all contributes to a more sustainable future. Education reduces poverty, promotes better health outcomes, and empowers communities to make more informed decisions about resource management. By leveraging technology and building a resilient educational system, NEIEA ensures that the pursuit of knowledge is not disrupted by external factors, mirroring the sustainability we seek for our planet.
            </p>
            
            <p 
              style={{ 
                fontSize: "16px", 
                lineHeight: "1.8", 
                color: "#495057",
                marginBottom: "0",
                fontWeight: "600"
              }}
            >
              Ultimately, NEIEA's work in education is a powerful form of climate control. It's an investment in people—the catalysts for change. By equipping every individual with the knowledge and skills to understand and address environmental challenges, NEIEA is helping to create a society where human progress and ecological balance are not in conflict but are mutually reinforcing.
            </p>
          </div>
        </div>
      </div>

      {/* SDG 4 Impact */}
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
            Sustainable Development Goals: NEIEA's Commitment to Quality Education for All
          </h3>
          <p 
            style={{ 
              fontSize: "16px", 
              color: "#6c757d", 
              textAlign: "center",
              marginBottom: "40px",
              maxWidth: "800px",
              margin: "0 auto 40px"
            }}
          >
            The United Nations Sustainable Development Goals (SDGs) provide a global blueprint to create a more equitable, sustainable, and prosperous world by 2030. Among the 17 goals, SDG 4 — to "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all" — resonates deeply with NEIEA's mission and work.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {sdgImpact.map((impact, index) => (
          <div key={index} className="col-lg-3 col-md-6">
            <div 
              className="card h-100 border-0 text-center"
              style={{ 
                backgroundColor: "#f8f9fa", 
                borderRadius: "15px", 
                padding: "30px 20px" 
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>
                {impact.icon}
              </div>
              <h3 style={{ color: "#06038F", fontWeight: "700", marginBottom: "10px" }}>
                {impact.metric}
              </h3>
              <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "10px" }}>
                {impact.label}
              </h6>
              <p style={{ color: "#6c757d", fontSize: "13px", lineHeight: "1.5", margin: "0" }}>
                {impact.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* NEIEA's SDG 4 Focus */}
      <div className="row mb-5">
        <div className="col-12">
          <div 
            className="card border-0 shadow-sm"
            style={{ borderRadius: "15px", padding: "30px" }}
          >
            <h4 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "20px" 
              }}
            >
              NEIEA's Focus on SDG 4
            </h4>
            <p 
              style={{ 
                fontSize: "16px", 
                lineHeight: "1.8", 
                color: "#495057",
                marginBottom: "20px"
              }}
            >
              NEIEA wholeheartedly aligns with SDG 4 by delivering inclusive, quality education, especially to those typically left behind in mainstream education systems—girls, slum-dwelling children, dropouts, Madrasa students, and learners in underserved public and private schools. NEIEA's key contributions include:
            </p>
            
            <ul style={{ color: "#495057", paddingLeft: "20px", lineHeight: "1.8" }}>
              <li style={{ marginBottom: "10px" }}>Free, high-quality online education offered through 17 diverse courses in English, mathematics, science, IT skills, financial literacy and NIOS subjects.</li>
              <li style={{ marginBottom: "10px" }}>A robust reach across India: over 17,500 learners enrolled, with 58% girls, showing NEIEA's strong commitment to gender equity in education</li>
              <li style={{ marginBottom: "0" }}>Empowering marginalized groups via collaborations with organizations like Umeed (Aligarh) and MV Foundation (Hyderabad), ensuring education reaches children in slums and homeless/destitute girls.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Equity and Transparency */}
      <div className="row mb-5">
        <div className="col-lg-6">
          <div 
            className="card border-0 shadow-sm h-100"
            style={{ borderRadius: "15px", padding: "25px" }}
          >
            <h5 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "15px" 
              }}
            >
              Equity, Transparency, and Sustainable Impact
            </h5>
            <p 
              style={{ 
                color: "#6c757d", 
                fontSize: "14px", 
                lineHeight: "1.6", 
                marginBottom: "15px" 
              }}
            >
              NEIEA ensures equity by making all its educational offerings low-cost/free—removing financial barriers that prevent marginalized children from accessing learning.
            </p>
            <p 
              style={{ 
                color: "#6c757d", 
                fontSize: "14px", 
                lineHeight: "1.6", 
                marginBottom: "0" 
              }}
            >
              NEIEA practices transparency and accountability, earning certifications like 80G and operating under public accountability frameworks—including the Darpan ID—reinforcing trust and engagement within communities.
            </p>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div 
            className="card border-0 shadow-sm h-100"
            style={{ borderRadius: "15px", padding: "25px" }}
          >
            <h5 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "15px" 
              }}
            >
              Why It Matters
            </h5>
            <p 
              style={{ 
                color: "#6c757d", 
                fontSize: "14px", 
                lineHeight: "1.6", 
                marginBottom: "0" 
              }}
            >
              By operationalizing SDG 4 with purpose and precision, NEIEA is doing more than imparting education, it's creating pathways out of poverty, enabling lifelong growth, and empowering future generations. When marginalized learners get access to high-quality, meaningful education, entire communities transform.
            </p>
          </div>
        </div>
      </div>

      {/* Integrating Values in Education */}
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
            Integrating Values in Education
          </h3>
          <p 
            style={{ 
              fontSize: "16px", 
              color: "#6c757d", 
              textAlign: "center",
              marginBottom: "40px",
              maxWidth: "800px",
              margin: "0 auto 40px",
              fontWeight: "600"
            }}
          >
            ✨ NEIEA is deeply connected with value-based education because it places human values—equity, inclusivity, empathy, respect, and responsibility—at the heart of its mission. It blends modern skills with timeless values, ensuring that learners become not only competent but also compassionate citizens.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {valuesInEducation.map((value, index) => (
          <div key={index} className="col-lg-6">
            <div 
              className="card h-100 border-0"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "15px", padding: "25px" }}
            >
              <h5 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "15px" 
                }}
              >
                {value.area}
              </h5>
              <p 
                style={{ 
                  color: "#6c757d", 
                  lineHeight: "1.6", 
                  marginBottom: "15px",
                  fontSize: "14px"
                }}
              >
                {value.description}
              </p>
              <div>
                <h6 style={{ color: "#495057", fontWeight: "600", marginBottom: "10px", fontSize: "14px" }}>
                  Key Elements:
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  {value.initiatives.map((initiative, initIndex) => (
                    <span 
                      key={initIndex}
                      style={{ 
                        backgroundColor: "#06038F", 
                        color: "white", 
                        padding: "3px 8px", 
                        borderRadius: "10px", 
                        fontSize: "11px",
                        fontWeight: "500"
                      }}
                    >
                      {initiative}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
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
              Join Our Mission for Global Education and Climate Action
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
              Our journey towards a sustainable future begins not with a treaty or a new technology, but with the universal and equitable right to education. Be part of creating a society where human progress and ecological balance are mutually reinforcing.
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
                Join Our Mission
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

export default GlobalEducation;
