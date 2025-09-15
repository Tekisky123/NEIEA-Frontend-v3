import React, { useState } from 'react';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <>
      <header className="primary-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Brand/Logo Section */}
            <div className="navbar-brand-wrapper d-flex align-items-center">
              <a className="navbar-brand primary-logo" href="#">
                <img src="/assets/images/primary-logo.svg" alt="Indiaspora Logo" />
              </a>
              <a className="navbar-brand" href="#">
                <img src="/assets/images/secondary-logo.svg" alt="Indiaspora Secondary Logo" />
              </a>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="navbar-collapse d-none d-lg-flex">
              <ul className="navbar-nav me-auto">
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                  <ul className="dropdown-menu">
                    <li><a href="#" className="dropdown-item">Mission</a></li>
                    <li><a href="#" className="dropdown-item">Board of Directors</a></li>
                    <li><a href="#" className="dropdown-item">Members</a></li>
                    <li><a href="#" className="dropdown-item">Ambassadors</a></li>
                    <li><a href="#" className="dropdown-item">Team</a></li>
                    <li><a href="#" className="dropdown-item">Careers</a></li>
                    <li><a href="#" className="dropdown-item">Donate</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Impact</a>
                  <ul className="dropdown-menu">
                    <li><a href="#" className="dropdown-item">US Impact Report</a></li>
                    <li><a href="#" className="dropdown-item">UAE Impact Report</a></li>
                    <li><a href="#" className="dropdown-item">Civic Engagement & Social Impact</a></li>
                    <li><a href="#" className="dropdown-item">Entrepreneurship & Innovation</a></li>
                    <li><a href="#" className="dropdown-item">Global Programs</a></li>
                    <li><a href="#" className="dropdown-item">Philanthropy</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Icons</a>
                  <ul className="dropdown-menu">
                    <li><a href="#" className="dropdown-item">Indiaspora Lists</a></li>
                    <li><a href="#" className="dropdown-item">Inspiring Icons</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Events</a>
                  <ul className="dropdown-menu">
                    <li><a href="#" className="dropdown-item">Flagship Events</a></li>
                    <li><a href="#" className="dropdown-item">More Events</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Media</a>
                  <ul className="dropdown-menu">
                    <li><a href="#" className="dropdown-item">Blogs</a></li>
                    <li><a href="#" className="dropdown-item">Feature Stories</a></li>
                    <li><a href="#" className="dropdown-item">Press Releases</a></li>
                    <li><a href="#" className="dropdown-item">Thought Leadership</a></li>
                    <li><a href="#" className="dropdown-item">Newsletters</a></li>
                    <li><a href="#" className="dropdown-item">YouTube Channel</a></li>
                  </ul>
                </li>
              </ul>
              
              {/* Desktop Search Button */}
              <div className="d-none d-lg-block">
                <button title="search" type="button" className="btn header-search-toggle desk-search-btn" onClick={handleSearchToggle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#54565B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#54565B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="d-flex align-items-center d-lg-none">
              <button title="search" type="button" className="btn header-search-toggle mob-search-btn me-2" onClick={handleSearchToggle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#54565B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#54565B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              <button className="navbar-toggler mob-nav-cta" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Offcanvas Navigation */}
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="dropdown-item">Mission</a></li>
                  <li><a href="#" className="dropdown-item">Board of Directors</a></li>
                  <li><a href="#" className="dropdown-item">Members</a></li>
                  <li><a href="#" className="dropdown-item">Ambassadors</a></li>
                  <li><a href="#" className="dropdown-item">Team</a></li>
                  <li><a href="#" className="dropdown-item">Careers</a></li>
                  <li><a href="#" className="dropdown-item">Donate</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Impact</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="dropdown-item">US Impact Report</a></li>
                  <li><a href="#" className="dropdown-item">UAE Impact Report</a></li>
                  <li><a href="#" className="dropdown-item">Civic Engagement & Social Impact</a></li>
                  <li><a href="#" className="dropdown-item">Entrepreneurship & Innovation</a></li>
                  <li><a href="#" className="dropdown-item">Global Programs</a></li>
                  <li><a href="#" className="dropdown-item">Philanthropy</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Icons</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="dropdown-item">Indiaspora Lists</a></li>
                  <li><a href="#" className="dropdown-item">Inspiring Icons</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Events</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="dropdown-item">Flagship Events</a></li>
                  <li><a href="#" className="dropdown-item">More Events</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Media</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="dropdown-item">Blogs</a></li>
                  <li><a href="#" className="dropdown-item">Feature Stories</a></li>
                  <li><a href="#" className="dropdown-item">Press Releases</a></li>
                  <li><a href="#" className="dropdown-item">Thought Leadership</a></li>
                  <li><a href="#" className="dropdown-item">Newsletters</a></li>
                  <li><a href="#" className="dropdown-item">YouTube Channel</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Search Form */}
        <div className={`header-search-wrp ${showSearch ? 'show' : ''}`}>
          <form action="#" className="header-search" role="search" onSubmit={handleSearchSubmit}>
            <div className="container">
              <button type="button" id="close-search" onClick={closeSearch}>Close 
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.53384 24.4107L7.58984 23.4667L15.0565 16L7.58984 8.53336L8.53384 7.58936L16.0005 15.056L23.4672 7.58936L24.4112 8.53336L16.9445 16L24.4112 23.4667L23.4672 24.4107L16.0005 16.944L8.53384 24.4107Z" fill="#464646"></path>
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
                    <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="#06038F"></rect>
                    <path d="M20.9219 28L28.0005 21L20.9219 14" stroke="#06038F" strokeWidth="1.5"></path>
                    <path d="M13.8438 21H28.0011" stroke="#06038F" strokeWidth="1.5"></path>
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