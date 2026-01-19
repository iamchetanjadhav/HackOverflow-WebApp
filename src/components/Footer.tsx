import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: "https://www.instagram.com/hackoverflow3.0/"
    },
    {
      name: "Youtube",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      url: "https://google.com"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: "https://www.linkedin.com/company/hackoverflow3-0/"
    },
    {
      name: "Discord",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
        </svg>
      ),
      url: "https://discord.gg/your-discord"
    }
  ];

  const quickLinks = [
    { name: "About", url: "/#about" },
    { name: "Schedule", url: "/#schedule" },
    { name: "Themes", url: "/#themes" },
    { name: "Sponsors", url: "/#sponsors" },
    { name: "Gallery", url: "/gallery" }
  ];

  const resources = [
    { name: "Publicity Brochure", file: "HO_4.0_Brochure.pdf", path: "/docs/publicityBrochure.pdf" },
    { name: "Sponsorship Brochure", file: "HO_4.0_Sponsorship_Brochure.pdf", path: "/docs/SponsorshipBrochure.pdf" },
    { name: "Code of Conduct", file: "Code_of_Conduct.pdf", path: "/docs/COC.pdf" }
  ];

  return (
    <footer className="footer">
      <style>{`
        .footer {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
          color: #ffffff;
          padding: 4rem 0 0;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
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

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem 3rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          position: relative;
          z-index: 1;
        }

        .footer-section h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #e75829 0%, #FFD47C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-section h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #FFD47C;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-section p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
        }

        .footer-logo {
          width: 80px;
          height: 80px;
          margin-bottom: 1rem;
          background: rgba(231, 88, 41, 0.1);
          border: 2px solid rgba(231, 88, 41, 0.3);
          border-radius: 16px;
          padding: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .footer-logo:hover {
          background: rgba(231, 88, 41, 0.15);
          border-color: #e75829;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(231, 88, 41, 0.2);
        }

        .footer-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .social-links a {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #FFD47C;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-links a:hover {
          background: rgba(231, 88, 41, 0.08);
          border-color: rgba(231, 88, 41, 0.4);
          color: #e75829;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(231, 88, 41, 0.2);
        }

        .quick-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .quick-links li {
          margin-bottom: 0.75rem;
        }

        .quick-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: inline-block;
          position: relative;
          padding-left: 1.2rem;
        }

        .quick-links a::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #e75829;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .quick-links a:hover {
          color: #FFD47C;
          padding-left: 1.5rem;
        }

        .quick-links a:hover::before {
          opacity: 1;
        }

        .footer-bottom {
          border-top: 1px solid rgba(231, 88, 41, 0.2);
          padding: 2rem;
          text-align: center;
          background: rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
        }

        .footer-bottom p {
          margin: 0;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
        }

        .email-link {
          color: #FFD47C;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .email-link:hover {
          color: #e75829;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 0;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 0 1.5rem 2rem;
          }

          .footer-section h3 {
            font-size: 1.3rem;
          }

          .footer-section h4 {
            font-size: 1rem;
          }

          .social-links {
            justify-content: flex-start;
          }

          .social-links a {
            width: 42px;
            height: 42px;
          }

          .footer-bottom {
            padding: 1.5rem 1rem;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-section {
          animation: fadeInUp 0.6s ease forwards;
        }

        .footer-section:nth-child(1) { animation-delay: 0.1s; }
        .footer-section:nth-child(2) { animation-delay: 0.2s; }
        .footer-section:nth-child(3) { animation-delay: 0.3s; }
        .footer-section:nth-child(4) { animation-delay: 0.4s; }
      `}</style>

      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-section">
          <div className="footer-logo">
            <img
              src="/images/Logo.png"
              alt="HackOverflow 4.0 Logo"
              loading="lazy"
            />
          </div>
          <h3>HackOverflow 4.0</h3>
          <p>
            HackOverflow 4.0 is a premier 3-day national level hackathon organized by PHCET.
            It's a celebration of innovation, collaboration, and technology.
          </p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h4>Navigation Links</h4>
          <ul className="quick-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Resources</h4>
          <ul className="quick-links">
            {resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.path} download={resource.file}>
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>

          <h4 style={{ marginTop: "1.5rem" }}>Venue</h4>
          <p>
            Pillai HOC College of Engineering and Technology,
            Rasayani, Maharashtra - 410207
          </p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            Email:{" "}
            <a
              href="mailto:admin@hackoverflow.tech"
              className="email-link"
            >
              admin@hackoverflow.tech
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 HackOverflow 4.0. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;