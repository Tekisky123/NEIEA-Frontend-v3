import React from 'react';
import { useParams, Link } from 'react-router-dom';

const LeadershipProfile = () => {
  const { memberSlug } = useParams();

  // Leadership data from NEIEA official sources
  const leadershipData = {
    "javeed-mirza": {
      name: "Javeed Mirza",
      position: "Founder & President",
      image: "/assets/images/leader4.png",
      department: "Executive Leadership",
      location: "New York, USA / India",
      bio: "Javeed Mirza is a motivated and dynamic educator, entrepreneur, and community activist dedicated to providing innovative, transformative, and equitable education to the underprivileged youth of India.",
      fullBio: [
        "Javeed Mirza serves as the Founder and President of NEIEA, bringing his passion for ending inequity and injustice to marginalized communities. His educational background includes a PhD (ABD) in Economics from The New School University, New York, and a B.E. (Hons) from Osmania University, Hyderabad.",
        "He has worked as a full-time teacher with the New York City Board of Education and is the founder and president of TAJ Software Systems Corp. His diverse experience spans education, technology, and community development.",
        "His vision for NEIEA stems from decades of work in social and political activism, teaching, business, and research. He is committed to creating scalable educational solutions that can transform global education and empower underprivileged communities."
      ],
      expertise: ["Education Technology", "Social Activism", "Entrepreneurship", "Community Development", "Software Systems"],
      achievements: [
        "Founded NEIEA - New Equitable and Innovative Educational Association",
        "PhD (ABD) in Economics from The New School University, New York",
        "Founder and President of TAJ Software Systems Corp",
        "Full-time teacher with New York City Board of Education",
        "Decades of experience in social and political activism"
      ],
      languages: ["English", "Hindi", "Urdu"],
      interests: ["Educational Innovation", "Technology in Education", "Social Justice", "Community Empowerment"]
    },
    "k-n-anandan": {
      name: "Dr. K. N. Anandan",
      position: "Co-Founder & Guru",
      image: "/assets/images/leader5.png",
      department: "Academic Leadership",
      location: "India",
      bio: "Dr. K. N. Anandan is an Indian linguist, English language teaching expert, and social worker whose 'Discourse Oriented Pedagogy' concept has revolutionized second language teaching in Kerala and Telangana.",
      fullBio: [
        "Dr. K. N. Anandan serves as Co-Founder and Guru at NEIEA, bringing his expertise as an Indian linguist and English language teaching specialist. He has obtained PGCTE, PGDTE, M. Litt, and PhD from CIEFL, Hyderabad, establishing himself as a leading authority in language education.",
        "His groundbreaking concept of 'Discourse Oriented Pedagogy' has brought revolutionary changes to second language teaching methodologies in Kerala and Telangana states. This innovative approach has transformed how English is taught and learned in these regions.",
        "Currently working as an independent English consultant, Dr. Anandan provides his services to various institutions and organizations. His work as a social worker complements his academic pursuits, demonstrating his commitment to educational equity and community development."
      ],
      expertise: ["Linguistics", "English Language Teaching", "Discourse Oriented Pedagogy", "Second Language Acquisition", "Educational Consultation"],
      achievements: [
        "Developed revolutionary 'Discourse Oriented Pedagogy' methodology",
        "PhD from CIEFL (Central Institute of English and Foreign Languages), Hyderabad",
        "Transformed second language teaching in Kerala and Telangana",
        "Independent English consultant to multiple institutions",
        "Recognized social worker and educational reformer"
      ],
      languages: ["English", "Hindi", "Malayalam", "Tamil", "Telugu"],
      interests: ["Language Pedagogy", "Educational Innovation", "Social Work", "Linguistic Research"]
    },
    "nasreen-fatima": {
      name: "Ms Nasreen Fatima",
      position: "Director",
      image: "/assets/images/leader6.jpg",
      department: "Academic Administration",
      location: "India",
      bio: "Ms Nasreen Fatima is the Secretary and Correspondent of Neo Rosary Nursery, K.G. and High School, with extensive qualifications in education and a distinguished record in educational publishing and training.",
      fullBio: [
        "Ms Nasreen Fatima serves as Director at NEIEA and is the Secretary and Correspondent of Neo Rosary Nursery, K.G. and High School. Her impressive educational qualifications include B.Sc, B.Ed, B.M.R.C.Sc., M.A. in English Literature, and M.Ed, demonstrating her comprehensive understanding of both academic content and pedagogical methods.",
        "She has made significant contributions to educational literature through her publications, including 'English Language Program' and 'A Creative Approach to Learning Pedagogy'. These works reflect her innovative approach to language teaching and learning methodologies.",
        "Ms Fatima actively participates in various workshops and training programs, continuously updating her knowledge and skills. Her dedication to educational excellence has been recognized through multiple awards, establishing her as a respected figure in the educational community."
      ],
      expertise: ["Educational Administration", "English Literature", "Curriculum Development", "Teacher Training", "Educational Publishing"],
      achievements: [
        "Secretary and Correspondent of Neo Rosary Nursery, K.G. and High School",
        "Author of 'English Language Program' and 'A Creative Approach to Learning Pedagogy'",
        "M.A. in English Literature and M.Ed qualification",
        "Multiple awards for educational excellence",
        "Active participant in educational workshops and training programs"
      ],
      languages: ["English", "Hindi", "Urdu"],
      interests: ["Educational Publishing", "Creative Pedagogy", "Literature", "Teacher Development"]
    },
    "tahseen-sakina": {
      name: "Ms Tahseen Sakina",
      position: "Director",
      image: "/assets/images/leader7.png",
      department: "Educational Leadership",
      location: "Telangana & Karnataka, India",
      bio: "Ms Tahseen Sakina is a trained postgraduate with over 32 years of experience in prestigious schools across Telangana and Karnataka, serving in various leadership capacities including Academic Director, Principal, Vice Principal, and Head Mistress.",
      fullBio: [
        "Ms Tahseen Sakina brings over 32 years of distinguished experience from prestigious schools in Telangana and Karnataka to her role as Director at NEIEA. Her extensive background includes serving as Academic Director, Principal, Vice Principal, and Head Mistress, demonstrating her comprehensive understanding of educational leadership at all levels.",
        "She specializes in various training and orientation programs, continuously enhancing her professional capabilities. Her commitment to staying current with educational trends is evidenced by her numerous certifications, including Google Educator Level 1 and International Certified Career Coach Level 1.",
        "Her vast experience in educational administration and her dedication to professional development make her an invaluable asset to NEIEA's mission of providing quality education to underprivileged communities. Her leadership style focuses on practical implementation of innovative educational methodologies."
      ],
      expertise: ["Educational Leadership", "Academic Administration", "Training & Development", "Career Coaching", "School Management"],
      achievements: [
        "Over 32 years of experience in prestigious schools across Telangana and Karnataka",
        "Served as Academic Director, Principal, Vice Principal, and Head Mistress",
        "Google Educator Level 1 certification",
        "International Certified Career Coach Level 1",
        "Expert in training and orientation programs"
      ],
      languages: ["English", "Hindi", "Urdu", "Telugu", "Kannada"],
      interests: ["Educational Leadership", "Career Coaching", "Professional Development", "Academic Excellence"]
    },
    "niloufer-baig": {
      name: "Ms Niloufer Baig",
      position: "Director",
      image: "/assets/images/leader8.jpg",
      department: "Operations Management",
      location: "Telangana & Andhra Pradesh, India",
      bio: "Ms Niloufer Baig holds a Master's degree and brings over 12 years of extensive experience in the education sector. She currently serves as a senior leader at NEIEA, overseeing operations in Telangana and Andhra Pradesh.",
      fullBio: [
        "Ms Niloufer Baig serves as Director at NEIEA, bringing her Master's degree qualification and over 12 years of extensive experience in the education sector. She currently holds a senior leadership position, overseeing operations across Telangana and Andhra Pradesh states.",
        "Her role encompasses strategic leadership, where she provides direction and vision for educational initiatives in these key regions. She is actively involved in customer coordination, ensuring that NEIEA's programs meet the diverse needs of students and educational institutions.",
        "Ms Baig is also deeply committed to mentorship, guiding both students and fellow educators in their professional development. Her comprehensive approach to leadership combines operational excellence with educational innovation, making her an integral part of NEIEA's success in these regions."
      ],
      expertise: ["Strategic Leadership", "Operations Management", "Customer Relations", "Mentorship", "Regional Coordination"],
      achievements: [
        "Over 12 years of experience in the education sector",
        "Senior leader overseeing operations in Telangana and Andhra Pradesh",
        "Expert in strategic leadership and customer coordination",
        "Dedicated mentor for students and educators",
        "Master's degree qualification"
      ],
      languages: ["English", "Hindi", "Urdu", "Telugu"],
      interests: ["Strategic Planning", "Educational Operations", "Mentorship", "Regional Development"]
    },
    "peshimam-nazeer": {
      name: "Dr. Peshimam Nazeer Ahmed",
      position: "Academic Advisor",
      image: "/assets/images/leader9.jpeg",
      department: "Academic Affairs",
      location: "India",
      bio: "Dr. Peshimam Nazeer Ahmed is an accomplished academic advisor with extensive experience in higher education and research. His expertise in academic planning and institutional development contributes significantly to NEIEA's educational strategy.",
      fullBio: [
        "Dr. Peshimam Nazeer Ahmed serves as Academic Advisor at NEIEA, bringing his extensive experience in higher education and research to guide the organization's academic initiatives. His expertise in academic planning and institutional development has been crucial in shaping NEIEA's educational strategy.",
        "With a distinguished career in academia, Dr. Ahmed has contributed to numerous educational institutions and research projects. His deep understanding of educational systems and academic excellence standards helps ensure that NEIEA maintains the highest quality in its educational offerings.",
        "His advisory role encompasses strategic planning for academic programs, quality assurance, and the development of partnerships with educational institutions to enhance NEIEA's impact and reach."
      ],
      expertise: ["Academic Planning", "Higher Education", "Research Management", "Institutional Development"],
      achievements: [
        "Extensive experience in higher education leadership",
        "Expert in academic program development",
        "Specialist in institutional strategy and planning",
        "Contributor to educational research and innovation"
      ],
      languages: ["English", "Hindi", "Urdu", "Arabic"],
      interests: ["Higher Education", "Academic Research", "Institutional Development", "Educational Policy"]
    },
    "chaya-ratan": {
      name: "Mrs. M. Chaya Ratan",
      position: "IAS (Retired)",
      image: "/assets/images/leader11.png",
      department: "Strategic Advisory",
      location: "India",
      bio: "Mrs. M. Chaya Ratan is a retired IAS officer of the 1977 batch who has implemented reforms in various departments including Health, College and School Education, Family Welfare, and Tribal Welfare.",
      fullBio: [
        "Mrs. M. Chaya Ratan brings her distinguished career as an IAS officer of the 1977 batch to NEIEA's strategic advisory board. Throughout her illustrious civil service career, she has implemented significant reforms across multiple critical departments including Health, College and School Education, Family Welfare, and Tribal Welfare.",
        "Her educational credentials include a Master's degree in Eco-Social Policy and Planning from the prestigious London School of Economics, England. This international exposure has enriched her understanding of policy frameworks and their practical implementation in diverse socio-economic contexts.",
        "Her extensive experience in government administration, combined with her deep understanding of educational policy and social welfare systems, makes her an invaluable advisor to NEIEA's mission of providing equitable education to marginalized communities."
      ],
      expertise: ["Public Administration", "Educational Policy", "Social Welfare", "Tribal Development", "Policy Implementation"],
      achievements: [
        "IAS officer of the 1977 batch with distinguished service record",
        "Implemented reforms in Health, Education, Family Welfare, and Tribal Welfare",
        "Master's in Eco-Social Policy and Planning from London School of Economics",
        "Extensive experience in government administration and policy implementation",
        "Expert in educational and social welfare systems"
      ],
      languages: ["English", "Hindi", "Telugu", "Tamil"],
      interests: ["Educational Policy", "Social Welfare", "Tribal Development", "Public Administration"]
    },
    "vinod-mubayi": {
      name: "Vinod Mubayi",
      position: "Physicist",
      image: "/assets/images/leader12.jpg",
      department: "Scientific Advisory",
      location: "New York, USA",
      bio: "Vinod Mubayi is an American physicist and member of the American Association for the Advancement of Science, American Nuclear Society, and New York Academy of Science, currently working at Brookhaven National Laboratory.",
      fullBio: [
        "Vinod Mubayi serves as a scientific advisor to NEIEA, bringing his extensive expertise as an American physicist. He holds prestigious memberships in the American Association for the Advancement of Science, American Nuclear Society, and New York Academy of Science, reflecting his standing in the scientific community.",
        "His educational background includes a B.Sc from Delhi University and a PhD from Brandeis University, providing him with both Indian and American academic perspectives. This dual educational experience gives him unique insights into educational systems across different cultures.",
        "Currently working as a physicist at Brookhaven National Laboratory in Upton, New York, he contributes his scientific expertise and international perspective to NEIEA's mission of advancing educational opportunities through innovative approaches and technology integration."
      ],
      expertise: ["Nuclear Physics", "Scientific Research", "International Education", "Technology Integration", "Academic Collaboration"],
      achievements: [
        "PhD from Brandeis University and B.Sc from Delhi University",
        "Physicist at Brookhaven National Laboratory, Upton, New York",
        "Member of American Association for the Advancement of Science",
        "Member of American Nuclear Society and New York Academy of Science",
        "International expertise in scientific research and education"
      ],
      languages: ["English", "Hindi"],
      interests: ["Scientific Research", "Educational Technology", "International Collaboration", "Nuclear Physics"]
    },
    "av-ambika": {
      name: "Ms A. V. Ambika",
      position: "Treasurer, Aman Vedika",
      image: "/assets/images/leader13.png",
      department: "Finance & Arts",
      location: "India",
      bio: "Ms A. V. Ambika is a multi-talented individual serving as an activist, school teacher, theater artist, singer, and documentary filmmaker who uses her theater skills to spread her message more effectively.",
      fullBio: [
        "Ms A. V. Ambika brings a unique combination of skills to NEIEA as Treasurer of Aman Vedika. Her diverse background includes roles as an activist, school teacher, theater artist, singer, and documentary filmmaker, making her a versatile contributor to the organization's mission.",
        "Her theatrical skills serve as a powerful tool for communication and education, allowing her to spread important messages about education and social justice more effectively. This creative approach to advocacy aligns perfectly with NEIEA's innovative educational methodologies.",
        "Through her work in documentary filmmaking and her artistic endeavors, she brings a creative perspective to educational content development and community engagement, helping NEIEA reach diverse audiences through multiple mediums."
      ],
      expertise: ["Theater Arts", "Documentary Filmmaking", "Community Activism", "Creative Education", "Financial Management"],
      achievements: [
        "Multi-talented artist combining activism with creative expression",
        "Experienced school teacher with practical educational insights",
        "Theater artist and singer using arts for social messaging",
        "Documentary filmmaker creating educational content",
        "Treasurer of Aman Vedika with financial management expertise"
      ],
      languages: ["English", "Hindi", "Telugu"],
      interests: ["Theater Arts", "Documentary Making", "Social Activism", "Creative Education"]
    },
    "danish-ali": {
      name: "Syed Danish Ali",
      position: "Supervisor",
      image: "/assets/images/leader15.jpeg",
      department: "Operations",
      location: "India",
      bio: "Syed Danish Ali is a dedicated supervisor at NEIEA with a background in Political Science and 20 years of experience across various fields including international BPO and public relations.",
      fullBio: [
        "Syed Danish Ali serves as Supervisor at NEIEA, bringing his extensive 20-year experience across various professional fields. His educational background in Political Science provides him with a strong foundation in understanding social dynamics and organizational structures.",
        "He has worked for 7 years in prestigious international BPO companies, where he gained valuable experience in global business operations and customer service excellence. This international exposure has equipped him with cross-cultural communication skills and operational efficiency.",
        "Additionally, he spent 7 years as a Team Leader in the public relations sector at Hype Communication, where he developed expertise in stakeholder management and strategic communication. His diverse professional background makes him well-suited for his supervisory role at NEIEA."
      ],
      expertise: ["Team Leadership", "Public Relations", "International Operations", "Political Science", "Stakeholder Management"],
      achievements: [
        "20 years of diverse professional experience",
        "7 years experience in international BPO companies",
        "7 years as Team Leader in public relations at Hype Communication",
        "Background in Political Science",
        "Expertise in cross-cultural communication and operations"
      ],
      languages: ["English", "Hindi", "Urdu"],
      interests: ["Team Leadership", "Public Relations", "International Business", "Political Analysis"]
    },
    "taskeen-tarannum": {
      name: "Ms Taskeen Tarannum",
      position: "Deputy Supervisor",
      image: "/assets/images/leader16.png",
      department: "Online Education",
      location: "India",
      bio: "Ms Taskeen Tarannum is an experienced educator with B.A. and B.Ed degrees, bringing 12 years of teaching experience and leading NEIEA's online English program with dedication to professional development.",
      fullBio: [
        "Ms Taskeen Tarannum serves as Deputy Supervisor at NEIEA, bringing her solid educational foundation with B.A. and B.Ed degrees. Her 12 years of teaching experience have provided her with deep insights into effective pedagogical methods and student engagement strategies.",
        "She currently leads NEIEA's online English program, where she applies her extensive teaching experience to develop and implement effective online learning methodologies. Her role is crucial in ensuring the quality and effectiveness of NEIEA's digital education initiatives.",
        "Ms Tarannum is committed to professional development and adaptability, continuously updating her skills to meet the evolving demands of online education. Her dedication to excellence in education makes her a valuable asset to NEIEA's mission."
      ],
      expertise: ["Online Education", "English Teaching", "Program Leadership", "Professional Development", "Digital Learning"],
      achievements: [
        "12 years of teaching experience",
        "B.A. and B.Ed educational qualifications",
        "Leader of NEIEA's online English program",
        "Expert in online learning methodologies",
        "Committed to continuous professional development"
      ],
      languages: ["English", "Hindi", "Urdu"],
      interests: ["Online Education", "English Literature", "Professional Development", "Digital Teaching Methods"]
    },
    "farha-khan": {
      name: "Ms Farha Khan",
      position: "Math Team Leader & IT Deputy Team Leader",
      image: "/assets/images/leader14.png",
      department: "Mathematics & IT",
      location: "India",
      bio: "Ms Farha Khan is a dynamic team leader with Master's degrees in Computer Applications and Mathematics, Google certified educator with 15+ years of teaching experience and 5 years of team leadership.",
      fullBio: [
        "Ms Farha Khan serves as both Math Team Leader and IT Deputy Team Leader at NEIEA, bringing her impressive dual expertise in mathematics and computer applications. She holds Master's degrees in both Computer Applications and Mathematics, providing her with a unique combination of technical and mathematical skills.",
        "As a Google certified educator, she stays current with the latest educational technologies and methodologies. Her 15+ years of teaching experience have given her deep insights into effective learning strategies, while her 5 years as a team leader have honed her leadership and management skills.",
        "Her dual role allows her to bridge the gap between traditional mathematics education and modern IT applications, making her instrumental in NEIEA's technology-integrated educational approach. She brings innovation and excellence to both mathematics and IT education."
      ],
      expertise: ["Mathematics Education", "Computer Applications", "Google Education Tools", "Team Leadership", "Educational Technology"],
      achievements: [
        "Master's degrees in Computer Applications and Mathematics",
        "Google certified educator",
        "15+ years of teaching experience",
        "5 years of team leadership experience",
        "Dual expertise in Math and IT education"
      ],
      languages: ["English", "Hindi", "Urdu"],
      interests: ["Educational Technology", "Mathematics", "Computer Applications", "Team Development"]
    },
    "gulfisha-khan": {
      name: "Ms Gulfisha Khan",
      position: "English Proficiency Level-1 Team Leader",
      image: "/assets/images/No image.webp",
      department: "English Education",
      location: "India",
      bio: "Ms Gulfisha Khan is a skilled and dedicated educator currently leading NEIEA's English Comprehensive Proficiency course, with 15 years of media industry experience and qualifications in Political Science and Journalism.",
      fullBio: [
        "Ms Gulfisha Khan serves as the English Proficiency Level-1 Team Leader at NEIEA, where she leads the English Comprehensive Proficiency course. Her unique background combines educational expertise with extensive media industry experience, bringing a practical and dynamic approach to English language teaching.",
        "She holds a Bachelor's degree (Honours) in Political Science and a Master's degree in Journalism, providing her with strong analytical and communication skills. Her 15 years of experience in the media industry have given her real-world insights into effective communication and language use.",
        "Her combination of academic qualifications and practical media experience makes her exceptionally qualified to lead English proficiency programs. She brings both theoretical knowledge and practical application to her role, ensuring students receive comprehensive language education."
      ],
      expertise: ["English Language Teaching", "Journalism", "Political Science", "Media Communication", "Program Leadership"],
      achievements: [
        "Bachelor's (Honours) in Political Science",
        "Master's degree in Journalism",
        "15 years of media industry experience",
        "Team Leader for English Comprehensive Proficiency course",
        "Expert in communication and language instruction"
      ],
      languages: ["English", "Hindi", "Urdu"],
      interests: ["English Literature", "Journalism", "Media Studies", "Language Education"]
    },
    "arzoo-siraj": {
      name: "Ms Arzoo Siraj",
      position: "Data Entry Operation Lead",
      image: "/assets/images/No image.webp",
      department: "Technical Operations",
      location: "India",
      bio: "Ms Arzoo Siraj is a young and innovative individual with M.Tech in Computer Science, serving as a technical member and team leader for Data entry and operation courses at NEIEA.",
      fullBio: [
        "Ms Arzoo Siraj brings her technical expertise as Data Entry Operation Lead at NEIEA, where she combines her M.Tech in Computer Science qualification with practical leadership skills. As a young and innovative professional, she represents the new generation of tech-savvy educators.",
        "Her role as a technical member involves overseeing the technological aspects of NEIEA's operations, ensuring smooth and efficient data management processes. She also serves as team leader for Data entry and operation courses, where she trains others in technical skills.",
        "Her M.Tech qualification in Computer Science provides her with deep technical knowledge, while her leadership role allows her to mentor and guide team members in developing their technical capabilities. She plays a crucial role in NEIEA's digital transformation initiatives."
      ],
      expertise: ["Computer Science", "Data Management", "Technical Training", "Team Leadership", "Digital Operations"],
      achievements: [
        "M.Tech in Computer Science",
        "Technical member at NEIEA",
        "Team leader for Data entry and operation courses",
        "Expert in data management and digital operations",
        "Young and innovative technical leader"
      ],
      languages: ["English", "Hindi", "Urdu"],
      interests: ["Computer Science", "Data Analytics", "Technical Training", "Digital Innovation"]
    }
  };

  const member = leadershipData[memberSlug];

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Profile Not Found</h1>
          <p className="text-gray-600 mb-8">The leadership profile you're looking for doesn't exist.</p>
          <Link 
            to="/about-us/leadership" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Leadership
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="leadership-profile-page">
      {/* Breadcrumb */}
      <div
        className="container-fluid"
        style={{ backgroundColor: "#f8f9fa", padding: "10px 0" }}
      >
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol
              className="breadcrumb mb-0"
              style={{ backgroundColor: "transparent" }}
            >
              <li className="breadcrumb-item">
                <Link
                  to="/"
                  style={{ color: "#6c757d", textDecoration: "none" }}
                >
                  🏠 Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link
                  to="/about-us/leadership"
                  style={{ color: "#6c757d", textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link
                  to="/about-us/leadership"
                  style={{ color: "#6c757d", textDecoration: "none" }}
                >
                  Leadership
                </Link>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
                style={{ color: "#495057" }}
              >
                {member.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: "#fff", padding: "60px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="img-fluid rounded-circle shadow-lg"
                  style={{
                    width: "280px",
                    height: "280px",
                    objectFit: "cover",
                    border: "8px solid #f8f9fa"
                  }}
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="ps-lg-4">
                <h1 
                  className="display-4 fw-bold mb-3"
                  style={{ color: "#212529", fontSize: "3.5rem" }}
                >
                  {member.name}
                </h1>
                <h3 
                  className="text-primary mb-4"
                  style={{ 
                    color: "#06038F !important", 
                    fontSize: "1.5rem",
                    fontWeight: "600"
                  }}
                >
                  {member.position}
                </h3>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="me-2 text-muted"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9,22 9,12 15,12 15,22"></polyline>
                    </svg>
                    <span className="text-muted">{member.department}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="me-2 text-muted"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="text-muted">{member.location}</span>
                  </div>
                </div>
                <p 
                  className="lead text-muted"
                  style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
        <div className="container">
          <div className="row">
            {/* Main Content Column */}
            <div className="col-lg-8 mb-5">
              {/* About Section */}
              <div className="bg-white rounded-3 shadow-sm p-5 mb-4">
                <h2 
                  className="h3 fw-bold mb-4"
                  style={{ color: "#212529" }}
                >
                  About {member.name.split(' ')[member.name.split(' ').length - 1]}
                </h2>
                <div className="content">
                  {member.fullBio.map((paragraph, index) => (
                    <p 
                      key={index}
                      className="mb-3"
                      style={{ 
                        color: "#6c757d", 
                        lineHeight: "1.7",
                        fontSize: "1.05rem"
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div className="bg-white rounded-3 shadow-sm p-5">
                <h2 
                  className="h3 fw-bold mb-4"
                  style={{ color: "#212529" }}
                >
                  Key Achievements
                </h2>
                <ul className="list-unstyled">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="d-flex align-items-start mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-success me-3 mt-1"
                        style={{ minWidth: "20px" }}
                      >
                        <polyline points="20,6 9,17 4,12"></polyline>
                      </svg>
                      <span 
                        style={{ 
                          color: "#6c757d", 
                          lineHeight: "1.6",
                          fontSize: "1.05rem"
                        }}
                      >
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Expertise Card */}
              <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
                <h3 className="h5 fw-bold mb-3" style={{ color: "#212529" }}>
                  Areas of Expertise
                </h3>
                <div className="d-flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="badge"
                      style={{
                        backgroundColor: "#06038F",
                        color: "white",
                        padding: "8px 12px",
                        fontSize: "0.85rem",
                        fontWeight: "500"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages Card */}
              <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
                <h3 className="h5 fw-bold mb-3" style={{ color: "#212529" }}>
                  Languages
                </h3>
                <div className="d-flex flex-wrap gap-2">
                  {member.languages.map((language, index) => (
                    <span
                      key={index}
                      className="badge bg-secondary"
                      style={{
                        padding: "6px 10px",
                        fontSize: "0.85rem",
                        fontWeight: "500"
                      }}
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests Card */}
              <div className="bg-white rounded-3 shadow-sm p-4">
                <h3 className="h5 fw-bold mb-3" style={{ color: "#212529" }}>
                  Interests
                </h3>
                <ul className="list-unstyled mb-0">
                  {member.interests.map((interest, index) => (
                    <li 
                      key={index} 
                      className="d-flex align-items-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary me-2"
                      >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                      <span 
                        style={{ 
                          color: "#6c757d", 
                          fontSize: "0.95rem"
                        }}
                      >
                        {interest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Back to Leadership Button */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <Link
                to="/about-us/leadership"
                className="donate-btn btn-lg px-5"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none"
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                >
                  <path d="M19 12H6M12 5l-7 7 7 7"/>
                </svg>
                Back to Leadership Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipProfile;
