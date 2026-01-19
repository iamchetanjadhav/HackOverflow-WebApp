import React, { useState, useEffect } from "react";

const SponsorUs = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { number: "500+", label: "Participants", icon: "👥" },
    { number: "85+", label: "Projects", icon: "💡" },
    { number: "36", label: "Hours", icon: "⏱️" },
    { number: "35+", label: "Colleges", icon: "🎓" }
  ];

  const benefits = [
    {
      id: 1,
      icon: "🎯",
      title: "Brand Visibility",
      desc: "Get your brand in front of 500+ tech enthusiasts and innovators",
      color: "#FCB216"
    },
    {
      id: 2,
      icon: "🤝",
      title: "Talent Pipeline",
      desc: "Connect with top engineering talent and future tech leaders",
      color: "#E85D24"
    },
    {
      id: 3,
      icon: "📢",
      title: "Marketing Reach",
      desc: "Extensive promotion across social media and campus networks",
      color: "#D91B57"
    },
    {
      id: 4,
      icon: "🚀",
      title: "Innovation Access",
      desc: "First look at cutting-edge projects and breakthrough ideas",
      color: "#63205F"
    },
    {
      id: 5,
      icon: "🌟",
      title: "Community Impact",
      desc: "Support the next generation of innovators and problem solvers",
      color: "#FCB216"
    },
    {
      id: 6,
      icon: "📊",
      title: "Thought Leadership",
      desc: "Position your brand as a leader in tech and innovation",
      color: "#E85D24"
    }
  ];

  const tiers = [
    {
      name: "Co-Powered By",
      gradient: "linear-gradient(135deg, #FCB216 0%, #E85D24 100%)",
      features: [
        "Exclusive naming rights",
        "Prime logo placement",
        "Keynote speaking slot",
        "Dedicated booth space",
        "Social media spotlight",
        "Custom workshop opportunity"
      ]
    },
    {
      name: "Gold Sponsor",
      gradient: "linear-gradient(135deg, #E85D24 0%, #D91B57 100%)",
      features: [
        "Premium logo placement",
        "Booth space",
        "Workshop opportunity",
        "Social media mentions",
        "Swag distribution",
        "Talent engagement"
      ]
    },
    {
      name: "Silver Sponsor",
      gradient: "linear-gradient(135deg, #D91B57 0%, #63205F 100%)",
      features: [
        "Logo placement",
        "Swag distribution",
        "Social media features",
        "Networking access",
        "Brand visibility"
      ]
    },
    {
      name: "Bronze Sponsor",
      gradient: "linear-gradient(135deg, #63205F 0%, #FCB216 100%)",
      features: [
        "Logo on website",
        "Social media mention",
        "Certificate of sponsorship",
        "Community recognition"
      ]
    }
  ];

  return (
    <section className="sponsor-section">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .sponsor-section {
          min-height: 100vh;
          background: #0F0F0F;
          position: relative;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
          padding: 3rem 0;
        }


        .sponsor-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .hero-section {
          text-align: center;
          margin-bottom: 4rem;
          padding: 3rem 0;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 1rem;
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .gradient-text {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 35%, #D91B57 70%, #63205F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #B0B0B0;
          max-width: 700px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 1.2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .cta-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .cta-primary {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 50%, #D91B57 100%);
          border: none;
          color: #FFFFFF;
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(252, 178, 22, 0.3);
        }

        .cta-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
        }

        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #FCB216;
          transform: translateY(-3px);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #FCB216, #E85D24, #D91B57);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .stat-card:hover::before {
          transform: scaleX(1);
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-5px);
          border-color: rgba(252, 178, 22, 0.3);
        }

        .stat-icon {
          font-size: 2.5rem;
          margin-bottom: 0.8rem;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #FCB216, #E85D24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #B0B0B0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
          color: #FFFFFF;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .benefit-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .benefit-card:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-8px);
          border-color: rgba(252, 178, 22, 0.3);
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .benefit-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.8rem;
        }

        .benefit-desc {
          font-size: 0.95rem;
          color: #B0B0B0;
          line-height: 1.6;
        }

        .tiers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .tier-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .tier-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--tier-gradient);
        }

        .tier-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(252, 178, 22, 0.4);
        }

        .tier-name {
          font-size: 1.8rem;
          font-weight: 800;
          background: var(--tier-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1.5rem;
        }

        .tier-features {
          list-style: none;
        }

        .tier-feature {
          padding: 0.8rem 0;
          color: #E0E0E0;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .tier-feature::before {
          content: '✓';
          color: #FCB216;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .contact-section {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 3rem;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .contact-title {
          font-size: 2rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 1rem;
        }

        .contact-desc {
          font-size: 1.1rem;
          color: #B0B0B0;
          margin-bottom: 2rem;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .tiers-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .sponsor-section {
            padding: 1.5rem 0;
          }

          .sponsor-container {
            padding: 0 1rem;
          }

          .hero-title {
            font-size: 2.5rem;
            letter-spacing: -1px;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .stat-card {
            padding: 1.5rem 1rem;
          }

          .stat-icon {
            font-size: 2rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .contact-section {
            padding: 2rem 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 1.8rem;
          }

          .tier-card {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div 
        className="orb-glow orb-1" 
        style={{
          transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)`
        }}
      />
      <div 
        className="orb-glow orb-2"
        style={{
          transform: `translate(${-cursorPos.x * 0.02}px, ${-cursorPos.y * 0.02}px)`
        }}
      />

      <div className="sponsor-container">
        {/* Hero Section */}
        <div className="hero-section">
          <span className="faq-badge">Partnership Opportunity</span>
          <h1 className="hero-title">
            Want to <span className="gradient-text">Sponsor Us?</span>
          </h1>
          <p className="hero-subtitle">
            Reach hundreds of students and potential customers by sponsoring HackOverflow 4.0. 
            Partner with us to inspire innovation and connect with the next generation of tech leaders.
          </p>
          <div className="cta-buttons">
            <a href="/docs/SponsorBrochure.pdf" download="HackOverflow_4.0_Sponsorship_Brochure.pdf" className="cta-btn cta-primary" style={{ position: 'relative', zIndex: 1 }}>
              <span style={{ position: 'relative', zIndex: 1 }}>Download Brochure</span>
            </a>
            <a href="mailto:admin@hackoverflow3.tech" className="cta-btn cta-secondary" style={{ position: 'relative', zIndex: 1 }}>
              <span style={{ position: 'relative', zIndex: 1 }}>Email Us</span>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <h2 className="section-title">
          Why <span className="gradient-text">Partner With Us?</span>
        </h2>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="benefit-card"
              onMouseEnter={() => setHoveredBenefit(benefit.id)}
              onMouseLeave={() => setHoveredBenefit(null)}
              style={{
                borderColor: hoveredBenefit === benefit.id ? benefit.color : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="benefit-icon">{benefit.icon}</span>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Sponsorship Tiers */}
        <h2 className="section-title">
          Sponsorship <span className="gradient-text">Packages</span>
        </h2>
        <div className="tiers-grid">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className="tier-card"
              style={{ '--tier-gradient': tier.gradient } as React.CSSProperties}
            >
              <h3 className="tier-name">{tier.name}</h3>
              <ul className="tier-features">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="tier-feature">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h2 className="contact-title">Ready to Make an Impact?</h2>
          <p className="contact-desc">
            Let's discuss how we can create a meaningful partnership that benefits both our communities
          </p>
          <div className="cta-buttons">
            <a href="mailto:admin@hackoverflow3.tech" className="cta-btn cta-primary" style={{ position: 'relative', zIndex: 1 }}>
              <span style={{ position: 'relative', zIndex: 1 }}>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorUs;