import React, { useEffect, useRef, useState } from "react";

const MAP_CENTER: [number, number] = [73.1762426, 18.8934723];

const About = () => {
  const mapElement = useRef(null);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    { icon: "🏫", title: "14-Acre Campus", desc: "Sprawling green campus" },
    { icon: "🔬", title: "Advanced Labs", desc: "State-of-the-art facilities" },
    { icon: "👨‍🏫", title: "Expert Faculty", desc: "Industry professionals" },
    { icon: "📚", title: "Rich Library", desc: "Vast knowledge resources" }
  ];

  useEffect(() => {
    if (!mapElement.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(mapElement.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="about-section">
      <style>{`
        .about-section {
          min-height: 100vh;
          padding: 6rem 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(231, 88, 41, 0.1), transparent 70%);
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .content-left {
          opacity: 0;
          transform: translateX(-50px);
          animation: slideInLeft 0.8s ease forwards;
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .section-badge {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          background: rgba(231, 88, 41, 0.15);
          border: 1px solid rgba(231, 88, 41, 0.4);
          border-radius: 50px;
          color: #e75829;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .about-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          background: linear-gradient(135deg, #e75829 0%, #FFD47C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .about-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 0;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #e75829, transparent);
          border-radius: 2px;
        }

        .about-description {
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2.5rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.2rem;
          margin-top: 2rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.2rem;
          transition: all 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        .feature-card:hover {
          background: rgba(231, 88, 41, 0.08);
          border-color: rgba(231, 88, 41, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(231, 88, 41, 0.2);
        }

        .feature-card.active {
          background: rgba(231, 88, 41, 0.1);
          border-color: #e75829;
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: 0.8rem;
          display: block;
          filter: grayscale(0.3);
          transition: filter 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          filter: grayscale(0);
        }

        .feature-title {
          font-size: 1rem;
          font-weight: 600;
          color: #FFD47C;
          margin-bottom: 0.3rem;
        }

        .feature-desc {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .content-right {
          opacity: 0;
          transform: translateX(50px);
          animation: slideInRight 0.8s ease 0.2s forwards;
        }

        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .map-section-title {
          font-size: 2rem;
          font-weight: 600;
          background: linear-gradient(135deg, #e75829 0%, #FFD47C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 2rem;
          text-align: center;
        }

        .map-wrapper {
          position: relative;
        }

        .map-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(231, 88, 41, 0.2);
          transition: all 0.5s ease;
          height: 400px;
          background: rgba(0, 0, 0, 0.3);
        }

        .map-container:hover {
          box-shadow: 
            0 15px 50px rgba(0, 0, 0, 0.7),
            0 0 0 2px rgba(231, 88, 41, 0.4);
          transform: translateY(-5px);
        }

        .maps-card {
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
        }

        .maps-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .map-placeholder {
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
          padding: 2rem;
        }

        .map-placeholder-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.6;
        }

        .map-overlay {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(231, 88, 41, 0.3);
          z-index: 10;
        }

        .map-overlay-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #e75829;
          margin-bottom: 0.3rem;
        }

        .map-overlay-address {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.4;
        }

        .maps-button-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .map-link {
          text-decoration: none;
        }

        .open-maps-btn {
          background: transparent;
          color: #e75829;
          font-weight: 600;
          padding: 14px 40px;
          font-size: 1rem;
          border-radius: 50px;
          border: 2px solid #e75829;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .open-maps-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(231, 88, 41, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .open-maps-btn:hover::before {
          left: 100%;
        }

        .open-maps-btn:hover {
          background: linear-gradient(135deg, #e75829 0%, #F2A03D 100%);
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(231, 88, 41, 0.4);
          border-color: #F2A03D;
        }

        .open-maps-btn:active {
          transform: translateY(-1px);
        }

        .btn-icon {
          font-size: 1.2rem;
        }

        @media (max-width: 968px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-title {
            font-size: 2.5rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .map-container {
            height: 350px;
          }
        }

        @media (max-width: 640px) {
          .about-section {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1.5rem;
          }

          .about-title {
            font-size: 2rem;
          }

          .about-description {
            font-size: 1rem;
          }

          .map-container {
            height: 300px;
          }

          .map-overlay {
            top: 10px;
            left: 10px;
            padding: 0.8rem 1rem;
          }

          .open-maps-btn {
            padding: 12px 32px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="content-grid">
          {/* Left Content */}
          <div className="content-left">
            <span className="section-badge">About Us</span>
            <h1 className="about-title">Pillai HOC College of Engineering & Technology</h1>
            <p className="about-description">
              A premier institution fostering innovation and excellence in engineering education. 
              Our state-of-the-art campus provides students with world-class facilities, 
              experienced faculty, and an environment that nurtures creativity, critical thinking, 
              and technological advancement.
            </p>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <span className="feature-icon">{feature.icon}</span>
                  <div className="feature-title">{feature.title}</div>
                  <div className="feature-desc">{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Map */}
          <div className="content-right">
            <h2 className="map-section-title">Visit Our Campus</h2>
            <div className="map-wrapper">
              <div className="map-container">
                <div className="map-overlay">
                  <div className="map-overlay-title">PHCET Campus</div>
                  <div className="map-overlay-address">
                    Rasayani, Raigad<br/>
                    Maharashtra, India
                  </div>
                </div>
                <div
                  ref={mapElement}
                  className={`maps-card ${isMapVisible ? 'visible' : ''}`}
                >
                  <div className="map-placeholder">
                    <div className="map-placeholder-icon">📍</div>
                    <p>Interactive map displays here</p>
                  </div>
                </div>
              </div>

              <div className="maps-button-wrapper">
                <a
                  href="https://www.google.com/maps/place/Pillai+HOC+College+Of+Engineering+%26+Technology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  <button className="open-maps-btn">
                    <span className="btn-icon">📍</span>
                    <span>Open in Maps</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;