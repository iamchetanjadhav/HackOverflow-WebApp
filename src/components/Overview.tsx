import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HackathonOverview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700;800&display=swap");

        :root {
          --brand-gradient: linear-gradient(90deg, #FCB216 0%, #E85D24 35%, #D91B57 70%, #63205F 100%);
          --text-white: #FFFFFF;
          --text-gray: #B0B0B0;
        }

        .about-section {
          padding: 100px 1rem;
          position: relative;
          overflow: hidden;
          background-color: #0F0F0F;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
          align-items: center;
        }

        .col-left, .col-right {
          padding: 0 15px;
          width: 100%;
        }

        @media (min-width: 992px) {
          .col-left, .col-right {
            width: 50%;
          }
          
          .col-left {
            margin-bottom: 0;
          }
        }

        .col-left {
          margin-bottom: 3rem;
        }

        .about-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 4px;
          color: #FCB216;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .about-title {
          font-family: 'Poppins', sans-serif;
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--text-white);
          margin-bottom: 30px;
        }

        .gradient-text {
          background: var(--brand-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .big-glitch {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .big-glitch:hover {
          transform: scale(1.02) skewX(-5deg);
          text-shadow: 2px 2px 0px #FCB216;
        }

        .decoration-line {
          width: 100px;
          height: 6px;
          background: var(--brand-gradient);
          border-radius: 3px;
        }

        .glass-pane {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 4px;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
          transform: translate3d(0, 0, 0);
        }

        .about-text {
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          color: var(--text-gray);
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .about-text strong {
          color: var(--text-white);
          font-weight: 700;
        }

        .highlight-gold { 
          color: #FCB216; 
          font-weight: 600; 
        }

        .highlight-orange { 
          color: #E85D24; 
          font-weight: 600; 
        }

        .highlight-pink { 
          color: #D91B57; 
          font-weight: 600; 
        }

        .corner-marker {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #E85D24;
          transition: all 0.3s ease;
        }

        .top-left {
          top: -2px;
          left: -2px;
          border-right: none;
          border-bottom: none;
        }

        .bottom-right {
          bottom: -2px;
          right: -2px;
          border-left: none;
          border-top: none;
        }

        .glass-pane:hover .corner-marker {
          width: 100%;
          height: 100%;
          opacity: 0.1;
          background: var(--brand-gradient);
        }

        .stats-row {
          display: flex;
          gap: 30px;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-white);
        }

        .stat-label {
          font-size: 0.85rem;
          color: #FCB216;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 991px) {
          .about-title { 
            font-size: 2.5rem; 
          }
          
          .glass-pane { 
            padding: 30px 20px; 
            margin-top: 40px; 
          }
          
          .stats-row { 
            justify-content: space-between; 
            gap: 10px; 
          }
        }

        @media (max-width: 576px) {
          .about-title {
            font-size: 2rem;
          }

          .about-subtitle {
            font-size: 1rem;
          }

          .stats-row {
            flex-wrap: wrap;
          }

          .stat-number {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="container">
          <div className="row">
            {/* LEFT COLUMN: Big Typography */}
            <div className="col-left">
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h2 
                  className="about-subtitle" 
                  data-aos="fade-right"
                >
                  THE PREMIER HACKATHON
                </h2>
                <h1 
                  className="about-title" 
                  data-aos="fade-right" 
                  data-aos-delay="200"
                >
                  WHAT IS <br />
                  <span className="gradient-text big-glitch">HACKOVERFLOW</span>
                </h1>
                <div 
                  className="decoration-line" 
                  data-aos="fade-right" 
                  data-aos-delay="400"
                ></div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Glass Info Pane */}
            <div className="col-right">
              <div 
                className="glass-pane" 
                data-aos="fade-left" 
                data-aos-delay="400"
              >
                {/* Decorative Corner Markers for 'Tech' feel */}
                <div className="corner-marker top-left"></div>
                <div className="corner-marker bottom-right"></div>

                <p className="about-text">
                  HackOverflow 4.0 is a <strong>3 days national-level hackathon</strong> that brings together the most creative minds in technology. 
                </p>
                <p className="about-text">
                  We don't just write code; we build the future. Whether you are a master of <span className="highlight-gold">AI/ML</span>, a <span className="highlight-orange">Blockchain</span> wizard, or a <span className="highlight-pink">Web3</span> enthusiast, this is your platform to innovate.
                </p>
                
                <div className="stats-row">
                  <div className="stat-item">
                    <span className="stat-number">36h</span>
                    <span className="stat-label">Non-Stop</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">₹100000+</span>
                    <span className="stat-label">Prize Pool</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">250+</span>
                    <span className="stat-label">Hackers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decor */}
        <div className="orb-3"></div>
      </section>
    </>
  );
};

export default HackathonOverview;