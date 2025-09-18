import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Images', count: 55 },
    { id: 'events', name: 'Events', count: 16 },
    { id: 'leadership', name: 'Leadership', count: 7 },
    { id: 'partnerships', name: 'Partnerships', count: 3 },
    { id: 'workshops', name: 'Workshops', count: 3 },
    { id: 'learning', name: 'Learning', count: 2 },
    { id: 'digital', name: 'Digital', count: 13 },
    { id: 'design', name: 'Design', count: 7 },
    { id: 'team', name: 'Team', count: 1 },
    { id: 'programs', name: 'Programs', count: 2 },
    { id: 'presentations', name: 'Presentations', count: 1 }
  ];

  const galleryItems = [
    // Digital Category
    { id: 1, title: "Web-1", category: "digital", image: "/assets/images/innovation.jpeg", description: "Digital Innovation Platform", year: "2023" },
    { id: 2, title: "Web-2", category: "digital", image: "/assets/images/event1.jpg", description: "Web-based Learning Solutions", year: "2023" },
    { id: 3, title: "Web-3", category: "digital", image: "/assets/images/event2.jpg", description: "Digital Education Tools", year: "2023" },
    { id: 4, title: "Web-4", category: "digital", image: "/assets/images/waise12.png", description: "Online Learning Environment", year: "2023" },
    { id: 5, title: "Web-5", category: "digital", image: "/assets/images/testimonial2.jpg", description: "Digital Classroom Interface", year: "2023" },
    { id: 6, title: "Web-6", category: "digital", image: "/assets/images/testimonial3.jpg", description: "Virtual Learning Platform", year: "2023" },
    { id: 7, title: "Republic Day India 2025", category: "digital", image: "/assets/images/kaur1.jpeg", description: "Digital Celebration", year: "2023" },
    { id: 8, title: "NEIEA Exhibition 2025", category: "digital", image: "/assets/images/leader.jpg", description: "Digital Exhibition Showcase", year: "2023" },

    // Design Category
    { id: 9, title: "Web1-1", category: "design", image: "/assets/images/Leader2.jpeg", description: "Creative Web Design", year: "2023" },
    { id: 10, title: "Web1-2", category: "design", image: "/assets/images/leader4.png", description: "User Interface Design", year: "2023" },
    { id: 11, title: "Web1-3", category: "design", image: "/assets/images/MdWais.jpeg", description: "Visual Design Elements", year: "2023" },
    { id: 12, title: "Neon Light 3", category: "design", image: "/assets/images/leaderimage.jpeg", description: "Creative Design", year: "2023" },
    { id: 13, title: "Neon Light 4", category: "design", image: "/assets/images/slider5 (1).jpg", description: "Visual Innovation", year: "2023" },
    { id: 14, title: "Neon Light 5", category: "design", image: "/assets/images/slider6 (1).jpeg", description: "Artistic Expression", year: "2023" },

    // Events Category
    { id: 15, title: "Exhibition", category: "events", image: "/assets/images/resized_classroom_image.png", description: "Showcase Event", year: "2023" },
    { id: 16, title: "Community Leaders Gathering", category: "events", image: "/assets/images/resized_classroom_image2.png", description: "Mr. Javeed Mirza in Jeddah", year: "2023" },
    { id: 17, title: "Mr. Javeed Mirza's Conversations", category: "events", image: "/assets/images/vision2.jpg", description: "Education For All Event in Riyadh", year: "2023" },
    { id: 18, title: "Ashraf Shah's Discussion", category: "events", image: "/assets/images/homegroup.png", description: "Educational Growth of Minorities in India", year: "2023" },
    { id: 19, title: "Ms. Tasmia's Views", category: "events", image: "/assets/images/Stats_Background.jpg", description: "Education Need Discussion in Riyadh", year: "2023" },
    { id: 20, title: "Community Leaders Event", category: "events", image: "/assets/images/our-mission.png", description: "Impactful Gathering in Riyadh", year: "2023" },
    { id: 21, title: "Community Leaders Collaboration", category: "events", image: "/assets/images/our-mission-bg.png", description: "Education For All Event in Riyadh", year: "2023" },
    { id: 22, title: "NEIEA's Event in Riyadh", category: "events", image: "/assets/images/global-map.png", description: "Influential Leaders Gathering", year: "2023" },
    { id: 23, title: "Mission Unveiling in Riyadh", category: "events", image: "/assets/images/ChatGPT Image Sep 16, 2025, 09_58_45 PM.png", description: "Ms. Tasneem's Educational Talk", year: "2023" },
    { id: 24, title: "Ms. Tasneem's Mission", category: "events", image: "/assets/images/innovation__1_-removebg-preview.png", description: "NEIEA's Mission Explanation in Jeddah", year: "2023" },
    { id: 25, title: "Inspiring Discourse in Jeddah", category: "events", image: "/assets/images/Quotes1.png", description: "Mr. Javeed Mirza's Educational Talk", year: "2023" },
    { id: 26, title: "Impactful Talk in Dammam", category: "events", image: "/assets/images/Quotes2.png", description: "Mr. Javeed Mirza's Educational Discourse", year: "2023" },
    { id: 27, title: "Education For All Talk", category: "events", image: "/assets/images/Quotes3.png", description: "Mr. Javeed Mirza with Former MP and HRD Minister", year: "2023" },
    { id: 28, title: "Community Engagement Event", category: "events", image: "/assets/images/Quotes4.png", description: "WhatsApp Image from September 21, 2023", year: "2023" },

    // Leadership Category
    { id: 29, title: "Prof. Asif Rameez Doudi", category: "leadership", image: "/assets/images/banner1.jpg", description: "President of Indo-Arab Helping Hands", year: "2023" },
    { id: 30, title: "Esteemed Gathering", category: "leadership", image: "/assets/images/banner2.jpg", description: "Mr. Javeed Mirza with Notable Figures", year: "2023" },
    { id: 31, title: "Leadership Meeting", category: "leadership", image: "/assets/images/banner3.jpg", description: "Strategic Discussion", year: "2023" },
    { id: 32, title: "Javeed Mirza", category: "leadership", image: "/assets/images/leader.jpg", description: "Community Leadership", year: "2023" },
    { id: 33, title: "Anandan Sir", category: "leadership", image: "/assets/images/Leader2.jpeg", description: "Educational Leadership", year: "2023" },
    { id: 34, title: "Strategic Planning", category: "leadership", image: "/assets/images/leader4.png", description: "Future Vision Development", year: "2023" },
    { id: 35, title: "Meeting with Mr. Jeffrey Sachs", category: "leadership", image: "/assets/images/MdWais.jpeg", description: "Chief Strategist for Sustainable Development Goals (SDG)", year: "2023" },

    // Partnerships Category
    { id: 36, title: "Institutional Partnership", category: "partnerships", image: "/assets/images/leaderimage.jpeg", description: "For Educational Institutions", year: "2023" },
    { id: 37, title: "NEIUSA Collaboration", category: "partnerships", image: "/assets/images/slider5 (1).jpg", description: "Partnership Development", year: "2023" },
    { id: 38, title: "Partnership with Education Above All", category: "partnerships", image: "/assets/images/slider6 (1).jpeg", description: "Meeting with Mr. Fahad Al-Sulaiti, CEO of EAA", year: "2023" },

    // Workshops Category
    { id: 39, title: "Innovation Session", category: "workshops", image: "/assets/images/resized_classroom_image.png", description: "Creative Problem Solving", year: "2023" },
    { id: 40, title: "Design Workshop", category: "workshops", image: "/assets/images/resized_classroom_image2.png", description: "Creative Learning", year: "2023" },
    { id: 41, title: "Educational Workshop", category: "workshops", image: "/assets/images/vision2.jpg", description: "Morning Session on September 21, 2023", year: "2023" },

    // Learning Category
    { id: 42, title: "Group Discussion", category: "learning", image: "/assets/images/homegroup.png", description: "Interactive Learning Environment", year: "2023" },
    { id: 43, title: "Learning Session", category: "learning", image: "/assets/images/Stats_Background.jpg", description: "Educational Activities", year: "2023" },

    // Team Category
    { id: 44, title: "Team Building", category: "team", image: "/assets/images/our-mission.png", description: "Collaborative Session", year: "2023" },

    // Programs Category
    { id: 45, title: "Learning Activities", category: "programs", image: "/assets/images/our-mission-bg.png", description: "Interactive Summer Session", year: "2023" },
    { id: 46, title: "Summer Program", category: "programs", image: "/assets/images/global-map.png", description: "July 27, 2023 Activities", year: "2023" },

    // Presentations Category
    { id: 47, title: "Presentation Session", category: "presentations", image: "/assets/images/innovation__1_-removebg-preview.png", description: "Student Presentations", year: "2023" }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "About", link: null },
        { name: "Media and Events", link: null },
        { name: "Gallery", link: null }
      ]}
      title="Our Visual Journey"
      subtitle="NEIEA Gallery"
      description="Explore our journey through education, innovation, and community impact. From leadership meetings to community events, discover the moments that shape our mission."
      heroImage="/assets/images/event1.jpg"
    >
      {/* Filter Categories */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`btn ${activeCategory === category.id ? 'btn-primary' : 'btn-outline-primary'}`}
                style={{
                  backgroundColor: activeCategory === category.id ? '#06038F' : 'transparent',
                  borderColor: '#06038F',
                  color: activeCategory === category.id ? 'white' : '#06038F',
                  padding: "8px 20px",
                  fontSize: "14px",
                  fontWeight: "500",
                  borderRadius: "20px",
                  transition: "all 0.2s ease"
                }}
              >
                {category.name}
                <span 
                  style={{ 
                    marginLeft: "8px", 
                    fontSize: "12px",
                    opacity: "0.8"
                  }}
                >
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="row g-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6">
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{ 
                borderRadius: "15px", 
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
              }}
            >
              <div style={{ height: "250px", overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
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
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                  <span style={{ color: "#6c757d", fontSize: "12px", fontWeight: "500" }}>
                    {item.year}
                  </span>
                </div>
                <h5 
                  style={{ 
                    color: "#212529", 
                    fontWeight: "600", 
                    marginBottom: "12px",
                    fontSize: "16px",
                    lineHeight: "1.3"
                  }}
                >
                  {item.title}
                </h5>
                <p 
                  style={{ 
                    color: "#6c757d", 
                    lineHeight: "1.5", 
                    fontSize: "13px",
                    margin: "0"
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div 
            style={{ 
              backgroundColor: "#f8f9fa", 
              padding: "50px 40px", 
              borderRadius: "15px",
              textAlign: "center"
            }}
          >
            <h3 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "30px" 
              }}
            >
              Our Impact in Numbers
            </h3>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4">
                <div>
                  <h2 style={{ color: "#06038F", fontWeight: "700", fontSize: "36px", marginBottom: "10px" }}>
                    500+
                  </h2>
                  <p style={{ color: "#6c757d", margin: "0", fontWeight: "500" }}>
                    Educational Events
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div>
                  <h2 style={{ color: "#06038F", fontWeight: "700", fontSize: "36px", marginBottom: "10px" }}>
                    10,000+
                  </h2>
                  <p style={{ color: "#6c757d", margin: "0", fontWeight: "500" }}>
                    Students Reached
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div>
                  <h2 style={{ color: "#06038F", fontWeight: "700", fontSize: "36px", marginBottom: "10px" }}>
                    200+
                  </h2>
                  <p style={{ color: "#6c757d", margin: "0", fontWeight: "500" }}>
                    Partner Institutions
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div>
                  <h2 style={{ color: "#06038F", fontWeight: "700", fontSize: "36px", marginBottom: "10px" }}>
                    50+
                  </h2>
                  <p style={{ color: "#6c757d", margin: "0", fontWeight: "500" }}>
                    Awards & Recognition
                  </p>
                </div>
              </div>
            </div>
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
            <h4 
              style={{ 
                color: "#212529", 
                fontWeight: "600", 
                marginBottom: "15px" 
              }}
            >
              Join Our Visual Story
            </h4>
            <p 
              style={{ 
                color: "#6c757d", 
                marginBottom: "25px",
                maxWidth: "600px",
                margin: "0 auto 25px"
              }}
            >
              Be part of our journey in transforming education. Your support helps us create more moments worth capturing.
            </p>
            <div>
              <a 
                href="/donate" 
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
                Support Our Mission
              </a>
              <a 
                href="/donation/volunteer" 
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
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Gallery;
