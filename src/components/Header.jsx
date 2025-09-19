import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NeiPrimaryLogo from '../assets/images/neia-primary-logo.svg';
import NeiSecondaryLogo from '../assets/images/neia-secondary-logo.svg';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavState, setMobileNavState] = useState({
    about: false,
    ourWork: false,
    courses: false,
    partners: false,
    donation: false,
    neiUsa: false,
    workingModel: false,
    blendedLearning: false,
    mediaEvents: false,
    education: false,
    skillsTraining: false
  });
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Handle search functionality
  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const closeSearch = () => {
    setShowSearch(false);
  };

  // Toggle mobile navigation sections
  const toggleMobileNav = (section) => {
    setMobileNavState((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Close mobile navigation
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  // Handle link clicks in mobile navigation
  const handleMobileLinkClick = () => {
    closeMobileNav();
  };

  // Toggle mobile navigation
  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
      openDropdowns.forEach((dropdown) => {
        dropdown.classList.remove('show');
      });
    }
  };

  // Handle mobile detection and scroll detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991.98);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    // Initial check
    handleResize();

    if (isHomePage && !isMobile) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isHomePage, isMobile]);

  // Handle mobile navigation state changes
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileNavOpen]);

  // Clean up Bootstrap offcanvas remnants
  useEffect(() => {
    const cleanupBootstrapOffcanvas = () => {
      document.body.classList.remove('offcanvas-open', 'modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';

      const backdrops = document.querySelectorAll('.offcanvas-backdrop');
      backdrops.forEach(backdrop => backdrop.remove());

      const offcanvasElements = document.querySelectorAll('.offcanvas');
      offcanvasElements.forEach(offcanvas => {
        offcanvas.classList.remove('show');
      });
    };

    cleanupBootstrapOffcanvas();

    const handleRouteChange = () => {
      setTimeout(cleanupBootstrapOffcanvas, 100);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      cleanupBootstrapOffcanvas();
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [location.pathname]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <style>
        {`
          /* Header Styles */
          .primary-header {
            position: sticky !important;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            transition: all 0.3s ease;
          }

          .primary-header:not(.home-header) {
            background: #fff;
          }

          .home-header {
            position: absolute !important;
            background: transparent;
          }

          .home-header.scrolled {
            position: sticky !important;
            background: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .home-header .navbar {
            background: transparent !important;
          }

          .home-header.scrolled .navbar,
          .primary-header:not(.home-header) .navbar {
            background: #fff !important;
          }

          .home-header .nav-link {
            color: #fff !important;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          }

          .home-header.scrolled .nav-link,
          .primary-header:not(.home-header) .nav-link {
            color: #222222 !important;
            text-shadow: none;
          }

          /* Desktop dropdown styling */
          .dropdown-menu {
            background-color: white;
            border: 1px solid rgba(0, 0, 0, 0.15);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
            border-radius: 0.375rem;
            padding: 0.5rem 0;
            min-width: 200px;
            position: absolute;
            z-index: 1000;
            margin-top: 0.125rem;
            display: none;
          }

          @media (min-width: 992px) {
            .nav-item.dropdown:hover > .dropdown-menu {
              display: block !important;
            }
            .dropdown-submenu:hover > .dropdown-menu {
              display: block !important;
            }
          }

          @media (max-width: 991.98px) {
            .dropdown-menu {
              position: static;
              display: none;
              float: none;
              width: auto;
              margin-top: 0;
              background-color: transparent;
              border: 0;
              box-shadow: none;
            }
            .dropdown-menu.show {
              display: block;
            }
          }

          .dropdown-submenu {
            position: relative;
          }

          .dropdown-submenu .dropdown-menu {
            background-color: white;
            border: 1px solid rgba(0, 0, 0, 0.15);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
            border-radius: 0.375rem;
            margin-left: 100%;
            top: 0;
            position: absolute;
            left: 0;
            z-index: 1001;
            display: none;
          }

          .dropdown-submenu > .dropdown-item {
            position: relative;
            padding-right: 2.5rem;
          }

          .dropdown-submenu > .dropdown-item::after {
            content: "›";
            position: absolute;
            right: 1rem;
            font-size: 0.8rem;
          }

          .dropdown-item {
            display: block;
            width: 100%;
            padding: 0.5rem 1rem;
            clear: both;
            font-weight: 400;
            color: #212529;
            text-align: inherit;
            text-decoration: none;
            white-space: nowrap;
            background-color: transparent;
            border: 0;
            transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
          }

          .dropdown-item:hover,
          .dropdown-item:focus {
            color: #06038F;
            background-color: #f8f9fa;
          }

          .dropdown-item.active,
          .dropdown-item:active {
            color: #fff;
            background-color: #06038F;
          }

          .dropdown-item:focus {
            outline: 2px solid #06038F;
            outline-offset: -2px;
          }

          .navbar {
            transition: box-shadow 0.15s ease-in-out;
          }

          .nav-link {
            transition: color 0.15s ease-in-out;
            font-weight: 500;
          }

          .nav-link:hover,
          .nav-link:focus {
            color: #06038F !important;
          }

          .dropdown-toggle::after {
            margin-left: 0.255em;
            vertical-align: 0.255em;
            content: "";
            border-top: 0.3em solid;
            border-right: 0.3em solid transparent;
            border-bottom: 0;
            border-left: 0.3em solid transparent;
          }

          /* Mobile Navigation Styles */
          .mobile-nav-header {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            border-bottom: 1px solid #eee;
          }

          .mobile-nav-arrow {
            transition: transform 0.3s ease;
            font-size: 0.8rem;
            color: #06038F;
          }

          .mobile-nav-arrow.rotated {
            transform: rotate(180deg);
          }

          .mobile-nav-submenu {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            padding-left: 1rem;
          }

          .mobile-nav-submenu.show {
            max-height: 1000px;
          }

          .mobile-nav-submenu-level2,
          .mobile-nav-submenu-level3 {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            padding-left: 1rem;
          }

          .mobile-nav-submenu-level2.show,
          .mobile-nav-submenu-level3.show {
            max-height: 1000px;
          }

          .mobile-nav-submenu-header {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 0;
          }

          .mobile-nav-submenu-arrow {
            transition: transform 0.3s ease;
            font-size: 0.7rem;
            color: #06038F;
          }

          .mobile-nav-submenu-arrow.rotated {
            transform: rotate(180deg);
          }

          .mobile-nav-link {
            display: block;
            padding: 0.5rem 0;
            color: #333;
            text-decoration: none;
            border-bottom: 1px solid #f0f0f0;
          }

          .mobile-nav-link:hover {
            color: #06038F;
            background-color: #f8f9fa;
          }

          /* Offcanvas styles */
          .offcanvas-start {
            width: 280px;
            transition: transform 0.3s ease-in-out;
          }
        `}
      </style>

      <header className={`primary-header ${isHomePage && !isMobile ? 'home-header' : ''} ${isScrolled || isMobile ? 'scrolled' : ''}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="navbar-brand-wrapper d-flex align-items-center">
              <Link className="navbar-brand primary-logo" to="/">
                <img
                  src={NeiPrimaryLogo}
                  alt="NEIEA Logo"
                  height={isMobile ? "50px" : "80px"}
                />
              </Link>
              <Link className="navbar-brand" to="/">
                <img
                  src={NeiSecondaryLogo}
                  alt="NEIEA Secondary Logo"
                  height={isMobile ? "50px" : "80px"}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-collapse d-none d-lg-flex">
              <ul className="navbar-nav me-auto">
                {/* About Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    aria-expanded="false"
                    title="About"
                  >
                    About
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/about-us/introduction" className="dropdown-item" title="Introduction">
                        Introduction
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us/leadership" className="dropdown-item" title="Leadership">
                        Leadership
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      <Link to="#" className="dropdown-item dropdown-toggle" title="Our Working Model">
                        Our Working Model
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="dropdown-submenu">
                          <Link to="#" className="dropdown-item dropdown-toggle" title="Blended Learning Model">
                            Blended Learning Model
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                to="/about-us/working-model/blended-learning/discourse-oriented-pedagogy"
                                className="dropdown-item"
                                title="Discourse Oriented Pedagogy"
                              >
                                Discourse Oriented Pedagogy
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/about-us/working-model/blended-learning/application-of-technology"
                                className="dropdown-item"
                                title="Application Of Technology"
                              >
                                Application Of Technology
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link
                            to="/about-us/working-model/partnering-institutions"
                            className="dropdown-item"
                            title="Partnering with Educational Institutions"
                          >
                            Partnering with Educational Institutions
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about-us/working-model/remote-learning"
                            className="dropdown-item"
                            title="Remote Individual Learning"
                          >
                            Remote Individual Learning
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/about-us/testimonials" className="dropdown-item" title="Testimonials & Featured stories">
                        Testimonials & Featured stories
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      <Link to="#" className="dropdown-item dropdown-toggle" title="Media and Events">
                        Media and Events
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/about-us/media-events/gallery" className="dropdown-item" title="Gallery">
                            Gallery
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/about-us/reports-financials" className="dropdown-item" title="Reports and Financials">
                        Reports and Financials
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us/contact" className="dropdown-item" title="Contact us">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Our Work Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    aria-expanded="false"
                    title="Our Work"
                  >
                    Our Work
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu">
                      <Link to="#" className="dropdown-item dropdown-toggle" title="Education">
                        Education
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="/our-works/education/elementary-middle-school"
                            className="dropdown-item"
                            title="Elementary & Middle School"
                          >
                            Elementary & Middle School
                          </Link>
                        </li>
                        <li>
                          <Link to="/our-works/education/slum-children" className="dropdown-item" title="Slum children">
                            Slum children
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/our-works/education/public-government-school"
                            className="dropdown-item"
                            title="Public (Government) School"
                          >
                            Public (Government) School
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/our-works/education/girls-education"
                            className="dropdown-item"
                            title="Girl's Education"
                          >
                            Girl's Education
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/our-works/education/out-of-school-dropout"
                            className="dropdown-item"
                            title="Out of school / School Dropout"
                          >
                            Out of school / School Dropout
                          </Link>
                        </li>
                        <li>
                          <Link to="/our-works/education/madrasa" className="dropdown-item" title="Madrasa">
                            Madrasa
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/our-works/teachers-training" className="dropdown-item" title="Teachers Training">
                        Teachers Training
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      <Link to="#" className="dropdown-item dropdown-toggle" title="Skills Training">
                        Skills Training
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/our-works/skills-training/soft-skills" className="dropdown-item" title="Soft Skill Training">
                            Soft Skill Training
                          </Link>
                        </li>
                        <li>
                          <Link to="/our-works/skills-training/technical-skills" className="dropdown-item" title="Technical Skill Training">
                            Technical Skill Training
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/our-works/adult-education" className="dropdown-item" title="Adult Education">
                        Adult Education
                      </Link>
                    </li>
                    <li>
                      <Link to="/our-works/global-education" className="dropdown-item" title="Global Education">
                        Global Education
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Courses Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    aria-expanded="false"
                    title="Courses"
                  >
                    Courses
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/courses/english" className="dropdown-item" title="English Courses">
                        English Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/math" className="dropdown-item" title="Math Courses">
                        Math Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/science" className="dropdown-item" title="Science Courses">
                        Science Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/social-science" className="dropdown-item" title="Social Science Courses">
                        Social Science Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/technical" className="dropdown-item" title="Technical Courses">
                        Technical Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/financial-literacy" className="dropdown-item" title="Financial & Literacy Courses">
                        Financial & Literacy Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/nios" className="dropdown-item" title="NIOS Courses">
                        NIOS Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/cbse" className="dropdown-item" title="CBSE Courses">
                        CBSE Courses
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Partners Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    aria-expanded="false"
                    title="Partners"
                  >
                    Partners
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/partners/join" className="dropdown-item" title="Join NEIEA as a Partner">
                        Join NEIEA as a Partner
                      </Link>
                    </li>
                    <li>
                      <Link to="/partners/institutions" className="dropdown-item" title="Partnering Institutions">
                        Partnering Institutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/partners/global" className="dropdown-item" title="Global Partners">
                        Global Partners
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Donation Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    aria-expanded="false"
                    title="Donation"
                  >
                    Donation
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/donation/be-partner" className="dropdown-item" title="Be a Partner">
                        Be a Partner
                      </Link>
                    </li>
                    <li>
                      <Link to="/donation/volunteer" className="dropdown-item" title="Volunteer">
                        Volunteer
                      </Link>
                    </li>
                    <li>
                      <Link to="/donate" className="dropdown-item" title="Donate">
                        Donate
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* NEI USA Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    aria-expanded="false"
                    title="NEI USA"
                  >
                    NEI USA
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/nei-usa/introduction" className="dropdown-item" title="Introduction">
                        Introduction
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="d-none d-lg-block">
                <Link to="/donate" className="btn donate-btn btn-yellow donate-button">
                  DONATE
                </Link>
              </div>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="d-flex align-items-center d-lg-none">
              <Link to="/donate" className="btn donate-btn btn-yellow donate-button me-2">
                DONATE
              </Link>
              <button
                className="navbar-toggler mob-nav-cta"
                type="button"
                onClick={handleMobileNavToggle}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Backdrop */}
        {isMobileNavOpen && (
          <div
            className="offcanvas-backdrop fade show"
            onClick={handleMobileNavToggle}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 1040,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
          ></div>
        )}

        {/* Mobile Offcanvas Navigation */}
        <div
          className={`offcanvas offcanvas-start ${isMobileNavOpen ? 'show' : ''}`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1050,
            width: '280px',
            height: '100vh',
            transform: isMobileNavOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
            backgroundColor: '#fff',
            boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="offcanvas-header">
            <div className="navbar-brand-wrapper d-flex align-items-center">
              <Link className="navbar-brand primary-logo" to="/" onClick={closeMobileNav}>
                <img src={NeiPrimaryLogo} alt="NEIEA Logo" height="50px" />
              </Link>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={handleMobileNavToggle}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav mobile-nav-list">
              {/* About Section */}
              <li className="nav-item">
                <div className="mobile-nav-section">
                  <div className="mobile-nav-header" onClick={() => toggleMobileNav('about')}>
                    <span className="mobile-nav-title">About</span>
                    <span className={`mobile-nav-arrow ${mobileNavState.about ? 'rotated' : ''}`}>▼</span>
                  </div>
                  <ul className={`mobile-nav-submenu ${mobileNavState.about ? 'show' : ''}`}>
                    <li>
                      <Link to="/about-us/introduction" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Introduction
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us/leadership" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Leadership
                      </Link>
                    </li>
                    <li className="mobile-nav-submenu-item">
                      <div className="mobile-nav-submenu-header" onClick={() => toggleMobileNav('workingModel')}>
                        <span className="mobile-nav-submenu-title">Our Working Model</span>
                        <span className={`mobile-nav-submenu-arrow ${mobileNavState.workingModel ? 'rotated' : ''}`}>▼</span>
                      </div>
                      <ul className={`mobile-nav-submenu-level2 ${mobileNavState.workingModel ? 'show' : ''}`}>
                        <li className="mobile-nav-submenu-item">
                          <div className="mobile-nav-submenu-header" onClick={() => toggleMobileNav('blendedLearning')}>
                            <span className="mobile-nav-submenu-title">Blended Learning Model</span>
                            <span className={`mobile-nav-submenu-arrow ${mobileNavState.blendedLearning ? 'rotated' : ''}`}>▼</span>
                          </div>
                          <ul className={`mobile-nav-submenu-level3 ${mobileNavState.blendedLearning ? 'show' : ''}`}>
                            <li>
                              <Link
                                to="/about-us/working-model/blended-learning/discourse-oriented-pedagogy"
                                className="mobile-nav-link"
                                onClick={handleMobileLinkClick}
                              >
                                Discourse Oriented Pedagogy
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/about-us/working-model/blended-learning/application-of-technology"
                                className="mobile-nav-link"
                                onClick={handleMobileLinkClick}
                              >
                                Application Of Technology
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/about-us/working-model/partnering-institutions" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                            Partnering with Educational Institutions
                          </Link>
                        </li>
                        <li>
                          <Link to="/about-us/working-model/remote-learning" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                            Remote Individual Learning
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/about-us/testimonials" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Testimonials & Featured stories
                      </Link>
                    </li>
                    <li className="mobile-nav-submenu-item">
                      <div className="mobile-nav-submenu-header" onClick={() => toggleMobileNav('mediaEvents')}>
                        <span className="mobile-nav-submenu-title">Media and Events</span>
                        <span className={`mobile-nav-submenu-arrow ${mobileNavState.mediaEvents ? 'rotated' : ''}`}>▼</span>
                      </div>
                      <ul className={`mobile-nav-submenu-level2 ${mobileNavState.mediaEvents ? 'show' : ''}`}>
                        <li>
                          <Link to="/about-us/media-events/gallery" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                            Gallery
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/about-us/reports-financials" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Reports and Financials
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us/contact" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Our Work Section */}
              <li className="nav-item">
                <div className="mobile-nav-section">
                  <div className="mobile-nav-header" onClick={() => toggleMobileNav('ourWork')}>
                    <span className="mobile-nav-title">Our Work</span>
                    <span className={`mobile-nav-arrow ${mobileNavState.ourWork ? 'rotated' : ''}`}>▼</span>
                  </div>
                  <ul className={`mobile-nav-submenu ${mobileNavState.ourWork ? 'show' : ''}`}>
                    <li className="mobile-nav-submenu-item">
                      <div className="mobile-nav-submenu-header" onClick={() => toggleMobileNav('education')}>
                        <span className="mobile-nav-submenu-title">Education</span>
                        <span className={`mobile-nav-submenu-arrow ${mobileNavState.education ? 'rotated' : ''}`}>▼</span>
                      </div>
                      <ul className={`mobile-nav-submenu-level2 ${mobileNavState.education ? 'show' : ''}`}>
                        <li>
                          <Link to="/our-works/education/elementary-middle-school" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                            Elementary & Middle School
                          </Link>
                        </li>
                        <li>
                          <Link to="/our-works/education/slum-children" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                            Slum children
                          </Link>
                        </li>
                        <li>
                          <Link to="/our-works/education/public-government-school" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                            Public (Government) School
                          </Link>
                        </li>
                        <li>
                          <Link to="/our-works/education/girls-education" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                            Girl's Education
                          </Link>
                        </li>
                        <li>
                          <Link to="/our-works/education/out-of-school-dropout" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                            Out of school / School Dropout
                          </Link>
                        </li>
                        <li>
                          <Link to="/our-works/education/madrasa" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                            Madrasa
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/our-works/teachers-training" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Teachers Training
                      </Link>
                    </li>
                    <li className="mobile-nav-submenu-item">
                      <div className="mobile-nav-submenu-header" onClick={() => toggleMobileNav('skillsTraining')}>
                        <span className="mobile-nav-submenu-title">Skills Training</span>
                        <span className={`mobile-nav-submenu-arrow ${mobileNavState.skillsTraining ? 'rotated' : ''}`}>▼</span>
                      </div>
                      <ul className={`mobile-nav-submenu-level2 ${mobileNavState.skillsTraining ? 'show' : ''}`}>
                        <li>
                          <Link to="/our-works/skills-training/soft-skills" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                            Soft Skill Training
                          </Link>
                        </li>
                        <li>
                          <Link to="/our-works/skills-training/technical-skills" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                            Technical Skill Training
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/our-works/adult-education" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Adult Education
                      </Link>
                    </li>
                    <li>
                      <Link to="/our-works/global-education" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Global Education
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Courses Section */}
              <li className="nav-item">
                <div className="mobile-nav-section">
                  <div className="mobile-nav-header" onClick={() => toggleMobileNav('courses')}>
                    <span className="mobile-nav-title">Courses</span>
                    <span className={`mobile-nav-arrow ${mobileNavState.courses ? 'rotated' : ''}`}>▼</span>
                  </div>
                  <ul className={`mobile-nav-submenu ${mobileNavState.courses ? 'show' : ''}`}>
                    <li>
                      <Link to="/courses/english" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        English Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/math" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Math Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/science" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Science Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/social-science" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Social Science Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/technical" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Technical Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/financial-literacy" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Financial & Literacy Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/nios" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        NIOS Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/cbse" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        CBSE Courses
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Partners Section */}
              <li className="nav-item">
                <div className="mobile-nav-section">
                  <div className="mobile-nav-header" onClick={() => toggleMobileNav('partners')}>
                    <span className="mobile-nav-title">Partners</span>
                    <span className={`mobile-nav-arrow ${mobileNavState.partners ? 'rotated' : ''}`}>▼</span>
                  </div>
                  <ul className={`mobile-nav-submenu ${mobileNavState.partners ? 'show' : ''}`}>
                    <li>
                      <Link to="/partners/join" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Join NEIEA as a Partner
                      </Link>
                    </li>
                    <li>
                      <Link to="/partners/institutions" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Partnering Institutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/partners/global" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Global Partners
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Donation Section */}
              <li className="nav-item">
                <div className="mobile-nav-section">
                  <div className="mobile-nav-header" onClick={() => toggleMobileNav('donation')}>
                    <span className="mobile-nav-title">Donation</span>
                    <span className={`mobile-nav-arrow ${mobileNavState.donation ? 'rotated' : ''}`}>▼</span>
                  </div>
                  <ul className={`mobile-nav-submenu ${mobileNavState.donation ? 'show' : ''}`}>
                    <li>
                      <Link to="/donation/be-partner" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Be a Partner
                      </Link>
                    </li>
                    <li>
                      <Link to="/donation/volunteer" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Volunteer
                      </Link>
                    </li>
                    <li>
                      <Link to="/donate" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Donate
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* NEI USA Section */}
              <li className="nav-item">
                <div className="mobile-nav-section">
                  <div className="mobile-nav-header" onClick={() => toggleMobileNav('neiUsa')}>
                    <span className="mobile-nav-title">NEI USA</span>
                    <span className={`mobile-nav-arrow ${mobileNavState.neiUsa ? 'rotated' : ''}`}>▼</span>
                  </div>
                  <ul className={`mobile-nav-submenu ${mobileNavState.neiUsa ? 'show' : ''}`}>
                    <li>
                      <Link to="/nei-usa/introduction" className="mobile-nav-link" onClick={handleMobileLinkClick}>
                        Introduction
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Search Form */}
        <div className={`header-search-wrp ${showSearch ? 'show' : ''}`}>
          <form action="#" className="header-search" role="search" onSubmit={handleSearchSubmit}>
            <div className="container">
              <button type="button" id="close-search" onClick={closeSearch}>
                Close
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.53384 24.4107L7.58984 23.4667L15.0565 16L7.58984 8.53336L8.53384 7.58936L16.0005 15.056L23.4672 7.58936L24.4112 8.53336L16.9445 16L24.4112 23.4667L23.4672 24.4107L16.0005 16.944L8.53384 24.4107Z" fill="#464646" />
                </svg>
              </button>
              <div className="form">
                <p>Search</p>
                <input
                  className="form-control"
                  name="s"
                  type="search"
                  placeholder="Type a keyword"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button title="submit" type="submit">
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="#06038F" />
                    <path d="M20.9219 28L28.0005 21L20.9219 14" stroke="#06038F" strokeWidth="1.5" />
                    <path d="M13.8438 21H28.0011" stroke="#06038F" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;
