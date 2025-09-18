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
                <a
                  href="/"
                  style={{ color: "#6c757d", textDecoration: "none" }}
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
                        style={{ color: "#6c757d", textDecoration: "none" }}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <span style={{ color: "#6c757d" }}>{item.name}</span>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      {showHeroSection && (
        <section style={{ backgroundColor: "#f8f9fa", padding: "80px 0" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    color: "#212529",
                    marginBottom: "20px",
                    lineHeight: "1.2",
                  }}
                >
                  {title}
                </h1>
                {subtitle && (
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      color: "#06038F",
                      marginBottom: "20px",
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
                      color: "#6c757d",
                      marginBottom: "0",
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
                      style={{ maxHeight: "300px", objectFit: "cover" }}
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
