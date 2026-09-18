import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  IconMail,
  IconPhone,
  IconExternalLink,
  IconCheckCircle,
  IconShieldCheck,
} from './Icons';
import { scrollToSection } from '../utils/scroll';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const { personal } = portfolioData;

  return (
    <footer
      style={{
        backgroundColor: 'var(--green-950)',
        color: '#ffffff',
        padding: '5rem 0 3rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Pre-Footer Big CTA Ribbon */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '1.5rem',
            padding: '3rem 2.5rem',
            marginBottom: '4.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <span className="pill-badge gold" style={{ marginBottom: '0.75rem', fontSize: '0.76rem' }}>
              <IconShieldCheck size={14} /> Immediate Capacity
            </span>
            <h3 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Ready to automate and stabilize your property operations?
            </h3>
            <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.98rem' }}>
              Directly supporting holiday home operators, property managers, and real estate principals across Australia and the UAE.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenContact}
            style={{
              backgroundColor: 'var(--gold-500)',
              color: 'var(--green-950)',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '1rem 2.25rem',
              borderRadius: '999px',
              boxShadow: '0 8px 24px rgba(197, 155, 83, 0.35)',
              transition: 'transform 0.2s, background-color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--gold-400)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--gold-500)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Start a Conversation
          </button>
        </div>

        {/* Footer Navigation Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Col 1: Bio */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1.5px solid var(--gold-400)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img
                  src="/favicon.png"
                  alt="Lauren Joyce Tugadi"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>
                Lauren Joyce Tugadi
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-on-dark-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Senior Real Estate & Holiday Home Operations Virtual Assistant with 8+ years experience supporting 1,030+ properties across Australia and the UAE.
            </p>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-on-dark-muted)' }}>
              Laguna, Philippines • Flexible AU (AEST) Hours
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-400)', marginBottom: '1.25rem' }}>
              Sections
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-on-dark-muted)' }}>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('services')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    color: 'var(--text-on-dark-muted)',
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}
                >
                  Core Specializations
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('experience')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    color: 'var(--text-on-dark-muted)',
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}
                >
                  Career & Case Milestones
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('systems')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    color: 'var(--text-on-dark-muted)',
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}
                >
                  Software Ecosystem
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('reliability')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    color: 'var(--text-on-dark-muted)',
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}
                >
                  Zero-Downtime Guarantee
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('calculator')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    color: 'var(--text-on-dark-muted)',
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}
                >
                  Admin Cost Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-400)', marginBottom: '1.25rem' }}>
              Get in Touch
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--text-on-dark-muted)' }}>
              <a
                href={`mailto:${personal.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}
              >
                <IconMail size={16} />
                <span>{personal.email}</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IconPhone size={16} />
                <span>{personal.phone}</span>
              </div>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}
              >
                <IconExternalLink size={16} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-on-dark-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Lauren Joyce Tugadi. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <IconCheckCircle size={14} style={{ color: '#4ade80' }} /> 500 Mbps Fiber
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <IconCheckCircle size={14} style={{ color: '#4ade80' }} /> 4-Hr UPS Backup
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <IconCheckCircle size={14} style={{ color: '#4ade80' }} /> AEST Aligned
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
