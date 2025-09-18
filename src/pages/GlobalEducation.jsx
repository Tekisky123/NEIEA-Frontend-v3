import React from 'react';
import PageTemplate from '../components/PageTemplate';

const GlobalEducation = () => {
  const valuesInEducation = [
    {
      id: 1,
      title: "Holistic Learning Approach",
      description: "NEIEA does not restrict education to academic achievement alone; it emphasizes moral, social, and emotional growth. Learners are encouraged to develop empathy, respect, and responsibility alongside literacy and numeracy.",
      icon: "🌱"
    },
    {
      id: 2,
      title: "Equity and Inclusivity as Core Values",
      description: "By offering low cost/free education to underserved communities and low-budget institutions, NEIEA ensures that education is accessible to all, reflecting the values of justice, equality, and fairness.",
      icon: "⚖️"
    },
    {
      id: 3,
      title: "Discourse-Oriented Pedagogy (DOP)",
      description: "Developed by co-founder Dr. K. N. Anandan, this pedagogy nurtures dialogue, collaboration, and critical thinking, promoting respect for diverse voices and perspectives—a core principle of value-based education.",
      icon: "💬"
    },
    {
      id: 4,
      title: "Teacher Empowerment with Values at the Center",
      description: "NEIEA's teacher training programs focus on building not only academic and technological skills but also values like inclusivity, empathy, and reflective practice. Teachers become role models who can transmit these values to students.",
      icon: "👨‍🏫"
    },
    {
      id: 5,
      title: "Community Building & Social Responsibility",
      description: "NEIEA's initiatives—whether in madrasas, schools, or foundations—emphasize social cohesion, respect for cultural diversity, and active citizenship. Learners are guided to see education as a tool for serving society, not just personal growth.",
      icon: "🤝"
    },
    {
      id: 6,
      title: "Integration of Life Skills & Soft Skills",
      description: "Through English communication, soft skills, and career planning programs, NEIEA equips learners with integrity, confidence, and collaboration skills, helping them lead value-driven personal and professional lives.",
      icon: "💪"
    }
  ];

  const sdgContributions = [
    {
      id: 1,
      title: "Free, high-quality online education",
      description: "Offered through 17 diverse courses in English, mathematics, science, IT skills, financial literacy and NIOS subjects.",
      icon: "📚"
    },
    {
      id: 2,
      title: "Robust reach across India",
      description: "Over 17,500 learners enrolled, with 58% girls, showing NEIEA's strong commitment to gender equity in education.",
      icon: "🇮🇳"
    },
    {
      id: 3,
      title: "Empowering marginalized groups",
      description: "Via collaborations with organizations like Umeed (Aligarh) and MV Foundation (Hyderabad), ensuring education reaches children in slums and homeless/destitute girls.",
      icon: "🌟"
    }
  ];

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "Our Works", link: "/our-works" },
        { name: "Global Education" }
      ]}
      title="Global Education"
      subtitle="Education: A Potent Tool for Climate Control"
      description="NEIEA envisions a society where quality education empowers individuals to drive positive changes for human welfare, sustainability, and progress."
    >
      {/* Introduction */}
      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="text-center" style={{ padding: "40px 20px" }}>
            <h2 
              style={{ 
                fontSize: "32px", 
                fontWeight: "700", 
                marginBottom: "25px",
                color: "#212529"
              }}
            >
              Education: A potent tool for Climate Control
            </h2>
            <p 
              style={{ 
                fontSize: "18px", 
                lineHeight: "1.8", 
                marginBottom: "0",
                color: "#6c757d"
              }}
            >
              The New Equitable and Innovative Educational Association (NEIEA) envisions a society where quality education empowers individuals to drive positive changes for human welfare, sustainability, and progress. In an era where climate change poses an urgent threat to our planet, this vision has never been more critical. The challenge of climate control is not merely a scientific or political one; it is fundamentally an educational one.
            </p>
          </div>
        </div>
      </div>

      {/* Climate Education Urgency */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto">
          <div className="text-center" style={{ padding: "30px 20px" }}>
            <h5 
              style={{ 
                color: "#212529", 
                fontWeight: "700", 
                marginBottom: "15px"
              }}
            >
              🚨 The Urgency of Climate Education
            </h5>
            <p 
              style={{ 
                color: "#6c757d", 
                fontSize: "16px", 
                lineHeight: "1.6",
                margin: "0"
              }}
            >
              The issue of Climate Control needs to begin from Elementary school. Education should serve to internalize Climate Control in all students. The segment that is most affected adversely are the young. A whole generation of youth are going to face the terrible consequences of bad climate. Understanding the forces that purposefully degrade Climate for their vested interests is important. Making youth and students aware of this and structuring Education to produce globally minded, well-informed citizenry equipped with the knowledge and critical thinking skills to address the root causes of environmental degradation is needed.
            </p>
          </div>
        </div>
      </div>

      {/* NEIEA's Climate Mission */}
      <div className="row mb-5">
        <div className="col-lg-6 d-flex align-items-center">
          <div style={{ padding: "20px 0" }}>
            <h4 
              style={{ 
                color: "#212529",
                fontWeight: "700", 
                marginBottom: "20px",
                fontSize: "24px"
              }}
            >
              NEIEA's Climate Mission
            </h4>
            <p 
              style={{ 
                color: "#6c757d",
                fontSize: "16px", 
                lineHeight: "1.6",
                margin: "0"
              }}
            >
              NEIEA's mission is to provide good quality, innovative education to all, with a special focus on marginalized communities. This inclusive approach is vital for climate control. Environmental burdens often disproportionately affect the poor and marginalized, making their education and empowerment a matter of social and climate justice. By offering free online courses and employing a modern pedagogy like Discourse Oriented Pedagogy (DOP), NEIEA is fostering a generation of learners who can think critically, analyze complex problems, and collaborate on solutions—skills that are essential for tackling a challenge as multifaceted as climate change.
            </p>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <img 
            src="/assets/images/GlobalEducation/image2.jpg" 
            alt="NEIEA's Climate Mission" 
            style={{ 
              width: "80%", 
              maxHeight: "300px", 
              objectFit: "contain"
            }} 
          />
        </div>
      </div>

      {/* Climate Education Approach */}
      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="text-center" style={{ padding: "30px 20px" }}>
            <h5 
              style={{ 
                color: "#212529", 
                fontWeight: "700", 
                marginBottom: "15px"
              }}
            >
              🧠 Beyond Rote Learning
            </h5>
            <p 
              style={{ 
                color: "#6c757d", 
                fontSize: "16px", 
                lineHeight: "1.6",
                margin: "0"
              }}
            >
              Climate control demands more than just rote memorization of facts about greenhouse gases or melting ice caps. It requires a deep understanding of interconnected systems—how human activities impact ecosystems, how economic decisions affect our carbon footprint, and how personal choices can lead to collective action. NEIEA's work moves beyond passive learning, encouraging students to actively engage with the issue, ask difficult questions, and propose innovative solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Education as Climate Control */}
      <div className="row mb-5">
        <div className="col-lg-6 d-flex align-items-center">
          <div style={{ padding: "20px 0" }}>
            <h4 
              style={{ 
                color: "#212529",
                fontWeight: "700", 
                marginBottom: "20px",
                fontSize: "24px"
              }}
            >
              Education as Powerful Climate Control
            </h4>
            <p 
              style={{ 
                color: "#6c757d",
                fontSize: "16px", 
                lineHeight: "1.6",
                margin: "0"
              }}
            >
              The very act of providing accessible education for all contributes to a more sustainable future. Education reduces poverty, promotes better health outcomes, and empowers communities to make more informed decisions about resource management. By leveraging technology and building a resilient educational system, NEIEA ensures that the pursuit of knowledge is not disrupted by external factors, mirroring the sustainability we seek for our planet.
            </p>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <img 
            src="/assets/images/GlobalEducation/image3.jpg" 
            alt="Education as Climate Control" 
            style={{ 
              width: "80%", 
              maxHeight: "300px", 
              objectFit: "contain"
            }} 
          />
        </div>
      </div>

      {/* Final Climate Statement */}
      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="text-center" style={{ padding: "30px 20px" }}>
            <p 
              style={{ 
                color: "#6c757d",
                fontSize: "18px", 
                lineHeight: "1.8",
                margin: "0",
                fontStyle: "italic"
              }}
            >
              Ultimately, NEIEA's work in education is a powerful form of climate control. It's an investment in people—the catalysts for change. By equipping every individual with the knowledge and skills to understand and address environmental challenges, NEIEA is helping to create a society where human progress and ecological balance are not in conflict but are mutually reinforcing. Our journey towards a sustainable future begins not with a treaty or a new technology, but with the universal and equitable right to education.
            </p>
          </div>
        </div>
      </div>

      {/* Integrating Values in Education */}
      <div className="row mb-5">
        <div className="col-lg-12">
          <div className="text-center mb-4">
            <h3 
              style={{ 
                color: "#212529",
                fontSize: "28px", 
                fontWeight: "700", 
                marginBottom: "20px"
              }}
            >
              Integrating Values in Education
            </h3>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {valuesInEducation.map((value) => (
          <div key={value.id} className="col-lg-6">
            <div 
              className="card border-0"
              style={{ 
                padding: "25px",
                backgroundColor: "white",
                border: "1px solid #e9ecef",
                borderRadius: "8px"
              }}
            >
              <div className="d-flex align-items-start">
                <div 
                  style={{ 
                    fontSize: "40px", 
                    marginRight: "20px"
                  }}
                >
                  {value.icon}
                </div>
                <div>
                  <h5 
                    style={{ 
                      color: "#212529", 
                      fontWeight: "700", 
                      marginBottom: "15px",
                      fontSize: "18px"
                    }}
                  >
                    {value.title}
                  </h5>
                  <p 
                    style={{ 
                      color: "#6c757d", 
                      fontSize: "15px", 
                      lineHeight: "1.6", 
                      margin: "0"
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Values Summary */}
      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="text-center" style={{ padding: "30px 20px" }}>
            <p 
              style={{ 
                color: "#6c757d",
                fontSize: "18px", 
                lineHeight: "1.8",
                margin: "0",
                fontWeight: "600"
              }}
            >
              ✨ In short, NEIEA is deeply connected with value-based education because it places human values—equity, inclusivity, empathy, respect, and responsibility—at the heart of its mission. It blends modern skills with timeless values, ensuring that learners become not only competent but also compassionate citizens.
            </p>
          </div>
        </div>
      </div>

      {/* SDG Section */}
      <div className="row mb-5">
        <div className="col-lg-12">
          <div className="text-center mb-4">
            <h3 
              style={{ 
                color: "#212529",
                fontSize: "28px", 
                fontWeight: "700", 
                marginBottom: "20px"
              }}
            >
              Sustainable Development Goals: NEIEA's Commitment to Quality Education for All
            </h3>
            <p 
              style={{ 
                color: "#6c757d",
                fontSize: "18px", 
                lineHeight: "1.8",
                maxWidth: "800px",
                margin: "0 auto"
              }}
            >
              The United Nations Sustainable Development Goals (SDGs) provide a global blueprint to create a more equitable, sustainable, and prosperous world by 2030. Among the 17 goals, SDG 4 — to "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all" — resonates deeply with NEIEA's mission and work.
            </p>
          </div>
        </div>
      </div>

      {/* Key Contributions */}
      <div className="row mb-5">
        <div className="col-lg-12">
          <div className="text-center mb-4">
            <h4 
              style={{ 
                color: "#212529",
                fontSize: "24px", 
                fontWeight: "700", 
                marginBottom: "30px"
              }}
            >
              NEIEA's Key Contributions
            </h4>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {sdgContributions.map((contribution) => (
          <div key={contribution.id} className="col-lg-4">
            <div 
              className="card border-0 text-center"
              style={{ 
                padding: "30px 20px",
                backgroundColor: "white",
                border: "1px solid #e9ecef",
                borderRadius: "8px"
              }}
            >
              <div 
                style={{ 
                  fontSize: "50px",
                  marginBottom: "20px"
                }}
              >
                {contribution.icon}
              </div>
              <h5 
                style={{ 
                  color: "#212529", 
                  fontWeight: "700", 
                  marginBottom: "15px",
                  fontSize: "18px"
                }}
              >
                {contribution.title}
              </h5>
              <p 
                style={{ 
                  color: "#6c757d", 
                  fontSize: "15px", 
                  lineHeight: "1.6",
                  marginBottom: "0"
                }}
              >
                {contribution.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Equity and Impact Section */}
      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="text-center" style={{ padding: "30px 20px" }}>
            <h4 
              style={{ 
                color: "#212529",
                fontSize: "24px", 
                fontWeight: "700", 
                marginBottom: "20px"
              }}
            >
              Equity, Transparency, and Sustainable Impact
            </h4>
            <p 
              style={{ 
                color: "#6c757d",
                fontSize: "16px", 
                lineHeight: "1.8",
                margin: "0"
              }}
            >
              NEIEA ensures equity by making all its educational offerings low-cost/free—removing financial barriers that prevent marginalized children from accessing learning. NEIEA practices transparency and accountability, earning certifications like 80G and operating under public accountability frameworks—including the Darpan ID—reinforcing trust and engagement within communities.
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <img 
            src="/assets/images/GlobalEducation/image4.jpg" 
            alt="Impact and Equity" 
            style={{ 
              width: "100%", 
              maxHeight: "400px", 
              objectFit: "contain"
            }} 
          />
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <div style={{ padding: "20px 0" }}>
            <h4 
              style={{ 
                color: "#212529",
                fontWeight: "700", 
                marginBottom: "20px",
                fontSize: "24px"
              }}
            >
              Why It Matters
            </h4>
            <p 
              style={{ 
                color: "#6c757d",
                fontSize: "16px", 
                lineHeight: "1.6",
                margin: "0"
              }}
            >
              By operationalizing SDG 4 with purpose and precision, NEIEA is doing more than imparting education, it's creating pathways out of poverty, enabling lifelong growth, and empowering future generations. When marginalized learners get access to high-quality, meaningful education, entire communities transform.
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <img 
            src="/assets/images/GlobalEducation/imagels.jpg" 
            alt="Global Education Impact" 
            style={{ 
              width: "100%", 
              maxHeight: "500px", 
              objectFit: "contain"
            }} 
          />
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div 
            className="card border-0 text-center"
            style={{ 
              padding: "40px 20px",
              backgroundColor: "white",
              border: "1px solid #e9ecef",
              borderRadius: "8px"
            }}
          >
            <h3 
              style={{ 
                fontSize: "28px", 
                fontWeight: "700", 
                marginBottom: "20px",
                color: "#212529"
              }}
            >
              🌍 Join Our Global Education Mission
            </h3>
            <p 
              style={{ 
                fontSize: "18px", 
                marginBottom: "25px",
                color: "#6c757d",
                maxWidth: "700px",
                margin: "0 auto 25px"
              }}
            >
              Be part of creating a society where human progress and ecological balance are mutually reinforcing. Together, we can build a sustainable future through quality education for all.
            </p>
            <p 
              style={{ 
                fontSize: "16px", 
                marginBottom: "30px",
                color: "#6c757d",
                fontWeight: "600"
              }}
            >
              Our journey towards sustainability begins with the universal and equitable right to education.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button 
                className="btn btn-lg"
                style={{
                  backgroundColor: "#212529",
                  borderColor: "#212529",
                  color: "white",
                  padding: "12px 30px",
                  fontWeight: "600",
                  fontSize: "16px",
                  borderRadius: "6px"
                }}
              >
                🌱 Support Climate Education
              </button>
              <button 
                className="btn btn-outline-secondary btn-lg"
                style={{
                  borderColor: "#6c757d",
                  color: "#6c757d",
                  padding: "12px 30px",
                  fontWeight: "600",
                  fontSize: "16px",
                  borderRadius: "6px"
                }}
              >
                📞 Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default GlobalEducation;