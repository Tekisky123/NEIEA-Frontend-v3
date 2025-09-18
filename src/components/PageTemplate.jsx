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
      <div className="container-fluid bg-gray-50 py-3 safe-area-top">
        <div className="container container-responsive">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 bg-transparent flex-wrap">
              <li className="breadcrumb-item">
                <a
                  href="/"
                  className="text-gray-600 hover:text-ngo-color1 text-responsive-xs touch-manipulation min-h-[32px] flex items-center"
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
                        className="text-gray-600 hover:text-ngo-color1 text-responsive-xs touch-manipulation min-h-[32px] flex items-center"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <span className="text-gray-600 text-responsive-xs">{item.name}</span>
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
        <section className="bg-gray-50 section-padding">
          <div className="container container-responsive">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1 className="text-responsive-3xl font-bold text-gray-900 mb-5 leading-tight">
                  {title}
                </h1>
                {subtitle && (
                  <h2 className="text-responsive-xl font-semibold text-ngo-color1 mb-5">
                    {subtitle}
                  </h2>
                )}
                {description && (
                  <p className="text-responsive-lg leading-relaxed text-gray-600 mb-0">
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
                      className="w-full h-auto rounded-lg shadow-soft img-mobile-responsive"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="bg-white section-padding safe-area-bottom">
        <div className="container container-responsive">
          {children}
        </div>
      </section>
    </div>
  );
};

export default PageTemplate;
