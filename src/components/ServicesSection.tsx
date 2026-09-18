import React, { useState } from 'react';
import { portfolioData, type Service } from '../data/portfolioData';
import {
  IconHome,
  IconBuilding,
  IconUsers,
  IconDollarSign,
  IconCheckCircle,
  IconArrowRight,
} from './Icons';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { services } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'stra', label: 'STRA & Holiday Homes' },
    { id: 'real-estate', label: 'Real Estate Compliance' },
    { id: 'reservations', label: 'Reservations & Concierge' },
    { id: 'finance', label: 'Finance & Invoicing' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  const getServiceIcon = (category: Service['category']) => {
    switch (category) {
      case 'stra':
        return <IconHome size={22} />;
      case 'real-estate':
        return <IconBuilding size={22} />;
      case 'reservations':
        return <IconUsers size={22} />;
      case 'finance':
        return <IconDollarSign size={22} />;
      default:
        return <IconHome size={22} />;
    }
  };

  return (
    <section id="services" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="sub-caption">Operational Specializations</span>
          <h2>Practical Operational Support for Property & Business Leaders</h2>
          <p>
            Whether you need support with day-to-day administration, operations, client coordination, or the details that keep your business moving, here is how I take the daily operational friction off your plate.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  backgroundColor: isActive ? 'var(--green-900)' : 'var(--bg-surface)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: isActive ? '1px solid var(--green-900)' : '1px solid var(--border-subtle)',
                  boxShadow: isActive ? '0 4px 12px rgba(19, 56, 38, 0.18)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="neutral-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {/* Top Row: Icon & Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--green-100)',
                      color: 'var(--green-900)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getServiceIcon(service.category)}
                  </div>

                  {service.badge && (
                    <span className="pill-badge gold" style={{ fontSize: '0.75rem' }}>
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    marginBottom: '0.4rem',
                    color: 'var(--text-heading)',
                  }}
                >
                  {service.title}
                </h3>
                <div
                  style={{
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: 'var(--green-800)',
                    marginBottom: '1rem',
                  }}
                >
                  {service.tagline}
                </div>

                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--text-tertiary)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Core Responsibilities & Deliverables
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          fontSize: '0.875rem',
                          color: 'var(--text-primary)',
                          lineHeight: 1.45,
                        }}
                      >
                        <span style={{ color: 'var(--green-700)', flexShrink: 0, marginTop: '2px' }}>
                          <IconCheckCircle size={16} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Row: Tools & Inquire CTA */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        backgroundColor: 'var(--bg-warm-tint)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--green-900)',
                    transition: 'gap 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '0.75rem')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '0.5rem')}
                >
                  <span>Delegate this role</span>
                  <IconArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
