import React, { useState, useEffect, useRef } from 'react';

const Statistics = () => {
  const [counters, setCounters] = useState({
    statOne: 0,
    statTwo: 0,
    statThree: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const targetValues = {
    statOne: 15000,
    statTwo: 15,
    statThree: 50
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
    <section className="home-stats p-fade-anim" ref={statsRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="hs-cont">
              <h4>
                <span id="home-stat-one" style={{display: 'none'}}>15000</span>
                <span className="home-stat-one">{counters.statOne}</span>+
              </h4>
              <p>Diaspora leaders actively engaged in communities worldwide.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="hs-cont">
              <h4>
                <span id="home-stat-two" style={{display: 'none'}}>15</span>
                <span>$</span>
                <span className="home-stat-two">{counters.statTwo}</span>M+
              </h4>
              <p>Raised with our partners for Covid-19 relief in India.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="hs-cont">
              <h4>
                <span id="home-stat-three" style={{display: 'none'}}>50</span>
                <span className="home-stat-three">{counters.statThree}</span>+
              </h4>
              <p>Events hosted annually to inspire and connect the Indian diaspora.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;