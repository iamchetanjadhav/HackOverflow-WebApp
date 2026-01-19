import React, { useState, useEffect } from "react";

type YearKey = "1.0" | "2.0" | "3.0";

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState<YearKey>("2.0");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const galleryData: Record<YearKey, {
    year: string;
    title: string;
    theme: string;
    stats: { participants: number; projects: number; hours: number };
    memories: Array<{
      id: number;
      title: string;
      desc: string;
      time: string;
      url: string;
      color: string;
    }>;
  }> = {
    "1.0": {
      year: "2023",
      title: "HackOverflow 1.0",
      theme: "The Beginning",
      stats: { participants: 250, projects: 45, hours: 36 },
      memories: [
        { 
          id: 1, 
          title: "Opening Ceremony", 
          desc: "The journey begins with 250+ passionate minds",
          time: "Day 1 - Morning",
          url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
          color: "#FCB216"
        },
        { 
          id: 2, 
          title: "Team Formation", 
          desc: "Ideas collide, teams form, magic happens",
          time: "Day 1 - Afternoon",
          url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
          color: "#E85D24"
        },
        { 
          id: 3, 
          title: "Midnight Coding", 
          desc: "When the code flows and caffeine kicks in",
          time: "Day 1 - Night",
          url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
          color: "#D91B57"
        },
        { 
          id: 4, 
          title: "Final Sprint", 
          desc: "The last push before presentations",
          time: "Day 2 - Morning",
          url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
          color: "#63205F"
        },
        { 
          id: 5, 
          title: "Pitch Perfect", 
          desc: "Teams present their revolutionary ideas",
          time: "Day 2 - Afternoon",
          url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
          color: "#FCB216"
        },
        { 
          id: 6, 
          title: "Victory", 
          desc: "Celebrating the innovators and winners",
          time: "Day 2 - Evening",
          url: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800",
          color: "#E85D24"
        }
      ]
    },
    "2.0": {
      year: "2024",
      title: "HackOverflow 2.0",
      theme: "Level Up",
      stats: { participants: 400, projects: 68, hours: 36 },
      memories: [
        { 
          id: 7, 
          title: "Grand Welcome", 
          desc: "Bigger, better, bolder than ever",
          time: "Day 1 - Morning",
          url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
          color: "#FCB216"
        },
        { 
          id: 8, 
          title: "Workshop Wave", 
          desc: "Learning from industry experts",
          time: "Day 1 - Afternoon",
          url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
          color: "#E85D24"
        },
        { 
          id: 9, 
          title: "Networking Night", 
          desc: "Connections that last a lifetime",
          time: "Day 1 - Evening",
          url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
          color: "#D91B57"
        },
        { 
          id: 10, 
          title: "Hack Mode: ON", 
          desc: "When creativity meets technology",
          time: "Day 1 - Night",
          url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
          color: "#63205F"
        },
        { 
          id: 11, 
          title: "Demo Day", 
          desc: "Showcasing innovation at its finest",
          time: "Day 2 - Afternoon",
          url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
          color: "#FCB216"
        },
        { 
          id: 12, 
          title: "Champions Rise", 
          desc: "New legends are born",
          time: "Day 2 - Evening",
          url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
          color: "#E85D24"
        }
      ]
    },
    "3.0": {
      year: "2025",
      title: "HackOverflow 3.0",
      theme: "Future Forward",
      stats: { participants: 500, projects: 85, hours: 36 },
      memories: [
        { 
          id: 13, 
          title: "Epic Opening", 
          desc: "500+ innovators under one roof",
          time: "Day 1 - Morning",
          url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
          color: "#FCB216"
        },
        { 
          id: 14, 
          title: "Tech Talks", 
          desc: "Insights from tech giants",
          time: "Day 1 - Afternoon",
          url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
          color: "#E85D24"
        },
        { 
          id: 15, 
          title: "Brainstorm Sessions", 
          desc: "Ideas that change the world",
          time: "Day 1 - Evening",
          url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800",
          color: "#D91B57"
        },
        { 
          id: 16, 
          title: "Code Marathon", 
          desc: "36 hours of pure innovation",
          time: "Day 1 - Night",
          url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800",
          color: "#63205F"
        },
        { 
          id: 17, 
          title: "Judgment Hour", 
          desc: "The best minds evaluate brilliance",
          time: "Day 2 - Afternoon",
          url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800",
          color: "#FCB216"
        },
        { 
          id: 18, 
          title: "Grand Finale", 
          desc: "A celebration of innovation and spirit",
          time: "Day 2 - Evening",
          url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
          color: "#E85D24"
        }
      ]
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentData = galleryData[selectedYear];

  return (
    <section className="gallery-section">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .gallery-section {
          min-height: 100vh;
          background: #0F0F0F;
          position: relative;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
          padding: 3rem 0;
        }

        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .dates-title {
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

        .gallery-subtitle {
          font-size: 1rem;
          color: #B0B0B0;
        }

        .year-selector {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin: 2.5rem 0 1.5rem;
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

        .year-info {
          text-align: center;
          margin-bottom: 2.5rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          backdrop-filter: blur(10px);
        }

        .year-theme {
          font-size: 1.6rem;
          font-weight: 700;
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 50%, #D91B57 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.8rem;
        }

        .year-stats {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          margin-top: 1.2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #FFFFFF;
          display: block;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #B0B0B0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .immersive-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
        }

        .immersive-card {
          position: relative;
          aspect-ratio: 1;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .immersive-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%);
          z-index: 1;
          transition: opacity 0.4s ease;
        }

        .immersive-card:hover::before {
          opacity: 0.5;
        }

        .immersive-card:hover {
          transform: scale(1.05) rotate(2deg);
          z-index: 10;
        }

        .immersive-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .immersive-card:hover .immersive-image {
          transform: scale(1.2);
        }

        .immersive-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .immersive-card:hover .immersive-overlay {
          opacity: 1;
        }

        .immersive-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.4rem;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
        }

        .immersive-desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
        }

        @media (max-width: 1024px) {
          .immersive-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .gallery-section {
            padding: 1.5rem 0;
          }

          .gallery-container {
            padding: 0 1rem;
          }

          .gallery-header {
            margin-bottom: 2rem;
          }

          .dates-title {
            font-size: 2rem;
            letter-spacing: -0.5px;
            margin-bottom: 0.6rem;
          }

          .gallery-subtitle {
            font-size: 0.85rem;
          }

          .year-selector {
            flex-direction: column;
            gap: 0.6rem;
            margin: 1.5rem 0 1rem;
          }

          .year-btn {
            padding: 0.8rem 1.2rem;
            width: 100%;
            font-size: 0.85rem;
          }

          .year-info {
            padding: 1.2rem;
            margin-bottom: 1.5rem;
          }

          .year-theme {
            font-size: 1.2rem;
            margin-bottom: 0.6rem;
          }

          .year-stats {
            flex-direction: row;
            gap: 1.2rem;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-top: 1rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .stat-label {
            font-size: 0.65rem;
          }

          .immersive-grid {
            grid-template-columns: 1fr;
            gap: 0.8rem;
          }

          .immersive-card {
            aspect-ratio: 16/10;
            border-radius: 12px;
          }

          .immersive-overlay {
            padding: 1.2rem;
            opacity: 1;
            background: linear-gradient(to bottom, transparent 0%, rgba(15, 15, 15, 0.92) 55%);
          }

          .immersive-title {
            font-size: 0.95rem;
            margin-bottom: 0.3rem;
          }

          .immersive-desc {
            font-size: 0.7rem;
          }

          .immersive-card:hover {
            transform: scale(1.01);
          }
        }

        @media (max-width: 480px) {
          .gallery-section {
            padding: 1rem 0;
          }

          .dates-title {
            font-size: 1.6rem;
          }

          .gallery-subtitle {
            font-size: 0.8rem;
          }

          .year-btn {
            padding: 0.7rem 1rem;
          }

          .year-btn > div > div:first-child {
            font-size: 0.9rem !important;
            margin-bottom: 0.2rem !important;
          }

          .year-btn > div > div:last-child {
            font-size: 0.65rem !important;
          }

          .year-info {
            padding: 1rem;
          }

          .year-theme {
            font-size: 1.1rem;
          }

          .stat-number {
            font-size: 1.3rem;
          }

          .stat-label {
            font-size: 0.6rem;
          }

          .immersive-card {
            aspect-ratio: 16/11;
          }

          .immersive-overlay {
            padding: 1rem;
          }

          .immersive-title {
            font-size: 0.85rem;
          }

          .immersive-desc {
            font-size: 0.65rem;
            line-height: 1.3;
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

      <div className="gallery-container">
        <div className="gallery-header">
          <span className="faq-badge">Journey Through Time</span>
          <h2 className="dates-title">
            Hackoverflow<span className="gradient-text"> Chronicles</span>
          </h2>
          <p className="gallery-subtitle">
            Relive the moments that defined innovation
          </p>
        </div>

        <div className="year-selector">
          {(Object.keys(galleryData) as YearKey[]).map((year) => (
            <button
              key={year}
              className={`year-btn ${selectedYear === year ? 'active' : ''}`}
              onClick={() => setSelectedYear(year)}
            >
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>
                  {galleryData[year].title}
                </div>
                <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>
                  {galleryData[year].year}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="year-info">
          <div className="year-theme">"{currentData.theme}"</div>
          <div className="year-stats">
            <div className="stat-item">
              <span className="stat-number">{currentData.stats.participants}</span>
              <span className="stat-label">Participants</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{currentData.stats.projects}</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{currentData.stats.hours}</span>
              <span className="stat-label">Hours</span>
            </div>
          </div>
        </div>

        <div className="immersive-grid">
          {currentData.memories.map((memory) => (
            <div 
              key={memory.id}
              className="immersive-card"
              onMouseEnter={() => setHoveredCard(memory.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img 
                src={memory.url} 
                alt={memory.title}
                className="immersive-image"
              />
              <div className="immersive-overlay">
                <div 
                  style={{ 
                    fontSize: '0.65rem',
                    color: memory.color,
                    fontWeight: 700,
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  {memory.time}
                </div>
                <h3 className="immersive-title">{memory.title}</h3>
                <p className="immersive-desc">{memory.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;