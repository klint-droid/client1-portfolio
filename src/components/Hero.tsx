import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  IconCalendar,
  IconShieldCheck,
  IconCheckCircle,
  IconDownload,
  IconArrowRight,
  IconSparkles,
  IconStar,
  IconMapPin,
} from './Icons';
import { scrollToSection } from '../utils/scroll';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const { personal, metrics } = portfolioData;

  return (
    <section
      style={{
        paddingTop: '5.25rem',
        paddingBottom: '3.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soft atmospheric background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 220, 209, 0.35) 0%, rgba(250, 247, 242, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 155, 83, 0.08) 0%, rgba(250, 247, 242, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & CTAs */}
          <div>
            {/* Status Pill */}
            <div
              className="pill-badge green"
              style={{
                marginBottom: '1.25rem',
                boxShadow: '0 2px 8px rgba(19, 56, 38, 0.06)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#16a34a',
                  boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.25)',
                  display: 'inline-block',
                }}
              />
              <span>{personal.badge}</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                marginBottom: '0.85rem',
                color: 'var(--text-heading)',
              }}
            >
              Executive Assistant &{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  color: 'var(--green-850)',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                Operations Specialist
              </span>
            </h1>

            {/* Subtitle / Focus Areas */}
            <div
              style={{
                fontSize: '1.02rem',
                fontWeight: 600,
                color: 'var(--green-800)',
                marginBottom: '1.25rem',
                letterSpacing: '0.01em',
              }}
            >
              Administrative Support • Business Operations • Real Estate & Short-Term Rentals (STR)
            </div>

            {/* Bio */}
            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.68,
                color: 'var(--text-secondary)',
                marginBottom: '1.75rem',
                maxWidth: '620px',
              }}
            >
              Hi, I’m <strong>Lauren Joyce Tugadi</strong>. With <strong>8+ years of experience</strong> supporting fast-paced businesses across Australia, Dubai, and the Philippines, I provide reliable executive, administrative, and operational support that keeps teams organised and moving. My experience spans real estate, short-term rentals, reservations, HR, and business administration, giving me a versatile administrative foundation and specialised expertise in high-volume property and short-term rental operations.
            </p>

            {/* Value Points Pill Strip */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
                marginBottom: '2.25rem',
              }}
            >
              <span className="pill-badge neutral">
                <IconCheckCircle size={14} /> Homhero & PriceLabs
              </span>
              <span className="pill-badge neutral">
                <IconCheckCircle size={14} /> HubSpot CRM
              </span>
              <span className="pill-badge neutral">
                <IconSparkles size={14} /> Multi-OTA Sync (Airbnb, Booking, VRBO)
              </span>
              <span className="pill-badge neutral">
                <IconMapPin size={14} /> 40 hrs/wk • AEST Aligned
              </span>
            </div>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              <button
                type="button"
                onClick={onOpenContact}
                className="btn btn-primary"
                style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
              >
                <IconCalendar size={18} />
                <span>Book a Discovery Consultation</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('services')}
                className="btn btn-secondary"
                style={{ padding: '0.95rem 1.85rem', fontSize: '0.95rem' }}
              >
                <span>View Specializations</span>
                <IconArrowRight size={16} />
              </button>

              <a
                href="/Lauren_Joyce_Tugadi_Resume.pdf"
                download="Lauren_Joyce_Tugadi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Lauren Joyce Tugadi Resume (PDF)"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--green-900)',
                  padding: '0.5rem 0.85rem',
                  borderRadius: '6px',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--green-700)';
                  e.currentTarget.style.backgroundColor = 'var(--green-100)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--green-900)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <IconDownload size={16} />
                <span>Save CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait & Trust Floating Badges */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Background Decorative Frame */}
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '2rem',
                border: '1.5px solid var(--border-subtle)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(244,239,231,0.5) 100%)',
                zIndex: 0,
                transform: 'rotate(-1.5deg)',
              }}
            />

            {/* Main Image Container */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '400px',
                borderRadius: '1.75rem',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '4px solid #ffffff',
                backgroundColor: 'var(--bg-warm-tint)',
                aspectRatio: '3 / 4',
              }}
            >
              <img
                src="/lauren-portrait.jpg"
                alt="Lauren Joyce Tugadi - Senior Real Estate & Holiday Home Operations Virtual Assistant"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 88%',
                  display: 'block',
                }}
              />
            </div>

            {/* Floating Badge 1: Top Right - Certified & Experience */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-10px',
                zIndex: 2,
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-medium)',
                borderRadius: '1rem',
                padding: '0.85rem 1.15rem',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                maxWidth: '220px',
              }}
              className="floating-badge"
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--gold-100)',
                  color: 'var(--gold-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <IconStar size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                  8+ Years Track Record
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                  Australia & UAE Portfolios
                </div>
              </div>
            </div>

            {/* Floating Badge 2: Bottom Left - Scale */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-15px',
                zIndex: 2,
                backgroundColor: 'var(--green-950)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '1rem',
                padding: '0.9rem 1.25rem',
                boxShadow: 'var(--shadow-xl)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
              }}
              className="floating-badge"
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#4ade80',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <IconShieldCheck size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
                  800+ Holiday Homes
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-on-dark-muted)' }}>
                  Managed & Synchronized
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Banner */}
        <div
          style={{
            marginTop: '4.5rem',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '1.5rem',
            padding: '2rem 2.5rem',
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
          }}
        >
          {metrics.map((m, idx) => (
            <div
              key={m.label}
              style={{
                textAlign: 'center',
                borderRight: idx < metrics.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                paddingRight: '1rem',
              }}
              className="metric-item"
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--green-900)',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem',
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: 'var(--text-heading)',
                  marginBottom: '0.2rem',
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.4,
                }}
              >
                {m.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 768px) {
          .metric-item {
            border-right: none !important;
            padding-right: 0 !important;
            border-bottom: 1px solid var(--border-subtle);
            padding-bottom: 1.25rem;
          }
          .metric-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .floating-badge {
            position: static !important;
            margin-top: 1rem;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
