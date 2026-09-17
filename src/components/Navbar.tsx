import React, { useState, useEffect } from 'react';
import { IconCalendar, IconMail, IconCheckCircle } from './Icons';
import { scrollToSection } from '../utils/scroll';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sydneyTime, setSydneyTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-AU', {
          timeZone: 'Australia/Sydney',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date());
        setSydneyTime(timeStr);
      } catch {
        setSydneyTime('AEST Active');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Experience', id: 'experience' },
    { label: 'Systems', id: 'systems' },
    { label: 'Reliability', id: 'reliability' },
    { label: 'ROI Calculator', id: 'calculator' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        transition: 'all 0.25s ease',
        backgroundColor: scrolled ? 'rgba(250, 247, 242, 0.92)' : 'rgba(250, 247, 242, 0.78)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(19, 56, 38, 0.08)',
        padding: scrolled ? '0.45rem 0' : '0.65rem 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Brand Monogram & Name - Sleek single-line / compact layout */}
        <button
          type="button"
          onClick={() => scrollToSection('top')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            textAlign: 'left',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(19, 56, 38, 0.18)',
              border: '1.5px solid var(--gold-400)',
              flexShrink: 0,
              backgroundColor: 'var(--bg-warm-tint)',
            }}
          >
            <img
              src="/favicon.png"
              alt="Lauren Joyce Tugadi"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '0.98rem',
                color: 'var(--text-heading)',
                lineHeight: 1.15,
                whiteSpace: 'nowrap',
              }}
            >
              Lauren Joyce Tugadi
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                color: 'var(--text-tertiary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontWeight: 600,
                lineHeight: 1.1,
                whiteSpace: 'nowrap',
              }}
            >
              Real Estate & STRA VA
            </span>
          </div>
        </button>

        {/* Desktop Nav Links - Single Line, Sleek */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.5rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              style={{
                fontSize: '0.84rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s ease',
                padding: '0.2rem 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--green-900)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Actions: Live AEST Pill & Compact CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          {/* AEST Live indicator - Ultra sleek single line */}
          <div
            className="aest-pill"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.28rem 0.65rem',
              borderRadius: '999px',
              backgroundColor: 'var(--green-50)',
              border: '1px solid var(--green-border)',
              fontSize: '0.74rem',
              color: 'var(--green-900)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                boxShadow: '0 0 0 2.5px rgba(34, 197, 94, 0.25)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span>Sydney (AEST) {sydneyTime}</span>
          </div>

          <button
            type="button"
            onClick={onOpenContact}
            className="btn btn-primary"
            style={{
              padding: '0.45rem 1.15rem',
              fontSize: '0.82rem',
              whiteSpace: 'nowrap',
              height: '34px',
            }}
          >
            <IconCalendar size={14} />
            <span>Connect</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '34px',
              height: '34px',
              borderRadius: '7px',
              backgroundColor: 'var(--bg-warm-tint)',
              border: '1px solid var(--border-subtle)',
              cursor: 'pointer',
            }}
            className="mobile-hamburger"
          >
            <span
              style={{
                width: '16px',
                height: '2px',
                backgroundColor: 'var(--text-heading)',
                marginBottom: '3.5px',
              }}
            />
            <span
              style={{
                width: '16px',
                height: '2px',
                backgroundColor: 'var(--text-heading)',
                marginBottom: '3.5px',
              }}
            />
            <span
              style={{
                width: '16px',
                height: '2px',
                backgroundColor: 'var(--text-heading)',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-medium)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection(link.id);
              }}
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--text-heading)',
                padding: '0.4rem 0',
                border: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                background: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ paddingTop: '0.35rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <div
              style={{
                fontSize: '0.8rem',
                color: 'var(--green-900)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
              }}
            >
              <IconCheckCircle size={15} />
              Sydney (AEST): {sydneyTime} (Flexible AU Hours)
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.85rem' }}
            >
              <IconMail size={15} />
              <span>Contact Lauren Directly</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .aest-pill { display: inline-flex !important; }
          .mobile-hamburger { display: none !important; }
        }
      `}</style>
    </header>
  );
};
