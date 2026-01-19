import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Special = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const events = [
    {
      id: 1,
      day: "11",
      month: "MARCH",
      title: "Kickoff & Hacking",
      color: "#FCB216"
    },
    {
      id: 2,
      day: "12",
      month: "MARCH",
      title: "Mid-Evaluation",
      color: "#E85D24"
    },
    {
      id: 3,
      day: "13",
      month: "MARCH",
      title: "Grand Finale",
      color: "#D91B57"
    }
  ];

  return (
    <>
      <style>{`
        :root {
          --bg-dark: #0F0F0F;
          --text-white: #FFFFFF;
          --text-gray: #B0B0B0;
        }

        .timeline-section {
          position: relative;
          overflow: hidden;
          min-height: 60vh;
          padding: 3rem 1rem 5rem;
          background: var(--bg-dark);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-title {
          font-family: 'Poppins', sans-serif;
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--text-white);
          text-align: center;
          margin-bottom: 3rem;
        }

        .gradient-text {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 35%, #D91B57 70%, #63205F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .timeline-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .glass-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 2rem 1.5rem;
          transition: all 0.4s ease-out;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transform: translate3d(0, 0, 0);
        }

        .glass-card:hover {
          transform: translate3d(0, -8px, 0);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        .glass-card:hover .card-border {
          transform: scaleX(1);
        }

        .card-content {
          position: relative;
          z-index: 2;
          text-align: center;
          width: 100%;
        }

        .date-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1;
          margin-bottom: 1.5rem;
        }

        .event-month {
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 4px;
          color: #888;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .event-day {
          font-family: 'Poppins', sans-serif;
          font-size: 6rem;
          font-weight: 800;
          text-align: center;
          text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }

        .card-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.3rem;
          color: var(--text-white);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .card-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.4s ease;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .event-day {
            font-size: 4rem;
          }
        }
      `}</style>

      <section className="timeline-section">
        {/* <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div> */}

        <div className="container">
          <div data-aos="fade-down">
            <h1 className="section-title">
              HackOverflow 4.0<span className="gradient-text"> Begins In</span>
            </h1>
          </div>

          <div className="timeline-grid">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="glass-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="card-content">
                  <div className="date-wrapper">
                    <span className="event-month">{event.month}</span>
                    <span className="event-day" style={{ color: event.color }}>
                      {event.day}
                    </span>
                  </div>

                  <div>
                    <h4 className="card-title">{event.title}</h4>
                  </div>
                </div>

                <div className="card-border" style={{ background: event.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Special;