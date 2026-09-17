import React, { useState } from 'react';
import { portfolioData, type ExperienceItem } from '../data/portfolioData';
import {
  IconCheckCircle,
  IconMapPin,
  IconCalendar,
  IconShieldCheck,
  IconStar,
} from './Icons';

export const ExperienceTimeline: React.FC = () => {
  const { experience } = portfolioData;
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number>(0);

  const activeRole: ExperienceItem = experience[selectedRoleIndex];

  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="sub-caption">Track Record & Career Milestones</span>
          <h2>Proven Operational Leadership Across 8+ Years</h2>
          <p>
            From high-growth Australian regional holiday homes to Dubai’s premier 800+ luxury rental portfolios,
            every role has sharpened precision, speed, and regulatory excellence.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
          }}
          className="experience-layout"
        >
          {/* Navigation / Role Selector Column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            {experience.map((item, idx) => {
              const isSelected = selectedRoleIndex === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedRoleIndex(idx)}
                  style={{
                    textAlign: 'left',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '1rem',
                    border: isSelected ? '1.5px solid var(--green-800)' : '1px solid var(--border-subtle)',
                    backgroundColor: isSelected ? 'var(--bg-surface)' : 'rgba(255, 255, 255, 0.5)',
                    boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  {isSelected && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '15%',
                        bottom: '15%',
                        width: '4px',
                        backgroundColor: 'var(--green-800)',
                        borderRadius: '0 4px 4px 0',
                      }}
                    />
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: isSelected ? 'var(--green-850)' : 'var(--text-tertiary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {item.period}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        backgroundColor: isSelected ? 'var(--green-100)' : 'var(--bg-warm-tint)',
                        color: isSelected ? 'var(--green-900)' : 'var(--text-secondary)',
                        fontWeight: 600,
                      }}
                    >
                      {item.location}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: isSelected ? 'var(--text-heading)' : 'var(--text-primary)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {item.company}
                  </div>

                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {item.role}
                  </div>

                  <div
                    style={{
                      marginTop: '0.5rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      color: 'var(--gold-600)',
                    }}
                  >
                    <IconStar size={13} /> {item.highlightMetric}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Role Breakdown Card */}
          <div
            className="neutral-card"
            style={{
              padding: '2.5rem',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '1rem',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '1.5rem',
                marginBottom: '1.75rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                  <span className="pill-badge green">{activeRole.type}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <IconMapPin size={14} /> {activeRole.location}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <IconCalendar size={14} /> {activeRole.period}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.65rem', color: 'var(--text-heading)', marginBottom: '0.25rem' }}>
                  {activeRole.role}
                </h3>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--green-900)' }}>
                  {activeRole.company}
                </div>
              </div>

              {/* Highlight Pill */}
              <div
                style={{
                  backgroundColor: 'var(--gold-100)',
                  border: '1px solid var(--gold-border)',
                  padding: '0.6rem 1rem',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <IconShieldCheck size={18} className="text-gold" />
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--gold-600)' }}>
                    Scale Milestone
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                    {activeRole.highlightMetric}
                  </div>
                </div>
              </div>
            </div>

            {/* Role Executive Summary */}
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.68,
                color: 'var(--text-primary)',
                marginBottom: '1.75rem',
                padding: '1rem 1.25rem',
                borderRadius: '10px',
                backgroundColor: 'var(--bg-warm-tint)',
                borderLeft: '3px solid var(--green-800)',
              }}
            >
              {activeRole.summary}
            </p>

            {/* Key Responsibilities & Achievements */}
            <div style={{ marginBottom: '2rem' }}>
              <h4
                style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontWeight: 700,
                  color: 'var(--text-tertiary)',
                  marginBottom: '1rem',
                }}
              >
                Verified Operational Scope & Results
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {activeRole.achievements.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.925rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.55,
                    }}
                  >
                    <span style={{ color: 'var(--green-800)', flexShrink: 0, marginTop: '2px' }}>
                      <IconCheckCircle size={16} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech & Frameworks in this role */}
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontWeight: 700,
                  color: 'var(--text-tertiary)',
                  marginBottom: '0.65rem',
                }}
              >
                Systems & Tools Utilized
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {activeRole.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      backgroundColor: 'var(--green-50)',
                      color: 'var(--green-900)',
                      border: '1px solid var(--green-border)',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 920px) {
          .experience-layout {
            grid-template-columns: 0.9fr 1.3fr !important;
          }
        }
      `}</style>
    </section>
  );
};
