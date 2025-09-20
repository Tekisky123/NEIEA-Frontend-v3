import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Bio = () => {
  const { memberName } = useParams();
  const navigate = useNavigate();

  // Team members data (same as Leadership page)
  const teamMembers = [
    // Directors
    {
      name: 'Ms Nasreen Fatima',
      title: 'Director',
      description: 'Secretary and Correspondent of Neo Rosary School. B.Sc, B.Ed, B.M.R.C.Sc., MA in English Literature, and M.Ed',
      image: '/assets/images/leadership/Ms.-Nasreen-Fatima-Director-1.jpg',
      hasImage: true,
      category: 'directors',
      fullBio: 'Ms. Nasreen Fatima serves as the Director of NEIEA and is the Secretary and Correspondent of Neo Rosary School. She holds multiple academic qualifications including B.Sc, B.Ed, B.M.R.C.Sc., MA in English Literature, and M.Ed. With her extensive educational background and administrative experience, she brings valuable leadership to the organization, focusing on educational excellence and institutional development.'
    },
    {
      name: 'Ms Tahseen Sakina',
      title: 'Director',
      description: 'Trained post graduate with over 32 years of experience in reputed schools as Academic Director, Principal, Vice Principal',
      image: '/assets/images/leadership/Ms-Tahseen-Sakina-Director.png',
      hasImage: true,
      category: 'directors',
      fullBio: 'Ms. Tahseen Sakina is a trained post graduate with over 32 years of distinguished experience in reputed educational institutions. She has served in various leadership roles including Academic Director, Principal, and Vice Principal. Her extensive experience in educational administration and academic leadership makes her an invaluable asset to NEIEA\'s mission of providing quality education and skill development programs.'
    },
    {
      name: 'Ms Niloufer Baig',
      title: 'Director',
      description: 'Senior Leader with Master\'s degree and over 12 years of experience overseeing operations across Telangana and Andhra Pradesh',
      image: '/assets/images/leadership/Niloufer Baig_croped.jpg',
      hasImage: true,
      category: 'directors',
      fullBio: 'Ms. Niloufer Baig is a Senior Leader with a Master\'s degree and over 12 years of comprehensive experience in overseeing operations across Telangana and Andhra Pradesh. Her regional expertise and operational management skills have been instrumental in expanding NEIEA\'s reach and impact in these key states. She specializes in program implementation, stakeholder management, and strategic planning for educational initiatives.'
    },

    // Advisors
    {
      name: 'Dr. K. N. Anandan',
      title: 'Co-Founder & Guru',
      description: 'Indian Linguist, ELT specialist and social activist. Developer of Discourse Oriented Pedagogy (DOP)',
      image: '/assets/images/leadership/Dr.K.Anand.png',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Dr. K. N. Anandan is the Co-Founder & Guru of NEIEA, renowned as an Indian Linguist, ELT (English Language Teaching) specialist, and dedicated social activist. He is the visionary developer of Discourse Oriented Pedagogy (DOP), an innovative teaching methodology that has revolutionized language learning approaches. His groundbreaking work in linguistics and pedagogy has significantly influenced educational practices and continues to shape NEIEA\'s teaching methodologies.'
    },
    {
      name: 'Dr. Peshimam Nazeer Ahmed',
      title: 'Joint Secretary OMEIAT',
      description: '45 years Administrative & Teaching Experience, Government Best Teacher Awardee',
      image: '/assets/images/leadership/Dr. Peshimam Nazeer Ahmed.jpg',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Dr. Peshimam Nazeer Ahmed brings 45 years of exceptional administrative and teaching experience to NEIEA. He serves as Joint Secretary of OMEIAT and is a distinguished Government Best Teacher Awardee. His extensive career in education administration and his recognition as an outstanding educator make him a valuable advisor in shaping educational policies and practices within the organization.'
    },
    {
      name: 'Prof. Shantha Sinha',
      title: 'Advisor',
      description: 'India\'s leading child rights activist. Headed National Commission for Protection of Child Rights (2007-2013), Ramon Magsaysay Award recipient',
      image: '/assets/images/leadership/Prof. Shantha Sinha.png',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Prof. Shantha Sinha is India\'s leading child rights activist and a Ramon Magsaysay Award recipient. She headed the National Commission for Protection of Child Rights from 2007-2013 and has dedicated her life to protecting children\'s rights and promoting their welfare. Her expertise in child protection, education rights, and social activism provides invaluable guidance to NEIEA\'s mission of ensuring quality education for all children, especially those from marginalized communities.'
    },
    {
      name: 'Mrs. M. Chaya Ratan',
      title: 'Advisor',
      description: 'IAS (Rtd.) - Retired IAS officer (1977 batch), Master\'s degree in Eco-Social Policy and Planning from London School of Economics',
      image: '/assets/images/leadership/Mrs. M. Chaya Ratan.jpg',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Mrs. M. Chaya Ratan is a retired IAS officer from the 1977 batch who brings decades of administrative excellence and policy expertise to NEIEA. She holds a Master\'s degree in Eco-Social Policy and Planning from the prestigious London School of Economics. Her extensive experience in government administration, policy formulation, and her specialized knowledge in eco-social planning make her an invaluable advisor for strategic planning and policy development.'
    },
    {
      name: 'Vinod Mubayi',
      title: 'Advisor',
      description: 'American Physicist - Member American Association for the Advancement of Science, American Nuclear Society, PhD from Brandeis University',
      image: '/assets/images/leadership/Vinod Mubayi.jpg',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Vinod Mubayi is an accomplished American Physicist with a PhD from Brandeis University. He is a distinguished member of the American Association for the Advancement of Science and the American Nuclear Society. His scientific background and international perspective bring valuable insights to NEIEA\'s technology integration and scientific approach to education. His expertise helps bridge the gap between traditional education and modern scientific methodologies.'
    },
    {
      name: 'Ms AV AMBIKA',
      title: 'Director',
      description: 'Treasurer of Aman Vedika - Activist, school teacher, theatre artist, singer, documentary film maker',
      image: '/assets/images/leadership/Ms AV AMBIKA.jpeg',
      hasImage: true,
      category: 'directors',
      fullBio: 'Ms. AV Ambika serves as Treasurer of Aman Vedika and is a multi-talented individual with diverse expertise. She is an activist, experienced school teacher, theatre artist, singer, and documentary filmmaker. Her multifaceted background in education, arts, and social activism brings a unique perspective to NEIEA\'s leadership team. Her creative approach to education and her commitment to social causes align perfectly with NEIEA\'s mission of holistic development.'
    },
    {
      name: 'Ms Uzma Nahid',
      title: 'Advisor',
      description: 'Founder President of India International Women\'s Alliance (IIWA), renowned social activist empowering women since 1977',
      image: '/assets/images/leadership/Ms Uzma Nahid.jpg',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Ms. Uzma Nahid is the Founder President of India International Women\'s Alliance (IIWA) and has been a renowned social activist dedicated to empowering women since 1977. Her decades-long commitment to women\'s rights and empowerment brings crucial perspective to NEIEA\'s programs, especially those focused on girls\' education and women\'s skill development. Her extensive experience in grassroots activism and women\'s advocacy helps shape inclusive educational policies.'
    },
    {
      name: 'Ms. Rubina Mazhar',
      title: 'CEO, SAFA Society',
      description: 'CEO of SAFA Society with extensive experience in organizational leadership and social development',
      image: '/assets/images/leadership/Rubina Mazhar.jpg',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Ms. Rubina Mazhar serves as the CEO of SAFA Society, bringing extensive experience in organizational leadership and social development. Her expertise in managing social organizations and implementing community development programs provides valuable insights for NEIEA\'s operational strategies and program management. Her leadership experience helps in scaling educational initiatives effectively.'
    },
    {
      name: 'Dr. Noor Muhammad',
      title: '(Retired IAS) to the Advisory Board. Electoral Management Expert',
      description: 'Retired IAS officer and Electoral Management Expert with extensive administrative experience',
      image: '/assets/images/leadership/Dr Noor Muhammad.png',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Dr. Noor Muhammad is a retired IAS officer and Electoral Management Expert who brings extensive administrative and governance experience to NEIEA\'s Advisory Board. His expertise in public administration, electoral processes, and governance structures provides valuable guidance for organizational management and policy implementation. His experience in managing large-scale administrative processes helps in effective program delivery.'
    },
    {
      name: 'Dr. Ashraf Shah',
      title: 'Management Expert',
      description: 'Experienced management professional with expertise in organizational development and strategic planning',
      image: '/assets/images/leadership/Dr Ashraf Shah.jpg',
      hasImage: false,
      category: 'advisors',
      fullBio: 'Dr. Ashraf Shah is a seasoned Management Expert with extensive experience in organizational development and strategic planning. His expertise in management principles, organizational behavior, and strategic implementation provides crucial guidance for NEIEA\'s operational excellence. His knowledge helps in optimizing organizational processes and ensuring effective resource management for maximum educational impact.'
    },
    {
      name: 'Muhammad Husain Zulqarnain',
      title: 'Educationist',
      description: 'Dedicated educationist with deep understanding of educational systems and pedagogical approaches',
      image: '/assets/images/leadership/Muhammed Husain Zulqarnain .png',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Muhammad Husain Zulqarnain is a dedicated educationist with a deep understanding of educational systems and innovative pedagogical approaches. His expertise in educational theory and practice contributes significantly to NEIEA\'s curriculum development and teaching methodologies. His commitment to educational excellence and his understanding of diverse learning needs help in creating inclusive and effective educational programs.'
    },
    {
      name: 'Mahmood Khan',
      title: 'Management Consultant',
      description: 'Professional management consultant with expertise in organizational strategy and business development',
      image: '/assets/images/leadership/Mahmood Khan.jpg',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Mahmood Khan is a professional Management Consultant with extensive expertise in organizational strategy and business development. His consulting experience across various sectors brings valuable insights for NEIEA\'s strategic planning and organizational growth. His analytical approach and strategic thinking help in developing sustainable models for educational program expansion and impact measurement.'
    },
    {
      name: 'Basir Mchawi',
      title: 'Director, NEI',
      description: 'Mr. Basir Mchawi is a lifelong activist, educator, and communicator who has dedicated over fifty years to African liberation, cultural celebration, and community empowerment.',
      image: '/assets/images/leadership/Basir Mchawi Director Of NEIEA.png',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Mr. Basir Mchawi is a lifelong activist, educator, and communicator who has dedicated over fifty years to African liberation, cultural celebration, and community empowerment. As Director of NEI, he brings invaluable international perspective and cross-cultural understanding to NEIEA\'s global initiatives. His extensive experience in community empowerment and cultural advocacy helps in developing culturally sensitive and inclusive educational programs that respect and celebrate diversity.'
    },
    {
      name: 'Shahzad Nabi',
      title: 'Director, NEI',
      description: 'Mr. Shahzad Nabi is a visionary senior executive and CSR-certified leader driving innovation, sustainable growth, and social impact through his expertise in IT, corporate strategy, and philanthropy.',
      image: '/assets/images/leadership/Shahzad-nabi-Director.png',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Mr. Shahzad Nabi is a visionary senior executive and CSR-certified leader who drives innovation, sustainable growth, and social impact through his expertise in IT, corporate strategy, and philanthropy. As Director of NEI, he brings cutting-edge technology insights and corporate strategic thinking to NEIEA\'s operations. His expertise in IT and digital transformation helps in leveraging technology for educational innovation and program scalability.'
    },
    {
      name: 'Prof. Pritham Singh',
      title: 'Professor and Academic Leader',
      description: 'Distinguished professor with extensive academic experience and research contributions',
      image: '/assets/images/leadership/Pritam-Singh.jpg',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Prof. Pritham Singh is a distinguished professor and academic leader with extensive experience in higher education and research. His academic expertise and research contributions provide valuable insights for NEIEA\'s educational quality and academic standards. His understanding of pedagogical excellence and academic rigor helps in maintaining high educational standards across all programs.'
    },
    {
      name: 'Prof. Ritu Deewan',
      title: 'Professor and Educational Expert',
      description: 'Experienced professor with specialization in educational development and academic excellence',
      image: '/assets/images/leadership/Ritu-Dewan.jpg',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Prof. Ritu Deewan is an experienced professor with specialization in educational development and academic excellence. Her expertise in curriculum design, educational assessment, and academic quality assurance contributes significantly to NEIEA\'s educational programs. Her focus on educational innovation and student-centered learning approaches helps in developing effective and engaging educational experiences.'
    },
    {
      name: 'Sumeet Rawla',
      title: 'Social Activist',
      description: 'Dedicated social activist with extensive experience in community development and social change',
      image: '/assets/images/leadership/Sumeet Rawla.png',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Sumeet Rawla is a dedicated social activist with extensive experience in community development and driving social change. His grassroots activism and community engagement expertise provide valuable insights for NEIEA\'s community outreach programs. His understanding of social dynamics and community needs helps in developing programs that are truly responsive to local communities and create lasting social impact.'
    },
    {
      name: 'Gita Ramaswamy',
      title: 'Social Activist',
      description: 'Prominent social activist with deep commitment to social justice and community empowerment',
      image: '/assets/images/leadership/Gita Ramaswamy.png',
      hasImage: true,
      category: 'advisors',
      fullBio: 'Gita Ramaswamy is a prominent social activist with a deep commitment to social justice and community empowerment. Her extensive work in social activism and her understanding of marginalized communities provide crucial perspective for NEIEA\'s inclusive education initiatives. Her advocacy for social equity and her experience in grassroots mobilization help ensure that educational programs reach and benefit the most vulnerable populations.'
    },

    // Staff
    {
      name: 'Ms. Reshma Parveen',
      title: 'Human Resource Manager',
      description: 'Experienced HR professional managing organizational human resources and staff development',
      image: '/assets/images/leadership/Dr. Reshma parveen.png',
      hasImage: true,
      category: 'staff',
      fullBio: 'Ms. Reshma Parveen serves as the Human Resource Manager at NEIEA, bringing extensive experience in organizational human resources and staff development. Her expertise in talent management, organizational development, and employee engagement ensures that NEIEA maintains a motivated and skilled workforce. Her focus on professional development and team building contributes to the organization\'s overall effectiveness and staff satisfaction.'
    },
    {
      name: 'Syed Danish Ali',
      title: 'Supervisor',
      description: '20 years experience in diverse domains, 7 years BPO experience, 5 years dedicated to education and teaching',
      image: '/assets/images/leadership/Syed Danish Ali.jpg',
      hasImage: true,
      category: 'staff',
      fullBio: 'Syed Danish Ali serves as a Supervisor with 20 years of diverse professional experience spanning multiple domains. His background includes 7 years in BPO operations and 5 years specifically dedicated to education and teaching. This unique combination of corporate and educational experience allows him to bring operational efficiency and educational insight to program supervision and quality assurance at NEIEA.'
    },
    {
      name: 'Ms Taskeen Tarannum',
      title: 'Deputy Supervisor',
      description: 'B.A, B.Ed with over 12 years of teaching experience, driving force behind online English program at NEIEA',
      image: '/assets/images/leadership/Ms-Taskeen-Tarannum croped.png',
      hasImage: true,
      category: 'staff',
      fullBio: 'Ms. Taskeen Tarannum serves as Deputy Supervisor and holds B.A and B.Ed qualifications with over 12 years of dedicated teaching experience. She is the driving force behind NEIEA\'s online English program, demonstrating exceptional leadership in digital education delivery. Her expertise in English language instruction and online pedagogy has been instrumental in expanding NEIEA\'s reach through innovative digital learning platforms.'
    },
    {
      name: 'Mr. Sajjad Qasmi',
      title: 'Head of Madarsa Outreach',
      description: 'Specialized leader in Madrasa education outreach and community engagement',
      image: '/assets/images/leadership/Dr. Reshma parveen.png',
      hasImage: false,
      category: 'staff',
      fullBio: 'Mr. Sajjad Qasmi serves as the Head of Madrasa Outreach, specializing in building bridges between traditional Islamic education and modern educational approaches. His expertise in Madrasa education systems and community engagement helps NEIEA develop culturally sensitive programs that respect traditional values while incorporating contemporary educational methods. His work is crucial in expanding NEIEA\'s impact within Islamic educational institutions.'
    },
    {
      name: 'Dr. Saleem Ahmed Qasmi',
      title: 'Madrasa Outreach leader',
      description: 'Expert in Islamic education with extensive experience in Madrasa systems and educational integration',
      image: '/assets/images/leadership/Dr Saleem Ahmad Qasmi.png',
      hasImage: true,
      category: 'staff',
      fullBio: 'Dr. Saleem Ahmed Qasmi is an expert in Islamic education with extensive experience in Madrasa systems and educational integration. As a Madrasa Outreach leader, he works to create meaningful connections between traditional Islamic scholarship and contemporary educational needs. His deep understanding of both traditional and modern educational systems enables him to develop programs that honor Islamic educational traditions while meeting current educational standards.'
    },
    {
      name: 'Ms. Tasneem Khan',
      title: 'Head of English',
      description: 'English language specialist leading English education programs and curriculum development',
      image: '/assets/images/leadership/Tasneem Maam.jpg',
      hasImage: true,
      category: 'staff',
      fullBio: 'Ms. Tasneem Khan serves as the Head of English, specializing in English language education and curriculum development. Her expertise in English language pedagogy and her leadership in developing comprehensive English programs have significantly contributed to improving English language proficiency among NEIEA\'s beneficiaries. Her innovative teaching methods and curriculum design ensure effective English language acquisition across diverse learning contexts.'
    },
    {
      name: 'Ms Farha Khan',
      title: 'Head of Mathematics and IT',
      description: 'Google certified educator, Master\'s in Computer Applications and Mathematics, 15+ years experience',
      image: '/assets/images/leadership/Farha Khan.jpg',
      hasImage: true,
      category: 'staff',
      fullBio: 'Ms. Farha Khan is the Head of Mathematics and IT, bringing exceptional qualifications including Google certification as an educator, Master\'s degrees in Computer Applications and Mathematics, and over 15 years of experience. Her dual expertise in mathematics and information technology makes her uniquely qualified to lead NEIEA\'s STEM education initiatives. Her innovative approach to integrating technology in mathematics education helps students develop both computational thinking and mathematical proficiency.'
    },
    {
      name: 'Ms Arzoo Siraj',
      title: 'Head of Social Media and IT Skills training',
      description: 'M.Tech in Computer Science, technical member and team leader for Data entry and operation course',
      image: '/assets/images/leadership/defaultProfile2.jpg',
      hasImage: false,
      category: 'staff',
      fullBio: 'Ms. Arzoo Siraj holds an M.Tech in Computer Science and serves as the Head of Social Media and IT Skills training. She is a technical member and team leader for data entry and operations courses, bringing cutting-edge technical knowledge to NEIEA\'s digital skills programs. Her expertise in computer science and her leadership in IT skills training help prepare students for the digital economy and modern workplace requirements.'
    },
    {
      name: 'Ms. Saba Manzoor',
      title: 'Project Manager',
      description: 'Experienced project manager overseeing program implementation and coordination',
      image: '/assets/images/leadership/defaultProfile2.jpg',
      hasImage: false,
      category: 'staff',
      fullBio: 'Ms. Saba Manzoor serves as a Project Manager, bringing extensive experience in program implementation and coordination. Her expertise in project management methodologies and her ability to coordinate complex educational initiatives ensure that NEIEA\'s programs are delivered efficiently and effectively. Her focus on systematic planning, execution, and monitoring helps maintain high standards of program quality and impact measurement.'
    }
  ];

  // Find the member based on the URL parameter
  const member = teamMembers.find(m => 
    m.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '') === memberName
  );

  if (!member) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>Member not found</h2>
          <Link to="/about-us/leadership" className="btn btn-primary">
            Back to Leadership
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bio-page">
      {/* Breadcrumb */}
      <div className="container-fluid" style={{ backgroundColor: "#f8f9fa", padding: "10px 0" }}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0" style={{ backgroundColor: "transparent" }}>
              <li className="breadcrumb-item">
                <Link to="/" style={{ color: "#6c757d", textDecoration: "none" }}>
                  🏠 Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/about-us/leadership" style={{ color: "#6c757d", textDecoration: "none" }}>
                  Leadership
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page" style={{ color: "#495057" }}>
                {member.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Bio Content */}
      <section style={{ backgroundColor: "#fff", padding: "60px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              {/* Member Image */}
              <div 
                className="member-image"
                style={{
                  height: "400px",
                  background: "#f8f9fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderRadius: "15px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                {member.hasImage ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div 
                    style={{
                      width: "150px",
                      height: "150px",
                      backgroundColor: "#06038F",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "48px",
                      fontWeight: "bold"
                    }}
                  >
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Back Button */}
              <div className="text-center mt-4">
                <button
                  onClick={() => navigate('/about-us/leadership')}
                  className="btn"
                  style={{
                    backgroundColor: "#06038F",
                    color: "white",
                    padding: "12px 30px",
                    borderRadius: "25px",
                    border: "none",
                    fontSize: "16px",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#050277";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#06038F";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  ← Back to Leadership
                </button>
              </div>
            </div>

            <div className="col-lg-8">
              {/* Member Details */}
              <div className="member-details">
                <h1 
                  style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    color: "#212529",
                    marginBottom: "10px",
                    lineHeight: "1.2"
                  }}
                >
                  {member.name}
                </h1>

                <h3 
                  style={{
                    fontSize: "24px",
                    color: "#06038F",
                    fontWeight: "600",
                    marginBottom: "30px"
                  }}
                >
                  {member.title}
                </h3>

                {member.description && (
                  <div 
                    className="mb-4 p-4"
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderRadius: "10px",
                      borderLeft: "4px solid #06038F"
                    }}
                  >
                    <p 
                      style={{
                        fontSize: "18px",
                        color: "#495057",
                        lineHeight: "1.6",
                        margin: "0",
                        fontStyle: "italic"
                      }}
                    >
                      "{member.description}"
                    </p>
                  </div>
                )}

                {/* Full Bio */}
                <div className="bio-content">
                  <h4 
                    style={{
                      fontSize: "28px",
                      fontWeight: "600",
                      color: "#212529",
                      marginBottom: "20px",
                      borderBottom: "2px solid #06038F",
                      paddingBottom: "10px"
                    }}
                  >
                    Biography
                  </h4>
                  
                  <div 
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.8",
                      color: "#495057",
                      textAlign: "justify"
                    }}
                  >
                    <p>{member.fullBio || member.description || 'Biography information will be updated soon.'}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mt-4">
                  <span 
                    className="badge"
                    style={{
                      backgroundColor: "#06038F",
                      color: "white",
                      fontSize: "14px",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      textTransform: "capitalize"
                    }}
                  >
                    {member.category === 'directors' ? 'Director' : 
                     member.category === 'advisors' ? 'Advisor' : 'Staff Member'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bio;
