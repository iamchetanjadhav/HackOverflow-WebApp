"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "gallery", label: "Gallery" },
    { id: "stats", label: "Statistics" },
    { id: "schedule", label: "Schedule" },
    { id: "sponsors", label: "Sponsors" },
    { id: "about", label: "About" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let current = "home";
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = link.id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMobileMenuOpen(false);
      
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  const getIcon = (id: string) => {
    const icons = {
      home: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      about: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      ),
      schedule: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      stats: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      ),
      sponsors: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      gallery: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      )
    };
    return icons[id as keyof typeof icons];
  };

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
        }

        .navbar.scrolled {
          background: rgba(15, 15, 15, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          border-bottom: 1px solid rgba(252, 178, 22, 0.2);
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-logo:hover {
          transform: translateY(-2px);
        }

        .logo-image {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          list-style: none;
        }

        .nav-link {
          padding: 0.65rem 1.3rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          cursor: pointer;
          border: none;
          background: transparent;
          letter-spacing: 0.3px;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FCB216, #E85D24);
          transform: translateX(-50%);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover {
          color: #FCB216;
          background: rgba(252, 178, 22, 0.08);
        }

        .nav-link:hover::before {
          width: 80%;
        }

        .nav-link.active {
          color: #ffffff;
          background: rgba(252, 178, 22, 0.15);
          border: 1px solid rgba(252, 178, 22, 0.4);
        }

        .nav-link.active::before {
          width: 80%;
        }

        .brochure-button {
          padding: 0.65rem 1.6rem;
          background: transparent;
          border: 2px solid #FCB216;
          border-radius: 8px;
          color: #FCB216;
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-left: 0.75rem;
          text-decoration: none;
          display: inline-block;
          letter-spacing: 0.3px;
        }

        .brochure-button:hover {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 100%);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(252, 178, 22, 0.4);
          transform: translateY(-2px);
          border-color: transparent;
        }

        .mobile-menu-button {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu-button span {
          width: 25px;
          height: 2px;
          background: #FCB216;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }

        .mobile-menu-button.open span:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }

        .mobile-menu-button.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-button.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          background: rgba(15, 15, 15, 0.98);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(252, 178, 22, 0.2);
          padding: 1rem 0;
          max-height: calc(100vh - 70px);
          overflow-y: auto;
        }

        .mobile-menu.open {
          display: block;
          animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu-links {
          list-style: none;
          padding: 0 2rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
        }

        .mobile-nav-link .icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-nav-link:hover {
          color: #FCB216;
          background: rgba(252, 178, 22, 0.08);
          padding-left: 1.5rem;
        }

        .mobile-nav-link.active {
          color: #ffffff;
          background: rgba(252, 178, 22, 0.15);
          border-left: 3px solid #FCB216;
        }

        .mobile-brochure {
          margin: 1rem 2rem 0;
          padding: 1rem;
          background: transparent;
          border: 2px solid #FCB216;
          border-radius: 8px;
          color: #FCB216;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          width: calc(100% - 4rem);
          text-align: center;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .mobile-brochure:hover {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 100%);
          color: #ffffff;
          border-color: transparent;
        }

        /* FIXED: Bottom nav hidden by default, only shows on mobile */
        .mobile-bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(15, 15, 15, 0.98);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid rgba(252, 178, 22, 0.2);
          padding: 0.5rem 0;
          z-index: 999;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
          transform: translateZ(0);
          will-change: transform;
        }

        .bottom-nav-links {
          display: flex;
          justify-content: space-around;
          align-items: center;
          list-style: none;
          max-width: 600px;
          margin: 0 auto;
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          padding: 0.5rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          -webkit-tap-highlight-color: transparent;
        }

        .bottom-nav-item .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bottom-nav-item .label {
          font-family: 'Poppins', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .bottom-nav-item.active {
          color: #FCB216;
        }

        .bottom-nav-item.active .icon {
          transform: scale(1.2);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .navbar-links,
          .brochure-button {
            display: none;
          }

          .mobile-menu-button {
            display: flex;
          }
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 0.8rem 1rem;
          }

          .logo-image {
            width: 50px;
            height: 50px;
          }

          .mobile-menu {
            top: 60px;
          }

          /* Bottom nav only shows on mobile screens */
          .mobile-bottom-nav {
            display: block;
          }

          .mobile-menu-button {
            display: none;
          }
          
          body {
            padding-bottom: 70px;
          }
        }

        @supports not (backdrop-filter: blur(12px)) {
          .navbar.scrolled,
          .mobile-menu,
          .mobile-bottom-nav {
            background: rgba(15, 15, 15, 0.98);
          }
        }
      `}</style>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => scrollToSection('home')}>
            <div className="logo-image">
              <img
                src="/images/Logo.png"
                alt="HackOverflow Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="/docs/publicityBrochure.pdf"
            download="HO_4.0_Brochure.pdf"
            className="brochure-button"
          >
            Brochure
          </a>

          <button
            className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-menu-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(link.id)}
                >
                  <span className="icon">{getIcon(link.id)}</span>
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
          <a
            href="/docs/publicityBrochure.pdf"
            download="HO_4.0_Brochure.pdf"
            className="mobile-brochure"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Download Brochure
          </a>
        </div>
      </nav>

      <nav className="mobile-bottom-nav">
        <ul className="bottom-nav-links">
          {navLinks.slice(0, 6).map((link) => (
            <li key={link.id}>
              <button
                className={`bottom-nav-item ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => scrollToSection(link.id)}
              >
                <span className="icon">{getIcon(link.id)}</span>
                <span className="label">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;