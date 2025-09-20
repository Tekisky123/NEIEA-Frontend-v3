import React, { useEffect, useState } from 'react';
// Using public path for consistency with other components
const slider1 = '/assets/images/resized_classroom_image.png';
const slider2 = '/assets/images/resized_classroom_image2.png';
const slider3 = '/assets/images/slider5 (1).jpg';
const slider4 = '/assets/images/slider6 (1).jpeg';
const slider5 = '/assets/images/homesider6image.jpg';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { img: slider1, alt: "Philanthropy Summit" },
    { img: slider2, alt: "US Forum" },
    { img: slider3, alt: "Impact Report" },
    { img: slider4, alt: "New Event" },
    { img: slider5, alt: "Home Slider 6" }
  ];

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      const newIsMobile = window.innerWidth <= 767;
      setIsMobile(newIsMobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Separate effect for mobile auto-advance
  useEffect(() => {
    if (!isMobile) return;

    console.log('Starting mobile carousel auto-advance');
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        const nextSlide = (prev + 1) % slides.length;
        console.log(`Mobile carousel advancing from ${prev} to ${nextSlide}`);
        return nextSlide;
      });
    }, 2000);

    return () => {
      console.log('Clearing mobile carousel auto-advance');
      clearInterval(interval);
    };
  }, [isMobile, slides.length]);

  // Separate effect for desktop Owl Carousel
  useEffect(() => {
    if (isMobile) return;

    const initOwlCarousel = () => {
      try {
        if (window.$ && window.$.fn.owlCarousel) {
          const $carousel = $('.banner-car');
          
          // Destroy existing carousel first
          if ($carousel.hasClass('owl-loaded')) {
            $carousel.trigger('destroy.owl.carousel');
            $carousel.removeClass('owl-carousel owl-theme owl-loaded');
          }
          
          // Initialize fresh carousel
          if ($carousel.length) {
            $carousel.addClass('owl-carousel owl-theme').owlCarousel({
              items: 1,
              loop: true,
              autoplay: true,
              autoplayTimeout: 2000,
              autoplayHoverPause: false, // Disable pause on hover to ensure continuous autoplay
              autoplaySpeed: 800,
              smartSpeed: 800,
              nav: false,
              dots: true,
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              mouseDrag: true,
              touchDrag: true,
              pullDrag: true,
              freeDrag: false,
              margin: 0,
              stagePadding: 0,
              merge: false,
              mergeFit: true,
              autoWidth: false,
              startPosition: 0,
              rtl: false,
              center: false,
              onInitialized: (event) => {
                console.log('Owl Carousel initialized successfully with autoplay');
                // Force start autoplay
                setTimeout(() => {
                  if (event.target && event.target.owlCarousel) {
                    $(event.target).trigger('play.owl.autoplay', [2000]);
                  }
                }, 1000);
              },
              onChanged: (event) => {
                console.log('Slide changed to:', event.item.index);
              }
            });
            
            // Force enable autoplay after initialization
            setTimeout(() => {
              $carousel.trigger('play.owl.autoplay', [2000]);
            }, 500);
          }
        } else {
          // Wait for scripts to load for desktop
          const retryCount = (window.bannerRetryCount || 0) + 1;
          if (retryCount < 30) {
            window.bannerRetryCount = retryCount;
            setTimeout(initOwlCarousel, 200);
          }
        }
      } catch (error) {
        console.warn('Owl Carousel initialization error:', error);
      }
    };

    const timeoutId = setTimeout(initOwlCarousel, 500);

    return () => {
      clearTimeout(timeoutId);
      try {
        if (window.$ && window.$.fn.owlCarousel) {
          const $carousel = $('.banner-car');
          if ($carousel.length && $carousel.hasClass('owl-loaded')) {
            $carousel.trigger('stop.owl.autoplay');
            $carousel.trigger('destroy.owl.carousel');
            $carousel.removeClass('owl-carousel owl-theme owl-loaded');
          }
        }
      } catch (error) {
        console.warn('Owl Carousel cleanup error:', error);
      }
    };
  }, [isMobile]);

  // Handle touch events for mobile swiper with error handling
  const handleTouchStart = (e) => {
    try {
      if (!isMobile || !e.touches || !e.touches[0]) return;
      const touch = e.touches[0];
      setTouchStart(touch.clientX);
      setTouchEnd(null);
    } catch (error) {
      console.warn('Touch start error:', error);
    }
  };

  const handleTouchMove = (e) => {
    try {
      if (!isMobile || !touchStart || !e.touches || !e.touches[0]) return;
      const touch = e.touches[0];
      setTouchEnd(touch.clientX);
    } catch (error) {
      console.warn('Touch move error:', error);
    }
  };

  const handleTouchEnd = () => {
    try {
      if (!isMobile || touchStart === null || touchEnd === null) return;
      
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isLeftSwipe) {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      } else if (isRightSwipe) {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
      }

      setTouchStart(null);
      setTouchEnd(null);
    } catch (error) {
      console.warn('Touch end error:', error);
      setTouchStart(null);
      setTouchEnd(null);
    }
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Error boundary component
  const ErrorBoundary = ({ children, fallback = null }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      setHasError(false);
    }, [isMobile]);

    if (hasError) {
      return fallback;
    }

    return children;
  };

  return (
    <section className="banner" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="banner-body">
        <ErrorBoundary fallback={<div>Loading carousel...</div>}>
          {isMobile ? (
            // Mobile Swiper Carousel
            <div 
              key="mobile-carousel"
              className="mobile-swiper-container"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden'
              }}
            >
              <div 
                className="mobile-swiper-wrapper"
                style={{
                  display: 'flex',
                  width: `${slides.length * 100}%`,
                  height: '100%',
                  transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
                  transition: 'transform 0.3s ease-in-out'
                }}
              >
                {slides.map((slide, index) => (
                  <div 
                    key={`mobile-slide-${index}`}
                    className="mobile-slide"
                    style={{
                      width: `${100 / slides.length}%`,
                      height: '100%',
                      position: 'relative'
                    }}
                  >
                    <img 
                      src={slide.img} 
                      alt={slide.alt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      onError={(e) => {
                        console.warn('Image load error:', slide.img);
                        e.target.style.display = 'none';
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block'
                      }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Mobile Pagination Dots */}
              <div 
                className="mobile-pagination"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px',
                  zIndex: 10
                }}
              >
                {slides.map((_, index) => (
                  <button
                    key={`mobile-dot-${index}`}
                    onClick={() => {
                      try {
                        setCurrentSlide(index);
                      } catch (error) {
                        console.warn('Dot click error:', error);
                      }
                    }}
                    style={{
                      width: currentSlide === index ? '30px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: currentSlide === index ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Desktop Owl Carousel
            <div key="desktop-carousel" className="owl-carousel owl-theme banner-car">
              {slides.map((slide, index) => (
                <div key={`desktop-slide-${index}`} className="item">
                  <img 
                    className="main-img home-banner-desk" 
                    src={slide.img} 
                    alt={slide.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    onError={(e) => {
                      console.warn('Desktop image load error:', slide.img);
                    }}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <img 
                    className="main-img home-banner-mob" 
                    src={slide.img} 
                    alt={slide.alt}
                    loading="lazy"
                    onError={(e) => {
                      console.warn('Mobile image load error:', slide.img);
                    }}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <div className="container">
                    {/* Content can be added here if needed */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ErrorBoundary>
      </div>

      {/* Scroll Mouse Indicator */}
      <div className="mouse-indi-wrap d-flex flex-column align-items-center">
        <div className="mouse-wrap position-relative">
          <svg className="rect-outer" xmlns="http://www.w3.org/2000/svg" width="26" height="40" viewBox="0 0 26 40" fill="none">
            <rect x="1" y="1" width="24" height="37.7143" rx="12" fill="black" fillOpacity="0.15" stroke="white" strokeWidth="2"></rect>
          </svg>
          <svg className="rect-line" xmlns="http://www.w3.org/2000/svg" width="2" height="7" viewBox="0 0 2 7" fill="none">
            <path d="M1 0L1 6.42857" stroke="white" strokeWidth="2"></path>
          </svg>
        </div>
        <div className="scroll-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
            <path d="M1 1L6.5 6L12 1" stroke="white" strokeWidth="2"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Banner;
