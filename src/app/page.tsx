"use client";

import Footer from "@/components/Footer";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Schedule from "@/components/Schedule";
import KeyDates from "@/components/KeyDates";
import Special from "@/components/Special";
import Overiew from "@/components/Overview";
import Theme from "@/components/Theme";
import Gallery from "@/components/Gallery";
import Statistics from "@/components/Statistics";
import Sponsor from "@/components/sponsor";
import { GridScan } from "@/components/Gridscan";
import Teams from "@/components/Teams";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Background Video 
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
*/}

        {/* Three.js Liquid Background */}
        <div className="absolute inset-0 z-0">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#4c3578"
            gridScale={0.1}
            scanColor="#cb8a44"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
          />
        </div>

        {/*

<div className="w-full h-screen bg-black">
      <Card autoRotate={true} />
    </div>

        {/* CTA Button */}
        <div className="absolute z-10 bottom-28">
          <a
            href="#registerlinkgoogle form"
            className="cta-button"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              color: '#e75829',
              fontWeight: 600,
              padding: '14px 40px',
              fontSize: '1rem',
              borderRadius: '50px',
              border: '2px solid #e75829',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #e75829 0%, #F2A03D 100%)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(231, 88, 41, 0.4)';
              e.currentTarget.style.borderColor = '#F2A03D';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.color = '#e75829';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e75829';
            }}
          >
            <span style={{ position: 'relative', zIndex: 10 }}>Coming Soon</span>
          </a>
        </div>

      </section>

      {/* SECTIONS */}

      {/* Special */}
      <Special />

      {/* Overview */}
      <Overiew />

      {/* Gallery */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Statistics */}
      <section id="stats">
        <Statistics />
      </section>

      {/* Key Dates */}
      <KeyDates />

      {/* Sponsors */}
      <section id="sponsors">
        <Sponsor />
      </section>

      {/* FAQ */}
      <FAQ />


      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}