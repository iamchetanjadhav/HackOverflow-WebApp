import React, { useState, useEffect } from "react";

type YearKey = "1.0" | "2.0" | "3.0";

const Statistics = () => {
  const [selectedYear, setSelectedYear] = useState<YearKey>("2.0");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Replace this data structure with your actual statistics
  const statsData: Record<YearKey, {
    year: string;
    title: string;
    overview: {
      participants: number;
      projects: number;
      hours: number;
      mentors: number;
    };
    categories: Array<{
      name: string;
      value: number;
      color: string;
    }>;
    achievements: Array<{
      icon: string;
      label: string;
      value: string;
    }>;
    demographics: {
      colleges: number;
      cities: number;
      prizePool: string;
    };
  }> = {
    "1.0": {
      year: "2023",
      title: "HackOverflow 1.0",
      overview: {
        participants: 250,
        projects: 45,
        hours: 36,
        mentors: 15
      },
      categories: [
        { name: "Web Development", value: 35, color: "#FCB216" },
        { name: "AI/ML", value: 25, color: "#E85D24" },
        { name: "Blockchain", value: 15, color: "#D91B57" },
        { name: "IoT", value: 15, color: "#63205F" },
        { name: "Other", value: 10, color: "#B0B0B0" }
      ],
      achievements: [
        { icon: "🏆", label: "Winners", value: "3 Teams" },
        { icon: "💡", label: "Ideas Pitched", value: "65+" },
        { icon: "🎯", label: "Completion Rate", value: "92%" },
        { icon: "⭐", label: "Satisfaction", value: "4.8/5" }
      ],
      demographics: {
        colleges: 12,
        cities: 8,
        prizePool: "₹50,000"
      }
    },
    "2.0": {
      year: "2024",
      title: "HackOverflow 2.0",
      overview: {
        participants: 400,
        projects: 68,
        hours: 36,
        mentors: 25
      },
      categories: [
        { name: "Web Development", value: 30, color: "#FCB216" },
        { name: "AI/ML", value: 30, color: "#E85D24" },
        { name: "Blockchain", value: 15, color: "#D91B57" },
        { name: "IoT", value: 15, color: "#63205F" },
        { name: "Other", value: 10, color: "#B0B0B0" }
      ],
      achievements: [
        { icon: "🏆", label: "Winners", value: "5 Teams" },
        { icon: "💡", label: "Ideas Pitched", value: "95+" },
        { icon: "🎯", label: "Completion Rate", value: "95%" },
        { icon: "⭐", label: "Satisfaction", value: "4.9/5" }
      ],
      demographics: {
        colleges: 20,
        cities: 15,
        prizePool: "₹1,00,000"
      }
    },
    "3.0": {
      year: "2025",
      title: "HackOverflow 3.0",
      overview: {
        participants: 500,
        projects: 85,
        hours: 36,
        mentors: 30
      },
      categories: [
        { name: "Web Development", value: 28, color: "#FCB216" },
        { name: "AI/ML", value: 35, color: "#E85D24" },
        { name: "Blockchain", value: 12, color: "#D91B57" },
        { name: "IoT", value: 15, color: "#63205F" },
        { name: "Other", value: 10, color: "#B0B0B0" }
      ],
      achievements: [
        { icon: "🏆", label: "Winners", value: "7 Teams" },
        { icon: "💡", label: "Ideas Pitched", value: "120+" },
        { icon: "🎯", label: "Completion Rate", value: "97%" },
        { icon: "⭐", label: "Satisfaction", value: "5.0/5" }
      ],
      demographics: {
        colleges: 35,
        cities: 22,
        prizePool: "₹2,00,000"
      }
    }
  };

  const currentData = statsData[selectedYear];

  return (
    <section className="stats-section">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .stats-section {
          min-height: 100vh;
          background: #0F0F0F;
          position: relative;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
          padding: 3rem 0;
        }

        .stats-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .stats-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .stats-title {
          font-size: 3.5rem;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 0.8rem;
          line-height: 1.1;
          letter-spacing: -1.5px;
        }

        .gradient-text {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 35%, #D91B57 70%, #63205F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stats-subtitle {
          font-size: 1rem;
          color: #B0B0B0;
        }

        .year-selector {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin: 2.5rem 0 2rem;
        }

        .year-btn {
          position: relative;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: #B0B0B0;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s ease;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .year-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(252, 178, 22, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .year-btn:hover::before {
          left: 100%;
        }

        .year-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: #FCB216;
          color: #FCB216;
          transform: translateY(-3px);
        }

        .year-btn.active {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 35%, #D91B57 70%, #63205F 100%);
          border-color: transparent;
          color: #FFFFFF;
          transform: scale(1.03);
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .overview-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 2rem 1.5rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .overview-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #FCB216, #E85D24, #D91B57, #63205F);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .overview-card:hover::before {
          transform: scaleX(1);
        }

        .overview-card:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-5px);
          border-color: rgba(252, 178, 22, 0.3);
        }

        .overview-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #FCB216, #E85D24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
          margin-bottom: 0.5rem;
        }

        .overview-label {
          font-size: 0.85rem;
          color: #B0B0B0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .stat-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 1.5rem;
          padding-bottom: 0.8rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        }

        .category-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding: 0.8rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .category-item:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(5px);
        }

        .category-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .category-color {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .category-name {
          font-size: 0.9rem;
          color: #E0E0E0;
          font-weight: 500;
        }

        .category-value {
          font-size: 1.1rem;
          font-weight: 700;
          color: #FFFFFF;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .achievement-item:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: scale(1.02);
        }

        .achievement-icon {
          font-size: 2rem;
        }

        .achievement-content {
          flex: 1;
        }

        .achievement-label {
          font-size: 0.75rem;
          color: #B0B0B0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .achievement-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: #FFFFFF;
        }

        .demographics-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
        }

        .demo-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
        }

        .demo-card:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-5px);
          border-color: rgba(217, 27, 87, 0.3);
        }

        .demo-value {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #D91B57, #63205F);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
          margin-bottom: 0.5rem;
        }

        .demo-label {
          font-size: 0.85rem;
          color: #B0B0B0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 1024px) {
          .overview-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .demographics-section {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .stats-section {
            padding: 1.5rem 0;
          }

          .stats-container {
            padding: 0 1rem;
          }

          .stats-title {
            font-size: 2rem;
          }

          .year-selector {
            flex-direction: column;
            gap: 0.6rem;
          }

          .year-btn {
            width: 100%;
            padding: 0.8rem 1.2rem;
          }

          .overview-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
          }

          .overview-card {
            padding: 1.5rem 1rem;
          }

          .overview-number {
            font-size: 2rem;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .demographics-section {
            grid-template-columns: 1fr;
            gap: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .stats-title {
            font-size: 1.6rem;
          }

          .overview-grid {
            grid-template-columns: 1fr;
          }

          .overview-number {
            font-size: 1.8rem;
          }

          .overview-label {
            font-size: 0.75rem;
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

      <div className="stats-container">
        <div className="stats-header">
          <span className="faq-badge">Data & Insights</span>
          <h2 className="stats-title">
            HackOverflow <span className="gradient-text">Statistics</span>
          </h2>
          <p className="stats-subtitle">
            Numbers that tell our story of growth and innovation
          </p>
        </div>

        <div className="year-selector">
          {(Object.keys(statsData) as YearKey[]).map((year) => (
            <button
              key={year}
              className={`year-btn ${selectedYear === year ? 'active' : ''}`}
              onClick={() => setSelectedYear(year)}
            >
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>
                  {statsData[year].title}
                </div>
                <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>
                  {statsData[year].year}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="overview-grid">
          <div className="overview-card">
            <span className="overview-number">{currentData.overview.participants}</span>
            <span className="overview-label">Participants</span>
          </div>
          <div className="overview-card">
            <span className="overview-number">{currentData.overview.projects}</span>
            <span className="overview-label">Projects</span>
          </div>
          <div className="overview-card">
            <span className="overview-number">{currentData.overview.hours}</span>
            <span className="overview-label">Hours</span>
          </div>
          <div className="overview-card">
            <span className="overview-number">{currentData.overview.mentors}</span>
            <span className="overview-label">Mentors</span>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-card-title">Project Categories</h3>
            {currentData.categories.map((category, index) => (
              <div key={index} className="category-item">
                <div className="category-info">
                  <div 
                    className="category-color" 
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="category-name">{category.name}</span>
                </div>
                <span className="category-value">{category.value}%</span>
              </div>
            ))}
          </div>

          <div className="stat-card">
            <h3 className="stat-card-title">Key Achievements</h3>
            <div className="achievements-grid">
              {currentData.achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <div className="achievement-label">{achievement.label}</div>
                    <div className="achievement-value">{achievement.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="demographics-section">
          <div className="demo-card">
            <span className="demo-value">{currentData.demographics.colleges}</span>
            <span className="demo-label">Colleges</span>
          </div>
          <div className="demo-card">
            <span className="demo-value">{currentData.demographics.cities}</span>
            <span className="demo-label">Cities</span>
          </div>
          <div className="demo-card">
            <span className="demo-value">{currentData.demographics.prizePool}</span>
            <span className="demo-label">Prize Pool</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;