import React from 'react';

const PageTemplate = ({ 
  breadcrumbPath, 
  title, 
  subtitle, 
  description, 
  children,
  heroImage = null,
  showHeroSection = true 
}) => {
  return (
    <div className="page-template">
      {/* Hero Section with Integrated Breadcrumb */}
      {showHeroSection && (
        <section 
          style={{ 
            background: "linear-gradient(96.15deg, rgba(6, 3, 143, 0.8) 13.5%, rgba(255, 103, 31, 0.8) 83.46%)",
            padding: "0",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Optional overlay for better text readability */}
          <div 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.1)",
              zIndex: 1
            }}
          ></div>
          
          {/* Breadcrumb integrated in gradient background */}
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <nav aria-label="breadcrumb" style={{ paddingTop: "15px", paddingBottom: "0" }}>
              <ol
                className="breadcrumb mb-0"
                style={{ backgroundColor: "transparent" }}
              >
                <li className="breadcrumb-item">
                  <a
                    href="/"
                    style={{ 
                      color: "rgba(255, 255, 255, 0.9)", 
                      textDecoration: "none",
                      textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                    }}
                  >
                    🏠 Home
                  </a>
                </li>
                {breadcrumbPath.map((item, index) => (
                  <React.Fragment key={index}>
                    <li className="breadcrumb-item">
                      {item.link ? (
                        <a
                          href={item.link}
                          style={{ 
                            color: "rgba(255, 255, 255, 0.8)", 
                            textDecoration: "none",
                            textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                          }}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span style={{ 
                          color: "rgba(255, 255, 255, 0.9)",
                          textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                        }}>
                          {item.name}
                        </span>
                      )}
                    </li>
                  </React.Fragment>
                ))}
              </ol>
            </nav>
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "60px", paddingBottom: "80px" }}>
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    color: "#ffffff",
                    marginBottom: "20px",
                    lineHeight: "1.2",
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                  }}
                >
                  {title}
                </h1>
                {subtitle && (
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      color: "#ffffff",
                      marginBottom: "20px",
                      opacity: "0.95",
                      textShadow: "0 1px 3px rgba(0,0,0,0.3)"
                    }}
                  >
                    {subtitle}
                  </h2>
                )}
                {description && (
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.6",
                      color: "#ffffff",
                      marginBottom: "0",
                      opacity: "0.9",
                      textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                    }}
                  >
                    {description}
                  </p>
                )}
              </div>
              {heroImage && (
                <div className="col-lg-4">
                  <div className="text-center">
                    <img
                      src={heroImage}
                      alt={title}
                      className="img-fluid rounded-3 shadow-lg"
                      style={{ 
                        maxHeight: "300px", 
                        objectFit: "cover",
                        border: "3px solid rgba(255,255,255,0.2)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section style={{ backgroundColor: "#fff", padding: "60px 0" }}>
        <div className="container">
          {children}
        </div>
      </section>
    </div>
  );
};

export default PageTemplate;
