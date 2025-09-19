import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Leadership = () => {
  const [activeTab, setActiveTab] = useState('directors');
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    // Directors
    {
      name: 'Mr Javeed Mirza',
      title: 'Founder & President',
      description: 'Highly motivated and dynamic Educator, Entrepreneur and Community activist interested in bringing Quality Education to the underprivileged youth of India',
      image: '/assets/images/Leader2.jpeg',
      hasImage: true,
      category: 'directors'
    },
    {
      name: 'Ms Nasreen Fatima',
      title: 'Director',
      description: 'Secretary and Correspondent of Neo Rosary School. B.Sc, B.Ed, B.M.R.C.Sc., MA in English Literature, and M.Ed',
      image: '/assets/images/Ms.-Nasreen-Fatima-Director-1.jpg',
      hasImage: true,
      category: 'directors'
    },
    {
      name: 'Ms Tahseen Sakina',
      title: 'Director',
      description: 'Trained post graduate with over 32 years of experience in reputed schools as Academic Director, Principal, Vice Principal',
      image: '/assets/images/Ms-Tahseen-Sakina-Director.png',
      hasImage: true,
      category: 'directors'
    },
    {
      name: 'Ms Niloufer Baig',
      title: 'Director',
      description: 'Senior Leader with Master\'s degree and over 12 years of experience overseeing operations across Telangana and Andhra Pradesh',
      image: '/assets/images/Niloufer Baig_croped.jpg',
      hasImage: true,
      category: 'directors'
    },

    // Advisors
    {
      name: 'Dr. K. N. Anandan',
      title: 'Co-Founder & Guru',
      description: 'Indian Linguist, ELT specialist and social activist. Developer of Discourse Oriented Pedagogy (DOP)',
      image: '/assets/images/Dr.K.Anand.png',
      hasImage: true,
      category: 'advisors'
    },
    {
      name: 'Dr. Peshimam Nazeer Ahmed',
      title: 'Joint Secretary OMEIAT',
      description: '45 years Administrative & Teaching Experience, Government Best Teacher Awardee',
      image: '/assets/images/Dr.-Peshimam-Nazeer-Ahmed.png',
      hasImage: true,
      category: 'advisors'
    },
    {
      name: 'Prof. Shantha Sinha',
      title: 'Advisor',
      description: 'India\'s leading child rights activist. Headed National Commission for Protection of Child Rights (2007-2013), Ramon Magsaysay Award recipient',
      image: '/assets/images/Prof.-Shantha-Sinha.png',
      hasImage: true,
      category: 'advisors'
    },
    {
      name: 'Mrs. M. Chaya Ratan',
      title: 'Advisor',
      description: 'IAS (Rtd.) - Retired IAS officer (1977 batch), Master\'s degree in Eco-Social Policy and Planning from London School of Economics',
      image: '/assets/images/chaya.png',
      hasImage: true,
      category: 'advisors'
    },
    {
      name: 'Vinod Mubayi',
      title: 'Advisor',
      description: 'American Physicist - Member American Association for the Advancement of Science, American Nuclear Society, PhD from Brandeis University',
      image: '/assets/images/Vinod-Mubayi.jpg',
      hasImage: true,
      category: 'advisors'
    },
    {
      name: 'Ms AV AMBIKA',
      title: 'Advisor',
      description: 'Treasurer of Aman Vedika - Activist, school teacher, theatre artist, singer, documentary film maker',
      image: '/assets/images/AV-AMBIKA.png',
      hasImage: true,
      category: 'advisors'
    },
    {
      name: 'Hrushikesh M',
      title: 'Vice President',
      description: 'Human Resources, Capgemini India Pvt. Ltd. Over three decades of HR experience, XLRI alumnus',
      image: '/assets/images/defaultProfile2.jpg',
      hasImage: true,
      category: 'advisors'
    },
    {
      name: 'Ms Uzma Nahid',
      title: 'Advisor',
      description: 'Founder President of India International Women\'s Alliance (IIWA), renowned social activist empowering women since 1977',
      image: '/assets/images/Ms.-Uzma-Nahid.png',
      hasImage: true,
      category: 'advisors'
    },

    // Staff
    {
      name: 'Syed Danish Ali',
      title: 'Supervisor',
      description: '20 years experience in diverse domains, 7 years BPO experience, 5 years dedicated to education and teaching',
      image: '/assets/images/Syed Danish Ali.jpg',
      hasImage: true,
      category: 'staff'
    },
    {
      name: 'Ms Taskeen Tarannum',
      title: 'Deputy Supervisor',
      description: 'B.A, B.Ed with over 12 years of teaching experience, driving force behind online English program at NEIEA',
      image: '/assets/images/Ms-Taskeen-Tarannum croped.png',
      hasImage: true,
      category: 'staff'
    },
    {
      name: 'Ms Farha Khan',
      title: 'Math Team Leader & IT Deputy Team Leader',
      description: 'Google certified educator, Master\'s in Computer Applications and Mathematics, 15+ years experience',
      image: '/assets/images/Farha Khan.jpg',
      hasImage: true,
      category: 'staff'
    },
    {
      name: 'Ms Gulfisha Khan',
      title: 'English Proficiency Level-1 Team Leader',
      description: '15 years media experience, Bachelor\'s in Political Science, Post Graduation in Journalism',
      image: '/assets/images/defaultProfile2.jpg',
      hasImage: true,
      category: 'staff'
    },
    {
      name: 'Ms Arzoo Siraj',
      title: 'Data Entry Operation Lead',
      description: 'M.Tech in Computer Science, technical member and team leader for Data entry and operation course',
      image: '/assets/images/defaultProfile2.jpg',
      hasImage: true,
      category: 'staff'
    }
  ];

  const getCurrentMembers = () => {
    return teamMembers.filter(member => member.category === activeTab);
  };

  const MemberCard = ({ member }) => (
    <div className="col-lg-3 col-md-6 mb-4">
      <div
        className="card h-100 border-0 shadow-sm"
        style={{
          borderRadius: "0px",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
          setHoveredMember(member.name);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
          setHoveredMember(null);
        }}
      >
        <div
          style={{
            height: "280px",
            background: "#f8f9fa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {member.hasImage && (
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </div>
        <div className="card-body p-4">
          <h4
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#212529",
              marginBottom: "10px",
            }}
          >
            {member.name}
          </h4>
          <p
            style={{
              color: "#6c757d",
              fontSize: "14px",
              lineHeight: "1.5",
              margin: "0",
            }}
          >
            {member.title}
          </p>
          {member.description && (
            <p
              style={{
                color: "#6c757d",
                fontSize: "14px",
                lineHeight: "1.5",
                marginTop: "10px",
                marginBottom: "0",
              }}
            >
              {member.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="leadership-page">
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
                <span style={{ color: "#6c757d" }}>About</span>
              </li>
              <li className="breadcrumb-item active" aria-current="page" style={{ color: "#495057" }}>
                Board of Directors
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: "#f8f9fa", paddingBottom: "40px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{
                fontSize: "48px",
                fontWeight: "700",
                color: "#212529",
                marginBottom: "30px",
                lineHeight: "1.2",
              }}>
                Meet Our Team
              </h1>
              <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#6c757d",
                marginBottom: "0",
              }}>
                Meet our team of dedicated leaders at NEIEA, a passionate group committed to empowering communities through innovative education and skill-building programs. With diverse backgrounds in teaching, administration, technology, and outreach, our team brings extensive experience and vision to every project.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img
                  src="/assets/images/banner-2.png"
                  alt="Leadership Team"
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "15px"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div style={{
        backgroundColor: "#fff",
        padding: "0px 0",
        borderBottom: "1px solid #e9ecef",
      }}>
        <div className="container">
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "60px"
          }}>
            {/* Directors Tab */}
            <div
              onClick={() => setActiveTab('directors')}
              style={{
                cursor: "pointer",
                padding: "10px 0",
                borderBottom: activeTab === 'directors' ? "3px solid #06038F" : "none",
                color: activeTab === 'directors' ? "#06038F" : "#909090",
                fontWeight: activeTab === 'directors' ? "600" : "500",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span style={{ color: activeTab === 'directors' ? "#007bff" : "#adb5bd" }}></span>
              Directors
            </div>

            {/* Advisors Tab */}
            <div
              onClick={() => setActiveTab('advisors')}
              style={{
                cursor: "pointer",
                padding: "10px 0",
                borderBottom: activeTab === 'advisors' ? "3px solid #06038F" : "none",
                color: activeTab === 'advisors' ? "#06038F" : "#909090",
                fontWeight: activeTab === 'advisors' ? "600" : "500",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span style={{ color: "#adb5bd" }}></span>
              Advisors
            </div>

            {/* Staff Tab */}
            <div
              onClick={() => setActiveTab('staff')}
              style={{
                cursor: "pointer",
                padding: "10px 0",
                borderBottom: activeTab === 'staff' ? "3px solid #06038F" : "none",
                color: activeTab === 'staff' ? "#06038F" : "#909090",
                fontWeight: activeTab === 'staff' ? "600" : "500",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span style={{ color: "#adb5bd" }}></span>
              Staff
            </div>
          </div>
        </div>
      </div>

      {/* Board Members Section */}
      <section style={{ backgroundColor: "#fff", padding: "80px 0" }}>
        <div className="container">
          {getCurrentMembers().length > 0 ? (
            <div className="row g-4">
              {getCurrentMembers().map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">No members found</h3>
              <p className="text-gray-600">Please check back later for updates.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Leadership;
