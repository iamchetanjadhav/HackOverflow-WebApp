import React, { useState } from "react";

type EventType = "registration" | "break" | "ceremony" | "setup" | "start" | "coding" | "networking" | "judging" | "submission" | "end";

interface ScheduleEvent {
  time: string;
  event: string;
  icon: string;
  type: EventType;
}

type DayKey = 1 | 2 | 3;

const Schedule = () => {
  const [activeDay, setActiveDay] = useState<DayKey>(1);

  const scheduleData: Record<DayKey, ScheduleEvent[]> = {
    1: [
      { time: "11:00 AM", event: "Check In", icon: "🎫", type: "registration" },
      { time: "1:00 PM", event: "Lunch", icon: "🍽️", type: "break" },
      { time: "2:00 PM", event: "Orientation & Opening Ceremony", icon: "🎤", type: "ceremony" },
      { time: "4:00 PM", event: "Lab Allotment", icon: "🏢", type: "setup" },
      { time: "5:00 PM", event: "Hackathon Begins", icon: "🚀", type: "start" }
    ],
    2: [
      { time: "8:00 AM", event: "Breakfast", icon: "☕", type: "break" },
      { time: "9:00 AM", event: "Coding", icon: "💻", type: "coding" },
      { time: "11:00 AM", event: "Coding", icon: "💻", type: "coding" },
      { time: "1:00 PM", event: "Lunch", icon: "🍽️", type: "break" },
      { time: "2:00 PM", event: "Coding", icon: "💻", type: "coding" },
      { time: "9:00 PM", event: "Dinner", icon: "🍴", type: "break" },
      { time: "10:00 PM", event: "Networking", icon: "🤝", type: "networking" }
    ],
    3: [
      { time: "7:00 AM", event: "Judging", icon: "⚖️", type: "judging" },
      { time: "8:00 AM", event: "Breakfast", icon: "☕", type: "break" },
      { time: "9:00 AM", event: "Coding", icon: "💻", type: "coding" },
      { time: "11:00 AM", event: "Project & Code Submission", icon: "📤", type: "submission" },
      { time: "1:00 PM", event: "Lunch", icon: "🍽️", type: "break" },
      { time: "2:00 PM", event: "Winner Announcement", icon: "🏆", type: "ceremony" },
      { time: "5:00 PM", event: "Check Out", icon: "👋", type: "end" }
    ]
  };

  const getEventColor = (type: EventType): string => {
    const colors: Record<EventType, string> = {
      registration: "#e75829",
      break: "#FFD47C",
      ceremony: "#e75829",
      setup: "#F2A03D",
      start: "#e75829",
      coding: "#F2A03D",
      networking: "#FFD47C",
      judging: "#e75829",
      submission: "#e75829",
      end: "#FFD47C"
    };
    return colors[type];
  };

  return (
    <div className="schedule-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .schedule-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .schedule-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(231, 88, 41, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 212, 124, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .schedule-content {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .schedule-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeInDown 0.8s ease;
        }

        .schedule-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(231, 88, 41, 0.15);
          border: 1px solid rgba(231, 88, 41, 0.4);
          border-radius: 50px;
          color: #e75829;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .schedule-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #e75829 0%, #FFD47C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .schedule-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 600px;
          margin: 0 auto;
        }

        .day-selector {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .day-button {
          padding: 1rem 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .day-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(231, 88, 41, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .day-button:hover::before {
          left: 100%;
        }

        .day-button:hover {
          background: rgba(231, 88, 41, 0.08);
          border-color: rgba(231, 88, 41, 0.4);
          color: #FFD47C;
          transform: translateY(-2px);
        }

        .day-button.active {
          background: linear-gradient(135deg, #e75829 0%, #F2A03D 100%);
          border-color: #e75829;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(231, 88, 41, 0.3);
        }

        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, 
            transparent 0%,
            rgba(231, 88, 41, 0.3) 10%,
            rgba(231, 88, 41, 0.5) 50%,
            rgba(231, 88, 41, 0.3) 90%,
            transparent 100%
          );
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          position: relative;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .timeline-item:nth-child(1) { animation-delay: 0.1s; }
        .timeline-item:nth-child(2) { animation-delay: 0.2s; }
        .timeline-item:nth-child(3) { animation-delay: 0.3s; }
        .timeline-item:nth-child(4) { animation-delay: 0.4s; }
        .timeline-item:nth-child(5) { animation-delay: 0.5s; }
        .timeline-item:nth-child(6) { animation-delay: 0.6s; }
        .timeline-item:nth-child(7) { animation-delay: 0.7s; }

        .timeline-item:nth-child(odd) {
          flex-direction: row-reverse;
        }

        .timeline-time {
          flex: 1;
          text-align: right;
          padding-right: 3rem;
          font-size: 1.2rem;
          font-weight: 600;
          color: #FFD47C;
        }

        .timeline-item:nth-child(odd) .timeline-time {
          text-align: left;
          padding-right: 0;
          padding-left: 3rem;
        }

        .timeline-node {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(231, 88, 41, 0.2) 0%, rgba(255, 212, 124, 0.1) 100%);
          border: 3px solid;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          z-index: 2;
          flex-shrink: 0;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(231, 88, 41, 0.3);
        }

        .timeline-node:hover {
          transform: scale(1.15) rotate(5deg);
          box-shadow: 0 0 30px rgba(231, 88, 41, 0.5);
        }

        .timeline-content {
          flex: 1;
          padding-left: 3rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          padding-left: 2rem;
          padding-right: 3rem;
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--event-color), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .timeline-content:hover {
          background: rgba(231, 88, 41, 0.08);
          border-color: rgba(231, 88, 41, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(231, 88, 41, 0.2);
        }

        .timeline-content:hover::before {
          opacity: 1;
        }

        .event-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .event-description {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .decorative-dots {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          opacity: 0.3;
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 35%, #D91B57 70%, #63205F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .dates-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 16px;
        }

        .dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #e75829;
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
        }

        .dot:nth-child(1) { top: 10%; left: 15%; animation-delay: 0s; }
        .dot:nth-child(2) { top: 25%; right: 20%; animation-delay: 0.5s; }
        .dot:nth-child(3) { top: 50%; left: 10%; animation-delay: 1s; }
        .dot:nth-child(4) { top: 75%; right: 15%; animation-delay: 1.5s; }
        .dot:nth-child(5) { top: 90%; left: 25%; animation-delay: 2s; }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 768px) {
          .schedule-container {
            padding: 2rem 1rem;
          }

          .schedule-title {
            font-size: 2.5rem;
          }

          .day-button {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }

          .timeline-line {
            left: 30px;
          }

          .timeline-item {
            flex-direction: row !important;
            margin-bottom: 2rem;
          }

          .timeline-time {
            position: absolute;
            top: -30px;
            left: 80px;
            padding: 0 !important;
            font-size: 1rem;
            text-align: left !important;
          }

          .timeline-node {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }

          .timeline-content {
            margin-left: 80px;
            padding: 1.2rem 1.5rem !important;
          }
        }
      `}</style>

      <div className="schedule-content">
        <div className="decorative-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <div className="schedule-header">
          <div className="schedule-badge">3-Day Event</div>
            <h2 className="dates-title">
              Event<span className="gradient-text"> Schedule</span>
            </h2>
          <p className="schedule-subtitle">
            A comprehensive 72-hour journey of innovation, coding, and collaboration
          </p>
        </div>

        <div className="day-selector">
          <button
            className={`day-button ${activeDay === 1 ? 'active' : ''}`}
            onClick={() => setActiveDay(1)}
          >
            Day 1 - Kickoff
          </button>
          <button
            className={`day-button ${activeDay === 2 ? 'active' : ''}`}
            onClick={() => setActiveDay(2)}
          >
            Day 2 - Build
          </button>
          <button
            className={`day-button ${activeDay === 3 ? 'active' : ''}`}
            onClick={() => setActiveDay(3)}
          >
            Day 3 - Finals
          </button>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {scheduleData[activeDay].map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-time">{item.time}</div>
              
              <div 
                className="timeline-node"
                style={{ borderColor: getEventColor(item.type) }}
              >
                {item.icon}
              </div>
              
              <div 
                className="timeline-content"
                style={{ '--event-color': getEventColor(item.type) } as React.CSSProperties}
              >
                <div className="event-name">{item.event}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;