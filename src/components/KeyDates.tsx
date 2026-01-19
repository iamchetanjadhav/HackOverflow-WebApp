import { useEffect, useState } from 'react';

interface TimelineItem {
  id: number;
  date: string;
  month: string;
  day: string;
  title: string;
  desc: string;
  color: string;
}

const DateCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.date-card').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      date: "Dec 25, 2025",
      month: "DEC",
      day: "25",
      title: "Registration Start",
      desc: "Portal opens for all participants",
      color: "#FCB216"
    },
    {
      id: 2,
      date: "Jan 25, 2026",
      month: "JAN",
      day: "25",
      title: "Registration Ends",
      desc: "Last day to submit your team details",
      color: "#E85D24"
    },
    {
      id: 3,
      date: "March 11, 2026",
      month: "MAR",
      day: "11",
      title: "Hackathon Start",
      desc: "Opening Ceremony & Coding Begins",
      color: "#D91B57"
    },
    {
      id: 4,
      date: "March 13, 2026",
      month: "MAR",
      day: "13",
      title: "Hackathon End",
      desc: "Submission Deadline & Valedictory",
      color: "#63205F"
    }
  ];

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap");

        .dates-section {
          padding: 80px 1rem;
          background: #0F0F0F;
          position: relative;
          overflow: hidden;
        }

        .glow-bg {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.08;
          pointer-events: none;
        }

        .glow-1 { top: -200px; left: -200px; background: #FCB216; }
        .glow-2 { bottom: -200px; right: -200px; background: #D91B57; }

        .dates-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .dates-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .dates-badge {
          display: inline-block;
          padding: 10px 24px;
          background: rgba(231, 88, 41, 0.1);
          border: 1px solid rgba(231, 88, 41, 0.3);
          border-radius: 50px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #E85D24;
          margin-bottom: 20px;
        }

        .dates-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 16px;
        }

        .gradient-text {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 35%, #D91B57 70%, #63205F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .dates-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 600px;
          margin: 0 auto;
        }

        .dates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          padding: 0 20px;
        }

        .date-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 40px 30px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          opacity: 0;
          transform: translateY(40px);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .date-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .date-card:nth-child(1) { transition-delay: 0s; }
        .date-card:nth-child(2) { transition-delay: 0.1s; }
        .date-card:nth-child(3) { transition-delay: 0.2s; }
        .date-card:nth-child(4) { transition-delay: 0.3s; }

        .date-card:hover {
          transform: translateY(-12px);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .date-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--card-color);
          border-radius: 20px 20px 0 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .date-card:hover::before {
          opacity: 1;
        }

        .date-icon {
          width: 70px;
          height: 70px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .date-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--card-color);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .date-card:hover .date-icon::after {
          opacity: 0.15;
        }

        .date-display {
          position: relative;
          z-index: 1;
          font-family: 'Poppins', sans-serif;
        }

        .date-month {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 4px;
        }

        .date-day {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1;
        }

        .card-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .card-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .card-arrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--card-color);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .date-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .arrow-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .date-card:hover .arrow-icon {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .dates-title {
            font-size: 2.5rem;
          }

          .dates-grid {
            grid-template-columns: 1fr;
            padding: 0;
          }

          .date-card {
            padding: 30px 24px;
          }
        }

        @media (max-width: 480px) {
          .dates-title {
            font-size: 2rem;
          }

          .dates-badge {
            font-size: 0.75rem;
            padding: 8px 20px;
          }
        }
      `}</style>

      <section className="dates-section">
        <div className="glow-bg glow-1"></div>
        <div className="glow-bg glow-2"></div>

        <div className="dates-container">
          <div className="dates-header">
            <div className="dates-badge">Important Dates</div>
            <h2 className="dates-title">
              Mark Your <span className="gradient-text">Calendar</span>
            </h2>
            <p className="dates-subtitle">
              Don't miss these crucial milestones on your journey to innovation
            </p>
          </div>

          <div className="dates-grid">
            {timelineData.map((item) => (
              <div
                key={item.id}
                className="date-card"
                style={{ '--card-color': item.color } as React.CSSProperties}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="date-icon">
                  <div className="date-display">
                    <span className="date-month">{item.month}</span>
                    <span className="date-day">{item.day}</span>
                  </div>
                </div>

                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>

                <div className="card-arrow" style={{ color: item.color }}>
                  <span>Learn More</span>
                  <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DateCards;