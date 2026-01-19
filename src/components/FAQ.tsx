import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const faqData = [
    {
      category: "General",
      title: "Can I participate if I'm a beginner?",
      text: "Absolutely! HackOverflow welcomes participants of all skill levels. Whether you're a beginner or an experienced developer, you'll find opportunities to learn, collaborate, and create amazing projects.",
    },
    {
      category: "Registration",
      title: "How to register for the offline track?",
      text: "To register for the offline track, you can either fill the provided Google form or contact the support team for offline registration assistance.",
    },
    {
      category: "Team",
      title: "What is the maximum number of members allowed in a team?",
      text: "Teams must have a minimum of 3 members and a maximum of 4 members.",
    },
    {
      category: "Event",
      title: "How long is the hackathon going to last?",
      text: "The hackathon will be a 36-hour long event, giving you plenty of time to ideate, develop, and polish your project.",
    },
    {
      category: "Perks",
      title: "What are the perks every participant is going to get?",
      text: "All participants will receive official HackOverflow swags and goodies including t-shirts, stickers, and exclusive merchandise.",
    },
    {
      category: "Travel",
      title: "What is the transport facility for out-of-state students?",
      text: "For out-of-state students, bus facilities will be provided from Pillai's Panvel campus. Additionally, pickups from Panvel Railway station, nearby stations, and the airport will be facilitated.",
    },
    {
      category: "Accommodation",
      title: "What are the arrangements for accommodation?",
      text: "Accommodation arrangements are made within the college campus itself. All participant needs will be taken care of throughout the event.",
    },
    {
      category: "Food",
      title: "What food arrangements are in place for the hackathon?",
      text: "All meals including breakfast, lunch, snacks, and dinner will be conveniently provided on the campus premises throughout the 36-hour event.",
    },
    {
      category: "Rules",
      title: "Is there a code of conduct for participants?",
      text: "Yes, a comprehensive code of conduct will be provided to all participants during the check-in process to ensure a safe and inclusive environment.",
    },
    {
      category: "Support",
      title: "Will there be any mentorship sessions?",
      text: "Yes! Technical experts and industry professionals will be available to guide you throughout the hackathon.",
    },
    {
      category: "Networking",
      title: "Will there be any networking opportunities during the event?",
      text: "Absolutely! The organizing committee will conduct dedicated networking sessions during the hackathon to help you connect with fellow participants, mentors, and industry professionals.",
    },
    {
      category: "Submission",
      title: "Can I submit multiple projects as part of the same registration?",
      text: "No, each team is allowed to submit only one project for the hackathon.",
    },
  ];

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(faqData.map((faq) => faq.category))];

  return (
    <section className="faq-section">
      <style>{`
        .faq-section {
          min-height: 100vh;
          padding: 6rem 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
          position: relative;
          overflow: hidden;
        }

        .faq-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 20%, rgba(231, 88, 41, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(255, 212, 124, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .faq-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .faq-badge {
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

        .faq-main-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #e75829 0%, #FFD47C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }

        .faq-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 2rem;
        }

        .search-wrapper {
          position: relative;
          max-width: 600px;
          margin: 0 auto 3rem;
        }

        .search-input {
          width: 100%;
          padding: 1rem 1.5rem 1rem 3.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(231, 88, 41, 0.3);
          border-radius: 50px;
          color: #ffffff;
          font-size: 1rem;
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .search-input:focus {
          outline: none;
          border-color: #e75829;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 20px rgba(231, 88, 41, 0.3);
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .search-icon {
          position: absolute;
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: #e75829;
          font-size: 1.2rem;
          pointer-events: none;
        }

        .category-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .category-chip {
          padding: 0.5rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .category-chip:hover {
          background: rgba(231, 88, 41, 0.15);
          color: #FFD47C;
          border-color: #e75829;
        }

        .category-chip.active {
          background: rgba(231, 88, 41, 0.2);
          color: #e75829;
          border-color: #e75829;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          cursor: pointer;
        }

        .faq-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(231, 88, 41, 0.4);
          transform: translateX(5px);
        }

        .faq-item.active {
          background: rgba(231, 88, 41, 0.08);
          border-color: #e75829;
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          gap: 1rem;
        }

        .faq-question-content {
          flex: 1;
        }

        .faq-category-tag {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(255, 212, 124, 0.15);
          border-radius: 50px;
          color: #FFD47C;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .faq-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
          line-height: 1.4;
        }

        .faq-toggle-btn {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(231, 88, 41, 0.1);
          border: 1px solid rgba(231, 88, 41, 0.3);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .faq-item:hover .faq-toggle-btn {
          background: rgba(231, 88, 41, 0.2);
          border-color: #e75829;
        }

        .faq-item.active .faq-toggle-btn {
          background: linear-gradient(135deg, #e75829 0%, #F2A03D 100%);
          transform: rotate(180deg);
        }

        .toggle-icon {
          width: 20px;
          height: 20px;
          stroke: #e75829;
          transition: all 0.3s ease;
        }

        .faq-item.active .toggle-icon {
          stroke: #ffffff;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
        }

        .faq-item.active .faq-answer {
          max-height: 500px;
          padding: 0 1.5rem 1.5rem;
        }

        .faq-text {
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .no-results {
          text-align: center;
          padding: 4rem 2rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .no-results-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .no-results-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .no-results-text {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 4rem 0;
          }

          .faq-container {
            padding: 0 1.5rem;
          }

          .faq-main-title {
            font-size: 2rem;
          }

          .faq-subtitle {
            font-size: 1rem;
          }

          .search-input {
            padding: 0.875rem 1.25rem 0.875rem 3rem;
            font-size: 0.9rem;
          }

          .category-filters {
            justify-content: flex-start;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 0.5rem;
          }

          .faq-title {
            font-size: 1rem;
          }

          .faq-text {
            font-size: 0.9rem;
          }

          .faq-question {
            padding: 1.25rem;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-item {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>

      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-badge">Got Questions?</span>
            <h2 className="dates-title">
            Frequently asked <span className="gradient-text"> Questions</span>
            </h2>
          <p className="faq-subtitle">
            Find answers to common questions about HackOverflow
          </p>

          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-chip ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="faq-list">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleToggle(index)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="faq-question">
                  <div className="faq-question-content">
                    <span className="faq-category-tag">{faq.category}</span>
                    <h3 className="faq-title">{faq.title}</h3>
                  </div>
                  <div className="faq-toggle-btn">
                    <svg
                      className="toggle-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
                <div className="faq-answer">
                  <p className="faq-text">{faq.text}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3 className="no-results-title">No results found</h3>
              <p className="no-results-text">
                Try adjusting your search or browse all questions above
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQs;