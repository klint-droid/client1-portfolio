import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  IconWifi,
  IconBatteryCharging,
  IconLaptop,
  IconUsers,
  IconClock,
  IconShieldCheck,
  IconCheckCircle,
} from './Icons';

export const ReliabilitySection: React.FC = () => {
  const { reliability, personal } = portfolioData;

  const getReliabilityIcon = (index: number) => {
    switch (index) {
      case 0:
        return <IconWifi size={22} />;
      case 1:
        return <IconWifi size={22} />;
      case 2:
        return <IconBatteryCharging size={22} />;
      case 3:
        return <IconLaptop size={22} />;
      case 4:
        return <IconUsers size={22} />;
      case 5:
        return <IconClock size={22} />;
      default:
        return <IconShieldCheck size={22} />;
    }
  };

  return (
    <section id="reliability" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="sub-caption">Enterprise Continuity</span>
          <h2>Zero-Downtime Infrastructure & Remote Readiness</h2>
          <p>
            When managing guest check-ins, urgent maintenance calls, and real-time OTA pricing, reliability is non-negotiable.
            Here is the enterprise remote setup powering my daily work.
          </p>
        </div>

        {/* Big Grid of 6 Reliability Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem',
          }}
        >
          {reliability.specs.map((item, idx) => (
            <div
              key={item.title}
              className="neutral-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg-surface)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
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
                    {getReliabilityIcon(idx)}
                  </div>
                  <span className="pill-badge green" style={{ fontSize: '0.74rem' }}>
                    {item.badge}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 700,
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.value}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {item.sub}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.78rem',
                  color: 'var(--green-800)',
                  fontWeight: 600,
                }}
              >
                <IconCheckCircle size={15} /> Verified Hardware & Redundancy
              </div>
            </div>
          ))}
        </div>

        {/* Timezone & Availability Strip */}
        <div
          className="green-card"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            padding: '2.5rem',
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
              <span className="pill-badge gold" style={{ fontSize: '0.75rem' }}>
                <IconClock size={13} /> Synchronized Operations
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-on-dark-muted)' }}>
                {personal.timezoneOffset}
              </span>
            </div>
            <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Aligned with Australian & UAE Business Cycles
            </h3>
            <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.95rem' }}>
              Working standard hours across Sydney, Melbourne, Brisbane (AEST), and Dubai (GST). Instant Slack, WhatsApp, and email response times during active property turnovers and morning check-outs.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              padding: '1.25rem 1.75rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <div style={{ fontSize: '0.8rem', color: 'var(--gold-400)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Current Capacity Status
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>
              Accepting Full-Time & Retainer Contracts
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-on-dark-muted)' }}>
              Fast onboarding: Active within 48-72 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
