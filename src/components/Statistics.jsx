import React, { useState, useEffect, useRef } from 'react';

const Statistics = () => {
  const [counters, setCounters] = useState({
    statOne: 0,
    statTwo: 0,
    statThree: 0,
    statFour: 0,
    statFive: 0,
    statSix: 0,
    statSeven: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const targetValues = {
    statOne: 16,
    statTwo: 63,
    statThree: 94,
    statFour: 2000,
    statFive: 6182,
    statSix: 10612,
    statSeven: 16801
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targetValues).forEach((key) => {
      const target = targetValues[key];
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });
  };

  return (
    <section className="home-stats p-fade-anim section-padding safe-area-bottom h-auto-responsive" ref={statsRef}>
      <div className="container container-responsive">
        <div className="row">
          <div className="col-12 text-center mb-3">
            <h2 className="section-title text-responsive-3xl font-bold text-white mb-2">Our Impact in Numbers</h2>
            <p className="section-subtitle text-responsive-lg text-white opacity-90">Transforming education through innovative approaches and meaningful partnerships</p>
          </div>
        </div>
        <div className="row gap-mobile">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
            <div className="hs-cont stats-card text-center spacing-responsive-sm h-auto-responsive w-auto-responsive">
              <h4 className="text-responsive-3xl font-bold text-white mb-2">
                <span id="home-stat-one" style={{display: 'none'}}>16</span>
                <span className="home-stat-one">{counters.statOne}</span>+
              </h4>
              <p className="text-responsive-base text-white opacity-90">Online Courses</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
            <div className="hs-cont stats-card text-center spacing-responsive-sm h-auto-responsive w-auto-responsive">
              <h4 className="text-responsive-3xl font-bold text-white mb-2">
                <span id="home-stat-two" style={{display: 'none'}}>63</span>
                <span className="home-stat-two">{counters.statTwo}</span>+
              </h4>
              <p className="text-responsive-base text-white opacity-90">Live Online Classes</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
            <div className="hs-cont stats-card text-center spacing-responsive-sm h-auto-responsive w-auto-responsive">
              <h4 className="text-responsive-3xl font-bold text-white mb-2">
                <span id="home-stat-three" style={{display: 'none'}}>94</span>
                <span className="home-stat-three">{counters.statThree}</span>+
              </h4>
              <p className="text-responsive-base text-white opacity-90">Partnerships</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
            <div className="hs-cont stats-card text-center spacing-responsive-sm h-auto-responsive w-auto-responsive">
              <h4 className="text-responsive-3xl font-bold text-white mb-2">
                <span id="home-stat-four" style={{display: 'none'}}>2000</span>
                <span className="home-stat-four">{counters.statFour.toLocaleString()}</span>+
              </h4>
              <p className="text-responsive-base text-white opacity-90">Teachers Trained</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mb-lg-0">
            <div className="hs-cont stats-card text-center spacing-responsive-sm h-auto-responsive w-auto-responsive">
              <h4 className="text-responsive-2xl font-bold text-white mb-2">
                <span id="home-stat-five" style={{display: 'none'}}>6182</span>
                <span className="home-stat-five">{counters.statFive.toLocaleString()}</span>+
              </h4>
              <p className="text-responsive-sm text-white opacity-90">Institutional Enrollments</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mb-lg-0">
            <div className="hs-cont stats-card text-center spacing-responsive-sm h-auto-responsive w-auto-responsive">
              <h4 className="text-responsive-2xl font-bold text-white mb-2">
                <span id="home-stat-six" style={{display: 'none'}}>10612</span>
                <span className="home-stat-six">{counters.statSix.toLocaleString()}</span>+
              </h4>
              <p className="text-responsive-sm text-white opacity-90">Individual Enrollments</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mb-lg-0">
            <div className="hs-cont stats-card text-center spacing-responsive-sm h-auto-responsive w-auto-responsive">
              <h4 className="text-responsive-2xl font-bold text-white mb-2">
                <span id="home-stat-seven" style={{display: 'none'}}>16801</span>
                <span className="home-stat-seven">{counters.statSeven.toLocaleString()}</span>+
              </h4>
              <p className="text-responsive-sm text-white opacity-90">Total Enrollments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;